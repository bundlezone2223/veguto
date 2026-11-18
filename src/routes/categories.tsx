import { createFileRoute, Link } from "@tanstack/react-router";
import { Divider } from "@/components/site-chrome";
import { SiteLayout } from "@/components/site-layout";
import { ARTICLES } from "@/content/articles";
import { FEED_SECTIONS, matchesFeedSection } from "@/content/feed-sections";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "All Sections — Veguto Wiki" },
      {
        name: "description",
        content:
          "Browse every Veguto Wiki section: video games, anime, animation, horror games, psychological horror, isekai and indie RPGs.",
      },
      { property: "og:title", content: "All Sections — Veguto Wiki" },
      {
        property: "og:description",
        content:
          "Browse every Veguto Wiki section: video games, anime, animation, horror, psychological horror, isekai and indie RPGs.",
      },
      { property: "og:url", content: "/categories" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/categories" }],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <SiteLayout>
      <Divider>All Sections</Divider>
      <main className="mx-auto max-w-4xl px-4 pb-16">
        <div className="space-y-12">
          {FEED_SECTIONS.map((section) => {
            const items = ARTICLES.filter((a) =>
              matchesFeedSection(a, section),
            );
            return (
              <section key={section.key}>
                <div className="flex items-baseline justify-between gap-3 border-b border-border pb-2">
                  <h2 className="font-display text-3xl">
                    {section.emoji} {section.prefix} {section.highlight}
                  </h2>
                  <Link
                    to="/articles"
                    search={{ section: section.key }}
                    className="shrink-0 text-sm font-semibold text-primary hover:underline"
                  >
                    View all →
                  </Link>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {items.length} {items.length === 1 ? "article" : "articles"}
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {items.map((a) => (
                    <li key={a.id}>
                      <Link
                        to="/wiki/$id"
                        params={{ id: a.id }}
                        className="block rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary"
                      >
                        <img
                          src={a.thumbnail}
                          alt=""
                          className="mr-2 inline-block aspect-[2.037/1] w-12 rounded object-cover align-middle"
                        />
                        <span className="font-medium text-foreground">
                          {a.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          {ARTICLES.length} articles and growing 🌸
        </p>
      </main>
    </SiteLayout>
  );
}
