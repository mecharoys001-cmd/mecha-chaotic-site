'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-20 px-4 relative border-t-4 border-[var(--mc-orange)]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/pattern-b2.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Main statement */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Game Early Access available to Holders
          </h2>

          {/* Banner image */}
          <div className="max-w-4xl mx-auto mb-12">
            <Image
              src="/images/banner.png"
              alt="Mecha Chaotic Collection"
              width={1500}
              height={500}
              className="w-full h-auto rounded-lg border-2 border-[var(--mc-orange)] orange-border-glow"
            />
          </div>

          {/* Closing message */}
          <div className="text-xl md:text-2xl font-bold text-[var(--mc-orange)] orange-glow">
            Welcome to a universe riddled with madness, wreathed in mystery, and crafted by you.
          </div>

          {/* Legal links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--mc-text-muted)] pt-12">
            <a href="/privacy-policy" className="hover:text-[var(--mc-orange)] transition-colors">
              Privacy Policy
            </a>
            <a href="/cookie-policy" className="hover:text-[var(--mc-orange)] transition-colors">
              Cookie Policy
            </a>
            <a href="/nft-terms" className="hover:text-[var(--mc-orange)] transition-colors">
              NFT Terms
            </a>
            <a href="/terms-of-use" className="hover:text-[var(--mc-orange)] transition-colors">
              Terms of Use
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-[var(--mc-text-muted)] pt-8">
            © {new Date().getFullYear()} Mecha Chaotic. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
