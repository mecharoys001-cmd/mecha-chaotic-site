'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/#About', label: 'ABOUT' },
  { href: '/#Process', label: 'PROCESS' },
  { href: '/#Team', label: 'TEAM' },
  { href: '/#FAQ', label: 'FAQ' },
  { href: 'https://forge.mechachaotic.com/', label: 'THE FORGE', external: true },
  { href: '/raids', label: 'RAIDS' },
  { href: 'https://mechachaotic.medium.com/', label: 'MEDIUM', external: true },
  { href: 'https://discord.gg/HXpeEVSjaY', label: 'DISCORD', external: true },
  { href: 'https://twitter.com/MechaChaoticNFT', label: 'TWITTER', external: true },
];

const LogoSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379.94 289.21" fill="currentColor" className="w-10 h-10">
    <g>
      <path d="M379.86,52.34C379,22.72,339.27,0,339.27,0c26,63.3-19.95,93.22-19.95,93.22s-13.1,7.15-16.42,3.69,13.56-26.43,13.56-26.43L238,133.89s26.85-14.31,33.85-7.2-23.38,36.6-23.38,36.6c-10.73,11.41-26.44,27.34-35.59,21.8s11.75-40.66,11.75-40.66l-53,75.85-98-132.35H0V289.21H63.67V181.5l79.71,107.71h56.4C223,252.32,254,234.15,254,234.15l-27,8.65,17.37-29.6c5.22-8.89,19.64-29.61,37.74-29.61,17.78,0,20.63,27.56,20.63,27.56s3.77,30.12-7.23,30.12-16-25.15-16-25.15v73.09h63.67V245.64s-.34-11.75,3.57-11.75S357.88,241,357.88,241s-14.61-34.64-14.61-67c0-25.61,5.12-24.7,5.12-24.7,5,0,18.34,19,21.3,32.22,0,0-.76-4-1.77-10.14a156.65,156.65,0,0,1,6.23-74.68C377.56,86.34,380.46,71.69,379.86,52.34Z" />
    </g>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border border-mc-orange bg-mc-pale backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="border border-mc-orange p-1.5 text-mc-orange hover:bg-mc-orange hover:text-mc-dark transition-colors">
          <LogoSVG />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="px-3 py-2 text-mc-orange text-xs tracking-[2px] font-montserrat font-semibold hover:bg-mc-orange hover:text-mc-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-mc-orange p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-mc-orange transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-mc-orange transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-mc-orange transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-mc-orange bg-mc-pale">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-mc-orange text-xs tracking-[2px] font-montserrat font-semibold border-b border-mc-orange/20 hover:bg-mc-orange hover:text-mc-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
