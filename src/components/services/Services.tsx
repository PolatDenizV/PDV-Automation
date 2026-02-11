import LaserGrid from './LaserGrid';
import ServicesContent from './ServicesContent';

export default function Services() {
  return (
    <section className="relative py-32 bg-transparent overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_100%)]"></div>
      <LaserGrid />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Content */}
      <ServicesContent />
    </section>
  );
}