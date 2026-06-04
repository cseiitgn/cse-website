'use client';

import { useState } from 'react';

import {
  AtSign,
  BookOpen,
  Database,
  ExternalLink,
  Filter,
  Github,
  Globe,
  Linkedin,
  Youtube,
  type LucideIcon,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  FACULTY,
  type FacultyCategory,
  type FacultyMember,
  type FacultyProfileLink,
  type FacultyProfileLinkType,
} from '@/data/faculty';

const PROFILE_LINK_ICONS: Record<FacultyProfileLinkType, LucideIcon> = {
  website: ExternalLink,
  scholar: BookOpen,
  dblp: Database,
  github: Github,
  youtube: Youtube,
  linkedin: Linkedin,
  x: AtSign,
  mastodon: AtSign,
  profile: Globe,
};

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
  const isHeadOfDepartment = member.name === 'Shanmuganathan Raman';
  const profileLinks: FacultyProfileLink[] = [
    ...(member.homepage
      ? [
          {
            type: 'profile' as const,
            label: 'IITGN faculty profile',
            url: member.homepage,
          },
        ]
      : []),
    ...(member.links ?? []),
  ];

  return (
    <Card
      className={`group relative flex gap-4 p-4 ${
        isHeadOfDepartment ? 'bg-yellow-50/45' : ''
      }`}
    >
      {isHeadOfDepartment && (
        <span className="absolute right-4 top-4 rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-[0.68rem] font-medium uppercase tracking-wide text-primary">
          HoD
        </span>
      )}
      <div className="bg-primary/10 text-primary grid size-14 shrink-0 place-items-center rounded-lg text-lg font-semibold">
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-sm font-semibold leading-snug">
              {member.name}
            </h3>
            <p className="text-muted-foreground text-xs">{member.designation}</p>
          </div>
          <div
            className={`flex max-w-28 shrink-0 flex-wrap items-center justify-end gap-1.5 ${
              isHeadOfDepartment ? 'pt-10' : ''
            }`}
          >
            {profileLinks.map((link) => {
              const Icon = PROFILE_LINK_ICONS[link.type];

              return (
                <a
                  key={`${link.type}-${link.url}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${link.label} for ${member.name}`}
                  title={link.label}
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  <Icon className="size-3.5" />
                </a>
              );
            })}
          </div>
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
