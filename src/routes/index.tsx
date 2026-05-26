import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Palette,
  Handshake,
  Youtube,
  Instagram,
  Github,
  Star,
  Zap,
  Rocket,
  ArrowRight,
} from "lucide-react";
import mascotCat from "@/assets/mascot-cat.png";
import mascotAi from "@/assets/mascot-ai.png";
import mascotShark from "@/assets/mascot-shark.png";
import logoLhw from "@/assets/logo-lhw.png";
import logoFull from "@/assets/logo-full.png";
import logoWordmark from "@/assets/logo-wordmark.png";
import textLocal from "@/assets/Local.png";
import textHack from "@/assets/Hack.png";
import textWeek from "@/assets/Week.png";

export const Route = createFileRoute("/")({
  component: Index,
});

gsap.registerPlugin(ScrollTrigger);

const days = [
  { n: 1, day: "MON", title: "Opening Ceremony", topic: "Kickoff + Intro to Hacking", color: "var(--sun)" },
  { n: 2, day: "TUE", title: "Web Dev Day", topic: "Build your first site", color: "var(--sky)" },
  { n: 3, day: "WED", title: "AI & ML Day", topic: "Train your first model", color: "var(--pink)" },
  { n: 4, day: "THU", title: "Game Dev Day", topic: "Pixels, sprites & sound", color: "var(--mint)" },
  { n: 5, day: "FRI", title: "Open Source Day", topic: "Your first PR", color: "var(--lilac)" },
  { n: 6, day: "SAT", title: "Project Showcase", topic: "Demo what you built", color: "var(--coral)" },
];

const tracks = [
  { icon: Code2, label: "Code", bg: "var(--sky)" },
  { icon: Palette, label: "Design", bg: "var(--pink)" },
  { icon: Handshake, label: "Collab", bg: "var(--mint)" },
];


function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLElement>(null);
  
  // Animation refs

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word images entrance
      gsap.from(".hero-word", {
        y: 80,
        opacity: 0,
        rotationX: -60,
        stagger: 0.15,
        duration: 1.2,
        ease: "back.out(1.5)",
      });

      gsap.from(".hero-sub", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        delay: 1.0,
        ease: "power2.out",
      });


      // Day cards rise in
      gsap.from(".day-card", {
        y: 60,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".schedule-grid", start: "top 80%" },
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] overflow-x-hidden relative">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b-[3px] border-[var(--ink)] bg-[var(--paper)]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoLhw} alt="LHW" className="h-8 w-auto" />
          </a>
          <ul className="hidden md:flex items-center gap-6 font-mono text-xs uppercase font-bold">
            <li><a href="#about" className="hover:underline decoration-[3px] underline-offset-4">About</a></li>
            <li><a href="#schedule" className="hover:underline decoration-[3px] underline-offset-4">Schedule</a></li>
            <li><a href="#tracks" className="hover:underline decoration-[3px] underline-offset-4">Tracks</a></li>
            <li><a href="#stream" className="hover:underline decoration-[3px] underline-offset-4">Stream</a></li>
          </ul>
          <a href="#join" className="nb-btn nb-btn-pink !py-2 !px-4 text-xs">Register</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="top"
        ref={heroRef}
        className="relative overflow-hidden border-b-[3px] border-[var(--ink)] bg-[var(--deep-blue)] text-[var(--paper)]"
      >
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

        <div className="hidden md:block absolute top-24 left-8 w-20 h-20 bg-[var(--pink)] burst nb-border" aria-hidden />
        <div className="hidden md:block absolute bottom-32 right-16 w-16 h-16 bg-[var(--sky)] burst nb-border" aria-hidden />
        <div className="hidden md:block absolute top-1/2 left-1/3 w-12 h-12 bg-[var(--mint)] burst nb-border" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-5 pt-8 pb-10 md:pt-12">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <span className="nb-chip">
              <Star size={12} fill="currentColor" /> Hackerabad presents
            </span>
            <img src={logoFull} alt="Local Hack Week" className="hidden" />
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center mt-4">
            {/* TEXT COLUMN */}
            <div className="md:col-span-7 lg:col-span-8">
              <h1
                aria-label="Local Hack Week"
                className="relative font-display py-2 md:py-4 flex flex-col items-start gap-3 md:gap-5"
                style={{ perspective: 1200 }}
              >
                <img src={textLocal} alt="Local" className="hero-word h-[12vw] md:h-[8vw] lg:h-[7rem] w-auto will-change-transform" />
                <img src={textHack} alt="Hack" className="hero-word h-[15vw] md:h-[10vw] lg:h-[9rem] w-auto will-change-transform" />
                <img src={textWeek} alt="Week" className="hero-word h-[12vw] md:h-[8vw] lg:h-[7rem] w-auto will-change-transform" />
              </h1>

              <p className="hero-sub max-w-xl text-lg md:text-xl font-medium mt-6">
                A week-long coding adventure for devs, designers &amp; dreamers.
                Free for everyone, everywhere.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#join" className="hero-cta nb-btn nb-btn-pink">
                  Join the Adventure <ArrowRight size={18} />
                </a>
                <a href="#schedule" className="hero-cta nb-btn nb-btn-sky">
                  View Schedule
                </a>
              </div>
            </div>

            {/* CAT CONTAINER (Side by side with text) */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-end mt-4 md:mt-0">
              <div className="relative w-[80%] max-w-[250px] md:max-w-[300px]">
                <div className="absolute -inset-3 bg-[var(--pink)]" />
                <div 
                  className="relative bg-[var(--sky)] nb-border p-4 nb-shadow flex items-center justify-center min-h-[250px] md:min-h-[350px]"
                >
                  <img
                    src={mascotCat}
                    alt="Cool cat mascot"
                    className="w-44 md:w-56 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-6 flex flex-col">
          {/* STRIP 1 (Pink) */}
          <div className="relative border-t-[3px] border-[var(--ink)] bg-[var(--pink)] text-[var(--paper)] overflow-hidden flex whitespace-nowrap">
            <div className="animate-marquee flex gap-8 py-3 font-mono text-xs uppercase tracking-widest font-bold">
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={`strip1-${i}`} className="flex gap-8 items-center">
                  <span>✦ COLLAB</span>
                  <span>★ FREE + OPEN TO ALL</span>
                  <span>★ A WEEK OF HACKS</span>
                  <span>★ HACKERABAD X AIC X ECA PRESENTS</span>
                  <span>✦ TUNE IN LIVE</span>
                  <span>★ LOCAL HACK WEEK</span>
                  <span>✦ CODE</span>
                </span>
              ))}
            </div>
          </div>
          {/* STRIP 2 (Sun) */}
          <div className="relative border-t-[3px] border-[var(--ink)] bg-[var(--sun)] text-[var(--ink)] overflow-hidden flex whitespace-nowrap">
            <div className="animate-marquee flex gap-12 py-3 font-display text-2xl uppercase tracking-widest" style={{ animationDirection: 'reverse' }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={`strip2-${i}`} className="flex gap-12 items-center">
                  <span>EK ✦</span>
                  <span>HACKERABAD X AIC X ECA PRESENTS ★</span>
                  <span>LHW-S2 ✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        ref={stageRef}
        className="relative border-b-[3px] border-[var(--ink)] bg-[var(--paper)] overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
          <div className="flex items-start justify-between gap-6 mb-12 flex-wrap">
            <div>
              <span className="nb-chip mb-4">
                <Zap size={12} /> 01 — About
              </span>
              <h2 className="font-display text-5xl md:text-7xl">
                What is <span className="bg-[var(--pink)] px-2 nb-border">LHW</span>?
              </h2>
            </div>
            <p className="max-w-md text-lg font-medium">
              Inspired by <strong>MLH Global Hack Week</strong>, Local Hack Week brings
              together devs, designers, and innovators for a week of building.
            </p>
          </div>

          <div className="relative grid md:grid-cols-2 gap-6 items-stretch min-h-[420px]">
            {/* SHARK BOX */}
            <div className="relative nb-border bg-[var(--mint)] p-8 nb-shadow flex items-center justify-center overflow-hidden">
              <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest font-bold">
                // crew.left
              </span>
              <div className="flex items-center justify-center min-h-[300px] w-full">
                <img
                  src={mascotShark}
                  alt="Shark mascot"
                  className="w-44 md:w-56 h-auto"
                />
              </div>
            </div>

            {/* AI BOX */}
            <div className="relative nb-border bg-[var(--sky)] p-8 nb-shadow flex items-center justify-center overflow-hidden">
              <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest font-bold">
                // crew.right
              </span>
              <img
                src={mascotAi}
                alt="AI robot mascot"
                className="ai-mascot w-44 md:w-56 h-auto"
              />
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            <div className="nb-card p-6">
              <Rocket className="mb-3" />
              <h3 className="font-display text-2xl mb-2">Learn new skills</h3>
              <p className="font-medium">Workshops, talks, and live builds every day of the week.</p>
            </div>
            <div className="nb-card p-6 bg-[var(--sun)]">
              <Code2 className="mb-3" />
              <h3 className="font-display text-2xl mb-2">Build projects</h3>
              <p className="font-medium">Ship something real, from a one-liner to a full app.</p>
            </div>
            <div className="nb-card p-6 bg-[var(--pink)]">
              <Handshake className="mb-3" />
              <h3 className="font-display text-2xl mb-2">Make friends</h3>
              <p className="font-medium">Meet people who love the same stuff you love.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" className="border-b-[3px] border-[var(--ink)] bg-[var(--lilac)]">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="nb-chip mb-4">
                <Star size={12} fill="currentColor" /> 02 — Tracks
              </span>
              <h2 className="font-display text-5xl md:text-6xl">Pick your track</h2>
            </div>
            <p className="max-w-sm font-medium text-lg">
              Three flavors. Pick one or jump between — it's your hack.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tracks.map(({ icon: Icon, label, bg }) => (
              <div key={label} className="nb-card p-8 text-center" style={{ background: bg }}>
                <div className="inline-flex items-center justify-center w-20 h-20 nb-border bg-[var(--paper)] mb-4">
                  <Icon size={42} />
                </div>
                <h3 className="font-display text-3xl">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="border-b-[3px] border-[var(--ink)] bg-[var(--paper)] bg-dots">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
          <div className="text-center mb-14">
            <span className="nb-chip mb-4">
              <Zap size={12} /> 03 — Schedule
            </span>
            <h2 className="font-display text-5xl md:text-7xl">
              6 Days, <span className="bg-[var(--sun)] px-2 nb-border">6 Vibes</span>
            </h2>
            <p className="mt-5 max-w-2xl mx-auto font-medium text-lg">
              Daily live sessions. Schedules &amp; timings may change and will be updated here.
            </p>
          </div>

          <div className="schedule-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {days.map((d) => (
              <article key={d.n} className="day-card nb-card overflow-hidden" style={{ background: d.color }}>
                <div className="flex items-center justify-between px-5 py-3 border-b-[3px] border-[var(--ink)] bg-[var(--paper)] font-mono text-xs uppercase font-bold tracking-widest">
                  <span>Day {String(d.n).padStart(2, "0")}</span>
                  <span>{d.day}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2">{d.title}</h3>
                  <p className="font-medium mb-5">{d.topic}</p>
                  <button className="nb-btn nb-btn-ink !py-2 !px-4 text-xs">
                    Sessions <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STREAM */}
      <section id="stream" className="border-b-[3px] border-[var(--ink)] bg-[var(--coral)]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center">
          <span className="nb-chip mb-4">
            <Youtube size={12} /> 04 — Tune In
          </span>
          <h2 className="font-display text-5xl md:text-6xl mb-6">Watch the Streams</h2>
          <p className="text-lg font-medium mb-8">
            Catch every live session on Hackerabad's YouTube.
          </p>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="nb-btn nb-btn-ink">
            <Youtube size={20} /> Hackerabad's YT
          </a>
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="relative border-b-[3px] border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center">
          <div className="flex justify-center gap-4 mb-8">
            <img src={mascotCat} alt="" className="w-24 h-auto" />
            <img src={mascotAi} alt="" className="w-24 h-auto" />
            <img src={mascotShark} alt="" className="w-24 h-auto" />
          </div>
          <div className="flex justify-center mb-6">
            <img src={logoWordmark} alt="Local Hack Week" className="h-16 md:h-24 w-auto" />
          </div>
          <p className="text-xl mb-10 font-medium">
            Grab your keyboard. Bring your friends. Let's hack the week.
          </p>
          <a href="#" className="nb-btn nb-btn-pink">
            ► Join the Adventure
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--paper)] py-10">
        <div className="mx-auto max-w-7xl px-5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-widest">
            <img src={logoLhw} alt="LHW" className="h-5 w-auto" />
            Local Hack Week © 2026
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="w-10 h-10 nb-border bg-[var(--pink)] flex items-center justify-center nb-shadow-sm"><Instagram size={18} /></a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 nb-border bg-[var(--coral)] flex items-center justify-center nb-shadow-sm"><Youtube size={18} /></a>
            <a href="#" aria-label="GitHub" className="w-10 h-10 nb-border bg-[var(--sky)] flex items-center justify-center nb-shadow-sm"><Github size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
