import { Link } from "@tanstack/react-router";
import { getArticleDescription, getCategoryMeta, type Article } from "@/content/articles";

export function ArticleCover({
  article,
  className = "",
}: {
  article: Article;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={article.thumbnail}
        alt={article.title}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function ArticleCard({
  article,
  compact = false,
}: {
  article: Article;
  compact?: boolean;
}) {
  const category = getCategoryMeta(article.category);
  const description = getArticleDescription(article);
  return (
    <Link
      to="/wiki/$id"
      params={{ id: article.id }}
      className="veg-card group flex h-full min-w-0 flex-col overflow-hidden !p-0"
    >
      <ArticleCover article={article} className="aspect-[2.037/1] w-full" />
      <div className="flex flex-1 flex-col p-5">
        <span className="max-w-full truncate self-start rounded-full bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
          {category?.emoji} {category?.title}
        </span>
        <h3 className={`mt-3 line-clamp-2 min-h-[2.75em] break-words font-sans font-semibold leading-snug ${compact ? "text-lg" : "text-xl"}`}>
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-3 h-18 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
        <span className="mt-auto pt-4 text-sm font-semibold text-primary group-hover:underline">
          Read article →
        </span>
      </div>
    </Link>
  );
}
