import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const root = resolve('dist');
const pages = [];
function visit(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) visit(file);
    else if (file.endsWith('.html')) pages.push(file);
  }
}
visit(root);

const missing = [];
let contactForms = 0;
const sitemapIndexPath = join(root, 'sitemap-index.xml');
const sitemapPath = join(root, 'sitemap-0.xml');
assert.equal(existsSync(sitemapIndexPath), true, 'Missing sitemap index');
assert.equal(existsSync(sitemapPath), true, 'Missing child sitemap');
const sitemapIndex = readFileSync(sitemapIndexPath, 'utf8');
assert.match(sitemapIndex, /^<\?xml[^?]*\?>\s*<sitemapindex\b/s, 'Sitemap index must be valid XML');
const childSitemaps = [...sitemapIndex.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url);
assert.deepEqual(childSitemaps, ['https://instalberrozpe.com/sitemap-0.xml'], 'Unexpected child sitemap URL');
const sitemapXml = readFileSync(sitemapPath, 'utf8');
assert.match(sitemapXml, /^<\?xml[^?]*\?>\s*<urlset\b/s, 'Child sitemap must be valid XML');
const sitemapUrls = [...sitemapXml.matchAll(/<url>\s*<loc>(.*?)<\/loc>/g)].map(([, url]) => url);
assert.equal(sitemapUrls.length, 44, `Expected 44 sitemap URLs, found ${sitemapUrls.length}`);
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length, 'Sitemap contains duplicate URLs');
assert.ok(sitemapUrls.every((url) => url.startsWith('https://instalberrozpe.com/')), 'Sitemap URLs must be absolute HTTPS URLs');
const pagesByCanonical = new Map();
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  contactForms += (html.match(/action="\/api\/contact"/g) ?? []).length;
  if (page !== join(root, 'index.html')) {
    const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
    assert.ok(canonical?.startsWith('https://instalberrozpe.com/'), `Missing absolute canonical in ${page}`);
    assert.match(html, /<title>[^<]+<\/title>/i, `Missing title in ${page}`);
    assert.match(html, /<meta\b[^>]*name="description"[^>]*content="[^"]+"/i, `Missing description in ${page}`);
    assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, `Expected one H1 in ${page}`);
    assert.doesNotMatch(html, /"aggregateRating"\s*:/i, `Self-serving LocalBusiness aggregate rating found in ${page}`);
    assert.equal((html.match(/<iframe\b[^>]*src="https:\/\/www\.google\.com\/maps/gi) ?? []).length, 0, `Google Maps iframe found in ${page}`);
    const alternates = [...html.matchAll(/<link\b[^>]*rel="alternate"[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"/gi)].map(([, lang, href]) => [lang, href]);
    assert.deepEqual(alternates.map(([lang]) => lang).sort(), ['ca', 'de', 'en', 'es', 'x-default'], `Incomplete hreflang set in ${page}`);
    pagesByCanonical.set(canonical, { html, alternates });
  }
  for (const [, rawPath] of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const pathname = decodeURIComponent(rawPath.split(/[?#]/, 1)[0]);
    if (pathname === '/api/contact') continue;
    const candidates = pathname.endsWith('/')
      ? [join(root, pathname, 'index.html')]
      : extname(pathname)
        ? [join(root, pathname)]
        : [join(root, pathname, 'index.html'), join(root, `${pathname}.html`)];
    if (!candidates.some(existsSync)) missing.push(`${page}: ${pathname}`);
  }
}

const vercel = JSON.parse(readFileSync('vercel.json', 'utf8'));
const legacy = JSON.parse(readFileSync('content/shared/redirects.json', 'utf8')).redirects;
const redirectSources = new Set(vercel.redirects.map((redirect) => redirect.source));
const absentRedirects = legacy.filter(({ from }) => !redirectSources.has(from)).map(({ from }) => from);
const extraRedirects = vercel.redirects
  .filter(({ source }) => !legacy.some(({ from }) => from === source))
  .map(({ source, destination }) => ({ source, destination }))
  .sort((a, b) => a.source.localeCompare(b.source));

assert.equal(pages.length, 45, `Expected 45 HTML pages, found ${pages.length}`);
assert.equal(contactForms, 4, `Expected four localized contact forms, found ${contactForms}`);
assert.equal(existsSync(join(root, 'form-handler.php')), false, 'Legacy PHP handler must not be in dist');
assert.equal(pagesByCanonical.size, 44, 'Expected one canonical localized page per indexable URL');
for (const url of sitemapUrls) assert.ok(pagesByCanonical.has(url), `Sitemap URL is not a generated canonical page: ${url}`);
for (const [canonical, page] of pagesByCanonical) {
  const locale = new URL(canonical).pathname.split('/')[1];
  for (const [lang, href] of page.alternates) {
    assert.ok(pagesByCanonical.has(href), `hreflang target is missing: ${href}`);
    if (lang !== 'x-default') {
      const target = pagesByCanonical.get(href);
      assert.ok(target.alternates.some(([targetLang, targetHref]) => targetLang === locale && targetHref === canonical), `Non-reciprocal hreflang ${canonical} -> ${href}`);
    }
  }
}
const robots = readFileSync(join(root, 'robots.txt'), 'utf8');
assert.match(robots, /Allow:\s*\//i, 'robots.txt must allow crawling');
assert.match(robots, /Sitemap:\s*https:\/\/instalberrozpe\.com\/sitemap-index\.xml/i, 'robots.txt must advertise the sitemap');
assert.ok(!/Disallow:\s*\//i.test(robots), 'robots.txt must not block the site');
assert.ok(!/name="privacy"|privacyRequired/i.test(pages.map((page) => readFileSync(page, 'utf8')).join('\n')), 'Privacy notice must not require an acceptance checkbox');
assert.deepEqual(absentRedirects, [], 'Vercel redirect table must retain every content redirect');
assert.equal(legacy.length, 29, `Expected 29 content redirects, found ${legacy.length}`);
assert.equal(vercel.redirects.length, 31, `Expected 31 Vercel redirect rules, found ${vercel.redirects.length}`);
assert.equal(redirectSources.size, vercel.redirects.length, 'Vercel redirect table contains duplicate sources');
assert.deepEqual(extraRedirects, [
  { source: '/servicios/', destination: '/es/servicios/' },
  { source: '/sitemap_index.xml', destination: '/sitemap-index.xml' },
], 'Unexpected Vercel compatibility redirects');
assert.deepEqual(missing, [], `Missing local resources/routes:\n${missing.join('\n')}`);
console.log(`PASS: ${pages.length} HTML pages, ${sitemapUrls.length} sitemap URLs, canonical/hreflang/H1/metadata, ${contactForms} localized forms, local href/src resources, ${legacy.length} content redirects plus ${extraRedirects.length} compatibility rules (${vercel.redirects.length} total); no PHP handler or embedded Google Maps.`);

