import type { Section } from "./types";

export const article = {
  id: `FaAvnYTTw7U`,
  title: `Cosplay 101: From Closet Cosplay to Full Builds`,
  thumbnail: `/__l5e/assets-v1/c3c7838f-c03d-4239-9bd8-ad2c686ac9e5/article-placeholder.jpg`,
  category: `community`,
  tags: [`cosplay`, `costume`, `wigs`, `props`, `convention`],
  content: [
    { type: "h2", text: `Levels of cosplay` },
    { type: "list", ordered: false, items: [`Closet cosplay — pieces you already own, styled to match a character`, `Casual cosplay — small purchases like a wig or accessory`, `Full cosplay — sewn outfit, styled wig, makeup`, `Competition build — props, armor, lighting, performance`] },
    { type: "h2", text: `Your first build` },
    { type: "p", text: `Pick a character whose silhouette you can recreate with two or three key pieces. The goal of your first cosplay isn't perfection — it's finishing something you can wear in public and feel like that character.` },
    { type: "h2", text: `Cosplay etiquette` },
    { type: "p", text: `Cosplay is not consent. Ask before photos, respect personal space, and credit the maker if you share their work. The community runs on kindness.` },
  ] as Section[],
};

export default article;
