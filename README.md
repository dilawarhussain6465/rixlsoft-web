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

## Forms (contact + careers)

GitHub Pages can't run server code, so both forms post to [FormSubmit](https://formsubmit.co), which emails every submission — including uploaded files (brief / CV, max 5 MB) — to the inbox set in `FORM_INBOX` (`src/data/site.mjs`, base64-encoded so it isn't displayed on the site).

- **First-time activation:** the very first submission triggers an "Activate Form" email from FormSubmit to that inbox. Click the link once; after that every submission arrives as an email with a table of the fields and the file attached.
- **Hide the address completely (optional):** the activation email also contains a random alias string. Put that string in `FORM_INBOX` instead of the base64 email (and change `atob(form.dataset.inbox)` in `assets/js/main.js` to use it directly), then rebuild.
- Spam protection: hidden honeypot field `_honey`. After sending, visitors land on `thanks.html`.

## Security

The site is static (no server, database or logins), so the main risks are script injection, clickjacking, form spam and account takeover. Built-in protections:

- **Content-Security-Policy** (`<meta>` in `src/layout.mjs`): only our own JavaScript runs; styles/fonts only from Google Fonts; images only from Unsplash; forms may only post to FormSubmit; plugins/frames/`<base>` hijacking disabled; all requests upgraded to HTTPS.
- **Anti-clickjacking**: `assets/js/main.js` refuses to run inside another site's frame and breaks out to the real URL.
- **Form spam**: hidden honeypot field, 4-second minimum fill time, input length limits, file type/size checks (5 MB).
- **Privacy**: `strict-origin-when-cross-origin` referrer policy; the receiving inbox is never displayed; `thanks.html` is `noindex`.
- **No third-party scripts or cookies**, no inline scripts or event handlers.
- `/.well-known/security.txt` tells researchers how to report issues; `.nojekyll` serves files as-is.

Account-level (do these in GitHub/Gmail, not in code): enable 2FA on GitHub, keep "Enforce HTTPS" on in *Settings → Pages*, protect the `main` branch, and replace `FORM_INBOX` with the FormSubmit alias so no email address appears in this public repository.
