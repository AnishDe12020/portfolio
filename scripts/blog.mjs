import { access, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const blogDir = path.join(root, 'src/content/blog');
const [command, ...args] = process.argv.slice(2);

const today = () => new Date().toISOString().slice(0, 10);
const slugify = (value) => value
  .trim()
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

function usage() {
  console.log(`Blog workflow

  npm run blog:new -- "Post title"
  npm run blog:list
  npm run blog:publish -- post-slug
  npm run blog:unpublish -- post-slug`);
}

async function postPath(rawSlug) {
  const slug = path.basename(rawSlug ?? '').replace(/\.(md|mdx)$/, '');
  if (!slug) throw new Error('A post slug is required.');
  for (const extension of ['mdx', 'md']) {
    const candidate = path.join(blogDir, `${slug}.${extension}`);
    try {
      await access(candidate);
      return candidate;
    } catch (error) {
      if (error?.code !== 'ENOENT') throw error;
    }
  }
  throw new Error(`No post found for "${slug}".`);
}

function field(frontmatter, name) {
  const match = frontmatter.match(new RegExp(`^${name}:\\s*(.+)$`, 'm'));
  return match?.[1]?.replace(/^['"]|['"]$/g, '') ?? '';
}

function updateFrontmatter(source, changes) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) throw new Error('Post is missing YAML frontmatter.');
  let frontmatter = match[1];
  for (const [name, value] of Object.entries(changes)) {
    const line = `${name}: ${value}`;
    const pattern = new RegExp(`^${name}:.*$`, 'm');
    frontmatter = pattern.test(frontmatter)
      ? frontmatter.replace(pattern, line)
      : `${frontmatter}\n${line}`;
  }
  return source.replace(match[0], `---\n${frontmatter}\n---`);
}

async function createPost(title) {
  if (!title) throw new Error('A post title is required.');
  const slug = slugify(title);
  if (!slug) throw new Error('The title could not be converted into a slug.');
  const file = path.join(blogDir, `${slug}.mdx`);
  try {
    await access(file);
    throw new Error(`A post already exists at ${path.relative(root, file)}.`);
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
  }
  const source = `---
title: ${JSON.stringify(title)}
description: ""
date: ${today()}
tags: []
draft: true
---

Start writing here.
`;
  await writeFile(file, source, 'utf8');
  console.log(`Created draft: ${path.relative(root, file)}`);
}

async function listPosts() {
  const names = (await readdir(blogDir)).filter((name) => /\.(md|mdx)$/.test(name)).sort();
  const posts = await Promise.all(names.map(async (name) => {
    const source = await readFile(path.join(blogDir, name), 'utf8');
    const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
    return {
      status: field(frontmatter, 'draft') === 'true' ? 'draft' : 'live ',
      date: field(frontmatter, 'date') || 'undated',
      slug: name.replace(/\.(md|mdx)$/, ''),
      title: field(frontmatter, 'title') || '(untitled)',
    };
  }));
  for (const post of posts) {
    console.log(`${post.status}  ${post.date}  ${post.slug}  ${post.title}`);
  }
}

async function setPublished(slug, published) {
  const file = await postPath(slug);
  const source = await readFile(file, 'utf8');
  const changes = published
    ? { draft: 'false', date: today() }
    : { draft: 'true' };
  await writeFile(file, updateFrontmatter(source, changes), 'utf8');
  console.log(`${published ? 'Published' : 'Moved to drafts'}: ${path.relative(root, file)}`);
}

try {
  switch (command) {
    case 'new':
      await createPost(args.join(' ').trim());
      break;
    case 'list':
      await listPosts();
      break;
    case 'publish':
      await setPublished(args[0], true);
      break;
    case 'unpublish':
      await setPublished(args[0], false);
      break;
    default:
      usage();
      if (command) process.exitCode = 1;
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
