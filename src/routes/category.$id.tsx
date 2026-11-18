import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Divider } from "@/components/site-chrome";
import { SiteLayout } from "@/components/site-layout";
import { articlesByCategory, getCategoryMeta, type CategoryMeta } from "@/content/articles";
import { ArticleCard } from "@/components/article-card";

export const Route = createFileRoute("/category/$id")({
  loader: ({ params }) => {
    const category = getCategoryMeta(params.id);
    if (!category) throw notFound();
    return { category, articles: articlesByCategory(params.id) };
  },
  head: ({ params, loaderData }) => {
    const category = loaderData?.category;
    if (!category) return { meta: [{ title: "Category — Veguto Wiki" }] };
    return {
      meta: [
        { title: `${category.title} — Veguto Wiki` },
        { name: "description", content: category.blurb },
        { property: "og:title", content: `${category.title} — Veguto Wiki` },
        { property: "og:description", content: category.blurb },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
        { property: "og:url", content: `/category/${params.id}` },
      ],
      links: [{ rel: "canonical", href: `/category/${params.id}` }],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-5xl text-primary">Category not found</h1>
        <Link to="/categories" className="veg-pill mt-6">All categories</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Couldn't load this category</h1>
      </div>
    </SiteLayout>
  ),
});

function CategoryPage() {
  const data = Route.useLoaderData() as {
    category: CategoryMeta;
    articles: ReturnType<typeof articlesByCategory>;
  };
  const { category, articles } = data;

  return (
    <SiteLayout>
      <Divider>{category.title}</Divider>
      <main className="mx-auto max-w-3xl px-4 pb-16">
        <div className="text-center">
          <div className="text-5xl">{category.emoji}</div>
          <h1 className="mt-3 font-display text-5xl">{category.title}</h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{category.blurb}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {articles.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/categories" className="veg-pill">All categories</Link>
        </div>
      </main>
    </SiteLayout>
  );
}

