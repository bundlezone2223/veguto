import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Divider } from "@/components/site-chrome";
import { SiteLayout } from "@/components/site-layout";
import { LetterFilter, firstLetter } from "@/components/letter-filter";
import { ArticleCard } from "@/components/article-card";
import { ARTICLES } from "@/content/articles";
import { FEED_SECTIONS, matchesFeedSection } from "@/content/feed-sections";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/articles")({
  validateSearch: (search: Record<string, unknown>): { section?: string } => ({
    section: typeof search.section === "string" && FEED_SECTIONS.some((section) => section.key === search.section)
      ? search.section : undefined,
  }),
  head: () => ({
    meta: [
      { title: "All Articles — Veguto Wiki" },
      {
        name: "description",
        content:
          "Browse every Veguto Wiki article alphabetically — anime, manga, cozy gaming, VTubers, aesthetics, MBTI, OCs and more.",
      },
      { property: "og:title", content: "All Articles — Veguto Wiki" },
      { property: "og:description", content: "Browse every Veguto Wiki article alphabetically — anime, gaming, VTubers and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:url", content: "/articles" },
    ],
    links: [{ rel: "canonical", href: "/articles" }],
  }),
  component: AllArticlesPage,
});

function AllArticlesPage() {
  const [letter, setLetter] = useState("ALL");
  const { section } = Route.useSearch();
  const navigate = Route.useNavigate();
  const selectedSection = FEED_SECTIONS.find((item) => item.key === section);

  const sorted = useMemo(
    () => [...ARTICLES].sort((a, b) => a.title.localeCompare(b.title)),
    [],
  );
  const available = useMemo(
    () => new Set(sorted.map((a) => firstLetter(a.title))),
    [sorted],
  );
  const filtered = useMemo(
    () =>
      sorted.filter((a) => {
        if (selectedSection && !matchesFeedSection(a, selectedSection)) return false;
        if (letter !== "ALL" && firstLetter(a.title) !== letter) return false;
        return true;
      }),
    [sorted, letter, selectedSection],
  );

  return (
    <SiteLayout>
      <Divider>📚 All Articles</Divider>
      <main className="mx-auto max-w-5xl px-4 pb-16">
        <p className="text-center text-sm text-muted-foreground">
          {ARTICLES.length} articles
        </p>

        <div className="mt-6">
          <LetterFilter active={letter} onChange={setLetter} available={available} />
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <Button variant="outline" size="sm"
            aria-pressed={!section}
            onClick={() => { setLetter("ALL"); void navigate({ search: {} }); }}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              !section
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary"
            }`}
          >
            All sections
          </Button>
          {FEED_SECTIONS.map((item) => (
            <Button variant="outline" size="sm"
              key={item.key}
              aria-pressed={section === item.key}
              onClick={() => { setLetter("ALL"); void navigate({ search: { section: item.key } }); }}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                section === item.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary"
              }`}
            >
              {item.emoji} {item.highlight}
            </Button>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Showing {filtered.length} of {ARTICLES.length}
        </p>

        <section className="mt-6 grid gap-5 sm:grid-cols-2">
          {filtered.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </section>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No articles match this filter.{" "}
            <Button variant="link" onClick={() => { setLetter("ALL"); void navigate({ search: {} }); }}>
              Reset
            </Button>
          </p>
        )}
      </main>
    </SiteLayout>
  );
}
