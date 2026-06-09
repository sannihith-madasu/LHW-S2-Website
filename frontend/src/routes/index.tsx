import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Youtube,
  Instagram,
  Github,
  ArrowRight,
  Menu,
  X,
  Zap,
} from "lucide-react";

// Assets
import mascotCat from "@/assets/mascot-cat.png";
import mascotAi from "@/assets/mascot-ai.png";
import mascotShark from "@/assets/mascot-shark.png";
import logoLhw from "@/assets/logo-lhw.png";
import logoWordmark from "@/assets/logo-wordmark.png";

// Section components
import { CharacterIntro } from "@/components/sections/CharacterIntro";
import { CommunityJourney } from "@/components/sections/CommunityJourney";
import { CTASection } from "@/components/sections/CTASection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export const Route = createFileRoute("/")({
  component: Index,
});

gsap.registerPlugin(ScrollTrigger);

const navLeft = [
  { href: "#characters", label: "About" },
  { href: "#feature-explore", label: "Explore" },
];
const navRight = [
  { href: "#resources", label: "Resources" },
  { href: "#journey", label: "Journey" },
];

function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sticky nav background
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 60) {
        nav.classList.add("nav-solid");
      } else {
        nav.classList.remove("nav-solid");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        yPercent: 100,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });
      gsap.from(".nav-anim", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
      gsap.from(".hero-visual", {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.5,
        ease: "power2.out",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] overflow-x-hidden relative">

      {/* ═══ HEADER / NAV ═══ */}
      {/* Desktop Navigation */}
      <div className="hidden md:flex nav-anim fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <a href="#top" className="flex items-center justify-center bg-[var(--ink)] text-[var(--paper)] rounded-full px-6 py-2.5 font-display text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-sm">
          LHW / S2
        </a>
      </div>

      <nav className="hidden md:flex fixed top-8 right-8 z-50 flex-col items-end gap-2.5">
        {[
          { href: "#characters", label: "About", color: "var(--mint)" },
          { href: "#feature-explore", label: "Explore", color: "var(--sky)" },
          { href: "#resources", label: "Resources", color: "var(--pink)" },
          { href: "#join", label: "Register", color: "var(--sun)" },
        ].map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-anim px-5 py-2 rounded-full text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-x-2 shadow-sm border-2 border-transparent hover:border-[var(--ink)]"
            style={{ backgroundColor: item.color }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <header className="md:hidden fixed top-0 w-full z-50 flex justify-between items-center p-4 bg-[var(--paper)]/95 backdrop-blur-sm border-b border-[var(--ink)]/10">
        <a href="#top" className="flex items-center justify-center bg-[var(--ink)] text-[var(--paper)] rounded-full px-5 py-2 font-display text-xs uppercase tracking-widest">
          LHW / S2
        </a>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="w-10 h-10 rounded-full bg-[var(--ink)] text-[var(--paper)] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {mobileOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full z-40 bg-[var(--paper)] border-b-2 border-[var(--ink)] shadow-xl flex flex-col p-4 gap-3">
          {[
            { href: "#characters", label: "About", color: "var(--mint)" },
            { href: "#feature-explore", label: "Explore", color: "var(--sky)" },
            { href: "#resources", label: "Resources", color: "var(--pink)" },
            { href: "#join", label: "Register", color: "var(--sun)" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-5 py-3 rounded-full text-center text-sm font-bold text-[var(--ink)] border-2 border-transparent"
              style={{ backgroundColor: item.color }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* ═══ HERO ═══ */}
      <section
        id="top"
        ref={heroRef}
        className="min-h-[100dvh] pt-32 pb-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center max-w-[1800px] mx-auto bg-[var(--paper)]"
      >
        {/* Primary Headline */}
        <div className="w-full mb-[clamp(40px,8vw,80px)] mt-12 md:mt-0">
          <h1 className="font-display font-black text-[var(--ink)] text-[clamp(64px,10vw,180px)] leading-[0.88] tracking-[-0.03em] uppercase">
            <div className="overflow-hidden"><span className="block hero-line">Local</span></div>
            <div className="overflow-hidden"><span className="block hero-line">Hack</span></div>
            <div className="overflow-hidden"><span className="block hero-line">Week</span></div>
          </h1>
        </div>

        {/* Supporting Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 lg:gap-24 items-start w-full">
          {/* Visual Asset */}
          <div className="hero-visual w-full max-w-[280px] md:w-[320px] aspect-[3/4] rounded-[16px] bg-[var(--mint)] overflow-hidden relative border-2 border-[var(--ink)]">
            <img src={mascotCat} alt="Mascot" className="absolute bottom-0 w-full h-[110%] object-contain object-bottom p-4 filter drop-shadow-md" />
          </div>

          {/* Content Block */}
          <div className="hero-content flex flex-col justify-center max-w-[520px] pt-4 md:pt-10">
            <p className="text-[var(--ink)] text-[clamp(17px,2vw,22px)] font-medium leading-relaxed mb-[32px]">
              A free, week-long creative consultancy for developers. We are bringing together designers and creators to build the future, learn new skills, and launch incredible projects.
            </p>
            <div>
              <a href="#join" className="inline-flex items-center justify-center gap-2 bg-[var(--ink)] text-[var(--paper)] rounded-full px-8 h-12 font-bold text-sm uppercase tracking-wider hover:bg-[var(--sun)] hover:text-[var(--ink)] transition-colors shadow-md">
                Join the Movement <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION ORDER (DESIGN.MD) ═══ */}

      {/* Animated Smooth Divider */}
      <div className="w-full py-16 md:py-24 bg-[var(--ink)] overflow-hidden flex relative border-b border-[var(--ink)]/10">
        <div className="absolute inset-0 bg-grid opacity-10 mix-blend-overlay"></div>
        <div className="animate-marquee flex gap-12 whitespace-nowrap items-center w-max relative z-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`div-${i}`} className="flex gap-12 items-center">
              <span className="font-display text-[var(--paper)] text-5xl md:text-8xl uppercase tracking-tight opacity-95">
                Design
              </span>
              <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[var(--sun)]"></span>
              <span className="font-display text-[var(--paper)] text-5xl md:text-8xl uppercase tracking-tight opacity-95">
                Build
              </span>
              <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[var(--mint)]"></span>
              <span className="font-display text-[var(--paper)] text-5xl md:text-8xl uppercase tracking-tight opacity-95">
                Launch
              </span>
              <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[var(--pink)]"></span>
            </div>
          ))}
        </div>
      </div>

      {/* 9. Community Journey */}
      <CommunityJourney />

      {/* 11. CTA / Join */}
      <CTASection />

      {/* 12. Newsletter */}
      <NewsletterSection />

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[var(--ink)] text-[var(--paper)] border-t-[3px] border-[var(--ink)]">
        {/* Main footer columns */}
        <div className="mx-auto max-w-7xl px-5 py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <img src={logoWordmark} alt="Local Hack Week" className="h-12 w-auto mb-4" />
            <p className="font-medium text-sm opacity-70 leading-relaxed max-w-xs">
              A free week-long hackathon inspired by MLH Global Hack Week. Powered by Hackerabad, AIC &amp; ECA.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="w-10 h-10 nb-border bg-[var(--pink)] flex items-center justify-center nb-shadow-sm text-[var(--ink)]">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"
                className="w-10 h-10 nb-border bg-[var(--coral)] flex items-center justify-center nb-shadow-sm text-[var(--ink)]">
                <Youtube size={18} />
              </a>
              <a href="#" aria-label="GitHub"
                className="w-10 h-10 nb-border bg-[var(--sky)] flex items-center justify-center nb-shadow-sm text-[var(--ink)]">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest font-bold mb-5 opacity-60">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Schedule", "Tracks", "Resources", "Community"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="font-medium text-sm opacity-80 hover:opacity-100 hover:underline decoration-[2px] underline-offset-3">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest font-bold mb-5 opacity-60">Community</h4>
            <ul className="space-y-3">
              {["Discord", "YouTube", "GitHub", "Newsletter", "Hackerabad"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-medium text-sm opacity-80 hover:opacity-100 hover:underline decoration-[2px] underline-offset-3">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest font-bold mb-5 opacity-60">Company</h4>
            <ul className="space-y-3">
              {["About Hackerabad", "AIC", "ECA", "Contact Us", "Privacy Policy"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-medium text-sm opacity-80 hover:opacity-100 hover:underline decoration-[2px] underline-offset-3">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-[2px] border-[var(--paper)] border-opacity-10 mx-5">
          <div className="mx-auto max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 font-mono text-xs uppercase font-bold tracking-widest opacity-60">
              <span>Local Hack Week © 2026</span>
              <span>·</span>
              <a href="#" className="hover:opacity-100">Privacy</a>
              <span>·</span>
              <a href="#" className="hover:opacity-100">Terms</a>
            </div>
            {/* Mini mascot icons */}
            <div className="flex items-center gap-2">
              <img src={mascotCat} alt="Cat" className="w-7 h-auto opacity-60 hover:opacity-100 transition-opacity" />
              <img src={mascotAi} alt="Robot" className="w-7 h-auto opacity-60 hover:opacity-100 transition-opacity" />
              <img src={mascotShark} alt="Shark" className="w-7 h-auto opacity-60 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
