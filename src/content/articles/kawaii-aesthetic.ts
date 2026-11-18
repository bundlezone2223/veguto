import type { Section } from "./types";

export const article = {
  id: `mfNSCgtQETL`,
  title: `The Kawaii Aesthetic, Explained`,
  thumbnail: `/__l5e/assets-v1/c3c7838f-c03d-4239-9bd8-ad2c686ac9e5/article-placeholder.jpg`,
  category: `aesthetics`,
  tags: [`kawaii`, `cute aesthetic`, `pastel`, `soft aesthetic`],
  content: [
    { type: "h2", text: `Core ingredients` },
    { type: "list", ordered: false, items: [`Pastel palette — soft pink, mint, lavender, butter yellow`, `Rounded shapes — no sharp corners, ever`, `Tiny mascots — bunnies, cats, ghosts, frogs`, `Hand-drawn type, hearts, sparkles ✨`] },
    { type: "h2", text: `Kawaii vs cutecore vs fairycore` },
    { type: "p", text: `Kawaii leans Japanese-pop and graphic. Cutecore is louder, kidcore-adjacent, with primary colors. Fairycore swaps the pop palette for mossy greens and mushroom illustrations. They share DNA but feel very different in a moodboard.` },
  ] as Section[],
};

export default article;
