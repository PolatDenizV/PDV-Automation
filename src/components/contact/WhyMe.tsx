import { CheckCircle2 } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export default function WhyMe() {
    const { contact } = siteContent;

    return (
        <div className="mt-24 p-10 md:p-12 rounded-[2.5rem] glass-card glass-card-hover relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] to-transparent pointer-events-none" />

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center tracking-tight relative z-10">
                {contact.whyMe.title}
            </h3>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {contact.whyMe.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-4 group/point">
                        <div className="mt-1">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 group-hover/point:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="text-gray-300 text-lg font-medium leading-tight">{point}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

