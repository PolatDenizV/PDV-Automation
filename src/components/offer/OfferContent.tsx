
import GradientText from '../common/GradientText';

export default function OfferContent() {
  return (
    <div className="relative z-10 container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <GradientText>Your Personal AI Workforce</GradientText>
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          Invest once in a custom automation system and gain a digital workforce that runs 24/7/365.
          Minimal monthly maintenance. No per-seat fees. No scaling headaches.
        </p>
      </div>
    </div>
  );
}