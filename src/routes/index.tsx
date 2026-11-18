import { createFileRoute, Link } from "@tanstack/react-router";
import { Divider } from "@/components/site-chrome";
import { SiteLayout } from "@/components/site-layout";
import { SearchBar } from "@/components/search-bar";
import { HomeFeed } from "@/components/home-feed";
import { ARTICLES, CATEGORY_LIST, DISCORD_URL, allTags, tagSlug } from "@/content/articles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veguto Wiki — Tiny guides for the internet we love" },
      {
        name: "description",
        content:
          "A cozy wiki about anime, manga, cozy gaming, kawaii & dark aesthetics, drawing, cosplay, VTubers, roleplay, MBTI and more.",
      },
      { property: "og:title", content: "Veguto Wiki" },
      {
        property: "og:description",
        content:
          "A cozy wiki about anime, manga, cozy gaming, kawaii & dark aesthetics, drawing, VTubers, roleplay and more.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// Counts of 100+ round down to the nearest ten (108 -> "100+", 113 -> "110+").
function formatStat(n: number) {
  return `${n >= 100 ? Math.floor(n / 10) * 10 : n}+`;
}

// Temporary visitor count — replace with real analytics later.
const SITE_VISITORS_LABEL = "14k+";

function Index() {
  const tags = allTags().slice(0, 24);

  return (
    <SiteLayout>

      <div>
        {/* Main column */}
        <main>
          {/* Hero card */}
          <section className="veg-hero">
            <p className="font-display text-2xl text-primary">welcome to</p>
            <h1 className="mx-auto mt-1 max-w-2xl font-display text-5xl leading-tight md:text-6xl">
              Veguto Wiki
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base text-foreground/70">
              Your cozy guide to anime, VTubing, cozy games, kawaii & dark aesthetics,
              and the soft little community in between. 🌸
            </p>
            <div className="mx-auto mt-6 max-w-md">
              <SearchBar size="lg" />
            </div>
          </section>

          {/* Stats */}
          <section className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="veg-stat">
              <div className="veg-stat-num">{formatStat(ARTICLES.length)}</div>
              <div className="veg-stat-label">articles & guides</div>
            </div>
            <div className="veg-stat">
              <div className="veg-stat-num">{formatStat(CATEGORY_LIST.length)}</div>
              <div className="veg-stat-label">cozy categories</div>
            </div>
            <div className="veg-stat">
              <div className="veg-stat-num">{formatStat(allTags().length)}</div>
              <div className="veg-stat-label">tags to explore</div>
            </div>
            <div className="veg-stat">
              {/* Temporary placeholder until real visitor analytics are wired up. */}
              <div className="veg-stat-num">{SITE_VISITORS_LABEL}</div>
              <div className="veg-stat-label">monthly visitors</div>
            </div>
          </section>

          <HomeFeed />

          {/* Discord banner */}
          <section className="mt-10">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#5865F2] via-[#7983f5] to-[#a78bfa] p-8 text-center text-white shadow-xl">
              <div className="text-4xl">💬</div>
              <h2 className="mt-2 font-display text-3xl text-white md:text-4xl">
                Join the Veguto Discord
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm opacity-90">
                Chat about anime, cozy games, art, OCs, VTubers and aesthetics.
              </p>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block rounded-full bg-white px-7 py-2.5 text-sm font-bold text-[#5865F2] shadow-md transition-transform hover:scale-105"
              >
                Open the invite →
              </a>
            </div>
          </section>

          {/* Tags */}
          <h2 className="veg-section-title">🏷️ Popular tags</h2>
          <section>
            <div className="flex flex-wrap gap-2">
              {tags.map(({ tag, count }) => (
                <Link
                  key={tag}
                  to="/tag/$slug"
                  params={{ slug: tagSlug(tag) }}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  #{tag} <span className="text-xs opacity-60">{count}</span>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-right">
              <Link to="/tags" className="text-sm font-semibold text-primary hover:underline">
                See all tags →
              </Link>
            </div>
          </section>
        </main>

      </div>

    </SiteLayout>
  );
}
