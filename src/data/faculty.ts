export type FacultyCategory =
  | 'core'
  | 'affiliated'
  | 'visiting'
  | 'practice'
  | 'teaching'
  | 'guest';

export interface FacultyMember {
  name: string;
  designation: string;
  category: FacultyCategory;
  primaryDepartment: string;
  secondaryDepartment?: string;
  affiliations?: string[];
  researchAreas: string[];
  dateOfJoining: string;
  homepage?: string;
}

export const FACULTY: FacultyMember[] = [
  // --- Core Faculty ---
  {
    name: 'Rajat Moona',
    designation: 'Professor & Director',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2022-10-03',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-rajat-moona',
  },
  {
    name: 'Anirban Dasgupta',
    designation: 'Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering', 'Artificial Intelligence'],
    dateOfJoining: '2013-12-30',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-anirban',
  },
  {
    name: 'Bireswar Das',
    designation: 'Associate Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering'],
    dateOfJoining: '2010-06-28',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-bireswar',
  },
  {
    name: 'Neeldhara Misra',
    designation: 'Associate Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering', 'Artificial Intelligence'],
    dateOfJoining: '2015-09-23',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-neeldhara',
  },
  {
    name: 'Nipun Batra',
    designation: 'Associate Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    affiliations: ['Center for Sustainability'],
    researchAreas: ['Computer Science and Engineering', 'Artificial Intelligence'],
    dateOfJoining: '2018-07-09',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-nipun',
  },
  {
    name: 'Manoj D Gupta',
    designation: 'Associate Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering'],
    dateOfJoining: '2016-01-18',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-manoj',
  },
  {
    name: 'Mayank Singh',
    designation: 'Associate Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering', 'Artificial Intelligence'],
    dateOfJoining: '2019-02-06',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-mayank',
  },
  {
    name: 'Sameer G Kulkarni',
    designation: 'Assistant Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    secondaryDepartment: 'Electrical Engineering',
    researchAreas: ['Computer Science and Engineering', 'Electrical Engineering'],
    dateOfJoining: '2020-04-03',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-sameer',
  },
  {
    name: 'Balagopal Komarath',
    designation: 'Assistant Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering'],
    dateOfJoining: '2020-12-21',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-balagopal',
  },
  {
    name: 'Abhishek Bichhawat',
    designation: 'Assistant Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering'],
    dateOfJoining: '2021-03-30',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-abhishek',
  },
  {
    name: 'Yogesh Kumar Meena',
    designation: 'Assistant Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [
      'Computer Science and Engineering',
      'Artificial Intelligence',
      'Cognitive Science',
    ],
    dateOfJoining: '2023-02-14',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-yogesh',
  },
  {
    name: 'Shouvick Mondal',
    designation: 'Assistant Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering'],
    dateOfJoining: '2023-02-01',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-shouvick',
  },
  {
    name: 'Manisha Padala',
    designation: 'Assistant Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2024-03-26',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-manisha',
  },

  // --- Affiliated Faculty ---
  {
    name: 'Shanmuganathan Raman',
    designation: 'Professor',
    category: 'affiliated',
    primaryDepartment: 'Electrical Engineering',
    secondaryDepartment: 'Computer Science and Engineering',
    researchAreas: [
      'Electrical Engineering',
      'Computer Science and Engineering',
      'Artificial Intelligence',
    ],
    dateOfJoining: '2013-05-20',
    homepage: 'https://iitgn.ac.in/faculty/ee/fac-shanmuganathan',
  },
  {
    name: 'Udit Bhatia',
    designation: 'Associate Professor',
    category: 'affiliated',
    primaryDepartment: 'Civil Engineering',
    secondaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Civil Engineering', 'Artificial Intelligence', 'Earth Sciences'],
    dateOfJoining: '2019-01-17',
    homepage: 'https://iitgn.ac.in/faculty/civil/fac-udit',
  },
  // --- Teaching Faculty ---
  {
    name: 'Jyoti Krishnan',
    designation: 'Assistant Teaching Professor',
    category: 'teaching',
    primaryDepartment: 'Computer Science and Engineering',
    affiliations: ['Center for Creative Learning'],
    researchAreas: ['Computer Science and Engineering'],
    dateOfJoining: '2024-03-11',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-jyothi',
  },

  // --- Practice Faculty ---
  {
    name: 'Manu Awasthi',
    designation: 'Associate Professor of Practice',
    category: 'practice',
    primaryDepartment: 'Computer Science and Engineering',
    affiliations: ['Center for Creative Learning'],
    researchAreas: [],
    dateOfJoining: '2025-12-12',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-manu',
  },
  {
    name: 'Anup Kalbalia',
    designation: 'Associate Professor of Practice',
    category: 'practice',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2026-02-02',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-anup',
  },

  // --- Visiting / Guest Faculty ---
  {
    name: 'Nirmal Kumar Sancheti',
    designation: 'Visiting Professor',
    category: 'visiting',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2025-08-04',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-nirmal',
  },
  {
    name: 'Samit Bhattacharya',
    designation: 'Visiting Associate Professor',
    category: 'visiting',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2025-03-01',
  },
  {
    name: 'Venkatesh Raman',
    designation: 'Guest Faculty',
    category: 'guest',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2025-10-17',
    homepage: 'https://iitgn.ac.in/faculty/guestprof/fac-venkatesh_raman',
  },
  {
    name: 'Viraj Shah',
    designation: 'Guest Faculty',
    category: 'guest',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2026-01-05',
  },
  {
    name: 'Madhavan Unnikrishnan Nair',
    designation: 'Guest Professor',
    category: 'guest',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2025-11-11',
  },
  {
    name: 'Yuvraj Patel',
    designation: 'Guest Assistant Professor',
    category: 'guest',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2025-01-01',
    homepage: 'https://iitgn.ac.in/faculty/guestprof/yuvraj_patel',
  },
  {
    name: 'Subir Verma',
    designation: 'Guest Professor',
    category: 'guest',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2025-10-17',
    homepage: 'https://iitgn.ac.in/faculty/guestprof/subir_varma',
  },
  {
    name: 'Ambarish Ojha',
    designation: 'Guest Professor',
    category: 'guest',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2026-02-17',
  },
  {
    name: 'K. Gopinath',
    designation: 'Guest Professor',
    category: 'guest',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2025-12-17',
  },
];

export const CATEGORY_LABELS: Record<FacultyCategory, string> = {
  core: 'Core Faculty',
  affiliated: 'Affiliated Faculty',
  visiting: 'Visiting Faculty',
  practice: 'Professors of Practice',
  teaching: 'Teaching Faculty',
  guest: 'Guest Faculty',
};

export const CATEGORY_ORDER: FacultyCategory[] = [
  'core',
  'affiliated',
  'teaching',
  'practice',
  'visiting',
  'guest',
];
