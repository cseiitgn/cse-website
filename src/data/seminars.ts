export type SeminarType =
  | 'CSE seminar'
  | 'CS theory seminar'
  | 'Faculty candidate seminar'
  | 'Virtual research seminar'
  | 'Research proposal session'
  | 'Teaching session';

export interface SeminarEntry {
  id: string;
  type: SeminarType;
  title: string;
  speaker: string;
  affiliation?: string;
  date: string;
  displayDate: string;
  time?: string;
  venue?: string;
  summary?: string;
  abstract?: string;
  bio?: string;
}

export const seminarTypeLabels: Record<SeminarType, string> = {
  'CSE seminar': 'CSE Seminar',
  'CS theory seminar': 'CS Theory Seminar',
  'Faculty candidate seminar': 'Faculty Candidate Seminar',
  'Virtual research seminar': 'Virtual Research Seminar',
  'Research proposal session': 'Research Proposal Session',
  'Teaching session': 'Teaching Session',
};

const aninditaMaitiBio =
  'Dr. Anindita Maiti is a Postdoctoral Fellow at the Perimeter Institute for Theoretical Physics, cross-affiliated with Prof. Roger Melko’s group Perimeter Institute Quantum Intelligence Lab (PIQuIL) since September 2023. Previously, Anindita held a short postdoctoral appointment in physics for ML foundations, supervised by Prof. Cengiz Pehlevan, at Harvard Applied Math (May-August 2023). She earned her PhD in theoretical high-energy physics (string theory and particle theory division) at Northeastern University and the NSF AI Institute for Artificial Intelligence and Fundamental Interactions (IAIFI) in May 2023, under the supervision of Prof. James Halverson. Anindita received her Integrated Bachelors and Masters in Engineering Physics at IIT Bombay in Aug 2017, supervised by Prof. Urjit Yajnik. Anindita’s research lies at the intersection of AI/ML, quantum, and statistical physics. In short, she works on Physics of Learning and ML for Quantum. Broadly, Anindita uses theoretical physics concepts: such as Feynman path integrals, renormalization group flow, computational statistics, and random matrix theory, to develop a physics-informed theoretical foundation for ML and to guide the principled design of AI systems. Anindita applies this framework to construct interpretable and trustworthy AI- and ML-based simulation strategies for quantum field theory and quantum many-body physics.';

const rawSeminarEntries = [
  {
    id: 'sunil-chandran-graph-theory-quantum-physics-2026',
    type: 'CS theory seminar',
    title: 'Graph Theory in Quantum Physics!',
    speaker: 'Prof. L. Sunil Chandran',
    affiliation: 'Indian Institute of Science, Bangalore',
    date: '2026-06-10',
    displayDate: '10 Jun 2026',
    time: '11:00 am IST',
    venue: 'AB 7/208',
    summary:
      'This CS theory seminar connects graph perfect matchings and colourings with constructability questions in photonic quantum technologies. Refreshments will be served before the talk.',
    abstract:
      "In 2018, Krenn reported that certain problems related to the perfect matchings and colourings of graphs emerge out of studying constructability of general quantum states using modern photonic technologies.\n\nHe realized that if we can prove that the weighted matching index of a graph, a parameter defined in terms of perfect matchings and colourings of the graph is at most 2, that could lead to exciting insights on the potential of resources of quantum inference. Motivated by this, he conjectured that the weighted matching index of any graph is at most 2. The first result on this conjecture was by Bogdanov, who proved that the unweighted matching index is at most 2, thus classifying graphs non-isomorphic to K_4 into Type 0, Type 1 and Type 2. By definition, the weighted matching index of Type 0 graphs is 0. We give a structural characterization for Type 2 graphs, using which we settle Krenn's conjecture for Type 2 graphs.\n\nWe also present several other results regarding Krenn's conjecture: (1) Krenn's conjecture is true for multi-graphs whose underlying simple graph is of maximum degree at most 3. Also we show that Krenn's conjecture is true when the underlying simple graph has vertex connectivity at most 2. We also show some non-constructability results when the experiment graph is assumed to be simple.\n\nRefreshments will be served before the talk.",
    bio:
      'Prof. L. Sunil Chandran is a Professor in the Department of Computer Science and Automation at the Indian Institute of Science, Bangalore. He received his PhD from the Indian Institute of Science, Bangalore, and was a postdoctoral fellow at the Max Planck Institute for Informatics, Saarbruecken, Germany. His research areas are graph theory, combinatorics, and graph algorithms. He is a fellow of the Indian National Science Academy and the Indian National Academy of Engineering.',
  },
  {
    id: 'anindita-maiti-research-proposal-session-2026',
    type: 'Research proposal session',
    title: 'Research Proposal Session of Dr. Anindita Maiti',
    speaker: 'Dr. Anindita Maiti',
    affiliation: 'Perimeter Institute for Theoretical Physics',
    date: '2026-06-01',
    displayDate: '1 Jun 2026',
    time: '10:45 am IST',
    venue: 'AB 13/124',
    bio: aninditaMaitiBio,
  },
  {
    id: 'anindita-maiti-teaching-session-2026',
    type: 'Teaching session',
    title: 'Markov and Chebyshev Inequalities with Applications',
    speaker: 'Dr. Anindita Maiti',
    affiliation: 'Perimeter Institute for Theoretical Physics',
    date: '2026-06-01',
    displayDate: '1 Jun 2026',
    time: '11:30 am IST',
    venue: 'AB 13/124',
    bio: aninditaMaitiBio,
  },
  {
    id: 'prateek-verma-llm-improvements-2026',
    type: 'CSE seminar',
    title:
      'Full Stack LLM Improvements - From Input Representations to Internal Circuits to Test-Time Scaling',
    speaker: 'Prateek Verma',
    affiliation: 'Stanford',
    date: '2026-05-25',
    displayDate: '25 May 2026',
    time: '11:30 am IST',
    venue: 'AB 13/404',
    summary:
      'The talk examines improvements across modern LLMs: adaptive text and audio representations, internal circuits in large text models, adaptive LLMs that rewire based on input complexity, and test-time scaling for modalities beyond text.',
    bio:
      'Prateek Verma is a researcher affiliated with Stanford whose work spans AI, LLMs, NLP, signal processing, speech, and audio.',
  },
  {
    id: 'rijoy-mukherjee-pipelined-processors-2026',
    type: 'Teaching session',
    title: 'Pipelined Processors',
    speaker: 'Dr. Rijoy Mukherjee',
    affiliation: 'Synopsys',
    date: '2026-05-14',
    displayDate: '14 May 2026',
    time: '10:00 am IST',
    venue: 'AB 13/125',
    bio:
      'Dr. Rijoy Mukherjee is a Staff R&D Engineer in the VC Formal R&D group at Synopsys. He earned his PhD in Computer Science and Engineering from IIT Kharagpur in 2025.',
  },
  {
    id: 'rijoy-mukherjee-eda-hardware-security-2026',
    type: 'Faculty candidate seminar',
    title: 'Intelligent Electronic Design Automation for Hardware Security',
    speaker: 'Dr. Rijoy Mukherjee',
    affiliation: 'Synopsys',
    date: '2026-05-13',
    displayDate: '13 May 2026',
    time: '10:30 am IST',
    venue: 'AB 13/126',
    summary:
      'The seminar presents a unified approach to hardware security for domain-specific accelerators, integrating learning-driven analysis, intermediate-representation-level security, and language-model-assisted verification across the electronic design automation pipeline.',
    bio:
      'Dr. Rijoy Mukherjee is a Staff R&D Engineer in the VC Formal R&D group at Synopsys. He earned his PhD in Computer Science and Engineering from IIT Kharagpur in 2025.',
  },
  {
    id: 'rijoy-mukherjee-research-proposal-session-2026',
    type: 'Research proposal session',
    title: 'Research Proposal Session of Dr. Rijoy Mukherjee',
    speaker: 'Dr. Rijoy Mukherjee',
    affiliation: 'Synopsys',
    date: '2026-05-13',
    displayDate: '13 May 2026',
    time: '11:45 am IST',
    venue: 'AB 13/126',
    bio:
      'Dr. Rijoy Mukherjee is a Staff R&D Engineer in the VC Formal R&D group at Synopsys. He earned his PhD in Computer Science and Engineering from IIT Kharagpur in 2025.',
  },
  {
    id: 'ishaan-batta-spectral-clustering-2026',
    type: 'Teaching session',
    title: 'Spectral Clustering and Applications',
    speaker: 'Dr. Ishaan Batta',
    affiliation: 'Georgia State University TReNDS',
    date: '2026-05-12',
    displayDate: '12 May 2026',
    time: '11:00 am IST',
    venue: 'AB 13/126',
    bio:
      'Dr. Ishaan Batta is a postdoctoral research associate at the Center for Translational Research in Neuroimaging and Data Science, Georgia State University.',
  },
  {
    id: 'ishaan-batta-neuroimaging-2026',
    type: 'Faculty candidate seminar',
    title:
      'Learning Assessment-Aware Brain Representations from Multimodal Neuroimaging Data',
    speaker: 'Dr. Ishaan Batta',
    affiliation: 'Georgia State University TReNDS',
    date: '2026-05-11',
    displayDate: '11 May 2026',
    time: '10:30 am IST',
    venue: 'AB 13/126',
    summary:
      'The seminar presents interpretable representation learning frameworks for multimodal neuroimaging, including multimodal active subspace analysis, constrained source-based salience, and conditional graph variational autoencoders for clinical-assessment-aware brain representations.',
    bio:
      'Dr. Ishaan Batta is a postdoctoral research associate at the Center for Translational Research in Neuroimaging and Data Science, Georgia State University.',
  },
  {
    id: 'ishaan-batta-research-proposal-session-2026',
    type: 'Research proposal session',
    title: 'Research Proposal Session of Dr. Ishaan Batta',
    speaker: 'Dr. Ishaan Batta',
    affiliation: 'Georgia State University TReNDS',
    date: '2026-05-11',
    displayDate: '11 May 2026',
    time: '11:45 am IST',
    venue: 'AB 13/126',
    bio:
      'Dr. Ishaan Batta is a postdoctoral research associate at the Center for Translational Research in Neuroimaging and Data Science, Georgia State University.',
  },
  {
    id: 'nishad-kothari-solitude-graphs-2026',
    type: 'CSE seminar',
    title:
      "Investigating Solitude in 2-Connected 3-Regular Graphs, and in R-Graphs, Through the Lens of CLM's Dependence Relation",
    speaker: 'Prof. Nishad Kothari',
    affiliation: 'IIT Madras',
    date: '2026-04-24',
    displayDate: '24 Apr 2026',
    time: '11:00 am IST',
    venue: 'AB 7/207',
    summary:
      'The talk studies solitary edges in 2-connected 3-regular graphs and r-graphs, using the dependence relation introduced by Carvalho, Lucchesi, and Murty to generalize characterizations and bounds for perfect matchings.',
  },
  {
    id: 'anindita-maiti-ai-physics-2026',
    type: 'Virtual research seminar',
    title:
      'Physics for AI/ML Robustness, Interpretability, and Uncertainty Quantification',
    speaker: 'Dr. Anindita Maiti',
    affiliation: 'Perimeter Institute for Theoretical Physics',
    date: '2026-04-14',
    displayDate: '14 Apr 2026',
    time: '5:30 pm IST',
    venue: 'Online',
    summary:
      'The talk connects theoretical physics with AI and ML, covering in-context learning theory, neural-network field-theory correspondence, and renormalization-group-inspired approaches for interpretable and uncertainty-aware learning.',
    bio:
      'Dr. Anindita Maiti is a Postdoctoral Fellow at the Perimeter Institute for Theoretical Physics, cross-affiliated with the Perimeter Institute Quantum Intelligence Lab.',
  },
  {
    id: 'aditya-subramanian-online-connectivity-augmentation-2026',
    type: 'CS theory seminar',
    title: 'Online Connectivity Augmentation',
    speaker: 'Aditya Subramanian',
    affiliation: 'IISc Bangalore',
    date: '2026-04-07',
    displayDate: '7 Apr 2026',
    time: '5:00 pm IST',
    venue: 'Online',
    summary:
      'The talk presents new results for online connectivity augmentation, including an optimal deterministic O(log n)-competitive algorithm for general online CAP and weighted and random-order variants.',
    bio:
      'Aditya Subramanian is a PhD student in the Department of Computer Science and Automation at IISc Bangalore, advised by Prof. Arindam Khan.',
  },
  {
    id: 'venkatakeerthy-ml4code-2026',
    type: 'CSE seminar',
    title: 'ML4Code: Learning to Represent, Optimize, and Understand Programs',
    speaker: 'Dr. S. VenkataKeerthy',
    affiliation: 'Microsoft Research India / IIT Hyderabad',
    date: '2026-03-27',
    displayDate: '27 Mar 2026',
    time: '11:30 am IST',
    venue: 'AB 13/126',
    summary:
      'The talk presents machine-learning techniques for software systems, including semantic code embeddings, reinforcement-learning-based compiler optimization, and scalable program understanding for similarity, security, and comprehension tasks.',
    bio:
      'S. VenkataKeerthy is a postdoctoral researcher at Microsoft Research India and a PhD candidate in Computer Science and Engineering at IIT Hyderabad.',
  },
  {
    id: 'anik-paul-mirror-descent-2026',
    type: 'CSE seminar',
    title:
      'Almost Sure Convergence Analysis of Stochastic First and Zeroth-Order Mirror Descent Algorithm: A Projected Dynamical Systems Viewpoint',
    speaker: 'Dr. Anik Paul',
    affiliation: 'IISc Bangalore',
    date: '2026-03-25',
    displayDate: '25 Mar 2026',
    time: '10:00 am IST',
    venue: 'AB 13/126',
    summary:
      'The talk connects mirror descent and continuous-time projected dynamical systems, establishing almost-sure convergence results for stochastic mirror descent and stochastic zeroth-order mirror descent under uncertainty.',
    bio:
      'Anik Kumar Paul is a Walmart Postdoctoral Fellow in the Department of Computer Science and Automation at IISc Bangalore.',
  },
  {
    id: 'aditya-anand-managed-runtimes-2026',
    type: 'CSE seminar',
    title:
      'Precision without Regret: Sound and Efficient Memory Optimization in Managed Runtimes',
    speaker: 'Aditya Anand',
    affiliation: 'IIT Bombay',
    date: '2026-03-24',
    displayDate: '24 Mar 2026',
    time: '11:30 am IST',
    venue: 'AB 13/126',
    summary:
      'The talk presents static and dynamic techniques for precise escape analysis and stack allocation in managed runtimes, using dynamic heapification and speculative optimization to reduce garbage collection while preserving correctness.',
    bio:
      'Aditya Anand is a PhD scholar in Computer Science and Engineering at IIT Bombay, working on compiler optimizations and program analysis.',
  },
  {
    id: 'utsav-singh-hierarchical-control-2026',
    type: 'CSE seminar',
    title: 'Learning Hierarchical Control via Feasible Subgoal Prediction',
    speaker: 'Dr. Utsav Singh',
    affiliation: 'IIT Kanpur / University of Central Florida',
    date: '2026-03-23',
    displayDate: '23 Mar 2026',
    time: '11:30 am IST',
    venue: 'AB 13/126',
    summary:
      'The talk discusses hierarchical reinforcement learning methods that train high-level policies to propose feasible subgoals, improving stability and performance for long-horizon robotic navigation and manipulation tasks.',
    bio:
      'Utsav Singh received his PhD from IIT Kanpur and recently served as a Visiting Research Scholar at the University of Central Florida.',
  },
  {
    id: 'lakshay-saggi-disjoint-shortest-paths-2026',
    type: 'CS theory seminar',
    title:
      'Efficient Algorithms for the Disjoint Shortest Paths Problem and Its Extensions',
    speaker: 'Lakshay Saggi',
    affiliation: 'IIT Delhi',
    date: '2026-03-19',
    displayDate: '19 Mar 2026',
    time: '5:00 pm IST',
    venue: 'Online',
    summary:
      'The seminar discusses faster algorithms for the 2-Disjoint Shortest Paths problem and extensions that minimize vertex intersections between shortest paths in directed graphs, DAGs, and undirected graphs.',
    bio:
      'Lakshay Saggi is a PhD student in Computer Science and Engineering at IIT Delhi, advised by Prof. Naveen Garg and Prof. Keerti Choudhary.',
  },
  {
    id: 'janki-bhimani-system-design-2026',
    type: 'CSE seminar',
    title: 'Advancing System Design: Classical and Quantum',
    speaker: 'Dr. Janki Bhimani',
    affiliation: 'Florida International University',
    date: '2026-03-13',
    displayDate: '13 Mar 2026',
    time: '3:30 pm IST',
    venue: 'AB 10/202',
    summary:
      'The talk presents a system-design view spanning classical and quantum computing, with research thrusts in emerging memory and storage systems, storage reliability under environmental stress, and intelligent design methodologies.',
    bio:
      'Dr. Janki Bhimani is on the faculty at Florida International University. Her research spans system design, storage systems, machine learning, quantum computing, and electronic design automation.',
  },
  {
    id: 'venkatesh-raman-nseth-2026',
    type: 'CSE seminar',
    title: '(N)SETH and Fine-Grained Lower Bounds',
    speaker: 'Prof. Venkatesh Raman',
    affiliation: 'Institute of Mathematical Sciences, Chennai',
    date: '2026-03-13',
    displayDate: '13 Mar 2026',
    time: '11:30 am IST',
    venue: 'AB 13/126',
    summary:
      'The seminar introduces SETH, a nondeterministic version called NSETH, and consequences for fine-grained lower bounds, including improved algorithms for Max2SAT and the complement of 3-SUM.',
  },
  {
    id: 'rajeev-shorey-edge-computing-2026',
    type: 'CSE seminar',
    title: 'Recent Investigations in the Intersection of ML and Edge Computing',
    speaker: 'Prof. Rajeev Shorey',
    affiliation: 'IIIT Surat / IIT Delhi / IIT Gandhinagar',
    date: '2026-03-12',
    displayDate: '12 Mar 2026',
    time: '3:45 pm IST',
    venue: 'AB 13/126',
    bio:
      'Prof. Rajeev Shorey is Director of IIIT Surat and Adjunct Faculty in Computer Science and Engineering at IIT Delhi and IIT Gandhinagar.',
  },
  {
    id: 'ashwin-verma-optimizers-for-learning-2026',
    type: 'Teaching session',
    title: 'Optimizers for Learning: SGD, Adam, RMSProp',
    speaker: 'Dr. Ashwin Verma',
    affiliation: 'Purdue University',
    date: '2026-03-03',
    displayDate: '3 Mar 2026',
    time: '10:30 am IST',
    venue: 'AB 13/125',
    bio:
      'Dr. Ashwin Verma is a Postdoctoral Researcher in the School of Electrical and Computer Engineering at Purdue University.',
  },
  {
    id: 'ashwin-verma-distributed-learning-2026',
    type: 'Faculty candidate seminar',
    title: 'Distributed Learning under Adaptive Information Constraints',
    speaker: 'Dr. Ashwin Verma',
    affiliation: 'Purdue University',
    date: '2026-03-02',
    displayDate: '2 Mar 2026',
    time: '10:30 am IST',
    venue: 'AB 13/125',
    summary:
      'The seminar studies distributed learning under limited communication, evolving network topology, and unreliable sources, with results for adaptive communication in distributed convex optimization and unsupervised recovery from noisy crowd labels.',
    bio:
      'Dr. Ashwin Verma is a Postdoctoral Researcher in the School of Electrical and Computer Engineering at Purdue University.',
  },
  {
    id: 'ashwin-verma-research-proposal-session-2026',
    type: 'Research proposal session',
    title: 'Research Proposal Session of Dr. Ashwin Verma',
    speaker: 'Dr. Ashwin Verma',
    affiliation: 'Purdue University',
    date: '2026-03-02',
    displayDate: '2 Mar 2026',
    time: '11:45 am IST',
    venue: 'AB 13/125',
    bio:
      'Dr. Ashwin Verma is a Postdoctoral Researcher in the School of Electrical and Computer Engineering at Purdue University.',
  },
  {
    id: 'parth-paritosh-networked-inference-2026',
    type: 'Faculty candidate seminar',
    title: 'Scalable & Trustworthy Inference in Networked Mission Critical Systems',
    speaker: 'Dr. Parth Paritosh',
    affiliation: 'DEVCOM Army Research Laboratory',
    date: '2026-02-23',
    displayDate: '23 Feb 2026',
    time: '10:30 am IST',
    venue: 'AB 6/201',
    summary:
      'The seminar presents scalable, privacy-preserving, and resilient probabilistic inference algorithms for networked mission-critical systems, with applications in robotics, autonomous transit, infrastructure management, and defense.',
    bio:
      'Dr. Parth Paritosh is a postdoctoral fellow in the Military Information Sciences division at DEVCOM Army Research Laboratory.',
  },
  {
    id: 'parth-paritosh-research-proposal-session-2026',
    type: 'Research proposal session',
    title: 'Research Proposal Session of Dr. Parth Paritosh',
    speaker: 'Dr. Parth Paritosh',
    affiliation: 'DEVCOM Army Research Laboratory',
    date: '2026-02-23',
    displayDate: '23 Feb 2026',
    time: '11:45 am IST',
    venue: 'AB 6/201',
    bio:
      'Dr. Parth Paritosh is a postdoctoral fellow in the Military Information Sciences division at DEVCOM Army Research Laboratory.',
  },
  {
    id: 'parth-paritosh-3d-rotation-representations-2026',
    type: 'Teaching session',
    title: '3D Rotation Representations',
    speaker: 'Dr. Parth Paritosh',
    affiliation: 'DEVCOM Army Research Laboratory',
    date: '2026-02-23',
    displayDate: '23 Feb 2026',
    time: '3:30 pm IST',
    venue: 'AB 6/201',
    bio:
      'Dr. Parth Paritosh is a postdoctoral fellow in the Military Information Sciences division at DEVCOM Army Research Laboratory.',
  },
  {
    id: 'tameesh-suri-ai-codesign-2026',
    type: 'CSE seminar',
    title: 'Enabling the Next 1000x in AI: Co-Design from Materials to Systems',
    speaker: 'Dr. Tameesh Suri',
    affiliation: 'NVIDIA',
    date: '2026-02-20',
    displayDate: '20 Feb 2026',
    time: '5:00 pm IST',
    venue: 'AB 13/124',
    summary:
      'The talk argues that the next 1000x improvement in AI compute will require co-design across materials, devices, architecture, packaging, and systems rather than traditional scaling alone.',
    bio:
      'Dr. Tameesh Suri is a Principal Architect in the HPC + AI group at NVIDIA, Santa Clara.',
  },
  {
    id: 'biswabandan-panda-architecture-security-2026',
    type: 'CSE seminar',
    title: 'Architecture Security: The Good, the Bad, and the Ugly',
    speaker: 'Dr. Biswabandan Panda',
    affiliation: 'IIT Bombay',
    date: '2026-02-19',
    displayDate: '19 Feb 2026',
    time: '3:30 pm IST',
    venue: 'AB 13/126',
  },
  {
    id: 'vaibhav-krishan-boolean-circuits-2026',
    type: 'CSE seminar',
    title: 'Frontiers in Boolean Circuit Lower Bounds',
    speaker: 'Dr. Vaibhav Krishan',
    affiliation: 'Institute of Mathematical Sciences, Chennai',
    date: '2026-02-19',
    displayDate: '19 Feb 2026',
    time: '11:30 am IST',
    venue: 'AB 13/126',
    summary:
      'The talk discusses Boolean circuit lower bounds, foundational results for restricted circuit classes, and recent advances along major directions in circuit complexity.',
    bio:
      'Vaibhav Krishan is a postdoctoral researcher at the Institute of Mathematical Sciences, Chennai. He completed his PhD at IIT Bombay.',
  },
  {
    id: 'sneha-mohanty-pinball-wizards-2026',
    type: 'CS theory seminar',
    title: 'How Pinball Wizards Simulate a Turing Machine',
    speaker: 'Sneha Mohanty',
    affiliation: 'University of Freiburg',
    date: '2026-02-19',
    displayDate: '19 Feb 2026',
    time: '5:15 pm IST',
    venue: 'Online',
    summary:
      'The seminar introduces the Pinball Wizard problem and shows how an idealized pinball system with gates, walls, and bumpers can simulate a two-stack pushdown automaton, making the problem Turing-complete.',
    bio:
      'Sneha Mohanty is a PhD student in Computer Science at the University of Freiburg, working on computational complexity of illumination and ray-tracing-based models.',
  },
  {
    id: 'biswabandan-panda-microarchitecture-2026',
    type: 'CSE seminar',
    title: 'Microarchitecture Mysteries in Datacenter Processors',
    speaker: 'Dr. Biswabandan Panda',
    affiliation: 'IIT Bombay',
    date: '2026-02-18',
    displayDate: '18 Feb 2026',
    time: '11:30 am IST',
    venue: 'AB 1/101',
  },
  {
    id: 'samarth-brahmabhatt-homography-matrix-2026',
    type: 'Teaching session',
    title: 'Homography Matrix - Theory and Applications',
    speaker: 'Dr. Samarth Brahmabhatt',
    affiliation: 'Overland AI',
    date: '2026-02-13',
    displayDate: '13 Feb 2026',
    time: '11:30 am IST',
    venue: 'AB 6/202',
    bio:
      'Dr. Samarth Brahmabhatt is Technical Lead for Perception at Overland AI. He previously worked at Intel Labs after completing his PhD at Georgia Tech.',
  },
  {
    id: 'samarth-brahmabhatt-robotic-manipulation-2026',
    type: 'Faculty candidate seminar',
    title: 'Robotic Manipulation for Advanced Manufacturing',
    speaker: 'Dr. Samarth Brahmabhatt',
    affiliation: 'Overland AI',
    date: '2026-02-12',
    displayDate: '12 Feb 2026',
    time: '11:30 am IST',
    venue: 'AB 10/102',
    summary:
      'The seminar surveys challenges in reliable robotic manipulation for advanced manufacturing, then presents work on perception, imitation of human manipulation behaviors, and policy learning for contact-rich manipulation skills.',
    bio:
      'Dr. Samarth Brahmabhatt is Technical Lead for Perception at Overland AI. He previously worked at Intel Labs after completing his PhD at Georgia Tech.',
  },
  {
    id: 'samarth-brahmabhatt-research-proposal-session-2026',
    type: 'Research proposal session',
    title: 'Research Proposal Session of Dr. Samarth Brahmabhatt',
    speaker: 'Dr. Samarth Brahmabhatt',
    affiliation: 'Overland AI',
    date: '2026-02-12',
    displayDate: '12 Feb 2026',
    time: '12:40 pm IST',
    venue: 'AB 10/102',
    bio:
      'Dr. Samarth Brahmabhatt is Technical Lead for Perception at Overland AI. He previously worked at Intel Labs after completing his PhD at Georgia Tech.',
  },
  {
    id: 'akhil-s-algorithmic-information-theory-2026',
    type: 'CS theory seminar',
    title: 'Algorithmic Information Theory: Some History and Some Recent Developments',
    speaker: 'Akhil S.',
    affiliation: 'IIT Kanpur',
    date: '2026-02-11',
    displayDate: '11 Feb 2026',
    time: '5:00 pm IST',
    venue: 'Online',
    summary:
      'The talk introduces Kolmogorov complexity, randomness for infinite sequences, constructive dimension, and polynomial-time dimension, including links between robustness questions and one-way functions.',
    bio:
      'Akhil S. is a doctoral student at IIT Kanpur working with Prof. Satyadev Nandakumar.',
  },
  {
    id: 'ajay-singh-memory-reclamation-2026',
    type: 'Faculty candidate seminar',
    title: 'High Performance Memory Reclamation in Concurrent Data Structures',
    speaker: 'Dr. Ajay Singh',
    affiliation: 'ICS FORTH / University of Waterloo',
    date: '2026-02-09',
    displayDate: '9 Feb 2026',
    time: '11:30 am IST',
    venue: 'AB 13/126',
    summary:
      'The seminar presents three safe memory reclamation methods for optimistic and lock-free concurrent data structures, with a focus on speed, scalability, usability, bounded memory footprint, and production readiness.',
    bio:
      'Dr. Ajay Singh received his PhD in Computer Science from the University of Waterloo in 2024 and is a postdoctoral researcher at ICS FORTH in Greece.',
  },
  {
    id: 'ajay-singh-research-proposal-session-2026',
    type: 'Research proposal session',
    title: 'Research Proposal Session of Dr. Ajay Singh',
    speaker: 'Dr. Ajay Singh',
    affiliation: 'ICS FORTH / University of Waterloo',
    date: '2026-02-09',
    displayDate: '9 Feb 2026',
    time: '12:30 pm IST',
    venue: 'AB 13/126',
    bio:
      'Dr. Ajay Singh received his PhD in Computer Science from the University of Waterloo in 2024 and is a postdoctoral researcher at ICS FORTH in Greece.',
  },
  {
    id: 'ajay-singh-process-synchronization-2026',
    type: 'Teaching session',
    title: 'Process Synchronization in Operating Systems',
    speaker: 'Dr. Ajay Singh',
    affiliation: 'ICS FORTH / University of Waterloo',
    date: '2026-02-09',
    displayDate: '9 Feb 2026',
    time: '2:00 pm IST',
    venue: 'AB 13/126',
    bio:
      'Dr. Ajay Singh received his PhD in Computer Science from the University of Waterloo in 2024 and is a postdoctoral researcher at ICS FORTH in Greece.',
  },
  {
    id: 'utkarsh-mall-visual-discovery-2026',
    type: 'CSE seminar',
    title: 'Visual Discovery for Science',
    speaker: 'Dr. Utkarsh Mall',
    affiliation: 'MBZUAI',
    date: '2026-02-06',
    displayDate: '6 Feb 2026',
    time: '11:30 am IST',
    venue: 'AB 13/126',
    summary:
      'The talk covers label-efficient vision and multimodal foundation models for scientific domains, including remote sensing and interpretable vision-language models for scientific discovery.',
    bio:
      'Utkarsh Mall is an Assistant Professor of Computer Vision at Mohamed bin Zayed University of Artificial Intelligence.',
  },
  {
    id: 'adithya-kumar-dataflow-analysis-2026',
    type: 'Teaching session',
    title: 'Dataflow Analysis',
    speaker: 'Dr. Adithya Kumar',
    affiliation: 'Meta FAIR',
    date: '2026-02-04',
    displayDate: '4 Feb 2026',
    time: '10:00 am IST',
    venue: 'Online',
    bio:
      'Dr. Adithya Kumar is a software engineer at Meta FAIR Labs. He received his PhD in Computer Science and Engineering from Pennsylvania State University.',
  },
  {
    id: 'lakshmi-mandal-reinforcement-learning-2026',
    type: 'Faculty candidate seminar',
    title: 'Multi-Timescale and Multi-Agent Reinforcement Learning Algorithms',
    speaker: 'Dr. Lakshmi Mandal',
    affiliation: 'IBM Research',
    date: '2026-02-02',
    displayDate: '2 Feb 2026',
    time: '11:30 am IST',
    venue: 'AB 13/126',
    summary:
      'The seminar presents multi-timescale and multi-agent reinforcement learning algorithms, with theoretical convergence guarantees and experimental results across reinforcement learning tasks.',
    bio:
      'Dr. Lakshmi Mandal is a Research Scientist at IBM Research, Bangalore. She completed her PhD in Computer Science and Engineering at IISc Bangalore in 2025.',
  },
  {
    id: 'lakshmi-mandal-research-proposal-session-2026',
    type: 'Research proposal session',
    title: 'Research Proposal Session of Dr. Lakshmi Mandal',
    speaker: 'Dr. Lakshmi Mandal',
    affiliation: 'IBM Research',
    date: '2026-02-02',
    displayDate: '2 Feb 2026',
    time: '12:30 pm IST',
    venue: 'AB 13/126',
    bio:
      'Dr. Lakshmi Mandal is a Research Scientist at IBM Research, Bangalore. She completed her PhD in Computer Science and Engineering at IISc Bangalore in 2025.',
  },
  {
    id: 'lakshmi-mandal-multi-agent-rl-teaching-2026',
    type: 'Teaching session',
    title: 'Introduction to Multi Agent Reinforcement Learning',
    speaker: 'Dr. Lakshmi Mandal',
    affiliation: 'IBM Research',
    date: '2026-02-02',
    displayDate: '2 Feb 2026',
    time: '3:30 pm IST',
    venue: 'AB 7/208',
    bio:
      'Dr. Lakshmi Mandal is a Research Scientist at IBM Research, Bangalore. She completed her PhD in Computer Science and Engineering at IISc Bangalore in 2025.',
  },
  {
    id: 'nisarg-shah-fair-ai-2026',
    type: 'CSE seminar',
    title: 'Democratic Foundations of Fair AI via Social Choice',
    speaker: 'Dr. Nisarg Shah',
    affiliation: 'University of Toronto',
    date: '2026-01-29',
    displayDate: '29 Jan 2026',
    time: '2:00 pm IST',
    venue: 'AB 13/125',
    summary:
      'The talk presents an algorithmic fairness approach inspired by democratic principles, connecting computational social choice to AI applications such as classification, clustering, reinforcement learning, and AI alignment.',
    bio:
      'Nisarg Shah is an Associate Professor of Computer Science at the University of Toronto and a Research Lead for Ethics of AI at the Schwartz Reisman Institute.',
  },
  {
    id: 'adithya-kumar-systems-heterogeneity-2026',
    type: 'Virtual research seminar',
    title: 'Designing System Software in the Era of Heterogeneity',
    speaker: 'Dr. Adithya Kumar',
    affiliation: 'Meta FAIR',
    date: '2026-01-19',
    displayDate: '19 Jan 2026',
    time: '11:30 am IST',
    venue: 'Online',
    summary:
      'The seminar discusses system-software design for heterogeneous datacenter platforms, including SplitRPC, an RPC framework that reduces ML inference overheads by using SmartNIC capabilities.',
    bio:
      'Dr. Adithya Kumar is a software engineer at Meta FAIR Labs. He received his PhD in Computer Science and Engineering from Pennsylvania State University.',
  },
  {
    id: 'ambarish-ojha-ai-regulated-worlds-2026',
    type: 'CSE seminar',
    title: 'AI in Regulated Worlds: How to Build Systems That Banks and Boards Can Trust',
    speaker: 'Ambarish Ojha',
    date: '2026-01-09',
    displayDate: '9 Jan 2026',
    time: '11:45 am IST',
    venue: 'AB 13/404',
    bio:
      'Ambarish Ojha is a technology and customer-success leader with experience across enterprise software, platforms, services, robotic process automation, embedded finance, and IT advisory for banking.',
  },
  {
    id: 'harsh-parikh-causal-inference-2026',
    type: 'CSE seminar',
    title: 'Regularizing Extrapolation in Causal Inference',
    speaker: 'Prof. Harsh Parikh',
    affiliation: 'Yale University',
    date: '2026-01-08',
    displayDate: '8 Jan 2026',
    time: '11:30 am IST',
    venue: 'AB 13/126',
    summary:
      'The talk presents a framework that penalizes extrapolation in linear smoother estimators, introducing a bias-bias-variance tradeoff and optimization procedure for causal inference under poor positivity and model misspecification.',
    bio:
      'Harsh Parikh is an Assistant Professor in the Department of Biostatistics at Yale University.',
  },
  {
    id: 'soumyajit-chatterjee-transport-layer-protocols-2026',
    type: 'Teaching session',
    title: 'Transport Layer Protocols',
    speaker: 'Dr. Soumyajit Chatterjee',
    affiliation: 'Brave Software Research / University of Cambridge',
    date: '2026-01-06',
    displayDate: '6 Jan 2026',
    time: '11:30 am IST',
    venue: 'AB 13/126',
    bio:
      'Dr. Soumyajit Chatterjee is a Systems and Performance Researcher at Brave Software Research and a Visiting Scholar at the University of Cambridge.',
  },
  {
    id: 'soumyajit-chatterjee-edge-intelligence-2026',
    type: 'Faculty candidate seminar',
    title:
      'Bringing Intelligence to the Edge: Resolving Challenges of Labeling and Collecting Information at the Edge',
    speaker: 'Dr. Soumyajit Chatterjee',
    affiliation: 'Brave Software Research / University of Cambridge',
    date: '2026-01-05',
    displayDate: '5 Jan 2026',
    time: '11:30 am IST',
    venue: 'AB 13/126',
    summary:
      'The seminar examines efficient machine learning at the edge, including automated annotation, federated learning in multi-device ecosystems, on-device training, and test-time adaptation for robust deployment.',
    bio:
      'Dr. Soumyajit Chatterjee is a Systems and Performance Researcher at Brave Software Research and a Visiting Scholar at the University of Cambridge.',
  },
  {
    id: 'soumyajit-chatterjee-research-proposal-session-2026',
    type: 'Research proposal session',
    title: 'Research Proposal Session of Dr. Soumyajit Chatterjee',
    speaker: 'Dr. Soumyajit Chatterjee',
    affiliation: 'Brave Software Research / University of Cambridge',
    date: '2026-01-05',
    displayDate: '5 Jan 2026',
    time: '12:30 pm IST',
    venue: 'AB 13/126',
    bio:
      'Dr. Soumyajit Chatterjee is a Systems and Performance Researcher at Brave Software Research and a Visiting Scholar at the University of Cambridge.',
  },
] satisfies SeminarEntry[];

const seminarAbstracts: Partial<Record<string, string>> = {
  'prateek-verma-llm-improvements-2026':
    'This talk will open up and improve components of modern LLMs. First, we explore how crucial the representations we feed into generative models for text and audio are. Can we make tokenization adaptive? Can we improve audioLLM performance by leveraging both discrete and continuous representations? We show that by just incorporating better inputs, audioLLMs can match the performance of models 10x larger on LibriSpeech.\n\nSecondly, we harness and manipulate the internal circuits of billion+ parameter text-LLMs. Trained solely on next-text token prediction, it implicitly learns a rich set of latent functions and circuits that, when activated, can be used for other tasks. GPT weights, for instance, can enable models to see and hear, improving with scale. We further introduce the concept of adaptive LLMs. Depending on input complexity, the GPT model can dynamically rewire itself, thereby not wasting massive decoder layers that end up learning trivial functions.\n\nFinally, we extend the ideas of test-time scaling and thinking to modalities beyond text. By keeping the model weights and the input fixed, we explore how we can enable them to think during inference, significantly boosting baseline performance.',
  'rijoy-mukherjee-eda-hardware-security-2026':
    'Hardware security for domain-specific accelerators has gained significant attention, with a growing number of techniques aiming to protect intellectual property and detect malicious modifications during the design flow. Some of these approaches focus on post-silicon validation or isolated protection mechanisms, but fail to provide security guarantees throughout the design automation pipeline. Conversely, recent advances in electronic design automation (EDA) leverage machine learning and compiler-level analysis; yet such systems often overlook security as a first-class objective.\n\nMy research explores the vulnerabilities and presents a unified approach to hardware security for domain-specific accelerators, seamlessly integrating intelligent techniques across multiple stages of the EDA flow, enabling automated protection and verification within a single framework. Our methodology incorporates learning-driven analysis, intermediate-representation-level security, and language-model-assisted verification to address security vulnerabilities in modern hardware design.\n\nWe first analyze the limitations of existing DNN weight protection schemes by demonstrating effective known-plaintext attacks, exposing their susceptibility to model extraction. To address this, we propose a selective encryption strategy that protects critical weights while maintaining design efficiency. We then introduce a novel class of hardware Trojans embedded in the compiler’s intermediate representation, showing how subtle transformations during high-level synthesis can compromise security, and develop automated detection mechanisms within the synthesis flow. Finally, we present a language-model-driven verification framework that generates test scenarios for synthesized RTL, enabling scalable and automated detection of security violations. Experimental results across representative hardware benchmarks demonstrate that the proposed techniques significantly improve IP protection and hardware Trojan detection capabilities, while incurring minimal overhead. The unified, intelligent EDA methodology provides a scalable and automation-friendly pathway toward secure hardware design.',
  'ishaan-batta-neuroimaging-2026':
    'Standard supervised learning on neuroimaging data optimizes for diagnostic prediction while yielding feature-level importance scores that lack network-level, assessment-specific interpretability required for biomarker discovery; while unsupervised methods reduce data dimensions leading to loss of assessment-specific information. This talk presents frameworks developed towards addressing these gaps via biologically interpretable methodologies for neuroimaging data analysis.\n\nFirst, a multimodal active subspace analysis framework to compute multiple salient directions that define the gradient space of a prediction function learned on brain features, followed by repeated analysis to extract consistent and robust assessment-oriented subspace centers: compact multimodal representations of co-varying brain regions and functional connections maximally associated with a target clinical assessment. Second, an interpretable deep learning framework, constrained source-based salience, that embeds active subspace learning and spatially constrained ICA directly into the saliency space of trained deep learning architectures, producing network-level full-brain visualizations anchored around spatial brain templates. Lastly, it will include some of the ongoing work on a conditional graph variational autoencoder that encodes static functional network connectivity in the brain into a structured latent space conditioned on demographic and cognitive variables.\n\nCollectively, these frameworks establish a principled methodology for learning brain representations that are simultaneously predictive, network-interpretable, and account for clinical observations.',
  'nishad-kothari-solitude-graphs-2026':
    'The study of perfect matchings, also known as 1-factors, in 2-connected 3-regular graphs goes back to the Four Color Problem through Tait’s equivalence established in 1880. Schonberger proved that, in any such graph, each edge belongs to at least one perfect matching; this fact is easily deduced using Tutte’s 1-factor Theorem. We say that an edge is solitary if it belongs to precisely one perfect matching. Schonberger’s result naturally leads to two problems in the context of 2-connected 3-regular graphs: characterize solitary edges, and prove bounds on the number of solitary edges.\n\nIn a recent work, Goedgebeur, Mattiolo, Mazzuoccolo, Renders, and Wolf proved that, in any 3-connected 3-regular graph, there are at most six solitary edges, and they also provided a complete characterization of those that have three or more solitary edges.\n\nIn joint work with Narayana, Mattiolo, and Gohokar, we generalize their results, both characterizations and bounds, to 3-edge-connected r-graphs. An r-graph, where r is at least 3, is any r-regular graph with the additional property that each odd cut has at least r edges; when r is 3, this is precisely the class of 2-connected 3-regular graphs. We make extensive use of the dependence relation introduced by Carvalho, Lucchesi, and Murty in 1999, and this is what allows us to obtain stronger results. In this talk, I shall discuss all of this, including the historical context. Basic familiarity with graph theory is expected; nothing beyond that.',
  'anindita-maiti-ai-physics-2026':
    'Next-generation discoveries in quantum computing and particle physics require large-scale data generation and classification strategies, with theoretical support for its precision and accuracy. While such needs are empirically addressed by state-of-the-art Artificial Intelligence (AI) and Machine Learning (ML), theoretical support for robust data generation via reliable algorithms, that meet scientific uncertainty quantification benchmarks, are still majorly lacking.\n\nIn this talk I will discuss a few Physics-for-AI directions that advance AI-for-Physics in a first-principles manner: improving robustness, mechanistic interpretability, and uncertainty quantification of complex learning and sample generation abilities. First, I will present an asymptotically exact theory of in-context learning, an ability speculated to underpin LLM success in learning quantum attributes. The emergence of in-context learning ability is studied in a simplified Transformer, for the simplest class of tasks: linear regression; results are supported by experiments on full architectures. Next, I will introduce Neural Network Field Theory Correspondence, a paradigm to generate field theory samples without any training algorithms, while guaranteeing low uncertainty bounds at scale. This explainable and interpretable alternative to Monte Carlo sampling maps field theory actions to dual Neural Network architectures. Lastly, I will introduce a framework hinged on Renormalization Group (RG), that systematically coarsegrains data features irrelevant to learning, while capturing nontrivial perturbations to model predictions, elusive to traditional spectral bias method, within scientific uncertainty bounds.',
  'aditya-subramanian-online-connectivity-augmentation-2026':
    'The Connectivity Augmentation Problem (CAP) is a classic problem in network design: how can we add the minimum number of edges to a graph to make it more resilient to failures? In the online version of this problem, requests for increased connectivity between pairs of vertices arrive one by one. For each request, the algorithm must immediately and irrevocably decide which edges, or links, to add to ensure the network remains robust, all without knowing what future requests will look like.\n\nIn this talk, we present several new results that improve our understanding of this problem. For the general online CAP, we introduce a deterministic algorithm that achieves an O(log n) competitive ratio. This result is optimal up to constant factors and improves significantly over previous randomized bounds, which were sensitive to the graph’s initial connectivity. Additionally, we consider the weighted version of the problem and provide an O(log^2 n)-competitive algorithm. We also explore the random-order model, in which requests arrive in a uniform random order rather than in worst-case order. We show a lower bound of Omega(log n) for this setting, proving that random arrival order does not actually make the problem easier to solve, even for the simplest case of trees.\n\nThis talk is based on joint work with Mohit Garg and appeared at SODA 2026.',
  'venkatakeerthy-ml4code-2026':
    'Modern software systems are increasingly complex and performance-sensitive, yet traditional compilers and analysis tools rely on rigid, handcrafted heuristics. ML4Code leverages machine learning to improve software performance, maintainability, and security. In this talk, I will present techniques for building self-learning systems, focusing on program embeddings: dense semantic representations of code across various levels of abstraction, from the intermediate representations derived from the source code to binaries. On the compiler side, embeddings combined with reinforcement learning enable end-to-end optimizations for performance enhancement. On the program understanding side, embeddings enable scalable analyses for similarity, security, and comprehension tasks at source and binary levels. Together, these approaches point toward a unified foundation for machine learning in software systems, where embeddings become the common language across abstraction layers, enabling tools that can learn, reason, and adapt to programs in a principled manner.',
  'anik-paul-mirror-descent-2026':
    'The mirror descent algorithm generalizes gradient descent to non-Euclidean spaces, establishing a framework with a profound geometric interpretation for optimization. This talk focuses on three key aspects of this framework and its continuous-time interpretations.\n\nFirst, we discuss the continuous-time projected dynamical system (PDS) in a Riemannian manifold, demonstrating how the Euler discretization of this PDS translates directly into the iterative updates of the mirror descent algorithm. Second, we analyze the stochastic mirror descent algorithm in settings characterized by uncertainty, where direct access to the exact gradient is infeasible. We demonstrate that the almost sure convergence of the stochastic algorithm is mathematically equivalent to the asymptotic stability of the underlying deterministic PDS.\n\nThird, we extend this analysis to the zeroth-order optimization setting, assuming access only to an oracle that provides noisy function evaluations. By approximating the gradient from these noisy values, we establish that the convergence analysis of the stochastic zeroth-order mirror descent algorithm mirrors the stability analysis of a PDS in a non-Euclidean domain subjected to a disturbance input. Employing robust stability analysis tools, we establish the almost sure convergence of the algorithm. This work bridges the gap between projected dynamical systems and mirror descent, providing a rigorous theoretical foundation for optimization in non-Euclidean domains under uncertainty.',
  'aditya-anand-managed-runtimes-2026':
    'The runtimes of managed object-oriented languages such as Java allocate objects on the heap, and rely on automatic garbage collection techniques for freeing up unused objects. Most such runtimes also consist of just-in-time compilers that optimize memory access and garbage collection times by employing escape analysis: an object that does not escape, or outlive, its allocating method can be allocated on and freed up with the stack frame of the corresponding method. However, in order to minimize the time spent in JIT compilation, the scope of such useful analyses is quite limited, thereby restricting their precision significantly. On the contrary, even though it is feasible to perform precise program analyses statically, it is not possible to use their results in a managed runtime without a closed-world assumption.\n\nIn this talk, I will present a novel static+dynamic scheme that allows one to harness the results of a precise static escape analysis for allocating objects on the stack, while taking care of both soundness and efficiency concerns in the runtime. Our scheme succeeds in allocating a much larger number of objects on the stack, resulting in a significant reduction in garbage collection cycles and noticeable improvement in performance. Further to this, I will introduce a first-of-its-kind approach to enrich static analysis with the possibility of speculative optimization during JIT compilation. Combining this idea with the correctness derived from dynamic heapification leads to a best-of-both-worlds approach, and results in aggressive stack allocation on a production Java Virtual Machine, without sacrificing efficiency.',
  'utsav-singh-hierarchical-control-2026':
    'Solving long-horizon tasks remains a central challenge in robotics because agents must explore efficiently, assign credit over long time scales, and act under sparse supervision. To address this, hierarchical reinforcement learning offers a promising alternative to flat reinforcement learning by enabling a high-level policy to propose subgoals and a low-level policy to execute them. However, in practice, hierarchical reinforcement learning suffers from a fundamental issue: the higher level can propose subgoals that are infeasible for the lower level to achieve, leading to training instability and sub-optimal performance.\n\nIn this talk, I will present my research around a central idea: hierarchy is effective only when its high-level decisions are grounded in the capabilities of the lower-level policies. I will discuss methods for training high-level policies to predict feasible subgoals by leveraging expert demonstrations, preference-based feedback, and visually grounded reward synthesis. Across challenging navigation and manipulation tasks, these approaches improve training stability, mitigate non-stationarity, and enable agents to solve complex sparse-reward tasks in both simulation and real-world robotic settings. More broadly, this work argues that building intelligent robotic agents that can solve long-horizon tasks is not just a matter of better planning, but of ensuring that high-level decisions remain aligned with what lower-level policies can actually achieve.',
  'lakshay-saggi-disjoint-shortest-paths-2026':
    'We consider the 2-Disjoint Shortest Paths problem: given a directed weighted graph and two terminal pairs, decide whether there exist vertex-disjoint shortest paths between each pair.\n\nBuilding on recent advances in disjoint shortest paths for DAGs and undirected graphs, we present an O(mn log n)-time algorithm for this problem in weighted directed graphs that do not contain negative or zero weight cycles. This algorithm presents a significant improvement over the previously known O(m^5n) time bound. Our approach exploits the algebraic structure of polynomials that enumerate shortest paths between terminal pairs. A key insight is that these polynomials admit a recursive decomposition, enabling efficient evaluation via dynamic programming over fields of characteristic two.\n\nIn addition, we extend our techniques to a more general setting: given two terminal pairs in a directed graph, find the minimum possible number of vertex intersections between any shortest path from the first pair and any shortest path from the second pair. We call this the Minimum 2-Disjoint Shortest Paths problem. We provide the first efficient algorithm for this problem, including an O(m^2 n^3)-time algorithm for directed graphs with positive edge weights and an O(m+n)-time algorithm for DAGs and undirected graphs. This is joint work with Keerti Choudhary and Amit Kumar, presented at ITCS 2026.',
  'janki-bhimani-system-design-2026':
    'This talk presents a unified vision for advancing system design across classical and quantum computing by rethinking how memory, storage, and intelligence are integrated into modern computing architectures. As systems evolve across cloud, HPC, AI, autonomous platforms, and emerging quantum environments, long-standing assumptions about storage abstractions, memory hierarchies, and reliability no longer hold. Heterogeneous devices, dynamic workloads, and operational stressors expose fundamental limitations in isolated, layer-specific optimizations, motivating the need for principled, end-to-end system design.\n\nThe talk is organized around three interconnected research thrusts. First, it examines emerging memory and storage systems, tracing the evolution of SSD abstractions from legacy block interfaces to programmable, computational, and byte-addressable storage, including key-value SSDs, zoned namespaces, CXL-enabled devices, and hybrid memory systems. This work challenges conventional host-device boundaries and introduces new approaches to caching, indexing, tiering, concurrency control, and endurance management for modern workloads.\n\nSecond, the talk highlights work that establishes a new perspective on storage reliability under environmental stress, demonstrating that environmental factors within vendor-specified limits, such as temperature, humidity, and vibration, affect SSDs in fundamentally different and persistent ways compared to HDDs. Through controlled experimentation, my team was among the first to show that these stressors induce lasting performance degradation, increased variability, and tail-latency amplification due to flash-specific behaviors. Third, the talk extends system design into quantum computing, where my team has been among the trailblazers in identifying and formalizing the need for quantum checkpointing. Together, these efforts advocate for a new generation of intelligent, adaptive, and resilient system architectures, where storage, memory, learning, and computation are co-designed to support the next wave of classical and quantum computing systems.',
  'venkatesh-raman-nseth-2026':
    'SETH, the Strong Exponential Time Hypothesis, has been used to show fine-grained lower bounds, such as that the diameter of a graph cannot be determined in O(n^{2-epsilon}) time. We will see a non-deterministic version of it, NSETH, and some of its consequences.\n\nEn route, we will see a better-than-brute-force algorithm for Max2SAT and a better-than-brute-force non-deterministic algorithm for the complement of the 3-SUM problem.',
  'ashwin-verma-distributed-learning-2026':
    'Modern distributed systems, from peer-to-peer networks to collaborative learning platforms, operate under fundamental information constraints: communication is limited, network topology evolves, and data sources may be unreliable. In such systems, the information structure is not merely an implementation detail; it fundamentally shapes algorithm design and convergence behavior. This talk presents algorithmic and theoretical contributions organized around two core challenges.\n\nFirst, I analyze communication-efficient distributed convex optimization over graphs. Standard gossip and consensus-based methods rely on fixed or random communication schedules. I instead study adaptive protocols in which nodes prioritize communication with maximally disagreeing neighbors, inducing state-dependent network evolution. I establish almost-sure convergence over dynamically evolving graphs without relying on spectral gap assumptions, and characterize how adaptive communication affects convergence behavior.\n\nSecond, I study learning from unreliable sources without ground truth. In a crowdsourced binary classification setting, workers provide noisy labels with unknown error rates and no labeled validation data. I establish that three workers are necessary and sufficient for parameter recovery, while two workers admit infinitely many indistinguishable models. I then develop an online stochastic-approximation algorithm that provably converges without supervised signals. Across these problems, a common theme emerges: convergence guarantees depend jointly on objective geometry and the evolution of information constraints. Treating information structure as an algorithmic design variable enables principled approaches to distributed learning under uncertainty.',
  'parth-paritosh-networked-inference-2026':
    'Networked mission-critical systems in domains such as robotics, autonomous transit, infrastructure management, and defense need to make autonomous decisions to operate independently in evolving environments. For autonomous operations, such networks of diverse agents must interpret noisy measurements in real-time to deliver reliable decisions. These agents collect measurements with underlying dependencies, communicate intermittently, and need to mitigate coordinated attacks in the information space. Building upon the networked architecture that scales computation and communication and avoids single point of failure, we leverage causal dependencies in distributed settings to drive further efficiencies, accommodate heterogeneous noise, and handle eavesdropping and data poisoning attacks. Our principled approach quantifies trade-offs between statistical convergence, communication costs and privacy as a result of probabilistic representations, causal dependencies, privacy and resilience.\n\nThis talk will focus on three contributions to networked statistical inference. First, we recast the online distributed inference problem in terms of mirror descent optimization over general probability densities. This framework leads to provably correct inference algorithms that accommodate discrete and continuous variables, and represent both joint and marginal probability densities over time-varying networks. To incorporate high-dimensional, non-linear and heterogeneous sensing likelihoods, we derive a distributed version of evidence lower bound to apply variational inference technique. The resulting algorithm is validated over a distributed mapping task using LiDAR sensor data from a team of TurtleBot robots.\n\nSecondly, we design a provably correct estimation algorithm that scales by leveraging local relevance and causal dependencies between the landmarks and agent states. Finally, we explain how state decompositions can be leveraged to perform estimation while preserving the privacy of both local data and its generating statistics. After discussing resilience in this context, the talk ends with a brief overview of future research directions.',
  'tameesh-suri-ai-codesign-2026':
    'AI workloads have driven explosive growth in compute and memory demand, now accelerating even faster with large-scale inference and interactive systems. The performance gains required far exceed what traditional Moore’s Law scaling can deliver. The next 1000x will not come from the same innovations that powered the last one. It will require holistic co-design across materials, devices, architecture, packaging, and systems, bringing both profound challenges and unprecedented opportunities.',
  'vaibhav-krishan-boolean-circuits-2026':
    'Boolean circuits provide a combinatorial representation of computation, where the number of gates, or the size, represents running time, and the number of layers, or the depth, capture parallel running time. They form a framework for answering fundamental questions such as P vs NP: proving that some NP problem requires circuits of superpolynomial size would separate P from NP.\n\nWith limited progress on this question for general circuits, early breakthroughs focused on restricted circuit classes. Hastad proved that constant-depth circuits with AND, OR, and NOT gates require exponential size to compute the parity function, which determines whether the sum of inputs is even or odd. Razborov and, independently, Smolensky extended this to circuits augmented with parity or modular gates for prime moduli, showing that such circuits require exponential size to compute the majority function, which determines whether the sum of inputs is at least half their number.\n\nFollowing these foundational results, research has advanced along two principal directions, though further progress has become increasingly challenging with only a handful of breakthroughs. In this talk, Vaibhav will present some of his work contributing new advances at the frontier of both directions.',
  'sneha-mohanty-pinball-wizards-2026':
    'We introduce and investigate the computational complexity of a novel physical problem known as the Pinball Wizard problem. It involves an idealized pinball moving through a maze composed of one-way gates, plane walls, parabolic walls, moving plane walls, and bumpers that cause acceleration or deceleration. Given the initial position and velocity of the pinball, the task is to decide whether it will hit a specified target point.\n\nBy simulating a two-stack pushdown automaton, we show that the problem is Turing-complete, even in two-dimensional space. In our construction, each step of the automaton corresponds to a constant number of reflections. Thus, deciding the Pinball Wizard problem is at least as hard as the Halting problem. Furthermore, our construction allows bumpers to be replaced with moving walls. In this case, even a ball moving at constant speed, a so-called ray particle, can be used, demonstrating that the Ray Particle Tracing problem is also Turing-complete.',
  'samarth-brahmabhatt-robotic-manipulation-2026':
    'As local manufacturing becomes a priority across countries, there is an increased interest in the use of innovative technology like robotics and machine learning to boost reliability and cost-effectiveness. Manipulation is the robotics sub-field most relevant to this. In this talk, I will first present some technical challenges in building reliable robotic systems for advanced manufacturing and survey the state of the art. Next, I will dive into the details of my research, which covers perception and imitation of human manipulation behaviours as well as policy learning for contact-rich robotic manipulation skills. Finally, I will briefly mention some lessons learnt from the robotics startup industry that can benefit academic labs.',
  'akhil-s-algorithmic-information-theory-2026':
    'In this talk, we will look at some of the basic ideas from algorithmic information theory and discuss a few recent developments. We’ll begin with Kolmogorov complexity, which measures the amount of algorithmic information in a finite string. This leads to a clean notion of randomness for infinite sequences: a sequence is random if all but finitely many of its prefixes are incompressible, meaning they contain essentially full information. We’ll then move to the constructive dimension, which refines this idea by measuring the rate of randomness. Informally, this can be thought of as taking the Kolmogorov complexity of longer and longer prefixes, normalizing by their length, and looking at the limiting behavior. Finally, we’ll look at the polynomial-time analogue of constructive dimension and an old problem of robustness in this setting. Roughly speaking, the question is whether polynomial-time dimension can also be characterized by rates of polynomial-time bounded Kolmogorov complexity. Somewhat surprisingly, this turns out to be closely connected to the existence of one-way functions.',
  'ajay-singh-memory-reclamation-2026':
    'Safe memory reclamation is crucial to ensure memory safety in optimistic and lock-free concurrent data structures in non-garbage collected programming languages. Yet, designing an ideal safe memory reclamation algorithm remains challenging. The main difficulties include achieving high speed and scalability, keeping the interface easy to use for programmers, ensuring applicability to a broad class of data structures, bounding the memory footprint, and avoiding asymmetric overhead across data structure operations. Addressing these issues is critical for enabling the deployment of concurrent data structures in production systems.\n\nIn this talk, I will present three new methods for safe memory reclamation that are each designed to address a distinct shortcoming of state-of-the-art safe memory reclamation algorithms. Together, these methods demonstrate how codesigning safe memory reclamation algorithms with neighboring layers of the programming environment, including operating system and hardware cache-coherence, can overcome long-standing challenges efficiently.',
  'utkarsh-mall-visual-discovery-2026':
    'From social media all the way to satellite images, we are capturing visual data at an unprecedented scale. These images tell a story about our planet. With advances in automatic recognition, we can build a collective understanding of world-scale events as recorded through visual media. To achieve these goals in different domains, we need label-efficient vision and multimodal foundation models that are interpretable and trustworthy for those domains.\n\nIn this talk, we will first look at an annotation-efficient method for building a multimodal vision-language model in the scientific domain of remote sensing, where language annotations are sparse. Then, I will present my recent research on building interpretable models for scientific discovery using such black-box vision-language models. Finally, we will look at some open challenges in this area through some of the datasets that my work proposed in order to evaluate these challenges and enable scientific discovery.',
  'lakshmi-mandal-reinforcement-learning-2026':
    'This research seminar focuses on my recent research experience in multiple novel works involving several research domains, such as reinforcement learning, both with or without function approximators including deep neural networks and multi-agent reinforcement learning; stochastic optimization; and natural language processing. All these works fall under either multi-timescale or multi-agent reinforcement learning algorithms. Reinforcement learning deals with the problem of dynamic decision-making under uncertainty. In reinforcement learning, we often need multi-layer decision-making. These problems can be handled by incorporating many time scales proportionate to the number of layers of decision-making.\n\nFurther, we come across various applications in which multiple agents are involved rather than a single agent. These agents can work together to accomplish a common goal or can compete against each other for a certain resource. It is hard to immediately extend single-timescale and single-agent learning algorithms to multi-timescale and multi-agent settings, respectively, because of scalability, stability, and coordination issues. Thus, we considered multi-timescale and multi-agent settings in our work and proposed novel algorithms. Further, we provided theoretical convergence guarantees for all proposed algorithms using either asymptotic or finite-time analyses, or both. Moreover, our experimental results on different standard reinforcement learning tasks demonstrate that our proposed algorithms are better than the corresponding state-of-the-art algorithms. The detailed problem statements, methodology, and convergence analysis will be discussed in the research seminar.',
  'nisarg-shah-fair-ai-2026':
    'Over the millennia, human society has invented numerous systems for decision-making, from early councils and monarchies to modern democratic systems, ensuring that these systems treat individuals and groups fairly. With AI now emerging as the latest decision-making tool, there is naturally a growing interest in ensuring the fairness of AI-driven decisions. In this talk, I will present an approach to algorithmic fairness inspired by democratic principles.\n\nFirst, I will review mathematical treatments of this approach in computational social choice, with applications to elections and resource allocation. Then, I will talk about how this framework can be extended to AI applications, such as classification, clustering, and reinforcement learning, providing broadly applicable criteria that are less sensitive to group definitions. Finally, I will discuss how this approach can be applied to AI alignment more broadly, and how robust mechanisms designed for democratic governance systems can be adapted to the AI ecosystem.',
  'adithya-kumar-systems-heterogeneity-2026':
    'As the landscape of modern computer applications enters the realms of pervasive AI, their colossal computational needs are increasingly met by datacenter platforms that expose a diverse mix of CPUs, GPUs, accelerators, and smart peripherals such as SmartNICs and SSDs. While this plurality has unlocked numerous opportunities and enabled tremendous progress for AI applications, it has necessitated revisiting fundamental questions of what, when, and how software systems should leverage device-specific capabilities to navigate challenges not only in performance, efficiency, and reliability but also the long-term viability of these large-scale computing environments.\n\nIn this talk, I will outline a systems design approach for heterogeneous platforms that first characterizes the resource capabilities, designs components to explore the trade-offs, and finally demonstrates system solutions that exploit the heterogeneity. As a concrete instantiation of these ideas, I will detail SplitRPC, an RPC framework that tackles the overheads of serving ML inference on GPUs, or RPC tax, by leveraging the P2P data-path and the compute capabilities of a SmartNIC under distributed settings. Finally, I will present a case for future system designers to build heterogeneity-first system components that implicitly discover and adapt to hardware and workload diversity in order to improve performance, efficiency, and reliability while reducing long-term system and energy costs.',
  'harsh-parikh-causal-inference-2026':
    'Many common estimators in machine learning and causal inference are linear smoothers, where the prediction is a weighted average of the training outcomes. Some estimators, such as ordinary least squares and kernel ridge regression, allow for arbitrarily negative weights, which improve feature imbalance but often at the cost of increased dependence on parametric modeling assumptions and higher variance. By contrast, estimators like importance weighting and random forests, sometimes implicitly, restrict weights to be non-negative, reducing dependence on parametric modeling and variance at the cost of worse imbalance.\n\nIn this work, we propose a unified framework that directly penalizes the level of extrapolation, replacing the current practice of a hard non-negativity constraint with a soft constraint and corresponding hyperparameter. We derive a worst-case extrapolation error bound and introduce a novel bias-bias-variance tradeoff, encompassing biases due to feature imbalance, model misspecification, and estimator variance; this tradeoff is especially pronounced in high dimensions, particularly when positivity is poor. We then develop an optimization procedure that regularizes this bound while minimizing imbalance and outline how to use this approach as a sensitivity analysis for dependence on parametric modeling assumptions. We demonstrate the effectiveness of our approach through synthetic experiments and a real-world application, involving the generalization of randomized controlled trial estimates to a target population of interest.',
  'soumyajit-chatterjee-edge-intelligence-2026':
    'Efficiency is a central design principle for enabling machine learning at the edge, where resource constraints and scalability challenges dominate. This talk examines efficiency from three perspectives: reducing annotation costs, minimizing data collection, and enhancing robustness at runtime. I will begin by briefly summarizing my PhD work on automated annotations using multimodal sensing, along with collaborative efforts that demonstrate the potential of multimodal approaches. I will then discuss some of my recent works at Bell Labs, including federated learning in multi-device ecosystems and on-device training, before moving on to the primary focus of the talk: the efficiency of on-device retraining and test-time adaptation. I will conclude by highlighting recent collaborative projects, briefly touching on adaptation methods, and outlining my future research directions in efficient, adaptive, and human-centered edge intelligence.',
};

export const seminarEntries = rawSeminarEntries.map((entry) => ({
  ...entry,
  abstract: seminarAbstracts[entry.id] ?? entry.abstract,
})) satisfies SeminarEntry[];

export const seminarEntriesChronological = [...seminarEntries].sort((a, b) =>
  a.date.localeCompare(b.date),
);

const formatNavDate = (date: string) => {
  const [year = 2026, month = 1, day = 1] = date.split('-').map(Number);

  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
  }).format(new Date(year, month - 1, day));
};

const toNavItem = (entry: SeminarEntry) => ({
  title: entry.title,
  speaker: entry.speaker,
  date: formatNavDate(entry.date),
  time: entry.time ?? '',
  href: `/updates/seminars#${entry.id}`,
});

export const seminarNavHighlights = {
  latest: seminarEntries.slice(0, 2).map(toNavItem),
  theory: seminarEntries
    .filter((entry) => entry.type === 'CS theory seminar')
    .slice(0, 2)
    .map(toNavItem),
};
