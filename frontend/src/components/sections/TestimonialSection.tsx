import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import mascotShark from "@/assets/mascot-shark.png";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "LHW S1 was the first hackathon I ever attended. By Day 3 I had deployed my first website. The community made it feel completely safe to be a beginner.",
    author: "Aisha R.",
    role: "First-year CS student",
    avatar: "AR",
    avatarBg: "var(--pink)",
  },
  {
    quote: "I submitted my first open-source PR during Open Source Day. The mentors were incredible — they didn't just help me fix the bug, they explained why. That changed everything.",
    author: "Dev Patel",
    role: "Self-taught developer",
    avatar: "DP",
    avatarBg: "var(--sun)",
  },
  {
    quote: "We formed our team on Day 1, built an AI-powered project by Day 5, and won the showcase. Now we're shipping it as a real product. LHW sparked that.",
    author: "Fatima & Sanjay",
    role: "Team Builder Track",
    avatar: "FS",
    avatarBg: "var(--mint)",
  },
];

export function TestimonialSection() {
  const [idx, setIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        y: 50, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".testimonial-card", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const goTo = (newIdx: number) => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, { opacity: 0, x: -20, duration: 0.2, onComplete: () => {
      setIdx(newIdx);
      gsap.fromTo(cardRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" });
    }});
  };

  const t = testimonials[idx];

  return (
    <section id="testimonials" ref={sectionRef} className="border-b-[3px] border-[var(--ink)] bg-[var(--lilac)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-section">
        <div className="text-center mb-12">
          <span className="nb-chip mb-5">💬 Voices from S1</span>
          <h2 className="font-display text-5xl md:text-6xl">What hackers say</h2>
        </div>

        <div ref={cardRef} className="testimonial-card nb-border nb-shadow-lg overflow-hidden">
          {/* Quote side */}
          <div className="p-8 md:p-12 flex flex-col justify-between bg-[var(--paper)]">
            <div>
              <Quote size={40} className="mb-6 opacity-30" />
              <p className="font-display text-2xl md:text-3xl leading-snug mb-8">
                "{t.quote}"
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 nb-border flex items-center justify-center font-display text-sm font-black flex-shrink-0"
                style={{ background: t.avatarBg }}>
                {t.avatar}
              </div>
              <div>
                <div className="font-display text-lg">{t.author}</div>
                <div className="font-mono text-xs uppercase tracking-widest font-bold opacity-60">{t.role}</div>
              </div>
            </div>
          </div>

          {/* Mascot side */}
          <div className="flex flex-col items-center justify-center p-8 border-t-[3px] md:border-t-0 md:border-l-[3px] border-[var(--ink)]"
            style={{ background: "var(--sky)" }}>
            <img src={mascotShark} alt="Shark celebrates" className="w-48 h-auto float-anim-slow" />
            <div className="mt-4 nb-chip" style={{ background: "var(--paper)" }}>
              🦈 Shark approves!
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button onClick={() => goTo((idx - 1 + testimonials.length) % testimonials.length)}
            className="nb-btn nb-btn-ink !py-2 !px-3" aria-label="Previous">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => goTo(i)}
                className="w-3 h-3 nb-border transition-all"
                style={{ background: i === idx ? "var(--ink)" : "var(--paper)" }}
                aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
          <button onClick={() => goTo((idx + 1) % testimonials.length)}
            className="nb-btn nb-btn-ink !py-2 !px-3" aria-label="Next">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
