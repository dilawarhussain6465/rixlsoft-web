# RixlSoft website

Static site served by GitHub Pages: https://dilawarhussain6465.github.io/rixlsoft-web/

## Structure

| Path | What it is |
|---|---|
| `index.html`, `services/*.html`, `sitemap.xml` | **Generated** pages — don't edit by hand |
| `src/build.mjs` | Generator (Node 18+, no dependencies) |
| `src/layout.mjs` | Shared `<head>`, mega-menu navigation, mobile menu, footer |
| `src/pages/home.mjs` | Landing page sections |
| `src/pages/service.mjs` | Template used for every service page |
| `src/pages/hub.mjs` | `services/index.html` (all services) |
| `src/data/site.mjs` | Service list, categories, industries, photo IDs |
| `src/data/services/*.mjs` | Copy for each service page (hero, offerings, process, FAQs…) |
| `src/data/logos.mjs` + `assets/logos/` | Official technology/company logos |
| `src/icons/` | Lucide icons inlined at build time |
| `assets/css/main.css`, `assets/js/main.js` | Design system and animations |

## Editing

1. Change text in `src/data/…` or markup in `src/pages/…`.
2. Run `node src/build.mjs`.
3. Commit the regenerated HTML together with your source change.

To add a service: add an entry to `SERVICES` in `src/data/site.mjs` and a matching object (same `slug`) in one of `src/data/services/*.mjs`.

To use a new icon, drop a [Lucide](https://lucide.dev) SVG into `src/icons/<name>.svg`, or run the build with `LUCIDE_DIR=/path/to/lucide-static/icons` and missing icons are copied in automatically.

## Credits

- Icons: [Lucide](https://lucide.dev) (ISC)
- Logos: [Devicon](https://devicon.dev) (MIT) and [Simple Icons](https://simpleicons.org) (CC0). All logos are trademarks of their respective owners.
- Photos: [Unsplash](https://unsplash.com/license), loaded from `images.unsplash.com`.
