import { tagSlug, type Article } from "@/content/articles";

export type FeedSection = {
  key: string;
  emoji: string;
  prefix: string;
  highlight: string;
  categories?: string[];
  tags?: string[];
};

export const FEED_SECTIONS: FeedSection[] = [
  { key: "games", emoji: "🎮", prefix: "Everything About", highlight: "Video Games", categories: ["gaming", "games"], tags: ["games", "gaming", "video-games"] },
  { key: "anime", emoji: "🌙", prefix: "Everything About", highlight: "Anime", categories: ["anime-manga", "anime"], tags: ["anime"] },
  { key: "animation", emoji: "🎬", prefix: "Everything About", highlight: "Animation", categories: ["animation"], tags: ["animation"] },
  { key: "horror-games", emoji: "🩸", prefix: "Everything About", highlight: "Horror Games", tags: ["horror-games", "horror-rpgs", "indie-horror"] },
  { key: "psychological-horror", emoji: "🧠", prefix: "Everything About", highlight: "Psychological Horror", tags: ["psychological-horror"] },
  { key: "isekai", emoji: "🌀", prefix: "Everything About", highlight: "Isekai", tags: ["isekai", "another-world", "reincarnation"] },
  { key: "indie-rpg", emoji: "🕹️", prefix: "Everything About", highlight: "Indie RPG Games", tags: ["indie-rpg", "indie-rpgs"] },
];

export function matchesFeedSection(article: Article, section: FeedSection) {
  if (section.categories?.includes(article.category)) return true;
  const slugs = article.tags.map(tagSlug);
  return section.tags?.some((tag) => slugs.includes(tag)) ?? false;
}