import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OUTPUT_PATH = path.resolve(
  "src/data/publications/dblp-career-faculty.json",
);

const REQUEST_DELAY_MS = 2500;
const MAX_RETRIES = 6;
const USER_AGENT = "cse-website-publication-ingest/0.1 (https://iitgn.ac.in/)";

const CAREER_FACULTY = [
  {
    id: "rajat-moona",
    name: "Rajat Moona",
    category: "core",
    dblpPid: "16/2265",
    defaultAreas: ["systems"],
  },
  {
    id: "anirban-dasgupta",
    name: "Anirban Dasgupta",
    category: "core",
    dblpPid: "54/385-1",
    defaultAreas: ["theory", "data-science"],
  },
  {
    id: "bireswar-das",
    name: "Bireswar Das",
    category: "core",
    dblpPid: "93/3858",
    defaultAreas: ["theory"],
  },
  {
    id: "neeldhara-misra",
    name: "Neeldhara Misra",
    category: "core",
    dblpPid: "85/6789",
    defaultAreas: ["theory", "ai"],
  },
  {
    id: "nipun-batra",
    name: "Nipun Batra",
    category: "core",
    dblpPid: "19/2128",
    defaultAreas: ["ai", "data-science", "systems"],
  },
  {
    id: "manoj-d-gupta",
    name: "Manoj D Gupta",
    category: "core",
    dblpPid: "05/5157-2",
    defaultAreas: ["theory", "data-science"],
  },
  {
    id: "mayank-singh",
    name: "Mayank Singh",
    category: "core",
    dblpPid: "96/4770",
    defaultAreas: ["ai", "data-science"],
  },
  {
    id: "sameer-g-kulkarni",
    name: "Sameer G Kulkarni",
    category: "core",
    dblpPid: "185/5705",
    defaultAreas: ["systems"],
  },
  {
    id: "balagopal-komarath",
    name: "Balagopal Komarath",
    category: "core",
    dblpPid: "124/2629",
    defaultAreas: ["theory"],
  },
  {
    id: "abhishek-bichhawat",
    name: "Abhishek Bichhawat",
    category: "core",
    dblpPid: "61/10308",
    defaultAreas: ["security"],
  },
  {
    id: "yogesh-kumar-meena",
    name: "Yogesh Kumar Meena",
    category: "core",
    dblpPid: "66/10604",
    defaultAreas: ["hci", "ai"],
  },
  {
    id: "shouvick-mondal",
    name: "Shouvick Mondal",
    category: "core",
    dblpPid: "167/4011",
    defaultAreas: ["theory"],
  },
  {
    id: "manisha-padala",
    name: "Manisha Padala",
    category: "core",
    dblpPid: "213/8101",
    defaultAreas: ["ai", "data-science"],
  },
  {
    id: "shanmuganathan-raman",
    name: "Shanmuganathan Raman",
    category: "affiliated",
    dblpPid: "70/4688",
    defaultAreas: ["ai", "hci"],
  },
  {
    id: "udit-bhatia",
    name: "Udit Bhatia",
    category: "affiliated",
    dblpPid: "199/7860",
    defaultAreas: ["ai", "data-science"],
  },
  {
    id: "krishna-prasad-miyapuram",
    name: "Krishna Prasad Miyapuram",
    category: "affiliated",
    dblpPid: "00/4508",
    defaultAreas: ["hci", "ai"],
  },
  {
    id: "jyoti-krishnan",
    name: "Jyoti Krishnan",
    category: "teaching",
    dblpPid: null,
    defaultAreas: [],
  },
  {
    id: "manu-awasthi",
    name: "Manu Awasthi",
    category: "practice",
    dblpPid: "75/2883",
    defaultAreas: ["systems"],
  },
  {
    id: "anup-kalbalia",
    name: "Anup Kalbalia",
    category: "practice",
    dblpPid: null,
    defaultAreas: [],
  },
];

const AREA_RULES = [
  {
    area: "theory",
    patterns: [
      /\balgorithm(s|ic)?\b/i,
      /\bapproximation\b/i,
      /\bparameteri[sz]ed\b/i,
      /\bparameterized\b/i,
      /\bfpt\b/i,
      /\bkernel(ization)?\b/i,
      /\bcomplexity\b/i,
      /\bcombinatorial\b/i,
      /\bgraph(s)?\b/i,
      /\b(maximum|perfect|stable|popular|rank-maximal) matching\b/i,
      /\bmatching problem\b/i,
      /\bmatchings\b/i,
      /\bmatroid\b/i,
      /\bsat\b/i,
      /\bboolean\b/i,
      /\bgame theory\b/i,
      /\bvoting\b/i,
      /\bsocial choice\b/i,
      /\bcomputational geometry\b/i,
      /\bautomata\b/i,
      /\bformal language/i,
      /\bfsttcs\b/i,
      /\bsoda\b/i,
      /\bstoc\b/i,
      /\bfocs\b/i,
      /\bicalp\b/i,
      /\besa\b/i,
      /\bisaac\b/i,
      /\bstacs\b/i,
      /\bipec\b/i,
      /\bmfcs\b/i,
    ],
  },
  {
    area: "systems",
    patterns: [
      /\barchitecture\b/i,
      /\bmicroarchitecture\b/i,
      /\bprocessor\b/i,
      /\bcache\b/i,
      /\bmemory\b/i,
      /\bstorage\b/i,
      /\bcompiler\b/i,
      /\boperating system/i,
      /\bdistributed system/i,
      /\bnetwork(s)?\b/i,
      /\bnetwork-on-chip\b/i,
      /\bnoc(s)?\b/i,
      /\bhardware\b/i,
      /\bvlsi\b/i,
      /\bfpga\b/i,
      /\bembedded\b/i,
      /\bsensor(s)?\b/i,
      /\biot\b/i,
      /\bedge computing\b/i,
      /\bcloud\b/i,
      /\bdatacenter\b/i,
      /\bisca\b/i,
      /\bhpca\b/i,
      /\bmicro\b/i,
      /\basplos\b/i,
      /\bdate\b/i,
      /\bdac\b/i,
      /\baspdac\b/i,
      /\bnocs\b/i,
      /\bsigcomm\b/i,
      /\bnsdi\b/i,
      /\bosdi\b/i,
      /\bsosp\b/i,
    ],
  },
  {
    area: "ai",
    patterns: [
      /\bartificial intelligence\b/i,
      /\bmachine learning\b/i,
      /\bdeep learning\b/i,
      /\bneural\b/i,
      /\btransformer(s)?\b/i,
      /\blanguage model(s)?\b/i,
      /\bllm(s)?\b/i,
      /\bnlp\b/i,
      /\bnatural language\b/i,
      /\bcomputer vision\b/i,
      /\bimage(s)?\b/i,
      /\bvisual\b/i,
      /\bvision-language\b/i,
      /\bsegmentation\b/i,
      /\bdetection\b/i,
      /\brecognition\b/i,
      /\bclassification\b/i,
      /\bprediction\b/i,
      /\brecommender\b/i,
      /\breinforcement learning\b/i,
      /\bgenerative\b/i,
      /\bdiffusion\b/i,
      /\blatent\b/i,
      /\brepresentation learning\b/i,
      /\bembedding(s)?\b/i,
      /\bgnn(s)?\b/i,
      /\bgraph neural\b/i,
      /\bclustering\b/i,
      /\bknowledge graph\b/i,
      /\baaai\b/i,
      /\bicml\b/i,
      /\biclr\b/i,
      /\bneurips\b/i,
      /\bnips\b/i,
      /\bijcai\b/i,
      /\bcvpr\b/i,
      /\biccv\b/i,
      /\beccv\b/i,
      /\bacl\b/i,
      /\bemnlp\b/i,
      /\bnaacl\b/i,
    ],
  },
  {
    area: "data-science",
    patterns: [
      /\bdata (science|mining|analytics|analysis)\b/i,
      /\bmining\b/i,
      /\bstream(ing)?\b/i,
      /\btime series\b/i,
      /\bstatistical\b/i,
      /\binformation retrieval\b/i,
      /\bsearch engine\b/i,
      /\branking\b/i,
      /\bsocial network(s)?\b/i,
      /\bweb graph\b/i,
      /\bknowledge discovery\b/i,
      /\bcausal\b/i,
      /\bfairness\b/i,
      /\bprivacy-preserving data\b/i,
      /\benergy disaggregation\b/i,
      /\bsmart meter(s)?\b/i,
      /\bnilm\b/i,
      /\bkdd\b/i,
      /\bwww\b/i,
      /\bwebconf\b/i,
      /\bwsdm\b/i,
      /\bcikm\b/i,
      /\bicdm\b/i,
      /\bpkdd\b/i,
      /\bsigmod\b/i,
      /\bvldb\b/i,
      /\bicde\b/i,
    ],
  },
  {
    area: "hci",
    patterns: [
      /\bhci\b/i,
      /\bhuman-computer interaction\b/i,
      /\bhuman-ai\b/i,
      /\buser(s)?\b/i,
      /\binteraction\b/i,
      /\baccessibility\b/i,
      /\bassistive\b/i,
      /\bbrain-computer interface\b/i,
      /\bbci\b/i,
      /\beeg\b/i,
      /\bcognitive\b/i,
      /\bneuro/i,
      /\bgaze\b/i,
      /\bgesture\b/i,
      /\bwearable\b/i,
      /\baugmented reality\b/i,
      /\bvirtual reality\b/i,
      /\bchi\b/i,
      /\buist\b/i,
      /\bcscw\b/i,
      /\bubicomp\b/i,
      /\biui\b/i,
      /\bassets\b/i,
    ],
  },
  {
    area: "security",
    patterns: [
      /\bsecurity\b/i,
      /\bprivacy\b/i,
      /\bcryptograph/i,
      /\bauthentication\b/i,
      /\bauthorization\b/i,
      /\bmalware\b/i,
      /\battack(s)?\b/i,
      /\bvulnerabilit(y|ies)\b/i,
      /\bprogram analysis\b/i,
      /\binformation flow\b/i,
      /\bverification\b/i,
      /\bblockchain\b/i,
      /\btrusted\b/i,
      /\bside-channel\b/i,
      /\bccs\b/i,
      /\bndss\b/i,
      /\busenix security\b/i,
      /\bieee s(&| and | )p\b/i,
      /\beurosp\b/i,
      /\basiaccs\b/i,
      /\bcsf\b/i,
      /\bcrypto\b/i,
      /\beurocrypt\b/i,
    ],
  },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchText(url) {
  let lastError;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "user-agent": USER_AGENT },
      });

      if (response.ok) {
        return response.text();
      }

      lastError = new Error(`${response.status} ${response.statusText}`);
      if (response.status !== 429 && response.status < 500) {
        throw lastError;
      }
    } catch (error) {
      lastError = error;
    }

    const waitMs = REQUEST_DELAY_MS * attempt * 2;
    console.warn(`Retrying ${url} after ${waitMs}ms (${lastError.message})`);
    await sleep(waitMs);
  }

  throw lastError;
}

function decodeXml(value = "") {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replace(/&#([0-9]+);/g, (_, dec) =>
      String.fromCodePoint(Number.parseInt(dec, 10)),
    )
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function parseAttributes(attributeText = "") {
  const attributes = {};
  const attributeRegex = /([a-zA-Z_:][\w:.-]*)="([^"]*)"/g;
  let match;

  while ((match = attributeRegex.exec(attributeText))) {
    attributes[match[1]] = decodeXml(match[2]);
  }

  return attributes;
}

function firstTag(block, tagName) {
  const match = block.match(
    new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)</${tagName}>`),
  );
  return match ? decodeXml(match[1]) : undefined;
}

function allTags(block, tagName) {
  const values = [];
  const regex = new RegExp(
    `<${tagName}\\b([^>]*)>([\\s\\S]*?)</${tagName}>`,
    "g",
  );
  let match;

  while ((match = regex.exec(block))) {
    values.push({
      attributes: parseAttributes(match[1]),
      text: decodeXml(match[2]),
    });
  }

  return values;
}

function classifyType(entryName, attributes, venue) {
  if (entryName === "inproceedings") return "conference";
  if (entryName === "proceedings") return "proceedings";
  if (entryName === "incollection") return "book-chapter";
  if (entryName === "book") return "book";
  if (entryName === "phdthesis") return "phd-thesis";
  if (entryName === "mastersthesis") return "masters-thesis";
  if (entryName === "article") {
    if (attributes.publtype === "informal" || venue === "CoRR") {
      return "preprint";
    }
    return "journal";
  }
  return "other";
}

function classifyAreas(publication, facultyIds) {
  const searchText = [
    publication.title,
    publication.venue,
    publication.dblpKey,
    publication.links.ee.join(" "),
  ]
    .filter(Boolean)
    .join(" ");

  const areas = new Set();
  for (const rule of AREA_RULES) {
    if (rule.patterns.some((pattern) => pattern.test(searchText))) {
      areas.add(rule.area);
    }
  }

  if (areas.size === 0) {
    for (const facultyId of facultyIds) {
      const faculty = CAREER_FACULTY.find((member) => member.id === facultyId);
      for (const area of faculty?.defaultAreas ?? []) {
        areas.add(area);
      }
    }
  }

  return [...areas].sort();
}

function parsePerson(xml, faculty) {
  const personBlock = xml.match(/<person\b[\s\S]*?<\/person>/)?.[0] ?? "";
  const rootAttributes = parseAttributes(
    xml.match(/<dblpperson\b([^>]*)>/)?.[1] ?? "",
  );

  return {
    id: faculty.id,
    name: faculty.name,
    category: faculty.category,
    dblpPid: faculty.dblpPid,
    dblpName: rootAttributes.name,
    dblpPage: faculty.dblpPid
      ? `https://dblp.org/pid/${faculty.dblpPid}.html`
      : null,
    profileUrls: allTags(personBlock, "url").map((url) => url.text),
    affiliations: allTags(personBlock, "note")
      .filter((note) => note.attributes.type === "affiliation")
      .map((note) => note.text),
    dblpPublicationCount: Number(rootAttributes.n ?? 0),
    defaultAreas: faculty.defaultAreas,
  };
}

function parsePublications(xml) {
  const publications = [];
  const recordRegex = /<r>\s*<([a-z]+)\b([^>]*)>([\s\S]*?)<\/\1>\s*<\/r>/g;
  let match;

  while ((match = recordRegex.exec(xml))) {
    const [, entryName, attributeText, block] = match;
    const attributes = parseAttributes(attributeText);
    const authors = allTags(block, "author").map((author) => ({
      name: author.text,
      pid: author.attributes.pid,
      orcid: author.attributes.orcid,
    }));
    const editors = allTags(block, "editor").map((editor) => ({
      name: editor.text,
      pid: editor.attributes.pid,
    }));
    const ee = allTags(block, "ee").map((link) => link.text);
    const title = firstTag(block, "title");
    const year = Number(firstTag(block, "year"));
    const venue =
      firstTag(block, "booktitle") ??
      firstTag(block, "journal") ??
      firstTag(block, "school") ??
      firstTag(block, "publisher") ??
      firstTag(block, "series");

    if (!attributes.key || !title) {
      continue;
    }

    const doiUrl = ee.find((link) => link.includes("doi.org/"));
    const arxivUrl = ee.find((link) => /arxiv\.org|arXiv/i.test(link));

    publications.push({
      id: attributes.key,
      dblpKey: attributes.key,
      title,
      year: Number.isFinite(year) ? year : null,
      type: classifyType(entryName, attributes, venue),
      entryType: entryName,
      venue,
      pages: firstTag(block, "pages"),
      volume: firstTag(block, "volume"),
      number: firstTag(block, "number"),
      authors,
      editors,
      links: {
        dblp: `https://dblp.org/rec/${attributes.key}`,
        ee,
        doi: doiUrl ? doiUrl.replace(/^https?:\/\/doi\.org\//, "") : undefined,
        arxiv: arxivUrl,
      },
    });
  }

  return publications;
}

function mergePublication(existing, incoming) {
  const facultyIds = new Set([
    ...(existing.facultyIds ?? []),
    ...(incoming.facultyIds ?? []),
  ]);

  return {
    ...existing,
    ...incoming,
    facultyIds: [...facultyIds].sort(),
  };
}

async function main() {
  const facultyByPid = new Map(
    CAREER_FACULTY.filter((member) => member.dblpPid).map((member) => [
      member.dblpPid,
      member,
    ]),
  );

  const facultyProfiles = [];
  const publicationsByKey = new Map();
  const missingDblp = CAREER_FACULTY.filter((member) => !member.dblpPid).map(
    ({ id, name, category }) => ({ id, name, category }),
  );

  for (const faculty of CAREER_FACULTY) {
    if (!faculty.dblpPid) {
      continue;
    }

    const url = `https://dblp.org/pid/${faculty.dblpPid}.xml`;
    console.log(`Fetching ${faculty.name}: ${url}`);
    const xml = await fetchText(url);
    const profile = parsePerson(xml, faculty);
    facultyProfiles.push(profile);

    for (const publication of parsePublications(xml)) {
      const contributors = [...publication.authors, ...publication.editors];
      const facultyIds = contributors
        .map((author) => facultyByPid.get(author.pid)?.id)
        .filter(Boolean);

      if (!facultyIds.includes(faculty.id)) {
        facultyIds.push(faculty.id);
      }

      const normalized = {
        ...publication,
        facultyIds: [...new Set(facultyIds)].sort(),
      };
      normalized.areaKeywords = classifyAreas(
        normalized,
        normalized.facultyIds,
      );

      const existing = publicationsByKey.get(normalized.dblpKey);
      publicationsByKey.set(
        normalized.dblpKey,
        existing ? mergePublication(existing, normalized) : normalized,
      );
    }

    await sleep(REQUEST_DELAY_MS);
  }

  const publications = [...publicationsByKey.values()]
    .map((publication) => ({
      ...publication,
      areaKeywords: classifyAreas(publication, publication.facultyIds),
    }))
    .sort(
      (a, b) => (b.year ?? 0) - (a.year ?? 0) || a.title.localeCompare(b.title),
    );

  const output = {
    generatedAt: new Date().toISOString(),
    source: {
      name: "dblp",
      api: "https://dblp.org/pid/{pid}.xml",
      note: "Generated from DBLP PID XML exports for non-visiting/non-guest faculty.",
    },
    areaKeywordVocabulary: AREA_RULES.map((rule) => rule.area),
    careerFacultyScope: ["core", "affiliated", "teaching", "practice"],
    missingDblp,
    faculty: facultyProfiles.sort((a, b) => a.name.localeCompare(b.name)),
    publications,
  };

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`);

  console.log(
    `Wrote ${publications.length} unique publications for ${facultyProfiles.length} DBLP-backed faculty to ${OUTPUT_PATH}`,
  );
  if (missingDblp.length > 0) {
    console.log(
      `No DBLP PID configured for: ${missingDblp.map((member) => member.name).join(", ")}`,
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
