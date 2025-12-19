import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_CONSULTANT } from './consultant.defaults';
import type { ConsultantProfile } from './consultant.types';

let cachedProfile: ConsultantProfile | null | undefined;
let cachedSource: string | undefined;

function isValidProfile(json: ConsultantProfile | null): json is ConsultantProfile {
  return !!json?.id && !!json?.name && !!json?.brand?.title;
}

function getConsultantIdFromEnv(): string | null {
  const id = import.meta.env.VITE_CONSULTANT_ID?.trim();
  return id ? id : null;
}

async function fetchJson(pathname: string): Promise<ConsultantProfile | null> {
  try {
    const response = await fetch(pathname, { cache: 'no-store' });
    if (!response.ok) return null;
    const json = (await response.json()) as ConsultantProfile;
    return isValidProfile(json) ? json : null;
  } catch {
    return null;
  }
}

async function fetchConsultantProfile(): Promise<{ profile: ConsultantProfile | null; source: string } | null> {
  if (cachedProfile !== undefined) {
    return { profile: cachedProfile, source: cachedSource || 'memory-cache' };
  }

  const id = getConsultantIdFromEnv();
  const preferredPath = id ? `/consultant.${id}.json` : null;
  const fallbackPath = '/consultant.json';

  if (preferredPath) {
    const preferred = await fetchJson(preferredPath);
    if (preferred) {
      cachedProfile = preferred;
      cachedSource = preferredPath;
      return { profile: preferred, source: preferredPath };
    }
    console.warn(
      `[consultant] Failed to load ${preferredPath}; falling back to ${fallbackPath}. Check VITE_CONSULTANT_ID=${id}.`
    );
  }

  const fallback = await fetchJson(fallbackPath);
  cachedProfile = fallback;
  cachedSource = fallbackPath;
  return { profile: fallback, source: fallbackPath };
}

type ConsultantContextValue = {
  consultant: ConsultantProfile;
  loadedFromFile: boolean;
};

const ConsultantContext = createContext<ConsultantContextValue | null>(null);

export function ConsultantProvider({ children }: { children: React.ReactNode }) {
  const [consultant, setConsultant] = useState<ConsultantProfile>(DEFAULT_CONSULTANT);
  const [loadedFromFile, setLoadedFromFile] = useState(false);

  useEffect(() => {
    let active = true;
    void (async () => {
      const result = await fetchConsultantProfile();
      const profile = result?.profile;
      if (!active || !profile) return;
      setConsultant(profile);
      setLoadedFromFile(true);
    })();

    return () => {
      active = false;
    };
  }, []);

  const value = useMemo(() => ({ consultant, loadedFromFile }), [consultant, loadedFromFile]);
  return <ConsultantContext.Provider value={value}>{children}</ConsultantContext.Provider>;
}

export function useConsultant() {
  const ctx = useContext(ConsultantContext);
  if (!ctx) {
    return { consultant: DEFAULT_CONSULTANT, loadedFromFile: false };
  }
  return ctx;
}
