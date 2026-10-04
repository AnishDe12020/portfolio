# anishde.dev

A single-page Astro site. No framework components, no client JavaScript.

All copy lives in `src/data/content.ts`: the byline, lede, work, projects,
research, and contact lists. `src/pages/index.astro` renders it. To change
anything on the page, edit the content file.

## Development

Requires Node.js 22.12 or newer.

```sh
npm install
npx astro dev --background   # start the dev server
npx astro dev status
npx astro dev logs
npx astro dev stop
```

## Build

```sh
npm run build    # static output in dist/
npm run check    # type-check
npm run preview  # serve dist/ locally
```
