import type { CollectionEntry } from 'astro:content';
import { ChevronLeft, Facebook, Twitter, MessageCircle } from 'lucide-react';

/**
 * Calculate read time based on word count
 * @param content - The markdown content to analyze
 * @returns Formatted read time string (e.g., "5 min read")
 */
export function calculateReadTime(content: string): string {
  // Remove markdown syntax and count words
  const cleanContent = content
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .replace(/^\s*[-*+]\s+/gm, '') // Remove list markers
    .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered list markers
    .replace(/---[\s\S]*?---/g, '') // Remove frontmatter
    .trim();

  const words = cleanContent.split(/\s+/).filter((word) => word.length > 0);
  const wordCount = words.length;

  // Average reading speed is 200-250 words per minute, using 225
  const readingSpeed = 225;
  const minutes = Math.ceil(wordCount / readingSpeed);

  return `${Math.max(1, minutes)} min read`;
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

function relatedDate(date: Date | string) {
  return new Date(date).toLocaleDateString('en-GB', {
    month: 'short',
    day: '2-digit',
  });
}

function tagFilterHref(tag: string) {
  return `/blog?tag=${encodeURIComponent(tag)}`;
}

function authorInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'CSE';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

const BlogPost = ({
  post,
  relatedPosts,
  children,
}: {
  post: CollectionEntry<'blog'>[];
  relatedPosts: CollectionEntry<'blog'>[];
  children: React.ReactNode;
}) => {
  const { title, description, date, author } = post[0].data;
  const { body } = post[0];
  const readTime = calculateReadTime(body || '');
  const initials = authorInitials(author.name);

  return (
    <div className="section-padding container">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <a
            href="/blog"
            className="group text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            Back to Blog
          </a>

          {/* Title and Description */}
          <h1 className="mb-4 text-2xl leading-tight font-semibold tracking-tight md:text-3xl lg:text-4xl">
            {title}
          </h1>
          <p className="text-muted-foreground mb-8 text-base leading-relaxed md:text-lg">
            {description}
          </p>
        </header>

        {/* Author Information */}
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              aria-hidden="true"
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 via-blue-700 to-teal-500 text-sm font-semibold text-white shadow-sm ring-1 ring-border/70 dark:from-slate-100 dark:via-sky-200 dark:to-teal-200 dark:text-slate-950"
            >
              {initials}
            </div>
            <div>
              <div className="text-foreground text-lg font-semibold">
                {author.name}
              </div>
              <div className="text-muted-foreground text-sm">
                {new Date(date).toLocaleDateString('en-GB', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}{' '}
                · {readTime}
              </div>
            </div>
          </div>

          {/* Social Share Icons */}
          <div className="bg-background border-input [&_*]:border-input grid grid-cols-3 items-center divide-x rounded-sm border shadow-sm">
            <a
              href={author.facebookUrl}
              className="flex items-center justify-center px-3 py-2.5 md:px-5"
            >
              <Facebook className="size-4 shrink-0 md:size-5" />
            </a>
            <a
              href={author.twitterUrl}
              className="flex items-center justify-center px-3 py-2.5 md:px-5"
            >
              <Twitter className="size-4 shrink-0 md:size-5" />
            </a>
            <a
              href={author.linkedinUrl}
              className="flex items-center justify-center px-3 py-2.5 md:px-5"
            >
              <MessageCircle className="size-4 shrink-0 md:size-5" />
            </a>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose lg:prose-lg prose-headings:font-weight-display dark:prose-invert prose-headings:tracking-tight prose-p:leading-relaxed prose-li:leading-relaxed prose-img:rounded-xl prose-img:shadow-sm prose-a:text-primary prose-a:no-underline hover:prose-a:underline mx-auto max-w-none">
          {children}
        </article>
      </div>

      {relatedPosts.length > 0 && (
        <section className="mx-auto mt-16 max-w-4xl border-t pt-8">
          <h2 className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
            Related Articles
          </h2>
          <div className="mt-4 space-y-1">
            {relatedPosts.map((relatedPost) => {
              const tags = getDisplayTags(relatedPost.data.tags).slice(0, 2);

              return (
                <div
                  key={relatedPost.id}
                  className="grid gap-2 rounded-sm py-2 sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:items-center"
                >
                  <time
                    dateTime={new Date(relatedPost.data.date).toISOString()}
                    className="text-muted-foreground text-sm font-semibold"
                  >
                    {relatedDate(relatedPost.data.date)}
                  </time>
                  <a
                    href={`/blog/${relatedPost.id}`}
                    className="min-w-0 text-base font-semibold leading-snug transition-colors hover:text-primary"
                  >
                    {relatedPost.data.title}
                  </a>
                  <span className="flex flex-wrap gap-2 sm:justify-end">
                    {tags.map((tag) => (
                      <a
                        key={tag}
                        href={tagFilterHref(tag)}
                        className="border-foreground/60 text-foreground rounded-sm border px-2 py-0.5 text-xs font-semibold leading-none transition-colors hover:border-primary hover:text-primary"
                      >
                        {tag}
                      </a>
                    ))}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export { BlogPost };
