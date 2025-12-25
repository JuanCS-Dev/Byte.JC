// Animation configuration constants
// Centralized to avoid magic numbers and ensure consistency

export const ANIMATION_CONFIG = {
  // Lenis smooth scroll
  lenis: {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  },

  // GSAP ScrollTrigger
  scrollTrigger: {
    scrub: 1,
  },

  // Glitch effect
  glitch: {
    duration: 0.05,
    repeat: 3,
    settleDuration: 0.2,
  },

  // Magnetic button
  magnetic: {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
    defaultStrength: 0.5,
  },

  // Image transitions
  imageTransition: {
    scaleDuration: 0.4,
    hueRotateDuration: 0.4,
  },

  // Typography kinetic
  typography: {
    lightWeight: 200,
    heavyWeight: 800,
    lightLetterSpacing: '0.1em',
    heavyLetterSpacing: '-0.05em',
    settleDuration: 0.8,
  },
} as const;

// Layout constants
export const LAYOUT_CONFIG = {
  gridSize: 50, // px
  mobileBreakpoint: 768, // px
} as const;
