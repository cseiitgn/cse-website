export type NewsCategory =
  | "media"
  | "research"
  | "award"
  | "event"
  | "infrastructure";

export type NewsStatus = "confirmed" | "achievement";

export interface DepartmentNewsItem {
  id: string;
  title: string;
  summary: string;
  people: string;
  displayDate: string;
  date: string;
  category: NewsCategory;
  status: NewsStatus;
  sourceLabel: string;
  sourceUrl: string;
  homepage?: boolean;
}

export const CATEGORY_LABELS: Record<NewsCategory, string> = {
  media: "Media",
  research: "Research",
  award: "Award",
  event: "Event",
  infrastructure: "Infrastructure",
};

export const STATUS_LABELS: Record<NewsStatus, string> = {
  confirmed: "Confirmed",
  achievement: "Achievement",
};

export const departmentNews: DepartmentNewsItem[] = [
  {
    id: "thermeval-kdd-2026",
    title: "ThermEval accepted at KDD 2026",
    summary:
      "A Sustainability Lab benchmark evaluates vision-language models on thermal imagery, extending CSE work on robust AI for sensing and climate applications.",
    people:
      "Ayush Shrivastava, Kirtan Gangani, Laksh Jain, Prof. Nipun Batra, and Prof. Mayank Goel",
    displayDate: "May 2026",
    date: "2026-05-20",
    category: "research",
    status: "confirmed",
    sourceLabel: "Sustainability Lab news",
    sourceUrl: "https://sustainability-lab.github.io/news.html",
    homepage: true,
  },
  {
    id: "nilmb-2026-buildsys",
    title: "Undergraduate-led NILMBench2026 accepted at BuildSys 2026",
    summary:
      "Second-year undergraduates led a reproducible benchmark for energy disaggregation, continuing the department focus on deployable AI systems.",
    people: "Aayush Kuloor, Anurag Singh, Harsh Dhru, and Prof. Nipun Batra",
    displayDate: "May 2026",
    date: "2026-05-15",
    category: "research",
    status: "confirmed",
    sourceLabel: "Sustainability Lab news",
    sourceUrl: "https://sustainability-lab.github.io/news.html",
    homepage: true,
  },
  {
    id: "project-madhava-india-today",
    title: "Project Madhava covered by India Today",
    summary:
      "The hands-on computer-systems pedagogy effort uses RISC-V microcontrollers to connect classroom learning with self-reliant hardware practice.",
    people: "Prof. Manu Awasthi, Manish Jain, Vicharak, C2S, ChipIN, and CCL",
    displayDate: "2026",
    date: "2026-03-01",
    category: "media",
    status: "confirmed",
    sourceLabel: "India Today",
    sourceUrl:
      "https://www.indiatoday.in/education-today/featurephilia/story/iit-gandhinagars-self-reliant-india-story-begins-in-classrooms-2869886-2026-02-18",
    homepage: true,
  },
  {
    id: "cvig-pollen-ai-2026",
    title:
      "CVIG Lab work on AI-assisted pollen classification receives coverage",
    summary:
      "The project combines scanning electron microscopy and vision transformers to classify pollen grains, with coverage in science and education outlets.",
    people: "Prof. Shanmuganathan Raman and S. Sankaranarayanan",
    displayDate: "Feb 2026",
    date: "2026-02-20",
    category: "research",
    status: "confirmed",
    sourceLabel: "Phys.org",
    sourceUrl:
      "https://phys.org/news/2026-02-exploring-electron-microscopy-ai-key.html",
    homepage: true,
  },
  {
    id: "udit-bhatia-drought-synchrony",
    title:
      "Nature Portfolio paper links ocean variability and global drought synchrony",
    summary:
      "The MIR Lab and collaborators showed how ocean cycles constrain planet-wide drought synchrony, with broad external science coverage.",
    people:
      "Dr. Udit Bhatia, Hemant Poonia, D. Mansoor Tantary, Vimal Mishra, and Rohini Kumar",
    displayDate: "Jan 2026",
    date: "2026-01-06",
    category: "research",
    status: "confirmed",
    sourceLabel: "Communications Earth & Environment",
    sourceUrl: "https://www.nature.com/articles/s43247-025-03111-5",
  },
  {
    id: "soket-ai-pm-roundtable",
    title: "Soket AI presented at PM-chaired AI startup roundtable",
    summary:
      "Soket AI, co-founded by Prof. Mayank Singh, was among 12 AI startups that presented ahead of the India AI Impact Summit.",
    people: "Soket AI and Prof. Mayank Singh",
    displayDate: "8 Jan 2026",
    date: "2026-01-08",
    category: "media",
    status: "confirmed",
    sourceLabel: "PIB / PM India",
    sourceUrl:
      "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2212390&reg=3&lang=1",
  },
  {
    id: "arc-centre-launch",
    title: "IIT Gandhinagar launches AI Resilience and Command Centre",
    summary:
      "The ARC Centre advances data-driven climate-risk management, including AI-based urban flooding modules and decision support tools.",
    people: "Dr. Udit Bhatia and IITGN ARC Centre",
    displayDate: "Feb 2026",
    date: "2026-02-05",
    category: "infrastructure",
    status: "confirmed",
    sourceLabel: "IITGN News",
    sourceUrl:
      "https://news.iitgn.ac.in/iit-gandhinagar-launches-ai-resilience-and-command-centre-for-data-driven-climate-risk-management/",
  },
  {
    id: "mayank-ai-impact-summit",
    title: "Prof. Mayank Singh listed as AI Impact Summit panelist",
    summary:
      "The India AI Impact Summit agenda listed Prof. Singh on a panel about India frontier labs and Global South impact.",
    people: "Prof. Mayank Singh",
    displayDate: "Feb 2026",
    date: "2026-02-01",
    category: "event",
    status: "confirmed",
    sourceLabel: "Indian Express agenda",
    sourceUrl:
      "https://indianexpress.com/article/explained/explained-sci-tech/ai-impact-summit-begins-delhi-agenda-10533773/",
  },
  {
    id: "ai-day-iitgn-2026",
    title: "AI Day at IITGN builds momentum for India AI Impact Pre-Summit",
    summary:
      "The institute event highlighted CSE and Center for AI-driven Innovations work before the India AI Impact Pre-Summit.",
    people:
      "CSE Department, Center for AI-driven Innovations, Prof. Mayank Singh, Prof. Anirban Dasgupta, and Prof. Yogesh Kumar Meena",
    displayDate: "12 Feb 2026",
    date: "2026-02-12",
    category: "event",
    status: "confirmed",
    sourceLabel: "IITGN News",
    sourceUrl:
      "https://news.iitgn.ac.in/ai-day-iitgn-builds-momentum-for-india-ai-impact-pre-summit-2026/",
  },
  {
    id: "inter-iit-2025-algorithmic-optimisation",
    title: "IITGN wins Inter-IIT gold in Algorithmic Optimisation",
    summary:
      "The team won gold at Inter-IIT Tech Meet 14.0 for solving computational problems under strict time and memory constraints.",
    people: "Anurag Singh and Nishchay Bhutoria",
    displayDate: "Dec 2025",
    date: "2025-12-14",
    category: "award",
    status: "achievement",
    sourceLabel: "IITGN Technical Council",
    sourceUrl: "https://technical-council.iitgn.tech/achievements",
  },
  {
    id: "inter-iit-2025-game-development",
    title: "IITGN wins Inter-IIT silver in Game Development Challenge",
    summary:
      "The team won silver at Inter-IIT Tech Meet 14.0 for a polished playable game with strong mechanics, level design, and coding architecture.",
    people: "Divyansh Sharma, Hem Tilva, Nilay, and Shubham",
    displayDate: "Dec 2025",
    date: "2025-12-14",
    category: "award",
    status: "achievement",
    sourceLabel: "IITGN Technical Council",
    sourceUrl: "https://technical-council.iitgn.tech/achievements",
  },
  {
    id: "inter-iit-2025-isro-geospatial",
    title: "IITGN wins Inter-IIT silver in ISRO Geospatial Challenge",
    summary:
      "The team won silver at Inter-IIT Tech Meet 14.0 for applying machine learning and remote-sensing methods to satellite imagery and geospatial data.",
    people: "Umang, Karan, Laksh, Romit, Shreyans, and Viraj",
    displayDate: "Dec 2025",
    date: "2025-12-14",
    category: "award",
    status: "achievement",
    sourceLabel: "IITGN Technical Council",
    sourceUrl: "https://technical-council.iitgn.tech/achievements",
  },
  {
    id: "chitrabhasha-anrf",
    title: "Chitrabhasha receives ANRF Advanced Research Grant support",
    summary:
      "The Lingo Research Group project focuses on large-scale datasets and foundational multilingual, multimodal AI models.",
    people: "Lingo Research Group and Prof. Mayank Singh",
    displayDate: "2026",
    date: "2026-01-15",
    category: "research",
    status: "confirmed",
    sourceLabel: "IITGN official post",
    sourceUrl: "https://x.com/iitgn/status/2040285734062473311",
  },
  {
    id: "comsnets-2026-mcp-diag",
    title: "MCP-Diag recognized at COMSNETS 2026 Graduate Forum",
    summary:
      "The paper on deterministic, protocol-driven AI-native network diagnostics was named Graduate Forum Best Paper Runner-up.",
    people: "Devansh Lodha, Mohit Panchal, and Prof. Sameer G. Kulkarni",
    displayDate: "2026",
    date: "2026-01-20",
    category: "award",
    status: "confirmed",
    sourceLabel: "COMSNETS awards",
    sourceUrl: "https://www.comsnets.org/awards.html",
  },
  {
    id: "himanshu-msr-fulbright",
    title:
      "Himanshu Beniwal receives Microsoft Research India PhD Award and Fulbright-Nehru Fellowship",
    summary:
      "The CSE/NLP doctoral student is recognized for work with the Lingo Research Group under Prof. Mayank Singh.",
    people: "Himanshu Beniwal and Prof. Mayank Singh",
    displayDate: "2025-26",
    date: "2025-12-15",
    category: "award",
    status: "confirmed",
    sourceLabel: "IITGN Connections v18i1",
    sourceUrl: "https://iitgn.ac.in/assets/pdfs/connections/v18i1.pdf",
    homepage: true,
  },
  {
    id: "gayatri-google-phd-fellowship",
    title: "Gayatri Priyadarsini Kancherla receives Google PhD Fellowship",
    summary:
      "The fellowship recognizes doctoral work in privacy, safety, and security.",
    people: "Gayatri Priyadarsini Kancherla",
    displayDate: "2025",
    date: "2025-10-01",
    category: "award",
    status: "confirmed",
    sourceLabel: "Google Research recipients",
    sourceUrl:
      "https://research.google/programs-and-events/phd-fellowship/recipients/",
    homepage: true,
  },
  {
    id: "dharaben-acm-india-dda",
    title: "Dharaben R. Thakkar receives ACM India Doctoral Dissertation Award",
    summary:
      "The theoretical CSE dissertation award recognizes work advised by Prof. Bireswar Das.",
    people: "Dr. Dharaben R. Thakkar and Prof. Bireswar Das",
    displayDate: "2025",
    date: "2025-09-01",
    category: "award",
    status: "confirmed",
    sourceLabel: "ACM India",
    sourceUrl: "https://india.acm.org/acm-india-doctoral-dissertation-award",
    homepage: true,
  },
  {
    id: "nipun-sigenergy-awards",
    title: "Prof. Nipun Batra receives ACM SIGEnergy recognitions",
    summary:
      "Prof. Batra was recognized with ACM SIGEnergy Rising Star and e-Energy Test-of-Time awards.",
    people: "Prof. Nipun Batra",
    displayDate: "2025",
    date: "2025-07-01",
    category: "award",
    status: "confirmed",
    sourceLabel: "ACM SIGEnergy",
    sourceUrl: "https://energy.acm.org/",
    homepage: true,
  },
  {
    id: "inter-iit-2024-adobe-research",
    title: "IITGN wins Inter-IIT silver in Adobe Research challenge",
    summary:
      "The team won silver at Inter-IIT Tech Meet 13.0 for a system to distinguish AI-generated images from real images.",
    people:
      "Shreyans Jain, Birudugadda Srivibhav, Chandrabhan Patel, Viraj Vekaria, Karan Gandhi, and Rugved Patil",
    displayDate: "Dec 2024",
    date: "2024-12-14",
    category: "award",
    status: "achievement",
    sourceLabel: "IITGN Technical Council",
    sourceUrl: "https://technical-council.iitgn.tech/achievements",
  },
  {
    id: "inter-iit-2024-insolation-energy",
    title: "IITGN wins Inter-IIT bronze in Insolation Energy challenge",
    summary:
      "The team won bronze at Inter-IIT Tech Meet 13.0 for predictive modeling of solar waste and scalable recycling solutions.",
    people:
      "Parth Deshpande, Siddharth Shah, Nakul S Raj, and Manasi Kulkarni",
    displayDate: "Dec 2024",
    date: "2024-12-14",
    category: "award",
    status: "achievement",
    sourceLabel: "IITGN Technical Council",
    sourceUrl: "https://technical-council.iitgn.tech/achievements",
  },
  {
    id: "comi-lingua-emnlp-2025",
    title: "COMI-LINGUA appears in EMNLP 2025 Findings",
    summary:
      "The Lingo Research Group dataset and paper support code-mixed Indian-language NLP.",
    people: "Rajvee Sheth, Himanshu Beniwal, and Prof. Mayank Singh",
    displayDate: "2025",
    date: "2025-11-01",
    category: "research",
    status: "confirmed",
    sourceLabel: "ACL Anthology",
    sourceUrl: "https://aclanthology.org/events/findings-2025/",
  },
  {
    id: "sentinelkildb-neurips-2025",
    title: "SentinelKilnDB accepted at NeurIPS 2025 Datasets and Benchmarks",
    summary:
      "The hand-validated benchmark covers 62,671 brick kilns across South Asia for AI-supported air-pollution monitoring.",
    people:
      "Rishabh Mondal, Zeel B. Patel, collaborators, and Prof. Nipun Batra",
    displayDate: "2025",
    date: "2025-11-15",
    category: "research",
    status: "confirmed",
    sourceLabel: "NeurIPS 2025",
    sourceUrl: "https://neurips.cc/virtual/2025/loc/san-diego/poster/121530",
  },
  {
    id: "shouvick-set-lab-2026",
    title: "SET Lab expands GenAI-for-software-engineering research",
    summary:
      "The lab reports top-venue 2025-26 wins across LLM-code-agent faults, mutation evaluation, and academic research support.",
    people: "Prof. Shouvick Mondal and SET Lab",
    displayDate: "2025-26",
    date: "2025-12-01",
    category: "research",
    status: "confirmed",
    sourceLabel: "SET Lab site",
    sourceUrl: "https://sites.google.com/view/shouvick/shouvick-mondal",
  },
  {
    id: "vayubuddy-2024",
    title: "VayuBuddy air-quality chatbot receives press coverage",
    summary:
      "The LLM-powered air-quality chatbot demonstrates CSE work on AI for social impact.",
    people: "Prof. Nipun Batra and collaborators",
    displayDate: "Dec 2024",
    date: "2024-12-16",
    category: "media",
    status: "confirmed",
    sourceLabel: "Indian Express e-paper",
    sourceUrl:
      "https://epaper.indianexpress.com/3953344/Ahmedabad/December-17-2024#page/3/2",
  },
  {
    id: "ganga-1b-2024",
    title: "Lingo Research Group releases Ganga-1B Hindi language model",
    summary:
      "The first pre-trained Hindi language model from the group was covered by AI and technology media.",
    people: "Lingo Research Group and Prof. Mayank Singh",
    displayDate: "Jul 2024",
    date: "2024-07-08",
    category: "media",
    status: "confirmed",
    sourceLabel: "TechChilli",
    sourceUrl:
      "https://techchilli.com/ai-india/iit-gandhinagar-unveils-ganga-1b-a-powerful-pre-trained-hindi-language-model/",
  },
];

const sortByDateDesc = (items: DepartmentNewsItem[]) =>
  [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

export const allDepartmentNews = sortByDateDesc(departmentNews);

export const homepageNewsItems = sortByDateDesc(
  departmentNews.filter((item) => item.homepage && item.category !== "award"),
).slice(0, 4);

export const homepageAwardItems = sortByDateDesc(
  departmentNews.filter((item) => item.homepage && item.category === "award"),
).slice(0, 4);
