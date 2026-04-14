import Link from 'next/link';

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'NFT Terms', href: '/nft-terms' },
  { label: 'Terms of Use', href: '/terms-of-use' },
];

export default function Footer() {
  return (
    <footer>
      <section className="py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-changa text-mc-orange">
          Game Early Access available to Holders
        </h2>
      </section>

      <div className="border border-mc-orange flex flex-wrap justify-center gap-4 md:gap-8 py-4 px-6 text-mc-orange/60 text-xs tracking-[1px] uppercase font-montserrat">
        {legalLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="hover:text-mc-orange transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
