'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  twitter?: string;
}

const team: TeamMember[] = [
  {
    name: 'Ethan S. Brewerton',
    role: 'Founder/Lead Artist',
    bio: "Ethan grew up in Connecticut spending much of his time creating, whether with Legos, clay, sticks, paper, or whatever else he could get his hands on. The drive to create has followed him all through his life. Occasionally this creative passion would lead him to engineering, inventing, and architecture. All the while marveling over Monsters, Superheros, Dinosaurs, and Dragons.\n\nNow as an NFT artist, he smashes all of that together into highly detailed images for your viewing pleasure! Science Fiction, Cyberpunk, Fantasy, and all of those childhood interests get stirred up and combined into the madness that is Mecha Chaotic.",
    twitter: 'https://twitter.com/EthanSBrewerton',
  },
  {
    name: 'Devtexture - Matt',
    role: 'Game Design Lead/Second Brain',
    bio: 'Matt is a US based 3d/2d illustrator, fan of fantasy, science fiction, and filigree. Making unnecessarily detailed images since 2011 and helping Ethan make random dungeons and dragons nonsense since 2014.',
  },
  {
    name: 'Bonkarooni - Mike',
    role: 'Loremaster',
    bio: "Mike grew up in central PA, and has been a writer/story teller for most of his life. He's also moonlighted as a semi-professional gamer, having competed in Starcraft 2 and Magic the Gathering tournaments.\n\nAs the Lore Master for Mecha-Chaotic, he's able to pull from his life long love of science fiction and gritty military stories to create a unique and exciting multiverse for us all to play in!",
  },
  {
    name: 'Walter Ostlie',
    role: 'ROYS Artist/Coloring Machine',
    bio: 'Walter has been creating, writing, and drawing creator-owned and independent comics for nearly a decade. He started with webcomics before moving into the world of print and graphic novels with his books Cubicles, Shiver Bureau, and the Ringo Award winning Metalshark Bro. Most Recently Walter has been using Webtoons to tell his story with Haxor and Ghost Bats. He also created a YouTube channel to help other creators make their own webtoons.',
    twitter: 'https://twitter.com/WalterOstlie',
  },
];

export default function Team() {
  return (
    <section id="Team" className="py-20">
      <h2 className="text-4xl md:text-5xl font-changa text-mc-orange text-center mb-16">
        Team
      </h2>

      <div className="max-w-5xl mx-auto px-6 space-y-8">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border border-mc-orange p-6 md:p-8 bg-[linear-gradient(to_bottom,rgba(255,51,1,0.1),rgba(255,51,1,0.1)),url('/images/noise-red.png')] bg-cover"
          >
            <p className="text-mc-orange/60 text-xs tracking-[1px] uppercase font-montserrat mb-1">
              {member.role}
            </p>
            <h3 className="text-2xl font-changa text-mc-orange mb-4">
              {member.name}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-mc-orange hover:underline text-lg"
                >
                  T
                </a>
              )}
            </h3>
            <p className="text-mc-orange/70 font-montserrat text-sm leading-relaxed whitespace-pre-line">
              {member.bio}
            </p>

            {/* Decorative elements for first member */}
            {i === 0 && (
              <div className="hidden md:flex items-center gap-4 mt-6 justify-end">
                <Image src="/images/pattern-b2.png" alt="" width={50} height={50} className="opacity-40" />
                <div className="w-16 h-16 rotate-12">
                  <Image src="/images/monogram-orange.png" alt="" width={64} height={64} className="opacity-40" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
