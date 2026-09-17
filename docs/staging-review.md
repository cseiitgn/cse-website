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
- The GitHub workflow runs build and authentication checks only.
  It replaces the obsolete CLI deployment to site ID
  `e20cb60a-0bfa-48dc-9e8e-5925b0c86ccd`, whose latest runs failed at deploy time.

## Password protection

`scripts/protect-preview.mjs` runs after the Netlify build. In branch and PR
preview contexts it requires `CSE_PREVIEW_CREDENTIALS` and generates Netlify
no-index headers and `robots.txt`. Missing or malformed credentials stop the build.
`netlify/edge-functions/preview-auth.js` enforces HTTP Basic authentication before
serving any preview path, including assets, and prevents shared response caching.
Production is identified by Netlify's deploy context and remains public.

The credential is marked secret in Netlify and set only for Deploy Previews and
branch deploys. It is never committed to Git. A local copy for the maintainer
is in the ignored `.codex/staging-access.json` file. Share it privately with
reviewers. To rotate it, update the variable and rebuild staging. Older immutable
deploys may retain the credential with which they were built.

Netlify reference: https://docs.netlify.com/build/edge-functions/api/

## Local commands

```sh
npm ci
npm run build
node --test scripts/*.test.mjs
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
   Use dated, verified source information. The baseline homepage promoted
   the past Theory Day event of 17 June 2026 as registration-open.

The September review implements these revisions on `staging`. See
[the design review](design-review-september-2026.md) for theme links, sources,
performance measurements, remaining portrait gaps, and content maintenance.
