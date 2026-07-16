import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

// /og/<slug>.png — dark mono share cards for published repo-native posts
const local = await getCollection('blog', ({ data }) => !data.draft);

const pages = Object.fromEntries(
  local.map((e) => [`${e.id}.png`, { title: e.data.title, description: e.data.description }])
);

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page: { title: string; description: string }) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[6, 6, 6]],
    border: { color: [224, 68, 46], width: 14, side: 'block-end' },
    padding: 72,
    font: {
      title: {
        families: ['Space Mono'], weight: 'Bold',
        color: [236, 232, 224], size: 56, lineHeight: 1.35,
      },
      description: {
        families: ['Space Mono'],
        color: [107, 103, 94], size: 24, lineHeight: 1.6,
      },
    },
    fonts: ['./src/assets/fonts/SpaceMono-Bold.ttf', './src/assets/fonts/SpaceMono-Regular.ttf'],
  }),
});
