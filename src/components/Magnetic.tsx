import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: React.ReactElement;
  strength?: number; // How strong the pull is
}

export const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.5 }) => {
  // Fix: changed HTMLDivElement to HTMLElement to accommodate other elements like anchors
  const magnetic = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!magnetic.current) return;

    const xTo = gsap.quickTo(magnetic.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"});
    const yTo = gsap.quickTo(magnetic.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"});

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetic.current) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      xTo(x * strength);
      yTo(y * strength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    magnetic.current.addEventListener("mousemove", handleMouseMove);
    magnetic.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if(magnetic.current) {
        magnetic.current.removeEventListener("mousemove", handleMouseMove);
        magnetic.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [strength]);

  // Fix: cast children to ReactElement<any> to resolve TS error about ref property
  return React.cloneElement(children as React.ReactElement<any>, { ref: magnetic });
};