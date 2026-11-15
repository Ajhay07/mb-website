# MB Metallic Bellows website

This repo now holds the **static export** of a Next.js site (swapped in from
github.com/Kv-Logics/mb-metallics on 2026-11-15) — `index.html`, `contact.html`,
`projects.html`, `studio.html`, the per-project pages under `projects/`, and the
compiled `_next/` / `assets/` / `static/` bundles. There is **no Next.js source**
in this repo (no `package.json`, no components, no app/ or src/ directory) —
only the built output. The previous Python generator (`build/build.py`,
`css/style.css`, `js/main.js`) has been removed; do not look for it.

Practical implications:
- The HTML/JS/CSS under `_next/`, `assets/` and `static/` are Next.js' own
  minified, content-hashed build artifacts. Treat them as compiled output, not
  hand-editable source — small content tweaks can be made directly in the
  `.html` files, but any real layout/behavior change needs the original
  Next.js project (ask the user for it; it isn't here).
- `vercel.json` rewrites `_next/static/*` and `static/*` requests to `assets/`
  for Vercel hosting — keep that in mind if paths look duplicated.
- `README.md` (from the source repo) documents the page structure and how to
  preview locally (`python3 -m http.server`) or deploy (`npx vercel --prod`).

## React Bits
`react-bits/` is a React + Vite + Tailwind + shadcn sidecar with the `@react-bits` registry configured,
kept from the prior build for exploring/prototyping components. It is not wired into the live site above.
The shadcn MCP server is set up in `.mcp.json` (needs a Claude Code restart to load).
