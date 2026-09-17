import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { parse } from 'parse5';
import { build } from 'esbuild';
const posts = JSON.parse(fs.readFileSync('media-posts/posts.json', 'utf8'));
const walk = n => [n, ...(n.childNodes ?? []).flatMap(walk)];
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value;
const result = await build({ stdin: { contents: "export { allDepartmentNews } from './src/data/news';", resolveDir: process.cwd() }, bundle: true, platform: 'node', format: 'esm', write: false });
const { allDepartmentNews } = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);

test('award archive contains every award once, newest years first', () => {
  const dom = parse(fs.readFileSync('dist/awards/index.html', 'utf8'));
  const ids = walk(dom).filter(n => n.tagName === 'article').map(n => attr(n, 'id'));
  assert.deepEqual(ids, allDepartmentNews.filter(n => n.category === 'award').map(n => n.id));
});

test('internal poster collection is absent from deployed pages, assets and navigation', () => {
  assert.ok(!fs.existsSync('dist/media-posts'));
  for (const file of fs.readdirSync('dist', { recursive: true }).filter(p => /\.(html|xml|js)$/.test(p) && fs.statSync('dist/'+p).isFile())) {
    assert.doesNotMatch(fs.readFileSync('dist/'+file, 'utf8'), /\/media-posts(?:\/|["'])|Media posts|Posters &amp; captions/);
  }
  for (const id of ['qif-india-2026', 'tcs-phd-fellowships-2026']) {
    const item = allDepartmentNews.find(p => p.id === id);
    assert.equal(item.sourceUrl, '/awards/#'+id);
  }
});

test('local collection has complete exports, captions and preferred geometric designs', () => {
  assert.equal(new Set(posts.map(p => p.slug)).size, posts.length);
  const gallery = fs.readFileSync('media-posts/index.html', 'utf8');
  for (const post of posts) {
    assert.ok(['gaussian', 'low-poly'].includes(post.preferredTemplate));
    assert.ok(post.templates.includes(post.preferredTemplate));
    assert.equal(fs.readFileSync(`media-posts/exports/${post.slug}/caption.txt`, 'utf8').trim(), post.caption);
    for (const template of post.templates) {
      for (const ext of ['png', 'pdf']) assert.ok(fs.statSync(`media-posts/exports/${post.slug}/${template}.${ext}`).size > 1000);
      assert.ok(fs.statSync(`media-posts/exports/${post.slug}/${template}-preview.webp`).size < 180000);
      assert.ok(gallery.includes(`exports/${post.slug}/${template}.png`));
    }
    for (const person of post.people) {
      if (person.image) assert.ok(fs.existsSync('media-posts/'+person.image));
      else assert.ok(['team','fellows-roster'].includes(post.layout), 'Portrait-free layouts must credit every person by name');
    }
  }
});

test('poster facts distinguish winners, advisers and historical award years', () => {
  const tcs = posts.find(p => p.slug === 'tcs-phd-fellowships-2026');
  assert.equal(tcs.date, '2026-08-03');
  assert.equal(tcs.effectiveDate, '1 July 2026');
  assert.equal(tcs.people.find(p => p.name === 'Ayush Shrivastava').advisers, 'Prof. Nipun Batra and Prof. Mayank Goel');
  assert.equal(tcs.people.find(p => p.name === 'Rohit Narayanan').advisers, 'Prof. Balagopal Komarath');
  const qif = posts.find(p => p.slug === 'qif-india-2026');
  assert.deepEqual(qif.people.filter(p => p.role === 'QIF 2026 winner').map(p => p.name), ['Arjun Badola', 'Dikshit Hegde']);
  assert.equal(qif.people.find(p => p.name === 'Prof. Shanmuganathan Raman').role, 'Faculty adviser');
  assert.equal(posts.find(p => p.slug === 'google-phd-fellowship-2025').displayDate, '2025');
  const stoc = posts.find(p => p.slug === 'anirban-stoc-test-of-time-2024');
  assert.equal(stoc.displayDate, '2024');
  for (const author of ['Anirban Dasgupta', 'Ravi Kumar', 'Tamás Sarlós']) assert.ok(stoc.creditLines.includes(author));
});

test('awards page displays selected previews while downloads stay in the repository', () => {
  const media=JSON.parse(fs.readFileSync('src/data/award-media.json','utf8'));
  const page=parse(fs.readFileSync('dist/awards/index.html','utf8'));
  const nodes=walk(page);
  for(const post of posts){
    assert.equal(post.palette,'dark-blue-white');
    const selected=media[post.awardId];assert.ok(selected);
    const article=nodes.find(n=>n.tagName==='article' && attr(n,'id')===post.awardId);assert.ok(article);
    const preview=selected.base+'/preview.webp';
    assert.ok(walk(article).some(n=>n.tagName==='img' && attr(n,'src')===preview));
    assert.ok(fs.readFileSync('dist'+preview).equals(fs.readFileSync('media-posts/exports/'+post.slug+'/'+post.preferredTemplate+'-preview.webp')));
    for(const filename of ['poster.png','poster.pdf','caption.txt']){
      const href=selected.base+'/'+filename;
      assert.ok(!nodes.some(n=>n.tagName==='a' && attr(n,'href')===href));
      assert.ok(!fs.existsSync('dist'+href), href+' must not be published');
    }
    assert.ok(fs.statSync('dist'+selected.base+'/preview.webp').size<180000);
  }
});

test('every requested award through Dharaben has selected media and a complete roster', () => {
  const expected = ['qif-india-2026','tcs-phd-fellowships-2026','indiaai-phd-fellowships-2026','comsnets-2026-mcp-diag','himanshu-msr-fulbright','inter-iit-2025-algorithmic-optimisation','inter-iit-2025-game-development','inter-iit-2025-isro-geospatial','gayatri-google-phd-fellowship','dharaben-acm-india-dda'];
  for(const id of expected){
    const post=posts.find(p=>p.awardId===id);assert.ok(post,id);
    const award=allDepartmentNews.find(p=>p.id===id);assert.ok(award);
    for(const person of post.people){
      assert.ok(award.people.includes(person.name), `${person.name} must match the award roster`);
      if(post.layout==='team')assert.ok(post.peopleLines.includes(person.name));
    }
  }
  const indiaAI=posts.find(p=>p.awardId==='indiaai-phd-fellowships-2026');
  assert.deepEqual(indiaAI.people.map(p=>[p.name,p.advisers]),[['Naren Kumar','Prof. Mayank Singh'],['Manvendra Singh','Prof. Anirban Dasgupta'],['Dikshit Hegde','Prof. Shanmuganathan Raman']]);
  assert.equal(posts.find(p=>p.awardId==='inter-iit-2025-isro-geospatial').people.length,6);
});
