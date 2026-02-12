import { CheckCircle2 } from 'lucide-react';

export default function WhyMe() {
    const points = [
        "Built manually, not templated",
        "No outsourcing or agency layers",
        "Systems designed around your workflow",
        "You own the automation — not a subscription"
    ];

    return (
        <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Why PDV Automation</h3>
            <div className="grid md:grid-cols-2 gap-6">
                {points.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span className="text-gray-300 text-lg">{point}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
