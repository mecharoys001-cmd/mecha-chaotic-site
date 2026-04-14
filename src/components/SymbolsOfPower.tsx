'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Symbol {
  name: string;
  icon: string;
  lore: string;
  bg: string;
}

const symbols: Symbol[] = [
  {
    name: 'Dominance',
    icon: '/images/dominance.svg',
    lore: 'To seek the Symbol of Dominance is not to seek control, instead it is to seek conversion. Not to a religion or even an idea, but to reach out and grasp at the cold, calculating tendrils of the machine. To seek dominance is to leave behind all desire to dominate, and in doing so gain that power.',
    bg: 'from-mc-blue/20 to-mc-blue/5',
  },
  {
    name: 'Chaos',
    icon: '/images/chaos.svg',
    lore: "Those who make it their life's work to seek out the Symbol of Chaos gaze into the abyss and find absolute madness staring back at them. In the unknowable beauty of chaos there is a didactic fervor. In its agony, it wants you to know its insanity. You will be taught how to spread its message. To embrace insanity is to reshape oneself in the image of true power.",
    bg: 'from-mc-lime/20 to-mc-lime/5',
  },
  {
    name: 'Apex',
    icon: '/images/apex.svg',
    lore: "In mankind's oldest legends, hulking beasts wrapped themselves in flame-wreathed scales, and lorded over mortals. Humanity never forgot the plundered hordes of gold, never forgave the cities burned to ash. Those who quest for the Apex Symbol do so in the knowledge that they seek the audience of powers so vast that reality itself quails before it.",
    bg: 'from-mc-red/20 to-mc-red/5',
  },
  {
    name: 'Corrupted',
    icon: '/images/corrupted.svg',
    lore: "The greatest fear of man is not the grave, but what might drag itself back from the pit. To harness the Symbol of the Corrupted is to command the restless spectres of the damned. Chittering, hissing, and anguished cries of the resurrected dead ring in the ears of those who face corruption. A heart of gold won't save a hero, for that is exactly what the blackness of the grave desires.",
    bg: 'from-mc-pink/20 to-mc-pink/5',
  },
  {
    name: 'Beast',
    icon: '/images/beast.svg',
    lore: 'The Beast Symbols offer a promise: to move beyond emotion and thought, to embrace instinct. Nothing fights harder than a cornered beast. In the primal mind there is no right, no wrong; evil does not exist, there is only the hunt and the will to endure. Those who seek the Beast Symbols, seek freedom. They seek a savage innocence.',
    bg: 'from-mc-orange/20 to-mc-orange/5',
  },
];

export default function SymbolsOfPower() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <>
      {/* Header */}
      <section id="Process" className="py-16 text-center border-b border-mc-orange">
        <h2 className="text-4xl md:text-6xl font-changa text-mc-orange font-bold">
          Symbols of Power
        </h2>
        <p className="text-xl md:text-2xl text-mc-orange/70 font-montserrat mt-4 max-w-2xl mx-auto">
          Each Symbol of Power represents another aspect of the Chaos
        </p>
      </section>

      {/* Horizontal scroll */}
      <div ref={containerRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden border-b border-mc-orange">
          <motion.div style={{ x }} className="flex h-full w-[500vw]">
            {symbols.map((symbol) => (
              <div
                key={symbol.name}
                className={`w-screen h-full flex items-center justify-center bg-gradient-to-br ${symbol.bg} border-r border-mc-grey/30`}
              >
                <div className="flex flex-col items-center max-w-md px-8 text-center">
                  <Image
                    src={symbol.icon}
                    alt={symbol.name}
                    width={200}
                    height={200}
                    className="w-[20vw] max-w-[200px] mb-8"
                  />
                  <h3 className="text-3xl font-changa text-mc-orange mb-6">
                    {symbol.name}
                  </h3>
                  <p className="text-mc-orange/70 font-montserrat text-sm leading-relaxed">
                    {symbol.lore}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
