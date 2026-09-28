export const LOCALES = ['pt-BR', 'en', 'es'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'pt-BR';

export interface LocaleMeta {
  code: Locale;
  /** Native name of the language, always shown in its own language regardless of the current locale. */
  label: string;
  flag: string;
  /** BCP 47 tag used for the hreflang / html lang attributes. */
  hreflang: string;
  /** Open Graph locale tag (og:locale). */
  ogLocale: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  'pt-BR': { code: 'pt-BR', label: 'Português', flag: '🇧🇷', hreflang: 'pt-BR', ogLocale: 'pt_BR' },
  en: { code: 'en', label: 'English', flag: '🇺🇸', hreflang: 'en', ogLocale: 'en_US' },
  es: { code: 'es', label: 'Español', flag: '🇪🇸', hreflang: 'es', ogLocale: 'es_LA' },
};

/** Fixed display order for the language selector and for solution links across the site. */
export const SOLUTIONS_ORDER = [
  'consultoria-de-ti',
  'outsourcing',
  'poc-mvp',
  'design-de-produto',
  'servicos-de-ti-gerenciados',
] as const;
