import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { parse } from 'parse5';
import { build } from 'esbuild';
const posts = JSON.parse(fs.readFileSync('media-posts/posts.json', 'utf8'));
const read = path => fs.readFileSync(`dist${path}`, 'utf8');
const walk = n => [n, ...(n.childNodes ?? []).flatMap(walk)];
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value;
const text = n => n.value ?? (n.childNodes ?? []).map(text).join('');
const result = await build({ stdin: { contents: "export { allDepartmentNews } from './src/data/news';", resolveDir: process.cwd() }, bundle: true, platform: 'node', format: 'esm', write: false });
const { allDepartmentNews } = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);

test('award archive contains every award once, newest years first', () => {
  const dom = parse(read('/awards/index.html'));
  const ids = walk(dom).filter(n => n.tagName === 'article').map(n => attr(n, 'id'));
  const awards = allDepartmentNews.filter(n => n.category === 'award');
  assert.equal(ids.length, awards.length);
  assert.deepEqual(ids, awards.map(n => n.id));
});

test('media posts have consistent people, captions, small previews and working downloads', () => {
  assert.equal(new Set(posts.map(p => p.slug)).size, posts.length);
  for (const post of posts) {
    const html = read(`/media-posts/${post.slug}/index.html`);
    const dom = parse(html);
    for (const person of post.people) assert.ok(text(dom).includes(person.name), person.name);
    assert.ok(text(dom).includes(post.caption));
    assert.equal(read(`/media-posts/${post.slug}/caption.txt`).trim(), post.caption);
    for (const template of post.templates) {
      for (const ext of ['png', 'pdf']) assert.ok(fs.statSync(`dist/media-posts/${post.slug}/${template}.${ext}`).size > 1000);
      assert.ok(fs.statSync(`dist/media-posts/${post.slug}/${template}-preview.webp`).size < 160000);
    }
    for (const n of walk(dom).filter(n => ['a', 'img'].includes(n.tagName))) {
      const href = attr(n, 'href') ?? attr(n, 'src');
      if (!href?.startsWith('/') || href.startsWith('//')) continue;
      const path = new URL(href, 'https://cse.iitgn.ac.in').pathname;
      assert.ok(fs.existsSync('dist'+path) || fs.existsSync('dist'+path+'/index.html'), path);
    }
    assert.doesNotMatch(html, /TCS Confidential|mail\.google\.com|MoU|tcs\.rsp@|acceptance by scholar/i);
  }
});

test('TCS selection date, effective date and adviser relationships remain distinct', () => {
  const post = posts.find(p => p.slug === 'tcs-phd-fellowships-2026');
  assert.equal(post.date, '2026-08-03');
  assert.equal(post.effectiveDate, '1 July 2026');
  assert.equal(post.people.find(p => p.name === 'Ayush Shrivastava').advisers, 'Prof. Nipun Batra and Prof. Mayank Goel');
  assert.equal(post.people.find(p => p.name === 'Rohit Narayanan').advisers, 'Prof. Balagopal Komarath');
});

test('QIF winners and adviser are labelled separately and illustrations described', () => {
  const post = posts.find(p => p.slug === 'qif-india-2026');
  assert.deepEqual(post.people.filter(p => p.role === 'QIF 2026 winner').map(p => p.name), ['Arjun Badola', 'Dikshit Hegde']);
  assert.equal(post.people.find(p => p.name === 'Prof. Shanmuganathan Raman').role, 'Faculty adviser');
  assert.match(read(`/media-posts/${post.slug}/index.html`), /conceptual illustrations, not results/);
});
