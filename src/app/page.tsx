import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HorizontalScroll from '@/components/HorizontalScroll';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <HorizontalScroll />
        <Footer />
      </main>
    </>
  );
}
