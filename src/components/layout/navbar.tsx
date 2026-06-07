'use client';

import { Fragment, useEffect, useState } from 'react';

import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Calendar,
  ChevronRight,
  Code2,
  Database,
  FileText,
  FlaskConical,
  FolderOpen,
  Globe,
  GraduationCap,
  Lock,
  MenuIcon,
  Monitor,
  Newspaper,
  Network,
  ScrollText,
  Search,
  Sparkles,
  Sun,
  Users,
  X,
} from 'lucide-react';

import { ThemeToggle } from '@/components/elements/theme-toggle';
import Logo from '@/components/layout/logo';
import { SearchModal } from '@/components/layout/search-modal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import {
  RESEARCH_AREAS,
  type ResearchAreaSlug,
} from '@/data/research-area-pages';
import { seminarNavHighlights } from '@/data/seminars';
import { cn } from '@/lib/utils';

const RESEARCH_THEMES = [
  { slug: 'ai', icon: Brain, label: 'AI & Machine Learning', href: '/research/ai', description: 'Deep learning, NLP, computer vision, and AI for social good.' },
  { slug: 'theory', icon: Code2, label: 'Theoretical CS', href: '/research/theory', description: 'Algorithms, complexity, graph theory, and combinatorial optimization.' },
  { slug: 'security', icon: Lock, label: 'Security & Privacy', href: '/research/security', description: 'Program analysis, web security, and privacy-preserving computation.' },
  { slug: 'data-science', icon: Database, label: 'Data Science', href: '/research/data-science', description: 'Large-scale analytics, streaming algorithms, and knowledge discovery.' },
  { slug: 'systems', icon: Monitor, label: 'Systems & Architecture', href: '/research/systems', description: 'Computer architecture, embedded systems, and hardware-software co-design.' },
  { slug: 'hci', icon: Network, label: 'HCI & Cognitive Science', href: '/research/hci', description: 'Brain-computer interfaces, accessibility, and cognitive modeling.' },
];

const RESEARCH_FEATURED = [
  {
    icon: BookOpen,
    label: 'Publications',
    description: 'Recent papers and articles',
    href: '/research/publications',
  },
  {
    icon: FolderOpen,
    label: 'Projects',
    description: 'Funded research projects and collaborations',
    href: '/research/projects',
  },
  {
    icon: ScrollText,
    label: 'Patents',
    description: 'Intellectual property and technology transfer',
    href: '/research/patents',
  },
];

interface AcademicsLink {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
}

const ACADEMICS_PROGRAMS: AcademicsLink[] = [
  {
    label: 'BTech',
    href: '/academics/btech',
    description: 'Learn about our undergraduate programs in CSE, AI, and ICDT, with opportunities for minors and dual majors',
    icon: GraduationCap,
  },
  {
    label: 'MTech',
    href: '/academics/mtech',
    description: 'Explore masters and dual-degree programs in CSE, AI, and ICDT',
    icon: GraduationCap,
  },
  {
    label: 'EMasters',
    href: '/academics/emasters',
    description: 'Executive masters programs in data analytics',
    icon: Sparkles,
    badge: 'New',
  },
  {
    label: 'PhD',
    href: '/academics/phd',
    description: 'Find out more about our graduate programs in CSE and AI',
    icon: GraduationCap,
  },
];

const ACADEMICS_OPPORTUNITIES: AcademicsLink[] = [
  {
    label: 'SRIP',
    href: '/academics/srip',
    description: 'Our flagship summer internship program',
    icon: Sun,
  },
  {
    label: 'VSRP',
    href: '/academics/vsrp',
    description: 'Spend a semester with us under the visiting students program',
    icon: GraduationCap,
  },
  {
    label: 'Student Openings',
    href: '/academics/openings',
    description: 'Explore available internship, JRF and SRF positions',
    icon: Users,
  },
];

const ACADEMICS_FEATURED = [
  {
    label: 'Admissions',
    href: 'https://iitgn.ac.in/admissions',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=160&fit=crop',
  },
  {
    label: 'Student Life',
    href: 'https://iitgn.ac.in/student/lifeoncampus/',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=160&fit=crop',
  },
  {
    label: 'Courses',
    href: '/academics/courses',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=160&fit=crop',
  },
];

const UPDATES_LINKS = [
  { icon: FileText, label: 'Blog', description: 'Articles and perspectives', href: '/blog' },
  { icon: Newspaper, label: 'News', description: 'Announcements and highlights', href: '/updates/news' },
  { icon: Calendar, label: 'Seminars', description: 'Talks and lecture series', href: '/updates/seminars' },
  { icon: BookOpen, label: 'Deadlines', description: 'Upcoming important dates', href: '/updates/deadlines' },
  { icon: Globe, label: 'Outreach', description: 'Making developments in computing accessible to all', href: '/updates/outreach' },
  { icon: Calendar, label: 'Events', description: 'Schools, conferences and workshops', href: '/updates/events' },
];

const SOCIAL_LINKS_NAV = [
  { title: 'X', href: 'https://twitter.com/cse_iitgn', icon: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/x.svg' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/company/cse-iitgn', icon: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linkedin-icon.svg' },
  { title: 'YouTube', href: 'https://www.youtube.com/channel/UCPYUnvUV3CiMmkhfYME48QQ', icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17'/%3E%3Cpath d='m10 15 5-3-5-3z'/%3E%3C/svg%3E" },
  { title: 'Instagram', href: 'https://instagram.com/iit_gandhinagar', icon: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg' },
  { title: 'RSS', href: '/rss.xml', icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 11a9 9 0 0 1 9 9'/%3E%3Cpath d='M4 4a16 16 0 0 1 16 16'/%3E%3Ccircle cx='5' cy='19' r='1'/%3E%3C/svg%3E" },
];

const LATEST_SEMINARS = seminarNavHighlights.latest;
const THEORY_SEMINARS = seminarNavHighlights.theory;

const FEATURED_ARTICLE = {
  title: 'Building an AI Image Editor at Hackrush 2026',
  description: 'A student account of building a modular AI image editor during Hackrush 2026.',
  href: '/blog/hackrush-2026-yuvraj-ai-image-editor',
};

interface NavSubitem {
  label: string;
  href: string;
  description: string;
}

interface NavItem {
  label: string;
  href: string;
  subitems?: NavSubitem[];
}

const ABOUT_LINKS = [
  {
    label: 'Administration',
    href: '/about/administration',
    description: 'Roles and responsibilities of committees',
    icon: Users,
  },
  {
    label: 'Facilities',
    href: '/about/facilities',
    description: 'Labs, classrooms, and computing infrastructure',
    icon: Monitor,
  },
  {
    label: 'Visit Us',
    href: '/about/visit',
    description: 'Plan a visit to our campus on the banks of the Sabarmati',
    icon: Globe,
  },
  {
    label: 'Careers',
    href: '/about/careers',
    description: 'Open positions and how to join us',
    icon: Briefcase,
  },
  {
    label: 'Get in Touch',
    href: '/about/contact',

    description: 'Reach out to the department',
    icon: ArrowRight,
  },
];

export const NAV_LINKS: NavItem[] = [
  {
    label: 'About',
    href: '/about',
    subitems: [
      { label: 'Vision', href: '/about/vision', description: 'Department overview' },
      { label: 'Administration', href: '/about/administration', description: 'Roles and responsibilities of committees' },
      { label: 'Facilities', href: '/about/facilities', description: 'Labs, classrooms, and computing infrastructure' },
      { label: 'Visit Us', href: '/about/visit', description: 'Plan a visit to our campus on the banks of the Sabarmati' },
      { label: 'Careers', href: '/about/careers', description: 'Open positions and how to join us' },
      { label: 'Get in Touch', href: '/about/contact', description: 'Reach out to the department' },
    ],
  },
  {
    label: 'People',
    href: '/people',
    subitems: [
      { label: 'Research Scholars', href: '/people/students', description: 'Doctoral researchers in CSE and AI' },
      { label: 'Post-Docs', href: '/people/postdocs', description: 'Postdoctoral researchers and fellows' },
      { label: 'Faculty', href: '/people/faculty', description: 'Core, affiliated, visiting, and guest faculty' },
      { label: 'Staff', href: '/people/staff', description: 'Administrative and technical staff' },
      { label: 'Alumni', href: '/people/alumni', description: 'Public alumni trajectories and achievements' },
      { label: 'Visitors', href: '/people/visitors', description: 'Seminar visitors and invited speakers' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics',
    subitems: [
      { label: 'BTech', href: '/academics/btech', description: 'Undergraduate programs in CSE, AI, and ICDT' },
      { label: 'MTech', href: '/academics/mtech', description: 'Masters and dual-degree programs in CSE, AI, and ICDT' },
      { label: 'EMasters', href: '/academics/emasters', description: 'Executive masters programs in data analytics' },
      { label: 'PhD', href: '/academics/phd', description: 'Graduate programs in CSE and AI' },
      { label: 'SRIP', href: '/academics/srip', description: 'Flagship summer internship program' },
      { label: 'VSRP', href: '/academics/vsrp', description: 'Visiting students semester program' },
      { label: 'Student Openings', href: '/academics/openings', description: 'Internship, JRF and SRF positions' },
      { label: 'Courses', href: '/academics/courses', description: 'Course catalogue and schedules' },
    ],
  },
  {
    label: 'Research',
    href: '/research',
    subitems: [
      { label: 'Publications', href: '/research/publications', description: 'Recent papers and articles' },
      { label: 'Projects', href: '/research/projects', description: 'Funded research projects and collaborations' },
      { label: 'Patents', href: '/research/patents', description: 'Intellectual property and technology transfer' },
      { label: 'AI & Machine Learning', href: '/research/ai', description: 'Deep learning, NLP, computer vision' },
      { label: 'Theoretical CS', href: '/research/theory', description: 'Algorithms, complexity, graph theory' },
      { label: 'Security & Privacy', href: '/research/security', description: 'Program analysis, web security' },
      { label: 'Data Science', href: '/research/data-science', description: 'Large-scale analytics and knowledge discovery' },
      { label: 'Systems & Architecture', href: '/research/systems', description: 'Computer architecture and embedded systems' },
      { label: 'HCI & Cognitive Science', href: '/research/hci', description: 'Brain-computer interfaces and accessibility' },
    ],
  },
  {
    label: 'Updates',
    href: '/news',
    subitems: [
      { label: 'Blog', href: '/blog', description: 'Articles and perspectives' },
      { label: 'News', href: '/updates/news', description: 'Announcements and highlights' },
      { label: 'Seminars', href: '/updates/seminars', description: 'Talks and lecture series' },
      { label: 'Deadlines', href: '/updates/deadlines', description: 'Upcoming important dates' },
      { label: 'Outreach', href: '/updates/outreach', description: 'Making developments in computing accessible to all' },
      { label: 'Events', href: '/updates/events', description: 'Schools, conferences and workshops' },
    ],
  },
];

const MOBILE_BREAKPOINT = 1024;

const Navbar = ({ currentPage }: { currentPage: string }) => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = currentPage?.replace(/\/$/, '') || '';

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <Fragment>
      <header
        className={cn(
          'pointer-events-auto z-999 flex w-full items-center justify-center bg-[oklch(0.985_0.005_230)] dark:bg-[oklch(0.14_0.01_255)]',
        )}
      >
        <NavigationMenu className="h-16 max-w-full border-b after:absolute after:inset-0 after:z-998 after:block after:size-full after:bg-[oklch(0.985_0.005_230)] dark:after:bg-[oklch(0.14_0.01_255)] after:content-[''] [&>div:last-child>div]:mt-0 [&>div:last-child>div]:animate-none [&>div:last-child>div]:rounded-none [&>div:last-child>div]:border-0 [&>div:last-child>div]:!shadow-none [&>div:last-child>div]:!overflow-visible [&>div:last-child]:!overflow-visible">
          <div className="relative z-999 container grid w-full grid-cols-2 items-center justify-between gap-8 xl:grid-cols-3">
            <Logo />

            {/* Desktop nav */}
            <div className="hidden xl:flex">
              <NavigationMenuList>
                {NAV_LINKS.map((item, index) => (
                  <DesktopMenuItem
                    key={index}
                    item={item}
                    pathname={pathname}
                  />
                ))}
              </NavigationMenuList>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-1.5 justify-self-end">
              <Button
                variant="ghost"
                size="icon"
                className="size-9"
                onClick={() => setSearchOpen(true)}
                aria-label="Search (Cmd+K)"
              >
                <Search className="size-4" />
              </Button>
              <ThemeToggle />
              <div className="xl:hidden">
                <Button
                  className="size-10"
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(!open)}
                >
                  {open ? (
                    <X className="size-5" />
                  ) : (
                    <MenuIcon className="size-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </NavigationMenu>
      </header>

      {/* Mobile menu */}
      <Sheet open={open}>
        <SheetContent
          aria-describedby={undefined}
          side="top"
          className="inset-0 z-998 h-dvh w-full bg-background pt-16 [&>button]:hidden"
        >
          <div className="flex-1 overflow-y-auto">
            <div className="container py-8">
              <div className="absolute -m-px h-px w-px overflow-hidden border-0 mask-clip-border p-0 text-nowrap whitespace-nowrap">
                <SheetTitle className="text-primary">
                  Mobile Navigation
                </SheetTitle>
              </div>
              <Accordion type="multiple" className="w-full">
                {NAV_LINKS.map((item, index) => {
                  if (item.subitems) {
                    return (
                      <AccordionItem
                        key={item.label}
                        value={`nav-${index}`}
                        className="border-b-0"
                      >
                        <AccordionTrigger className="h-10 items-center text-base font-normal hover:no-underline">
                          {item.label}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-1 pb-2 pl-2">
                          {item.subitems.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className={cn(
                                'text-muted-foreground hover:text-foreground rounded-md px-3 py-2 text-sm transition-colors',
                                pathname === sub.href && 'text-foreground font-medium',
                              )}
                              onClick={() => setOpen(false)}
                            >
                              {sub.label}
                            </a>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  }
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex h-10 items-center text-base"
                    >
                      {item.label}
                    </a>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </Fragment>
  );
};

function DesktopMenuItem({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  if (item.label === 'People') {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={cn(
            'h-fit bg-transparent text-[0.95rem] font-normal text-foreground/80',
            pathname.startsWith(item.href) && 'text-foreground font-medium',
          )}
        >
          {item.label}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="hidden !overflow-visible !rounded-xl !border-0 !p-0 xl:block">
          <div className="relative w-dvw animate-[fade-in-slide-down_0.35s_cubic-bezier(0.33,1,0.68,1)_forwards] overflow-visible bg-[oklch(0.985_0.005_230)] px-8 pt-6 pb-4 text-[0.9375rem] dark:bg-[oklch(0.14_0.01_255)]">
            <div className="container">
              <PeopleMegaMenu />
            </div>
            <MegaMenuBorder />
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  if (item.label === 'Academics') {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={cn(
            'h-fit bg-transparent text-[0.95rem] font-normal text-foreground/80',
            pathname.startsWith(item.href) && 'text-foreground font-medium',
          )}
        >
          {item.label}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="hidden !overflow-visible !rounded-xl !border-0 !p-0 xl:block">
          <div className="relative w-dvw animate-[fade-in-slide-down_0.35s_cubic-bezier(0.33,1,0.68,1)_forwards] overflow-visible bg-[oklch(0.985_0.005_230)] px-8 pt-6 pb-4 text-[0.9375rem] dark:bg-[oklch(0.14_0.01_255)]">
            <div className="container">
              <div className="grid grid-cols-[1fr_1fr_auto] gap-8">
                {/* Left column - Programs */}
                <div className="flex flex-col gap-6">
                  {ACADEMICS_PROGRAMS.map((prog) => (
                    <a
                      key={prog.label}
                      href={prog.href}
                      className="group flex gap-3 transition-opacity duration-200"
                    >
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-md border shadow-sm">
                        <prog.icon className="size-3.5" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="group-hover:text-foreground flex items-center gap-2 text-base font-medium text-foreground/80">
                          {prog.label}
                          {prog.badge && (
                            <span className="bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 text-[10px] font-semibold leading-none">
                              {prog.badge}
                            </span>
                          )}
                        </span>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {prog.description}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Middle column - Opportunities */}
                <div className="flex flex-col gap-6">
                  {ACADEMICS_OPPORTUNITIES.map((opp) => (
                    <a
                      key={opp.label}
                      href={opp.href}
                      className="group flex gap-3 transition-opacity duration-200"
                    >
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-md border shadow-sm">
                        <opp.icon className="size-3.5" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="group-hover:text-foreground text-base font-medium text-foreground/80">
                          {opp.label}
                        </span>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {opp.description}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Right column - Featured image blocks */}
                <div className="flex w-56 flex-col gap-3">
                  {ACADEMICS_FEATURED.map((feat) => (
                    <a
                      key={feat.label}
                      href={feat.href}
                      className="group relative overflow-hidden rounded-lg"
                    >
                      <div className="bg-muted aspect-[5/2] w-full overflow-hidden">
                        <img
                          src={feat.image}
                          alt={feat.label}
                          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/30 to-black/10 p-3">
                        <span className="text-sm font-semibold text-white">
                          {feat.label}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <MegaMenuBorder />
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  if (item.label === 'Research') {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={cn(
            'h-fit bg-transparent text-[0.95rem] font-normal text-foreground/80',
            pathname.startsWith(item.href) && 'text-foreground font-medium',
          )}
        >
          {item.label}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="hidden !overflow-visible !rounded-xl !border-0 !p-0 xl:block">
          <div className="relative w-dvw animate-[fade-in-slide-down_0.35s_cubic-bezier(0.33,1,0.68,1)_forwards] overflow-visible bg-[oklch(0.985_0.005_230)] px-8 pt-6 pb-4 text-[0.9375rem] dark:bg-[oklch(0.14_0.01_255)]">
            <div className="container">
              {/* Featured buttons */}
              <div className="mb-6 grid grid-cols-3 gap-4">
                {RESEARCH_FEATURED.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="bg-muted hover:bg-muted/70 group flex items-center gap-4 rounded-xl px-6 py-5 transition-colors"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="text-base font-semibold">{item.label}</span>
                      <span className="text-muted-foreground text-sm leading-snug">
                        {item.description}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              <Separator />
              {/* Research themes grid - 3 cols, 2 rows */}
              <div className="mt-6 grid grid-cols-3 gap-x-12 gap-y-6">
                {RESEARCH_THEMES.map((theme) => (
                  <a
                    key={theme.label}
                    href={theme.href}
                    className="group flex gap-3 transition-opacity duration-200"
                  >
                    <div
                      className="flex size-8 shrink-0 items-center justify-center rounded-lg border"
                      style={{
                        backgroundColor:
                          RESEARCH_AREAS[theme.slug as ResearchAreaSlug].accent
                            .soft,
                        borderColor:
                          RESEARCH_AREAS[theme.slug as ResearchAreaSlug].accent
                            .border,
                        color:
                          RESEARCH_AREAS[theme.slug as ResearchAreaSlug].accent
                            .foreground,
                      }}
                    >
                      <theme.icon className="size-4" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="group-hover:text-foreground text-base font-medium text-foreground/80">
                        {theme.label}
                      </span>
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {theme.description}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <MegaMenuBorder />
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  if (item.label === 'Updates') {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={cn(
            'h-fit bg-transparent text-[0.95rem] font-normal text-foreground/80',
            pathname.startsWith(item.href) && 'text-foreground font-medium',
          )}
        >
          {item.label}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="hidden !overflow-visible !rounded-xl !border-0 !p-0 xl:block">
          <div className="relative w-dvw animate-[fade-in-slide-down_0.35s_cubic-bezier(0.33,1,0.68,1)_forwards] overflow-visible bg-[oklch(0.985_0.005_230)] px-8 pt-6 pb-4 text-[0.9375rem] dark:bg-[oklch(0.14_0.01_255)]">
            <div className="container">
              <div className="grid grid-cols-[1fr_auto] gap-8">
                {/* Left column */}
                <div>
                  {/* News and Updates links */}
                  <p className="text-muted-foreground mb-4 text-[0.7rem] font-medium uppercase tracking-wider">
                    News and Updates
                  </p>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-5">
                    {UPDATES_LINKS.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="group flex gap-3 transition-opacity duration-200"
                      >
                        <div className="flex size-6 shrink-0 items-center justify-center rounded-md border shadow-sm">
                          <link.icon className="size-3.5" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="group-hover:text-foreground text-base font-medium text-foreground/80">
                            {link.label}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {link.description}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Seminars - latest highlights */}
                  <div className="mt-6 border-t pt-5">
                    <div className="grid grid-cols-2 gap-x-12">
                      <div>
                        <p className="text-muted-foreground mb-3 text-[0.7rem] font-medium uppercase tracking-wider">
                          Latest Seminars
                        </p>
                        <div className="space-y-3">
                          {LATEST_SEMINARS.map((s) => (
                            <div key={s.title}>
                              <a
                                href={s.href}
                                className="hover:text-primary text-base font-medium leading-snug transition-colors"
                              >
                                {s.title}
                              </a>
                              <p className="text-muted-foreground text-sm">
                                {s.speaker} &middot; {s.date}
                                {s.time ? `, ${s.time}` : ''}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-3 text-[0.7rem] font-medium uppercase tracking-wider">
                          CS Theory Seminars
                        </p>
                        <div className="space-y-3">
                          {THEORY_SEMINARS.map((s) => (
                            <div key={s.title}>
                              <a
                                href={s.href}
                                className="hover:text-primary text-base font-medium leading-snug transition-colors"
                              >
                                {s.title}
                              </a>
                              <p className="text-muted-foreground text-sm">
                                {s.speaker} &middot; {s.date}
                                {s.time ? `, ${s.time}` : ''}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <a
                      href="/updates/seminars"
                      className="text-primary mt-4 inline-flex items-center gap-1 text-sm font-medium"
                    >
                      All seminars <ArrowRight className="size-3" />
                    </a>
                  </div>
                </div>

                {/* Right column: featured article + social */}
                <div className="w-72 border-l pl-8">
                  <p className="text-muted-foreground mb-3 text-[0.7rem] font-medium uppercase tracking-wider">
                    Featured Article
                  </p>
                  <a href={FEATURED_ARTICLE.href} className="group block">
                    <p className="group-hover:text-foreground text-base font-semibold leading-snug text-foreground/80">
                      {FEATURED_ARTICLE.title}
                    </p>
                    <p className="text-muted-foreground mt-0.5 text-sm">
                      {FEATURED_ARTICLE.description}
                    </p>
                  </a>

                  {/* Social icons */}
                  <div className="mt-5 flex items-center gap-3 border-t pt-5">
                    {SOCIAL_LINKS_NAV.map((social) => (
                      <a
                        key={social.title}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-muted hover:bg-muted/70 flex size-9 items-center justify-center rounded-full transition-colors"
                      >
                        <img
                          src={social.icon}
                          alt={social.title}
                          className="size-4 dark:invert"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <MegaMenuBorder />
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  if (item.label === 'About') {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={cn(
            'h-fit bg-transparent text-[0.95rem] font-normal text-foreground/80',
            pathname.startsWith(item.href) && 'text-foreground font-medium',
          )}
        >
          {item.label}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="hidden !overflow-visible !rounded-xl !border-0 !p-0 xl:block">
          <div className="relative w-dvw animate-[fade-in-slide-down_0.35s_cubic-bezier(0.33,1,0.68,1)_forwards] overflow-visible bg-[oklch(0.985_0.005_230)] px-8 pt-6 pb-4 text-[0.9375rem] dark:bg-[oklch(0.14_0.01_255)]">
            <div className="container">
              <div className="grid grid-cols-[2fr_3fr] gap-10">
                {/* Left: links */}
                <div className="flex flex-col gap-5">
                  {ABOUT_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="group flex gap-3 transition-opacity duration-200"
                    >
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-md border shadow-sm">
                        <link.icon className="size-3.5" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="group-hover:text-foreground text-base font-medium text-foreground/80">
                          {link.label}
                        </span>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {link.description}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Right: prominent image */}
                <a
                  href="/about/vision"
                  className="group relative overflow-hidden rounded-xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=700&h=400&fit=crop"
                    alt="Vision"
                    className="aspect-[7/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <p className="text-2xl font-bold text-white">
                      Vision
                    </p>
                    <p className="mt-1 max-w-sm text-sm leading-relaxed text-white/80">
                      Building a world-class department that shapes the future of computing through research excellence and inclusive education.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <MegaMenuBorder />
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  if (item.subitems) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={cn(
            'h-fit bg-transparent text-[0.95rem] font-normal text-foreground/80',
            pathname.startsWith(item.href) && 'text-foreground font-medium',
          )}
        >
          {item.label}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="hidden !overflow-visible !rounded-xl !border-0 !p-0 xl:block">
          <div className="relative w-dvw animate-[fade-in-slide-down_0.35s_cubic-bezier(0.33,1,0.68,1)_forwards] overflow-visible bg-[oklch(0.985_0.005_230)] px-8 pt-6 pb-4 text-[0.9375rem] dark:bg-[oklch(0.14_0.01_255)]">
            <div className="container">
              <div
                className={cn(
                  'grid gap-x-12 gap-y-6',
                  item.subitems.length <= 3
                    ? 'grid-cols-3'
                    : 'grid-cols-4',
                )}
              >
                {item.subitems.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    className="group flex flex-col gap-1 transition-opacity duration-200"
                  >
                    <span className="group-hover:text-foreground text-base font-medium text-foreground/80">
                      {sub.label}
                    </span>
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {sub.description}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <MegaMenuBorder />
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  // Standalone link
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        href={item.href}
        className={cn(
          navigationMenuTriggerStyle(),
          'h-fit bg-transparent text-[0.95rem] font-normal text-foreground/80',
          pathname === item.href && 'text-foreground font-medium',
        )}
      >
        {item.label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

// Morse code bottom border for "CSE IITGN"
// -.-. ... . / .. .. - --. -.
// Repeating pattern as an SVG stroke-dasharray across the full width
function MegaMenuBorder() {
  // Each unit = 4px. Dot=4, Dash=12, intra-char gap=4, char gap=12, word gap=28
  // C: 12,4,4,4,12,4,4 = dash dot dash dot
  // gap between chars: 12
  // S: 4,4,4,4,4 = dot dot dot
  // gap: 12
  // E: 4 = dot
  // word gap: 28
  // I: 4,4,4 = dot dot
  // gap: 12
  // I: 4,4,4 = dot dot
  // gap: 12
  // T: 12 = dash
  // gap: 12
  // G: 12,4,12,4,4 = dash dash dot
  // gap: 12
  // N: 12,4,4 = dash dot
  // Then padding to repeat
  const dasharray =
    '12 4 4 4 12 4 4 12 4 4 4 4 4 12 4 28 4 4 4 12 4 4 4 12 12 12 12 4 12 4 4 12 12 4 4 60';

  return (
    <div className="absolute right-0 -bottom-[8px] left-0 h-[14px]">
      <div className="absolute inset-x-0 -top-[8px] h-[8px] bg-[oklch(0.985_0.005_230)] dark:bg-[oklch(0.14_0.01_255)]" />
      <svg
        width="100%"
        height="14"
        className="block"
        preserveAspectRatio="none"
        viewBox="0 0 1200 14"
      >
        {/* Fill above the wave with the mega menu bg */}
        <path
          d="M0,0 L0,7 C40,-1 80,15 120,7 C160,-1 200,15 240,7 C280,-1 320,15 360,7 C400,-1 440,15 480,7 C520,-1 560,15 600,7 C640,-1 680,15 720,7 C760,-1 800,15 840,7 C880,-1 920,15 960,7 C1000,-1 1040,15 1080,7 C1120,-1 1160,15 1200,7 L1200,0 Z"
          className="fill-[oklch(0.985_0.005_230)] dark:fill-[oklch(0.14_0.01_255)]"
        />
        {/* Soft wave background */}
        <path
          d="M0,7 C40,-1 80,15 120,7 C160,-1 200,15 240,7 C280,-1 320,15 360,7 C400,-1 440,15 480,7 C520,-1 560,15 600,7 C640,-1 680,15 720,7 C760,-1 800,15 840,7 C880,-1 920,15 960,7 C1000,-1 1040,15 1080,7 C1120,-1 1160,15 1200,7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-border"
        />
        {/* Morse dashes on the wave */}
        <path
          d="M0,7 C40,-1 80,15 120,7 C160,-1 200,15 240,7 C280,-1 320,15 360,7 C400,-1 440,15 480,7 C520,-1 560,15 600,7 C640,-1 680,15 720,7 C760,-1 800,15 840,7 C880,-1 920,15 960,7 C1000,-1 1040,15 1080,7 C1120,-1 1160,15 1200,7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={dasharray}
          strokeLinecap="round"
          className="text-primary/50"
        />
      </svg>
    </div>
  );
}

const PEOPLE_LINKS = [
  {
    label: 'Research Scholars',
    href: '/people/students',
    description: 'Doctoral researchers in CSE and AI',
    icon: GraduationCap,
  },
  {
    label: 'Post-Docs',
    href: '/people/postdocs',
    description: 'Postdoctoral researchers and fellows',
    icon: FlaskConical,
  },
  {
    label: 'Faculty',
    href: '/people/faculty',
    description: 'Core, affiliated, visiting, and guest faculty',
    icon: BookOpen,
  },
  {
    label: 'Alumni',
    href: '/people/alumni',
    description: 'Public alumni trajectories and achievements',
    icon: Award,
  },
  {
    label: 'Visitors',
    href: '/people/visitors',
    description: 'Seminar visitors and invited speakers',
    icon: Calendar,
  },
  {
    label: 'Staff',
    href: '/people/staff',
    description: 'Administrative and technical staff',
    icon: Users,
  },
];

const PEOPLE_MENU_IMAGES = [
  {
    src: '/images/people/mega-menu-group.jpeg',
    alt: 'CSE students and faculty at IIT Gandhinagar',
    objectPosition: 'center',
  },
  {
    src: '/images/people/zeel-phd-jrfs-mtech.jpeg',
    alt: 'Sustainability Lab group with students and researchers at IIT Gandhinagar',
    objectPosition: 'center 55%',
  },
];

function PeopleMegaMenu() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((i) => (i + 1) % PEOPLE_MENU_IMAGES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-[2fr_3fr] gap-10">
      {/* Left: links */}
      <div className="flex flex-col gap-5">
        {PEOPLE_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group flex gap-3 transition-opacity duration-200"
          >
            <div className="flex size-7 shrink-0 items-center justify-center rounded-md border shadow-sm">
              <link.icon className="size-3.5" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="group-hover:text-foreground text-base font-medium text-foreground/80">
                {link.label}
              </span>
              <span className="text-muted-foreground text-sm leading-relaxed">
                {link.description}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Right: featured image slider */}
      <div className="relative overflow-hidden rounded-xl">
        {PEOPLE_MENU_IMAGES.map((image, i) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={cn(
              'absolute inset-0 size-full object-cover transition-opacity duration-700',
              i === currentImage ? 'opacity-100' : 'opacity-0',
            )}
            style={{ objectPosition: image.objectPosition }}
          />
        ))}
        <img
          src={PEOPLE_MENU_IMAGES[0].src}
          alt="CSE students and faculty at IIT Gandhinagar"
          className="invisible aspect-[16/9] w-full"
        />
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {PEOPLE_MENU_IMAGES.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setCurrentImage(i)}
              aria-label={`Show people image ${i + 1}`}
              className={cn(
                'size-1.5 rounded-full bg-white/55 transition-all',
                i === currentImage && 'w-4 bg-white',
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
