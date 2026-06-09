import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import mascotCat from "@/assets/mascot-cat.png";
import mascotAi from "@/assets/mascot-ai.png";
import mascotShark from "@/assets/mascot-shark.png";

gsap.registerPlugin(ScrollTrigger);

const characters = [
  {
    id: "explorer",
    accent: "var(--pink)",
    label: "Path 01",
    name: "The Explorer",
    tagline: "Discover",
    description: "New to tech? No worries. The Explorer dives into every workshop, asks every question, and turns curiosity into code — one day at a time.",
    traits: ["Curious & eager", "Beginner-friendly", "Workshop lover", "Quick learner"],
  },
  {
    id: "builder",
    accent: "var(--sun)",
    label: "Path 02",
    name: "The Builder",
    tagline: "Build",
    description: "The Builder ships things. From web apps to ML models, they turn ideas into projects and sessions into skills.",
    traits: ["Ships side projects", "Open-source contributor", "Hack-sprint champion", "Full-stack tinkerer"],
  },
  {
    id: "leader",
    accent: "var(--sky)",
    label: "Path 03",
    name: "The Leader",
    tagline: "Lead",
    description: "The Leader pays it forward. Mentors, speakers, organizers — they've been through the journey and champion the next wave of hackers.",
    traits: ["Mentor & speaker", "Community builder", "Alumni network", "Ecosystem champion"],
  },
];

export function CharacterIntro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".char-card", {
        y: 60,
        opacity: 0,
        stagger: 0.18,
        duration: 0.9,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".char-grid", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="characters" ref={sectionRef} className="relative border-b-[3px] border-[var(--ink)] bg-[var(--paper)] overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 py-section">
        <div className="text-center mb-16">
          <span className="nb-chip mb-5">✦ Find Your Path</span>
          <h2 className="font-display text-5xl md:text-7xl mb-4">
            Who are{" "}
            <span className="bg-[var(--sun)] px-3 nb-border inline-block">you?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg font-medium mt-6">
            Local Hack Week is for everyone. Find your archetype and follow your path through the week.
          </p>
          <div className="mt-8 inline-flex items-center gap-0 nb-border overflow-hidden nb-shadow">
            {["Discover", "Build", "Lead"].map((step, i) => (
              <div key={step} className="flex items-center">
                <span className="px-6 py-2 font-display text-sm uppercase tracking-wider font-black"
                  style={{ background: i === 0 ? "var(--pink)" : i === 1 ? "var(--sun)" : "var(--sky)" }}>
                  {step}
                </span>
                {i < 2 && (
                  <span className="bg-[var(--ink)] text-[var(--paper)] flex items-center justify-center" style={{ width: 28, height: 36, flexShrink: 0 }}>
                    <ArrowRight size={14} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="char-grid grid md:grid-cols-3 gap-8">
          {characters.map((char) => (
            <div key={char.id} className="char-card character-card" style={{ background: char.accent + "22" }}>
              <span className="absolute top-4 left-4 font-mono text-[10px] uppercase font-bold tracking-widest px-2 py-1 border-2 border-[var(--ink)]"
                style={{ background: char.accent }}>{char.label}</span>
              <span className="absolute top-4 right-4 font-display text-xs uppercase font-black px-3 py-1 nb-border"
                style={{ background: char.accent }}>{char.tagline}</span>
              <div className="mt-12 mb-4">
                {/* No character image rendering */}
              </div>
              <h3 className="font-display text-3xl mb-2">{char.name}</h3>
              <p className="font-medium text-sm leading-relaxed mb-5 max-w-xs">{char.description}</p>
              <ul className="space-y-1 w-full text-left">
                {char.traits.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wide">
                    <span className="w-4 h-4 inline-flex items-center justify-center border-2 border-[var(--ink)] flex-shrink-0 text-[10px]"
                      style={{ background: char.accent }}>✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
