// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://anishde.dev',
  devToolbar: { enabled: false },
  integrations: [mdx(), sitemap()],
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
