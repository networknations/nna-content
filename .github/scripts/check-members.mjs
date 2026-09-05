#!/usr/bin/env node
// Validates a website/index_members.md file the way the site build will read it.
// Fails (exit 1) on: YAML parse errors in either section, entries without a name,
// control characters, UTF-8 mojibake, or non-http(s) image/link URLs.
//
// Usage: node scripts/check-members.mjs <path/to/index_members.md>
// Dependencies (js-yaml, gray-matter) are resolved from the current directory's
// node_modules first, then from website/ next to this repo's scripts/ folder.

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

function loadDeps() {
  const candidates = [
    path.join(process.cwd(), "package.json"),
    new URL("../website/package.json", import.meta.url),
    new URL("../package.json", import.meta.url),
  ];
  for (const c of candidates) {
    try {
      const req = createRequire(c);
      return { yaml: req("js-yaml"), matter: req("gray-matter") };
    } catch {
      /* try next */
    }
  }
  throw new Error("js-yaml and gray-matter not found. Run `npm install` in website/ or `npm i js-yaml gray-matter`.");
}

const file = process.argv[2];
if (!file) {
  console.error("usage: check-members.mjs <index_members.md>");
  process.exit(2);
}

const { yaml, matter } = loadDeps();
const raw = fs.readFileSync(file, "utf-8");
const problems = [];

const CONTROL = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/;
const MOJIBAKE = /[\u00c3\u00c2][\u0080-\u00bf]/;

// 1. Control characters and mojibake anywhere in the file.
raw.split("\n").forEach((line, i) => {
  if (CONTROL.test(line)) {
    problems.push(`line ${i + 1}: control character(s) present: ${JSON.stringify(line.slice(0, 80))}`);
  }
  if (MOJIBAKE.test(line)) {
    problems.push(`line ${i + 1}: looks like UTF-8 mojibake (e.g. "Ã¶" for "ö"): ${line.trim().slice(0, 80)}`);
  }
});

// 2. Both sections parse and every item has a name.
let content;
try {
  ({ content } = matter(raw));
} catch (e) {
  problems.push(`front matter: ${e.message}`);
  content = raw;
}

function section(name, re) {
  const m = content.match(re);
  if (!m) {
    problems.push(`section "${name}" not found`);
    return [];
  }
  try {
    const parsed = yaml.load(m[1]);
    if (parsed == null) return [];
    if (!Array.isArray(parsed)) {
      problems.push(`section "${name}" is not a YAML list`);
      return [];
    }
    return parsed;
  } catch (e) {
    problems.push(`section "${name}" does not parse: ${e.message.split("\n")[0]}`);
    return [];
  }
}

const people = section("People", /## People\s*\n([\s\S]*?)(?=\n## |$)/);
const orgs = section("Organizations", /## Organizations\s*\n([\s\S]*?)$/);

const HTTP = /^https?:\/\/\S+$/i;
for (const [label, items] of [["People", people], ["Organizations", orgs]]) {
  items.forEach((item, i) => {
    if (!item || typeof item !== "object" || Array.isArray(item)) {
      problems.push(`${label}[${i}]: not a mapping`);
      return;
    }
    const who = typeof item.name === "string" ? item.name : `#${i}`;
    if (typeof item.name !== "string" || !item.name.trim()) {
      problems.push(`${label}[${i}]: missing or non-string name (${JSON.stringify(item.name)})`);
    }
    if (item.image != null && !HTTP.test(String(item.image))) {
      problems.push(`${label} ${who}: image is not an http(s) URL: ${item.image}`);
    }
    if (item.links != null) {
      if (!Array.isArray(item.links)) {
        problems.push(`${label} ${who}: links is not a list`);
      } else {
        item.links.forEach((l, j) => {
          if (!l || typeof l !== "object" || !HTTP.test(String(l.url ?? ""))) {
            problems.push(`${label} ${who}: links[${j}] url is not an http(s) URL: ${l && l.url}`);
          }
        });
      }
    }
  });
}

const named = (xs) => xs.filter((x) => x && typeof x.name === "string" && x.name.trim());
console.log(
  `People: ${people.length} entries (${named(people).length} named) | Organizations: ${orgs.length} entries (${named(orgs).length} named)`,
);

if (problems.length) {
  console.error(`\n${file}: ${problems.length} problem(s)`);
  for (const p of problems) console.error("  - " + p);
  process.exit(1);
}
console.log(`${file}: OK`);
