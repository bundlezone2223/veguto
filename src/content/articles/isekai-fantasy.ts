import type { Section } from "./types";

export const article = {
  id: `MmvtJ3GzZEs`,
  title: `Isekai & Fantasy: Why We Keep Coming Back`,
  thumbnail: `/__l5e/assets-v1/c3c7838f-c03d-4239-9bd8-ad2c686ac9e5/article-placeholder.jpg`,
  category: `anime-manga`,
  tags: [`isekai`, `fantasy anime`, `reincarnation`, `another world`],
  content: [
    { type: "h2", text: `The classic shape` },
    { type: "p", text: `Hero dies (or sleeps, or falls). Hero wakes in a fantasy world — sometimes a game, sometimes a novel they read. Hero is overpowered, underpowered, or weirdly mundane. The fun is watching how they adapt.` },
    { type: "h2", text: `Subgenres worth knowing` },
    { type: "list", ordered: false, items: [`Power fantasy isekai — strong protagonist, easy wins`, `Slow life isekai — protagonist opens a bakery / runs a farm`, `Villainess isekai — heroine reincarnates as the story's villain`, `Dungeon isekai — leveling, parties, loot`] },
  ] as Section[],
};

export default article;
