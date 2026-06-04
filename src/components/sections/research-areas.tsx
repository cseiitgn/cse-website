'use client';

import {
  Brain,
  Code2,
  Database,
  Lock,
  Monitor,
  Network,
} from 'lucide-react';

import {
  RESEARCH_AREAS,
  type ResearchAreaSlug,
} from '@/data/research-area-pages';

const AREAS = [
  {
    slug: 'ai',
    icon: Brain,
    title: 'Artificial Intelligence & ML',
    href: '/research/ai',
    description:
      'Deep learning, NLP, computer vision, reinforcement learning, and AI for social good.',
  },
  {
    slug: 'theory',
    icon: Code2,
    title: 'Theoretical Computer Science',
    href: '/research/theory',
    description:
      'Algorithms, computational complexity, graph theory, and combinatorial optimization.',
  },
  {
    slug: 'security',
    icon: Lock,
    title: 'Security & Privacy',
    href: '/research/security',
    description:
      'Program analysis, web security, information flow, and privacy-preserving computation.',
  },
  {
    slug: 'data-science',
    icon: Database,
    title: 'Data Science & Mining',
    href: '/research/data-science',
    description:
      'Large-scale data analytics, streaming algorithms, and knowledge discovery.',
  },
  {
    slug: 'systems',
    icon: Monitor,
    title: 'Systems & Architecture',
    href: '/research/systems',
    description:
      'Computer architecture, embedded systems, VLSI design, and hardware-software co-design.',
  },
  {
    slug: 'hci',
    icon: Network,
    title: 'HCI & Cognitive Science',
    href: '/research/hci',
    description:
      'Brain-computer interfaces, accessibility, human-AI interaction, and cognitive modeling.',
  },
];

export default function ResearchAreas() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl">Research Areas</h2>
          <p className="text-muted-foreground mt-2">
            Our faculty pursue diverse and impactful research across computing
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area, i) => (
            <a
              key={i}
              href={area.href}
              className="group rounded-xl border border-input bg-card p-6 text-card-foreground transition-colors hover:border-primary/40"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold">{area.title}</h3>
                <div
                  className="inline-flex rounded-lg border p-2"
                  style={{
                    backgroundColor:
                      RESEARCH_AREAS[area.slug as ResearchAreaSlug].accent.soft,
                    borderColor:
                      RESEARCH_AREAS[area.slug as ResearchAreaSlug].accent.border,
                    color:
                      RESEARCH_AREAS[area.slug as ResearchAreaSlug].accent
                        .foreground,
                  }}
                >
                  <area.icon className="size-4" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
