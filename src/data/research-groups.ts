import { FACULTY } from "./faculty";
import {
  RESEARCH_AREAS,
  type ResearchAreaPage,
  type ResearchAreaSlug,
} from "./research-area-pages";

// Broad groups inferred from the research interests on IITGN faculty profiles.
// Membership can overlap; subtopic pages retain their established URLs.
const definitions = [
  {
    slug: "theory",
    title: "Theory",
    description:
      "Algorithms, complexity, combinatorics, and the mathematical foundations of computation.",
    topics: ["theory"],
    extra: ["Manisha Padala", "Ajay Singh"],
    related: [],
  },
  {
    slug: "systems",
    title: "Systems",
    description:
      "Computer architecture, networks, distributed systems, software engineering, security, and privacy.",
    topics: ["systems", "security"],
    extra: ["Adithya Kumar", "Ajay Singh", "Joycee M. Mekie", "Anup Kalbalia"],
    related: [{ title: "Security & privacy", href: "/research/security" }],
  },
  {
    slug: "ai",
    title: "AI & Machine Learning",
    description:
      "Learning from language, images, and data; building trustworthy, human-centred AI for science and society.",
    topics: ["ai", "data-science", "hci"],
    extra: ["Nirmal Kumar Sancheti", "Shouvick Mondal"],
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
  const names = unique(
    [...pages.flatMap((p) => p.faculty.map((f) => f.name)), ...group.extra],
    (n) => n,
  );
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
