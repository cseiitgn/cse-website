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

test("featured videos show local thumbnails without loading players before play", () => {
  for (const path of ["research/ai", "research/theory", "research/systems", "research/data-science", "updates/outreach"]) {
    const page = parse(read(`dist/${path}/index.html`));
    assert.equal(walk(page, (n) => n.tagName === "iframe").length, 0, path);
    const buttons = walk(page, (n) => n.tagName === "button" && attr(n, "data-research-video"));
    assert.equal(buttons.length, 1, path);
    const images = walk(buttons[0], (n) => n.tagName === "img");
    assert.equal(images.length, 1, `${path} thumbnail`);
    const src = attr(images[0], "src");
    assert.ok(src.startsWith("/images/videos/"));
    assert.ok(fs.statSync("dist" + src).size < 30000);
    assert.ok(Number(attr(images[0], "width")) > 0);
    assert.ok(Number(attr(images[0], "height")) > 0);
    assert.equal(attr(images[0], "loading"), "lazy");
  }
});

test("faculty groups retain the stream corrections supplied by Nipun", () => {
  const names = (slug) => walk(parse(read(`dist/research/${slug}/index.html`)), (n) => n.tagName === "h3").map(content);
  const theory = names("theory"), systems = names("systems"), ai = names("ai");
  assert.ok(theory.includes("Anup Kalbalia"));
  for (const name of ["Ajay Singh", "Manisha Padala"]) assert.ok(!theory.includes(name), name);
  for (const name of ["Anup Kalbalia", "Manisha Padala", "Nipun Batra"]) assert.ok(!systems.includes(name), name);
  for (const name of ["Manisha Padala", "Nipun Batra"]) assert.ok(ai.includes(name), name);
  assert.ok(systems.includes("Ajay Singh"));
});

test("changelog has a dated email summary and working links", () => {
  if (!fs.existsSync("dist/changelog/index.html")) {
    assert.doesNotMatch(read("dist/index.html"), /href="\/changelog\/"/);
    return;
  }
  const page = parse(read("dist/changelog/index.html"));
  assert.match(read("dist/index.html"), /href="\/changelog\/"/);
  assert.equal(walk(page, n => attr(n, "id") === "2026-09-16").length, 1);
  assert.equal(walk(page, n => n.tagName === "button" && attr(n, "data-copy-summary") !== undefined).length, 1);
  const changes = walk(page, n => attr(n, "data-change-text") !== undefined).map(content);
  assert.ok(changes.some(text => /12 featured alumni/.test(text)));
  assert.ok(changes.some(text => /research-area assignments/.test(text)));
  assert.ok(changes.some(text => /thumbnail images/.test(text)));
  for (const link of walk(page, n => n.tagName === "a")) {
    const href = attr(link, "href");
    if (!href?.startsWith("/") || href.startsWith("//")) continue;
    const path = new URL(href, "https://cse.iitgn.ac.in").pathname;
    assert.ok(fs.existsSync("dist" + path) || fs.existsSync("dist" + path + "/index.html"), href);
  }
});

const content = (n) =>
  n.nodeName === "#text" ? n.value : (n.childNodes ?? []).map(content).join("");
const hasClass = (n, c) => (attr(n, "class") ?? "").split(/\s+/).includes(c);

test("every research area has a named heading and a destination", () => {
  for (const path of ["dist/index.html", "dist/research/index.html"]) {
    const rows = walk(parse(read(path)), (n) => hasClass(n, "research-row"));
    assert.equal(rows.length, 3);
    assert.deepEqual(
      rows.map((row) =>
        content(walk(row, (n) => n.tagName === "h2")[0])
          .replace("↗", "")
          .trim(),
      ),
      ["Theory", "Systems", "AI & Machine Learning"],
    );
    assert.deepEqual(
      rows.map((row) => attr(walk(row, (n) => n.tagName === "a")[0], "href")),
      ["/research/theory", "/research/systems", "/research/ai"],
    );
  }
});

test("research navigation groups the three areas inside a submenu", () => {
  const submenus = walk(
    dom,
    (n) => n.tagName === "details" && hasClass(n, "nav-submenu"),
  );
  assert.equal(submenus.length, 1);
  assert.match(content(submenus[0]), /Research areas/);
  assert.deepEqual(
    walk(submenus[0], (n) => n.tagName === "a")
      .map((n) => attr(n, "href"))
      .sort(),
    ["/research/ai", "/research/systems", "/research/theory"],
  );
});

test("typography is independently selected and rejects unknown values", () => {
  const source = read("src/components/layout/ThemeHead.astro").match(
    /<script is:inline>([\s\S]*?)<\/script>/,
  )[1];
  for (const [query, expected] of [
    ["?q=forest&type=editorial", "editorial"],
    ["?type=system", "system"],
    ["?type=garbage", "modern"],
    ["", "modern"],
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
          throw Error("blocked");
        },
      },
    });
    assert.equal(document.documentElement.dataset.typography, expected);
  }
});

test("administration matches the superseding signed order and separate DFAC approval", () => {
  const html = read("dist/about/administration/index.html");
  const admin = parse(html);
  const roles = walk(admin, (n) => hasClass(n, "admin-role")).map((n) => [
    content(walk(n, (c) => c.tagName === "dt")[0]),
    content(walk(n, (c) => c.tagName === "dd")[0]),
  ]);
  assert.equal(roles.length, 17);
  for (const [role, names] of [
    [
      "PG admissions and programmes",
      "Ajay Singh, Sameer Kulkarni, Jyothi Krishnan",
    ],
    ["PG supervisor allocation", "Abhishek Bichhawat, Manoj Gupta"],
    ["UG/PG graduation plan and claim verification", "Bireswar Das"],
    ["CDS representatives", "Anirban Dasgupta, Arjun Arul"],
    ["PhD qualifying examinations", "Balagopal Komarath, Anup Kalbalia"],
    ["UG/PG project courses and thesis grades", "Manoj Gupta, Adithya Kumar"],
    ["Website and communications", "Nipun Batra, Manu Awasthi"],
    ["Department vision", "Manoj Gupta, Shouvick Mondal"],
    ["Department visitors", "Abhishek Bichhawat, Manisha Padala"],
  ])
    assert.equal(
      roles.find(([title]) => title.trim().startsWith(role))?.[1],
      names,
      role,
    );
  assert.doesNotMatch(html, /Office order|CSE\/HOD\/|DFA\//i);
  assert.match(html, /1 September 2026–31 August 2027/);
  assert.match(html, /10 September 2026/);
  assert.doesNotMatch(html, /19 September 2025|Bireshwar/);
});

test("verified faculty photographs have local files and recorded provenance", () => {
  const faculty = parse(read("dist/people/faculty/index.html"));
  const photos = [
    ...JSON.parse(read("src/data/official-portraits.json")),
    ...JSON.parse(read("src/data/supplementary-portraits.json")),
  ].filter((p) => p.path.startsWith("/images/faculty/"));
  assert.equal(photos.length, 31);
  const displayed = walk(faculty, (n) => n.tagName === "img").map((n) =>
    attr(n, "src"),
  );
  for (const photo of photos) {
    assert.ok(displayed.includes(photo.path), photo.name);
    assert.ok(photo.profile.startsWith("https://"));
    assert.ok(fs.statSync("public" + photo.path).size < 60000);
    assert.ok(photo.width <= 320 && photo.height <= 360);
  }
  assert.match(content(faculty), /Joint Appointments/);
});

test("section overview pages have usable content and obsolete registration is removed", () => {
  for (const section of ["about", "people", "academics"]) {
    const html = read(`dist/${section}/index.html`);
    assert.match(html, /class="overview-links"/);
    assert.doesNotMatch(
      html,
      /http-equiv="refresh"|coming soon|under construction/i,
    );
  }
  const deadlines = read("dist/updates/deadlines/index.html");
  assert.match(deadlines, /15 September 2026/);
  assert.doesNotMatch(deadlines, /sqqoh4JftBfKYA1b8|>Register</);
  assert.match(read("dist/updates/seminars/index.html"), /Mainack Mondal/);
});

test('breadcrumbs retain a Home link and the section hierarchy', () => {
  const admin = parse(read('dist/about/administration/index.html'));
  const breadcrumb = walk(admin, n => n.tagName === 'nav' && attr(n, 'aria-label') === 'Breadcrumb')[0];
  assert.deepEqual(walk(breadcrumb, n => n.tagName === 'a').map(n => [content(n).trim(), attr(n, 'href')]), [['Home', '/'], ['About', '/about']]);
  assert.match(content(breadcrumb), /Administration/);
});


test('visitors includes recent seminar speakers, links to talks, and identifies online talks', () => {
  const page = parse(read('dist/people/visitors/index.html'));
  const main = walk(page, n => n.tagName === 'main')[0];
  const rows = walk(main, n => n.tagName === 'article');
  assert.equal(rows.length, 56);
  assert.equal(rows.filter(row => content(row).includes('VenkataKeerthy')).length, 1);
  const dates = rows.map(row => attr(walk(row, n => n.tagName === 'time')[0], 'datetime'));
  assert.equal(dates[0], '2026-09-10');
  assert.deepEqual(dates, [...dates].sort().reverse());
  assert.equal(dates.filter(date => date > '2026-03-27').length, 13);
  for (const name of ['Vineeth Chintala', 'Ambarish Ojha', 'Ranjani Krishnan', 'Arnav Gupta', 'Mainack Mondal', 'Devashree Tripathy']) assert.ok(rows.some(row => content(row).includes(name)), name);
  const seminars = parse(read('dist/updates/seminars/index.html'));
  const ids = new Set(walk(seminars, n => attr(n, 'id')).map(n => attr(n, 'id')));
  for (const link of walk(main, n => n.tagName === 'a')) {
    const href = attr(link, 'href');
    if (href.startsWith('/updates/seminars#')) assert.ok(ids.has(href.split('#')[1]), href);
  }
  const online = rows.find(row => content(row).includes('Anindita Maiti'));
  assert.match(content(online), /Online talk/);
  assert.doesNotMatch(content(main), /Research Proposal Session/);
});

test('public copy omits internal orders and editorial housekeeping', () => {
  for (const path of ['about/administration', 'updates/deadlines', 'updates/events', 'updates/news', 'people/faculty']) {
    const main = walk(parse(read(`dist/${path}/index.html`)), n => n.tagName === 'main')[0];
    assert.doesNotMatch(content(main), /Office order|DFA\/2026|CSE\/HOD|circulated by the HoD|Administrative placeholders|upcoming-sheet|verified items|Photographs from/);
  }
});
