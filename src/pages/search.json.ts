import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { fmtDate } from '../lib/blog';

// static full-text index for the terminal's :grep — built once per deploy
const strip = (s: string) =>
  s.replace(/^import .*$/gm, ' ').replace(/<[^>]+>/g, ' ').replace(/```[\s\S]*?```/g, ' ').replace(/\s+/g, ' ').trim();

export const GET: APIRoute = async () => {
  const local = await getCollection('blog', ({ data }) => !data.draft);
  const items = local.map((e) => ({
      title: e.data.title,
      slug: e.id,
      date: fmtDate(e.data.date),
      tags: e.data.tags,
      text: strip(e.body ?? '').slice(0, 5000),
    }));
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
};
