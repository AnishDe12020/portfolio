// Everything on the page lives here. Plain strings, or inline <b> and <a>
// where a field says so. Lists render in the order written.

/** Under the name. */
export const byline = 'systems &amp; trading infra · cs @ pes · bengaluru';

/** The opening paragraph. */
export const lede =
  'i work on trading infrastructure: transaction landing, market data, wallets. ' +
  'mostly solana, in rust and typescript, some go.';

/** work: rows without `url` render unlinked. `body` renders under the row. */
export const work = [
{
    name: 'beanstalk', url: 'https://beanstalk.fi', desc: 'co-founder', meta: "'26",
    body: 'cross-chain order router for tokenized stocks and gold.',
  },
  {
    name: 'spicenet', url: 'https://spicenet.io', desc: 'protocol engineer', meta: "'23–'26",
    body:
      'co-founded it in high school as spedx, a perps dex on solana. it became pepperdex, ' +
      'then spicenet, and raised $3.4m from hack vc. i built the trading app, indexers, a tx ' +
      'blaster for the 2024 congestion, and a smart wallet.',
  },
];

/** projects: rows without `url` render unlinked. */
export const projects = [
  { name: 'nook', desc: 'local memory for coding agents. rust, sqlite', meta: 'private' },
  { name: 'windtunnel', url: 'https://github.com/AnishDe12020/windtunnel', desc: 'adversarial review of system designs by ai agents', meta: 'go · wip' },
  { name: 'unsus', url: 'https://github.com/AnishDe12020/unsus', desc: 'sandboxes npm installs', meta: 'ts' },
  { name: 'decharge', url: 'https://www.decharge.network/', desc: 'ev charging on solana. 2nd in depin, solana renaissance; funded', meta: 'rust' },
  { name: 'nonci', url: 'https://nonci.xyz', desc: 'durable-nonce tx queue for solana. superteam earn bounty', meta: 'ts' },
  { name: 'check out more on github', url: 'https://github.com/AnishDe12020?tab=repositories' },
];

/** research: rows without `url` render unlinked. */
export const research = [
  { name: 'mirage', url: 'https://arxiv.org/abs/2410.09729', desc: 'fine-tuned vision-language models to read handwritten indian prescriptions. 743k images, 82% accuracy', meta: 'arxiv · 2024' },
];

/** open source: NOT rendered. lives in the resume, kept here for reference. */
export const openSource = [
  { name: 'sovereign sdk', url: 'https://github.com/Sovereign-Labs/sovereign-sdk/commit/42bbdba89fcceb45ca9e6367e7c65e9bfeead262', desc: 'StateVec::remove in the rollup framework\'s core modules', meta: 'rust' },
  { name: 'raycast', url: 'https://github.com/raycast/extensions', desc: 'wrote the bonk price extension, overhauled solana explorer', meta: 'ts' },
  { name: 'kbar', url: 'https://github.com/timc1/kbar', desc: 'react 18 support', meta: 'ts' },
  { name: 'exercism', url: 'https://github.com/exercism/javascript', desc: 'exercise prerequisites for the javascript track', meta: 'js' },
  { name: 'homebrew', url: 'https://github.com/Homebrew/homebrew-cask', desc: 'added neat.app to cask', meta: 'rb' },
];
export const openSourceAside = '100+ merged prs across 50+ projects since 2021.';

/** contact. Email is written out obfuscated on purpose. */
export const contact = [
  { name: 'x / twitter', url: 'https://twitter.com/AnishDe12020', desc: 'posts' },
  { name: 'github', url: 'https://github.com/AnishDe12020', desc: 'code' },
  { name: 'linkedin', url: 'https://linkedin.com/in/anishde12020' },
  { name: 'unsplash', url: 'https://unsplash.com/@anishde', desc: 'photos' },
  { name: 'email', desc: 'contact [at] anishde [dot] dev' },
];

export const footer = { place: 'bengaluru, india' };
