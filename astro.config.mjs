// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://anishde.dev',
  devToolbar: { enabled: false },
  // /blog is parked until there's a real post in it — the page still builds and
  // is reachable by URL, it's just not linked from the site or listed for crawlers.
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/blog') })],
  // /uses is what people type; /setup is what it's called here
  redirects: { '/uses': '/setup' },
  markdown: {
    // css-variables theme → code colors come from our tokens (see global.css),
    // so highlighting follows the active theme instead of shipping its own
    shikiConfig: {
      theme: 'css-variables',
      transformers: [
        {
          // ```ts title="src/thing.ts" → filename bar on the block
          pre(node) {
            const m = this.options.meta?.__raw?.match(/title="([^"]+)"/);
            if (m) node.properties['data-title'] = m[1];
          },
        },
      ],
    },
  },
});
