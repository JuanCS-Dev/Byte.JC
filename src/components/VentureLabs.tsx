import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MARATHON_APPS } from '../data/MarathonData';
import { Monolith } from './Monolith';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { ANIMATION_CONFIG, LAYOUT_CONFIG } from '../config/animation';

gsap.registerPlugin(ScrollTrigger);

export const VentureLabs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < LAYOUT_CONFIG.mobileBreakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!sliderRef.current || !containerRef.current || isMobile) return;

    // Only enable horizontal scroll on desktop (>= 768px)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const sections = gsap.utils.toArray('.venture-slide');

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: ANIMATION_CONFIG.scrollTrigger.scrub,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (sliderRef.current!.offsetWidth),
        }
      });
    });

    return () => mm.revert();
  }, [isMobile]);

  // Mobile: Vertical scroll layout
  if (isMobile) {
    return (
      <section id="venture" className="relative bg-[#050505] py-12">
        {/* Header */}
        <div className="px-6 mb-8">
          <h2 className="text-xs font-mono text-emerald-500 uppercase tracking-[0.3em] mb-2">
            Venture Labs // 42 in 7 Protocol
          </h2>
          <p className="text-white/60 text-sm">{MARATHON_APPS.length} projetos em 7 dias</p>
        </div>

        {/* Vertical Stack */}
        <div className="flex flex-col gap-8 px-4">
          {MARATHON_APPS.map((app, index) => (
            <div key={app.id} className="relative">
              {/* Background Number */}
              <div className="absolute -top-4 -right-2 text-[15vw] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              <Monolith app={app} isGlitching={false} />
            </div>
          ))}
        </div>

        {/* Scroll Hint */}
        <div className="flex justify-center items-center gap-2 mt-8 text-white/60 animate-pulse">
          <ChevronDown size={16} />
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        </div>
      </section>
    );
  }

  // Desktop: Horizontal scroll layout
  return (
    <section id="venture" ref={containerRef} className="relative h-screen bg-[#050505] overflow-hidden flex flex-col">
      <div className="absolute top-8 left-8 z-20 flex items-center gap-4">
         <h2 className="text-xs font-mono text-emerald-500 uppercase tracking-[0.4em]">Venture Labs // 42 in 7 Protocol</h2>
         <div className="w-12 h-[1px] bg-emerald-500/30"></div>
         <span className="text-[10px] text-white/60">SCROLL TO EXPLORE</span>
      </div>

      <div
        ref={sliderRef}
        className="flex h-full w-[4200vw]"
      >
        {MARATHON_APPS.map((app, index) => (
          <div key={app.id} className="venture-slide w-screen h-screen flex items-center justify-center p-4 md:p-12 shrink-0 border-r border-white/5 relative">

            {/* Background Number */}
            <div className="absolute bottom-0 right-0 text-[20vw] font-black text-white/[0.02] leading-none select-none pointer-events-none">
              {(index + 1).toString().padStart(2, '0')}
            </div>

            <div className="w-full max-w-6xl z-10 scale-90 md:scale-100">
               <Monolith app={app} isGlitching={false} />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Hint */}
      <div className="absolute bottom-8 right-8 z-20 animate-pulse text-white/60 flex items-center gap-2">
         <span className="text-[10px] font-mono uppercase tracking-widest">Navigate</span>
         <ChevronRight size={16} />
      </div>
    </section>
  );
};
