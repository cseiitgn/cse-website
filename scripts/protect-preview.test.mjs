import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const script = fileURLToPath(new URL('./protect-preview.mjs', import.meta.url));
const credentials = 'review:abcdefghijklmnopqrstuvwx';

async function build(t, env, existing = '') {
  const cwd = await mkdtemp(join(tmpdir(), 'cse-preview-test-'));
  t.after(() => rm(cwd, { recursive: true, force: true }));
  await mkdir(join(cwd, 'dist'));
  await writeFile(join(cwd, 'dist', '_headers'), existing);
  const cleanEnv = { ...process.env };
  delete cleanEnv.CONTEXT;
  delete cleanEnv.NETLIFY;
  delete cleanEnv.CSE_PREVIEW_CREDENTIALS;
  const run = () => spawnSync(process.execPath, [script], { cwd, env: { ...cleanEnv, ...env }, encoding: 'utf8' });
  return { cwd, run, result: run() };
}

test('production and local builds retain their public headers', async (t) => {
  for (const env of [{ CONTEXT: 'production', CSE_PREVIEW_CREDENTIALS: credentials }, {}]) {
    const b = await build(t, env, '/public\n  X-Frame-Options: DENY\n');
    assert.equal(b.result.status, 0);
    assert.equal(await readFile(join(b.cwd, 'dist', '_headers'), 'utf8'), '/public\n  X-Frame-Options: DENY\n');
  }
});

test('previews fail closed for missing or malformed credentials', async (t) => {
  for (const value of ['', 'review:short', `${credentials}\n/*`]) {
    const b = await build(t, { CONTEXT: 'branch-deploy', CSE_PREVIEW_CREDENTIALS: value });
    assert.notEqual(b.result.status, 0);
    assert.equal(await readFile(join(b.cwd, 'dist', '_headers'), 'utf8'), '');
  }
});

test('branch and PR previews protect every path without logging credentials', async (t) => {
  for (const context of ['branch-deploy', 'deploy-preview']) {
    const b = await build(t, { CONTEXT: context, CSE_PREVIEW_CREDENTIALS: credentials }, '/old\n  X-Frame-Options: DENY\n');
    assert.equal(b.result.status, 0);
    assert.equal(b.run().status, 0);
    const headers = await readFile(join(b.cwd, 'dist', '_headers'), 'utf8');
    assert.match(headers, /X-Frame-Options: DENY/);
    assert.equal(headers.split('Basic-Auth:').length, 2);
    assert.ok(headers.includes(`/*\n  Basic-Auth: ${credentials}`));
    assert.match(headers, /X-Robots-Tag: noindex, nofollow, noarchive/);
    assert.equal(await readFile(join(b.cwd, 'dist', 'robots.txt'), 'utf8'), 'User-agent: *\nDisallow: /\n');
    assert.ok(!`${b.result.stdout}${b.result.stderr}`.includes(credentials));
  }
});

test('an unknown hosted context cannot publish an unprotected preview', async (t) => {
  const b = await build(t, { NETLIFY: 'true' });
  assert.notEqual(b.result.status, 0);
});
