# anishde.dev

A single-page Astro site. No framework components, no client JavaScript.

All copy lives in `src/data/content.ts`: the byline, lede, work, projects,
research, and contact lists. `src/pages/index.astro` renders it. To change
anything on the page, edit the content file. Shared head tags and global
styles are in `src/layouts/Base.astro`.

## Photos

`/photos` is a CSS-columns grid rendered by `src/pages/photos.astro` from
`src/data/photos.ts` (unsplash ids, dimensions, alt, caption, camera line,
grouped by category). Images are hotlinked from the Unsplash CDN with a
`srcset` at 480, 960, and 1440px, as Unsplash's guidelines require. No image
files are stored in this repo.

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
