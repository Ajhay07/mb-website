# MB Metallic Bellows — Website

A fast, zero-dependency static website for MB Metallic Bellows Private Limited.
Built with plain HTML, CSS and vanilla JavaScript — no build step, no `npm install`,
no framework. Open it, deploy it, or edit it directly.

## Pages
| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About / Company profile |
| `products.html` | Product range |
| `industries.html` | Industries & client list |
| `quality.html` | Quality & approvals |
| `contact.html` | Contact + enquiry form |

## View it locally
Just double-click `index.html` — it opens in any browser. (An internet
connection is needed for the Google Fonts and the product photos; see below.)

## Deploy to Vercel (recommended)
This is a static site, so deployment is instant:
1. Push this folder to a GitHub repo, **or** drag-and-drop the folder at
   https://vercel.com/new.
2. Framework Preset: **Other**. Build Command: *(leave blank)*. Output
   Directory: *(leave blank / root)*.
3. Deploy. That's it — the same works for Netlify, Cloudflare Pages, or any
   static host.

## Product images — please read
The 8 product photos are currently referenced from the **existing live site**
(`https://mbmetallicbellows.com/images/...`), so the site works immediately.
Before final launch it's best to **host them yourself**:
1. Create an `images/` folder here.
2. Save these files into it: `02.jpg, 03.JPG, 04.JPG, 05.jpg, 06.jpg, 07.jpg,
   08.jpg, 09_new.jpg` (download from the current site, or use higher-res
   originals).
3. In `build/build.py` change the line `IMG = "https://..."` to `IMG = "images/"`
   and re-run `python build/build.py` — or do a find-and-replace of the image
   URL across the `.html` files.

Using your own higher-resolution product shots here will noticeably lift the
site; the current ones are the low-res 2020 images.

## Editing
Two options:
- **Quick edits:** change the `.html` files directly.
- **Structured edits (recommended):** the pages are generated from
  `build/build.py`, which holds all shared markup (header, footer, product data,
  client list). Edit there and run `python build/build.py` to regenerate every
  page consistently.

## Things to finish before launch
- **Enquiry form:** currently front-end only (it validates and shows a success
  message but doesn't send). Connect it to a backend or a service like
  Formspree / Web3Forms (set the `<form>` `action`), or wire it to email.
- **Social links:** the LinkedIn / Facebook / YouTube icons in the footer point
  to `#` — update with real profile URLs (or remove).
- **Phone / email / address:** verify the details in `build/build.py`
  (utility bar, footer, contact page) are current.

## Design
- Fonts: **Archivo** (headings) + **IBM Plex Sans** (body) + **IBM Plex Mono**
  (technical labels) via Google Fonts.
- Colours: deep steel-navy `#0A1E33` with a signal-red `#C8372B` accent.
- Fully responsive, accessible focus states, reduced-motion support.
