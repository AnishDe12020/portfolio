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
    name: 'spicenet', url: 'https://spicenet.io', desc: 'protocol engineer', meta: "'23–'26",
    body:
      'co-founded spedx in high school, a perps dex on solana. it became pepperdex, then ' +
      'spicenet (raised $3.4m from hack vc), where i was a protocol engineer. i built the ' +
      'trading app, indexers, a tx blaster for the 2024 congestion, a smart wallet, and much more.',
  },
  {
    name: 'beanstalk', url: 'https://beanstalk.fi', desc: 'co-founder', meta: "'26",
    body: 'built an app for buying tokenized stocks, etfs and metals, with cross-chain order routing to cut fees and slippage. superteam india grant.',
  },
];

/** projects: rows without `url` render unlinked. */
export const projects = [
  { name: 'nook', desc: 'local memory for coding agents. rust, sqlite', meta: 'private' },
  { name: 'windtunnel', url: 'https://github.com/AnishDe12020/windtunnel', desc: 'adversarial review of system designs by ai agents', meta: 'go · wip' },
  { name: 'unsus', url: 'https://github.com/AnishDe12020/unsus', desc: 'pre-checks npm packages before they install', meta: 'ts' },
  { name: 'paddock', url: 'https://github.com/AnishDe12020/paddock', desc: 'persistent linux box for agents over mcp', meta: 'python' },
  { name: 'hangar', url: 'https://github.com/AnishDe12020/hangar', desc: 'aerospace-aware alt-tab switcher and window organizer for macos', meta: 'swift' },
  { name: 'decharge', desc: 'ev charging on solana. 2nd in depin, solana renaissance; funded', meta: 'rust' },
  { name: 'vaxchain', url: 'https://vaxchain.xyz', desc: 'vaccine cold-chain tracking on solana, iot temp logs with stake slashing. 4th in depin, solana hyperdrive', meta: 'rust' },
  { name: 'nonci', url: 'https://nonci.xyz', desc: 'durable-nonce tx queue for solana. superteam earn bounty', meta: 'ts' },
  { name: 'check out more on github', url: 'https://github.com/AnishDe12020?tab=repositories' },
];

/** research: rows without `url` render unlinked. */
export const research = [
  { name: 'mirage', url: 'https://arxiv.org/abs/2410.09729', desc: 'fine-tuned vision-language models to read handwritten indian prescriptions. 743k images, 82% accuracy', meta: 'arxiv · 2024' },
];

/** open source: NOT rendered. lives in the resume, kept here for reference. */
export const openSource = [
  { name: 'sovereign sdk', url: 'https://github.com/Sovereign-Labs/sovereign-sdk/commit/db1a5d6ed', desc: 'StateVec::remove in the rollup framework\'s core modules', meta: 'rust' },
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
