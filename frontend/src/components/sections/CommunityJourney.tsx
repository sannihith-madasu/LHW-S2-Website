import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import mascotCat from "@/assets/mascot-cat.png";
import mascotAi from "@/assets/mascot-ai.png";
import mascotShark from "@/assets/mascot-shark.png";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    mascot: mascotCat,
    alt: "Cat — Explorer",
    accent: "var(--pink)",
    label: "Explore",
    stage: "Stage 1",
    description: "Show up. Pick a track. Attend your first session. Let curiosity be your guide.",
  },
  {
    mascot: mascotAi,
    alt: "Robot — Builder",
    accent: "var(--sun)",
    label: "Build",
    stage: "Stage 2",
    description: "Start building. Collaborate with teammates. Ship something real by Day 6.",
  },
  {
    mascot: mascotShark,
    alt: "Shark — Leader",
    accent: "var(--sky)",
    label: "Lead",
    stage: "Stage 3",
    description: "Return as a mentor. Speak. Inspire. Champion the next generation of hackers.",
  },
];

export function CommunityJourney() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".journey-step-item", {
        y: 50, opacity: 0, stagger: 0.2, duration: 0.8, ease: "back.out(1.3)",
        scrollTrigger: { trigger: ".journey-steps", start: "top 75%" },
      });
      gsap.from(".journey-connector", {
        scaleX: 0, transformOrigin: "left center", duration: 0.6, stagger: 0.3, delay: 0.4,
        ease: "power2.inOut",
        scrollTrigger: { trigger: ".journey-steps", start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="border-b-[3px] border-[var(--ink)] bg-[var(--paper)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-section">
        <div className="text-center mb-16">
          <span className="nb-chip mb-5">🗺️ Your Journey</span>
          <h2 className="font-display text-5xl md:text-7xl mb-4">
            Discover →{" "}
            <span className="bg-[var(--sun)] px-2 nb-border">Build</span>{" "}
            → Lead
          </h2>
          <p className="max-w-2xl mx-auto text-lg font-medium mt-6">
            Every leader started as a learner. Your LHW journey is a progression — and every stage unlocks the next.
          </p>
        </div>

        {/* Journey Steps */}
        <div className="journey-steps flex flex-col md:flex-row items-start md:items-center gap-0 relative">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col md:flex-row items-center flex-1">
              {/* Step card */}
              <div className="journey-step-item flex flex-col items-center text-center flex-1">
                {/* Stage label */}
                <span className="nb-chip mb-4" style={{ background: step.accent }}>
                  {step.stage}
                </span>

                {/* Icon box with mascot */}
                <div className="w-32 h-32 nb-border nb-shadow flex items-center justify-center mb-4 relative"
                  style={{ background: step.accent + "44" }}>
                  <img src={step.mascot} alt={step.alt} className="w-24 h-auto float-anim" />
                </div>

                {/* Label */}
                <h3 className="font-display text-3xl mb-2">{step.label}</h3>
                <p className="font-medium text-sm max-w-xs leading-relaxed opacity-80">{step.description}</p>
              </div>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="journey-connector hidden md:flex items-center justify-center self-start mt-16 px-4 flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <div className="h-[3px] w-12 bg-[var(--ink)]" />
                    <ArrowRight size={20} />
                  </div>
                </div>
              )}

              {/* Mobile vertical connector */}
              {i < steps.length - 1 && (
                <div className="md:hidden flex flex-col items-center py-6">
                  <div className="w-[3px] h-16 bg-[var(--ink)]" />
                  <ArrowRight size={20} style={{ transform: "rotate(90deg)", margin: "-4px 0" }} />
                  <div className="w-[3px] h-16 bg-[var(--ink)]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a href="#join" className="nb-btn nb-btn-pink">
            Start your journey <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
