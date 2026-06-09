import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mascotCat from "@/assets/mascot-cat.png";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "500+", label: "Participants" },
  { value: "6", label: "Days of Hacking" },
  { value: "4", label: "Tech Tracks" },
  { value: "3+", label: "Partner Orgs" },
  { value: "100%", label: "Free to Join" },
];

const partners = [
  { name: "Hackerabad", icon: "⚡" },
  { name: "AIC", icon: "🚀" },
  { name: "ECA", icon: "🎓" },
  { name: "GitHub", icon: "🐙" },
  { name: "MLH", icon: "🏆" },
  { name: "Vercel", icon: "▲" },
  { name: "Cloudflare", icon: "🌐" },
  { name: "Replit", icon: "🔄" },
  { name: "Figma", icon: "🎨" },
  { name: "Notion", icon: "📝" },
  { name: "Discord", icon: "💬" },
  { name: "YouTube", icon: "▶" },
];

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        y: 30, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".stats-row", start: "top 80%" },
      });
      gsap.from(".logo-chip", {
        scale: 0.8, opacity: 0, stagger: 0.05, duration: 0.5, ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".logos-grid", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="trust" ref={sectionRef} className="border-b-[3px] border-[var(--ink)] bg-[var(--deep-blue)] text-[var(--paper)] overflow-hidden relative">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 py-section">
        <div className="text-center mb-16">
          <span className="nb-chip mb-5" style={{ background: "var(--sun)", borderColor: "var(--sun)" }}>★ Trusted by the Community</span>
          <h2 className="font-display text-5xl md:text-7xl mb-4">
            Built on{" "}
            <span className="bg-[var(--pink)] px-3 nb-border inline-block text-[var(--ink)]">real</span>{" "}
            partnerships
          </h2>
          <p className="max-w-xl mx-auto text-lg font-medium opacity-80 mt-6">
            Inspired by MLH Global Hack Week, powered by Hackerabad, and backed by a growing ecosystem of creators and organisations.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-row grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="stat-item nb-border p-6 text-center" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div className="stat-number text-[var(--sun)]">{s.value}</div>
              <div className="font-mono text-xs uppercase tracking-widest font-bold mt-1 opacity-70">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-[3px] flex-1 bg-[var(--paper)] opacity-20" />
          <span className="font-mono text-xs uppercase tracking-widest font-bold opacity-60">Partners & Sponsors</span>
          <div className="h-[3px] flex-1 bg-[var(--paper)] opacity-20" />
        </div>
        <div className="logos-grid flex flex-wrap gap-3 justify-center">
          {partners.map((p) => (
            <span key={p.name} className="logo-chip" style={{ color: "var(--ink)", background: "var(--paper)" }}>
              <span>{p.icon}</span>
              {p.name}
            </span>
          ))}
        </div>

        {/* Corner mascot */}
        <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none hidden lg:block">
          <img src={mascotCat} alt="" className="w-48 h-auto" />
        </div>
      </div>
    </section>
  );
}
