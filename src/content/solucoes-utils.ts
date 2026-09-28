import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, SOLUTIONS_ORDER, type Locale } from '../i18n/config';

export interface LocalizedSolucaoEntry {
  slug: string;
  data: CollectionEntry<'solucoes'>['data'];
}

/** Returns the "solucoes" entries for a given locale, keyed by their locale-agnostic slug. */
export async function getSolucoesForLocale(locale: Locale): Promise<LocalizedSolucaoEntry[]> {
  const all = await getCollection('solucoes');
  const prefix = locale === DEFAULT_LOCALE ? '' : `${locale}/`;

  const entries = all
    .filter((entry) => (prefix ? entry.id.startsWith(prefix) : !entry.id.includes('/')))
    .map((entry) => ({
      slug: prefix ? entry.id.slice(prefix.length) : entry.id,
      data: entry.data,
    }));

  return entries.sort(
    (a, b) => SOLUTIONS_ORDER.indexOf(a.slug as (typeof SOLUTIONS_ORDER)[number]) -
      SOLUTIONS_ORDER.indexOf(b.slug as (typeof SOLUTIONS_ORDER)[number]),
  );
}

export async function getSolucaoBySlug(locale: Locale, slug: string): Promise<LocalizedSolucaoEntry | undefined> {
  const entries = await getSolucoesForLocale(locale);
  return entries.find((entry) => entry.slug === slug);
}
