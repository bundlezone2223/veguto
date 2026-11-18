import type { Section } from "./types";

export const article = {
  id: `TSrgO8nKVGP`,
  title: `The Furry Fandom: A Friendly Overview`,
  thumbnail: `/__l5e/assets-v1/c3c7838f-c03d-4239-9bd8-ad2c686ac9e5/article-placeholder.jpg`,
  category: `community`,
  tags: [`furry`, `furries`, `fursona`, `anthro art`],
  content: [
    { type: "h2", text: `What's a fursona` },
    { type: "p", text: `A fursona is your personal anthro character — usually one species, a signature color palette and a small set of traits. It's a creative self-portrait, not a costume requirement.` },
    { type: "h2", text: `How the fandom works` },
    { type: "p", text: `It's mostly an art and writing community. Conventions, Telegram and Discord servers, and platforms like FurAffinity and Bluesky are the main hubs. Commissions from furry artists fund a huge chunk of the indie illustration economy.` },
    { type: "h2", text: `Common misconceptions` },
    { type: "p", text: `Most furries never own a fursuit — suits are expensive and optional. The core of the fandom is character design, storytelling and supporting each other's art.` },
  ] as Section[],
};

export default article;
