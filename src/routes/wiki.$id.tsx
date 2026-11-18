import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Divider } from "@/components/site-chrome";
import { SiteLayout } from "@/components/site-layout";
import { getCategoryMeta, getArticle, ARTICLES, tagSlug } from "@/content/articles";
import { ArticleBody } from "@/components/article-renderer";
import { ArticleCard } from "@/components/article-card";

export const Route = createFileRoute("/wiki/$id")({
  loader: ({ params }) => {
    const article = getArticle(params.id);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    const article = loaderData?.article;
    if (!article) {
      return { meta: [{ title: "Article — Veguto Wiki" }] };
    }
    return {
      meta: [
        { title: `${article.title} — Veguto Wiki` },
        { name: "description", content: `${article.title} — Veguto Wiki` },
        { name: "keywords", content: article.tags.join(", ") },
        { property: "og:title", content: `${article.title} — Veguto Wiki` },
        { property: "og:description", content: `${article.title} — Veguto Wiki` },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/wiki/${params.id}` },
      ],
      links: [{ rel: "canonical", href: `/wiki/${params.id}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            keywords: article.tags.join(", "),
            articleSection: getCategoryMeta(article.category)?.title,
            author: { "@type": "Organization", name: "Veguto Wiki" },
          }),
        },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-5xl text-primary">Article not found</h1>
        <p className="mt-3 text-muted-foreground">
          This little article doesn't exist (yet).
        </p>
        <Link to="/" className="veg-pill mt-6">Back home</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Couldn't load this article</h1>
        <Link to="/" className="veg-pill mt-6">Back home</Link>
      </div>
    </SiteLayout>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = ARTICLES.filter(
    (other) => other.category === article.category && other.id !== article.id,
  ).slice(0, 3);

  return (
    <SiteLayout>
      <main className="w-full pb-16">
        <Link to="/articles" className="mb-4 inline-block text-sm font-semibold text-primary hover:underline">
          ← All articles
        </Link>

        <article className="w-full min-w-0 break-words rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-10">
          <ArticleBody article={article} />

          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-xs">
            {article.tags.map((k) => (
              <Link
                key={k}
                to="/tag/$slug"
                params={{ slug: tagSlug(k) }}
                className="rounded-full border border-border bg-card px-3 py-1 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                #{k}
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/categories" className="veg-pill">Explore more articles</Link>
          </div>
        </article>

        {related.length > 0 && (
          <>
            <Divider>More like this</Divider>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ArticleCard key={r.id} article={r} />
              ))}
            </div>
          </>
        )}
      </main>

    </SiteLayout>
  );
}
