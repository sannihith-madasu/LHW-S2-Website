import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
});

const faqs = [
  {
    q: "What is Local Hack Week?",
    a: "Local Hack Week is a week-long event that brings together developers, designers, and innovators to build, learn, and collaborate.",
  },
  {
    q: "Who can participate?",
    a: "Anyone can participate! Whether you're a beginner or an experienced developer, there's something for everyone at Local Hack Week.",
  },
  {
    q: "Is it free to join?",
    a: "Yes, Local Hack Week is completely free to join. All you need is a computer and an internet connection.",
  },
  {
    q: "Where can I watch the online streams?",
    a: "You can watch the online streams on Hackerabad's YouTube channel.",
  },
];

function FAQPage() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] relative overflow-hidden">
      {/* Background watermark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display font-black text-[20vw] leading-none text-black/[0.03] tracking-[-0.08em]">
          FAQ
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] opacity-60 hover:opacity-100 transition-opacity mb-12"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 border-2 border-black bg-[var(--sun)] text-xs font-bold uppercase tracking-[0.25em] mb-6">
            FAQs
          </div>
          <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-[-0.06em]">
            FREQUENTLY
            <br />
            ASKED.
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col divide-y-2 divide-black border-t-4 border-b-4 border-black">
          {faqs.map(({ q, a }) => (
            <div key={q} className="py-8 grid md:grid-cols-[1fr_1.4fr] gap-8 items-start">
              <h2 className="font-display text-xl md:text-2xl leading-tight">
                {q}
              </h2>
              <p className="text-neutral-700 leading-relaxed text-base md:text-lg">
                {a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            to="/"
            className="
              inline-flex items-center gap-2
              border-4 border-black bg-[var(--sun)]
              px-8 py-4
              font-display uppercase tracking-wide
              shadow-[6px_6px_0px_#000]
              transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000]
            "
          >
            Back to Home
          </Link>
          <a
            href="mailto:hello@hackerabad.com"
            className="
              inline-flex items-center gap-2
              border-4 border-black bg-[var(--paper)]
              px-8 py-4
              font-display uppercase tracking-wide
              shadow-[6px_6px_0px_#000]
              transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000]
            "
          >
            Still have questions?
          </a>
        </div>
      </div>
    </div>
  );
}
