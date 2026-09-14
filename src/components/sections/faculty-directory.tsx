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
    <article
      className={`faculty-card ${isHeadOfDepartment ? 'bg-accent/30' : 'bg-card'}`}
    >
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          width={member.imageWidth}
          height={member.imageHeight}
          loading="lazy"
          decoding="async"
          className="faculty-portrait"
        />
      ) : (
        <div
          className="faculty-portrait grid place-items-center bg-muted text-2xl text-muted-foreground"
          aria-label={`Photograph unavailable for ${member.name}`}
        >
          {initials}
        </div>
      )}
      <div className="min-w-0">
        <h3 className="text-base font-semibold leading-snug">
          {member.name}{' '}
          {isHeadOfDepartment && (
            <span className="ml-1 text-xs text-primary">HoD</span>
          )}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">
          {member.designation}
        </p>
        {affiliationLine && (
          <p className="mt-1 text-xs text-muted-foreground">
            {affiliationLine}
          </p>
        )}
        {member.affiliations?.length ? (
          <p className="mt-1 text-xs text-muted-foreground">
            {member.affiliations.join(', ')}
          </p>
        ) : null}
        <div className="mt-3 flex flex-wrap items-center gap-3">
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
                className="text-muted-foreground hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
        {member.researchInterests?.length ? (
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {member.researchInterests.slice(0, 3).join(' · ')}
          </p>
        ) : null}
      </div>
    </article>
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
      <section className="from-primary/5 bg-gradient-to-b to-transparent py-12 md:py-14">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl">Faculty</h1>
          <p className="text-muted-foreground mx-auto mt-3 max-w-lg">
            Our faculty bring expertise across theoretical CS, AI, systems,
            security, and interdisciplinary computing.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Photographs from{' '}
            <a
              className="underline underline-offset-4"
              href="https://iitgn.ac.in/faculty/cse"
            >
              IITGN’s official faculty directory
            </a>
            .
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
                <div className="grid gap-4 md:grid-cols-2">
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
