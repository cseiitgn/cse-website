"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  Database,
  FileText,
  Search,
  UserRound,
  X,
} from "lucide-react";

import publicationsData from "@/data/publications/dblp-career-faculty.json";
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

const ALL = "all";
const PAGE_SIZE = 40;

const AREA_LABELS: Record<string, string> = {
  theory: "Theory",
  systems: "Systems",
  ai: "AI",
  "data-science": "Data Science",
  hci: "HCI",
  security: "Security",
};

const TYPE_LABELS: Record<string, string> = {
  conference: "Conference",
  journal: "Journal",
  preprint: "Preprint",
  proceedings: "Proceedings",
  "book-chapter": "Book Chapter",
  book: "Book",
  "phd-thesis": "PhD Thesis",
  "masters-thesis": "Masters Thesis",
  other: "Other",
};

type FacultyProfile = (typeof publicationsData.faculty)[number];
type Publication = (typeof publicationsData.publications)[number];

function areaLabel(area: string) {
  return AREA_LABELS[area] ?? area;
}

function typeLabel(type: string) {
  return TYPE_LABELS[type] ?? type;
}

function profileLabel(url: string) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");

    if (host === "scholar.google.com") return "Google Scholar";
    if (host === "orcid.org") return "ORCID";
    if (host === "dl.acm.org") return "ACM DL";
    if (host === "openreview.net") return "OpenReview";
    if (host === "mathgenealogy.org") return "Math Genealogy";
    if (host === "wikidata.org") return "Wikidata";
    if (host.includes("iitgn.ac.in")) return "IITGN";

    return host;
  } catch {
    return "External Profile";
  }
}

function getPublicationSearchText(
  publication: Publication,
  facultyById: Map<string, FacultyProfile>,
) {
  return [
    publication.title,
    publication.venue,
    publication.year,
    publication.type,
    publication.areaKeywords.join(" "),
    publication.authors.map((author) => author.name).join(" "),
    publication.facultyIds
      .map((facultyId) => facultyById.get(facultyId)?.name)
      .filter(Boolean)
      .join(" "),
    publication.links.doi,
    publication.dblpKey,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function getExternalLinks(publication: Publication) {
  const links = [
    {
      label: "DBLP",
      href: publication.links.dblp,
    },
  ];

  if (publication.links.doi) {
    links.push({
      label: "DOI",
      href: publication.links.ee.find((link) => link.includes("doi.org")) ?? "",
    });
  }

  if (publication.links.arxiv) {
    links.push({
      label: "arXiv",
      href: publication.links.arxiv,
    });
  }

  const fallbackLink = publication.links.ee.find(
    (link) =>
      link &&
      !link.includes("doi.org") &&
      link !== publication.links.arxiv &&
      link !== publication.links.dblp,
  );

  if (fallbackLink) {
    links.push({
      label: "Full Text",
      href: fallbackLink,
    });
  }

  return links.filter((link) => link.href);
}

function SearchableFilter({
  ariaLabel,
  options,
  searchPlaceholder,
  value,
  onChange,
}: {
  ariaLabel: string;
  options: { value: string; label: string }[];
  searchPlaceholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={open}
        className="border-input flex h-9 w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-left text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:bg-input/30"
        onClick={() => {
          setOpen((current) => !current);
          setSearch("");
        }}
      >
        <span className="min-w-0 truncate">
          {selectedOption?.label ?? options[0]?.label}
        </span>
        <ChevronDown className="size-4 shrink-0 opacity-50" />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 w-full min-w-52 rounded-md border bg-popover text-popover-foreground shadow-md">
          <div className="border-b p-2">
            <div className="relative">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={searchPlaceholder}
                className="h-8 pl-8 text-sm"
                autoFocus
              />
            </div>
          </div>
          <div className="max-h-56 overflow-y-auto p-1">
            {filteredOptions.length === 0 && (
              <div className="px-2 py-2 text-sm text-muted-foreground">
                No matches
              </div>
            )}
            {filteredOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className="flex w-full items-center justify-between gap-2 rounded-sm px-2 py-1.5 text-left text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                  setSearch("");
                }}
              >
                <span className="min-w-0 truncate">{option.label}</span>
                {option.value === value && (
                  <Check className="size-4 shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PublicationCard({
  publication,
  facultyById,
  onSelectArea,
  onSelectFaculty,
}: {
  publication: Publication;
  facultyById: Map<string, FacultyProfile>;
  onSelectArea: (area: string) => void;
  onSelectFaculty: (facultyId: string) => void;
}) {
  const faculty = publication.facultyIds
    .map((facultyId) => facultyById.get(facultyId))
    .filter(Boolean);
  const links = getExternalLinks(publication);

  return (
    <Card className="gap-0 rounded-lg p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0 space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            {publication.year && (
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="size-3.5" />
                {publication.year}
              </span>
            )}
            <span className="inline-flex items-center gap-1">
              <BookOpen className="size-3.5" />
              {typeLabel(publication.type)}
            </span>
            {publication.venue && (
              <span className="min-w-0 truncate">{publication.venue}</span>
            )}
          </div>

          <a
            href={publication.links.dblp}
            target="_blank"
            rel="noopener noreferrer"
            className="group/title inline-flex items-start gap-2 text-base font-semibold leading-snug hover:text-primary"
          >
            {publication.title}
            <ArrowUpRight className="mt-0.5 size-4 shrink-0 opacity-0 transition-opacity group-hover/title:opacity-100" />
          </a>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {publication.authors.map((author) => author.name).join(", ")}
          </p>

          <div className="flex flex-wrap gap-2">
            {faculty.map((member) => (
              <Badge
                key={member.id}
                asChild
                variant="outline"
                className="cursor-pointer"
              >
                <button
                  type="button"
                  onClick={() => onSelectFaculty(member.id)}
                >
                  <UserRound className="size-3" />
                  {member.name}
                </button>
              </Badge>
            ))}
            {publication.areaKeywords.map((area) => (
              <Badge
                key={area}
                asChild
                variant="secondary"
                className="cursor-pointer"
              >
                <button type="button" onClick={() => onSelectArea(area)}>
                  {areaLabel(area)}
                </button>
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-row flex-wrap gap-2 md:max-w-28 md:flex-col">
          {links.map((link) => (
            <Button
              key={`${publication.id}-${link.label}`}
              asChild
              variant="outline"
              size="sm"
              className="justify-start"
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <FileText className="size-3.5" />
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default function PublicationsDirectory() {
  const [query, setQuery] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState(ALL);
  const [selectedArea, setSelectedArea] = useState(ALL);
  const [selectedType, setSelectedType] = useState(ALL);
  const [selectedYear, setSelectedYear] = useState(ALL);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isUrlReady, setIsUrlReady] = useState(false);

  const faculty = publicationsData.faculty;
  const publications = publicationsData.publications;

  const facultyById = useMemo(
    () => new Map(faculty.map((member) => [member.id, member])),
    [faculty],
  );

  const publicationSearchText = useMemo(
    () =>
      new Map(
        publications.map((publication) => [
          publication.id,
          getPublicationSearchText(publication, facultyById),
        ]),
      ),
    [facultyById, publications],
  );

  const years = useMemo(
    () =>
      [
        ...new Set(
          publications.map((publication) => publication.year).filter(Boolean),
        ),
      ]
        .sort((a, b) => Number(b) - Number(a))
        .map(String),
    [publications],
  );

  const types = useMemo(
    () =>
      [...new Set(publications.map((publication) => publication.type))].sort(),
    [publications],
  );

  const areaCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const publication of publications) {
      for (const area of publication.areaKeywords) {
        counts.set(area, (counts.get(area) ?? 0) + 1);
      }
    }
    return counts;
  }, [publications]);

  const facultyCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const publication of publications) {
      for (const facultyId of publication.facultyIds) {
        counts.set(facultyId, (counts.get(facultyId) ?? 0) + 1);
      }
    }
    return counts;
  }, [publications]);

  const facultyOptions = useMemo(
    () => [
      { value: ALL, label: "All Faculty" },
      ...faculty.map((member) => ({
        value: member.id,
        label: `${member.name} (${facultyCounts.get(member.id) ?? 0})`,
      })),
    ],
    [faculty, facultyCounts],
  );

  const yearOptions = useMemo(
    () => [
      { value: ALL, label: "All Years" },
      ...years.map((year) => ({ value: year, label: year })),
    ],
    [years],
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const facultyParam = params.get("faculty");
    const areaParam = params.get("area");
    const typeParam = params.get("type");
    const yearParam = params.get("year");

    setQuery(params.get("q") ?? "");
    setSelectedFaculty(
      facultyParam && facultyById.has(facultyParam) ? facultyParam : ALL,
    );
    setSelectedArea(
      areaParam && publicationsData.areaKeywordVocabulary.includes(areaParam)
        ? areaParam
        : ALL,
    );
    setSelectedType(typeParam && types.includes(typeParam) ? typeParam : ALL);
    setSelectedYear(yearParam && years.includes(yearParam) ? yearParam : ALL);
    setVisibleCount(PAGE_SIZE);
    setIsUrlReady(true);
  }, [facultyById, types, years]);

  useEffect(() => {
    if (!isUrlReady) return;

    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (selectedFaculty !== ALL) params.set("faculty", selectedFaculty);
    if (selectedArea !== ALL) params.set("area", selectedArea);
    if (selectedType !== ALL) params.set("type", selectedType);
    if (selectedYear !== ALL) params.set("year", selectedYear);

    const search = params.toString();
    const nextUrl = `${window.location.pathname}${search ? `?${search}` : ""}`;
    window.history.replaceState(null, "", nextUrl);
  }, [
    isUrlReady,
    query,
    selectedArea,
    selectedFaculty,
    selectedType,
    selectedYear,
  ]);

  const selectedFacultyProfile =
    selectedFaculty === ALL ? undefined : facultyById.get(selectedFaculty);

  const filteredPublications = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return publications.filter((publication) => {
      if (
        normalizedQuery &&
        !publicationSearchText.get(publication.id)?.includes(normalizedQuery)
      ) {
        return false;
      }

      if (
        selectedFaculty !== ALL &&
        !publication.facultyIds.includes(selectedFaculty)
      ) {
        return false;
      }

      if (
        selectedArea !== ALL &&
        !publication.areaKeywords.includes(selectedArea)
      ) {
        return false;
      }

      if (selectedType !== ALL && publication.type !== selectedType) {
        return false;
      }

      if (
        selectedYear !== ALL &&
        String(publication.year ?? "") !== selectedYear
      ) {
        return false;
      }

      return true;
    });
  }, [
    publications,
    publicationSearchText,
    query,
    selectedArea,
    selectedFaculty,
    selectedType,
    selectedYear,
  ]);

  const visiblePublications = filteredPublications.slice(0, visibleCount);
  const filtersActive =
    query ||
    selectedFaculty !== ALL ||
    selectedArea !== ALL ||
    selectedType !== ALL ||
    selectedYear !== ALL;

  function resetVisible() {
    setVisibleCount(PAGE_SIZE);
  }

  function selectFaculty(facultyId: string) {
    setSelectedFaculty(facultyId);
    resetVisible();
  }

  function selectArea(area: string) {
    setSelectedArea(area);
    resetVisible();
  }

  function clearFilters() {
    setQuery("");
    setSelectedFaculty(ALL);
    setSelectedArea(ALL);
    setSelectedType(ALL);
    setSelectedYear(ALL);
    resetVisible();
  }

  return (
    <div>
      <section className="from-primary/5 bg-gradient-to-b to-transparent py-14 md:py-18">
        <div className="container">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
              <Database className="size-3.5" />
              Last updated{" "}
              {new Date(publicationsData.generatedAt).toLocaleDateString(
                "en-IN",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                },
              )}
            </div>
            <h1 className="text-3xl md:text-4xl">Publications</h1>
          </div>

          <div className="mt-8 rounded-lg border bg-background/80 p-4 text-sm leading-relaxed text-muted-foreground">
            Most of the data on this page is fetched directly from DBLP. It
            includes publications in all formats, including preprints.
            Publications that are not indexed by DBLP may not show up here. DBLP
            exports are author-based, not affiliation-at-publication-time
            records, so some entries may include work from before or outside IIT
            Gandhinagar. If you notice any errors or anything that is amiss,
            please{" "}
            <a
              className="text-primary underline-offset-4 hover:underline"
              href="/about/contact"
            >
              let us know
            </a>
            .
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/20">
        <div className="container py-5">
          <div className="grid gap-3 lg:grid-cols-[minmax(16rem,1fr)_12rem_11rem_11rem_8rem_auto]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  resetVisible();
                }}
                placeholder="Search title, author, venue, DOI"
                className="pl-9"
              />
            </div>

            <SearchableFilter
              ariaLabel="Filter by faculty"
              options={facultyOptions}
              searchPlaceholder="Search faculty"
              value={selectedFaculty}
              onChange={(value) => {
                setSelectedFaculty(value);
                resetVisible();
              }}
            />

            <Select
              value={selectedArea}
              onValueChange={(value) => {
                setSelectedArea(value);
                resetVisible();
              }}
            >
              <SelectTrigger className="w-full" aria-label="Filter by area">
                <SelectValue placeholder="Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All Areas</SelectItem>
                {publicationsData.areaKeywordVocabulary.map((area) => (
                  <SelectItem key={area} value={area}>
                    {areaLabel(area)} ({areaCounts.get(area) ?? 0})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedType}
              onValueChange={(value) => {
                setSelectedType(value);
                resetVisible();
              }}
            >
              <SelectTrigger className="w-full" aria-label="Filter by type">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All Types</SelectItem>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {typeLabel(type)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <SearchableFilter
              ariaLabel="Filter by year"
              options={yearOptions}
              searchPlaceholder="Search years"
              value={selectedYear}
              onChange={(value) => {
                setSelectedYear(value);
                resetVisible();
              }}
            />

            <Button
              variant="outline"
              className="w-full lg:w-auto"
              onClick={clearFilters}
              disabled={!filtersActive}
            >
              <X className="size-4" />
              Clear
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              variant={selectedArea === ALL ? "default" : "outline"}
              size="sm"
              onClick={() => selectArea(ALL)}
            >
              All
            </Button>
            {publicationsData.areaKeywordVocabulary.map((area) => (
              <Button
                key={area}
                variant={selectedArea === area ? "default" : "outline"}
                size="sm"
                onClick={() => selectArea(area)}
              >
                {areaLabel(area)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {selectedFacultyProfile && (
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span>{selectedFacultyProfile.dblpName}</span>
              <Button asChild variant="link" size="sm" className="h-auto p-0">
                <a
                  href={selectedFacultyProfile.dblpPage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DBLP Profile
                  <ArrowUpRight className="size-3.5" />
                </a>
              </Button>
              {selectedFacultyProfile.profileUrls.slice(0, 3).map((url) => (
                <Button
                  key={url}
                  asChild
                  variant="link"
                  size="sm"
                  className="h-auto p-0"
                >
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {profileLabel(url)}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </Button>
              ))}
            </div>
          )}

          <div className="space-y-3">
            {visiblePublications.map((publication) => (
              <PublicationCard
                key={publication.id}
                publication={publication}
                facultyById={facultyById}
                onSelectArea={selectArea}
                onSelectFaculty={selectFaculty}
              />
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="border-border rounded-lg border border-dashed py-16 text-center">
              <h3 className="font-semibold">No publications found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Adjust the filters and search terms.
              </p>
            </div>
          )}

          {visibleCount < filteredPublications.length && (
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
