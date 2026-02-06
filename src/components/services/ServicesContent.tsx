import { MessageSquare, Twitter, Mail, Palette, BarChart3 } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: MessageSquare,
    title: "AI-Powered Chatbot Creation",
    description: "Custom chatbots that go beyond basic interactions, featuring CRM integration, lead generation, appointment booking, and smart product recommendations.",
    path: "/services/chatbot-creation",
    details: [
      "• CRM Integration for seamless customer data management",
      "• Lead generation and qualification",
      "• Appointment and call booking functionality",
      "• Information collection and processing",
      "• Human handoff capabilities",
      "• Telegram bot integrations",
      "• Smart product recommendations",
      "• 24/7 automated customer support"
    ]
  },
  {
    icon: Twitter,
    title: "Automated Twitter Content Creation",
    description: "Boost engagement and brand visibility with AI-generated posts, short videos, and images. Runs 24/7, creating up to a post every 15 minutes—at a fraction of the cost of a social media manager.",
    path: "/services/twitter-automation",
    details: [
      "• AI-powered content generation",
      "• Automated posting schedule",
      "• Engagement optimization",
      "• Brand voice customization",
      "• Analytics and performance tracking",
      "• Hashtag optimization",
      "• Viral content detection"
    ]
  },
  {
    icon: Mail,
    title: "Automated Email Outreach System",
    description: "Perfect for B2B businesses: Send hundreds of personalized, concise emails daily with a single click. The AI analyzes prospects' profiles and creates icebreakers based on their specific content, mimicking genuine effort to know them—a key component in any successful marketing attempt. Achieve 25% response rates with no social proof requirements. Includes email warmup to maximize deliverability and prevent spam flags.",
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
      "• 70% higher conversion rate with instant follow-up",
      "• Customer data collection and management",
      "• Personalized engagement automation",
      "• 24/7 automated response system",
      "• Modern UI/UX implementation",
      "• Mobile-first approach"
    ]
  },
  {
    icon: BarChart3,
    title: "Amazon Advertising Automation",
    description: "Managed Amazon Sponsored Ads campaign creation, optimization, and reporting using the Amazon Advertising API. Supports Sponsored Products, Sponsored Brands, and Sponsored Display for authorized seller accounts.",
    path: "/services/amazon-ads",
    details: [
      "• PPC • Reporting • Automation",
      "• Managed Amazon Sponsored Ads creation",
      "• Automated bidding and optimization",
      "• Performance reporting and analytics",
      "• Sponsored Products support",
      "• Sponsored Brands and Display support",
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
          bg-gradient-to-r from-red-400 via-red-500 to-red-600 mb-8">
          Conquer Daily Must-Do's with Automation
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-6">
          Services Offered
        </h3>
        <p className="text-xl text-gray-400">
          Cutting-edge AI solutions to transform your business operations
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