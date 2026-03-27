'use client';

import Image from 'next/image';

const factions = [
  {
    name: 'Dominance',
    symbol: '/images/dominance.svg',
    color: '#4a90e2',
    description: 'To seek the Symbol of Dominance is not to seek control, instead it is to seek conversion. Not to a religion or even an idea, but to reach out and grasp at the cold, calculating tendrils of the machine. To seek dominance is to leave behind all desire to dominate, and in doing so gain that power.',
  },
  {
    name: 'Chaos',
    symbol: '/images/chaos.svg',
    color: '#2ecc71',
    description: "Those who make it their life's work to seek out the Symbol of Chaos gaze into the abyss and find absolute madness staring back at them. In the unknowable beauty of chaos there is a didactic fervor. In its agony, it wants you to know its insanity. You will be taught how to spread its message. To embrace insanity is to reshape oneself in the image of true power.",
  },
  {
    name: 'Apex',
    symbol: '/images/apex.svg',
    color: '#e74c3c',
    description: "In mankind's oldest legends, hulking beasts wrapped themselves in flame-wreathed scales, and lorded over mortals. Humanity never forgot the plundered hordes of gold, never forgave the cities burned to ash. Those who quest for the Apex Symbol do so in the knowledge that they seek the audience of powers so vast that reality itself quails before it.",
  },
  {
    name: 'Corrupted',
    symbol: '/images/corrupted.svg',
    color: '#e91e63',
    description: "The greatest fear of man is not the grave, but what might drag itself back from the pit. To harness the Symbol of the Corrupted is to command the restless spectres of the damned. Chittering, hissing, and anguished cries of the resurrected dead ring in the ears of those who face corruption. A heart of gold won't save a hero, for that is exactly what the blackness of the grave desires.",
  },
  {
    name: 'Beast',
    symbol: '/images/beast.svg',
    color: '#9b59b6',
    description: 'The Beast Symbols offer a promise: to move beyond emotion and thought, to embrace instinct. Nothing fights harder than a cornered beast. In the primal mind there is no right, no wrong; evil does not exist, there is only the hunt and the will to endure. Those who seek the Beast Symbols, seek freedom. They seek a savage innocence.',
  },
];

export default function Factions() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 orange-glow uppercase">
            Symbols of Power
          </h2>
          <p className="text-xl text-[var(--mc-text-muted)]">
            Each Symbol of Power represents another aspect of the Chaos
          </p>
        </div>

        {/* Faction Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {factions.map((faction) => (
            <div
              key={faction.name}
              className="relative group"
            >
              <div
                className="bg-[var(--mc-dark-brown)] border-4 rounded-lg p-8 h-full transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: faction.color,
                  boxShadow: `0 0 20px ${faction.color}40`,
                }}
              >
                {/* Symbol */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={faction.symbol}
                    alt={faction.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:rotate-12"
                  />
                </div>

                {/* Name */}
                <h3
                  className="text-3xl font-black text-center mb-4 uppercase tracking-wider"
                  style={{ color: faction.color }}
                >
                  {faction.name}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[var(--mc-text-muted)]">
                  {faction.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
