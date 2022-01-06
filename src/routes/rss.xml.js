/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-tabs */
/* eslint-disable require-jsdoc */
export async function get() {
  const headers = {
    "Cache-Control": "max-age=0, s-maxage=3600",
    "Content-Type": "application/xml",
  };

  const body = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
    <channel>
        <title>Anish De</title>
        <link>https://anishde.dev/</link>
        <description>14 year old Fullstack Web Developer, Tech Enthusiast, Blogger, Tech YouTuber. Likes to learn new things, build applications, and share their knowledge through blog posts.</description>
        <lastBuildDate>Thu, 06 Jan 2022 03:18:31 GMT</lastBuildDate>
        <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
        <language>en</language>
        <image>
            <title>Anish De</title>
            <url>https://anishde.dev/og.png</url>
            <link>https://anishde.dev/</link>
        </image>
        <category>Technology</category>
        <category>Programming</category>
        <category>Web Development</category>
        <category>JavaScript</category>
		<category>Node.js</category>
		<category>React</category>
		<category>Next.js</category>
		<category>Svelte</category>
		<category>Tailwind CSS</category>
		<category>Chakra UI</category>
        <category>Blogger</category>
		<category>Tech YouTuber</category>
		<category>Tech Enthusiast</category>
		<category>Fullstack Web Developer</category>
        <category>Anish De</category>
    </channel>
</rss>`;

  return {
    headers,
    body,
  };
}
