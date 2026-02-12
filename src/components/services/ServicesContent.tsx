import { MessageSquare, Twitter, Mail, Palette, BarChart3 } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: MessageSquare,
    title: "AI-Powered Chatbot Systems (That Actually Close Leads)",
    description: "Custom AI chatbots integrated directly into your business stack — capturing leads, booking calls, answering questions, and handing off to humans only when needed.",
    path: "/services/chatbot-creation",
    cta: "Inquire About This System →",
    details: [
      "• CRM-connected lead capture",
      "• Appointment & call booking",
      "• Smart product recommendations",
      "• Human handoff logic",
      "• Telegram & web integrations",
      "• 24/7 automated support"
    ]
  },
  {
    icon: Twitter,
    title: "Automated Twitter Content Engine",
    description: "AI-generated tweets, images, and short videos posted automatically — up to one post every 15 minutes — optimized for engagement and brand voice, running 24/7 without a social media manager. Built to avoid spam patterns and maintain organic-looking activity.",
    path: "/services/twitter-automation",
    details: [
      "• AI-powered content generation",
      "• Automated posting schedule",
      "• Engagement optimization",
      "• Brand voice customization",
      "• Analytics and performance tracking",
      "• Hashtag optimization",
      "• Organic activity protection"
    ]
  },
  {
    icon: Mail,
    title: "AI-Personalized Cold Email Outreach (B2B)",
    description: "Send hundreds of genuinely personalized emails per day. The AI analyzes each prospect’s online presence and writes context-aware icebreakers that feel manually researched — without needing social proof. Typical response rates: ~25%, including warm-up and deliverability protection.",
    path: "/services/email-automation",
    details: [
      "• AI-driven personalization",
      "• LinkedIn Sales Navigator integration",
      "• High-volume email campaigns",
      "• Email warmup protocols",
      "• Response rate optimization",
      "• Genuine content-based icebreakers",
      "• Profile analysis for personalization"
    ]
  },
  {
    icon: Palette,
    title: "Professional Website Design",
    description: "High-end, aesthetic, and professional website designs powered by AI to make your business stand out, like the one you are looking at. Front-end and back-end of your business built in 24 hours, with automated lead capture and instant follow-up system.",
    path: "/services/web-design",
    details: [
      "• Complete business website built in 24 hours",
      "• Automated lead capture system",
      "• Instant follow-up with AI email automation",
      "• AI Phone agent integration for immediate response",
      "• Customer data collection and management",
      "• Modern UI/UX implementation"
    ]
  },
  {
    icon: BarChart3,
    title: "Amazon Advertising Automation",
    description: "Managed Amazon Sponsored Ads creation, optimization, and reporting using the Amazon Advertising API — built for sellers who want systematic, data-driven PPC without daily manual work. Works only with authorized seller accounts. No black-hat tactics.",
    path: "/services/amazon-ads",
    details: [
      "• Managed Amazon Sponsored Ads creation",
      "• Automated bidding and optimization",
      "• Performance reporting and analytics",
      "• Authorized seller account integration",
      "• API-driven campaign management"
    ]
  }
];

export default function ServicesContent() {
  return (
    <div className="relative z-10 container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-red-400 via-red-500 to-red-600 mb-12">
          Automation handles execution. AI handles thinking.
        </h2>

        {/* AI/Automation Intro Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 text-left">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-red-400 mb-4">Automation</h3>
            <p className="text-gray-400 leading-relaxed">
              Alone, automation still needs humans.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-blue-400 mb-4">AI</h3>
            <p className="text-gray-400 leading-relaxed">
              Alone, AI is stuck behind a keyboard.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-purple-400 mb-4">AI Automation</h3>
            <p className="text-gray-400 leading-relaxed">
              AI Automation combines both — systems that think, decide, and act at scale, outperforming human efficiency while costing a fraction to run.
            </p>
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-6">
          What I Build
        </h3>
        <p className="text-xl text-gray-400">
          High-performance AI automation systems tailored to your business — not templates, not subscriptions, not SaaS fluff.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}