export type ConsultantProfile = {
  id: string;
  name: string;
  brand: {
    short: string;
    title: string;
    tagline: string;
  };
  badge?: {
    text: string;
  };
  photo?: {
    src: string;
    alt: string;
  };
  about: {
    heading: string;
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  whatsapp?: {
    number?: string;
    defaultMessage?: string;
  };
  seo?: {
    title?: string;
    description?: string;
    ogImage?: string;
    canonicalUrl?: string;
  };
};
