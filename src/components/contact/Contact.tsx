import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import LaserEffects from './LaserEffects';
import WhyMe from './WhyMe';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-transparent overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_100%)]"></div>
      <LaserEffects />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ContactHeader />
          <ContactForm />
          <WhyMe />
        </div>
      </div>
    </section>
  );
}