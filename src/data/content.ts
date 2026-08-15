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
  'I\'m a co-founder at <a href="https://beanstalk.fi" target="_blank" rel="noopener">Beanstalk</a>, ' +
  'where we\'re building a way to hold stocks, gold, and treasuries onchain. I write Rust on ' +
  '<b>Solana</b> and live in Bangalore.';

/** (01) right now — one <p> per entry. */
export const now = [
  'I run the onchain side — the <b>Solana</b> programs and the infrastructure around them. We ' +
  'started in 2026, so most of what I work on doesn\'t exist yet.',
  'Outside of work, I\'m doing a CS degree at PES University (class of \'29) and taking photos ' +
  'of cities at night.',
];

/** (02) before this — one <p> per entry. */
export const before = [
  'Before Beanstalk, I was at <b>Spicenet</b> for almost three years. It started out as <b>SpedX</b>, ' +
  'a perps protocol on Solana built on Hxro\'s Dexterity, which I co-founded in 2023 while ' +
  'still in high school — nobody thought to check my age.',
  'SpedX merged into PepperDEX and became Spicenet, which went on to raise $3.4M from Hack VC. ' +
  'I built the cross-chain relayer that moves assets between chains, and later the SDK that ' +
  'other teams integrated against.',
  'I got into all of this through hackathons — five wins across three years, including an ' +
  'EV-charging network that\'s a funded company now. Along the way I also co-authored an arXiv ' +
  'paper: a multimodal model trained on 743,000 handwritten Indian prescriptions.',
];

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
export const experimentsAside = 'most of these are done for good. one might prove me wrong.';

/** (04) through a lens — photo data lives in src/data/photos.ts (a build-time
 *  cache of the Unsplash API; see the header there before refreshing it). */

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
