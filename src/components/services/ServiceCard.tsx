import { useState, useRef } from 'react';
import { LucideIcon } from 'lucide-react';
import EmailTooltip from '../common/EmailTooltip';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  path: string;
  cta?: string;
  className?: string; // Enhanced for Bento Grid
}

export default function ServiceCard({ icon: Icon, title, description, details, cta, className = '' }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current && !isFlipped) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={handleFlip}
      className={`group relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] perspective cursor-pointer flex flex-col ${className}`}
    >
      <div className={`relative w-full h-full transition-all duration-1000 preserve-3d flex flex-col ${isFlipped ? 'rotate-y-180' : ''}`}
        style={{ minHeight: '400px' }}
      >
        {/* Front Face */}
        <div className={`absolute inset-0 w-full h-full backface-hidden flex flex-col transition-all duration-500 glass-card glass-card-hover rounded-3xl overflow-hidden ${isFlipped ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
          {/* Interactive Glow Effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle 200px at var(--mouse-x, 0px) var(--mouse-y, 0px), 
                rgba(59, 130, 246, 0.1), 
                rgba(59, 130, 246, 0) 80%)`
            } as React.CSSProperties}
          />

          {/* Content */}
          <div className="relative h-full p-8 flex flex-col items-center text-center justify-center z-10">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl transform 
                group-hover:scale-150 transition-transform duration-700" />
              <div className="relative p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-blue-500/50 transition-all duration-500">
                <Icon className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors tracking-tight">
              {title}
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              {description}
            </p>

            <div className="mt-8 text-blue-400 font-bold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 text-sm uppercase tracking-widest">
              Explore Solution <span className="text-lg">→</span>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex flex-col rounded-3xl overflow-hidden transition-all duration-700 glass-card border-blue-500/30 ${isFlipped ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className="relative p-8 flex flex-col h-full bg-slate-900/60 backdrop-blur-2xl">
            <div className={`space-y-6 transition-all duration-700 delay-200 ${isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h4 className="text-xl font-bold text-blue-400 mb-2 uppercase tracking-tighter">Capabilities</h4>
              <div className="grid gap-3">
                {details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3 group/item">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/item:scale-150 transition-transform duration-300" />
                    <p className="text-gray-300 text-sm leading-snug">
                      {detail.replace('• ', '')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mt-auto pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <EmailTooltip>
                <a
                  href={`mailto:polat@pdvautomations.com?subject=Inquiry about ${title}`}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full inline-flex items-center justify-center bg-blue-600 
                    text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 
                    transition-all duration-300 shadow-xl shadow-blue-500/20"
                >
                  {cta || "Let's Build It"}
                </a>
              </EmailTooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
