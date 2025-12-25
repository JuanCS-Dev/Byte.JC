import '@testing-library/jest-dom';

// Mock GSAP for testing
vi.mock('gsap', () => ({
  default: {
    registerPlugin: vi.fn(),
    to: vi.fn(),
    fromTo: vi.fn(),
    quickTo: vi.fn(() => vi.fn()),
    context: vi.fn(() => ({ revert: vi.fn() })),
    matchMedia: vi.fn(() => ({ add: vi.fn(), revert: vi.fn() })),
    utils: {
      toArray: vi.fn(() => []),
    },
  },
  ScrollTrigger: {
    create: vi.fn(),
  },
}));

// Mock Lenis for testing
vi.mock('lenis', () => ({
  default: vi.fn().mockImplementation(() => ({
    raf: vi.fn(),
    destroy: vi.fn(),
  })),
}));

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
