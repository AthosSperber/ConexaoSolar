export type SnapshotNature = 'historical' | 'simulation';

export interface SnapshotSource {
  repo: string;
  commit: string;
  events_log: string;
}

export interface SnapshotMetric {
  key: string;
  label: string;
  value: number;
  unit: string;
}

export interface SnapshotLinks {
  report_html?: string;
  repo_consumer: string;
}

export interface GovernedSnapshot {
  schema_version: string;
  domain: string;
  nature: SnapshotNature;
  generated_at: string;
  source: SnapshotSource;
  metrics: SnapshotMetric[];
  notes: string[];
  links: SnapshotLinks;
}

const DEFAULT_SNAPSHOT_URL =
  'https://athossperber.github.io/governanca-system/governed_snapshot_conexao_solar.json';

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isString = (value: unknown): value is string => typeof value === 'string';
const isNumber = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value);

const assertRequiredString = (value: unknown, field: string): string => {
  if (!isString(value) || value.trim().length === 0) {
    throw new Error(`Campo obrigatório inválido: ${field}`);
  }
  return value;
};

const parseSnapshotMetric = (metric: unknown, index: number): SnapshotMetric => {
  if (!isRecord(metric)) {
    throw new Error(`Métrica inválida no índice ${index}`);
  }

  const numericValue = isNumber(metric.value) ? metric.value : Number(metric.value);
  if (!Number.isFinite(numericValue)) {
    throw new Error(`Valor inválido em metrics[${index}].value`);
  }

  return {
    key: assertRequiredString(metric.key, `metrics[${index}].key`),
    label: assertRequiredString(metric.label, `metrics[${index}].label`),
    value: numericValue,
    unit: assertRequiredString(metric.unit, `metrics[${index}].unit`),
  };
};

const parseSnapshotLinks = (links: unknown): SnapshotLinks => {
  if (!isRecord(links)) {
    throw new Error('Links inválidos');
  }

  const repoConsumer = assertRequiredString(links.repo_consumer, 'links.repo_consumer');
  const reportHtml = isString(links.report_html) ? links.report_html : undefined;

  return {
    repo_consumer: repoConsumer,
    report_html: reportHtml,
  };
};

const parseSnapshot = (data: unknown): GovernedSnapshot => {
  if (!isRecord(data)) {
    throw new Error('Snapshot inválido');
  }

  const nature = assertRequiredString(data.nature, 'nature');
  if (nature !== 'historical' && nature !== 'simulation') {
    throw new Error('Nature inválida');
  }

  const metrics = Array.isArray(data.metrics)
    ? data.metrics.map(parseSnapshotMetric)
    : [];

  if (metrics.length === 0) {
    throw new Error('Snapshot sem métricas');
  }

  const notes = Array.isArray(data.notes)
    ? data.notes.filter(isString)
    : [];

  const source = data.source;
  if (!isRecord(source)) {
    throw new Error('Source inválido');
  }

  return {
    schema_version: assertRequiredString(data.schema_version, 'schema_version'),
    domain: assertRequiredString(data.domain, 'domain'),
    nature,
    generated_at: assertRequiredString(data.generated_at, 'generated_at'),
    source: {
      repo: assertRequiredString(source.repo, 'source.repo'),
      commit: assertRequiredString(source.commit, 'source.commit'),
      events_log: assertRequiredString(source.events_log, 'source.events_log'),
    },
    metrics,
    notes,
    links: parseSnapshotLinks(data.links),
  };
};

export const getGovernedSnapshotUrl = (): string => {
  return import.meta.env.VITE_GOVERNANCA_SNAPSHOT_URL ?? DEFAULT_SNAPSHOT_URL;
};

export const fetchGovernedSnapshot = async (url: string): Promise<GovernedSnapshot> => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Falha ao buscar snapshot: ${response.status}`);
  }

  const data = (await response.json()) as unknown;
  return parseSnapshot(data);
};
