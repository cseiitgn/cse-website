export type FacultyCategory =
  | 'core'
  | 'affiliated'
  | 'visiting'
  | 'practice'
  | 'teaching'
  | 'guest';

export type FacultyProfileLinkType =
  | 'website'
  | 'scholar'
  | 'dblp'
  | 'github'
  | 'youtube'
  | 'linkedin'
  | 'x'
  | 'mastodon'
  | 'profile';

export interface FacultyProfileLink {
  type: FacultyProfileLinkType;
  label: string;
  url: string;
}

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
  links?: FacultyProfileLink[];
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
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://www.cse.iitk.ac.in/users/moona/',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/16/2265',
      },
    ],
  },
  {
    name: 'Anirban Dasgupta',
    designation: 'Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering', 'Artificial Intelligence'],
    dateOfJoining: '2013-12-30',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-anirban',
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://sites.google.com/site/anirbandasgupta',
      },
      {
        type: 'scholar',
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?hl=en&user=plJC8R0AAAAJ',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/54/385-1',
      },
    ],
  },
  {
    name: 'Bireswar Das',
    designation: 'Associate Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering'],
    dateOfJoining: '2010-06-28',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-bireswar',
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://sites.google.com/site/bireswar/home',
      },
      {
        type: 'scholar',
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?hl=en&user=RcBEsucAAAAJ',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/93/3858',
      },
    ],
  },
  {
    name: 'Neeldhara Misra',
    designation: 'Associate Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering', 'Artificial Intelligence'],
    dateOfJoining: '2015-09-23',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-neeldhara',
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://www.neeldhara.com/',
      },
      {
        type: 'scholar',
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?hl=en&user=XFgieDYAAAAJ',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/85/6789',
      },
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/neeldhara',
      },
      {
        type: 'youtube',
        label: 'YouTube',
        url: 'https://www.youtube.com/c/NeeldharaMisra42',
      },
      {
        type: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/neeldhara-misra-a54b6920/',
      },
      {
        type: 'mastodon',
        label: 'Mastodon',
        url: 'https://mathstodon.xyz/@neeldhara',
      },
    ],
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
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://nipunbatra.github.io/',
      },
      {
        type: 'scholar',
        label: 'Google Scholar',
        url: 'https://scholar.google.co.in/citations?hl=en&oi=ao&user=rFGzHlIAAAAJ',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/19/2128',
      },
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/nipunbatra',
      },
      {
        type: 'youtube',
        label: 'YouTube',
        url: 'https://www.youtube.com/@NipunBatra0',
      },
      {
        type: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nipunbatra0/',
      },
      {
        type: 'x',
        label: 'X',
        url: 'https://twitter.com/nipun_batra',
      },
    ],
  },
  {
    name: 'Manoj D Gupta',
    designation: 'Associate Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering'],
    dateOfJoining: '2016-01-18',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-manoj',
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://gmanoj.people.iitgn.ac.in/',
      },
      {
        type: 'scholar',
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?hl=en&user=jt38uQ8AAAAJ',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/05/5157',
      },
    ],
  },
  {
    name: 'Mayank Singh',
    designation: 'Associate Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering', 'Artificial Intelligence'],
    dateOfJoining: '2019-02-06',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-mayank',
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://mayank4490.github.io/',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/96/4770',
      },
      {
        type: 'x',
        label: 'Lingo Labs on X',
        url: 'https://twitter.com/lingoiitgn',
      },
      {
        type: 'linkedin',
        label: 'Lingo Labs on LinkedIn',
        url: 'https://in.linkedin.com/company/lingo-labs-iitgn',
      },
    ],
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
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://sameergk.github.io/',
      },
      {
        type: 'scholar',
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?hl=en&user=CnPfKYUAAAAJ',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/185/5705',
      },
    ],
  },
  {
    name: 'Balagopal Komarath',
    designation: 'Assistant Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering'],
    dateOfJoining: '2020-12-21',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-balagopal',
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://bkomarath.rbgo.in/',
      },
      {
        type: 'scholar',
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?hl=en&user=uTv7Dl4AAAAJ',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/124/2629',
      },
    ],
  },
  {
    name: 'Abhishek Bichhawat',
    designation: 'Assistant Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering'],
    dateOfJoining: '2021-03-30',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-abhishek',
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://people.iitgn.ac.in/~abhishek/',
      },
      {
        type: 'scholar',
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?hl=en&user=qJavKW4AAAAJ',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/61/10308',
      },
    ],
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
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://yogeshmeena.com/',
      },
      {
        type: 'scholar',
        label: 'Google Scholar',
        url: 'https://scholar.google.it/citations?hl=en&user=5xxepFkAAAAJ',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/66/10604',
      },
    ],
  },
  {
    name: 'Shouvick Mondal',
    designation: 'Assistant Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: ['Computer Science and Engineering'],
    dateOfJoining: '2023-02-01',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-shouvick',
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://sites.google.com/view/shouvick',
      },
      {
        type: 'scholar',
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?hl=en&user=QtsJ2pUAAAAJ',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/167/4011',
      },
    ],
  },
  {
    name: 'Manisha Padala',
    designation: 'Assistant Professor',
    category: 'core',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2024-03-26',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-manisha',
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://sites.google.com/view/manishapadala/home',
      },
      {
        type: 'scholar',
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?hl=en&user=xV1WKDkAAAAJ',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/213/8101',
      },
    ],
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
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://people.iitgn.ac.in/~shanmuga/',
      },
      {
        type: 'scholar',
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?hl=en&user=3YWptB8AAAAJ',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/70/4688',
      },
    ],
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
    links: [
      {
        type: 'scholar',
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?hl=en&user=tYqY-VoAAAAJ',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/199/7860',
      },
    ],
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
    links: [
      {
        type: 'profile',
        label: 'CCL profile',
        url: 'https://ccl.iitgn.ac.in/ccl-team/jyothi-krishnan',
      },
    ],
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
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://manuawasthi.in/',
      },
      {
        type: 'scholar',
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?hl=en&user=AaMBbMMAAAAJ',
      },
      {
        type: 'x',
        label: 'X',
        url: 'https://twitter.com/mnwsth',
      },
      {
        type: 'linkedin',
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/manuawasthi',
      },
    ],
  },
  {
    name: 'Anup Kalbalia',
    designation: 'Associate Professor of Practice',
    category: 'practice',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2026-02-02',
    homepage: 'https://iitgn.ac.in/faculty/cse/fac-anup',
    links: [
      {
        type: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/anup-kalbalia-66387b22/',
      },
    ],
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
    links: [
      {
        type: 'profile',
        label: 'IIT Guwahati profile',
        url: 'https://www.iitg.ac.in/iitg_faculty_details?fac=bUJwSThqUnkyTE5MdXBJY0I3d0liQT09',
      },
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://www.iitg.ernet.in/samit/',
      },
    ],
  },
  {
    name: 'Venkatesh Raman',
    designation: 'Guest Faculty',
    category: 'guest',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2025-10-17',
    homepage: 'https://iitgn.ac.in/faculty/guestprof/fac-venkatesh_raman',
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://www.imsc.res.in/~vraman/',
      },
      {
        type: 'dblp',
        label: 'DBLP',
        url: 'https://dblp.org/pid/25/2134',
      },
    ],
  },
  {
    name: 'Viraj Shah',
    designation: 'Guest Faculty',
    category: 'guest',
    primaryDepartment: 'Computer Science and Engineering',
    researchAreas: [],
    dateOfJoining: '2026-01-05',
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://virajshah.com/',
      },
      {
        type: 'scholar',
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?hl=en&user=am47A6YAAAAJ',
      },
      {
        type: 'linkedin',
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/virajshah018',
      },
    ],
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
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://homepages.inf.ed.ac.uk/ypatel/',
      },
    ],
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
    links: [
      {
        type: 'website',
        label: 'Personal website',
        url: 'https://www.csa.iisc.ac.in/~gopi/',
      },
    ],
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
