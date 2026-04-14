'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  link?: { text: string; href: string };
}

const faqs: FAQItem[] = [
  {
    question: 'Art first collection?',
    answer: 'Buying this collection supports artists, not a corporation. By supporting artists you empower them to make new and interesting creations.',
  },
  {
    question: 'Which collection should I collect?',
    answer: "That's up to you! Choose the collection that speaks to you!",
    link: { text: "That's up to you! Choose the collection that speaks to you!", href: 'https://mint.mechachaotic.com/' },
  },
  {
    question: "How can I tell what's rare?",
    answer: "Our collections are designed to facilitate people buying what they like, not necessarily what we've decided you should like.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="FAQ" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-changa text-mc-orange text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="border-b border-mc-orange">
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-mc-orange">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 px-2 text-left group"
              >
                <h3 className="text-lg font-changa text-mc-orange group-hover:text-mc-orange/80 transition-colors">
                  {faq.question}
                </h3>
                <span
                  className={`text-mc-orange text-2xl transition-transform duration-300 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 px-2 text-mc-orange/70 font-montserrat text-sm leading-relaxed">
                      {faq.link ? (
                        <a href={faq.link.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-mc-orange">
                          {faq.link.text}
                        </a>
                      ) : (
                        faq.answer
                      )}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
