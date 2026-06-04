'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { ArrowRight, FileText, Search, X } from 'lucide-react';

import { cn } from '@/lib/utils';

const PAGES = [
  { title: 'Faculty', href: '/people/faculty', section: 'People' },
  { title: 'Alumni', href: '/people/alumni', section: 'People' },
  { title: 'Staff', href: '/people/staff', section: 'People' },
  { title: 'Research Scholars', href: '/people/students', section: 'People' },
  { title: 'Postdoctoral Researchers', href: '/people/postdocs', section: 'People' },
  { title: 'Visitors', href: '/people/visitors', section: 'People' },
  { title: 'B.Tech Program', href: '/academics/btech', section: 'Academics' },
  { title: 'M.Tech Program', href: '/academics/mtech', section: 'Academics' },
  { title: 'PhD Program', href: '/academics/phd', section: 'Academics' },
  { title: 'Courses', href: '/academics/courses', section: 'Academics' },
  { title: 'Research Areas', href: '/research', section: 'Research' },
  { title: 'Labs & Groups', href: '/research/labs', section: 'Research' },
  { title: 'Publications', href: '/research/publications', section: 'Research' },
  { title: 'News', href: '/news', section: 'Updates' },
  { title: 'Events', href: '/events', section: 'Updates' },
  { title: 'Blog', href: '/blog', section: 'Updates' },
  { title: 'About', href: '/about', section: 'About' },
  { title: 'Leadership', href: '/about/leadership', section: 'About' },
  { title: 'Contact', href: '/about/contact', section: 'About' },
  { title: 'Careers', href: '/about/careers', section: 'Careers' },
];

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim()
    ? PAGES.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.section.toLowerCase().includes(query.toLowerCase()),
      )
    : PAGES;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, handleKeyDown]);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[10vh]">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="bg-background relative w-full max-w-xl overflow-hidden rounded-xl border shadow-2xl">
        {/* Search input */}
        <div className="flex items-center gap-3 border-b px-4 py-3">
          <Search className="text-muted-foreground size-5 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, people, programs..."
            className="placeholder:text-muted-foreground flex-1 bg-transparent text-base outline-none"
          />
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="size-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="text-muted-foreground px-3 py-8 text-center text-sm">
              No results found for "{query}"
            </div>
          ) : (
            filtered.map((page) => (
              <a
                key={page.href}
                href={page.href}
                onClick={onClose}
                className="hover:bg-muted flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors"
              >
                <FileText className="text-muted-foreground size-4 shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{page.title}</p>
                  <p className="text-muted-foreground text-xs">{page.section}</p>
                </div>
                <ArrowRight className="text-muted-foreground size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))
          )}
        </div>

        {/* Footer hint */}
        <div className="text-muted-foreground border-t px-4 py-2 text-xs">
          <kbd className="bg-muted rounded px-1.5 py-0.5 font-mono text-[10px]">
            Esc
          </kbd>{' '}
          to close
        </div>
      </div>
    </div>
  );
}
