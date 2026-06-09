import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, Check } from "lucide-react";
import mascotAi from "@/assets/mascot-ai.png";

gsap.registerPlugin(ScrollTrigger);

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".newsletter-content", {
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".newsletter-content", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section id="newsletter" ref={sectionRef} className="border-b-[3px] border-[var(--ink)] bg-[var(--mint)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-section">
        <div className="newsletter-content grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Robot mascot */}
          <div className="flex items-center justify-center order-last md:order-first">
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--sun)] nb-border opacity-50" />
              <div className="relative nb-border p-8 bg-[var(--sun)] flex items-center justify-center nb-shadow">
                <img src={mascotAi} alt="Robot mascot — stay in the loop" className="w-48 h-auto float-anim-delay" />
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <span className="nb-chip mb-5">📬 Stay in the Loop</span>
            <h2 className="font-display text-4xl md:text-5xl mb-4 leading-tight">
              Never miss a{" "}
              <span className="bg-[var(--paper)] px-2 nb-border inline-block">hack</span>
            </h2>
            <p className="text-lg font-medium mb-8 max-w-md leading-relaxed">
              Get notified when S2 goes live, when workshops drop, and when the community does something awesome.
              No spam — just signal.
            </p>

            {submitted ? (
              <div className="nb-border bg-[var(--paper)] p-6 nb-shadow flex items-center gap-4">
                <div className="w-12 h-12 nb-border flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--sky)" }}>
                  <Check size={24} />
                </div>
                <div>
                  <div className="font-display text-xl">You're in! 🎉</div>
                  <p className="font-medium text-sm opacity-70 mt-1">We'll reach out when LHW S2 kicks off.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col sm:flex-row gap-0">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    placeholder="your@email.com"
                    className="newsletter-input"
                    aria-label="Email address"
                  />
                  <button type="submit" className="nb-btn nb-btn-ink flex-shrink-0 !py-0" style={{ height: 52, borderLeft: "none" }}>
                    Subscribe <Send size={16} />
                  </button>
                </div>
                {error && (
                  <p className="mt-2 font-mono text-xs font-bold text-red-700 flex items-center gap-1">
                    ⚠ {error}
                  </p>
                )}
                <p className="mt-3 font-mono text-xs opacity-60">
                  No spam. Unsubscribe anytime. Zero noise.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
