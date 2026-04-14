import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import BedlamSlider from '@/components/BedlamSlider';
import SymbolsOfPower from '@/components/SymbolsOfPower';
import Team from '@/components/Team';
import FAQ from '@/components/FAQ';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <div className="h-[1.5vw] bg-mc-pale" />
      <Navbar />
      <Hero />
      <About />
      <BedlamSlider />
      <SymbolsOfPower />
      <Team />
      <FAQ />
      <Banner />
      <Footer />
    </main>
  );
}
