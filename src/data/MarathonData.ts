// MarathonData.ts
// Seguindo Artigo II da Constituição Maximus: Zero Placeholders.

export interface AppEntry {
  id: string;
  day: number;
  title: string;
  tagline: string;
  techStack: string[];
  deployUrl: string;
  vibe: "Hardcore" | "Vibe Coding" | "Side Quest";
  previewImage?: string; // Optional path to screenshot
}

export const MARATHON_APPS: AppEntry[] = [
  // --- Day 01 ---
  {
    id: "01-01",
    day: 1,
    title: "Celulas",
    tagline: "Visualização e simulação celular interativa.",
    techStack: ["HTML", "CSS", "JavaScript"],
    deployUrl: "",
    vibe: "Side Quest"
  },
  {
    id: "01-02",
    day: 1,
    title: "NeuroSketch",
    tagline: "Interface neural de esboço criativo.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://neurasketch.netlify.app/",
    vibe: "Hardcore",
    previewImage: "/previews/01-02.webp"
  },
  {
    id: "01-03",
    day: 1,
    title: "Pareto",
    tagline: "Otimização baseada no princípio 80/20.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "",
    vibe: "Vibe Coding"
  },
  {
    id: "01-04",
    day: 1,
    title: "PyForge",
    tagline: "Ambiente de desenvolvimento Python visual.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "",
    vibe: "Hardcore"
  },
  {
    id: "01-05",
    day: 1,
    title: "Q-ErrorViz",
    tagline: "Visualização de erros quânticos.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://q-errorviz.netlify.app/",
    vibe: "Side Quest",
    previewImage: "/previews/01-05.webp"
  },
  {
    id: "01-06",
    day: 1,
    title: "SipekeFit",
    tagline: "Análise de fitness e picos de performance.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://sipekefit.netlify.app/",
    vibe: "Vibe Coding",
    previewImage: "/previews/01-06.webp"
  },
  {
    id: "01-07",
    day: 1,
    title: "Socratic-knot",
    tagline: "Ferramenta de diálogo socrático complexo.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "",
    vibe: "Side Quest"
  },

  // --- Day 02 ---
  {
    id: "02-01",
    day: 2,
    title: "AIPromptAudit",
    tagline: "Auditoria e otimização de prompts de IA.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "",
    vibe: "Hardcore"
  },
  {
    id: "02-02",
    day: 2,
    title: "AIReadyScore",
    tagline: "Pontuação de prontidão para adoção de IA.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://aireadyscore.netlify.app/",
    vibe: "Vibe Coding",
    previewImage: "/previews/02-02.webp"
  },
  {
    id: "02-03",
    day: 2,
    title: "ClinicaGenesisOS",
    tagline: "Sistema operacional completo para clínicas.",
    techStack: ["React", "TypeScript", "Vite", "Firebase", "Tailwind"],
    deployUrl: "https://genesisclinic.netlify.app/",
    vibe: "Hardcore",
    previewImage: "/previews/02-03.webp"
  },
  {
    id: "02-04",
    day: 2,
    title: "Dermadose",
    tagline: "Calculadora de dosagem dermatológica precisa.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://dermadose.netlify.app/",
    vibe: "Side Quest",
    previewImage: "/previews/02-04.webp"
  },
  {
    id: "02-05",
    day: 2,
    title: "FaturaZERO",
    tagline: "Gestão inteligente para zerar faturas.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://faturazero.netlify.app/",
    vibe: "Vibe Coding",
    previewImage: "/previews/02-05.webp"
  },
  {
    id: "02-06",
    day: 2,
    title: "Lablens",
    tagline: "Lente inteligente para análise laboratorial.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://lablens.netlify.app/",
    vibe: "Hardcore",
    previewImage: "/previews/02-06.webp"
  },
  {
    id: "02-07",
    day: 2,
    title: "SubsAudit",
    tagline: "Auditoria de assinaturas e serviços recorrentes.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "",
    vibe: "Vibe Coding"
  },

  // --- Day 03 ---
  {
    id: "03-01",
    day: 3,
    title: "ContractPilot",
    tagline: "Copiloto para gestão de contratos.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://contractpilot.netlify.app/",
    vibe: "Hardcore",
    previewImage: "/previews/03-01.webp"
  },
  {
    id: "03-02",
    day: 3,
    title: "FleetCommander",
    tagline: "Comando e controle de frotas.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://fleetcommanderr.netlify.app/",
    vibe: "Vibe Coding",
    previewImage: "/previews/03-02.webp"
  },
  {
    id: "03-03",
    day: 3,
    title: "FunnelForge",
    tagline: "Forja de funis de vendas de alta conversão.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://funnelforgee.netlify.app/",
    vibe: "Hardcore",
    previewImage: "/previews/03-03.webp"
  },
  {
    id: "03-04",
    day: 3,
    title: "MarketMinds",
    tagline: "Inteligência de mercado colaborativa.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://marketmindss.netlify.app/",
    vibe: "Side Quest",
    previewImage: "/previews/03-04.webp"
  },
  {
    id: "03-05",
    day: 3,
    title: "NeuroPrice",
    tagline: "Precificação dinâmica baseada em neurociência.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://neuroprice.netlify.app/",
    vibe: "Hardcore",
    previewImage: "/previews/03-05.webp"
  },
  {
    id: "03-06",
    day: 3,
    title: "PropLens: The Deal Hunter",
    tagline: "Encontre os melhores negócios imobiliários.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://thedealhunter.netlify.app/",
    vibe: "Vibe Coding",
    previewImage: "/previews/03-06.webp"
  },
  {
    id: "03-07",
    day: 3,
    title: "ProspectPulse",
    tagline: "Monitoramento de pulso de prospectos.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://prospectpulse.netlify.app/",
    vibe: "Vibe Coding",
    previewImage: "/previews/03-07.webp"
  },

  // --- Day 04 ---
  {
    id: "04-01",
    day: 4,
    title: "ARCHETYPENOVA",
    tagline: "Exploração de arquétipos digitais.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://archetypenova.netlify.app/",
    vibe: "Side Quest",
    previewImage: "/previews/04-01.webp"
  },
  {
    id: "04-02",
    day: 4,
    title: "CourseWeaver",
    tagline: "Tecendo cursos e jornadas de aprendizado.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://courseweaverr.netlify.app/",
    vibe: "Vibe Coding",
    previewImage: "/previews/04-02.webp"
  },
  {
    id: "04-03",
    day: 4,
    title: "MinhaPaginaPRO",
    tagline: "Páginas profissionais em minutos.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://minhapaginapro.netlify.app/",
    vibe: "Vibe Coding",
    previewImage: "/previews/04-03.webp"
  },
  {
    id: "04-04",
    day: 4,
    title: "n8nKids",
    tagline: "Automação visual para pequenos gênios.",
    techStack: ["React", "Canvas API", "Logic Engine"],
    deployUrl: "https://n8nkids.netlify.app/",
    vibe: "Vibe Coding",
    previewImage: "/previews/04-04.webp"
  },
  {
    id: "04-05",
    day: 4,
    title: "Portifólio",
    tagline: "Showcase pessoal e profissional.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "",
    vibe: "Side Quest"
  },
  {
    id: "04-06",
    day: 4,
    title: "Signal",
    tagline: "Processamento e análise de sinais.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://siggnnal.netlify.app/",
    vibe: "Hardcore",
    previewImage: "/previews/04-06.webp"
  },
  {
    id: "04-07",
    day: 4,
    title: "SleepScience",
    tagline: "Durma melhor com ciência.",
    techStack: ["Next.js", "Tailwind", "Framer Motion"],
    deployUrl: "https://sleepscience.netlify.app/",
    vibe: "Vibe Coding",
    previewImage: "/previews/04-07.webp"
  },

  // --- Day 05 ---
  {
    id: "05-01",
    day: 5,
    title: "ArchitectCore",
    tagline: "Núcleo de arquitetura de software.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://architectcore.netlify.app/",
    vibe: "Hardcore",
    previewImage: "/previews/05-01.webp"
  },
  {
    id: "05-02",
    day: 5,
    title: "CodeBlocks",
    tagline: "Blocos de código reutilizáveis e modulares.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://codeblocksadventure.netlify.app/",
    vibe: "Vibe Coding",
    previewImage: "/previews/05-02.webp"
  },
  {
    id: "05-03",
    day: 5,
    title: "Diariodaalma",
    tagline: "Um diário digital para reflexão pessoal.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://diariodalma.netlify.app/",
    vibe: "Side Quest",
    previewImage: "/previews/05-03.webp"
  },
  {
    id: "05-04",
    day: 5,
    title: "MaxComerce",
    tagline: "Soluções de e-commerce maximizadas.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://maxcomerce.netlify.app/",
    vibe: "Hardcore",
    previewImage: "/previews/05-04.webp"
  },
  {
    id: "05-05",
    day: 5,
    title: "PROSPERITY PATH",
    tagline: "Caminho guiado para a prosperidade.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://prosperitypath.netlify.app/",
    vibe: "Vibe Coding",
    previewImage: "/previews/05-05.webp"
  },
  {
    id: "05-06",
    day: 5,
    title: "Speakflow",
    tagline: "Fluxo de conversação e oratória.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://speakfloww.netlify.app/",
    vibe: "Vibe Coding",
    previewImage: "/previews/05-06.webp"
  },
  {
    id: "05-07",
    day: 5,
    title: "vertice-genoma",
    tagline: "O genoma do sistema Vértice.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "https://vertice-genoma.netlify.app/",
    vibe: "Hardcore",
    previewImage: "/previews/05-07.webp"
  },

  // --- Day 06 ---
  {
    id: "06-01",
    day: 6,
    title: "Juan",
    tagline: "O portfólio definitivo da maratona.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "",
    vibe: "Hardcore"
  },
  {
    id: "06-02",
    day: 6,
    title: "launchcenter",
    tagline: "Centro de lançamento de projetos.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "",
    vibe: "Vibe Coding"
  },
  {
    id: "06-03",
    day: 6,
    title: "Nutricheck",
    tagline: "Verificação nutricional inteligente.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "",
    vibe: "Side Quest"
  },
  {
    id: "06-04",
    day: 6,
    title: "Vertice-Closer",
    tagline: "Fechamento de negócios no ecossistema Vértice.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "",
    vibe: "Hardcore"
  },
  {
    id: "06-05",
    day: 6,
    title: "Vértice-Sovereign",
    tagline: "Soberania de dados e identidade.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "",
    vibe: "Hardcore"
  },
  {
    id: "06-06",
    day: 6,
    title: "Voxflow",
    tagline: "Fluxos de voz e interação sonora.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind"],
    deployUrl: "",
    vibe: "Vibe Coding"
  }
];
