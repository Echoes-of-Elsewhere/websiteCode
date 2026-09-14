import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const args = new Set(process.argv.slice(2));
const production = args.has('--production');
const expectedBase = process.argv.find((value) => value.startsWith('--base='))?.slice(7) ?? '/websiteCode/';
const expectedSite = process.argv.find((value) => value.startsWith('--site='))?.slice(7) ?? 'https://echoes-of-elsewhere.github.io';

if (!fs.existsSync(dist)) {
  console.error(`Missing build directory: ${dist}`);
  process.exit(1);
}

const htmlFiles = [];
const walk = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (entry.name.endsWith('.html')) htmlFiles.push(fullPath);
  }
};
walk(dist);

const failures = [];
const localReference = /(?:href|src|poster)=(["'])(.*?)\1/gi;
const localCssUrl = /url\((["']?)(.*?)\1\)/gi;
const ignored = /^(?:#|mailto:|tel:|data:|javascript:|https?:|\/\/)/i;

const checkReference = (reference, sourceFile) => {
  if (!reference || ignored.test(reference)) return;
  const withoutQuery = decodeURIComponent(reference.split(/[?#]/, 1)[0]);
  if (!withoutQuery) return;
  let target;
  if (withoutQuery.startsWith('/')) {
    const pathWithoutBase = expectedBase !== '/' && withoutQuery.startsWith(expectedBase)
      ? withoutQuery.slice(expectedBase.length)
      : withoutQuery.slice(1);
    target = path.join(dist, pathWithoutBase);
  } else {
    target = path.resolve(path.dirname(sourceFile), withoutQuery);
  }
  if (!fs.existsSync(target)) failures.push(`${path.relative(process.cwd(), sourceFile)} -> ${reference} (missing ${target})`);
};

for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, 'utf8');
  if (/YOUR_FORM_ID|href=["']#(["']|\s)/i.test(html)) {
    failures.push(`${path.relative(process.cwd(), htmlFile)} contains a placeholder or empty link`);
  }
  for (const match of html.matchAll(localReference)) checkReference(match[2], htmlFile);
  for (const match of html.matchAll(localCssUrl)) checkReference(match[2], htmlFile);
}

const cssFiles = [];
const walkCss = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walkCss(fullPath);
    else if (entry.name.endsWith('.css')) cssFiles.push(fullPath);
  }
};
walkCss(dist);
for (const cssFile of cssFiles) {
  const css = fs.readFileSync(cssFile, 'utf8');
  for (const match of css.matchAll(localCssUrl)) checkReference(match[2], cssFile);
}

if (production) {
  const cnamePath = path.join(dist, 'CNAME');
  if (!fs.existsSync(cnamePath)) failures.push('Production build is missing dist/CNAME');
  if (expectedBase !== '/') failures.push(`Production build must use base "/", got ${expectedBase}`);
  const expectedOrigin = new URL(expectedSite).origin;
  for (const htmlFile of htmlFiles) {
    const html = fs.readFileSync(htmlFile, 'utf8');
    const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1];
    if (canonical && !canonical.startsWith(expectedOrigin)) {
      failures.push(`${path.relative(process.cwd(), htmlFile)} canonical does not use ${expectedOrigin}`);
    }
  }
} else if (fs.existsSync(path.join(dist, 'CNAME'))) {
  failures.push('Staging build unexpectedly contains dist/CNAME');
}

if (failures.length) {
  console.error(`Build verification failed (${failures.length} issue${failures.length === 1 ? '' : 's'}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Verified ${htmlFiles.length} HTML page${htmlFiles.length === 1 ? '' : 's'} and ${cssFiles.length} stylesheet${cssFiles.length === 1 ? '' : 's'}.`);
