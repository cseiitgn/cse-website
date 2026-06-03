'use client';

import { useMemo, useState } from 'react';

import { Grid2X2, List, Mail, Search } from 'lucide-react';

import { Card } from '@/components/ui/card';
import {
  RESEARCH_SCHOLARS,
  type ResearchScholar,
} from '@/data/research-scholars';
import { cn } from '@/lib/utils';

const ALL = 'all';

type SortKey = 'name-asc' | 'name-desc' | 'joined-desc' | 'joined-asc';
type ViewMode = 'gallery' | 'list';

const PROGRAM_LABELS: Record<ResearchScholar['program'], string> = {
  'Computer Science and Engineering': 'CSE',
  'Artificial Intelligence': 'AI',
};

const joinedYears = Array.from(
  new Set(RESEARCH_SCHOLARS.map((scholar) => scholar.joined)),
).sort((a, b) => Number(b) - Number(a));

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function InitialsMark({ name }: { name: string }) {
  return (
    <div className="bg-primary/10 text-primary grid size-14 shrink-0 place-items-center rounded-lg text-lg font-semibold">
      {initials(name)}
    </div>
  );
}

function GalleryCard({ scholar }: { scholar: ResearchScholar }) {
  return (
    <Card className="flex gap-4 p-4">
      <InitialsMark name={scholar.name} />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold leading-snug">
              {scholar.name}
            </h3>
            <p className="text-muted-foreground text-xs">
              {PROGRAM_LABELS[scholar.program]}
            </p>
            <p className="text-muted-foreground mt-1 text-xs">
              Joined {scholar.joined}
            </p>
          </div>
          <a
            href={`mailto:${scholar.email}`}
            className="text-muted-foreground hover:text-secondary shrink-0 transition-colors"
            aria-label={`Email ${scholar.name}`}
            title="Email"
          >
            <Mail className="size-3.5" />
          </a>
        </div>
      </div>
    </Card>
  );
}

function ListRow({ scholar }: { scholar: ResearchScholar }) {
  return (
    <article className="grid gap-3 border-b py-4 last:border-b-0 md:grid-cols-[1.5fr_1fr_8rem_2rem] md:items-center">
      <div className="flex min-w-0 items-center gap-3">
        <InitialsMark name={scholar.name} />
        <h3 className="truncate text-sm font-semibold">{scholar.name}</h3>
      </div>
      <p className="text-muted-foreground text-sm">{scholar.program}</p>
      <p className="text-muted-foreground text-sm">Joined {scholar.joined}</p>
      <a
        href={`mailto:${scholar.email}`}
        className="text-muted-foreground hover:text-secondary transition-colors"
        aria-label={`Email ${scholar.name}`}
      >
        <Mail className="size-4" />
      </a>
    </article>
  );
}

export default function ResearchScholarsDirectory() {
  const [query, setQuery] = useState('');
  const [program, setProgram] = useState(ALL);
  const [year, setYear] = useState(ALL);
  const [sort, setSort] = useState<SortKey>('joined-desc');
  const [view, setView] = useState<ViewMode>('gallery');

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return [...RESEARCH_SCHOLARS]
      .filter((scholar) => {
        const matchesQuery =
          normalizedQuery.length === 0 ||
          scholar.name.toLowerCase().includes(normalizedQuery) ||
          scholar.email.toLowerCase().includes(normalizedQuery);
        const matchesProgram = program === ALL || scholar.program === program;
        const matchesYear = year === ALL || scholar.joined === year;

        return matchesQuery && matchesProgram && matchesYear;
      })
      .sort((a, b) => {
        if (sort === 'name-asc') return a.name.localeCompare(b.name);
        if (sort === 'name-desc') return b.name.localeCompare(a.name);
        if (sort === 'joined-asc') {
          return Number(a.joined) - Number(b.joined) || a.name.localeCompare(b.name);
        }

        return Number(b.joined) - Number(a.joined) || a.name.localeCompare(b.name);
      });
  }, [program, query, sort, year]);

  return (
    <div>
      <section className="from-primary/5 bg-gradient-to-b to-transparent py-16 md:py-20">
        <div className="container">
          <p className="text-secondary text-sm font-medium uppercase tracking-wider">
            People
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl">Research Scholars</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Doctoral researchers in Computer Science and Engineering and
            Artificial Intelligence.
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="container grid gap-3 py-4 lg:grid-cols-[1fr_14rem_10rem_12rem_auto]">
          <label className="relative">
            <Search className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name or email"
              className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none transition focus:border-secondary"
            />
          </label>

          <select
            value={program}
            onChange={(event) => setProgram(event.target.value)}
            className="h-10 rounded-md border bg-background px-3 text-sm outline-none transition focus:border-secondary"
          >
            <option value={ALL}>All programs</option>
            <option value="Computer Science and Engineering">CSE</option>
            <option value="Artificial Intelligence">AI</option>
          </select>

          <select
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className="h-10 rounded-md border bg-background px-3 text-sm outline-none transition focus:border-secondary"
          >
            <option value={ALL}>All years</option>
            {joinedYears.map((joinedYear) => (
              <option key={joinedYear} value={joinedYear}>
                {joinedYear}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            className="h-10 rounded-md border bg-background px-3 text-sm outline-none transition focus:border-secondary"
          >
            <option value="joined-desc">Newest first</option>
            <option value="joined-asc">Oldest first</option>
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
          </select>

          <div className="grid h-10 grid-cols-2 rounded-md border p-1">
            {[
              { id: 'gallery' as const, icon: Grid2X2, label: 'Gallery' },
              { id: 'list' as const, icon: List, label: 'List' },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setView(item.id)}
                  className={cn(
                    'grid size-8 place-items-center rounded-sm transition',
                    view === item.id
                      ? 'bg-secondary text-secondary-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                  aria-label={`${item.label} view`}
                >
                  <Icon className="size-4" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              {filtered.length} scholar{filtered.length === 1 ? '' : 's'}
            </p>
          </div>

          {view === 'gallery' ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((scholar) => (
                <GalleryCard key={scholar.email} scholar={scholar} />
              ))}
            </div>
          ) : (
            <Card className="p-4">
              {filtered.map((scholar) => (
                <ListRow key={scholar.email} scholar={scholar} />
              ))}
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
