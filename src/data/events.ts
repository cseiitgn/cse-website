export type EventCategory =
  | "conference"
  | "school"
  | "workshop"
  | "symposium"
  | "course";

export interface DepartmentEvent {
  id: string;
  title: string;
  category: EventCategory;
  year: number;
  displayDate: string;
  startDate?: string;
  endDate?: string;
  organizer?: string;
  collaborators?: string;
  description: string;
  source: "CSE events.xlsx" | "CSE archive";
  featured?: boolean;
}

export const EVENT_CATEGORY_LABELS: Record<EventCategory, string> = {
  conference: "Conference",
  school: "School",
  workshop: "Workshop",
  symposium: "Symposium",
  course: "Course",
};

export const EVENT_CATEGORY_STYLES: Record<EventCategory, string> = {
  conference: "border-sky-200 bg-sky-50 text-sky-700",
  school: "border-emerald-200 bg-emerald-50 text-emerald-700",
  workshop: "border-amber-200 bg-amber-50 text-amber-800",
  symposium: "border-violet-200 bg-violet-50 text-violet-700",
  course: "border-rose-200 bg-rose-50 text-rose-700",
};

export const departmentEvents: DepartmentEvent[] = [
  {
    id: "ai-day-2026",
    title: "AI Day",
    category: "symposium",
    year: 2026,
    displayDate: "12 Feb 2026",
    startDate: "2026-02-12",
    organizer: "Mayank Singh",
    collaborators: "Yogesh Meena",
    description:
      "A department symposium around AI research, applications, and institute-wide engagement.",
    source: "CSE events.xlsx",
    featured: true,
  },
  {
    id: "cybersecurity-workshop-2026",
    title:
      "Cybersecurity Workshop on Strengthening IT/OT and Financial Sector Security through Collaboration",
    category: "workshop",
    year: 2026,
    displayDate: "9 Apr 2026",
    startDate: "2026-04-09",
    organizer: "Abhishek Bichhawat",
    collaborators: "Sameer G. Kulkarni",
    description:
      "A collaborative workshop focused on IT/OT security and financial-sector cybersecurity practice.",
    source: "CSE events.xlsx",
    featured: true,
  },
  {
    id: "modern-80211-wlans-2025",
    title: "Certificate Course on Modern 802.11 WLANs",
    category: "course",
    year: 2025,
    displayDate: "17-23 Mar 2025",
    startDate: "2025-03-17",
    endDate: "2025-03-23",
    organizer: "Sameer G. Kulkarni",
    collaborators: "Ravi Hegde and Uttama Lahiri",
    description:
      "A certificate course on modern wireless LAN systems and practice.",
    source: "CSE events.xlsx",
    featured: true,
  },
  {
    id: "beyond-5g-workshop-2025",
    title: "Workshop on Paradigms for Beyond 5G Communication",
    category: "workshop",
    year: 2025,
    displayDate: "24 Mar 2025",
    startDate: "2025-03-24",
    organizer: "Sameer G. Kulkarni",
    collaborators: "Ravi Hegde and Uttama Lahiri",
    description:
      "A focused workshop on emerging communication paradigms beyond 5G.",
    source: "CSE events.xlsx",
  },
  {
    id: "bci-stroke-rehab-2025",
    title:
      "Advances in Neuro Rehabilitation and Assistive Technologies: Workshop on BCI-Driven Stroke Rehabilitation",
    category: "workshop",
    year: 2025,
    displayDate: "10-11 Mar 2025",
    startDate: "2025-03-10",
    endDate: "2025-03-11",
    organizer: "Yogesh Meena",
    description:
      "A workshop connecting brain-computer interfaces, assistive technologies, and stroke rehabilitation.",
    source: "CSE events.xlsx",
  },
  {
    id: "fsttcs-2024",
    title:
      "44th IARCS Annual Conference on Foundations of Software Technology and Theoretical Computer Science",
    category: "conference",
    year: 2024,
    displayDate: "14-20 Dec 2024",
    startDate: "2024-12-14",
    endDate: "2024-12-20",
    organizer: "Neeldhara Misra",
    description:
      "IIT Gandhinagar hosted FSTTCS, one of India’s flagship theoretical computer science conferences.",
    source: "CSE events.xlsx",
    featured: true,
  },
  {
    id: "compute-t4e-2024",
    title: "COMPUTE and T4E",
    category: "conference",
    year: 2024,
    displayDate: "5-8 Dec 2024",
    startDate: "2024-12-05",
    endDate: "2024-12-08",
    organizer: "Neeldhara Misra",
    collaborators: "Sameer Sahasrabudhe and Aditi Kothiyal",
    description:
      "A joint computing-education gathering around teaching, learning, and research in CS education.",
    source: "CSE events.xlsx",
    featured: true,
  },
  {
    id: "python-ai-workshop-2024",
    title: "One-Day Workshop on Python Programming and AI Applications",
    category: "workshop",
    year: 2024,
    displayDate: "4 May 2024",
    startDate: "2024-05-04",
    organizer: "Anirban Dasgupta and Raviraj Joshi",
    collaborators: "Nirav Bhatt",
    description:
      "A hands-on programming and AI applications workshop for learners building practical computing fluency.",
    source: "CSE events.xlsx",
  },
  {
    id: "cricket-computing-education-week-2024",
    title:
      "Computing Education Week / CRiCKET / Building Imagination with Knowledge Exchange",
    category: "workshop",
    year: 2024,
    displayDate: "3-9 Feb 2024",
    startDate: "2024-02-03",
    endDate: "2024-02-09",
    organizer: "Neeldhara Misra",
    description:
      "A computing education program focused on imagination, knowledge exchange, and learner-centered CS activities.",
    source: "CSE events.xlsx",
    featured: true,
  },
  {
    id: "5g-use-case-labs-2024",
    title: "5G Use Case Labs Awareness and Pre-Commissioning Readiness",
    category: "workshop",
    year: 2024,
    displayDate: "18 Mar 2024",
    startDate: "2024-03-18",
    organizer: "Sameer G. Kulkarni",
    description:
      "An awareness and readiness workshop around the institute’s 5G use-case lab activity.",
    source: "CSE events.xlsx",
  },
  {
    id: "ants-2022",
    title:
      "2022 IEEE International Conference on Advanced Networks and Telecommunications Systems",
    category: "conference",
    year: 2022,
    displayDate: "18-21 Dec 2022",
    startDate: "2022-12-18",
    endDate: "2022-12-21",
    organizer: "Sameer G. Kulkarni",
    collaborators: "Shanmuganathan Raman",
    description:
      "The IEEE ANTS conference brought researchers together around advanced networking and telecommunications systems.",
    source: "CSE events.xlsx",
  },
  {
    id: "acm-india-csed-2022",
    title: "ACM-India CSEd Workshop",
    category: "workshop",
    year: 2022,
    displayDate: "23 Dec 2022",
    startDate: "2022-12-23",
    organizer: "Neeldhara Misra",
    description:
      "A computing education workshop run with ACM-India participation.",
    source: "CSE events.xlsx",
    featured: true,
  },
  {
    id: "gian-randomized-methods-2022",
    title:
      "GIAN Course on Randomized Methods in Parameterized Algorithms",
    category: "course",
    year: 2022,
    displayDate: "5-9 Dec 2022",
    startDate: "2022-12-05",
    endDate: "2022-12-09",
    organizer: "Neeldhara Misra",
    description:
      "A GIAN short course on randomized methods for approximation and parameterized algorithms, taught by Daniel Lokshtanov.",
    source: "CSE events.xlsx",
    featured: true,
  },
  {
    id: "indoml-2022",
    title: "Indian Symposium on Machine Learning",
    category: "symposium",
    year: 2022,
    displayDate: "15-17 Dec 2022",
    startDate: "2022-12-15",
    endDate: "2022-12-17",
    organizer: "Anirban Dasgupta",
    collaborators: "Mayank Singh and Udit Bhatia",
    description:
      "The Indian Symposium on Machine Learning brought together research communities working on data, learning, and AI.",
    source: "CSE events.xlsx",
  },
  {
    id: "acm-ikdd-summer-school-2022",
    title: "ACM-IKDD Summer School on Data Sciences",
    category: "school",
    year: 2022,
    displayDate: "4-16 Jul 2022",
    startDate: "2022-07-04",
    endDate: "2022-07-16",
    organizer: "Anirban Dasgupta",
    collaborators: "Mayank Singh",
    description:
      "A short-term summer school on data sciences, organized with ACM-IKDD.",
    source: "CSE events.xlsx",
    featured: true,
  },
  {
    id: "ai-emerging-economies-2022",
    title: "AI Reflections and Applications in Emerging Economies",
    category: "workshop",
    year: 2022,
    displayDate: "1-2 Oct 2022",
    startDate: "2022-10-01",
    endDate: "2022-10-02",
    organizer: "Sameer G. Kulkarni",
    collaborators: "Deepak Singhania",
    description:
      "A workshop on AI applications and reflection in emerging-economy contexts.",
    source: "CSE events.xlsx",
  },
  {
    id: "indoml-2021",
    title: "Indian Symposium on Machine Learning",
    category: "symposium",
    year: 2021,
    displayDate: "16-18 Dec 2021",
    startDate: "2021-12-16",
    endDate: "2021-12-18",
    organizer: "Anirban Dasgupta",
    collaborators: "Mayank Singh and Udit Bhatia",
    description:
      "A symposium gathering Indian machine-learning researchers and practitioners.",
    source: "CSE events.xlsx",
  },
  {
    id: "acm-iriiss-2020",
    title: "ACM-India Inter-Research Institute Student Seminar in CS",
    category: "symposium",
    year: 2020,
    displayDate: "2020",
    description:
      "A student seminar connecting CS researchers across Indian institutes.",
    source: "CSE archive",
  },
  {
    id: "acm-india-annual-event-2020",
    title: "ACM-India Annual Event",
    category: "conference",
    year: 2020,
    displayDate: "2020",
    description:
      "A department-hosted ACM-India annual gathering.",
    source: "CSE archive",
  },
  {
    id: "acmw-women-cs-research-2020",
    title: "ACM-W India Workshop for Women in CS Research",
    category: "workshop",
    year: 2020,
    displayDate: "2020",
    description:
      "A workshop supporting women researchers in computer science.",
    source: "CSE archive",
    featured: true,
  },
  {
    id: "acmw-algorithmic-game-theory-2019",
    title: "ACM-W Summer School on Algorithmic Game Theory",
    category: "school",
    year: 2019,
    displayDate: "2019",
    description:
      "A summer school introducing algorithmic game theory through ACM-W.",
    source: "CSE archive",
    featured: true,
  },
  {
    id: "gian-social-choice-2017",
    title: "GIAN Course on Computational Social Choice",
    category: "course",
    year: 2017,
    displayDate: "2017",
    description:
      "A GIAN course on computational social choice taught by Edith Elkind.",
    source: "CSE archive",
    featured: true,
  },
  {
    id: "gian-pattern-matching-2017",
    title: "GIAN Course on Pattern Matching Algorithms",
    category: "course",
    year: 2017,
    displayDate: "2017",
    description:
      "A GIAN course on pattern matching algorithms taught by Amihood Amir.",
    source: "CSE archive",
    featured: true,
  },
  {
    id: "acm-graph-theory-summer-school-2017",
    title: "ACM Summer School on Graph Theory and Graph Algorithms",
    category: "school",
    year: 2017,
    displayDate: "2017",
    description:
      "A summer school on graph theory and graph algorithms.",
    source: "CSE archive",
    featured: true,
  },
  {
    id: "nmi-complexity-theory-2016",
    title: "NMI Workshop on Complexity Theory",
    category: "workshop",
    year: 2016,
    displayDate: "2016",
    description:
      "A workshop on complexity theory from the department archive.",
    source: "CSE archive",
  },
  {
    id: "teqip-design-analysis-algorithms-2016",
    title: "TEQIP Summer School on Design and Analysis of Algorithms",
    category: "school",
    year: 2016,
    displayDate: "2016",
    description:
      "A TEQIP summer school on algorithm design and analysis.",
    source: "CSE archive",
    featured: true,
  },
  {
    id: "gian-3d-digitization-cultural-heritage-2015",
    title: "GIAN Course on 3D Digitization for Cultural Heritage",
    category: "course",
    year: 2015,
    displayDate: "30 Nov-11 Dec 2015",
    startDate: "2015-11-30",
    endDate: "2015-12-11",
    organizer: "Shanmuganathan Raman",
    collaborators: "Marco Callieri, Visual Computing Lab, ISTI-CNR, Italy",
    description:
      "A GIAN course on 3D digitization methods for cultural heritage.",
    source: "CSE archive",
    featured: true,
  },
];

export const currentEventDate = "2026-06-01";

export const upcomingEvents = departmentEvents
  .filter((event) => event.startDate && event.startDate >= currentEventDate)
  .sort((a, b) => (a.startDate ?? "").localeCompare(b.startDate ?? ""));

export const pastEvents = departmentEvents
  .filter((event) => !event.startDate || event.startDate < currentEventDate)
  .sort((a, b) => {
    const dateCompare = (b.startDate ?? `${b.year}`).localeCompare(
      a.startDate ?? `${a.year}`,
    );
    return dateCompare || a.title.localeCompare(b.title);
  });

export const featuredLearningEvents = departmentEvents.filter(
  (event) =>
    event.featured &&
    ["school", "course", "workshop", "conference"].includes(event.category),
);
