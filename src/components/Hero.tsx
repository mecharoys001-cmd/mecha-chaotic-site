'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-stretch" style={{ background: '#1a0808' }}>
      {/* Left side - Character artwork */}
      <div className="hidden md:block md:w-3/5 lg:w-2/3 relative">
        <div className="absolute inset-0 opacity-80">
          <Image
            src="/images/mecha-1.png"
            alt="Mecha Chaotic Character"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Right side - Logo and buttons */}
      <div className="w-full md:w-2/5 lg:w-1/3 flex flex-col justify-start pt-32 px-8 relative z-10">
        <div className="space-y-8">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/logo.png"
              alt="Mecha Chaotic"
              width={400}
              height={133}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Title */}
          <h1
            className="text-4xl font-black uppercase tracking-wide mb-8"
            style={{ 
              color: '#ff4500',
              fontFamily: 'var(--font-changa)',
            }}
          >
            Join the Chaos
          </h1>

          {/* Collection Buttons - Stacked Vertically */}
          <div className="flex flex-col gap-3">
            <a
              href="https://magiceden.io/marketplace/mecha_chaotic_beast"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#ff4500] px-6 py-4 text-center hover:bg-[#ff6a33] transition-colors"
            >
              <div className="text-sm font-bold uppercase" style={{ color: '#1a0808' }}>
                Beast (SOL)
              </div>
              <div className="text-xs opacity-70" style={{ color: '#1a0808' }}>
                Magic Eden
              </div>
            </a>

            <a
              href="https://magiceden.io/collections/ethereum/0xba0a8ff51f281f7e49c6182390cfbe518f965433"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#ff4500] px-6 py-4 text-center hover:bg-[#ff6a33] transition-colors"
            >
              <div className="text-sm font-bold uppercase" style={{ color: '#1a0808' }}>
                Bedlam
              </div>
              <div className="text-xs opacity-70" style={{ color: '#1a0808' }}>
                Magic Eden
              </div>
            </a>

            <a
              href="https://opensea.io/collection/mecha-chaotic"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#ff4500] px-6 py-4 text-center hover:bg-[#ff6a33] transition-colors"
            >
              <div className="text-sm font-bold uppercase" style={{ color: '#1a0808' }}>
                Genesis
              </div>
              <div className="text-xs opacity-70" style={{ color: '#1a0808' }}>
                Phase 1 - Opensea
              </div>
            </a>

            <a
              href="https://opensea.io/collection/project-r-o-y-s"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#ff4500] px-6 py-4 text-center hover:bg-[#ff6a33] transition-colors"
            >
              <div className="text-sm font-bold uppercase" style={{ color: '#1a0808' }}>
                R.O.Y.S. blanks
              </div>
              <div className="text-xs opacity-70" style={{ color: '#1a0808' }}>
                Opensea
              </div>
            </a>

            <a
              href="https://opensea.io/collection/forgedroys"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#ff4500] px-6 py-4 text-center hover:bg-[#ff6a33] transition-colors"
            >
              <div className="text-sm font-bold uppercase" style={{ color: '#1a0808' }}>
                R.O.Y.S. forged
              </div>
              <div className="text-xs opacity-70" style={{ color: '#1a0808' }}>
                Opensea
              </div>
            </a>

            <a
              href="https://xrp.cafe/collection/xraptorpunks"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#ff4500] px-6 py-4 text-center hover:bg-[#ff6a33] transition-colors"
            >
              <div className="text-sm font-bold uppercase" style={{ color: '#1a0808' }}>
                X Raptor Punks
              </div>
              <div className="text-xs opacity-70" style={{ color: '#1a0808' }}>
                xrp.cafe
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
