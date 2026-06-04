import { useEffect, useMemo, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export type EnhancedBlogPost = import('astro:content').CollectionEntry<'blog'>;

interface BlogClientProps {
  posts: EnhancedBlogPost[];
}

const TAG_LABELS: Record<string, string> = {
  'hackrush 2026': '#hackrush2026',
  hackrush2026: '#hackrush2026',
};

function tagKey(tag: string) {
  return tag.toLowerCase().replace(/[#\s-]/g, '');
}

function displayTag(tag: string) {
  return TAG_LABELS[tag.trim().toLowerCase()] ?? tag;
}

function getDisplayTags(tags: string[] = []) {
  const seen = new Set<string>();
  return tags
    .map(displayTag)
    .filter((tag) => {
      const key = tagKey(tag);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function formattedDate(date: Date | string) {
  return new Date(date).toLocaleDateString('en-GB', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function archiveDate(date: Date | string) {
  return new Date(date).toLocaleDateString('en-GB', {
    month: 'short',
    day: '2-digit',
  });
}

function yearOf(date: Date | string) {
  return new Date(date).getFullYear().toString();
}

export default function BlogPosts({ posts }: BlogClientProps) {
  const [activeTag, setActiveTag] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setActiveTag(params.get('tag') ?? '');
  }, []);

  const sortedPosts = useMemo(
    () =>
      posts.slice().sort((a, b) => {
      const aTime = new Date(a.data.date).getTime();
      const bTime = new Date(b.data.date).getTime();
      return bTime - aTime;
      }),
    [posts],
  );

  const filteredPosts = useMemo(() => {
    if (!activeTag) return sortedPosts;
    const activeKey = tagKey(activeTag);

    return sortedPosts.filter((post) =>
      getDisplayTags(post.data.tags).some((tag) => tagKey(tag) === activeKey),
    );
  }, [activeTag, sortedPosts]);

  const groupedPosts = filteredPosts.reduce<Record<string, EnhancedBlogPost[]>>(
    (groups, post) => {
      const year = yearOf(post.data.date);
      groups[year] = groups[year] ?? [];
      groups[year].push(post);
      return groups;
    },
    {},
  );

  const years = Object.keys(groupedPosts).sort(
    (a, b) => Number(b) - Number(a),
  );
  const activeTagLabel = activeTag ? displayTag(activeTag) : '';

  function applyTagFilter(tag: string) {
    const nextTag = activeTag && tagKey(activeTag) === tagKey(tag) ? '' : tag;
    setActiveTag(nextTag);

    const url = new URL(window.location.href);
    if (nextTag) {
      url.searchParams.set('tag', nextTag);
    } else {
      url.searchParams.delete('tag');
    }
    window.history.replaceState({}, '', `${url.pathname}${url.search}`);
  }

  return (
    <section className="section-padding container">
      <div className="mx-auto max-w-4xl">
        <header className="border-foreground/40 border-b pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Blog
              </h1>
              <p className="text-muted-foreground mt-2 max-w-xl text-sm leading-relaxed md:text-base">
                Articles, essays, and student perspectives from the CSE
                community.
              </p>
            </div>
            <a
              href="/rss.xml"
              className="text-foreground text-sm font-semibold underline-offset-4 hover:underline"
            >
              RSS
            </a>
          </div>
        </header>

        {activeTagLabel && (
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="text-muted-foreground">
              Showing {filteredPosts.length} of {sortedPosts.length} posts
              tagged{' '}
              <span className="text-foreground font-semibold">
                {activeTagLabel}
              </span>
              .
            </span>
            <button
              type="button"
              onClick={() => applyTagFilter(activeTag)}
              className="text-foreground font-semibold underline-offset-4 hover:underline"
            >
              Clear
            </button>
          </div>
        )}

        <div className="mt-10 space-y-12">
          {years.length > 0 ? (
            years.map((year) => (
              <section
                key={year}
                className="grid gap-5 sm:grid-cols-[6rem_minmax(0,1fr)]"
              >
                <h2 className="text-3xl font-semibold tracking-tight">
                  {year}
                </h2>
                <div className="space-y-1">
                  {groupedPosts[year].map((post) => {
                    const tags = getDisplayTags(post.data.tags).slice(0, 2);

                    return (
                      <div
                        key={post.id}
                        className="grid gap-2 rounded-sm py-2 sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:items-center"
                      >
                        <time
                          dateTime={new Date(post.data.date).toISOString()}
                          className="text-muted-foreground text-sm font-semibold"
                        >
                          {archiveDate(post.data.date)}
                        </time>
                        <a
                          href={`/blog/${post.id}`}
                          className="min-w-0 text-lg font-semibold leading-snug transition-colors hover:text-primary"
                        >
                          {post.data.title}
                        </a>
                        <span className="flex flex-wrap gap-2 sm:justify-end">
                          {tags.map((tag) => {
                            const isActive =
                              activeTag && tagKey(activeTag) === tagKey(tag);

                            return (
                              <button
                                key={tag}
                                type="button"
                                aria-pressed={Boolean(isActive)}
                                onClick={() => applyTagFilter(tag)}
                                className={cn(
                                  'rounded-sm border px-2 py-0.5 text-xs font-semibold leading-none transition-colors',
                                  isActive
                                    ? 'border-primary bg-primary text-primary-foreground'
                                    : 'border-foreground/60 text-foreground hover:border-primary hover:text-primary',
                                )}
                              >
                                {tag}
                              </button>
                            );
                          })}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))
          ) : (
            <p className="text-muted-foreground text-sm">
              No posts match this tag.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

interface BlogCardProps {
  post: EnhancedBlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  const tags = getDisplayTags(post.data.tags);

  return (
    <Card
      className={cn(
        'border-input h-full rounded-lg shadow-none transition-all duration-200 hover:border-primary/40 hover:shadow-sm',
        className,
      )}
    >
      <CardContent className="flex h-full flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl leading-tight font-medium">{post.data.title}</h3>
        <p className="text-muted-foreground mt-3 line-clamp-3 text-sm leading-relaxed">
          {post.data.description}
        </p>
        <div className="text-muted-foreground mt-auto pt-5 text-sm">
          {formattedDate(post.data.date)}
        </div>
      </CardContent>
    </Card>
  );
}
