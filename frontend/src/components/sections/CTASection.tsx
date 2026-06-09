import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ExternalLink } from "lucide-react";
import mascotShark from "@/assets/mascot-shark.png";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".cta-content", start: "top 80%" },
      });
      gsap.from(".cta-shark", {
        x: 60, opacity: 0, duration: 0.9, delay: 0.2, ease: "back.out(1.3)",
        scrollTrigger: { trigger: ".cta-content", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="join" ref={sectionRef} className="relative border-b-[3px] border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 py-section">
        <div className="cta-content grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div>
            <span className="nb-chip mb-6" style={{ background: "var(--sun)", borderColor: "var(--sun)", color: "var(--ink)" }}>
              🚀 Season 2 is here
            </span>
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-6">
              Ready to{" "}
              <span className="bg-[var(--pink)] px-3 nb-border inline-block text-[var(--ink)]">hack</span>
              <br />
              the week?
            </h2>
            <p className="text-xl font-medium mb-8 opacity-80 max-w-md leading-relaxed">
              Grab your keyboard. Bring your friends. Whether you're an Explorer, Builder, or Leader — there's a spot for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" id="cta-register" className="nb-btn nb-btn-pink text-[var(--ink)]">
                Register for Free <ArrowRight size={18} />
              </a>
              <a href="#schedule" className="nb-btn nb-btn-outline border-[var(--paper)] text-[var(--paper)] hover:bg-[var(--paper)] hover:text-[var(--ink)]">
                View Schedule <ExternalLink size={16} />
              </a>
            </div>

            {/* Stat bar */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[["100%", "Free"], ["6", "Days"], ["4", "Tracks"]].map(([val, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl" style={{ color: "var(--sun)" }}>{val}</div>
                  <div className="font-mono text-xs uppercase tracking-widest font-bold opacity-60">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Shark mascot */}
          <div className="cta-shark flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-[var(--sky)] nb-border opacity-30" />
              <div className="relative nb-border p-8 flex items-center justify-center"
                style={{ background: "var(--sky) " }}>
                <img src={mascotShark} alt="Shark celebrates — join us!" className="w-56 h-auto float-anim-slow" />
              </div>
              {/* Speech bubble */}
              <div className="absolute -top-8 -right-4 nb-border bg-[var(--paper)] text-[var(--ink)] px-4 py-2 font-display text-sm nb-shadow-sm">
                Let's go! 🦈
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
