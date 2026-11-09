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
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  contactForms += (html.match(/action="\/api\/contact"/g) ?? []).length;
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

assert.equal(pages.length, 45, `Expected 45 HTML pages, found ${pages.length}`);
assert.equal(contactForms, 4, `Expected four localized contact forms, found ${contactForms}`);
assert.equal(existsSync(join(root, 'form-handler.php')), false, 'Legacy PHP handler must not be in dist');
assert.deepEqual(absentRedirects, [], 'Vercel redirect table must retain every content redirect');
assert.deepEqual(missing, [], `Missing local resources/routes:\n${missing.join('\n')}`);
console.log(`PASS: ${pages.length} HTML pages, ${contactForms} localized forms, all local href/src resources, ${legacy.length} legacy redirects; no PHP handler.`);

