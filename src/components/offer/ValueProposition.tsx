import { Infinity, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Infinity,
    title: "Perpetual Access",
    description: "Your personal AI workforce that operates indefinitely, growing with your business.",
    color: "text-blue-400"
  },
  {
    icon: Clock,
    title: "24/7 Operation",
    description: "A tireless system that works around the clock, requiring only minimal maintenance costs.",
    color: "text-indigo-400"
  }
];

export default function ValueProposition() {
  return (
    <div className="relative group max-w-5xl mx-auto">
      {/* Outer Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 
        rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Content Container */}
      <div className="relative glass-card glass-card-hover p-10 md:p-16 rounded-[2.5rem] transition-all duration-700 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-transparent pointer-events-none" />

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 relative z-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center group/benefit">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl transform 
                  group-hover/benefit:scale-150 transition-transform duration-700"></div>
                <div className="relative p-6 bg-white/5 rounded-2xl border border-white/10 group-hover/benefit:border-blue-500/50 transition-all duration-500">
                  <benefit.icon className={`w-12 h-12 ${benefit.color} group-hover/benefit:scale-110 transition-transform duration-500`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{benefit.title}</h3>
              <p className="text-lg text-gray-400 leading-relaxed max-w-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}