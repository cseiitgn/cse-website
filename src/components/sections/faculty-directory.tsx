'use client';

import { useState } from 'react';

import { Filter, Globe } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  FACULTY,
  type FacultyCategory,
  type FacultyMember,
} from '@/data/faculty';

function FacultyCard({ member }: { member: FacultyMember }) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const affiliationLine =
    member.category === 'affiliated'
      ? `Primary Affiliation: ${member.primaryDepartment}`
      : member.secondaryDepartment
        ? `Also affiliated with ${member.secondaryDepartment}`
        : undefined;

  return (
    <Card className="group flex gap-4 p-4">
      <div className="bg-primary/10 text-primary grid size-14 shrink-0 place-items-center rounded-lg text-lg font-semibold">
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold leading-snug">
              {member.name}
            </h3>
            <p className="text-muted-foreground text-xs">{member.designation}</p>
          </div>
          {member.homepage && (
            <a
              href={member.homepage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open IITGN faculty profile for ${member.name}`}
              title="IITGN faculty profile"
              className="text-muted-foreground hover:text-secondary shrink-0 transition-colors"
            >
              <Globe className="size-3.5" />
            </a>
          )}
        </div>
        {affiliationLine && (
          <p className="text-muted-foreground mt-1 text-xs">
            {affiliationLine}
          </p>
        )}
        {member.affiliations && member.affiliations.length > 0 && (
          <p className="text-muted-foreground mt-1 text-xs">
            {member.affiliations.join(', ')}
          </p>
        )}
      </div>
    </Card>
  );
}

const sortByFirstName = (members: FacultyMember[]) =>
  [...members].sort((a, b) => a.name.localeCompare(b.name));

export default function FacultyDirectory() {
  const [activeFilter, setActiveFilter] = useState<FacultyCategory | 'all'>(
    'all',
  );

  const filteredCategories =
    activeFilter === 'all'
      ? CATEGORY_ORDER
      : CATEGORY_ORDER.filter((c) => c === activeFilter);

  return (
    <div>
      {/* Header */}
      <section className="from-primary/5 bg-gradient-to-b to-transparent py-16 md:py-20">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl">Faculty</h1>
          <p className="text-muted-foreground mx-auto mt-3 max-w-lg">
            Our faculty bring expertise across theoretical CS, AI, systems,
            security, and interdisciplinary computing.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b">
        <div className="container flex flex-wrap items-center gap-2 py-4">
          <Filter className="text-muted-foreground mr-1 size-4" />
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            size="sm"
            className="rounded-full text-xs"
            onClick={() => setActiveFilter('all')}
          >
            All ({FACULTY.length})
          </Button>
          {CATEGORY_ORDER.map((cat) => {
            const count = FACULTY.filter((f) => f.category === cat).length;
            if (count === 0) return null;
            return (
              <Button
                key={cat}
                variant={activeFilter === cat ? 'default' : 'outline'}
                size="sm"
                className="rounded-full text-xs"
                onClick={() => setActiveFilter(cat)}
              >
                {CATEGORY_LABELS[cat]} ({count})
              </Button>
            );
          })}
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="section-padding">
        <div className="container">
          {filteredCategories.map((category) => {
            const members = sortByFirstName(
              FACULTY.filter((f) => f.category === category),
            );
            if (members.length === 0) return null;

            return (
              <div key={category} className="mb-12 last:mb-0">
                <h2 className="mb-6 text-xl font-semibold">
                  {CATEGORY_LABELS[category]}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {members.map((member) => (
                    <FacultyCard key={member.name} member={member} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
