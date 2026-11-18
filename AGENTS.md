<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Articles are identified by a short random `id` (URL `/wiki/$id`), without a slug; optional description data is read through getArticleDescription with an opening-paragraph fallback so older articles remain compatible.
- Use ArticleCard for full article preview cards across feeds, categories and related articles to keep sizing and description rendering consistent.
- Wrap all content pages in SiteLayout to share consistent constrained page margins, header, footer and wide-screen Quick navigation sidebar.
- QuickSidebar fits visible links to viewport height and opens overflow links in an adjacent Popover via a matching More navigation row; this preserves the visible links and avoids internal scrolling.
- Article block typography uses a dedicated reading font token, leaving the site's decorative branding unchanged so readability changes remain scoped to article content.
- Define discovery sections and their article matching in src/content/feed-sections.ts; homepage shelves, navigation and URL-backed All articles filters reuse them so section links include every matching article without changing article categories.
