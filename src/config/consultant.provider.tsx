import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_CONSULTANT } from './consultant.defaults';
import type { ConsultantProfile } from './consultant.types';

async function fetchConsultantProfile(): Promise<ConsultantProfile | null> {
  try {
    const response = await fetch('/consultant.json', { cache: 'no-store' });
    if (!response.ok) return null;
    const json = (await response.json()) as ConsultantProfile;
    if (!json?.id || !json?.name || !json?.brand?.title) return null;
    return json;
  } catch {
    return null;
  }
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
      const profile = await fetchConsultantProfile();
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
