# Site Map and Content Cadence To-Do

Cadence classes:

- `x0`: permanent fixtures, rarely change
- `xN`: change on a need-to basis
- `xF`: change frequently on a regular cadence
- `xI`: change infrequently on a regular cadence

## Current Summary

Most routes are still template placeholders. The exceptions are the homepage shell,
faculty directory, blog machinery, `/news`, `/updates/news`, and the research
landing page. Blog content is still Lumen/template material and should be treated
as placeholder content even though the route works.

## x0 Permanent Fixtures

| Route | Current state | To-do |
|---|---|---|
| `/about` | Placeholder | Write department overview and history. |
| `/about/vision` | Placeholder | Add CSE vision/mission copy. |
| `/about/facilities` | Placeholder | Add labs, classrooms, compute, and shared facilities. |
| `/about/visit` | Placeholder | Add campus directions and visitor guidance. |
| `/about/careers` | Placeholder | Add standing careers page; current ads can link out. |
| `/about/contact` | Placeholder | Add office contacts, map, and generic inquiry channels. |
| `/academics` | Placeholder | Build academics landing page. |
| `/academics/btech` | Placeholder | Add program structure, curriculum links, outcomes. |
| `/academics/mtech` | Placeholder | Add tracks, admissions, curriculum, assistantship notes. |
| `/academics/emasters` | Placeholder | Add executive program copy and canonical links. |
| `/academics/phd` | Placeholder | Add admissions, milestones, funding, expectations. |
| `/research` | Functional landing grid | Replace stock imagery/copy with canonical research areas and lab links. |
| `/research/ai` | Placeholder | Add area page with faculty, labs, projects, publications. |
| `/research/data-science` | Placeholder | Add area page with faculty, labs, projects, publications. |
| `/research/hci` | Placeholder | Add area page with faculty, labs, projects, publications. |
| `/research/security` | Placeholder | Add area page with faculty, labs, projects, publications. |
| `/research/systems` | Placeholder | Add area page with faculty, labs, projects, publications. |
| `/research/theory` | Placeholder | Add area page with faculty, labs, projects, publications. |
| `/research/labs` | Placeholder | Add research group/lab directory. |
| `/privacy-policy` | Template legal boilerplate | Replace or remove until approved text exists. |
| `/terms-and-conditions` | Template legal boilerplate | Replace or remove until approved text exists. |
| `/404` | Functional template | Rewrite copy for IITGN CSE. |
| `/rss.xml` | Functional, points at template blog | Recheck after blog migration. |

## xN Need-Based Updates

| Route | Current state | To-do |
|---|---|---|
| `/people/faculty` | Functional directory, sparse data | Add photos, homepages, areas, profile links, and verify future join dates. |
| `/people/postdocs` | Placeholder | Add current postdoc roster and archive policy. |
| `/people/staff` | Placeholder | Add staff directory and role ownership. |
| `/people/visitors` | Placeholder | Add visitor roster with dates and host. |
| `/academics/openings` | Placeholder | Add JRF/SRF/internship announcements and expiry workflow. |
| `/research/patents` | Placeholder | Add patents/IP list. |
| `/updates/outreach` | Placeholder | Add outreach items and decide whether it is updates-only or a full page. |
| `/events` | Placeholder; overlaps `/updates/events` | Decide canonical route and redirect/alias the other. |
| `/updates/events` | Placeholder; overlaps `/events` | Decide canonical route and content model. |
| `/people` | Meta-refresh hub | Replace with a real people hub or implement a proper Astro redirect. |

## xF Frequent Cadence

| Route | Current state | To-do |
|---|---|---|
| `/` | Functional shell; latest news/awards wired; hero still uses stock media | Keep recent items fed from data; replace stock hero imagery/copy. |
| `/news` | Content-backed listing from media checklist | Continue verifying and adding confirmed items; decide taxonomy with seminars/events. |
| `/updates/news` | Alias content-backed listing | Decide whether to keep as canonical or redirect to `/news`. |
| `/blog` | Functional but template content | Replace Lumen posts with CSE posts or hide route. |
| `/blog/[...slug]` | Functional but template post layout/copy | Retheme and replace related-post behavior after content migration. |
| `/updates/blog` | Placeholder; duplicates `/blog` | Redirect to `/blog` or make updates section canonical. |
| `/updates/seminars` | Placeholder | Add seminar calendar/archive feed. |
| `/research/publications` | Placeholder | Replace with generated publication dataset and filter UI. |

## xI Infrequent Regular Cadence

| Route | Current state | To-do |
|---|---|---|
| `/people/students` | Placeholder | Add student roster or cohort links; update once per term. |
| `/people/phd-students` | Placeholder | Add current PhD roster; update once per term. |
| `/people/alumni` | Placeholder | Add alumni roster/highlights; update once per term. |
| `/research/projects` | Placeholder | Add funded R&D projects; review once per term. |
| `/about/administration` | Placeholder | Add committees/roles; annual rotation update. |
| `/about/leadership` | Placeholder | Decide if separate from administration; update with leadership changes. |
| `/academics/courses` | Placeholder | Add course catalogue and term offerings. |
| `/academics/srip` | Placeholder | Add annual SRIP information and review cycle. |
| `/academics/vsrp` | Placeholder | Add VSRP information and term-cycle updates. |
| `/updates/deadlines` | Placeholder | Add admissions/program deadlines; review each cycle. |

## Faculty xF Source Inventory

The repo currently has no faculty external profile or publication-source URLs in
`src/data/faculty.ts`. The faculty directory can already render a homepage icon
when `homepage` is present, but every record is empty today.

| Faculty | Local xF/publication source status |
|---|---|
| Rajat Moona | Missing homepage/publication source |
| Anirban Dasgupta | Missing homepage/publication source |
| Bireswar Das | Missing homepage/publication source |
| Neeldhara Misra | Missing homepage/publication source |
| Nipun Batra | Missing homepage/publication source |
| Manoj D Gupta | Missing homepage/publication source |
| Mayank Singh | Missing homepage/publication source |
| Sameer G Kulkarni | Missing homepage/publication source |
| Balagopal Komarath | Missing homepage/publication source |
| Abhishek Bichhawat | Missing homepage/publication source |
| Yogesh Kumar Meena | Missing homepage/publication source |
| Shouvick Mondal | Missing homepage/publication source |
| Manisha Padala | Missing homepage/publication source |
| Shanmuganathan Raman | Missing homepage/publication source |
| Udit Bhatia | Missing homepage/publication source |
| Krishna Prasad Miyapuram | Missing homepage/publication source |
| Jyoti Krishnan | Missing homepage/publication source |
| Manu Awasthi | Missing homepage/publication source |
| Anup Kalbalia | Missing homepage/publication source |
| Nirmal Kumar Sancheti | Missing homepage/publication source |
| Samit Bhattacharya | Missing homepage/publication source |
| Venkatesh Raman | Missing homepage/publication source |
| Viraj Shah | Missing homepage/publication source |
| Madhavan Unnikrishnan Nair | Missing homepage/publication source |
| Yuvraj Patel | Missing homepage/publication source |
| Subir Verma | Missing homepage/publication source |
| Ambarish Ojha | Missing homepage/publication source |
| K. Gopinath | Missing homepage/publication source |
