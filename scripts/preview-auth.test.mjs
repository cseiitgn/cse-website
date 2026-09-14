import test from 'node:test';
import assert from 'node:assert/strict';
import handler from '../netlify/edge-functions/preview-auth.js';

const credentials = 'review:abcdefghijklmnopqrstuvwx';

test('anonymous, incorrect, and malformed credentials never reach static files', async (t) => {
  t.mock.method(globalThis, 'btoa', btoa);
  globalThis.Netlify = { env: { get: () => credentials } };
  t.after(() => delete globalThis.Netlify);
  for (const path of ['/', '/people/faculty/', '/_astro/app.js', '/layout/logo.svg']) {
    for (const auth of ['', 'Basic !!!', `Basic ${btoa('review:wrong')}`, 'Bearer something']) {
      const response = await handler(new Request(`https://example.test${path}`, { headers: { Authorization: auth } }), {
        deploy: { context: 'branch-deploy' },
        next: () => { throw new Error('Unauthenticated request reached content'); },
      });
      assert.equal(response.status, 401);
      assert.match(response.headers.get('WWW-Authenticate'), /^Basic/);
      assert.equal(response.headers.get('Cache-Control'), 'private, no-store');
    }
  }
});

test('authenticated branch and PR previews return content without shared caching', async (t) => {
  globalThis.Netlify = { env: { get: () => credentials } };
  t.after(() => delete globalThis.Netlify);
  for (const context of ['branch-deploy', 'deploy-preview']) {
    const response = await handler(new Request('https://example.test/', { headers: { Authorization: `Basic ${btoa(credentials)}` } }), {
      deploy: { context },
      next: async () => new Response('Faculty directory', { headers: { Vary: 'Accept-Encoding' } }),
    });
    assert.equal(await response.text(), 'Faculty directory');
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('Cache-Control'), 'private, no-store');
    assert.match(response.headers.get('Vary'), /Accept-Encoding, Authorization/);
    assert.match(response.headers.get('X-Robots-Tag'), /noindex/);
  }
});

test('missing configuration fails closed, including unknown deploy contexts', async (t) => {
  globalThis.Netlify = { env: { get: () => undefined } };
  t.after(() => delete globalThis.Netlify);
  const response = await handler(new Request('https://example.test/'), {
    deploy: {},
    next: () => { throw new Error('Unconfigured preview exposed content'); },
  });
  assert.equal(response.status, 503);
});

test('production stays public without requiring preview credentials', async () => {
  const response = new Response('Production');
  assert.equal(await handler(new Request('https://example.test/'), {
    deploy: { context: 'production' },
    next: async () => response,
  }), response);
});
