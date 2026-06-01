import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const sourcesPath = path.join(root, 'src/data/publications/sources.json');
const outputPath = path.join(root, 'src/data/publications/publications.json');
const semanticScholarFields = [
  'paperId',
  'title',
  'year',
  'venue',
  'publicationVenue',
  'publicationTypes',
  'authors',
  'abstract',
  'externalIds',
  'url',
  'openAccessPdf',
  'fieldsOfStudy',
  's2FieldsOfStudy',
].join(',');

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const maxPapersArg = process.argv.find((arg) => arg.startsWith('--max-papers='));
const maxPapers = maxPapersArg ? Number(maxPapersArg.split('=')[1]) : 100;

function normalizeTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function inferType(publicationTypes = []) {
  const joined = publicationTypes.join(' ').toLowerCase();

  if (joined.includes('journal')) return 'journal';
  if (joined.includes('conference')) return 'conference';
  if (joined.includes('preprint')) return 'preprint';
  if (joined.includes('workshop')) return 'workshop';

  return 'other';
}

function getPaperKey(paper) {
  const doi = paper.externalIds?.DOI ?? paper.externalIds?.doi;
  if (doi) return `doi:${doi.toLowerCase()}`;
  if (paper.paperId) return `s2:${paper.paperId}`;
  return `title:${normalizeTitle(paper.title ?? '')}`;
}

function buildSearchText(publication) {
  return [
    publication.title,
    publication.venue,
    publication.year,
    publication.abstract,
    publication.authors.map((author) => author.name).join(' '),
    publication.areaSlugs.join(' '),
    publication.keywords.join(' '),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function normalizeSemanticScholarPaper(paper, source) {
  const aliases = new Set([source.name, ...(source.aliases ?? [])]);
  const authors = (paper.authors ?? []).map((author) => ({
    name: author.name,
    facultyId: aliases.has(author.name) ? source.facultyId : undefined,
  }));
  const keywords = [
    ...(paper.fieldsOfStudy ?? []),
    ...(paper.s2FieldsOfStudy ?? []).map((field) => field.category),
  ].filter(Boolean);
  const publication = {
    id: paper.paperId ? `s2:${paper.paperId}` : `title:${normalizeTitle(paper.title)}`,
    title: paper.title,
    year: paper.year,
    venue: paper.publicationVenue?.name ?? paper.venue ?? '',
    type: inferType(paper.publicationTypes),
    authors,
    facultyIds: [source.facultyId],
    areaSlugs: source.areaSlugs ?? [],
    abstract: paper.abstract ?? '',
    keywords: [...new Set(keywords)],
    links: {
      doi: paper.externalIds?.DOI ?? '',
      pdf: paper.openAccessPdf?.url ?? '',
      semanticScholar: paper.url ?? '',
      dblp: paper.externalIds?.DBLP ? `https://dblp.org/rec/${paper.externalIds.DBLP}` : '',
    },
    source: {
      provider: 'semantic-scholar',
      externalId: source.semanticScholarAuthorId,
      updatedAt: new Date().toISOString(),
    },
    searchText: '',
  };

  publication.searchText = buildSearchText(publication);
  return publication;
}

async function fetchSemanticScholarPapers(source) {
  const papers = [];
  let offset = 0;
  const pageSize = Math.min(100, maxPapers);

  while (papers.length < maxPapers) {
    const url = new URL(
      `https://api.semanticscholar.org/graph/v1/author/${source.semanticScholarAuthorId}/papers`,
    );
    url.searchParams.set('fields', semanticScholarFields);
    url.searchParams.set('limit', String(pageSize));
    url.searchParams.set('offset', String(offset));

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Semantic Scholar request failed for ${source.name}: ${response.status} ${response.statusText}`,
      );
    }

    const body = await response.json();
    papers.push(...(body.data ?? []));

    if (!body.next || body.data?.length === 0) break;
    offset = body.next;
  }

  return papers.slice(0, maxPapers);
}

async function main() {
  const sources = JSON.parse(await readFile(sourcesPath, 'utf8'));
  const configuredSources = sources.filter((source) => source.semanticScholarAuthorId);
  const byKey = new Map();

  for (const source of configuredSources) {
    const papers = await fetchSemanticScholarPapers(source);

    for (const paper of papers) {
      if (!paper.title || !paper.year) continue;
      const key = getPaperKey(paper);
      const normalized = normalizeSemanticScholarPaper(paper, source);
      const existing = byKey.get(key);

      if (existing) {
        existing.facultyIds = [...new Set([...existing.facultyIds, source.facultyId])];
        existing.areaSlugs = [...new Set([...existing.areaSlugs, ...(source.areaSlugs ?? [])])];
        existing.authors = existing.authors.map((author) => {
          if (author.facultyId) return author;
          const aliases = new Set([source.name, ...(source.aliases ?? [])]);
          return aliases.has(author.name)
            ? { ...author, facultyId: source.facultyId }
            : author;
        });
        existing.searchText = buildSearchText(existing);
      } else {
        byKey.set(key, normalized);
      }
    }
  }

  const items = [...byKey.values()].sort(
    (a, b) => b.year - a.year || a.title.localeCompare(b.title),
  );
  const output = {
    generatedAt: configuredSources.length > 0 ? new Date().toISOString() : null,
    items,
  };

  if (dryRun) {
    console.log(
      `Would write ${items.length} publications from ${configuredSources.length} configured sources.`,
    );
    return;
  }

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`);
  console.log(
    `Wrote ${items.length} publications from ${configuredSources.length} configured sources to ${outputPath}.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
