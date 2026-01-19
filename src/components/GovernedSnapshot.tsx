import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  fetchGovernedSnapshot,
  getGovernedSnapshotUrl,
  type GovernedSnapshot,
} from '../services/governancaSnapshot';

const formatGeneratedAt = (value: string): string => {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(parsed);
};

const natureLabelMap: Record<GovernedSnapshot['nature'], string> = {
  historical: 'Histórico',
  simulation: 'Simulação',
};

export default function GovernedSnapshot() {
  const snapshotUrl = useMemo(() => getGovernedSnapshotUrl(), []);
  const [snapshot, setSnapshot] = useState<GovernedSnapshot | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const loadSnapshot = useCallback(async () => {
    setStatus('loading');
    setErrorMessage(null);

    try {
      const data = await fetchGovernedSnapshot(snapshotUrl);
      setSnapshot(data);
      setStatus('success');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Erro desconhecido ao carregar.';
      setErrorMessage(message);
      setStatus('error');
    }
  }, [snapshotUrl]);

  useEffect(() => {
    void loadSnapshot();
  }, [loadSnapshot]);

  if (status === 'loading' || status === 'idle') {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={`snapshot-skeleton-${index}`}
            className="animate-pulse rounded-2xl border border-emerald-100 bg-white/80 p-6 shadow-sm dark:border-emerald-900/40 dark:bg-gray-900/70"
          >
            <div className="mb-4 h-4 w-24 rounded-full bg-emerald-100/70 dark:bg-emerald-900/40" />
            <div className="h-7 w-20 rounded-lg bg-emerald-100/70 dark:bg-emerald-900/40" />
            <div className="mt-3 h-4 w-32 rounded-full bg-emerald-100/70 dark:bg-emerald-900/40" />
          </div>
        ))}
      </div>
    );
  }

  if (status === 'error' || !snapshot) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-700 shadow-sm dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200">
        <p className="font-semibold">Não foi possível carregar o snapshot governado.</p>
        {errorMessage && <p className="mt-2 text-xs text-red-600 dark:text-red-200">{errorMessage}</p>}
        <button
          type="button"
          onClick={loadSnapshot}
          className="mt-4 inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-red-700"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 rounded-2xl border border-emerald-100 bg-white/80 p-5 shadow-sm dark:border-emerald-900/40 dark:bg-gray-900/70 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
            <span className="rounded-full bg-emerald-100 px-3 py-1 dark:bg-emerald-900/50">
              {snapshot.domain}
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 dark:bg-emerald-900/20">
              {natureLabelMap[snapshot.nature]}
            </span>
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            Gerado em <span className="font-semibold">{formatGeneratedAt(snapshot.generated_at)}</span>
          </p>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          <p>
            Fonte: <span className="font-semibold">{snapshot.source.repo}</span>
          </p>
          <p className="truncate">Commit: {snapshot.source.commit}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {snapshot.metrics.map((metric) => (
          <div
            key={metric.key}
            className="rounded-2xl border border-emerald-100 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-emerald-900/40 dark:bg-gray-900/80"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
              {metric.label}
            </p>
            <p className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              {metric.value}
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{metric.unit}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-3 text-sm text-gray-600 dark:text-gray-300 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          {snapshot.notes.slice(0, 2).map((note) => (
            <p key={note}>• {note}</p>
          ))}
        </div>
        {snapshot.links.report_html && (
          <a
            href={snapshot.links.report_html}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-200 dark:hover:bg-emerald-900/40"
          >
            Ver relatório completo
          </a>
        )}
      </div>
    </div>
  );
}
