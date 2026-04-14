'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="About" className="relative py-20 border-b border-mc-orange overflow-hidden">
      {/* Animated patterns */}
      <div className="absolute bottom-0 left-0 w-48 opacity-30">
        <Image
          src="/images/pattern-c.png"
          alt=""
          width={200}
          height={200}
          className="animate-float"
        />
        <Image
          src="/images/pattern-a-red.png"
          alt=""
          width={200}
          height={200}
          className="animate-float-delayed mt-4"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-changa text-mc-orange">
          Collaborate with Chaos.
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-mc-orange/80 font-montserrat text-base md:text-lg leading-relaxed space-y-6"
        >
          <p>
            Mecha Chaotic is an art first experience.
          </p>
          <p>
            Whether that&apos;s helping craft how a Metabeing looks during a livestream,
            or with an interactive minting ritual where the decisions you and the community
            make decide the effect not only what you get, but the collection as a whole.
          </p>
          <p>
            Mechas are born into one of the Five Factions - The Many, Sanctuary, GL-4M, Void, and Baros.
          </p>
          <p>
            Owning a piece from any Mecha Chaotic collection gives you access to the community,
            and livestreams to help craft metabeings, obtain custom derivatives drawn live by
            Ethan S. Brewerton, and all the other activities that will be created in the future!
          </p>
          <p className="font-semibold">
            Welcome to a universe riddled with madness, wreathed in mystery, and crafted by you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
