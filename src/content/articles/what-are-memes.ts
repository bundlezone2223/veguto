import type { Section } from "./types";

export const article = {
  id: `3Al8KxLlBYB`,
  title: `What Are Memes? A Tiny Cultural Field Guide`,
  thumbnail: `/__l5e/assets-v1/c3c7838f-c03d-4239-9bd8-ad2c686ac9e5/article-placeholder.jpg`,
  category: `community`,
  tags: [`memes`, `internet culture`, `meme formats`, `viral images`],
  content: [
    { type: "h2", text: `Where memes come from` },
    { type: "p", text: `A meme is any tiny unit of culture — an image macro, a reaction GIF, a copypasta or a sound — that people remix and pass on. The fastest-spreading ones are usually simple shapes (a template) carrying a feeling (the punchline).` },
    { type: "h2", text: `Why they spread` },
    { type: "p", text: `Memes are reaction shortcuts. They compress a whole mood into one screenshot, which is why they thrive on Twitter/X, TikTok, Discord and Tumblr where speed matters more than polish.` },
    { type: "h2", text: `Anatomy of a good meme` },
    { type: "list", ordered: false, items: [`A recognizable template anyone can reuse`, `A specific, relatable feeling (not a generic joke)`, `Room to remix — the format must survive edits`, `Perfect timing inside a current moment`] },
    { type: "callout", title: `💡 Note`, text: `Memes age in dog years — what slaps on Monday can feel cringe by Friday. That's the fun.` },
  ] as Section[],
};

export default article;
