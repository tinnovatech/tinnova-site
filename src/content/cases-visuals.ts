/**
 * Image and client logo for each home case, in the same order as `cases.items`.
 * `focus` is the desktop object-position. The 3:2 photos fill a 620px-tall card
 * (930px wide), so `calc(50% - 80px)` puts a subject sitting ~59% across the
 * photo (throttle, card machine) in the card's center at any card width.
 */
export const CASE_VISUALS = [
  {
    image: '/images/case-embraer.webp',
    focus: 'calc(50% - 80px) 50%',
    logo: '/logos/embraer-logo.svg',
    logoStyle: 'height:16px;width:auto;display:block;filter:brightness(0) invert(1);',
  },
  {
    image: '/images/case-serasa.webp',
    focus: '50% 50%',
    logo: '/logos/serasa-logo.svg',
    logoStyle: 'height:25px;width:auto;display:block;filter:brightness(0) invert(1);object-fit:contain;max-width:100%;',
  },
  {
    image: '/images/case-pagseguro.webp',
    focus: 'calc(50% - 140px) 50%',
    logo: '/logos/pagseguro-logo.svg',
    logoStyle: 'height:22px;width:auto;display:block;',
  },
];

export interface CaseItem {
  logoAlt: string;
  eyebrow: string;
  title: string;
  text: string;
}
