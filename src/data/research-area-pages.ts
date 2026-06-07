export type ResearchAreaSlug =
  | 'ai'
  | 'theory'
  | 'security'
  | 'data-science'
  | 'systems'
  | 'hci';

export type ResearchAreaFaculty = {
  name: string;
  title: string;
  focus: string;
  profile?: string;
};

export type ResearchAreaWork = {
  title: string;
  detail: string;
  href?: string;
};

export type ResearchAreaVideo = {
  title: string;
  href: string;
  embedUrl: string;
};

export type ResearchAreaPage = {
  slug: ResearchAreaSlug;
  title: string;
  shortTitle: string;
  description: string;
  accent: {
    foreground: string;
    soft: string;
    background: string;
    header: string;
    border: string;
  };
  heroImage: {
    src: string;
    alt: string;
    caption: string;
  };
  themes: string[];
  faculty: ResearchAreaFaculty[];
  publications: ResearchAreaWork[];
  projects: ResearchAreaWork[];
  sources: ResearchAreaWork[];
  featuredVideo?: ResearchAreaVideo;
};

export const RESEARCH_AREAS: Record<ResearchAreaSlug, ResearchAreaPage> = {
  ai: {
    slug: 'ai',
    title: 'AI & Machine Learning',
    shortTitle: 'AI & ML',
    description:
      'Research in AI and machine learning spans multilingual NLP, computer vision, trustworthy and fair learning, AI for sustainability, and human-centred intelligent systems.',
    accent: {
      foreground: '#5572a3',
      soft: '#e8eef7',
      background: '#f5f8fc',
      header: '#fbfcfe',
      border: '#d8e2f0',
    },
    heroImage: {
      src: '/images/course-resources/machine-learning.png',
      alt: 'Machine learning course visual',
      caption: 'Models, data, language, vision, and deployment-minded AI.',
    },
    featuredVideo: {
      title: 'AI and machine learning at IIT Gandhinagar',
      href: 'https://www.youtube.com/watch?v=sx1QhfZ4yMA',
      embedUrl: 'https://www.youtube.com/embed/sx1QhfZ4yMA',
    },
    themes: [
      'Multilingual NLP and Indian-language AI',
      'Computer vision, graphics, and computational photography',
      'Efficient learning algorithms and graph ML',
      'Fair, federated, and trustworthy learning',
      'AI for sustainability, health, and assistive systems',
    ],
    faculty: [
      {
        name: 'Mayank Singh',
        title: 'Associate Professor',
        focus:
          'Multilingual NLP, large language models, scientific text mining, and AI tools for research and education.',
        profile: 'https://iitgn.ac.in/faculty/cse/fac-mayank',
      },
      {
        name: 'Nipun Batra',
        title: 'Associate Professor',
        focus:
          'Machine learning for scalable sensing, smart buildings, air quality, health sensing, and computational sustainability.',
        profile: 'https://nipunbatra.github.io/',
      },
      {
        name: 'Anirban Dasgupta',
        title: 'Professor',
        focus:
          'Algorithms and machine learning at scale, sketching, sampling, graph learning, and efficient ML pipelines.',
        profile: 'https://iitgn.ac.in/faculty/cse/fac-anirban',
      },
      {
        name: 'Yogesh Kumar Meena',
        title: 'Assistant Professor',
        focus:
          'Human-AI interaction, brain-computer interfaces, eye tracking, multimodal interaction, and assistive AI.',
        profile: 'https://yogeshmeena.com/',
      },
      {
        name: 'Manisha Padala',
        title: 'Assistant Professor',
        focus:
          'Fairness, federated learning, differential privacy, strategic clients, and trustworthy distributed ML.',
        profile: 'https://iitgn.ac.in/faculty/cse/fac-manisha',
      },
      {
        name: 'Shanmuganathan Raman',
        title: 'Professor',
        focus:
          'Computer vision, deep learning, computational photography, image/video processing, and graphics.',
        profile: 'https://shanmuga.people.iitgn.ac.in/',
      },
    ],
    publications: [
      {
        title:
          'FIT-GNN: Faster Inference Time for GNNs that FIT in Memory Using Coarsening',
        detail: 'TMLR 2026 - efficient graph neural-network inference.',
      },
      {
        title:
          'Gaslight, Gatekeep, V1-V3: Early Visual Cortex Alignment Shields Vision-Language Models from Sycophantic Manipulation',
        detail: '2026 preprint - robustness and alignment for vision-language models.',
      },
      {
        title:
          'GF-Score: Certified Class-Conditional Robustness Evaluation with Fairness Guarantees',
        detail: '2026 preprint - fairness-aware robustness assessment.',
      },
      {
        title:
          'MERLiN: Single-Shot Material Estimation and ReLighting for Photometric Stereo',
        detail: 'ECCV 2024 - computer vision and inverse rendering.',
      },
    ],
    projects: [
      {
        title:
          "Chitrabhasha: Developing India's Largest Dataset and Foundation Models for Multimodal AI",
        detail: 'ANRF Advanced Research Grant led by Mayank Singh.',
      },
      {
        title:
          'Scalable Detection of Brick Kilns from Low-Resolution Satellite Imagery for Environmental Compliance',
        detail: 'ANRF project led by Nipun Batra.',
      },
      {
        title:
          'iGazeBuddy: Multimodal gaze-controlled learning system for dyslexia support',
        detail: 'ANRF PMECRG project led by Yogesh Kumar Meena.',
      },
      {
        title:
          'Fair Federated Learning Framework in the Presence of Heterogeneous, Strategic, and Malicious Clients',
        detail: 'ANRF early-career grant led by Manisha Padala.',
      },
    ],
    sources: [
      {
        title: 'Lingo Labs research facilities entry',
        detail: 'Public lab description for Mayank Singh and Lingo Labs.',
        href: 'https://iitgn.ac.in/research/facilities',
      },
      {
        title: 'Nipun Batra homepage and Sustainability Lab',
        detail: 'AI-powered sustainability and sensing research overview.',
        href: 'https://nipunbatra.github.io/',
      },
      {
        title: 'Data Science Lab',
        detail: 'Algorithms and machine learning for efficient ML pipelines.',
        href: 'https://labs.iitgn.ac.in/datascience/',
      },
      {
        title: 'Shanmuganathan Raman homepage',
        detail: 'Computer vision, graphics, and deep learning interests.',
        href: 'https://shanmuga.people.iitgn.ac.in/',
      },
    ],
  },
  theory: {
    slug: 'theory',
    title: 'Theoretical Computer Science',
    shortTitle: 'Theory',
    description:
      'The theory group studies algorithms, complexity, graph problems, algebraic computation, quantum algorithms, computational social choice, and the foundations of efficient computation.',
    accent: {
      foreground: '#746099',
      soft: '#eeeaf5',
      background: '#f8f6fb',
      header: '#fcfbfd',
      border: '#ddd6e9',
    },
    heroImage: {
      src: '/images/course-resources/parameterized-algorithms.png',
      alt: 'Parameterized algorithms course visual',
      caption: 'Algorithms, lower bounds, graph structure, and computation.',
    },
    featuredVideo: {
      title: 'Theoretical computer science at IIT Gandhinagar',
      href: 'https://www.youtube.com/watch?v=JqvVE67LiX8',
      embedUrl: 'https://www.youtube.com/embed/JqvVE67LiX8',
    },
    themes: [
      'Parameterized and exact algorithms',
      'Graph algorithms and dynamic graph problems',
      'Computational complexity and algebraic computation',
      'Quantum algorithms and algebraic/combinatorial problems',
      'Computational social choice and games',
    ],
    faculty: [
      {
        name: 'Neeldhara Misra',
        title: 'Associate Professor',
        focus:
          'Parameterized algorithms, computational social choice, combinatorial games, satisfiability, and graph problems.',
        profile: 'https://www.neeldhara.com/',
      },
      {
        name: 'Manoj D Gupta',
        title: 'Associate Professor',
        focus:
          'Graph algorithms, dynamic graphs, shortest paths, and algorithmic graph theory.',
        profile: 'https://iitgn.ac.in/faculty/cse/fac-manoj',
      },
      {
        name: 'Bireswar Das',
        title: 'Associate Professor',
        focus:
          'Algorithms for algebraic and combinatorial problems, quantum algorithms, and complexity theory.',
        profile: 'https://sites.google.com/site/bireswar/home',
      },
      {
        name: 'Balagopal Komarath',
        title: 'Assistant Professor',
        focus:
          'Computational complexity, algebraic complexity, circuit complexity, and low-level computational models.',
        profile: 'https://bkomarath.rbgo.in/',
      },
      {
        name: 'Anirban Dasgupta',
        title: 'Professor',
        focus:
          'Randomized algorithms, sketching, large-scale data algorithms, and algorithmic foundations of machine learning.',
        profile: 'https://iitgn.ac.in/faculty/cse/fac-anirban',
      },
    ],
    publications: [
      {
        title: 'Finding and counting patterns in sparse graphs',
        detail: 'JCSS 2026 - graph algorithms and sparse graph structure.',
      },
      {
        title: 'On the Parameterized Complexity of Diverse SAT',
        detail: 'Theoretical Computer Science 2026 - parameterized complexity.',
      },
      {
        title:
          'VP, VNP and Algebraic Branching Programs over Min-Plus Semirings',
        detail: '2026 preprint - algebraic complexity over semirings.',
      },
      {
        title: 'Ferry Cover with Connectivity Constraints',
        detail: 'FUN 2026 - algorithmic graph covering constraints.',
      },
    ],
    projects: [
      {
        title: 'Approximate Shortest Paths in Graphs',
        detail: 'ANRF ARG MATRICS project led by Manoj D Gupta.',
      },
      {
        title: 'Quantum Algorithms for Group Theoretic Problems',
        detail: 'ANRF ARG MATRICS project led by Bireswar Das.',
      },
      {
        title:
          'On the Role of Multilinearity and Monotonicity in Algebraic Computation',
        detail: 'ANRF ARG MATRICS project led by Balagopal Komarath.',
      },
    ],
    sources: [
      {
        title: 'CSE research archive',
        detail: 'Historical department research descriptions and faculty summaries.',
        href: 'https://cse.iitgn.ac.in/research',
      },
      {
        title: 'Neeldhara Misra homepage',
        detail: 'Algorithms, computational social choice, and games.',
        href: 'https://www.neeldhara.com/',
      },
      {
        title: 'Balagopal Komarath homepage',
        detail: 'Complexity theory and algorithms.',
        href: 'https://bkomarath.rbgo.in/',
      },
      {
        title: 'Parameterized Algorithms NPTEL course',
        detail: 'Public teaching material reflecting theory strengths.',
        href: 'https://onlinecourses.nptel.ac.in/noc23_cs102/preview',
      },
    ],
  },
  security: {
    slug: 'security',
    title: 'Security & Privacy',
    shortTitle: 'Security',
    description:
      'Security and privacy research connects formal verification, language-based security, web privacy, usable consent systems, privacy-preserving machine learning, and trustworthy public-interest systems.',
    accent: {
      foreground: '#9b5a69',
      soft: '#f5e8eb',
      background: '#fbf6f7',
      header: '#fdfbfb',
      border: '#ead4da',
    },
    heroImage: {
      src: '/images/course-resources/operating-systems.png',
      alt: 'Systems course visual used as a security and software foundation image',
      caption: 'Secure systems, privacy guarantees, and trustworthy software.',
    },
    themes: [
      'Formal methods and protocol verification',
      'Language-based security and information flow',
      'Web privacy and browser consent management',
      'Privacy-preserving and fair machine learning',
      'Secure embedded and public-interest computing systems',
    ],
    faculty: [
      {
        name: 'Abhishek Bichhawat',
        title: 'Assistant Professor',
        focus:
          'Language-based security, formal verification, web security, usable privacy, and policy enforcement.',
        profile: 'https://abhishek.people.iitgn.ac.in/',
      },
      {
        name: 'Manisha Padala',
        title: 'Assistant Professor',
        focus:
          'Fair and federated learning, differential privacy, strategic clients, and secure distributed ML systems.',
        profile: 'https://iitgn.ac.in/faculty/cse/fac-manisha',
      },
      {
        name: 'Rajat Moona',
        title: 'Professor and Director',
        focus:
          'Embedded systems, smart cards, RFID, secure access systems, VLSI, and public-scale trusted computing.',
        profile: 'https://iitgn.ac.in/faculty/cse/fac-rajat-moona',
      },
    ],
    publications: [
      {
        title:
          "Johnny Can't Revoke Consent Either: Measuring Compliance of Consent Revocation on the Web",
        detail: 'PETS 2025 - web privacy and consent revocation compliance.',
      },
      {
        title:
          'Least Privilege Access for Persistent Storage Mechanisms in Web Browsers',
        detail: 'WWW 2025 - browser storage and least-privilege web security.',
      },
      {
        title:
          'Fall-Through Semantics for Mitigating Timing-Based Side Channel Leaks',
        detail: 'FSTTCS 2025 - semantics and side-channel mitigation.',
      },
      {
        title:
          'DY*: A Modular Symbolic Verification Framework for Executable Cryptographic Protocol Code',
        detail: 'IEEE EuroS&P 2021 - verified cryptographic protocol code.',
      },
    ],
    projects: [
      {
        title: 'Understanding and Ensuring the Privacy of User Data',
        detail: 'SERB project led by Abhishek Bichhawat.',
      },
      {
        title: 'Verifying Security Properties of Group Messaging Protocols',
        detail: 'CEFIPRA international project led by Abhishek Bichhawat.',
      },
      {
        title:
          'Towards a Private yet Functional Web: Designing a Usable and Privacy-compliant Consent Management Framework for Online Browsing',
        detail: 'ANRF Advanced Research Grant led by Abhishek Bichhawat.',
      },
      {
        title:
          'Fair Federated Learning Framework in the Presence of Heterogeneous, Strategic, and Malicious Clients',
        detail: 'ANRF early-career project led by Manisha Padala.',
      },
    ],
    sources: [
      {
        title: 'Abhishek Bichhawat homepage',
        detail: 'Secure systems by design and formal security guarantees.',
        href: 'https://abhishek.people.iitgn.ac.in/',
      },
      {
        title: 'Abhishek Bichhawat IITGN profile',
        detail: 'Language-based security, verification, and IoT security interests.',
        href: 'https://iitgn.ac.in/faculty/cse/fac-abhishek',
      },
      {
        title: 'Rajat Moona IITGN profile',
        detail: 'Security, smart cards, RFID, embedded systems, and patents.',
        href: 'https://iitgn.ac.in/faculty/cse/fac-rajat-moona',
      },
      {
        title: 'Privacy and web consent publications',
        detail: 'Recent web privacy work involving IITGN security researchers.',
        href: 'https://arxiv.org/abs/2411.15414',
      },
    ],
  },
  'data-science': {
    slug: 'data-science',
    title: 'Data Science',
    shortTitle: 'Data Science',
    description:
      'Data science research at CSE links scalable algorithms, sensing, climate and urban resilience, social-network analysis, scientific text, and reproducible data-driven systems.',
    accent: {
      foreground: '#527d68',
      soft: '#e5f1ea',
      background: '#f5faf7',
      header: '#fbfdfc',
      border: '#cfe2d7',
    },
    heroImage: {
      src: '/images/course-resources/scalable-data-science.png',
      alt: 'Scalable data science course visual',
      caption: 'Scalable data, infrastructure intelligence, and real-world analytics.',
    },
    featuredVideo: {
      title: 'The AI Resilience and Command Centre at the Research Park',
      href: 'https://www.youtube.com/watch?v=mNJJXm3xtA8',
      embedUrl: 'https://www.youtube.com/embed/mNJJXm3xtA8',
    },
    themes: [
      'Sketching, sampling, and coresets for large data',
      'AI for sustainability, energy, air quality, and health',
      'Physics-guided models for climate and urban resilience',
      'Scientific text mining and social-network analytics',
      'Open benchmarks, reproducibility, and deployment-oriented data systems',
    ],
    faculty: [
      {
        name: 'Anirban Dasgupta',
        title: 'Professor',
        focus:
          'Data science algorithms, randomized numerical linear algebra, sketching, sampling, and information dynamics.',
        profile: 'https://labs.iitgn.ac.in/datascience/',
      },
      {
        name: 'Nipun Batra',
        title: 'Associate Professor',
        focus:
          'Scalable sensing, energy analytics, air quality, health sensing, and AI for sustainability.',
        profile: 'https://sustainability-lab.github.io/',
      },
      {
        name: 'Udit Bhatia',
        title: 'Associate Professor',
        focus:
          'Physics-guided data science for urban flooding, climate extremes, resilient infrastructure, and networks.',
        profile: 'https://iitgn.ac.in/faculty/earths/fac-udit',
      },
      {
        name: 'Mayank Singh',
        title: 'Associate Professor',
        focus:
          'Scientific text mining, scholarly knowledge discovery, social networks, and AI-enabled research tools.',
        profile: 'https://iitgn.ac.in/faculty/cse/fac-mayank',
      },
    ],
    publications: [
      {
        title: 'Streaming Coresets for Symmetric Tensor Factorization',
        detail: 'ICML 2020 - scalable coresets and tensor factorization.',
      },
      {
        title:
          'Spatially Regularized Graph Attention Autoencoder Framework for Detecting Rainfall Extremes',
        detail: '2024 preprint - graph learning for climate extremes.',
      },
      {
        title:
          'Vartalaap: What Drives #AirQuality Discussions: Politics, Pollution or Pseudo-science?',
        detail: 'PACM HCI 2021 - public discourse and air-quality analytics.',
      },
      {
        title:
          'Physics-guided Emulators Reveal Resilience and Fragility under Operational Latencies and Outages',
        detail: '2025 preprint - physics-guided models for resilience.',
      },
    ],
    projects: [
      {
        title:
          'AI Resilience and Command Centre for data-driven climate-risk management',
        detail: 'IITGN centre focused on anticipatory urban flood and climate-risk management.',
      },
      {
        title: 'Automated Crop Mapping using time-series satellite and ancillary data',
        detail: 'ISRO-sponsored project led by Nipun Batra.',
      },
      {
        title:
          'Network-of-Network Lens to quantify resilience of coupled infrastructure systems',
        detail: 'ANRF/SERB-supported project led by Udit Bhatia.',
      },
      {
        title:
          'Development of Large Language Models based chat plugin for website-specific queries',
        detail: 'Consultancy project led by Mayank Singh.',
      },
    ],
    sources: [
      {
        title: 'Data Science Lab',
        detail: 'Algorithms, ML pipelines, sketching, and social-network dynamics.',
        href: 'https://labs.iitgn.ac.in/datascience/',
      },
      {
        title: 'Sustainability Lab',
        detail: 'AI, sensing, sustainability, energy, health, and air quality.',
        href: 'https://sustainability-lab.github.io/members.html',
      },
      {
        title: 'Udit Bhatia IITGN profile',
        detail: 'Physics-guided ML, urban flooding, and climate resilience.',
        href: 'https://iitgn.ac.in/faculty/earths/fac-udit',
      },
      {
        title: 'ARC Centre news',
        detail: 'Data-driven climate-risk management and resilient cities.',
        href: 'https://news.iitgn.ac.in/iit-gandhinagar-launches-ai-resilience-and-command-centre-for-data-driven-climate-risk-management/',
      },
    ],
  },
  systems: {
    slug: 'systems',
    title: 'Systems & Architecture',
    shortTitle: 'Systems',
    description:
      'Systems research covers computer architecture, memory and storage systems, cloud and edge platforms, networked systems, software engineering, embedded systems, and deployment-oriented computing.',
    accent: {
      foreground: '#987247',
      soft: '#f3eadc',
      background: '#fbf8f2',
      header: '#fdfcf9',
      border: '#e6d8c4',
    },
    heroImage: {
      src: '/images/facilities/singularity/server2.jpg',
      alt: 'Department GPU server rack',
      caption: 'Systems, architecture, infrastructure, and performance at scale.',
    },
    featuredVideo: {
      title: 'Systems and architecture at IIT Gandhinagar',
      href: 'https://www.youtube.com/watch?v=JHoRJQz2N5o',
      embedUrl: 'https://www.youtube.com/embed/JHoRJQz2N5o',
    },
    themes: [
      'Computer architecture, memory, storage, and accelerators',
      'Network function virtualization, SDN, edge, and cloud systems',
      'Software testing, evolution, maintenance, and repositories',
      'Sensing systems and deployed computing for sustainability',
      'Embedded systems, VLSI, operating systems, and public-scale infrastructure',
    ],
    faculty: [
      {
        name: 'Manu Awasthi',
        title: 'Associate Professor of Practice',
        focus:
          'Computer architecture, memory and storage, cloud systems, performance optimization, and RISC-V pedagogy.',
        profile: 'https://manuawasthi.in/',
      },
      {
        name: 'Sameer G Kulkarni',
        title: 'Assistant Professor',
        focus:
          'NFV, SDN, edge/cloud platforms, distributed systems, network security, and resource management.',
        profile: 'https://iitgn.ac.in/faculty/cse/fac-sameer',
      },
      {
        name: 'Shouvick Mondal',
        title: 'Assistant Professor',
        focus:
          'Software testing, evolution, maintenance, mining repositories, logging, and empirical software engineering.',
        profile: 'https://iitgn.ac.in/faculty/cse/fac-shouvick',
      },
      {
        name: 'Rajat Moona',
        title: 'Professor and Director',
        focus:
          'Computer architecture, VLSI, operating systems, embedded systems, smart cards, and RFID.',
        profile: 'https://iitgn.ac.in/faculty/cse/fac-rajat-moona',
      },
      {
        name: 'Nipun Batra',
        title: 'Associate Professor',
        focus:
          'Scalable sensing systems, sustainable computing, health sensing, and deployed AI systems.',
        profile: 'https://nipunbatra.github.io/',
      },
    ],
    publications: [
      {
        title: 'MCP-Diag: A Deterministic, Protocol-Driven Architecture for AI-Native Network Diagnostics',
        detail: 'COMSNETS 2026 - AI-native network diagnostics.',
      },
      {
        title:
          'Memory Bottlenecks in Quantum Simulation: Cache Contention and Adaptive Allocation Policy',
        detail: 'COMSNETS 2026 - memory and cache behavior in simulation.',
      },
      {
        title:
          'Hardware-Software Co-Design of a Collaborative DNN Accelerator for 3D Stacked Memories with Multi-Channel Data',
        detail: 'ASP-DAC 2024 - accelerator architecture and memory systems.',
      },
      {
        title: 'VulNet: Towards Improving Vulnerability Management in the Maven Ecosystem',
        detail: 'EMSE 2024 - software engineering and vulnerability management.',
      },
    ],
    projects: [
      {
        title: 'Development of Quantum Machine Learning Use Cases and Applications',
        detail: 'MeitY-sponsored project led by Sameer G Kulkarni.',
      },
      {
        title:
          'Specialized language models deployable on endpoints with low compute resources',
        detail: 'ISRO-sponsored project led by Anirban Dasgupta with systems relevance.',
      },
      {
        title: 'Project Madhava',
        detail:
          'Hands-on computer systems pedagogy and RISC-V based microcontroller development led by Manu Awasthi.',
      },
      {
        title: 'Department compute infrastructure',
        detail:
          'GPU-based department servers and HPC resources supporting systems and AI experiments.',
      },
    ],
    sources: [
      {
        title: 'Manu Awasthi homepage',
        detail: 'Computer architecture, cloud systems, and Project Madhava.',
        href: 'https://manuawasthi.in/',
      },
      {
        title: 'Sameer Kulkarni CSE research summary',
        detail: 'NFV, SDN, distributed systems, and data reliability.',
        href: 'https://cse.iitgn.ac.in/research',
      },
      {
        title: 'Shouvick Mondal IITGN profile',
        detail: 'Software testing, evolution, and maintenance.',
        href: 'https://beta.iitgn.ac.in/faculty/cse/shouvick',
      },
      {
        title: 'Rajat Moona IITGN profile',
        detail: 'Computer architecture, VLSI, operating systems, embedded systems.',
        href: 'https://iitgn.ac.in/faculty/cse/fac-rajat-moona',
      },
    ],
  },
  hci: {
    slug: 'hci',
    title: 'HCI & Cognitive Science',
    shortTitle: 'HCI',
    description:
      'HCI and cognitive-science work brings together human-AI interaction, brain-computer interfaces, eye tracking, accessibility, multimodal systems, neuroscience, and community health.',
    accent: {
      foreground: '#4e7b78',
      soft: '#e4f1f0',
      background: '#f5faf9',
      header: '#fbfdfd',
      border: '#cde3e1',
    },
    heroImage: {
      src: '/images/course-resources/probabilistic-machine-learning.png',
      alt: 'Probabilistic machine learning visual used for HCI and cognitive systems',
      caption: 'Human-centred intelligent systems for interaction, health, and access.',
    },
    themes: [
      'Human-AI interaction and explainable interfaces',
      'Brain-computer interfaces, EEG, EMG, and eye tracking',
      'Assistive technologies for disability, aging, and dyslexia',
      'Cognitive modelling and neural decoding',
      'Multimodal, multilingual, and accessible interaction design',
    ],
    faculty: [
      {
        name: 'Yogesh Kumar Meena',
        title: 'Assistant Professor',
        focus:
          'HCI, BCI, eye tracking, motor rehabilitation, assistive systems, user experience, and community health.',
        profile: 'https://yogeshmeena.com/',
      },
      {
        name: 'Krishna Prasad Miyapuram',
        title: 'Affiliated Faculty',
        focus:
          'Cognitive science, computational neuroscience, EEG, brain decoding, and cognition-aware AI.',
        profile: 'https://cogs.iitgn.ac.in/faculty/',
      },
      {
        name: 'Shanmuganathan Raman',
        title: 'Professor',
        focus:
          'Vision, EEG-to-text collaborations, deep learning, image understanding, and multimodal perception.',
        profile: 'https://shanmuga.people.iitgn.ac.in/',
      },
      {
        name: 'Samit Bhattacharya',
        title: 'Visiting Associate Professor',
        focus:
          'Human-computer interaction and user-centred computing.',
      },
    ],
    publications: [
      {
        title:
          'Operationalizing Self-Perceptions of Aging Using Reflection Probe and SPA Design Cards with HCI Practitioners',
        detail: 'CHI Extended Abstracts 2026 - HCI methods for aging and design.',
      },
      {
        title:
          'Design and Evaluation of a Multimodal Elevator System with Gaze and Multilingual Voice Controls',
        detail: 'IndiaHCI 2025 - accessible multimodal interaction.',
      },
      {
        title:
          'Explainable artificial intelligence approaches for brain-computer interfaces: a review and design space',
        detail: 'Journal of Neural Engineering 2024 - XAI for BCI.',
      },
      {
        title:
          'Hierarchic-EEG2Text: Assessing EEG-To-Text Decoding across Hierarchical Abstraction Levels',
        detail: '2026 preprint - neural decoding and language abstraction.',
      },
    ],
    projects: [
      {
        title:
          'A Brain-Computer Interface Driven Mental Fatigue Monitoring System to Improve Stroke Rehabilitation Therapy',
        detail:
          'International project with Department for the Economy, Northern Ireland.',
      },
      {
        title:
          'iGazeBuddy: Multimodal Gaze-Controlled On-Screen Assisted Learning System for Dyslexia Detection and Intervention in Regional Indian Languages',
        detail: 'ANRF PMECRG project led by Yogesh Kumar Meena.',
      },
      {
        title:
          'System for augmentative and alternative communication for people with severe speech and motor disabilities',
        detail: 'Indian patent involving Yogesh Kumar Meena.',
      },
      {
        title: 'HAIx Lab',
        detail:
          'Lab focused on intelligent technologies and transforming community health and care.',
      },
    ],
    sources: [
      {
        title: 'Yogesh Kumar Meena homepage',
        detail: 'HAIx Lab, HCI, BCI, eye tracking, and assistive technology.',
        href: 'https://yogeshmeena.com/',
      },
      {
        title: 'HAIx Lab team page',
        detail: 'Human-AI Interaction Lab people and directions.',
        href: 'https://labs.iitgn.ac.in/haix/team/',
      },
      {
        title: 'Cognitive Science research facilities',
        detail: 'HAIx Lab and Brain Lab context at IIT Gandhinagar.',
        href: 'https://cogs.iitgn.ac.in/research-2/research-facilities/',
      },
      {
        title: 'Postdoctoral position description',
        detail: 'Hybrid BCI and HAIx Lab project description.',
        href: 'https://cse.noticebard.com/wp-content/uploads/sites/23/2025/01/Post-Doctoral-Fellow-at-Computer-Science-Dept.-IIT-Gandhinagar.pdf',
      },
    ],
  },
};

export const RESEARCH_AREA_ORDER: ResearchAreaSlug[] = [
  'ai',
  'theory',
  'security',
  'data-science',
  'systems',
  'hci',
];
