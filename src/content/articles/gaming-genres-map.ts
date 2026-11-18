import type { Section } from "./types";

export const article = {
  id: `7KqP1fnsFOK`,
  title: `A Map of Gaming Genres in 2026`,
  thumbnail: `/__l5e/assets-v1/c3c7838f-c03d-4239-9bd8-ad2c686ac9e5/article-placeholder.jpg`,
  category: `gaming`,
  tags: [`gaming`, `video games`, `game genres`, `indie games`],
  content: [
    { type: "h2", text: `The big genre families` },
    { type: "list", ordered: false, items: [`Cozy — low stakes, gentle progression (Stardew Valley, Cozy Grove)`, `Indie RPG — small teams, story-first (Disco Elysium, Sea of Stars)`, `Soulslike — punishing combat, intricate level design`, `Roguelite — short runs, permanent upgrades (Hades, Balatro)`, `Sandbox — emergent play (Minecraft, Terraria)`] },
    { type: "h2", text: `Where indies live now` },
    { type: "p", text: `itch.io is the open garden, Steam Next Fest is the discovery moment, and Game Pass / PlayStation Plus pick up the breakout hits. Following a few curators beats scrolling the Steam front page.` },
  ] as Section[],
};

export default article;
