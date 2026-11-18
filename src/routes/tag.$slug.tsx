import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Divider } from "@/components/site-chrome";
import { SiteLayout } from "@/components/site-layout";
import { ArticleCard } from "@/components/article-card";
import { articlesByTag, allTags, tagSlug, type Article } from "@/content/articles";

export const Route = createFileRoute("/tag/$slug")({
  loader: ({ params }) => {
    const items = articlesByTag(params.slug);
    if (items.length === 0) throw notFound();
    const original =
      allTags().find((t) => tagSlug(t.tag) === params.slug)?.tag ?? params.slug;
    return { items, tag: original };
  },
  head: ({ params, loaderData }) => {
    const tag = loaderData?.tag ?? params.slug;
    return {
      meta: [
        { title: `#${tag} — Veguto Wiki` },
        {
          name: "description",
          content: `All Veguto Wiki articles tagged #${tag}.`,
        },
        { property: "og:title", content: `#${tag} — Veguto Wiki` },
        { property: "og:description", content: `All Veguto Wiki articles tagged #${tag}.` },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
        { property: "og:url", content: `/tag/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/tag/${params.slug}` }],
    };
  },
  component: TagPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-5xl text-primary">Tag not found</h1>
        <Link to="/tags" className="veg-pill mt-6">
          See all tags
        </Link>
      </div>
    </SiteLayout>
  ),
});

function TagPage() {
  const { items, tag } = Route.useLoaderData() as { items: Article[]; tag: string };
  return (
    <SiteLayout>
      <Divider>#{tag}</Divider>
      <main className="mx-auto max-w-6xl px-4 pb-16">
        <p className="text-center text-sm text-muted-foreground">
          {items.length} article{items.length === 1 ? "" : "s"} tagged #{tag}
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/tags" className="text-sm font-semibold text-primary hover:underline">
            ← Browse all tags
          </Link>
        </div>
      </main>
    </SiteLayout>
  );
}
