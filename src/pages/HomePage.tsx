import React from 'react';
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import Offer from '../components/offer/Offer';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Offer />
      <Contact />
      <Footer />
    </div>
  );
}