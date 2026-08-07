/**
 * ---------------------------------------------------------------------------
 * IMAGERY
 * ---------------------------------------------------------------------------
 * All files live in /public/images/ and ship with the site — nothing is
 * hotlinked, so nothing can break at runtime.
 *
 * These are freely-licensed photographs of Italian university architecture
 * (CC BY-SA 4.0 — see /public/images/CREDITS.md for author and licence per
 * file). They are placeholders in the sense that you may prefer your own
 * licensed photography; if you swap a file, keep the same filename and
 * everything updates automatically.
 *
 * `SmartImage` falls back to a branded panel if a file is ever missing.
 * ---------------------------------------------------------------------------
 */

export const IMAGES = {
  heroPrimary: {
    src: '/images/hero-courtyard.jpg',
    alt: 'The colonnaded Renaissance courtyard of a historic Italian university',
  },
  heroSecondary: {
    src: '/images/hero-detail.jpg',
    alt: 'Arched loggia and clock tower of a historic university building in Bologna, Italy',
  },
  about: {
    src: '/images/about-portal.jpg',
    alt: 'A student walking past the stone entrance portal of a historic university in Padua, Italy',
  },
  services: {
    src: '/images/services-portico.jpg',
    alt: 'Vaulted stone portico in a university district in Bologna, Italy, lit at dusk',
  },
  scholarships: {
    src: '/images/scholarships-detail.jpg',
    alt: 'Street lamp and an anniversary banner on a university building facade in Padua, Italy',
  },
  visualBreak: {
    src: '/images/italy-campus-wide.jpg',
    alt: 'Arcaded inner courtyard of a historic Italian university seen through a stone archway',
  },
  finalCta: {
    src: '/images/italy-final.jpg',
    alt: 'Canal bridge beside a historic university entrance in Venice, Italy',
  },
};
