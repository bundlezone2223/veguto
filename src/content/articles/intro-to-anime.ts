import type { Section } from "./types";

export const article = {
  id: `TLquipNA9l9`,
  title: `An Intro to Anime for Brand-New Fans`,
  thumbnail: `/__l5e/assets-v1/c3c7838f-c03d-4239-9bd8-ad2c686ac9e5/article-placeholder.jpg`,
  category: `anime-manga`,
  tags: [`anime`, `isekai`, `slice of life`, `shonen`, `shoujo`],
  content: [
    { type: "h2", text: `What counts as anime` },
    { type: "p", text: `Technically, anime just means animation made in Japan. Culturally it has become shorthand for a recognizable visual style — expressive eyes, dynamic motion lines, vivid color palettes — and a willingness to tell long, character-driven stories.` },
    { type: "h2", text: `Genres to start with` },
    { type: "list", ordered: false, items: [`Shonen — action and friendship arcs (Naruto, Demon Slayer)`, `Shoujo — romance and emotional growth (Fruits Basket)`, `Isekai — getting transported to a fantasy world`, `Iyashikei — healing, slow-paced slice of life`, `Seinen — darker, adult-oriented stories`] },
    { type: "h2", text: `How to watch` },
    { type: "p", text: `Pick a 12-episode series first. Single-cour shows are designed to land a complete arc fast, which makes them perfect for figuring out which genres click with you before committing to a 200+ episode shonen.` },
  ] as Section[],
};

export default article;
