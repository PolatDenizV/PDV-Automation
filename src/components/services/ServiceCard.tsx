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
}

export default function ServiceCard({ icon: Icon, title, description, details, cta }: ServiceCardProps) {
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
      className="group relative transition-all duration-500 ease-in-out perspective cursor-pointer"
      style={{
        minHeight: '400px',
      }}
    >
      <div className={`relative w-full h-full transition-all duration-700 preserve-3d flex flex-col ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Face */}
        <div className={`absolute inset-0 backface-hidden flex flex-col transition-opacity duration-300 ${isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {/* Interactive Glow Effect (Only on Front) */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
            style={{
              background: `radial-gradient(circle 100px at var(--mouse-x, 0px) var(--mouse-y, 0px), 
                rgba(239, 68, 68, 0.15), 
                rgba(239, 68, 68, 0) 70%)`
            } as React.CSSProperties}
          />

          {/* Card Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-purple-800/80 rounded-2xl 
            group-hover:from-purple-800/90 group-hover:to-purple-700/90 transition-all duration-500" />

          {/* Content */}
          <div className="relative h-full bg-purple-950/90 backdrop-blur-xl p-8 rounded-2xl border border-purple-700/50 
            group-hover:border-red-500/50 transition-all duration-300 flex flex-col items-center text-center justify-center">

            <div className="relative mb-6">
              <div className="absolute inset-0 bg-red-500/20 rounded-lg blur-xl transform 
                group-hover:scale-150 transition-transform duration-500" />
              <div className="relative p-5 bg-gradient-to-br from-purple-800/80 to-purple-700/80 rounded-xl 
                border border-purple-600/50 group-hover:border-red-500/50 transition-all duration-300">
                <Icon className="w-12 h-12 text-red-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
              {title}
            </h3>
            <p className="text-gray-300 leading-relaxed line-clamp-3">
              {description}
            </p>

            <div className="mt-6 text-red-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
              Learn More →
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className={`relative w-full h-full backface-hidden rotate-y-180 flex flex-col rounded-2xl overflow-hidden transition-opacity duration-500 ${isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-purple-900 border border-red-500/50" />

          <div className="relative p-8 flex flex-col h-full bg-purple-950/40 backdrop-blur-sm">
            <div className={`space-y-4 transition-all duration-700 delay-200 ${isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h4 className="text-xl font-bold text-red-400 mb-6">Key Features</h4>
              <div className="space-y-3">
                {details.map((detail, index) => (
                  <p key={index} className="text-gray-200 text-sm flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    {detail}
                  </p>
                ))}
              </div>
            </div>

            <div className={`mt-auto pt-8 border-t border-purple-700/50 transition-all duration-700 delay-400 ${isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <EmailTooltip>
                <a
                  href={`mailto:polat@pdvautomations.com?subject=Inquiry about ${title}`}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 
                    text-white px-6 py-3 rounded-xl font-bold hover:from-red-600 hover:to-red-700 
                    transition-all duration-300 shadow-lg shadow-red-500/20"
                >
                  {cta || "Inquire Now"}
                </a>
              </EmailTooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
