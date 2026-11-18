import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { DISCORD_URL } from "@/content/articles";
import { FEED_SECTIONS } from "@/content/feed-sections";
import discordIconUrl from "@/assets/icons/discord.svg";

function QuickSidebar() {
  const [capacity, setCapacity] = useState(10);
  const [moreOpen, setMoreOpen] = useState(false);
  const links = [
    { label: "🏠 Home", to: "/" as const, group: "Quick nav" },
    { label: "📚 All articles", to: "/articles" as const, group: "Quick nav" },
    { label: "🏷️ Tags", to: "/tags" as const, group: "Quick nav" },
    { label: "✨ About the wiki", to: "/about" as const, group: "Quick nav" },
    ...FEED_SECTIONS.map((section) => ({
      label: `${section.emoji} ${section.highlight}`, to: "/articles" as const, section: section.key, group: "Sections",
    })),
  ];
  useEffect(() => {
    const resize = () => {
      setCapacity(Math.max(1, Math.floor((window.innerHeight - 112 - 240) / 40)));
      setMoreOpen(false);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  const visible = links.slice(0, capacity);
  const overflow = links.slice(capacity);
  return (
    <aside aria-label="Quick navigation" className="veg-quick-sidebar min-w-0">
      <div className="sticky top-24 rounded-xl border border-border bg-card p-5">
        <h2 className="h-9 font-display text-3xl text-primary">Veguto Wiki</h2>
        <nav aria-label="Sidebar links" className="mt-3">
          {visible.map((item, i) => (
            <div key={item.label}>
              {(i === 0 || visible[i - 1]?.group !== item.group) && (
                <p className="flex h-7 items-center px-3 text-xs font-semibold uppercase text-muted-foreground">{item.group}</p>
              )}
              {"section" in item ? (
                <Link to={item.to} search={{ section: item.section }} className="veg-sidebar-link h-10 !py-2">{item.label}</Link>
              ) : (
                <Link to={item.to} className="veg-sidebar-link h-10 !py-2">{item.label}</Link>
              )}
            </div>
          ))}
        </nav>
        {overflow.length > 0 && (
          <Popover open={moreOpen} onOpenChange={setMoreOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="veg-sidebar-link mt-2 h-10 w-full justify-start font-normal data-[state=open]:bg-primary-soft data-[state=open]:text-primary">
                <Ellipsis size={18} /> More
              </Button>
            </PopoverTrigger>
            <PopoverContent side="left" align="end" sideOffset={12} aria-label="More navigation" className="w-max max-w-[calc(100vw-2rem)] p-3">
              <nav aria-label="More sidebar links" className="grid grid-cols-2 gap-x-2 gap-y-1">
                {overflow.map((item) => "section" in item ? (
                  <Link key={item.label} to={item.to} search={{ section: item.section }} onClick={() => setMoreOpen(false)} className="veg-sidebar-link h-10 !py-2">{item.label}</Link>
                ) : (
                  <Link key={item.label} to={item.to} onClick={() => setMoreOpen(false)} className="veg-sidebar-link h-10 !py-2">{item.label}</Link>
                ))}
              </nav>
            </PopoverContent>
          </Popover>
        )}
        <a href={DISCORD_URL} target="_blank" rel="noreferrer" className="mt-3 flex h-10 items-center justify-center gap-2 rounded-xl bg-discord px-4 text-sm font-semibold text-discord-foreground">
          <img src={discordIconUrl} alt="" className="h-5 w-5 [filter:brightness(0)_invert(1)]" />
          Join our Discord
        </a>
      </div>
    </aside>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="veg-page-layout mx-auto grid w-full max-w-7xl gap-8 px-3 pt-6 sm:px-5 lg:px-8">
        <div className="min-w-0">{children}</div>
        <QuickSidebar />
      </div>
      <SiteFooter />
    </div>
  );
}