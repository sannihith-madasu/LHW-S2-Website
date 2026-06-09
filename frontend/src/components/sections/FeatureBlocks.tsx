import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BookOpen, Code2, Users } from "lucide-react";
import mascotCat from "@/assets/mascot-cat.png";
import mascotAi from "@/assets/mascot-ai.png";
import mascotShark from "@/assets/mascot-shark.png";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: "explore",
    character: mascotCat,
    characterAlt: "Cat mascot",
    accent: "var(--pink)",
    accentLight: "#f9c5d122",
    chip: "01 — Explore",
    icon: BookOpen,
    title: "Start Your Journey",
    subtitle: "Zero experience needed.",
    description: "Every expert was once a beginner. Local Hack Week gives you live workshops, hands-on challenges, and a community that cheers you on — starting from Day 1.",
    bullets: [
      "Daily live sessions for all skill levels",
      "Beginner-friendly challenges & prompts",
      "Certificate of participation",
      "Lifetime community access",
    ],
    cta: "Explore sessions",
    ctaHref: "#schedule",
    visualRight: true,
  },
  {
    id: "build",
    character: mascotAi,
    characterAlt: "Robot mascot",
    accent: "var(--sun)",
    accentLight: "#f5c84222",
    chip: "02 — Build",
    icon: Code2,
    title: "Build Something Real",
    subtitle: "Ship it. Learn from it. Own it.",
    description: "Pick a track — Web Dev, AI/ML, Game Dev, or Open Source. Over 6 days, build a real project, get feedback from mentors, and showcase your work at the finale.",
    bullets: [
      "4 technical tracks to choose from",
      "6-day intensive build sprint",
      "Project showcase on Day 6",
      "Sponsor prizes & recognition",
    ],
    cta: "View tracks",
    ctaHref: "#tracks",
    visualRight: false,
  },
  {
    id: "lead",
    character: mascotShark,
    characterAlt: "Shark mascot",
    accent: "var(--sky)",
    accentLight: "#5bb8f522",
    chip: "03 — Lead",
    icon: Users,
    title: "Rise as a Leader",
    subtitle: "Pay it forward.",
    description: "The most impactful alumni don't just attend — they mentor, speak, and champion the next cohort. LHW S2 gives you the platform to become a community pillar.",
    bullets: [
      "Mentorship & speaker opportunities",
      "Community recognition & badges",
      "Invitations to future events",
      "Exclusive alumni network",
    ],
    cta: "Join the community",
    ctaHref: "#community",
    visualRight: true,
  },
];

export function FeatureBlocks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      features.forEach((_, i) => {
        const block = `.feature-block-${i}`;
        gsap.from(`${block} .feat-text`, {
          x: -40, opacity: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: block, start: "top 75%" },
        });
        gsap.from(`${block} .feat-visual`, {
          x: 40, opacity: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: block, start: "top 75%" },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {features.map((feat, i) => {
        const Icon = feat.icon;
        const textCol = (
          <div className="feat-text space-y-6">
            <span className="nb-chip">{feat.chip}</span>
            <div>
              <h2 className="font-display text-4xl md:text-5xl leading-none mb-3">{feat.title}</h2>
              <p className="font-display text-xl" style={{ color: feat.accent }}>{feat.subtitle}</p>
            </div>
            <p className="text-lg font-medium leading-relaxed">{feat.description}</p>
            <ul className="space-y-2">
              {feat.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 font-medium">
                  <span className="w-5 h-5 mt-0.5 border-2 border-[var(--ink)] flex-shrink-0 flex items-center justify-center text-xs font-black"
                    style={{ background: feat.accent }}>
                    <Icon size={10} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <a href={feat.ctaHref} className="nb-btn" style={{ background: feat.accent }}>
              {feat.cta} <ArrowRight size={16} />
            </a>
          </div>
        );

        const visualCol = (
          <div className="feat-visual relative flex items-center justify-center min-h-[340px]">
            <div className="absolute inset-0 nb-border" style={{ background: feat.accent + "33" }} />
            <div className="absolute -bottom-4 -right-4 w-full h-full nb-border" style={{ background: feat.accent, zIndex: -1 }} />
            <img src={feat.character} alt={feat.characterAlt}
              className="relative z-10 w-56 h-auto float-anim" style={{ filter: "drop-shadow(4px 6px 0 rgba(0,0,0,0.15))" }} />
          </div>
        );

        return (
          <section
            key={feat.id}
            id={`feature-${feat.id}`}
            className={`feature-block-${i} border-b-[3px] border-[var(--ink)]`}
            style={{ background: feat.accentLight }}
          >
            <div className="mx-auto max-w-7xl px-5 py-section">
              <div className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center`}>
                {feat.visualRight ? (
                  <>{textCol}{visualCol}</>
                ) : (
                  <>{visualCol}{textCol}</>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
