import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// Netlify supplies CONTEXT. Protect every non-production deploy from this branch.
// Local builds and production remain public; previews fail if credentials are absent.
const context = process.env.CONTEXT;
if (context === 'production' || context === 'dev' || (!context && !process.env.NETLIFY)) {
  console.log('Public/local build: no preview authentication added.');
} else {
  if (!['branch-deploy', 'deploy-preview'].includes(context)) {
    throw new Error('Unknown Netlify context; refusing an unprotected deploy.');
  }

  const credentials = process.env.CSE_PREVIEW_CREDENTIALS ?? '';
  if (!/^[A-Za-z0-9_-]+:[A-Za-z0-9_-]{20,}$/.test(credentials)) {
    throw new Error('Set CSE_PREVIEW_CREDENTIALS to username:password (URL-safe password, at least 20 characters).');
  }

  const headersPath = join(process.cwd(), 'dist', '_headers');
  let existing = '';
  try {
    existing = await readFile(headersPath, 'utf8');
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  const marker = '# CSE preview protection';
  existing = existing.split(marker)[0].trimEnd();
  // Authentication runs in the edge function; never put credentials in dist.
  await writeFile(headersPath, `${existing}\n${marker}\n/*\n  X-Robots-Tag: noindex, nofollow, noarchive\n`);
  await writeFile(join(process.cwd(), 'dist', 'robots.txt'), 'User-agent: *\nDisallow: /\n');
  console.log('Preview credentials validated and no-index rules generated.');
}
