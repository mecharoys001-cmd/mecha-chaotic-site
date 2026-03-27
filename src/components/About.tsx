'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="About" className="py-20 px-4 relative" style={{ background: '#0a0404' }}>
      {/* Background patterns */}
      <div className="absolute top-20 left-0 w-64 h-64 opacity-20">
        <Image
          src="/images/pattern-c.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 orange-glow uppercase" style={{ fontFamily: 'var(--font-changa)' }}>
          Collaborate with Chaos.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mecha Carousel */}
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-lg overflow-hidden border-4 border-[var(--mc-orange)] orange-border-glow">
              <Image
                src="/images/mecha-2.png"
                alt="Mecha Chaotic Collection"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Mecha Chaotic is an <span className="text-[var(--mc-orange)] font-bold">art first experience</span>.
            </p>
            
            <p>
              Whether that's helping craft how a Metabeing looks during a livestream, or with an interactive minting ritual where the decisions you and the community make decide the effect not only what you get, but the collection as a whole.
            </p>
            
            <p>
              Mechas are born into one of the <span className="text-[var(--mc-orange)] font-bold">Five Factions</span> - The Many, Sanctuary, GL-4M, Void, and Baros.
            </p>
            
            <p>
              Owning a piece from any Mecha Chaotic collection gives you access to the community, and livestreams to help craft metabeings, obtain custom derivatives drawn live by Ethan S. Brewerton, and all the other activities that will be created in the future!
            </p>
            
            <p className="text-[var(--mc-orange)] font-bold text-xl italic">
              Welcome to a universe riddled with madness, wreathed in mystery, and crafted by you.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Mecha Chaotic is a growing collection of abominations manifesting on the Ethereum and Solana blockchains.
          </h3>
        </div>
      </div>
    </section>
  );
}
