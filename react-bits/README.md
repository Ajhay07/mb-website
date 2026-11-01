# React Bits sidecar

A small React + Vite + Tailwind 4 + shadcn project used only to pull in and test
[React Bits](https://reactbits.dev/) components. The live website is the static
HTML/CSS/JS in the parent folder and does not depend on this folder.

## Setup (already done)
- Scaffolded with `npm create vite@latest react-bits -- --template react-ts`
- Added Tailwind 4 (`tailwindcss`, `@tailwindcss/vite`) and the `@` alias to `src`
- `npx shadcn@latest init -t vite -b radix -p nova` created `components.json`
- Registry added to `components.json` (from the React Bits docs):
  `"registries": { "@react-bits": "https://reactbits.dev/r/{name}.json" }`
- MCP: `../.mcp.json` runs `node react-bits/mcp.mjs`, which starts
  `npx shadcn@latest mcp` inside this folder (the server reads `components.json`
  from its working directory, and Claude Code starts from the site root).

## Use
```bash
npm install
npm run dev      # test bed at http://localhost:5173
npm run build    # type check + production build
npx shadcn@latest add @react-bits/SplitText-TS-TW   # name pattern: Name-(JS|TS)-(CSS|TW)
```
Installed so far: `SplitText-TS-TW` (needs `gsap`, `@gsap/react`).

## Using a component on the static site
Build the effect here, then bundle it and mount it into the HTML page with a script.
Only do this where the effect clearly improves the page.
