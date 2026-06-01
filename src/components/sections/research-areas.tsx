'use client';

import {
  Brain,
  Code2,
  Database,
  Lock,
  Monitor,
  Network,
} from 'lucide-react';

import { Card } from '@/components/ui/card';

const AREAS = [
  {
    icon: Brain,
    title: 'Artificial Intelligence & ML',
    description:
      'Deep learning, NLP, computer vision, reinforcement learning, and AI for social good.',
  },
  {
    icon: Code2,
    title: 'Theoretical Computer Science',
    description:
      'Algorithms, computational complexity, graph theory, and combinatorial optimization.',
  },
  {
    icon: Lock,
    title: 'Security & Privacy',
    description:
      'Program analysis, web security, information flow, and privacy-preserving computation.',
  },
  {
    icon: Database,
    title: 'Data Science & Mining',
    description:
      'Large-scale data analytics, streaming algorithms, and knowledge discovery.',
  },
  {
    icon: Monitor,
    title: 'Systems & Architecture',
    description:
      'Computer architecture, embedded systems, VLSI design, and hardware-software co-design.',
  },
  {
    icon: Network,
    title: 'HCI & Cognitive Science',
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
            <Card
              key={i}
              className="group p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold">{area.title}</h3>
                <div className="bg-primary/10 text-primary inline-flex rounded-lg p-2">
                  <area.icon className="size-4" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
