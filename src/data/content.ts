// ─────────────────────────────────────────────────────────────────────────
//  Everything editable on the homepage lives here. Change copy, links, and
//  lists in this one file — no need to touch any markup or CSS.
//
//  • Plain-text fields: just type.
//  • Rich fields (lede, blurbs, byline): inline HTML is allowed — <b>bold</b>
//    and <a href="…">links</a>. Nothing else needed.
//  • Lists render top-to-bottom in the order you write them. Add, remove, or
//    reorder freely.
// ─────────────────────────────────────────────────────────────────────────

/** Top of the page — the status pill, the byline under your name. */
export const hero = {
  // The live "currently doing" line shown next to the pulse dot up top.
  status: 'building beanstalk',
  byline: 'co-founder, <b>beanstalk</b> · previously spicenet',
};

/** The opening paragraph. */
export const lede =
  'I build <a href="https://beanstalk.fi" target="_blank" rel="noopener">Beanstalk</a>: stocks, ' +
  'gold, and treasuries onchain, as easy to own as dinner is to order. Rust on <b>Solana</b>, ' +
  'from Bangalore.';

/** (01) right now. */
export const now =
  'Mostly Rust and infrastructure for real-world assets onchain. CS at PES University in the ' +
  'background.';

/** (02) before this. */
export const before =
  'I co-founded <b>SpedX</b>, a perps protocol on Solana, and ran engineering. It merged into ' +
  'PepperDEX, became <b>Spicenet</b>, raised $3.4M, and I stayed on to build the cross-chain ' +
  'relayer. All of it started in high school, before anyone thought to check my age.';

/** (03) experiments — public and private, one ledger, none of it precious.
 *  Rows without `url` render unlinked. A row with a `redacted` twin swaps to
 *  the blacked-out version when html[data-lab="redacted"] (designer / egg):
 *  first char + `redact` dots + optional trailing char. */
export const experiments = [
  { name: 'windtunnel', url: 'https://github.com/AnishDe12020/windtunnel', desc: 'you write a system design with no ai, adversarial agents attack it, you defend. still deciding what it wants to be', meta: 'go · wip' },
  { name: 'nook', desc: 'local-first memory for coding agents. rust and sqlite, with encrypted evidence behind every recall', meta: '[private]',
    redacted: { head: 'n', redact: 3, tail: '', desc: "it remembers things. that's all you get.", meta: '[classified]' } },
  { name: 'crucible', desc: 'programming tutor that builds the interface as it explains, instead of talking at you', meta: '[private]',
    redacted: { head: 'c', redact: 6, tail: 'e', desc: 'it teaches. badly, sometimes.', meta: '[classified]' } },
  { name: 'unsus', url: 'https://github.com/AnishDe12020/unsus', desc: "npm firewall that sandboxes installs, so a sketchy package can't run whatever it wants", meta: 'ts' },
  { name: 'solsignal', url: 'https://github.com/AnishDe12020/solsignal', desc: 'verifiable trading-signal protocol on solana. i entered the hackathon as "batman"', meta: 'rust' },
  { name: 'murmur', url: 'https://github.com/AnishDe12020/murmur', desc: 'local-first cli that reads an x profile and tells you what it makes of them', meta: 'ts' },
  { name: 'thermac', url: 'https://github.com/AnishDe12020/thermac', desc: 'all 168 temperature sensors in your mac, from the terminal', meta: 'sh' },
  { name: 'mirage', url: 'https://arxiv.org/abs/2410.09729', desc: 'multimodal model that reads handwritten indian prescriptions. 743k images, 82% accuracy', meta: 'arxiv' },
  { name: 'the graveyard', url: 'https://github.com/AnishDe12020?tab=repositories', desc: "rayauth, sendo, secli, and other projects i've let rest", meta: 'more' },
];
export const experimentsAside = 'experiments are supposed to end. most of these did.';

/** (04) through a lens — the homepage strip and /photos both read this list. */
export const unsplashSrc = (id: string, w = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&fm=jpg&fit=crop`;
export const photos: { id: string; alt: string; href: string }[] = [
  {
    id: '1769337950338-e9e7756f8e6e',
    alt: 'aerial view of a city at night, streets glowing orange',
    href: 'https://unsplash.com/photos/aerial-view-of-a-city-at-night-with-glowing-lights-UU5Fz6iFYWg',
  },
  {
    id: '1769339750380-10d847c26194',
    alt: 'night skyline with a highway of light trails',
    href: 'https://unsplash.com/photos/0j7Dkm0giWs',
  },
  {
    id: '1769339781920-f508ac260e64',
    alt: 'top-down view of night roads winding under light ribbons',
    href: 'https://unsplash.com/photos/CNMZ5u0Oz-s',
  },
  {
    id: '1769339279852-ef7ded088573',
    alt: 'columns of glowing jellyfish tanks in a dark room',
    href: 'https://unsplash.com/photos/dMJGYVvmhrg',
  },
];

/** PARKED — not rendered. Hackathon wins as pixel trophies on a hairline
 *  shelf (see git history for Shelf.astro). Cut in favor of prose in
 *  `before`; the wins aged out of headline billing. */
export const trophies = [
  { name: 'decharge', meta: "renaissance · 2nd · '24", rank: 2 },
  { name: 'vaxchain', meta: "hyperdrive · depin · '23", rank: 2 },
  { name: 'vaultacks', meta: "stackathon · 1st · '22", rank: 1 },
  { name: 'webhooks', meta: "medusa · technical · '22", rank: 1 },
  { name: 'twnft', meta: "thirdweb · winner · '22", rank: 1 },
];

/** PARKED — not rendered. The blog is hidden until there's a real post in it.
 *  To bring it back: re-add the `writing` section to index.astro. */
export const writing =
  'I write about crypto, web3, and AI at <a href="/blog">/blog</a>. Drafted in markdown, published straight from the repo.';

/** PARKED — not rendered. Needs lines that actually say something. */
export const meanwhile = [
  { key: 'watching', val: 'the f1 season, hoping for rain' },
  { key: 'lifting', val: 'progressive overload' },
  { key: 'rabbit hole', val: 'agents that babysit other agents' },
];

/** (10) find me — the email row is handled separately (anti-scraper decode). */
export const contact = [
  { name: 'x / twitter', url: 'https://twitter.com/AnishDe12020', desc: 'where i actually post', meta: '@AnishDe12020' },
  { name: 'github', url: 'https://github.com/AnishDe12020', desc: 'code, mostly rust lately', meta: '@AnishDe12020' },
];

/** The footer. */
export const footer = {
  void: 'you found the void. it found you back.',
  place: 'bengaluru, india',
  version: 'v4.0.0',
};
