/**
 * Image for each solution in the home "Como ajudamos" panels, cut from that
 * solution's hero. `focus` is the object-position that keeps the subject in
 * frame when the panel is a narrow vertical strip.
 */
export const SERVICE_IMAGES: Record<string, { src: string; srcset: string; focus: string }> = {
  'consultoria-de-ti': {
    src: '/images/servicos/consultoria-de-ti-1200.webp',
    srcset: '/images/servicos/consultoria-de-ti-1200.webp 1200w, /images/servicos/consultoria-de-ti-2400.webp 2400w',
    focus: '58% 50%',
  },
  'servicos-de-ti-gerenciados': {
    src: '/images/servicos/servicos-de-ti-gerenciados-1200.webp',
    srcset: '/images/servicos/servicos-de-ti-gerenciados-1200.webp 1200w, /images/servicos/servicos-de-ti-gerenciados-2400.webp 2400w',
    focus: '74% 50%',
  },
  outsourcing: {
    src: '/images/servicos/outsourcing-1200.webp',
    srcset: '/images/servicos/outsourcing-1200.webp 1200w, /images/servicos/outsourcing-2000.webp 2000w',
    focus: '50% 50%',
  },
  'poc-mvp': {
    src: '/images/servicos/poc-mvp-1200.webp',
    srcset: '/images/servicos/poc-mvp-1200.webp 1200w, /images/servicos/poc-mvp-2400.webp 2400w',
    focus: '60% 50%',
  },
  'design-de-produto': {
    src: '/images/servicos/design-de-produto-1200.webp',
    srcset: '/images/servicos/design-de-produto-1200.webp 1200w, /images/servicos/design-de-produto-2400.webp 2400w',
    focus: '50% 50%',
  },
};

export interface ServiceItem {
  slug: string;
  tag: string;
  title: string;
  text: string;
}
