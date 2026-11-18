import type { Section } from "./types";

export const article = {
  id: `HmOfgMjbOQP`,
  title: `Voice Acting & ASMR for Beginners`,
  thumbnail: `/__l5e/assets-v1/c3c7838f-c03d-4239-9bd8-ad2c686ac9e5/article-placeholder.jpg`,
  category: `streaming`,
  tags: [`voice acting`, `asmr`, `voiceover`, `microphone`],
  content: [
    { type: "h2", text: `Your starter setup` },
    { type: "list", ordered: false, items: [`A USB cardioid mic (e.g. Samson Q2U, Fifine K669)`, `A treated corner — blankets, pillows, a closet works`, `Audacity or Reaper for editing (both free / cheap)`, `A consistent recording time — same room, same distance`] },
    { type: "h2", text: `Practice loops` },
    { type: "p", text: `Read 10 minutes of fanfic aloud, daily. Record one short character monologue per week. Re-listen to your work from 30 days ago — the gap is where you'll hear your progress.` },
  ] as Section[],
};

export default article;
