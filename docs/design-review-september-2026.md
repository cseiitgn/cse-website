# CSE design review — September 2026

Review deployment: https://staging--cseiitgn.netlify.app/

## Shareable themes

- Navy: https://staging--cseiitgn.netlify.app/?q=navy
- Forest: https://staging--cseiitgn.netlify.app/?q=forest
- Terracotta: https://staging--cseiitgn.netlify.app/?q=terracotta

The same query works on every page. Internal navigation preserves the chosen
palette, other query parameters, and fragment links. External links are not
modified. Invalid palettes fall back to navy. The small head script applies
colours before first paint; blocked local storage does not prevent rendering.
Dark mode is a separate preference, available for each palette.

Typography uses self-hosted Geist throughout, replacing Imprima, Rubik, and
EB Garamond. The header, footer, search, and homepage use native HTML with small
scripts. Faculty filters continue to use React, with server-rendered content.

## Feedback addressed

- Official IITGN identity in the header and footer.
- Local, compressed official portraits for 25 faculty and both staff members.
- Three research groups: Theory, Systems, AI & Machine Learning. Faculty may
  appear in multiple groups. Security, data science, and HCI remain accessible
  as subtopics at their existing URLs. Group membership is an editorial
  interpretation of public research interests, for faculty review before release.
- Four August–September CSE seminars added, with dates, speakers, venues, and
  concise summaries. The homepage shows the latest dated talks directly.
- Theory Day registration is closed; the event page retains the schedule.
- Removed the events archive's hardcoded 1 June 2026 cutoff. Upcoming/ongoing
  classification now uses the institute's date at build time and includes an
  event through its end date. The page displays its classification date.
- Existing sourced awards remain dated and newest-first; no unverified award
  announcements were added. The non-functional newsletter form is replaced
  with the working RSS subscription link.

## Image and faculty sources

Official directory: https://iitgn.ac.in/faculty/cse

Logo source: https://iitgn.ac.in/assets/img/IITGN-5.png

`src/data/official-portraits.json` records each original image URL, official
profile, local asset, dimensions, and retrieval date (14 September 2026).
Images are WebP, at most 320 × 360 pixels, with explicit layout dimensions and
lazy loading. The original composition is preserved in the stored image;
portrait cards use a square centre crop in CSS.

The official directory includes Adithya Kumar, Ajay Singh, Joycee M. Mekie,
and Krishna Prasad Miyapuram, now added to the roster. Abhishek Bichhawat's and
Bireswar Das's titles and Jyothi Krishnan's spelling were aligned with IITGN.
Existing guest appointments were retained pending departmental review.

Usable official portraits were not found for Adithya Kumar (the official
image is a blank grey placeholder), Samit Bhattacharya, Viraj Shah, Madhavan
Unnikrishnan Nair, Ambarish Ojha, and K. Gopinath. Their cards retain initials.
No substitute or generated headshots are used.

The homepage community photograph is the repository's existing
`public/images/people/mega-menu-group.jpeg`, resized into responsive WebP
variants. It is not presented as a photograph of the entire department.

## Seminar sources

Department-wide invitations sent by Abhishek Bichhawat in the IITGN mailbox:

- 8 September: Dr. Vineeth Chintala, 10 September, 5 pm, AB 13/126;
  “Forbidden Structures; Two Landmarks in Graph Colouring”.
- 7 September: Mr. Ambarish Ojha, 9 September, 3:30 pm, AB 13/124;
  “Data Centers: The Factories of the Digital Age”.
- 21 August: Dr. Ranjani Krishnan, VSSC/ISRO, 27 August, 2:30 pm, AB 13/404.
  The invitation supplied an abstract but no formal title; the site uses the
  descriptive heading “Invited talk: verification of safety-critical software”.
- 18 August: Mr. Arnav Gupta, Meta, 20 August, 11:30 am, AB 13/124;
  “From Inside-Out to Outside-In Learning in the age of LLMs and AGI”.

Only public seminar details were transcribed; mailbox data and correspondence
are not shipped to the site.

## Performance and verification

Measured from the generated build, not a claim about end-user network latency:

| Measure                     |          Before |                             After |
| --------------------------- | --------------: | --------------------------------: |
| Homepage React islands      |               5 |                                 0 |
| Preloaded font files        |               5 |                                 2 |
| Initial homepage hero image | 1,480,401 bytes | 35,442 / 66,772 bytes, responsive |
| Footer JavaScript bundle    |   307,214 bytes |                           Removed |
| Homepage inline JavaScript  |               — |                      About 2.5 KB |

The redesign also removes the global route spinner, image carousel timers,
preloading of hidden navigation imagery, and React dependency downloads on
static pages. The interactive publications and course catalogues still load
their own React code and datasets when visited.

Checks: 69-page Astro build; 14 Node checks including preview access protection,
static links/assets, script budget, palette fallback with blocked storage,
research routes, faculty rendering, and closed registration. Browser review
covers desktop and phone widths, theme navigation, faculty filters, search,
and dark mode. Preview authentication continues to gate pages and assets.

The optional whole-repository TypeScript check reports six existing errors in
unmodified FAQ, pricing, 404, and publication components. It is not part of the
repository's build gate; the changed TypeScript files have no reported errors.

## Keeping content current

1. Add confirmed public talks to `src/data/seminars.ts`, dated events to
   `src/data/events.ts`, and sourced achievements to `src/data/news.ts`.
2. Include an ISO date and a source; do not infer an event date from a year-only
   listing. Supply `endDate` for multi-day events.
3. Update the portrait manifest only after matching a photograph to its official
   faculty profile; preserve initials when a usable image is unavailable.
4. Run `npm run build` and `node --test scripts/*.test.mjs`, then push to `staging`.
5. Review the protected URL before merging to `main`.

The static site refreshes date classification on a build. It does not scrape
mail or publish updates automatically. Future event records require a rebuild
when they finish; their visible classification date makes stale builds evident.
