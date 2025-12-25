import { describe, it, expect } from 'vitest';
import { ANIMATION_CONFIG, LAYOUT_CONFIG } from './animation';

describe('ANIMATION_CONFIG', () => {
  it('should have valid lenis duration', () => {
    expect(ANIMATION_CONFIG.lenis.duration).toBeGreaterThan(0);
    expect(ANIMATION_CONFIG.lenis.duration).toBeLessThanOrEqual(3);
  });

  it('should have valid easing function', () => {
    const easing = ANIMATION_CONFIG.lenis.easing;
    expect(typeof easing).toBe('function');
    expect(easing(0)).toBeCloseTo(0, 2);
    expect(easing(1)).toBeCloseTo(1, 2);
  });

  it('should have valid magnetic config', () => {
    expect(ANIMATION_CONFIG.magnetic.duration).toBeGreaterThan(0);
    expect(ANIMATION_CONFIG.magnetic.defaultStrength).toBeGreaterThan(0);
    expect(ANIMATION_CONFIG.magnetic.defaultStrength).toBeLessThanOrEqual(1);
  });

  it('should have valid typography weights', () => {
    expect(ANIMATION_CONFIG.typography.lightWeight).toBeLessThan(
      ANIMATION_CONFIG.typography.heavyWeight
    );
  });
});

describe('LAYOUT_CONFIG', () => {
  it('should have valid grid size', () => {
    expect(LAYOUT_CONFIG.gridSize).toBeGreaterThan(0);
  });

  it('should have valid mobile breakpoint', () => {
    expect(LAYOUT_CONFIG.mobileBreakpoint).toBeGreaterThan(0);
    expect(LAYOUT_CONFIG.mobileBreakpoint).toBeLessThan(1200);
  });
});
