import { Trophy } from 'lucide-react';

import { homepageAwardItems } from '@/data/news';

const colors = ['bg-amber-400', 'bg-blue-500', 'bg-emerald-500'];

export default function RecentWins() {
  const featuredAward =
    homepageAwardItems.find((award) => award.featured) ?? homepageAwardItems[0];
  const listedAwards = homepageAwardItems.filter(
    (award) => award.id !== featuredAward?.id,
  );

  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <h2 className="flex items-center gap-2 text-2xl">
          <Trophy className="text-secondary size-6" />
          Recognitions &amp; Awards
        </h2>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)]">
          {featuredAward && (
            <article className="self-start rounded-lg border border-secondary/20 bg-secondary/5 p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex rounded-full border border-secondary/30 bg-background px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-wide text-secondary">
                  Featured
                </span>
                <span className="text-sm font-medium text-foreground">
                  {featuredAward.displayDate}
                </span>
              </div>
              <a
                href={featuredAward.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 block text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-secondary"
              >
                {featuredAward.title}
              </a>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {featuredAward.summary}
              </p>
            </article>
          )}

          <table className="w-full table-fixed border-collapse">
            <colgroup>
              <col className="w-[42%]" />
              <col className="hidden md:table-column w-[46%]" />
              <col className="w-[12%]" />
            </colgroup>
            <thead>
              <tr className="h-10 border-b text-left text-foreground/40">
                <th className="pr-4 font-normal">Name</th>
                <th className="hidden pr-4 font-normal md:table-cell">
                  Description
                </th>
                <th className="text-right font-normal">Year</th>
              </tr>
            </thead>
            <tbody>
              {listedAwards.map((award, index) => (
                <tr key={award.id} className="border-b text-left text-foreground/40">
                  <td className="py-4 pr-4 text-base font-medium tracking-tight text-foreground">
                    <div className="flex items-center gap-3">
                      <span
                        className={`size-3 shrink-0 rounded-full ${colors[index % colors.length]}`}
                      />
                      <a
                        href={award.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="block transition-colors hover:text-secondary"
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
      </div>
    </section>
  );
}
