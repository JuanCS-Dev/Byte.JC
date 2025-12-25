import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, Github, Layers, Zap, Code2, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import type { AppEntry } from '../data/MarathonData';
import { Magnetic } from './Magnetic';

interface MonolithProps {
  app: AppEntry;
  isGlitching: boolean;
}

// -- GLASSMORPHISM SHADER (Tailwind Config) --
const GLASS_CLASSES = `
  relative
  w-full max-w-5xl
  aspect-[16/9] md:aspect-[2/1] lg:aspect-[16/9]
  rounded-3xl
  bg-black/40
  backdrop-blur-[20px]
  border border-white/10
  shadow-[inset_0_0_40px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.5)]
  overflow-hidden
  transition-transform duration-700 ease-out
`;

const VibeIcon = React.memo(({ vibe }: { vibe?: string }) => {
  if (vibe === "Hardcore") return <Zap size={12} className="text-red-400" />;
  if (vibe === "Vibe Coding") return <Sparkles size={12} className="text-purple-400" />;
  return <Code2 size={12} className="text-blue-400" />;
});

const getVibeColor = (vibe?: string) => {
  if (vibe === "Hardcore") return "border-red-500/30 text-red-400 bg-red-500/10";
  if (vibe === "Vibe Coding") return "border-purple-500/30 text-purple-400 bg-purple-500/10";
  return "border-blue-500/30 text-blue-400 bg-blue-500/10";
};

// Placeholder Gradient Generator based on ID
const getGradient = (id: string) => {
  const hash = id.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
  const hue = hash % 360;
  return `linear-gradient(135deg, hsl(${hue}, 60%, 20%) 0%, hsl(${hue + 40}, 60%, 10%) 100%)`;
};

export const Monolith: React.FC<MonolithProps> = React.memo(({ app, isGlitching }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // -- THE MUTATION ENGINE (Micro-animations) --
  useEffect(() => {
    if (isGlitching) {
      // Hard flicker opacity
      gsap.to(contentRef.current, {
        opacity: 0.4,
        duration: 0.05,
        yoyo: true,
        repeat: 3,
        onComplete: () => {
           gsap.to(contentRef.current, { opacity: 1, duration: 0.2 });
        }
      });
      
      // Image scale jolt
      gsap.fromTo(imageRef.current, 
        { scale: 1.1, filter: "hue-rotate(90deg)" },
        { scale: 1, filter: "hue-rotate(0deg)", duration: 0.4, ease: "power2.out" }
      );

      // Kinetic Typography Reset (Light weight during glitch)
      gsap.to(titleRef.current, {
        fontWeight: 200,
        letterSpacing: "0.1em",
        duration: 0.1,
        ease: "power1.inOut"
      });

    } else {
      // Kinetic Typography Settle (Heavy weight when focused)
      gsap.to(titleRef.current, {
        fontWeight: 800,
        letterSpacing: "-0.05em",
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        delay: 0.1
      });
    }
  }, [app.id, isGlitching]);

  return (
    <div className={`${GLASS_CLASSES} ${isGlitching ? 'scale-[0.98]' : 'scale-100'}`}>
      {/* Decorative Gradients / Noise */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      {/* -- BENTO CONTENT WRAPPER -- */}
      <div 
        ref={contentRef}
        className={`w-full h-full flex flex-col md:flex-row p-8 md:p-12 gap-12 z-10 relative ${isGlitching ? 'glitch-active' : ''}`}
      >
        
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-between h-full order-2 md:order-1">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full border border-white/20 text-[10px] tracking-widest uppercase text-white/70 bg-white/5">
                Day {app.day.toString().padStart(2, '0')}
              </span>
              
              {/* Vibe Badge */}
              <span className={`px-3 py-1 rounded-full border text-[10px] tracking-widest uppercase flex items-center gap-2 ${getVibeColor(app.vibe)}`}>
                <VibeIcon vibe={app.vibe} />
                {app.vibe || "Side Quest"}
              </span>

              <span className="px-3 py-1 rounded-full border border-emerald-500/30 text-[10px] tracking-widest uppercase text-emerald-400 bg-emerald-500/10 animate-pulse ml-auto md:ml-0">
                Ready
              </span>
            </div>

            <h1 
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white glitch-text will-change-transform"
              data-text={app.title}
            >
              {app.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-md">
              {app.tagline}
            </p>
            
            <div className="mt-8 h-[1px] w-20 bg-white/20"></div>

            <p className="mt-8 text-sm md:text-base text-white/60 max-w-md leading-7">
              {/* Fallback description since generic data doesn't have it yet */}
              SYSTEM: {app.id} // VIBE: {app.vibe.toUpperCase()} // STATUS: DEPLOYED
            </p>
          </div>

          <div className="mt-12 md:mt-0">
            <div className="flex flex-wrap gap-2 mb-8">
              {app.techStack.map((tech) => (
                <span key={tech} className="text-xs font-mono text-white/70 bg-white/5 px-2 py-1 rounded border border-white/5">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {app.deployUrl ? (
                <Magnetic strength={0.2}>
                  <a
                    href={app.deployUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative px-6 py-3 font-semibold rounded-lg flex items-center gap-2 overflow-hidden hover:pr-8 transition-all bg-white text-black"
                  >
                    <span>View Deployment</span>
                    <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </Magnetic>
              ) : (
                <span className="px-6 py-3 font-semibold rounded-lg flex items-center gap-2 bg-white/10 text-white/40 cursor-not-allowed select-none">
                  Deploy Pending
                </span>
              )}
              
              <Magnetic strength={0.2}>
                <a href="https://github.com/JuanCS-Dev" target="_blank" rel="noreferrer" className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg transition-colors flex items-center justify-center">
                   <Github size={20} />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Right: Visual - System Core View */}
        <div className="flex-1 h-full relative overflow-hidden rounded-2xl border border-white/5 order-1 md:order-2 group bg-black/50">
           {app.previewImage ? (
             <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700">
               <img
                 src={app.previewImage}
                 alt={`Screenshot do projeto ${app.title} - ${app.tagline}`}
                 loading="lazy"
                 decoding="async"
                 width={800}
                 height={450}
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
               />
               {/* Scanline Overlay for Image */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none mix-blend-overlay"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
             </div>
           ) : (
             <div 
               ref={imageRef}
               className="w-full h-full relative flex flex-col items-center justify-center p-8"
               style={{ background: getGradient(app.id) }}
             >
                {/* Abstract Patterns */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 2px, transparent 2.5px)', backgroundSize: '24px 24px' }}></div>
                
                {/* Tech Cloud Visual */}
                <div className="relative z-10 flex flex-wrap justify-center content-center gap-4 max-w-[80%]">
                  {app.techStack.map((tech, i) => (
                    <div key={i} className="px-4 py-2 border border-white/20 bg-black/20 backdrop-blur-sm rounded text-white font-mono text-sm tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Central ID Watermark */}
                <div className="absolute inset-0 flex items-center justify-center text-white/5 font-black text-9xl tracking-tighter select-none pointer-events-none">
                  {app.id.split('-')[1]}
                </div>
             </div>
           )}
          
          {/* Overlay Stats - Real Data */}
          <div className="absolute bottom-6 left-6 z-20 flex gap-4">
            <div className="flex flex-col">
               <span className="text-[10px] text-white/60 uppercase tracking-widest">Nodes</span>
               <span className="font-mono text-emerald-400">{app.techStack.length} Modules</span>
            </div>
            <div className="w-[1px] h-8 bg-white/20"></div>
            <div className="flex flex-col">
               <span className="text-[10px] text-white/60 uppercase tracking-widest">System ID</span>
               <span className="font-mono text-white">{app.id}</span>
            </div>
          </div>

          <div className="absolute top-6 right-6 z-20">
             <Layers className="text-white/20" size={32} />
          </div>
        </div>

      </div>
    </div>
  );
});
