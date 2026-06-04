export type NewsCategory =
  | "media"
  | "research"
  | "award"
  | "event"
  | "infrastructure"
  | "service";

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
  service: "Service",
};

export const STATUS_LABELS: Record<NewsStatus, string> = {
  confirmed: "Confirmed",
  achievement: "Achievement",
};

export const departmentNews: DepartmentNewsItem[] = [
  {
    id: "abhishek-asiaccs-2026-track-chair",
    title: "Prof. Abhishek Bichhawat named AsiaCCS 2026 track co-chair",
    summary:
      "Prof. Bichhawat is track co-chair for Software Security, Formal Methods, and Programming Languages at ACM AsiaCCS 2026 in Bengaluru.",
    people: "Prof. Abhishek Bichhawat",
    displayDate: "June 2026",
    date: "2026-06-01",
    category: "service",
    status: "confirmed",
    sourceLabel: "ACM AsiaCCS 2026 Program Committee",
    sourceUrl: "https://asiaccs2026.cse.iitkgp.ac.in/program-committee/",
  },
  {
    id: "abhishek-acm-summer-school-systems-ml-2026",
    title:
      "Prof. Abhishek Bichhawat serves as academic coordinator for ACM India Summer School on Systems for ML",
    summary:
      "The VIT-hosted ACM India summer school runs from 1-12 June 2026 and covers scalable ML systems, deep learning infrastructure, hardware accelerators, distributed ML, Edge AI, ML compilers, and explainable AI.",
    people: "Prof. Abhishek Bichhawat",
    displayDate: "June 2026",
    date: "2026-06-01",
    category: "service",
    status: "confirmed",
    sourceLabel: "VIT brochure",
    sourceUrl: "https://vit.ac.in/wp-content/uploads/2026/05/ACM_VIT-brochure-U3.pdf",
  },
  {
    id: "abhishek-acm-indics-secure-usable-systems-2026",
    title:
      "Prof. Abhishek Bichhawat organizes ACM IndiCS workshop on secure and usable systems",
    summary:
      "The 2026 ACM IndiCS workshop focuses on designing secure and usable systems for humans, connecting security, privacy, HCI, and systems perspectives.",
    people: "Prof. Abhishek Bichhawat",
    displayDate: "2026",
    date: "2026-06-01",
    category: "service",
    status: "confirmed",
    sourceLabel: "ACM IndiCS",
    sourceUrl: "https://india.acm.org/research/indics",
  },
  {
    id: "shanmuga-neurips-2026-area-chair",
    title: "Prof. Shanmuganathan Raman serves as NeurIPS 2026 Area Chair",
    summary:
      "Prof. Raman is contributing to the NeurIPS 2026 main-track review process as an Area Chair.",
    people: "Prof. Shanmuganathan Raman",
    displayDate: "2026",
    date: "2026-05-06",
    category: "service",
    status: "confirmed",
    sourceLabel: "NeurIPS 2026 Main Track Handbook",
    sourceUrl: "https://neurips.cc/Conferences/2026/MainTrackHandbook",
  },
  {
    id: "neeldhara-aamas-2026-area-chair",
    title: "Prof. Neeldhara Misra serves as AAMAS 2026 Area Chair",
    summary:
      "Prof. Misra is listed as an Area Chair for the Game Theory and Economic Paradigms area at AAMAS 2026.",
    people: "Prof. Neeldhara Misra",
    displayDate: "2026",
    date: "2026-05-25",
    category: "service",
    status: "confirmed",
    sourceLabel: "AAMAS 2026 Area Chairs",
    sourceUrl: "https://cyprusconferences.org/aamas2026/area-chairs/",
  },
  {
    id: "neeldhara-caldam-2026-pc-cochair",
    title: "Prof. Neeldhara Misra serves as CALDAM 2026 PC co-chair",
    summary:
      "Prof. Misra and Prof. Arti Pandey are program committee co-chairs for the 12th International Conference on Algorithms and Discrete Applied Mathematics.",
    people: "Prof. Neeldhara Misra and Prof. Arti Pandey",
    displayDate: "Feb 2026",
    date: "2026-02-12",
    category: "service",
    status: "confirmed",
    sourceLabel: "CALDAM 2026 Committees",
    sourceUrl: "https://caldam2026.iitdh.ac.in/committees",
  },
  {
    id: "abhishek-jcs-associate-editor-2026",
    title:
      "Prof. Abhishek Bichhawat joins Journal of Computer Security editorial board",
    summary:
      "The Journal of Computer Security editorial board lists Prof. Bichhawat among its Associate Editors.",
    people: "Prof. Abhishek Bichhawat",
    displayDate: "2026",
    date: "2026-01-01",
    category: "service",
    status: "confirmed",
    sourceLabel: "Journal of Computer Security editorial board",
    sourceUrl: "https://journals.sagepub.com/editorial-board/JCU",
  },
  {
    id: "abhishek-plas-2025-pc-cochair",
    title: "Prof. Abhishek Bichhawat serves as PLAS 2025 PC co-chair",
    summary:
      "PLAS 2025, the 20th Workshop on Programming Languages and Analysis for Security, was co-located with ACM CCS 2025 in Taipei.",
    people: "Prof. Abhishek Bichhawat",
    displayDate: "Oct 2025",
    date: "2025-10-13",
    category: "service",
    status: "confirmed",
    sourceLabel: "PLAS 2025",
    sourceUrl: "https://plas25.github.io/",
  },
  {
    id: "neeldhara-ctis-2024-pc-cochair",
    title: "Prof. Neeldhara Misra serves as CTiS 2024 PC co-chair",
    summary:
      "Prof. Misra was program committee co-chair for ACM India's Computational Thinking in Schools 2024 conference with Geeta Ghormade.",
    people: "Prof. Neeldhara Misra and Geeta Ghormade",
    displayDate: "Jul 2024",
    date: "2024-07-05",
    category: "service",
    status: "confirmed",
    sourceLabel: "CTiS 2024",
    sourceUrl: "https://event.india.acm.org/ctis/ctis-2024/",
  },
  {
    id: "neeldhara-ipec-2023-pc-cochair",
    title: "Prof. Neeldhara Misra serves as IPEC 2023 PC co-chair",
    summary:
      "Prof. Misra and Magnus Wahlström were program committee co-chairs for the 18th International Symposium on Parameterized and Exact Computation.",
    people: "Prof. Neeldhara Misra and Magnus Wahlström",
    displayDate: "Sep 2023",
    date: "2023-09-06",
    category: "service",
    status: "confirmed",
    sourceLabel: "IPEC 2023",
    sourceUrl: "https://algo-conference.org/2023/ipec",
  },
  {
    id: "neeldhara-acmw-india-council",
    title: "Prof. Neeldhara Misra serves on the ACM-W India Council",
    summary:
      "Prof. Misra has served as a member of the ACM-India ACM-W Council since 2019.",
    people: "Prof. Neeldhara Misra",
    displayDate: "2019-present",
    date: "2026-01-01",
    category: "service",
    status: "confirmed",
    sourceLabel: "IITGN faculty chair profile",
    sourceUrl: "https://iitgn.ac.in/faculty/chairs/avss",
  },
  {
    id: "neeldhara-iarcs-council-2020-2023",
    title: "Prof. Neeldhara Misra served on the IARCS Council",
    summary:
      "Prof. Misra served as a council member of the Indian Association for Research in Computing Science from 2020 to 2023.",
    people: "Prof. Neeldhara Misra",
    displayDate: "2020-23",
    date: "2023-12-01",
    category: "service",
    status: "confirmed",
    sourceLabel: "IARCS Council",
    sourceUrl: "https://www.iarcs.org.in/about/council.php",
  },
  {
    id: "neeldhara-acm-internal-affairs-2020-2022",
    title: "Prof. Neeldhara Misra served on the ACM Internal Affairs Committee",
    summary:
      "Prof. Misra served as a member of the ACM Internal Affairs Committee from 2020 to 2022.",
    people: "Prof. Neeldhara Misra",
    displayDate: "2020-22",
    date: "2022-12-01",
    category: "service",
    status: "confirmed",
    sourceLabel: "Neeldhara Misra CV",
    sourceUrl: "https://www.neeldhara.com/CV.pdf",
  },
  {
    id: "neeldhara-acm-summer-winter-schools-steering",
    title:
      "Prof. Neeldhara Misra served on the ACM-India Summer and Winter Schools steering committee",
    summary:
      "Prof. Misra was a steering committee member for ACM-India Summer and Winter Schools from 2019 to 2022.",
    people: "Prof. Neeldhara Misra",
    displayDate: "2019-22",
    date: "2022-12-01",
    category: "service",
    status: "confirmed",
    sourceLabel: "ACM India Annual Report",
    sourceUrl:
      "https://www.acm.org/binaries/content/assets/about/annual-reports/india_council_fy-22.pdf",
  },
  {
    id: "neeldhara-algorithms-special-issue-2019",
    title:
      "Prof. Neeldhara Misra co-guest edited Algorithms special issue",
    summary:
      "Prof. Misra co-guest edited the Algorithms open-access special issue New Frontiers in Parameterized Complexity and Algorithms.",
    people: "Prof. Neeldhara Misra, Frances Rosamond, and Meirav Zehavi",
    displayDate: "2019",
    date: "2019-09-30",
    category: "service",
    status: "confirmed",
    sourceLabel: "Algorithms special issue",
    sourceUrl:
      "https://www.mdpi.com/journal/algorithms/special_issues/Parameterized_Complexity",
  },
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
      "The ACM India dissertation award recognizes work advised by Prof. Bireswar Das.",
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
