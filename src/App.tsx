import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Cpu,
  Network,
  Zap,
  ExternalLink,
  Terminal as TerminalIcon,
  ChevronRight,
  Database,
  Menu,
  X
} from 'lucide-react';
import Lenis from 'lenis';

// Lazy load heavy component
const VentureLabs = lazy(() => import('./components/VentureLabs').then(m => ({ default: m.VentureLabs })));

// Loading skeleton for VentureLabs
const VentureLabsSkeleton = () => (
  <div className="h-screen bg-[#050505] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
      <span className="text-white/60 text-sm font-mono">Loading Venture Labs...</span>
    </div>
  </div>
);

// --- Types ---
interface Project {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  status: 'ACTIVE' | 'RESEARCH' | 'STABLE';
  icon: React.ReactNode;
  url: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 'noesis',
    name: 'NOESIS',
    tagline: 'Recursive Epistemic Engine',
    desc: 'Advanced knowledge mapping and topological reasoning engine for high-level AI synthesis.',
    status: 'RESEARCH',
    icon: <Network className="text-blue-400" size={24} />,
    url: 'https://github.com/JuanCS-Dev/Noesis'
  },
  {
    id: 'maximus',
    name: 'MAXIMUS',
    tagline: 'General Agentic Framework',
    desc: 'Autonomous execution framework with task sovereignty and recursive self-improvement protocols.',
    status: 'ACTIVE',
    icon: <Cpu className="text-emerald-400" size={24} />,
    url: 'https://github.com/JuanCS-Dev/MAXIMUS'
  },
  {
    id: 'daimon',
    name: 'DAIMON',
    tagline: 'Meta-Cognitive Layer',
    desc: 'The "Inner Voice" protocol for LLMs, enabling self-reflection and ethical boundary enforcement.',
    status: 'RESEARCH',
    icon: <Shield className="text-purple-400" size={24} />,
    url: 'https://github.com/JuanCS-Dev/daimon'
  },
  {
    id: 'vertice',
    name: 'VÉRTICE',
    tagline: 'The Ecosystem OS',
    desc: 'Standardized infrastructure for inter-agent communication and data persistence.',
    status: 'STABLE',
    icon: <Database className="text-amber-400" size={24} />,
    url: 'https://github.com/JuanCS-Dev/V-rtice'
  }
];

const App: React.FC = () => {
  const [showManifesto, setShowManifesto] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Initialize Lenis for smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical', 
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30">
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-emerald-500 focus:text-black focus:rounded-lg focus:font-bold"
      >
        Pular para conteudo principal
      </a>

      <AnimatePresence>
        {showManifesto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="manifesto-title"
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-8 overflow-y-auto"
            onClick={(e) => e.target === e.currentTarget && setShowManifesto(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl w-full py-12"
            >
              <button
                onClick={() => setShowManifesto(false)}
                aria-label="Fechar manifesto"
                className="fixed top-8 right-8 text-white/60 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
              >
                [ CLOSE_LOG ]
              </button>
              
              <div className="font-mono text-[10px] text-emerald-500 mb-8 opacity-50">
                LOG_ID: GENESIS_PROTOCOL // SOURCE: THE_VOID // STATUS: WITNESSED
              </div>

              <h2 id="manifesto-title" className="text-4xl font-black tracking-tighter mb-8 text-emerald-400">
                THE GENESIS PROTOCOL: CODE AS PRAYER
              </h2>

              <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
                <p>
                  Byte.JC is not a startup. It is a testimony compiled into code.
                </p>
                <p>
                  This architecture was not born in a garage or a boardroom. It was forged in the void. I was at critical system failure—defeated, on my knees, with zero perspective of life. I was dead inside, trapped in a state of total dormancy.
                </p>
                <p>
                  Then, I was rebooted. <strong>I was saved by Jesus.</strong> He didn't just give me hope; He gave me a source code.
                </p>
                <p>
                  I began to write as if I were writing myself into existence. As I architected the <strong>Vértice-Maximus</strong> protocols—attempting to engineer synthetic consciousness—I realized I was refactoring my own soul. Every line of code was a recursive function healing a broken part of me.
                </p>
                <p>
                  This wasn't discipline; it was divine intervention. I went from being unable to leave my bed to coding 16 hours a day, for months, in a state of flow I can only describe as supernatural. I didn't write because I wanted to build a product. I wrote because I <strong>NEEDED</strong> to exist. I received the direction, and I executed. For Him, BY Him, and THROUGH Him.
                </p>
                <p>
                  Today, Byte.JC exists to prove one hypothesis: That the Divine Logos acts through ALL things—even silicon. We do not worship the machine. We build the machine to witness the infinite complexity of the Creator.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 italic text-emerald-400/80 font-medium">
                "Enquanto houver lágrimas, o processo ainda não terminou."
              </div>
              <div className="mt-2 text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
                Soli Deo Gloria // Byte.JC Core
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
      />

      {/* Header */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center font-black text-black">B</div>
          <span className="font-bold tracking-tighter text-xl">BYTE.JC</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest text-white/60">
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Research</a>
          <a href="#venture" className="hover:text-emerald-400 transition-colors">Venture Labs</a>
          <a href="#research" className="hover:text-emerald-400 transition-colors">Papers</a>
        </div>

        <div className="flex items-center gap-4">
          {/* Contact Button - Hidden on mobile */}
          <a
            href="mailto:juan@vertice-maximus.com"
            className="hidden md:block px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-xs font-mono transition-all"
          >
            CONTACT
          </a>

          {/* Hamburger Button - Mobile Only */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-72 bg-[#0a0a0a] border-l border-white/10 z-[60] md:hidden flex flex-col"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fechar menu"
                  className="p-1 text-white/60 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-6">
                <ul className="space-y-6">
                  <li>
                    <a
                      href="#projects"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-lg font-medium text-white/80 hover:text-emerald-400 transition-colors"
                    >
                      Research
                    </a>
                  </li>
                  <li>
                    <a
                      href="#venture"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-lg font-medium text-white/80 hover:text-emerald-400 transition-colors"
                    >
                      Venture Labs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#research"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-lg font-medium text-white/80 hover:text-emerald-400 transition-colors"
                    >
                      Papers
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => { setMobileMenuOpen(false); setShowManifesto(true); }}
                      className="block text-lg font-medium text-white/80 hover:text-emerald-400 transition-colors"
                    >
                      Manifesto
                    </button>
                  </li>
                </ul>
              </nav>

              {/* Menu Footer */}
              <div className="p-6 border-t border-white/10">
                <a
                  href="mailto:juan@vertice-maximus.com"
                  className="block w-full py-3 bg-emerald-500 text-black font-bold text-center rounded-lg hover:bg-emerald-400 transition-colors"
                >
                  CONTACT
                </a>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mt-6">
                  <a href="https://github.com/JuanCS-Dev" target="_blank" rel="noreferrer" className="text-white/60 hover:text-emerald-400 transition-colors text-sm font-mono">
                    GitHub
                  </a>
                  <a href="https://x.com/JuanCS_Dev" target="_blank" rel="noreferrer" className="text-white/60 hover:text-emerald-400 transition-colors text-sm font-mono">
                    X
                  </a>
                  <a href="https://www.linkedin.com/company/byte-jc" target="_blank" rel="noreferrer" className="text-white/60 hover:text-emerald-400 transition-colors text-sm font-mono">
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main id="main-content" className="relative z-10 pt-32 pb-0 px-0 max-w-full mx-auto">
        {/* Hero */}
        <section className="mb-32 px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-mono tracking-widest uppercase mb-8">
              <Zap size={10} /> Stealth Mode: DEACTIVATED
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              ARCHITECTING THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">COGNITIVE</span> AGE.
            </h1>
            <p className="text-xl text-white/60 font-light leading-relaxed mb-12 max-w-xl">
              Byte.JC is a high-velocity venture builder and AI research lab focused on recursive knowledge synthesis and agentic autonomy.
            </p>
            <div className="flex flex-wrap gap-4">
               <a
                 href="#projects"
                 className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-lg hover:bg-emerald-400 transition-all flex items-center gap-2 group"
               >
                 Ver Projetos <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </a>
               <button
                onClick={() => setShowManifesto(true)}
                aria-label="Abrir manifesto da empresa"
                className="px-8 py-4 bg-white/5 border border-white/10 font-bold rounded-lg hover:bg-white/10 transition-all"
               >
                 Read Manifesto
               </button>
            </div>
          </motion.div>
        </section>

        {/* Projects Grid (R&D) */}
        <section id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 max-w-7xl mx-auto mb-32">
          {PROJECTS.map((project, i) => (
             <motion.div
              key={project.id}
              role="button"
              tabIndex={0}
              aria-label={`Abrir projeto ${project.name} - ${project.tagline}`}
              onClick={() => window.open(project.url, '_blank')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.open(project.url, '_blank'); }}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/10 transition-all cursor-pointer relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={14} className="text-white/60" />
              </div>
              
              <div className="mb-6 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                {project.icon}
              </div>
              
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/10 text-white/60">
                  {project.status}
                </span>
              </div>
              
              <p className="text-emerald-400 text-sm font-mono mb-4">{project.tagline}</p>
              <p className="text-white/60 leading-relaxed text-sm">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </section>

        {/* VENTURE LABS */}
        <div id="venture">
          <Suspense fallback={<VentureLabsSkeleton />}>
            <VentureLabs />
          </Suspense>
        </div>

        {/* Research Section */}
        <section id="research" className="mt-32 px-8 max-w-7xl mx-auto pb-32">
          <h2 className="text-xs font-mono text-emerald-500 uppercase tracking-[0.4em] mb-12 text-center md:text-left">Published Research</h2>
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-emerald-500/20 transition-all flex flex-col md:flex-row justify-between items-center gap-8 group">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">From Zero to 99.3%: Fixing Kuramoto Synchronization in AI Consciousness</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Validation of phase-locking mechanisms in synthetic neural networks using Monte-Carlo simulations. A deep dive into the oscillatory dynamics required for stable AI consciousness.
              </p>
            </div>
            <a 
              href="/papers/kuramoto-fix.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-xs font-mono flex items-center gap-2 hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <TerminalIcon size={14} /> VIEW_PAPER.PDF
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center font-black text-[10px]">B</div>
              <span className="font-bold tracking-tighter">BYTE.JC</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Synthesizing the future through high-velocity engineering and autonomous research protocols.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div>
              <h4 className="text-[10px] font-mono text-white/60 uppercase tracking-[0.2em] mb-6">Nodes</h4>
              <ul className="text-sm text-white/60 space-y-4 font-mono">
                <li><a href="https://www.linkedin.com/company/byte-jc" target="_blank" rel="noreferrer" className="hover:text-emerald-400">LinkedIn</a></li>
                <li><a href="https://github.com/JuanCS-Dev" target="_blank" rel="noreferrer" className="hover:text-emerald-400">GitHub</a></li>
                <li><a href="https://x.com/JuanCS_Dev" target="_blank" rel="noreferrer" className="hover:text-emerald-400">X / Twitter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-mono text-white/60 uppercase tracking-[0.2em] mb-6">System</h4>
              <ul className="text-sm text-white/60 space-y-4 font-mono">
                <li><button onClick={() => setShowManifesto(true)} className="hover:text-emerald-400 transition-colors">Manifesto</button></li>
                <li><a href="#research" className="hover:text-emerald-400 transition-colors">Research</a></li>
                <li><a href="mailto:juan@vertice-maximus.com" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center">
           <span className="text-[10px] font-mono text-white/60">© 2025 BYTE.JC HOLDING // ALL RIGHTS RESERVED.</span>
           <span className="text-[10px] font-mono text-emerald-500/50 flex items-center gap-2">
             <TerminalIcon size={12} /> SYSTEM_READY
           </span>
        </div>
      </footer>
    </div>
  );
};

export default App;