import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';

test('staging features require opt-in and are always excluded from production', async () => {
  for (const [context, branch, flag, expected] of [
    ['production', 'main', 'true', false],
    ['production', 'staging', 'true', false],
    ['branch-deploy', 'staging', '', true],
    ['branch-deploy', 'other', '', false],
    ['', '', '', false],
    ['', '', 'true', true],
  ]) {
    const bundle = await build({
      entryPoints: ['src/lib/staging.ts'], bundle: true, write: false, format: 'esm',
      define: {
        'process.env.CONTEXT': JSON.stringify(context),
        'process.env.BRANCH': JSON.stringify(branch),
        'process.env.STAGING_PREVIEW': JSON.stringify(flag),
      },
    });
    const result = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);
    assert.equal(result.IS_STAGING, expected, `${context}/${branch}/${flag}`);
  }
});
