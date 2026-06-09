import { useEffect, useRef, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const posts = [
  {
    category: "Project",
    categoryBg: "var(--sky)",
    title: "I built a real-time chat app on Day 4",
    author: "Priya S.",
    authorBg: "var(--pink)",
    avatar: "PS",
    excerpt: "Never used WebSockets before. By end of day I had a working group chat. LHW mentors are insane.",
    href: "#",
  },
  {
    category: "Recap",
    categoryBg: "var(--sun)",
    title: "AI Day was the wildest 8 hours of my life",
    author: "Rahul K.",
    authorBg: "var(--sun)",
    avatar: "RK",
    excerpt: "Trained a digit recognizer. Broke it three times. Fixed it. Shipped it. 10/10 would break again.",
    href: "#",
  },
  {
    category: "Open Source",
    categoryBg: "var(--mint)",
    title: "My first merged PR — a thread",
    author: "Zara M.",
    authorBg: "var(--mint)",
    avatar: "ZM",
    excerpt: "Found an issue, fixed it, got code-reviewed by the maintainer, and it's live. I'm shaking.",
    href: "#",
  },
  {
    category: "Showcase",
    categoryBg: "var(--coral)",
    title: "We won the project showcase 🏆",
    author: "Team ByteBros",
    authorBg: "var(--coral)",
    avatar: "TB",
    excerpt: "Three strangers met on Day 1. Built an AI study assistant by Day 6. Can't believe this is real.",
    href: "#",
  },
  {
    category: "Community",
    categoryBg: "var(--lilac)",
    title: "How LHW helped me find my study group",
    author: "Ananya T.",
    authorBg: "var(--lilac)",
    avatar: "AT",
    excerpt: "I was nervous going in alone. By Day 2 I had 5 new Discord friends who still study with me weekly.",
    href: "#",
  },
  {
    category: "Game Dev",
    categoryBg: "var(--pink)",
    title: "Made my first Pygame game in 6 hours",
    author: "Omar F.",
    authorBg: "var(--pink)",
    avatar: "OF",
    excerpt: "Space shooter with sound effects, score tracking, and a game-over screen. From zero to game.",
    href: "#",
  },
];

export function CommunityFeed() {
  const sectionRef = useRef<HTMLElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section id="community-feed" ref={sectionRef} className="border-b-[3px] border-[var(--ink)] bg-[var(--paper)]">
      <div className="mx-auto max-w-7xl px-5 py-section">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <span className="nb-chip mb-5">🌐 Community</span>
            <h2 className="font-display text-5xl md:text-6xl">
              From the{" "}
              <span className="bg-[var(--sky)] px-3 nb-border inline-block">community</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="nb-btn nb-btn-ink !py-2 !px-3 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="nb-btn nb-btn-ink !py-2 !px-3 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {posts.map((p) => (
            <FeedCard key={p.title} post={p} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {posts.map((p) => (
              <div key={p.title} className="flex-shrink-0 w-[80vw] max-w-[300px]">
                <FeedCard post={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeedCard({ post }: { post: typeof posts[0] }) {
  return (
    <a href={post.href} className="feed-card flex flex-col h-full min-h-[220px]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 nb-border flex items-center justify-center font-display text-xs font-black flex-shrink-0"
          style={{ background: post.authorBg }}>
          {post.avatar}
        </div>
        <div>
          <div className="font-display text-sm">{post.author}</div>
          <span className="inline-block font-mono text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 border border-[var(--ink)]"
            style={{ background: post.categoryBg }}>
            {post.category}
          </span>
        </div>
      </div>
      <h3 className="font-display text-lg leading-tight mb-2 flex-1">{post.title}</h3>
      <p className="text-sm font-medium opacity-70 leading-relaxed mb-4">{post.excerpt}</p>
      <span className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wide group-hover:gap-2 transition-all">
        Read <ArrowRight size={11} />
      </span>
    </a>
  );
}
