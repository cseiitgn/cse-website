"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Calendar, Megaphone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CATEGORY_LABELS, homepageNewsItems } from "@/data/news";
import { seminarEntries } from "@/data/seminars";

const parseSeminarDate = (date: string) => new Date(`${date}T00:00:00`);

const formatSeminarMeta = (displayDate: string, time?: string) =>
  time ? `${displayDate} · ${time}` : displayDate;

const homepageEventAnnouncements = [
  {
    id: "theory-day-2026",
    categoryLabel: "Event",
    displayDate: "17 Jun 2026",
    title: "Theory Day: Foundations of Computer Science",
    href: "/events/theory-day-2026",
    summary:
      "Registration is open for Theory Day on 17 June 2026. Schedule, talk titles, and abstracts will be announced soon.",
    isExternal: false,
  },
];

export default function Announcements() {
  const [seminarView, setSeminarView] = useState<"upcoming" | "recent">(
    "upcoming",
  );

  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const upcomingSeminars = useMemo(
    () =>
      [...seminarEntries]
        .filter((item) => parseSeminarDate(item.date) >= today)
        .sort(
          (a, b) =>
            parseSeminarDate(a.date).getTime() -
            parseSeminarDate(b.date).getTime(),
        )
        .slice(0, 3),
    [today],
  );

  const recentSeminars = useMemo(
    () =>
      [...seminarEntries]
        .filter((item) => parseSeminarDate(item.date) < today)
        .sort(
          (a, b) =>
            parseSeminarDate(b.date).getTime() -
            parseSeminarDate(a.date).getTime(),
        )
        .slice(0, 3),
    [today],
  );
  const activeSeminars =
    seminarView === "upcoming" ? upcomingSeminars : recentSeminars;
  const homepageAnnouncements = [
    ...homepageEventAnnouncements,
    ...homepageNewsItems.slice(0, 2).map((item) => ({
      id: item.id,
      categoryLabel: CATEGORY_LABELS[item.category],
      displayDate: item.displayDate,
      title: item.title,
      href: item.sourceUrl,
      summary: item.summary,
      isExternal: true,
    })),
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)]">
          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="flex items-center gap-2 text-2xl">
                <Megaphone className="text-secondary size-6" />
                Announcements
              </h2>
              <Button variant="ghost" size="sm" asChild>
                <a href="/updates/news">
                  View all <ArrowRight className="ml-1 size-3.5" />
                </a>
              </Button>
            </div>

            <div className="grid gap-2.5">
              {homepageAnnouncements.map((item) => (
                <Card key={item.id} className="p-3.5">
                  <div className="mb-1.5 flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.categoryLabel}
                    </Badge>
                    <span className="text-muted-foreground flex items-center gap-1 text-xs">
                      <Calendar className="size-3" />
                      {item.displayDate}
                    </span>
                  </div>
                  <a
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noreferrer" : undefined}
                    className="hover:text-secondary text-base font-semibold transition-colors"
                  >
                    {item.title}
                  </a>
                  <p className="text-muted-foreground mt-1 line-clamp-1 text-sm">
                    {item.summary}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <aside>
            <div className="mb-6 flex items-center gap-2">
              <Calendar className="text-secondary size-6" />
              <h2 className="text-2xl">Seminars</h2>
            </div>

            <div className="mb-5 inline-flex rounded-full bg-muted p-1">
              {(["upcoming", "recent"] as const).map((view) => (
                <button
                  key={view}
                  type="button"
                  className="rounded-full px-3 py-1 text-sm capitalize text-muted-foreground transition data-[active=true]:bg-background data-[active=true]:text-foreground data-[active=true]:shadow-sm"
                  data-active={seminarView === view}
                  onClick={() => setSeminarView(view)}
                >
                  {view}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {activeSeminars.length > 0 ? (
                activeSeminars.map((item) => (
                  <a
                    key={item.id}
                    href={`/updates/seminars#${item.id}`}
                    className="block border-l-2 border-secondary/50 py-1 pl-4 transition hover:border-secondary"
                  >
                    <p className="text-muted-foreground text-xs">
                      {formatSeminarMeta(item.displayDate, item.time)}
                    </p>
                    <p className="mt-1 text-sm font-medium leading-snug">
                      {item.title}
                    </p>
                    <p className="text-muted-foreground mt-0.5 line-clamp-1 text-xs">
                      {item.speaker}
                    </p>
                  </a>
                ))
              ) : (
                <p className="text-muted-foreground border-l-2 border-secondary/50 py-1 pl-4 text-sm">
                  No upcoming seminars listed.
                </p>
              )}
            </div>

            <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
              <a href="/updates/seminars">Full Calendar</a>
            </Button>
          </aside>
        </div>
      </div>
    </section>
  );
}
