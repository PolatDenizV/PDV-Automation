import LaserBeams from './LaserBeams';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/voiceglow-cdn/o/public%2Flkk3vaaz.jpg?alt=media&token=0b50bef7-e0aa-4919-b76e-d0eae7d12fee')`,
          backgroundColor: '#000',
          willChange: 'transform'
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-gray-900" style={{ willChange: 'transform' }}></div>

      {/* Radial Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>

      {/* Background Effects */}
      <LaserBeams />

      {/* Content */}
      <HeroContent />

      {/* Smooth transition to services section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-900"></div>
    </section>
  );
}