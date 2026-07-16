# anishde.dev

An Astro portfolio and repo-native blog. The site is static; posts live in
`src/content/blog` as Markdown or MDX and are published with the site.

## Development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run build
```

Start the local server in background mode:

```sh
npx astro dev --background
npx astro dev status
npx astro dev logs
npx astro dev stop
```

## Writing workflow

Create a draft:

```sh
npm run blog:new -- "A useful title"
```

The command creates `src/content/blog/a-useful-title.mdx` with `draft: true`.
Drafts are excluded from pages, RSS, search, OG images, and the sitemap.

List posts and their status:

```sh
npm run blog:list
```

Publish or return a post to drafts:

```sh
npm run blog:publish -- a-useful-title
npm run blog:unpublish -- a-useful-title
```

Publishing sets `draft: false` and updates the publication date. Run
`npm run build` before deployment to validate content and generated routes.

## Analytics

Analytics are off unless `PUBLIC_UMAMI_WEBSITE_ID` is set at build time. Copy
`.env.example` to `.env`, verify the website ID in Umami, and set it there.
`PUBLIC_UMAMI_HOST` defaults to `https://umami.anishde.dev`.

The current Umami frontend is served from Vercel. Its backing database hosting
still needs to be identified before relying on it long term.
