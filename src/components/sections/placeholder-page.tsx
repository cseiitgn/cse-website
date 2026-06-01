import type { LucideIcon } from 'lucide-react';

import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  sections?: string[];
}

export default function PlaceholderPage({
  title,
  description,
  icon: Icon = Construction,
  sections = [],
}: PlaceholderPageProps) {
  return (
    <div>
      <section className="from-primary/5 bg-gradient-to-b to-transparent py-16 md:py-20">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl">{title}</h1>
          <p className="text-muted-foreground mx-auto mt-3 max-w-lg">
            {description}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="border-border mx-auto flex max-w-md flex-col items-center rounded-xl border border-dashed p-12 text-center">
            <div className="bg-muted mb-4 inline-flex rounded-lg p-3">
              <Icon className="text-muted-foreground size-6" />
            </div>
            <h2 className="text-lg font-semibold">Coming Soon</h2>
            <p className="text-muted-foreground mt-2 text-sm">
              This page is under development. Check back soon for updates.
            </p>
          </div>

          {sections.length > 0 && (
            <div className="mx-auto mt-12 max-w-lg">
              <h3 className="text-muted-foreground mb-4 text-sm font-medium uppercase tracking-wider">
                Planned Content
              </h3>
              <ul className="space-y-2">
                {sections.map((section, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground flex items-center gap-2 text-sm"
                  >
                    <span className="bg-secondary/30 inline-block size-1.5 rounded-full" />
                    {section}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
