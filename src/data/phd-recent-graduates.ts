import { RESEARCH_SCHOLARS, RESEARCH_SCHOLAR_SOURCE } from './research-scholars';

export interface RecentPhDGraduate {
  name: string;
  directoryName: string;
  program: 'Computer Science and Engineering' | 'Artificial Intelligence';
  joined: string;
  email: string;
  image: string;
  thesisTitle: string;
  defenseDate: string;
  defenseDateTime: string;
  supervisor: string;
  summary: string;
  source: string;
}

type GraduateInput = Omit<
  RecentPhDGraduate,
  'program' | 'joined' | 'email' | 'image' | 'source'
>;

const getScholar = (directoryName: string) => {
  const scholar = RESEARCH_SCHOLARS.find((item) => item.name === directoryName);

  if (!scholar) {
    throw new Error(`Missing research scholar data for ${directoryName}`);
  }

  return scholar;
};

const graduates: GraduateInput[] = [
  {
    name: 'Jayesh Malaviya',
    directoryName: 'Malaviya Jayesh Vallabhbhai',
    thesisTitle:
      'Subset Selection for Scalable Machine Learning: Coresets, Sketching, and Statistical Guarantees',
    defenseDate: '3 Jun 2026',
    defenseDateTime: '2026-06-03T18:00:00+05:30',
    supervisor: 'Anirban Dasgupta',
    summary:
      'Scalable machine learning through coresets, sketching, and randomized numerical linear algebra.',
  },
  {
    name: 'Pritam Kadasi',
    directoryName: 'Kadasi Pritam Shankaraiah',
    thesisTitle:
      'Budget-Aware Decision Making for NLP: Annotation, Training and Data',
    defenseDate: '3 Jun 2026',
    defenseDateTime: '2026-06-03T17:30:00+05:30',
    supervisor: 'Mayank Singh',
    summary:
      'Natural language processing and large language models, with an emphasis on instruction tuning, multilingual AI, and resource-efficient model training.',
  },
  {
    name: 'Himanshu Beniwal',
    directoryName: 'Himanshu Beniwal',
    thesisTitle: 'Assessing Factuality and Toxicity in Large Language Models',
    defenseDate: '18 May 2026',
    defenseDateTime: '2026-05-18T09:00:00+05:30',
    supervisor: 'Mayank Singh',
    summary:
      'Factuality, toxicity, and safety assessment in multilingual large language models.',
  },
  {
    name: 'Prajwal Kumar Singh',
    directoryName: 'Prajwal Kumar Singh',
    thesisTitle:
      'Scalable Generative Vision and Neural Decoding: Connecting Machine and Human Perception',
    defenseDate: '6 May 2026',
    defenseDateTime: '2026-05-06T16:30:00+05:30',
    supervisor: 'Shanmuganathan Raman',
    summary:
      'Generative vision and neural decoding methods that connect machine and human perception.',
  },
  {
    name: 'Jinia Ghosh',
    directoryName: 'Jinia Ghosh',
    thesisTitle:
      'Graphs Defined on Groups: Complexity Theoretic and Algorithmic Aspects',
    defenseDate: '29 Apr 2026',
    defenseDateTime: '2026-04-29T10:00:00+05:30',
    supervisor: 'Bireswar Das',
    summary:
      'Complexity-theoretic and algorithmic aspects of graphs defined in terms of groups.',
  },
  {
    name: 'Anant Kumar',
    directoryName: 'Anant Kumar',
    thesisTitle:
      'On Graph Isomorphism for Power Graphs and Subgraph Counting in Sparse Graphs',
    defenseDate: '24 Mar 2026',
    defenseDateTime: '2026-03-24T21:30:00+05:30',
    supervisor: 'Bireswar Das',
    summary:
      'Graph isomorphism for power graphs and subgraph counting in sparse graphs.',
  },
  {
    name: 'Zeel B Patel',
    directoryName: 'Patel Zeel Bharatkumar',
    thesisTitle: 'AI for Air Quality: Modeling, Sensor Placement and Source Detection',
    defenseDate: '4 Feb 2026',
    defenseDateTime: '2026-02-04T17:00:00+05:30',
    supervisor: 'Nipun Batra',
    summary:
      'AI for social good and air-quality systems, including modeling, sensor placement, and source detection.',
  },
];

export const RECENT_PHD_GRADUATES: RecentPhDGraduate[] = graduates
  .map((graduate) => {
    const scholar = getScholar(graduate.directoryName);

    return {
      ...graduate,
      program: scholar.program,
      joined: scholar.joined,
      email: scholar.email,
      image: scholar.image,
      source: RESEARCH_SCHOLAR_SOURCE,
    };
  })
  .sort(
    (a, b) =>
      new Date(b.defenseDateTime).getTime() -
      new Date(a.defenseDateTime).getTime(),
  );
