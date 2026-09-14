# CSE website review setup

## Repository and access

- Repository: https://github.com/cseiitgn/cse-website
- Local checkout: `/Users/nipun/git/cse-website`
- `nipunbatra` has collaborator write access (verified 14 September 2026).
- `cseiitgn` is a personal account, so it remains the sole administrator. GitHub
  requires organization ownership to grant a separate repository Admin role.
  Do not transfer the repository or convert the account without an agreed plan
  for ownership and the existing Netlify integration.

## Production and staging

- Production: https://cse.iitgn.ac.in/ from `main`.
- Netlify project: `cseiitgn`, ID `c2e7f629-abc2-4430-9c1f-5243785c36c1`.
- Staging branch: `staging`.
- Expected branch URL: https://staging--cseiitgn.netlify.app/
- Netlify's existing GitHub integration builds and deploys the website.
- The GitHub workflow on `staging` runs build and authentication checks only.
  It replaces the obsolete CLI deployment to site ID
  `e20cb60a-0bfa-48dc-9e8e-5925b0c86ccd`, whose latest runs failed at deploy time.
  The workflow on `main` stays unchanged until this branch is merged.

## Password protection

`scripts/protect-preview.mjs` runs after the Netlify build. In branch and PR
preview contexts it requires `CSE_PREVIEW_CREDENTIALS` and generates Netlify
HTTP Basic Auth rules for every path, plus no-index headers and `robots.txt`.
Missing or malformed credentials stop the build. Production and local builds
do not receive authentication rules.

The credential is marked secret in Netlify and set only for Deploy Previews and
branch deploys. It is never committed to Git. A local copy for the maintainer
is in the ignored `.codex/staging-access.json` file. Share it privately with
reviewers. To rotate it, update the variable and rebuild staging. Older immutable
deploys retain the credential with which they were built.

Netlify reference: https://www.netlify.com/blog/restricting-access-to-netlify-sites-with-passwords/

## Local commands

```sh
npm ci
node --test scripts/protect-preview.test.mjs
npm run build
npm run dev
```

If the machine-wide npm cache has permission errors, use
`npm ci --cache .codex/npm-cache` without modifying shared cache permissions.

Push review changes to `staging`, inspect the password-protected preview, then
merge to `main` only after review approval. A `main` push publishes the live site.

## Feedback captured from the forwarded email

Source: “Fwd: Revisions for CSE Website”, forwarded by Neeldhara Misra on
14 August 2026, quoting the Head of CSE's email of 16 July 2026.

1. Add IITGN logos and faculty/staff photographs where needed.
   Relevant files: `src/components/layout/logo.tsx`, `public/layout/`,
   `src/data/faculty.ts`, `src/data/staff.ts`, and the people pages.
2. Organize research around Theory, Systems, and AI/ML, with relevant faculty.
   Relevant files: `src/data/research-area-pages.ts`,
   `src/components/sections/research-areas.tsx`, and `src/pages/research/`.
   Faculty may belong to more than one group; confirm assignments before release.
3. Improve the color theme and visual design while preserving navigation and
   accessibility. Prepare and review the design on staging.
4. Keep speakers, events, and awards current. Relevant sources include
   `src/data/seminars.ts`, `src/data/events.ts`, and `src/data/news.ts`.
   Use dated, verified source information. The current homepage still promotes
   the past Theory Day event of 17 June 2026 as registration-open.

This staging setup preserves the current website content as a review baseline;
the four content/design revisions remain pending.
