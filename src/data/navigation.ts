export interface NavLink {
  label: string;
  href: string;
  description: string;
  children?: NavLink[];
}

export const flattenLinks = (items: NavLink[]): NavLink[] =>
  items.flatMap((item) => [item, ...flattenLinks(item.children ?? [])]);

export interface NavItem {
  label: string;
  href: string;
  subitems?: NavLink[];
}

export const NAV_LINKS: NavItem[] = [
  {
    label: "About",
    href: "/about",
    subitems: [
      {
        label: "Vision",
        href: "/about/vision",
        description: "Department overview",
      },
      {
        label: "Administration",
        href: "/about/administration",
        description: "Roles and responsibilities of committees",
      },
      {
        label: "Facilities",
        href: "/about/facilities",
        description: "Labs, classrooms, and computing infrastructure",
      },
      {
        label: "Visit Us",
        href: "/about/visit",
        description: "Plan a visit to our campus on the banks of the Sabarmati",
      },
      {
        label: "Careers",
        href: "/about/careers",
        description: "Open positions and how to join us",
      },
      {
        label: "Contact",
        href: "/about/contact",
        description: "Reach out to the department",
      },
    ],
  },
  {
    label: "People",
    href: "/people",
    subitems: [
      {
        label: "Faculty",
        href: "/people/faculty",
        description: "Core, affiliated, visiting, and guest faculty",
      },

      {
        label: "Research Scholars",
        href: "/people/students",
        description: "Doctoral researchers in CSE and AI",
      },
      {
        label: "Postdoctoral researchers",
        href: "/people/postdocs",
        description: "Postdoctoral researchers and fellows",
      },
      {
        label: "Staff",
        href: "/people/staff",
        description: "Administrative and technical staff",
      },
      {
        label: "Alumni",
        href: "/people/alumni",
        description: "Public alumni trajectories and achievements",
      },
      {
        label: "Visitors",
        href: "/people/visitors",
        description: "Seminar visitors and invited speakers",
      },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    subitems: [
      {
        label: "BTech",
        href: "/academics/btech",
        description: "Undergraduate programs in CSE, AI, and ICDT",
      },
      {
        label: "MTech",
        href: "/academics/mtech",
        description: "Masters and dual-degree programs in CSE, AI, and ICDT",
      },
      {
        label: "EMasters",
        href: "/academics/emasters",
        description: "Executive masters programs in data analytics",
      },
      {
        label: "PhD",
        href: "/academics/phd",
        description: "Graduate programs in CSE and AI",
      },
      {
        label: "SRIP",
        href: "/academics/srip",
        description: "Flagship summer internship program",
      },
      {
        label: "VSRP",
        href: "/academics/vsrp",
        description: "Visiting students semester program",
      },
      {
        label: "Student Openings",
        href: "/academics/openings",
        description: "Internship, JRF and SRF positions",
      },
      {
        label: "Courses",
        href: "/academics/courses",
        description: "Course catalogue and schedules",
      },
    ],
  },
  {
    label: "Research",
    href: "/research",
    subitems: [
      {
        label: "Research areas",
        href: "/research",
        description: "Theory, systems, and AI & machine learning",
        children: [
          {
            label: "AI & Machine Learning",
            href: "/research/ai",
            description: "Deep learning, NLP, computer vision",
          },
          {
            label: "Theory",
            href: "/research/theory",
            description: "Algorithms, complexity, graph theory",
          },
          {
            label: "Systems",
            href: "/research/systems",
            description: "Computer architecture and embedded systems",
          },
        ],
      },
      {
        label: "Publications",
        href: "/research/publications",
        description: "Recent papers and articles",
      },
      {
        label: "Projects",
        href: "/research/projects",
        description: "Funded research projects and collaborations",
      },
      {
        label: "Patents",
        href: "/research/patents",
        description: "Intellectual property and technology transfer",
      },
    ],
  },
  {
    label: "News & events",
    href: "/updates/news",
    subitems: [
      {
        label: "Blog",
        href: "/blog",
        description: "Articles and perspectives",
      },
      {
        label: "News",
        href: "/updates/news",
        description: "Announcements and highlights",
      },
      {
        label: "Awards & fellowships",
        href: "/awards",
        description: "Student, faculty and alumni recognitions",
      },
      {
        label: "Seminars",
        href: "/updates/seminars",
        description: "Talks and lecture series",
      },
      {
        label: "Deadlines",
        href: "/updates/deadlines",
        description: "Upcoming important dates",
      },
      {
        label: "Outreach",
        href: "/updates/outreach",
        description: "Making developments in computing accessible to all",
      },
      {
        label: "Events",
        href: "/updates/events",
        description: "Schools, conferences and workshops",
      },
    ],
  },
];
