import type { Section } from "./types";

export const article = {
  id: `Zovl6bno5F2`,
  title: `Indie RPGs, Modding & Virtual Assets`,
  thumbnail: `/__l5e/assets-v1/c3c7838f-c03d-4239-9bd8-ad2c686ac9e5/article-placeholder.jpg`,
  category: `gaming`,
  tags: [`indie rpgs`, `modding`, `virtual assets`, `game mods`],
  content: [
    { type: "h2", text: `Why indie RPGs matter` },
    { type: "p", text: `Small teams take risks AAA studios can't. That's where you get turn-based revivals, weird narrative experiments, and entire genres being reinvented every couple of years.` },
    { type: "h2", text: `Getting into modding` },
    { type: "p", text: `Pick a game you already love, install its official mod tools (Skyrim, Stardew, Minecraft all have great ones), and start by tweaking one number. Your first mod should change one thing — then ship it.` },
    { type: "h2", text: `Virtual assets` },
    { type: "p", text: `Sites like itch.io, Sketchfab, and Unity/Unreal stores sell ready-made pixel tiles, 3D props and sound packs. They're how solo devs ship full games — and they're a great way for artists to earn passive income.` },
  ] as Section[],
};

export default article;
