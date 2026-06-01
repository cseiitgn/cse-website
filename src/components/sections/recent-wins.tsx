import { Trophy } from 'lucide-react';

import { homepageAwardItems } from '@/data/news';

const colors = ['bg-amber-400', 'bg-blue-500', 'bg-emerald-500'];

export default function RecentWins() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <h2 className="flex items-center gap-2 text-2xl">
          <Trophy className="text-secondary size-6" />
          Recognitions &amp; Awards
        </h2>

        <table className="w-full table-fixed border-collapse">
          <colgroup>
            <col className="w-[35%]" />
            <col className="hidden md:table-column w-[55%]" />
            <col className="w-[10%]" />
          </colgroup>
          <thead>
            <tr className="h-12 border-b text-left text-foreground/40">
              <th className="pr-4 font-normal">Name</th>
              <th className="hidden pr-4 font-normal md:table-cell">Description</th>
              <th className="text-right font-normal">Year</th>
            </tr>
          </thead>
          <tbody>
            {homepageAwardItems.map((award, index) => (
              <tr
                key={award.id}
                className="border-b text-left text-foreground/40"
              >
                <td className="py-4 pr-4 text-base font-medium tracking-tight text-foreground">
                  <div className="flex items-center gap-3">
                    <span className={`size-3 shrink-0 rounded-full ${colors[index % colors.length]}`} />
                    <a
                      href={award.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-secondary transition-colors"
                    >
                      {award.title}
                    </a>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 text-sm md:table-cell">
                  {award.summary}
                </td>
                <td className="py-4 text-right text-sm text-foreground">
                  {award.displayDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
