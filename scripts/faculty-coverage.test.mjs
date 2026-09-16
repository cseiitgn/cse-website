import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { build } from "esbuild";
import { parse } from "parse5";

const bundle = await build({
  stdin: {
    contents: `export { FACULTY } from './src/data/faculty';
      export { RESEARCH_GROUPS } from './src/data/research-groups';
      export { RESEARCH_AREAS } from './src/data/research-area-pages';
      export { FACULTY_ALLOCATIONS, validateAllocationCoverage } from './src/data/faculty-allocations';`,
    resolveDir: process.cwd(),
  },
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
});
const { FACULTY, RESEARCH_GROUPS, RESEARCH_AREAS, FACULTY_ALLOCATIONS, validateAllocationCoverage } = await import(
  `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString("base64")}`
);

const memberships = (name) => RESEARCH_GROUPS
  .filter((group) => group.area.faculty.some((member) => member.name === name))
  .map((group) => group.slug).sort();

test("research lists contain unique names from the faculty directory", () => {
  const names = new Set(FACULTY.map((member) => member.name));
  assert.equal(names.size, FACULTY.length, "Duplicate faculty directory entry");
  const pages = [
    ...RESEARCH_GROUPS.map((group) => [group.slug, group.area]),
    ...Object.entries(RESEARCH_AREAS),
  ];
  for (const [slug, area] of pages) {
    const members = area.faculty.map((member) => member.name);
    assert.equal(new Set(members).size, members.length, `Duplicate faculty in ${slug}`);
    for (const name of members) assert.ok(names.has(name), `${slug}: unknown faculty ${name}`);
  }
});

test("every faculty category and area matches the current allocation", () => {
  assert.equal(FACULTY_ALLOCATIONS.length, FACULTY.length);
  for (const member of FACULTY) {
    const allocation = FACULTY_ALLOCATIONS.find(item => item.name === member.name);
    assert.ok(allocation, `Missing allocation for ${member.name}`);
    assert.equal(member.category, allocation.category);
    assert.deepEqual(memberships(member.name), [...allocation.areas].sort());
  }
  assert.deepEqual(memberships("Jyothi Krishnan"), ["theory"]);
  assert.deepEqual(memberships("Samit Bhattacharya"), []);
  assert.deepEqual(memberships("Anirban Dasgupta"), ["ai"]);
  assert.deepEqual(memberships("Shouvick Mondal"), ["systems"]);
});

test("coverage validation rejects new, removed, or duplicate directory entries", () => {
  assert.throws(() => validateAllocationCoverage([...FACULTY, { name: "New faculty member" }]), /Missing: New faculty member/);
  assert.throws(() => validateAllocationCoverage(FACULTY.slice(1)), /unknown:/);
  assert.throws(() => validateAllocationCoverage([...FACULTY, FACULTY[0]]), /mismatch/);
});

test("faculty without areas stay in the directory without a public allocation-status section", () => {
  const overview = readFileSync("dist/research/index.html", "utf8");
  assert.doesNotMatch(overview, /unallocated|do not currently have an area allocation/i);
  const directory = readFileSync("dist/people/faculty/index.html", "utf8");
  const unallocated = FACULTY_ALLOCATIONS.filter(member => !member.areas.length).map(member => member.name).sort();
  for (const name of unallocated) assert.ok(directory.includes(name), name);
  for (const area of Object.values(RESEARCH_AREAS)) {
    for (const name of unallocated) assert.ok(!area.faculty.some(member => member.name === name), name);
  }
});

const walk = (node) => [node, ...(node.childNodes ?? []).flatMap(walk)];
const textContent = (node) => node.value ?? (node.childNodes ?? []).map(textContent).join("");
test("every assigned faculty member appears once in the rendered group list", () => {
  for (const group of RESEARCH_GROUPS) {
    const document = parse(readFileSync(`dist/research/${group.slug}/index.html`, "utf8"));
    const names = walk(document)
      .filter((node) => node.tagName === "a" && node.attrs?.some((attr) =>
        attr.name === "aria-label" && attr.value.startsWith("Open profile for ")))
      .map((node) => node.attrs.find((attr) => attr.name === "aria-label").value.slice(17));
    const headings = walk(document).filter((node) => node.tagName === "h3").map(textContent);
    for (const member of group.area.faculty) {
      assert.equal(headings.filter((name) => name === member.name).length, 1,
        `${group.slug}: missing or repeated faculty card for ${member.name}`);
      if (member.profile) assert.equal(names.filter((name) => name === member.name).length, 1);
    }
  }
});
