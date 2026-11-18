import type { Section } from "./types";

export const article = {
  id: `szIDIvPdldD`,
  title: `Cozy Gaming: The Genre That Lets You Breathe`,
  thumbnail: `/__l5e/assets-v1/c3c7838f-c03d-4239-9bd8-ad2c686ac9e5/article-placeholder.jpg`,
  category: `gaming`,
  tags: [`cozy gaming`, `cozy games`, `wholesome games`, `farm sim`],
  content: [
    { type: "h2", text: `What makes a game cozy` },
    { type: "list", ordered: false, items: [`No fail states (or very soft ones)`, `A loop you can play at any pace`, `Warm color palette and soft music`, `Quiet stakes — a town, a farm, a shop`] },
    { type: "h2", text: `Starter shelf` },
    { type: "p", text: `Stardew Valley, Animal Crossing, A Short Hike, Cozy Grove, Spiritfarer, Dorfromantik, Coffee Talk. Each one teaches a slightly different shape of 'cozy' — try a couple before deciding which mood you actually want.` },
  ] as Section[],
};

export default article;
