import { FlaskConical } from 'lucide-react';

import { cn } from '@/lib/utils';

interface ResearchArea {
  title: string;
  desc: string;
  img: string;
  href: string;
  gridClass: string;
  horizontal?: boolean;
}

const researchAreas: ResearchArea[] = [
  {
    title: 'AI & Machine Learning',
    desc: 'Deep learning, NLP, computer vision, and AI for social good.',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    href: '/research/ai',
    gridClass: 'md:col-span-1',
  },
  {
    title: 'HCI & Cognitive Science',
    desc: 'Brain-computer interfaces, accessibility, and cognitive modeling.',
    img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop',
    href: '/research/hci',
    gridClass: 'lg:col-span-2',
  },
  {
    title: 'Security & Privacy',
    desc: 'Program analysis, web security, and privacy-preserving computation.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    href: '/research/security',
    gridClass: 'md:col-span-1 lg:row-span-2',
  },
  {
    title: 'Data Science',
    desc: 'Large-scale analytics, streaming algorithms, and knowledge discovery.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    href: '/research/data-science',
    gridClass: 'lg:col-span-2',
  },
  {
    title: 'Systems & Architecture',
    desc: 'Computer architecture, embedded systems, and hardware-software co-design.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    href: '/research/systems',
    gridClass: 'md:col-span-1',
  },
  {
    title: 'Theoretical CS',
    desc: 'Algorithms, complexity, graph theory, and combinatorial optimization.',
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=300&fit=crop',
    href: '/research/theory',
    gridClass: 'md:col-span-2 lg:col-span-4',
    horizontal: true,
  },
];

export default function ResearchBento() {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="mb-6 flex items-center gap-2 text-2xl">
          <FlaskConical className="text-secondary size-6" />
          Research Highlights
        </h2>
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {researchAreas.map((area, index) => (
            <a
              key={index}
              href={area.href}
              className={cn(
                'group relative flex gap-2 rounded-2xl border p-3 transition-colors hover:border-blue-500/50 hover:bg-blue-500/5',
                area.horizontal ? 'flex-row items-center' : 'flex-col',
                area.gridClass,
              )}
            >
              <div className={cn(
                'overflow-hidden rounded-xl bg-muted',
                area.horizontal ? 'h-36 w-1/3 shrink-0' : 'w-full flex-1',
              )}>
                <img
                  src={area.img}
                  alt={area.title}
                  className={cn(
                    'pointer-events-none h-full w-full object-cover transition-transform duration-300 group-hover:scale-105',
                    !area.horizontal && 'min-h-32',
                  )}
                />
              </div>
              <div className={area.horizontal ? 'flex-1' : ''}>
                <h3 className={cn('text-lg font-semibold tracking-tight', !area.horizontal && 'mt-2')}>
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground">{area.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
