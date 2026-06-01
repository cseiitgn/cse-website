# Publications Implementation Plan

Goal: build `/research/publications` from generated, normalized data that Astro
can import at build time, then add client-side filtering by text, person, area,
year, and venue.

## Data Shape

The ingestion script writes `src/data/publications/publications.json`:

```json
{
  "generatedAt": "2026-06-01T00:00:00.000Z",
  "items": [
    {
      "id": "semantic-scholar-paper-id",
      "title": "Paper title",
      "year": 2026,
      "venue": "Conference or journal",
      "type": "conference",
      "authors": [{ "name": "Author", "facultyId": "faculty-id" }],
      "facultyIds": ["faculty-id"],
      "areaSlugs": ["ai", "systems"],
      "abstract": "Optional abstract",
      "keywords": ["optional"],
      "links": {
        "doi": "10.xxxx/yyyy",
        "pdf": "https://...",
        "semanticScholar": "https://...",
        "dblp": "https://..."
      },
      "source": {
        "provider": "semantic-scholar",
        "externalId": "author-or-paper-id",
        "updatedAt": "2026-06-01T00:00:00.000Z"
      },
      "searchText": "lowercased denormalized text for filtering"
    }
  ]
}
```

## Source Registry

`src/data/publications/sources.json` holds one row per faculty member with:

- stable `facultyId`
- display `name`
- `aliases` for author matching
- `areaSlugs`
- optional `semanticScholarAuthorId`
- optional `dblpPid`
- optional profile URLs

The current registry is intentionally empty of external IDs because the repo did
not contain any local source URLs. Once IDs are filled, the script can pull data.

## Ingestion Script

`scripts/ingest-publications.mjs` currently supports Semantic Scholar author
pulls using built-in Node `fetch`, normalizes the papers, deduplicates by DOI or
title, and writes Astro-importable JSON.

Immediate next steps:

1. Add faculty source IDs: Semantic Scholar author IDs first, DBLP PIDs second.
2. Decide canonical research area slugs and map each faculty member to them.
3. Add manual override support for missing/high-priority publications.
4. Build `/research/publications` as a React island with filters:
   - text search over title, authors, venue, abstract, keywords
   - person filter
   - research area filter
   - year range
   - venue/type filter
5. Add a CI/build check that fails if generated publication JSON is malformed.
