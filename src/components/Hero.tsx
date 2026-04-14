'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const heroButtons = [
  { label: 'Beast (SOL)', sub: 'Magic Eden', href: 'https://magiceden.io/marketplace/mecha_chaotic_beast' },
  { label: 'Bedlam', sub: 'Magic Eden', href: 'https://magiceden.io/collections/ethereum/0xba0a8ff51f281f7e49c6182390cfbe518f965433' },
  { label: 'Genesis', sub: 'Phase 1 - Opensea', href: 'https://opensea.io/collection/mecha-chaotic' },
  { label: 'R.O.Y.S. blanks', sub: 'Opensea', href: 'https://opensea.io/collection/project-r-o-y-s' },
  { label: 'R.O.Y.S. forged', sub: 'Opensea', href: 'https://opensea.io/collection/forgedroys' },
  { label: 'X Raptor Punks', sub: 'xrp.cafe', href: 'https://xrp.cafe/collection/xraptorpunks' },
  { label: 'Discord', href: 'https://discord.gg/HXpeEVSjaY' },
  { label: 'Twitter', href: 'https://twitter.com/MechaChaoticNFT' },
  { label: 'Medium', href: 'https://mechachaotic.medium.com/' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-mc-orange">
      {/* Background image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/pfp-85.png"
          alt="Hero background"
          fill
          className="object-cover object-right"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/60 to-black/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-20 max-w-4xl mx-auto">
        <Image
          src="/images/logo-orange.png"
          alt="Mecha Chaotic Logo"
          width={800}
          height={400}
          className="w-full max-w-2xl pt-5"
          priority
        />
        <h1 className="text-4xl md:text-6xl font-changa text-mc-orange uppercase text-center mt-8 mb-10">
          Join the Chaos
        </h1>

        <div className="flex flex-wrap justify-center gap-3">
          {heroButtons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-mc-orange px-5 py-2.5 text-mc-orange text-center text-sm font-montserrat font-semibold tracking-wider hover:bg-mc-orange hover:text-mc-dark transition-colors"
            >
              <div>{btn.label}</div>
              {btn.sub && <div className="text-[10px] opacity-70 mt-0.5">{btn.sub}</div>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
