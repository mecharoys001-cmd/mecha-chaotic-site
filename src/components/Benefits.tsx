"use client";

const benefits = [
  {
    title: "Community Access",
    description: "Join an exclusive community of collectors and creators",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Live Creation",
    description: "Help craft Metabeings during interactive livestreams",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Custom Derivatives",
    description: "Obtain custom pieces drawn live by Ethan S. Brewerton",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "Future Activities",
    description: "Access to all upcoming events, drops, and experiences",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#000a10] to-[#050508]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan/80 mb-4">
            Ownership
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan to-magenta bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>
        </div>

        <div className="relative p-8 sm:p-12 rounded-2xl bg-[#0a0a18]/80 border border-cyan/20 backdrop-blur-sm mb-16">
          <p className="text-lg sm:text-xl leading-relaxed text-foreground/85 text-center">
            Owning a piece from any Mecha Chaotic collection gives you access to
            the community, and livestreams to help craft metabeings, obtain{" "}
            <span className="text-magenta font-semibold">
              custom derivatives drawn live
            </span>{" "}
            by Ethan S. Brewerton, and all the other activities that will be
            created in the future!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group flex gap-5 p-6 rounded-xl border border-foreground/10 hover:border-cyan/30 bg-[#0a0a18]/40 transition-all duration-300 hover:bg-[#0a0a18]/70"
            >
              <div className="text-cyan shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-foreground/60 text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-32 max-w-2xl mx-auto" />
    </section>
  );
}
