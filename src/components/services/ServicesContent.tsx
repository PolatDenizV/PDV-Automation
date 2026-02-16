import { MessageSquare, Twitter, Mail, Palette, BarChart3 } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: MessageSquare,
    title: "AI Chatbot Systems",
    description: "Custom AI agents integrated into your stack — capturing leads, booking calls, and handling 24/7 support without human intervention.",
    path: "/services/chatbot-creation",
    cta: "Scale My Support →",
    details: [
      "• CRM-connected lead capture",
      "• 24/7 automated support",
      "• Appointment & call booking",
      "• Human handoff logic",
      "• Telegram & web integrations"
    ],
    className: "md:col-span-2" // Featured
  },
  {
    icon: Twitter,
    title: "Twitter Engine",
    description: "AI-generated content posted 24/7. Optimized for engagement and brand voice without a social manager.",
    path: "/services/twitter-automation",
    details: [
      "• AI content generation",
      "• Automated posting schedule",
      "• Engagement optimization",
      "• Brand voice protection"
    ],
    className: "md:col-span-1"
  },
  {
    icon: Mail,
    title: "Cold Email B2B",
    description: "Send hundreds of context-aware, personalized emails daily. High response rates (~25%) without manual research.",
    path: "/services/email-automation",
    details: [
      "• AI-driven personalization",
      "• LinkedIn integration",
      "• Email warmup protocols",
      "• context-aware icebreakers"
    ],
    className: "md:col-span-1"
  },
  {
    icon: Palette,
    title: "Premium Web Design",
    description: "High-end websites built in 24 hours with automated lead capture and instant AI follow-up systems.",
    path: "/services/web-design",
    details: [
      "• 24-hour turnaround",
      "• Automated lead capture",
      "• AI Email/Phone agents",
      "• Modern UI/UX stack"
    ],
    className: "md:col-span-2" // Featured
  },
  {
    icon: BarChart3,
    title: "Amazon Ads",
    description: "API-driven Amazon Sponsored Ads optimization. Data-driven PPC without daily manual work.",
    path: "/services/amazon-ads",
    details: [
      "• Automated bidding & optimization",
      "• API-driven management",
      "• Performance analytics",
      "• Authorized seller integration"
    ],
    className: "md:col-span-3" // Full width feature
  }
];

export default function ServicesContent() {
  return (
    <div className="relative z-10 container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-gradient">
          Automation handles execution.<br />AI handles thinking.
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
          High-performance systems tailored to your business — not templates, not subscriptions, not SaaS fluff.
        </p>
      </div>

      {/* Bento Grid Intro */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="glass-card p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-blue-400 mb-4 uppercase tracking-widest text-sm">The Problem</h3>
          <p className="text-gray-400 leading-relaxed font-medium">
            Standard automation is rigid and still requires human babysitting for corner cases.
          </p>
        </div>
        <div className="glass-card p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-indigo-400 mb-4 uppercase tracking-widest text-sm">The Missing Piece</h3>
          <p className="text-gray-400 leading-relaxed font-medium">
            Isolated AI is powerful but creates more work manually copying data between tools.
          </p>
        </div>
        <div className="glass-card p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-purple-400 mb-4 uppercase tracking-widest text-sm">The Solution</h3>
          <p className="text-gray-400 leading-relaxed font-medium">
            AI Automation links them — systems that think, decide, and act across your entire stack.
          </p>
        </div>
      </div>

      {/* Main Services Bento Grid */}
      <div className="flex flex-col gap-32 md:gap-[40vh] py-20">
        {services.map((service, index) => (
          <div key={index} className={`w-full max-w-4xl mx-auto ${index % 2 === 0 ? 'md:self-start' : 'md:self-end'}`}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-500 tracking-tight">
          See some possibilities above.
        </h3>
      </div>
    </div>
  );
}