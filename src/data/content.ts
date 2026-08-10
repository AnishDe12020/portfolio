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
  'I\'m a co-founder at ' +
  '<a href="https://beanstalk.fi" target="_blank" rel="noopener">Beanstalk</a>. We\'re making it ' +
  'possible to own stocks, gold, and treasuries onchain, as simply as ordering food, for the people ' +
  'most fintech skips over. I build on <b>Solana</b>, mostly in Rust, from Bangalore.';

/** (01) right now. */
export const now =
  'Mostly Rust and infrastructure — the plumbing under the product — plus whatever else a small ' +
  'team needs that week. CS at PES University in the background.';

/** (02) before this. */
export const before =
  'I co-founded <b>SpedX</b>, a perps protocol on Solana, and ran engineering. It merged into ' +
  'PepperDEX, became <b>Spicenet</b>, raised $3.4M, and I stayed on to build the cross-chain ' +
  'relayer. All of it started in high school, before anyone thought to check my age.';

/** (03) the shelf — hackathon wins as pixel trophies. rank 1 = bright, 2 = dim. */
export const trophies = [
  { name: 'decharge', meta: "renaissance · 2nd · '24", rank: 2 },
  { name: 'vaxchain', meta: "hyperdrive · depin · '23", rank: 2 },
  { name: 'vaultacks', meta: "stackathon · 1st · '22", rank: 1 },
  { name: 'webhooks', meta: "medusa · technical · '22", rank: 1 },
  { name: 'twnft', meta: "thirdweb · winner · '22", rank: 1 },
];
export const shelfAside = 'five, give or take. decharge is a funded company now.';

/** (04) the lab — current private work.
 *  `listed` is the normal view. `redacted` is the blacked-out mirror shown in
 *  hacker "guest" mode (an easter egg); each entry shows first char + a row of
 *  redaction dots (`redact` = how many) + an optional trailing char (`tail`). */
export const lab = {
  listed: [
    { name: 'nook', desc: 'local-first memory for coding agents. rust and sqlite, with encrypted evidence behind every recall', meta: '[private]' },
    { name: 'crucible', desc: 'programming tutor that builds the interface as it explains, instead of talking at you', meta: '[private]' },
  ],
  aside: "a few more i'm not ready to show yet.",
  rootNote: '// decrypted. this is where most of the time actually goes.',
  redacted: [
    { head: 'n', redact: 3, tail: '', desc: "it remembers things. that's all you get.", meta: '[classified]' },
    { head: 'c', redact: 6, tail: 'e', desc: 'it teaches. badly, sometimes.', meta: '[classified]' },
  ],
  redactedAside: 'declassified upon shipping.',
};

/** (05) things that escaped — shipped side projects. */
export const sideQuests = [
  { name: 'windtunnel', url: 'https://github.com/AnishDe12020/windtunnel', desc: 'you write a system design with no ai, adversarial agents attack it, you defend. still deciding what it wants to be', meta: 'go · wip' },
  { name: 'unsus', url: 'https://github.com/AnishDe12020/unsus', desc: "npm firewall that sandboxes installs, so a sketchy package can't run whatever it wants", meta: 'ts' },
  { name: 'solsignal', url: 'https://github.com/AnishDe12020/solsignal', desc: 'verifiable trading-signal protocol on solana. i entered the hackathon as "batman"', meta: 'rust' },
  { name: 'murmur', url: 'https://github.com/AnishDe12020/murmur', desc: 'local-first cli that reads an x profile and tells you what it makes of them', meta: 'ts' },
  { name: 'thermac', url: 'https://github.com/AnishDe12020/thermac', desc: 'all 168 temperature sensors in your mac, from the terminal', meta: 'sh' },
  { name: 'mirage', url: 'https://arxiv.org/abs/2410.09729', desc: 'multimodal model that reads handwritten indian prescriptions. 743k images, 82% accuracy', meta: 'arxiv' },
  { name: 'the graveyard', url: 'https://github.com/AnishDe12020?tab=repositories', desc: "rayauth, sendo, secli, and other projects i've let rest", meta: 'more' },
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
  { name: 'x / twitter', url: 'https://twitter.com/AnishDe12020', desc: 'where i mostly live', meta: '@AnishDe12020' },
  { name: 'github', url: 'https://github.com/AnishDe12020', desc: 'code, mostly rust lately', meta: '@AnishDe12020' },
];

/** The footer. */
export const footer = {
  void: 'you found the void. it found you back.',
  place: 'bengaluru, india',
  version: 'v4.0.0',
};
