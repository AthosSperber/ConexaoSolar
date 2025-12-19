export type TrackParams = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: TrackParams = {}) {
  if (import.meta.env.DEV) {
    console.debug('[track]', event, params);
    return;
  }

  if (typeof window === 'undefined') return;

  const payload = { event, ...params };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
    return;
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params);
  }
}
