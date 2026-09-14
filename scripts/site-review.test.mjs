import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { parse } from "parse5";

const read = (path) => fs.readFileSync(path, "utf8");
const attr = (node, key) => node.attrs?.find((a) => a.name === key)?.value;
const walk = (node, predicate) => [
  ...(predicate(node) ? [node] : []),
  ...(node.childNodes ?? []).flatMap((child) => walk(child, predicate)),
];
const home = read("dist/index.html");
const dom = parse(home);

test("homepage renders content without React and stays within the script budget", () => {
  assert.equal(walk(dom, (n) => n.tagName === "astro-island").length, 0);
  assert.match(home, /Computer Science/);
  assert.match(home, /Vineeth Chintala/);
  assert.equal(
    walk(dom, (n) => n.tagName === "link" && attr(n, "as") === "font").length,
    2,
  );
  const scripts = walk(dom, (n) => n.tagName === "script");
  const bytes = scripts.reduce(
    (sum, n) =>
      sum +
      (attr(n, "src")
        ? fs.statSync("dist" + attr(n, "src")).size
        : Buffer.byteLength(
            n.childNodes?.map((c) => c.value ?? "").join("") ?? "",
          )),
    0,
  );
  assert.ok(bytes < 12000, `Homepage JavaScript is ${bytes} bytes`);
  assert.doesNotMatch(
    home,
    /route-preloader|registration is open|theory-of-computing.png/,
  );
});

test("all visible homepage links and local assets resolve in the static build", () => {
  const nodes = walk(dom, (n) =>
    ["a", "img", "script", "link"].includes(n.tagName),
  );
  for (const node of nodes) {
    const url = attr(node, "href") ?? attr(node, "src");
    if (!url?.startsWith("/") || url.startsWith("//")) continue;
    const path = new URL(url, "https://cse.iitgn.ac.in").pathname;
    assert.ok(
      fs.existsSync("dist" + path) ||
        fs.existsSync("dist" + path + "/index.html"),
      `Missing ${path}`,
    );
  }
});

test("palette bootstrap honours a valid URL and survives disabled browser storage", () => {
  const source = read("src/components/layout/ThemeHead.astro").match(
    /<script is:inline>([\s\S]*?)<\/script>/,
  )[1];
  for (const [query, expected] of [
    ["?q=forest", "forest"],
    ["?q=terracotta", "terracotta"],
    ["?q=invalid", "navy"],
    ["", "navy"],
  ]) {
    const document = {
      documentElement: { dataset: {}, classList: { toggle() {} } },
    };
    vm.runInNewContext(source, {
      URLSearchParams,
      location: { search: query },
      document,
      localStorage: {
        getItem() {
          throw new Error("Storage blocked");
        },
      },
    });
    assert.equal(document.documentElement.dataset.palette, expected);
  }
});

test("research has exactly three main groups; old topic URLs remain usable", () => {
  const research = parse(read("dist/research/index.html"));
  assert.equal(
    walk(
      research,
      (n) => n.tagName === "article" && attr(n, "class") === "research-row",
    ).length,
    3,
  );
  for (const slug of [
    "theory",
    "systems",
    "ai",
    "security",
    "data-science",
    "hci",
  ])
    assert.ok(fs.existsSync(`dist/research/${slug}/index.html`));
  assert.match(read("dist/research/systems/index.html"), /Abhishek Bichhawat/);
  assert.match(read("dist/research/ai/index.html"), /Udit Bhatia/);
});

test("faculty and official photographs exist before JavaScript loads", () => {
  const faculty = read("dist/people/faculty/index.html");
  assert.match(faculty, /Abhishek Bichhawat/);
  assert.match(faculty, /images\/faculty\/nipun-batra.webp/);
  const photos = JSON.parse(read("src/data/official-portraits.json"));
  assert.equal(
    photos.filter((p) => p.path.startsWith("/images/faculty/")).length,
    25,
  );
  for (const photo of photos) {
    assert.equal(new URL(photo.source).hostname, "iitgn.ac.in");
    assert.ok(
      photo.width > 0 &&
        photo.width <= 320 &&
        photo.height > 0 &&
        photo.height <= 360,
    );
    assert.ok(
      fs.statSync("public" + photo.path).size < 60000,
      `${photo.name} photo exceeds budget`,
    );
    assert.ok(fs.existsSync("dist" + photo.path));
  }
});

test("expired Theory Day registration is closed and the old event cutoff is gone", () => {
  const event = read("dist/events/theory-day-2026/index.html");
  assert.match(event, /Registration closed/);
  assert.doesNotMatch(
    event,
    /Register now|Open registration form|Registration is open/,
  );
  assert.doesNotMatch(
    read("dist/updates/events/index.html"),
    /as of 1 Jun 2026/,
  );
});
