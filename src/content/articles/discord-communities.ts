import type { Section } from "./types";

export const article = {
  id: `vgzBNDRaFfs`,
  title: `Discord Communities: Finding (and Building) Your Server`,
  thumbnail: `/__l5e/assets-v1/c3c7838f-c03d-4239-9bd8-ad2c686ac9e5/article-placeholder.jpg`,
  category: `community`,
  tags: [`discord`, `discord servers`, `online communities`, `fandom`],
  content: [
    { type: "h2", text: `Finding good servers` },
    { type: "list", ordered: false, items: [`Disboard and Top.gg list public servers by tag`, `Search 'official discord' + your favorite artist or game`, `Small servers (under 500 members) usually feel warmer than huge ones`] },
    { type: "h2", text: `Starting one` },
    { type: "p", text: `Pick a tight niche — not 'art server' but 'pastel chibi artists who sketch daily.' Write three clear rules. Make 5-10 starter channels (not 30). Invite 5 friends before posting it publicly. A server with 10 active people beats one with 1,000 silent ones.` },
  ] as Section[],
};

export default article;
