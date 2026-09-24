import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LOGOS } from './data/logos.mjs';

const ICON_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'icons');
// Optional: set LUCIDE_DIR to an unpacked `lucide-static/icons` folder to vendor new icons on demand.
const LUCIDE_DIR = process.env.LUCIDE_DIR;

/** Escape text, but leave existing HTML entities (e.g. &amp;) intact. */
export const esc = s => String(s ?? '')
  .replace(/&(?!#?\w+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escaped text that may contain <em>…</em> highlight markup only. */
export const rich = s => esc(s).replace(/&lt;(\/?)em&gt;/g, '<$1em>');

/** Plain text (strip <em>) for meta tags / alt text. */
export const plain = s => String(s ?? '').replace(/<\/?em>/g, '');

const iconCache = new Map();
/** Inline Lucide SVG icon, styled via currentColor. */
export function icon(name, cls = '') {
  if (!iconCache.has(name)) {
    const file = path.join(ICON_DIR, `${name}.svg`);
    if (!fs.existsSync(file)) {
      const src = LUCIDE_DIR && path.join(LUCIDE_DIR, `${name}.svg`);
      if (src && fs.existsSync(src)) fs.copyFileSync(src, file);
      else throw new Error(`Missing icon "${name}" (src/icons/${name}.svg). Set LUCIDE_DIR to vendor it.`);
    }
    let svg = fs.readFileSync(file, 'utf8')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/\s*class="[^"]*"/, '')
      .replace(/\s*(width|height)="24"/g, '')
      .replace(/\s+/g, ' ').replace(/> </g, '><').trim();
    iconCache.set(name, svg);
  }
  return iconCache.get(name).replace('<svg', `<svg class="icon${cls ? ' ' + cls : ''}" aria-hidden="true" focusable="false"`);
}

/** Monochrome brand glyph (fill set by CSS) for social links. */
export function brand(name) {
  const svg = fs.readFileSync(path.join(ICON_DIR, `brand-${name}.svg`), 'utf8');
  return svg.replace(/<title>.*?<\/title>/, '').replace('<svg', '<svg aria-hidden="true" focusable="false"');
}

/** Official technology/company logo (assets/logos/<key>.svg). */
export function logo(key, root, size = 26) {
  const name = LOGOS[key];
  if (!name) throw new Error(`Unknown logo key "${key}"`);
  return `<img src="${root}assets/logos/${key}.svg" alt="${esc(name)}" width="${size}" height="${size}" loading="lazy" decoding="async">`;
}
export const logoName = key => LOGOS[key];

export const html = (strings, ...vals) => strings.reduce((out, s, i) => out + s + (i < vals.length ? (Array.isArray(vals[i]) ? vals[i].join('') : (vals[i] ?? '')) : ''), '');
