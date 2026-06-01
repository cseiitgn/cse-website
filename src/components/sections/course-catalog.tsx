"use client";

import { useEffect, useMemo, useState } from "react";

import {
  ArrowDownZA,
  ArrowUpAZ,
  BookOpen,
  Clock,
  ExternalLink,
  FileText,
  Github,
  Grid2X2,
  Info,
  List,
  CirclePlay,
  Search,
  Users,
  X,
  Youtube,
} from "lucide-react";

import coursesData from "@/data/courses.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const ALL = "all";
const EXCLUDED_COURSE_IDS = new Set([
  "cs-302-theory-of-computation",
  "cs-602-theory-of-computation",
]);

type Course = (typeof coursesData.courses)[number];
type SortDirection = "asc" | "desc";
type ViewMode = "list" | "cards";

type FeaturedResource = {
  courseId: string;
  title: string;
  eyebrow: string;
  meta: string;
  url: string;
  thumbnail?: string;
  type: "playlist" | "repository" | "notes";
  description: string;
};

const FEATURED_RESOURCES: FeaturedResource[] = [
  {
    courseId: "es-335-machine-learning",
    title: "Machine Learning @ IIT Gandhinagar 2024",
    eyebrow: "ES 335",
    meta: "33 lessons",
    url: "https://www.youtube.com/watch?v=XuDrvFmvk2U&list=PLftoLyLEwECDqanAL7LkZNnZG9VdNCiJF",
    thumbnail: "/images/course-resources/machine-learning.png",
    type: "playlist",
    description: "Recorded lectures by Nipun Batra.",
  },
  {
    courseId: "es-661-probabilistic-machine-learning",
    title: "Probabilistic Machine Learning",
    eyebrow: "ES 661",
    meta: "24 lessons",
    url: "https://www.youtube.com/watch?v=UCYaVS9_jGU&list=PLftoLyLEwECBEJyfRBJoSBd0UaTjEcs3I",
    thumbnail: "/images/course-resources/probabilistic-machine-learning.png",
    type: "playlist",
    description: "Recorded lectures by Nipun Batra.",
  },
  {
    courseId: "cs-330-operating-systems",
    title: "Operating Systems Fall 2018 IITGN",
    eyebrow: "CS 330",
    meta: "31 lessons",
    url: "https://www.youtube.com/watch?v=whp34MZbG6o&list=PLftoLyLEwECB3NsNfQ1oxtt8IoBNRWcO5",
    thumbnail: "/images/course-resources/operating-systems.png",
    type: "playlist",
    description: "Recorded lectures by Nipun Batra.",
  },
  {
    courseId: "cs-201-theory-of-computing",
    title: "balu/toc",
    eyebrow: "CS 201",
    meta: "GitHub repository",
    url: "https://github.com/balu/toc",
    thumbnail: "/images/course-resources/theory-of-computing.png",
    type: "repository",
    description:
      "Repository of Theory of Computation course material and references by Balagopal Komarath.",
  },
  {
    courseId: "cs-614-advanced-algorithms",
    title: "Parameterized Algorithms",
    eyebrow: "CS 614",
    meta: "NPTEL playlist",
    url: "https://www.youtube.com/watch?v=9x9pAn5DkZI&list=PLyqSpQzTE6M_0KLR2_FVBN4Rnvq_PlcrA",
    thumbnail: "/images/course-resources/parameterized-algorithms.png",
    type: "playlist",
    description:
      "NPTEL course on Parameterized Algorithms by Neeldhara Misra and Saket Saurabh, closely aligned with the Advanced Algorithms course.",
  },
  {
    courseId:
      "cs-392-i-special-topics-in-computer-science-introduction-to-competitive-programming",
    title: "Introduction to Competitive Programming",
    eyebrow: "CS 392-I",
    meta: "NPTEL playlist",
    url: "https://www.youtube.com/playlist?list=PLyqSpQzTE6M9p9pKxFGpskf4voY45T2DZ",
    thumbnail: "/images/course-resources/competitive-programming.png",
    type: "playlist",
    description:
      "NPTEL course on Competitive Programming by Neeldhara Misra and Arjun Arul, closely aligned with the Competitive Programming elective.",
  },
  {
    courseId: "cs-328-introduction-to-data-science",
    title: "Scalable Data Science",
    eyebrow: "CS 328",
    meta: "NPTEL playlist",
    url: "https://www.youtube.com/playlist?list=PLbRMhDVUMngekIHyLt8b_3jQR7C0KUCul",
    thumbnail: "/images/course-resources/scalable-data-science.png",
    type: "playlist",
    description:
      "A NPTEL course by Anirban Dasgupta and Souransghu Bhattacharya, closely aligned with the Introduction to Data Science Course.",
  },
  {
    courseId: "em-614-advanced-probability-and-statistics",
    title: "Probability and Random Processes Lecture Notes",
    eyebrow: "EM 614",
    meta: "Lecture notes",
    url: "https://shanmuga.people.iitgn.ac.in/Data/ProbabilityRPLectureNotes_Shanmuga.pdf",
    thumbnail: "/images/course-resources/probability-lecture-notes.png",
    type: "notes",
    description: "Lecture notes by Shanmuganathan Raman.",
  },
];

function getFeaturedResourcesForCourse(courseId: string) {
  return FEATURED_RESOURCES.filter((resource) => resource.courseId === courseId);
}

function ResourceIcon({
  type,
  className,
}: {
  type: FeaturedResource["type"];
  className?: string;
}) {
  if (type === "repository") return <Github className={className} />;
  if (type === "notes") return <FileText className={className} />;
  return <CirclePlay className={className} />;
}

function ResourceSourceIcon({
  type,
  className,
}: {
  type: FeaturedResource["type"];
  className?: string;
}) {
  if (type === "repository") return <Github className={className} />;
  if (type === "notes") return <FileText className={className} />;
  return <Youtube className={className} />;
}

function resourceActionLabel(type: FeaturedResource["type"]) {
  if (type === "notes") return "Open notes";
  return type === "repository" ? "Open repository" : "Watch playlist";
}

function formatCredits(course: Course) {
  if (!course.credits.length) return "Credits not specified";
  return `${course.creditLabel} ${
    course.credits.length === 1 && course.credits[0] === 1
      ? "credit"
      : "credits"
  }`;
}

function courseSearchText(course: Course) {
  return [
    course.code,
    course.title,
    course.creditLabel,
    course.discipline,
    course.program,
    course.courseType,
    course.level,
    course.semester,
    course.instructors.join(" "),
    course.prerequisites.join(" "),
    course.content,
    course.textbooks,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function truncateText(value: string | null, maxLength: number) {
  if (!value) return null;
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength).trimEnd()}...`;
}

function optionLabel(value: string, count?: number) {
  return count === undefined ? value : `${value} (${count})`;
}

function programTone(program: string) {
  if (program === "Data Science for Decision Making") {
    return {
      card: "border-l-sky-500/45 bg-sky-500/[0.025]",
      badge: "border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300",
    };
  }

  if (program === "Integrated Circuit Design and Technology") {
    return {
      card: "border-l-emerald-500/45 bg-emerald-500/[0.025]",
      badge:
        "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    };
  }

  return {
    card: "border-l-primary/45 bg-primary/[0.025]",
    badge: "border-primary/20 bg-primary/10 text-primary",
  };
}

function countBy(courses: Course[], key: keyof Course) {
  const counts = new Map<string, number>();

  for (const course of courses) {
    const value = course[key];

    if (typeof value === "string" && value) {
      counts.set(value, (counts.get(value) ?? 0) + 1);
    }
  }

  return counts;
}

function CourseBadges({ course }: { course: Course }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary">{formatCredits(course)}</Badge>
      <Badge variant="outline">{course.level}</Badge>
      <Badge variant="outline">{course.courseType}</Badge>
      {course.semester && <Badge variant="outline">{course.semester}</Badge>}
    </div>
  );
}

function CourseSummary({
  course,
  view,
  onOpen,
}: {
  course: Course;
  view: ViewMode;
  onOpen: (course: Course) => void;
}) {
  const contentPreview =
    truncateText(course.content, view === "cards" ? 180 : 260) ??
    "Detailed syllabus text is not available in the current catalogue extract.";
  const instructors = course.instructors.length
    ? course.instructors.join(", ")
    : "To be announced";

  return (
    <Card
      className={cn(
        "hover:border-primary/40 gap-0 rounded-lg border-l-4 p-5 transition-colors",
        programTone(course.program).card,
        view === "cards" && "h-full",
      )}
    >
      <div
        className={cn(
          "flex h-full gap-4",
          view === "cards"
            ? "flex-col"
            : "flex-col md:flex-row md:items-start md:justify-between",
        )}
      >
        <div className="min-w-0 flex-1 space-y-3">
          <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-xs">
            <span className="text-foreground inline-flex items-center gap-1 font-medium">
              <BookOpen className="size-3.5" />
              {course.code}
            </span>
            <span
              className={cn(
                "inline-flex max-w-full rounded-full border px-2 py-0.5 font-medium",
                programTone(course.program).badge,
              )}
            >
              <span className="truncate">{course.program}</span>
            </span>
            {course.ltpLabel && (
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" />
                L-T-P {course.ltpLabel}
              </span>
            )}
          </div>

          <h2 className="text-lg leading-snug font-semibold">{course.title}</h2>

          <CourseBadges course={course} />

          <p className="text-muted-foreground text-sm leading-relaxed">
            {contentPreview}
          </p>

          <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-xs">
            <Users className="size-3.5" />
            <span className="min-w-0">{instructors}</span>
          </div>
        </div>

        <div className={cn(view === "list" && "shrink-0")}>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-full md:w-auto"
            onClick={() => onOpen(course)}
          >
            <Info className="size-4" />
            Details
          </Button>
        </div>
      </div>
    </Card>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string | null | undefined;
}) {
  return (
    <>
      <dt className="text-muted-foreground">{label}</dt>
      <dd>{value || "Not specified"}</dd>
    </>
  );
}

function CourseDetailModal({
  course,
  onClose,
}: {
  course: Course | undefined;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!course) return;

    const previousOverflow = document.body.style.overflow;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [course, onClose]);

  if (!course) return null;

  const resources = getFeaturedResourcesForCourse(course.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="bg-background/80 absolute inset-0 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-detail-title"
        className="bg-background relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg border shadow-xl"
      >
        <div className="border-b p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-primary text-sm font-medium">{course.code}</p>
              <h2
                id="course-detail-title"
                className="mt-1 text-2xl leading-tight font-semibold"
              >
                {course.title}
              </h2>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Close course details"
              onClick={onClose}
            >
              <X className="size-5" />
            </Button>
          </div>
          <div className="mt-4">
            <Badge
              variant="outline"
              className={cn("mb-3", programTone(course.program).badge)}
            >
              {course.program}
            </Badge>
            <CourseBadges course={course} />
          </div>
        </div>

        <div className="overflow-y-auto p-5">
          {resources.length > 0 && (
            <section className="bg-primary/5 mb-6 rounded-lg border p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <div className="text-primary mb-1 flex items-center gap-2 text-sm font-semibold">
                    <ResourceSourceIcon
                      type={resources[0]?.type ?? "playlist"}
                      className="size-4"
                    />
                    Featured course resource
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Public resources are available for this course.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {resources.map((resource) => (
                    <Button key={resource.url} asChild size="sm">
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ResourceIcon type={resource.type} className="size-4" />
                        {resourceActionLabel(resource.type)}
                        <ExternalLink className="size-3.5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </section>
          )}

          <dl className="grid gap-x-6 gap-y-3 text-sm md:grid-cols-[10rem_1fr_10rem_1fr]">
            <DetailRow label="Program" value={course.program} />
            <DetailRow label="Discipline" value={course.discipline} />
            <DetailRow label="Credits" value={formatCredits(course)} />
            <DetailRow
              label="L-T-P"
              value={
                course.ltpLabel
                  ? `${course.ltpLabel} (lecture-theory-practical)`
                  : null
              }
            />
            <DetailRow label="Semester" value={course.semester} />
            <DetailRow label="Category" value={course.courseType} />
            <DetailRow label="Level" value={course.level} />
            <DetailRow
              label="Potential instructors"
              value={
                course.instructors.length
                  ? course.instructors.join(", ")
                  : undefined
              }
            />
            <DetailRow
              label="Prerequisites"
              value={
                course.prerequisites.length
                  ? course.prerequisites.join(", ")
                  : undefined
              }
            />
          </dl>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <section>
              <div className="mb-2 flex items-center gap-2 font-semibold">
                <FileText className="size-4" />
                Course Content
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {course.content ||
                  "Detailed syllabus text is not available in the current catalogue extract."}
              </p>
            </section>

            <section>
              <div className="mb-2 flex items-center gap-2 font-semibold">
                <BookOpen className="size-4" />
                Textbooks and References
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {course.textbooks ||
                  "Textbook and reference details are not available in the current catalogue extract."}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedResources({
  courses,
  onOpenCourse,
}: {
  courses: Course[];
  onOpenCourse: (course: Course) => void;
}) {
  const coursesById = new Map(courses.map((course) => [course.id, course]));

  return (
    <section className="border-t bg-background py-8">
      <div className="container">
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-primary mb-2 flex items-center gap-2 text-sm font-semibold">
              <BookOpen className="size-4" />
              Featured resources
            </div>
            <h2 className="text-2xl font-semibold">Featured course resources</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl text-sm">
            Selected public resources are linked to their corresponding course
            catalogue entries.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {FEATURED_RESOURCES.map((resource) => {
            const course = coursesById.get(resource.courseId);

            if (!course) return null;

            return (
              <Card
                key={resource.url}
                className="group gap-0 overflow-hidden rounded-lg py-0 transition-colors hover:border-primary/40"
              >
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block aspect-video overflow-hidden bg-muted"
                  aria-label={`Open ${resource.title}`}
                >
                  {resource.thumbnail ? (
                    <img
                      src={resource.thumbnail}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="from-primary/20 to-muted flex h-full w-full items-center justify-center bg-gradient-to-br">
                      <ResourceSourceIcon
                        type={resource.type}
                        className="text-primary size-14"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                  <div className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-md bg-black/75 px-2 py-1 text-xs font-medium text-white">
                    <ResourceIcon type={resource.type} className="size-3.5" />
                    {resource.meta}
                  </div>
                </a>

                <div className="flex flex-1 flex-col gap-4 p-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{resource.eyebrow}</Badge>
                      <span className="text-muted-foreground text-xs">
                        {course.title}
                      </span>
                    </div>
                    <h3 className="text-base leading-snug font-semibold">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {resource.description}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    <Button asChild size="sm">
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ResourceIcon type={resource.type} className="size-4" />
                        {resource.type === "playlist" ? "Watch" : "Open"}
                      </a>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => onOpenCourse(course)}
                    >
                      <Info className="size-4" />
                      Course details
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function CourseCatalog() {
  const courses = useMemo(
    () =>
      coursesData.courses.filter(
        (course) => !EXCLUDED_COURSE_IDS.has(course.id),
      ),
    [],
  );
  const [query, setQuery] = useState("");
  const [selectedProgram, setSelectedProgram] = useState(ALL);
  const [selectedLevel, setSelectedLevel] = useState(ALL);
  const [selectedSemester, setSelectedSemester] = useState(ALL);
  const [selectedCredit, setSelectedCredit] = useState(ALL);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [view, setView] = useState<ViewMode>("list");
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const searchIndex = useMemo(
    () =>
      new Map(courses.map((course) => [course.id, courseSearchText(course)])),
    [courses],
  );
  const programCounts = useMemo(() => countBy(courses, "program"), [courses]);
  const levelCounts = useMemo(() => countBy(courses, "level"), [courses]);
  const semesterCounts = useMemo(() => countBy(courses, "semester"), [courses]);
  const selectedCourse = useMemo(
    () => courses.find((course) => course.id === selectedCourseId),
    [courses, selectedCourseId],
  );

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return courses.filter((course) => {
      if (
        normalizedQuery &&
        !searchIndex.get(course.id)?.includes(normalizedQuery)
      ) {
        return false;
      }

      if (selectedProgram !== ALL && course.program !== selectedProgram) {
        return false;
      }

      if (selectedLevel !== ALL && course.level !== selectedLevel) {
        return false;
      }

      if (selectedSemester !== ALL && course.semester !== selectedSemester) {
        return false;
      }

      if (
        selectedCredit !== ALL &&
        !course.credits.some((credit) => String(credit) === selectedCredit)
      ) {
        return false;
      }

      return true;
    });
  }, [
    courses,
    query,
    searchIndex,
    selectedCredit,
    selectedLevel,
    selectedProgram,
    selectedSemester,
  ]);

  const sortedCourses = useMemo(() => {
    return [...filteredCourses].sort((a, b) => {
      const titleOrder = a.title.localeCompare(b.title, "en", {
        sensitivity: "base",
      });
      const codeOrder = a.code.localeCompare(b.code, "en", {
        numeric: true,
        sensitivity: "base",
      });
      const order = titleOrder || codeOrder;

      return sortDirection === "asc" ? order : -order;
    });
  }, [filteredCourses, sortDirection]);

  const filtersActive =
    query ||
    selectedProgram !== ALL ||
    selectedLevel !== ALL ||
    selectedSemester !== ALL ||
    selectedCredit !== ALL;

  function clearFilters() {
    setQuery("");
    setSelectedProgram(ALL);
    setSelectedLevel(ALL);
    setSelectedSemester(ALL);
    setSelectedCredit(ALL);
  }

  const SortIcon = sortDirection === "asc" ? ArrowUpAZ : ArrowDownZA;

  return (
    <div>
      <section className="from-primary/5 bg-gradient-to-b to-transparent py-14 md:py-18">
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-muted-foreground mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
              <BookOpen className="size-3.5" />
              {coursesData.metadata.sourceLabel}
            </div>
            <h1 className="text-3xl md:text-4xl">Courses</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Browse the CSE course catalogue by course code, title, level,
              program, credit count, and semester format.
            </p>
          </div>

        </div>
      </section>

      <FeaturedResources
        courses={courses}
        onOpenCourse={(course) => setSelectedCourseId(course.id)}
      />

      <section className="bg-muted/20 border-y">
        <div className="container py-5">
          <div className="grid gap-3 lg:grid-cols-[minmax(16rem,1fr)_13rem_10rem_11rem_8rem_auto]">
            <div className="relative">
              <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search code, title, instructor, content"
                className="pl-9"
              />
            </div>

            <Select value={selectedProgram} onValueChange={setSelectedProgram}>
              <SelectTrigger className="w-full" aria-label="Filter by program">
                <SelectValue placeholder="Program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All Programs</SelectItem>
                {coursesData.metadata.filters.programs.map((program) => (
                  <SelectItem key={program} value={program}>
                    {optionLabel(program, programCounts.get(program))}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full" aria-label="Filter by level">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All Levels</SelectItem>
                {coursesData.metadata.filters.levels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {optionLabel(level, levelCounts.get(level))}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedSemester}
              onValueChange={setSelectedSemester}
            >
              <SelectTrigger className="w-full" aria-label="Filter by semester">
                <SelectValue placeholder="Semester" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All Semesters</SelectItem>
                {coursesData.metadata.filters.semesters.map((semester) => (
                  <SelectItem key={semester} value={semester}>
                    {optionLabel(semester, semesterCounts.get(semester))}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCredit} onValueChange={setSelectedCredit}>
              <SelectTrigger className="w-full" aria-label="Filter by credits">
                <SelectValue placeholder="Credits" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All Credits</SelectItem>
                {coursesData.metadata.filters.credits.map((credit) => (
                  <SelectItem key={credit} value={String(credit)}>
                    {credit} credits
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              type="button"
              variant="outline"
              className="w-full lg:w-auto"
              onClick={clearFilters}
              disabled={!filtersActive}
            >
              <X className="size-4" />
              Clear
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-muted-foreground text-sm">
              Showing{" "}
              <span className="text-foreground font-medium">
                {filteredCourses.length}
              </span>{" "}
              of {courses.length} catalogue entries
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                aria-label={`Sort by name ${
                  sortDirection === "asc" ? "descending" : "ascending"
                }`}
                onClick={() =>
                  setSortDirection((current) =>
                    current === "asc" ? "desc" : "asc",
                  )
                }
              >
                <SortIcon className="size-4" />
                {sortDirection === "asc" ? "Name A-Z" : "Name Z-A"}
              </Button>

              <div className="bg-background inline-flex rounded-md border p-1">
                <Button
                  type="button"
                  variant={view === "list" ? "default" : "ghost"}
                  size="sm"
                  aria-pressed={view === "list"}
                  onClick={() => setView("list")}
                >
                  <List className="size-4" />
                  List
                </Button>
                <Button
                  type="button"
                  variant={view === "cards" ? "default" : "ghost"}
                  size="sm"
                  aria-pressed={view === "cards"}
                  onClick={() => setView("cards")}
                >
                  <Grid2X2 className="size-4" />
                  Cards
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div
            className={cn(
              view === "cards"
                ? "grid gap-4 md:grid-cols-2 xl:grid-cols-3"
                : "space-y-3",
            )}
          >
            {sortedCourses.map((course) => (
              <CourseSummary
                key={course.id}
                course={course}
                view={view}
                onOpen={(nextCourse) => setSelectedCourseId(nextCourse.id)}
              />
            ))}
          </div>

          {sortedCourses.length === 0 && (
            <div className="rounded-lg border border-dashed py-16 text-center">
              <h2 className="font-semibold">No courses found</h2>
              <p className="text-muted-foreground mt-2 text-sm">
                Adjust the filters or search terms.
              </p>
            </div>
          )}
        </div>
      </section>

      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourseId(null)}
      />
    </div>
  );
}
