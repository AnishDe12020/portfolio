import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// feed for published repo-native posts
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://anishde.dev');
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => +b.data.date - +a.data.date);

  const items = posts.map((p) => `    <item>
      <title>${esc(p.data.title)}</title>
      <link>${new URL(`/blog/${p.id}`, base)}</link>
      <guid isPermaLink="true">${new URL(`/blog/${p.id}`, base)}</guid>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
      <description>${esc(p.data.description)}</description>
${p.data.tags.map((t) => `      <category>${esc(t)}</category>`).join('\n')}
    </item>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>anish de — writing</title>
    <link>${new URL('/blog', base)}</link>
    <description>crypto, web3, ai — occasionally all three in the same sentence.</description>
    <language>en</language>
    <atom:link href="${new URL('/rss.xml', base)}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
