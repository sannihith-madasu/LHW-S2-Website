import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/volunteer")({
  component: VolunteerPage,
});

function VolunteerPage() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] flex flex-col items-center justify-center p-6 border-[12px] border-[var(--ink)]">
      <div className="max-w-2xl text-center flex flex-col items-center">
        <div className="inline-block px-4 py-2 border-2 border-black bg-[var(--mint)] text-xs font-bold uppercase tracking-[0.25em] mb-8">
          Volunteer
        </div>

        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.06em] mb-8">
          HELP RUN
          <br />
          THE WEEK
        </h1>

        <p className="text-xl text-neutral-700 leading-relaxed mb-12 max-w-lg">
          Volunteer applications for Local Hack Week 2026 are opening soon.
          Check back later or join the community to get notified.
        </p>

        <Link
          to="/"
          className="
            inline-flex
            items-center
            justify-center
            gap-3
            border-4
            border-black
            bg-[#FFC900]
            px-8
            py-4
            font-display
            uppercase
            tracking-wide
            shadow-[6px_6px_0px_#000]
            transition-all
            hover:-translate-y-1
            hover:shadow-[8px_8px_0px_#000]
          "
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
