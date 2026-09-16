// Explicit opt-in for local previews; Netlify's production context always wins.
export const IS_STAGING = process.env.CONTEXT !== 'production' &&
  (process.env.BRANCH === 'staging' || process.env.STAGING_PREVIEW === 'true');
