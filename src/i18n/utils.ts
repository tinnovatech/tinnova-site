import { getRelativeLocaleUrl } from 'astro:i18n';
import { DEFAULT_LOCALE, LOCALES, LOCALE_META, type Locale } from './config';
import ptBR from './locales/pt-BR.json';
import en from './locales/en.json';
import es from './locales/es.json';

type Dictionary = Record<string, unknown>;

const dictionaries: Record<Locale, Dictionary> = {
  'pt-BR': ptBR,
  en,
  es,
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

function lookup(dict: Dictionary, key: string): unknown {
  return key.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, dict);
}

function interpolate(value: string, vars?: Record<string, string>): string {
  if (!vars) return value;
  return Object.entries(vars).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, v), value);
}

/**
 * Returns a translation function bound to a locale. Falls back to the default
 * locale, and finally to the raw key, if a string is missing anywhere in the chain.
 */
export function useTranslations(locale: Locale) {
  return function t<T = string>(key: string, vars?: Record<string, string>): T {
    const value = lookup(dictionaries[locale], key) ?? lookup(dictionaries[DEFAULT_LOCALE], key) ?? key;
    if (typeof value === 'string') return interpolate(value, vars) as unknown as T;
    return value as T;
  };
}

/** Strips a leading locale segment (e.g. "/en/foo/") from a pathname, returning "/foo/". */
export function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length && isLocale(segments[0])) segments.shift();
  const suffix = segments.join('/');
  return suffix ? `/${suffix}/` : '/';
}

/**
 * Builds an href for a path under a given locale. Handles same-page anchors
 * (e.g. "#hero") manually, since Astro's own trailing-slash handling would
 * otherwise corrupt a hash fragment; delegates real page paths to Astro's
 * native `getRelativeLocaleUrl` so the result always matches the actual build output.
 */
export function localeHref(locale: Locale, path: string): string {
  if (path.startsWith('#')) {
    const base = locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
    return `${base}${path}`;
  }
  return getRelativeLocaleUrl(locale, path);
}

export interface LocaleLink {
  locale: Locale;
  meta: (typeof LOCALE_META)[Locale];
  href: string;
}

/**
 * Builds the equivalent URL of the current page in every configured locale,
 * relying on Astro's native locale routing (same slug, locale-prefixed folder).
 */
export function getLocalizedLinks(pathname: string): LocaleLink[] {
  const suffix = stripLocaleFromPath(pathname);
  return LOCALES.map((locale) => ({
    locale,
    meta: LOCALE_META[locale],
    href: getRelativeLocaleUrl(locale, suffix),
  }));
}
