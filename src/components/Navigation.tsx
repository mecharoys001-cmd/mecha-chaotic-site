'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2" style={{ 
      background: 'rgba(26, 8, 8, 0.95)',
      backdropFilter: 'blur(10px)',
      borderColor: '#ff4500'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/monogram.png"
                alt="MC"
                fill
                className="object-contain"
              />
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#About" className="text-xs font-semibold uppercase tracking-wider hover:text-[#ff4500] transition-colors">
              ABOUT
            </a>
            <a href="#Process" className="text-xs font-semibold uppercase tracking-wider hover:text-[#ff4500] transition-colors">
              Process
            </a>
            <a href="#Team" className="text-xs font-semibold uppercase tracking-wider hover:text-[#ff4500] transition-colors">
              Team
            </a>
            <a href="#FAQ" className="text-xs font-semibold uppercase tracking-wider hover:text-[#ff4500] transition-colors">
              FAQ
            </a>
            <a href="https://forge.mechachaotic.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-wider hover:text-[#ff4500] transition-colors">
              the Forge
            </a>
            
            <div className="w-px h-6 bg-[#ff4500] mx-2"></div>
            
            <a href="/raids" className="text-xs font-semibold uppercase tracking-wider hover:text-[#ff4500] transition-colors">
              Raids
            </a>
            <a href="https://mechachaotic.medium.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-wider hover:text-[#ff4500] transition-colors">
              Medium
            </a>
            <a href="https://discord.gg/HXpeEVSjaY" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-wider hover:text-[#ff4500] transition-colors">
              Discord
            </a>
            <a href="https://twitter.com/MechaChaoticNFT" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-wider hover:text-[#ff4500] transition-colors">
              Twitter
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#ff4500]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t-2 border-[#ff4500] pt-4 space-y-3">
            <a href="#About" className="block text-xs font-semibold uppercase hover:text-[#ff4500] transition-colors">
              About
            </a>
            <a href="#Team" className="block text-xs font-semibold uppercase hover:text-[#ff4500] transition-colors">
              Team
            </a>
            <a href="#FAQ" className="block text-xs font-semibold uppercase hover:text-[#ff4500] transition-colors">
              FAQ
            </a>
            <a href="https://discord.gg/HXpeEVSjaY" target="_blank" rel="noopener noreferrer" className="block text-xs font-semibold uppercase hover:text-[#ff4500] transition-colors">
              Discord
            </a>
            <a href="https://twitter.com/MechaChaoticNFT" target="_blank" rel="noopener noreferrer" className="block text-xs font-semibold uppercase hover:text-[#ff4500] transition-colors">
              Twitter
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
