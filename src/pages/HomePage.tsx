import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import Offer from '../components/offer/Offer';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import ScrollVideoBackground from '../components/common/ScrollVideoBackground';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ScrollVideoBackground />
      <Services />
      <Offer />
      <Contact />
      <Footer />
    </div>
  );
}