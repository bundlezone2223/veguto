import type { Section } from "./types";

export const article = {
  id: `us4arHQz7uI`,
  title: `Manga, Manhwa, Manhua & Light Novels — What's the Difference?`,
  thumbnail: `/__l5e/assets-v1/c3c7838f-c03d-4239-9bd8-ad2c686ac9e5/article-placeholder.jpg`,
  category: `anime-manga`,
  tags: [`manga`, `manhwa`, `manhua`, `light novels`, `webtoons`],
  content: [
    { type: "h2", text: `The four formats` },
    { type: "list", ordered: false, items: [`Manga — Japanese, read right-to-left, usually black and white`, `Manhwa — Korean, often full-color, designed for vertical scroll (Webtoons)`, `Manhua — Chinese, frequently full-color and digital-first`, `Light Novels — short illustrated novels, often the source for anime adaptations`] },
    { type: "h2", text: `Where to read legally` },
    { type: "p", text: `Shonen Jump, MangaPlus, Webtoon, Tappytoon and Yen Press all offer official translations. Supporting official releases keeps your favorite series alive and your translators paid.` },
    { type: "h2", text: `Isekai & fantasy on the rise` },
    { type: "p", text: `A huge slice of new manhwa is isekai or reincarnation fantasy — protagonists waking up inside a novel they read, leveling up, or running a quiet cafe in another world. It's the comfort food of the genre right now.` },
  ] as Section[],
};

export default article;
