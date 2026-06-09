import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Youtube, BookOpen, Github, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const resources = [
  {
    category: "Workshop",
    categoryBg: "var(--sky)",
    icon: Youtube,
    title: "Build Your First Website in 60 Minutes",
    excerpt: "Follow along with our Web Dev Day livestream. HTML, CSS, and a deployed site by the end — guaranteed.",
    href: "#",
    thumbBg: "var(--sky)",
    thumbEmoji: "🌐",
  },
  {
    category: "Guide",
    categoryBg: "var(--mint)",
    icon: BookOpen,
    title: "The Beginner's Roadmap to Open Source",
    excerpt: "Everything you need to know before submitting your first pull request — from finding issues to getting merged.",
    href: "#",
    thumbBg: "var(--mint)",
    thumbEmoji: "🗺️",
  },
  {
    category: "Workshop",
    categoryBg: "var(--sun)",
    icon: Youtube,
    title: "Train Your First ML Model with Python",
    excerpt: "AI Day recap: from zero to a working image classifier using scikit-learn. No PhD required.",
    href: "#",
    thumbBg: "var(--sun)",
    thumbEmoji: "🤖",
  },
  {
    category: "Resource",
    categoryBg: "var(--pink)",
    icon: Github,
    title: "LHW Starter Kits & Project Templates",
    excerpt: "Jump-start your hack with our curated GitHub repos for web, AI, and game development tracks.",
    href: "#",
    thumbBg: "var(--pink)",
    thumbEmoji: "🚀",
  },
  {
    category: "Community",
    categoryBg: "var(--lilac)",
    icon: MessageCircle,
    title: "Join the Hackerabad Discord",
    excerpt: "10,000+ members. Get unstuck in minutes, share your work, and find teammates for the next hack.",
    href: "#",
    thumbBg: "var(--lilac)",
    thumbEmoji: "💬",
  },
  {
    category: "Recap",
    categoryBg: "var(--coral)",
    icon: Youtube,
    title: "LHW Season 1 Highlights Reel",
    excerpt: "Watch the best moments from last season — project demos, team reactions, and the showcase finale.",
    href: "#",
    thumbBg: "var(--coral)",
    thumbEmoji: "🎬",
  },
  {
    category: "Guide",
    categoryBg: "var(--mint)",
    icon: BookOpen,
    title: "How to Build a Game in a Week",
    excerpt: "Game Dev Day notes: Pygame, Phaser.js, or Godot? Our mentors break down the best tools for beginners.",
    href: "#",
    thumbBg: "var(--mint)",
    thumbEmoji: "🎮",
  },
  {
    category: "Workshop",
    categoryBg: "var(--sky)",
    icon: Youtube,
    title: "Design Systems for Developers",
    excerpt: "Design Day workshop replay: learn Figma fundamentals and how to build component-driven UIs.",
    href: "#",
    thumbBg: "var(--sky)",
    thumbEmoji: "🎨",
  },
];

export function ResourcesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".resource-card", {
        y: 40, opacity: 0, stagger: 0.08, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".resources-grid", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="resources" ref={sectionRef} className="border-b-[3px] border-[var(--ink)] bg-[var(--paper)]">
      <div className="mx-auto max-w-7xl px-5 py-section">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="nb-chip mb-5">📚 Resources</span>
            <h2 className="font-display text-5xl md:text-6xl">
              Learn &{" "}
              <span className="bg-[var(--mint)] px-3 nb-border inline-block">explore</span>
            </h2>
          </div>
          <p className="max-w-sm font-medium text-lg">
            Workshops, guides, and community links to keep you learning between sessions.
          </p>
        </div>

        <div className="resources-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((r) => {
            const Icon = r.icon;
            return (
              <a key={r.title} href={r.href} className="resource-card content-card group">
                {/* Thumbnail */}
                <div className="content-card-thumb flex items-center justify-center text-6xl"
                  style={{ background: r.thumbBg }}>
                  {r.thumbEmoji}
                </div>
                <div className="content-card-body">
                  {/* Category */}
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase font-bold tracking-widest px-2 py-1 border-2 border-[var(--ink)] mb-3"
                    style={{ background: r.categoryBg }}>
                    <Icon size={10} />
                    {r.category}
                  </span>
                  <h3 className="font-display text-lg leading-tight mb-2">{r.title}</h3>
                  <p className="text-sm font-medium opacity-70 leading-relaxed mb-4 flex-1">{r.excerpt}</p>
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wide group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={12} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
