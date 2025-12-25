import React, { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ANIMATION_CONFIG } from '../config/animation';

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
}

export const Magnetic: React.FC<MagneticProps> = ({
  children,
  strength = ANIMATION_CONFIG.magnetic.defaultStrength
}) => {
  const magnetic = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const element = magnetic.current;
    if (!element) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = element.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: ANIMATION_CONFIG.magnetic.duration,
      ease: ANIMATION_CONFIG.magnetic.ease,
    });
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    const element = magnetic.current;
    if (!element) return;

    gsap.to(element, {
      x: 0,
      y: 0,
      duration: ANIMATION_CONFIG.magnetic.duration,
      ease: ANIMATION_CONFIG.magnetic.ease,
    });
  }, []);

  useEffect(() => {
    const element = magnetic.current;
    if (!element) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  // Use callback ref pattern to avoid ref-during-render issues
  const setRef = useCallback((node: HTMLElement | null) => {
    magnetic.current = node;
  }, []);

  return React.cloneElement(children, { ref: setRef });
};
