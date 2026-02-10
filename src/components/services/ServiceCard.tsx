import { useState, useRef } from 'react';
import { LucideIcon, ChevronDown, ChevronUp } from 'lucide-react';
import TypewriterText from './TypewriterText';
import ContactFormModal from '../common/ContactFormModal';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  path: string;
}

export default function ServiceCard({ icon: Icon, title, description, details }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  // Get the typewriter text based on the title
  const getTypewriterText = () => {
    if (title.includes('Chatbot')) return 'Customer Interaction';
    if (title.includes('Twitter')) return 'Content Generation';
    if (title.includes('Email')) return 'Outreach';
    if (title.includes('Website')) return 'Design';
    if (title.includes('Amazon')) return 'PPC & Reporting';
    return '';
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group relative h-full transition-transform duration-300"
        style={{ willChange: 'transform' }}
      >
        {/* Interactive Glow Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 100px at var(--mouse-x, 0px) var(--mouse-y, 0px), 
              rgba(239, 68, 68, 0.15), 
              rgba(239, 68, 68, 0) 70%)`
          } as React.CSSProperties}
        />

        {/* Card Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-purple-800/80 rounded-2xl 
          group-hover:from-purple-800/90 group-hover:to-purple-700/90 transition-all duration-500" />

        {/* Main Content */}
        <div className="relative h-full bg-purple-950/90 backdrop-blur-xl p-8 rounded-2xl border border-purple-700/50 
          group-hover:border-red-500/50 transition-all duration-300 flex flex-col">
          {/* Icon Container with Typewriter */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-red-500/20 rounded-lg blur-xl transform 
              group-hover:scale-150 transition-transform duration-500" />

            <div className="relative p-4 bg-gradient-to-br from-purple-800/80 to-purple-700/80 rounded-lg 
              border border-purple-600/50 group-hover:border-red-500/50 transition-all duration-300
              transform group-hover:-translate-y-1 flex items-center gap-4">
              <Icon className="w-8 h-8 text-red-400 transform group-hover:scale-110 transition-transform duration-300" />
              <TypewriterText text={getTypewriterText()} />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors typewriter-text">
            {title}
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4 flex-grow typewriter-text">{description}</p>

          {/* Expandable Details */}
          <div className="mt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors typewriter-text"
            >
              {isExpanded ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Learn More
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>

            {isExpanded && (
              <div className="mt-4 space-y-2 text-gray-300">
                {details.map((detail, index) => (
                  <p key={index} className="typewriter-text">{detail}</p>
                ))}
                <div className="mt-6">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 
                      text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-red-600 
                      hover:to-red-700 transition-all duration-300 typewriter-text"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}