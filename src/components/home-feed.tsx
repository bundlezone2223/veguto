import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArticleCard } from "@/components/article-card";
import { ARTICLES } from "@/content/articles";
import { FEED_SECTIONS, matchesFeedSection, type FeedSection } from "@/content/feed-sections";

type Article = (typeof ARTICLES)[number];

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const LIMIT = 12;
type Built = { section: FeedSection; items: Article[]; all: Article[] }[];

const FREE_CHUNK = 4;

function build(random: boolean): { sections: Built; free: Article[] } {
  const mix = random ? shuffle : <T,>(x: T[]) => x;
  const sections = mix(
    FEED_SECTIONS.map((section) => {
      const all = ARTICLES.filter((a) => matchesFeedSection(a, section));
      return { section, items: mix(all).slice(0, LIMIT), all };
    }).filter((s) => s.items.length > 0),
  );
  return { sections, free: mix(ARTICLES) };
}

function FreeGrid({ items }: { items: Article[] }) {
  return (
    <section className="mt-8 grid gap-5 sm:grid-cols-2">
      {items.map((a) => (
        <ArticleCard key={a.id} article={a} />
      ))}
    </section>
  );
}

function ShelfRow({ items }: { items: Article[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  const btn =
    "absolute top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 text-foreground shadow-md transition hover:bg-accent md:flex";
  return (
    <div className="relative">
      <button type="button" aria-label="Scroll left" onClick={() => scroll(-1)} className={`${btn} -left-4`}>
        <ChevronLeft className="h-5 w-5" />
      </button>
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((a) => (
          <div key={a.id} className="w-[80%] shrink-0 snap-start sm:w-[45%] lg:w-[31%]">
            <ArticleCard article={a} />
          </div>
        ))}
      </div>
      <button type="button" aria-label="Scroll right" onClick={() => scroll(1)} className={`${btn} -right-4`}>
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}


export function HomeFeed() {
  // Stable order on the server, shuffled after hydration on every page load.
  const [data, setData] = useState(() => build(false));
  useEffect(() => setData(build(true)), []);

  const { sections, free } = data;
  const chunks: Article[][] = [];
  for (let i = 0; i < free.length; i += FREE_CHUNK) chunks.push(free.slice(i, i + FREE_CHUNK));
  const blocks = Math.max(chunks.length, sections.length);

  return (
    <div>
      {Array.from({ length: blocks }).map((_, i) => {
        const shelf = sections[i];
        return (
          <div key={i}>
            {chunks[i] && <FreeGrid items={chunks[i]} />}
            {shelf && (
              <div className="mt-12 mb-6">
                <h2 className="veg-section-title">
                  {shelf.section.emoji} {shelf.section.prefix}{" "}
                  <span className="font-extrabold text-primary">{shelf.section.highlight}</span>
                </h2>
                <ShelfRow items={shelf.items} />
                <div className="mt-4 text-right">
                  <Link
                    to="/articles"
                    search={{ section: shelf.section.key }}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    See all {shelf.section.highlight} articles →
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
