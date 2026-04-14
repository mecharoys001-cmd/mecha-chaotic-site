'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  '/images/pfp-85.png',
  '/images/pfp-68.png',
  '/images/pfp-32.png',
  '/images/pfp-56.png',
];

export default function BedlamSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 border-b border-mc-orange">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Slider */}
        <div className="relative w-full md:w-1/2 aspect-square">
          <AnimatePresence mode="sync">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[current]}
                alt="Mecha Chaotic PFP"
                fill
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full border border-mc-orange transition-colors ${
                  i === current ? 'bg-mc-orange' : 'bg-transparent'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Side text */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-changa text-mc-orange leading-snug">
            Mecha Chaotic is a growing collection of abominations manifesting
            on the Ethereum and Solana blockchains.
          </h2>
        </div>
      </div>
    </section>
  );
}
