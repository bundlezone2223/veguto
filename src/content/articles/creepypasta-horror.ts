import type { Section } from "./types";

export const article = {
  id: `sj4RmM5offK`,
  title: `Creepypasta, Horror RPGs & Cyber Goth`,
  thumbnail: `/__l5e/assets-v1/c3c7838f-c03d-4239-9bd8-ad2c686ac9e5/article-placeholder.jpg`,
  category: `dark-side`,
  tags: [`creepypasta`, `horror rpgs`, `cyber goth`, `indie horror`],
  content: [
    { type: "h2", text: `Creepypasta` },
    { type: "p", text: `Short, shareable horror fiction written for the internet. The classics (Slender Man, Ben Drowned, SCP-173) work because they pretend to be real artifacts — found footage, archived posts, lab files. The format is half the scare.` },
    { type: "h2", text: `Horror RPGs` },
    { type: "p", text: `Indie horror RPGs like OMORI, Ib, Mad Father and The Coffin of Andy and Leyley use RPG Maker's cozy pixel style as camouflage for genuinely dark stories. The contrast is the whole point.` },
    { type: "h2", text: `Cyber goth` },
    { type: "p", text: `Cyber goth is the rave-floor cousin of traditional goth — UV-reactive everything, dread falls, gas masks as fashion, EBM as the soundtrack. Less candlelit graveyard, more underground club at 3am.` },
  ] as Section[],
};

export default article;
