import type { Section } from "./types";

export const article = {
  id: `LMZmlAVyIyy`,
  title: `Music for Every Aesthetic`,
  thumbnail: `/__l5e/assets-v1/c3c7838f-c03d-4239-9bd8-ad2c686ac9e5/article-placeholder.jpg`,
  category: `aesthetics`,
  tags: [`music`, `lofi`, `playlist`, `soundtrack`],
  content: [
    { type: "h2", text: `Pairings` },
    { type: "list", ordered: false, items: [`Kawaii → future funk, J-pop, Kero Kero Bonito`, `Lofi → ChilledCow / Lofi Girl radio, Nujabes`, `Goth → Sisters of Mercy, Bauhaus, Type O Negative`, `Cyber goth → Combichrist, Aesthetic Perfection`, `Y2K → 2000s pop, French electro`, `Cozy → studio Ghibli soundtracks, neoclassical piano`] },
    { type: "h2", text: `Building your own playlist` },
    { type: "p", text: `Start with 3 anchor songs that feel exactly like the aesthetic. Then look at the 'fans also like' section — that's how you find the next 30 tracks without losing the mood.` },
  ] as Section[],
};

export default article;
