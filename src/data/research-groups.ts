import { FACULTY } from "./faculty";
import { FACULTY_ALLOCATIONS } from "./faculty-allocations";
import {
  RESEARCH_AREAS,
  type ResearchAreaPage,
  type ResearchAreaSlug,
} from "./research-area-pages";

// Topic content and faculty allocations have separate sources.
const definitions = [
  {
    slug: "theory",
    title: "Theory",
    description:
      "Algorithms, complexity, combinatorics, and the mathematical foundations of computation.",
    topics: ["theory"],
    related: [],
  },
  {
    slug: "systems",
    title: "Systems",
    description:
      "Computer architecture, networks, distributed systems, software engineering, security, and privacy.",
    topics: ["systems", "security"],
    related: [{ title: "Security & privacy", href: "/research/security" }],
  },
  {
    slug: "ai",
    title: "AI & Machine Learning",
    description:
      "Machine learning, natural language processing, computer vision, data science, and human–computer interaction.",
    topics: ["ai", "data-science", "hci"],
    related: [
      { title: "Data science", href: "/research/data-science" },
      { title: "HCI & cognitive science", href: "/research/hci" },
    ],
  },
] as const;
const unique = <T>(items: T[], key: (item: T) => string): T[] => [
  ...new Map(items.map((item) => [key(item), item])).values(),
];
export const RESEARCH_GROUPS = definitions.map((group) => {
  const base = RESEARCH_AREAS[group.slug];
  const pages = group.topics.map(
    (slug) => RESEARCH_AREAS[slug as ResearchAreaSlug],
  );
  const names = FACULTY_ALLOCATIONS.filter(member => member.areas.includes(group.slug)).map(member => member.name);
  const faculty = names
    .map((name) => {
      const member = FACULTY.find((f) => f.name === name);
      const existing = pages
        .flatMap((p) => p.faculty)
        .find((f) => f.name === name);
      return {
        name,
        title: member?.designation ?? existing?.title ?? "",
        focus:
          member?.researchInterests?.slice(0, 3).join("; ") ||
          existing?.focus ||
          "",
        profile: member?.homepage ?? existing?.profile,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  const area: ResearchAreaPage = {
    ...base,
    title: group.title,
    shortTitle: group.title,
    description: group.description,
    faculty,
    themes: unique(
      pages.flatMap((p) => p.themes),
      (t) => t,
    ),
    publications: unique(
      pages.flatMap((p) => p.publications),
      (p) => p.title,
    ),
    projects: unique(
      pages.flatMap((p) => p.projects),
      (p) => p.title,
    ),
  };
  return { ...group, area };
});

export const UNALLOCATED_FACULTY = FACULTY_ALLOCATIONS
  .filter(member => member.areas.length === 0)
  .map(allocation => FACULTY.find(member => member.name === allocation.name)!)
  .sort((a, b) => a.name.localeCompare(b.name));
