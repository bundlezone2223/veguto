import type { Section } from "./types";

export const article = {
  id: `8MfWpW9pWko`,
  title: `Custom Brushes, Textures & Fanart Communities`,
  thumbnail: `/__l5e/assets-v1/c3c7838f-c03d-4239-9bd8-ad2c686ac9e5/article-placeholder.jpg`,
  category: `art`,
  tags: [`custom brushes`, `textures`, `fanart`, `line art`, `tagging`],
  content: [
    { type: "h2", text: `Custom brushes` },
    { type: "p", text: `Procreate, Clip Studio and Krita all let artists sell or share brush packs. A good brush pack saves hours — gritty ink brushes, watercolor wash, halftone shading. Pay artists when you can; it's how the ecosystem survives.` },
    { type: "h2", text: `Fanart etiquette` },
    { type: "list", ordered: false, items: [`Always credit the original character's creator`, `Don't trace another artist's piece and post it as fanart`, `Tag pairings clearly — let people filter what they don't want to see`, `Don't repost others' work without permission, even with credit`] },
    { type: "h2", text: `Line art & tagging` },
    { type: "p", text: `Clean line art is its own skill — long strokes, consistent line weight, deliberate weight variation at joints. Tag your work properly (character name, series, ship tag) so search actually finds it.` },
  ] as Section[],
};

export default article;
