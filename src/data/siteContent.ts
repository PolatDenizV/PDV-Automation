import { LucideIcon, MessageSquare, Twitter, Mail, Palette, BarChart3, Brain, Users, TrendingUp, Infinity, Clock, Sparkles } from 'lucide-react';

export interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
    path: string;
    cta?: string;
    details: string[];
    className?: string;
}

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface Benefit {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface SiteContent {
    brandName: string;
    hero: {
        title: string;
        subtitle: string;
        cta: {
            text: string;
            link: string;
        };
    };
    services: {
        title: string;
        subtitle: string;
        items: Service[];
        problemSolution: {
            problem: {
                title: string;
                description: string;
            };
            missingPiece: {
                title: string;
                description: string;
            };
            solution: {
                title: string;
                description: string;
            };
        };
        footerNote: string;
    };
    about: {
        title: string;
        features: Feature[];
    };
    pricing: {
        title: string;
        description: string;
        box: {
            title: string;
            subtitle: string;
            price: string;
            period: string;
            cta: string;
        };
        benefits: Benefit[];
    };
    contact: {
        header: {
            title: string;
            subtitle: string;
        };
        whyMe: {
            title: string;
            points: string[];
        };
    };
    faq: {
        title: string;
        items: FAQItem[];
    };
    footer: {
        copyright: string;
        social: {
            twitter: string;
            linkedin: string;
            email: string;
        };
    };
}

export const siteContent: SiteContent = {
    brandName: "PDV Automation",
    hero: {
        title: "Inhuman Output. Fraction-of-Human Cost.",
        subtitle: "I build AI-powered automation systems that replace repetitive human labor — from content and outreach to ads and customer handling — so your business scales 24/7 without hiring.",
        cta: {
            text: "DM Me on Twitter",
            link: "https://x.com/PolatskiD"
        }
    },
    services: {
        title: "Automation handles execution. AI handles thinking.",
        subtitle: "High-performance systems tailored to your business — not templates, not subscriptions, not SaaS fluff.",
        items: [
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
                className: "md:col-span-2"
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
                className: "md:col-span-2"
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
                className: "md:col-span-3"
            }
        ],
        problemSolution: {
            problem: {
                title: "The Problem",
                description: "Standard automation is rigid and still requires human babysitting for corner cases."
            },
            missingPiece: {
                title: "The Missing Piece",
                description: "Isolated AI is powerful but creates more work manually copying data between tools."
            },
            solution: {
                title: "The Solution",
                description: "AI Automation links them — systems that think, decide, and act across your entire stack."
            }
        },
        footerNote: "See some possibilities above."
    },
    about: {
        title: "Why Choose PDV Automation?",
        features: [
            {
                icon: Brain,
                title: 'Custom AI Strategies',
                description: 'Tailored solutions for every business need, designed to maximize your potential.',
            },
            {
                icon: Users,
                title: 'Expert Guidance',
                description: 'Work with a team of experienced AI specialists who understand your goals.',
            },
            {
                icon: TrendingUp,
                title: 'Proven Results',
                description: 'Track record of boosting efficiency and profitability for our clients.',
            },
        ]
    },
    pricing: {
        title: "Your Personal AI Workforce",
        description: "Invest once in a custom automation system and gain a digital workforce that runs 24/7/365. Minimal monthly maintenance. No per-seat fees. No scaling headaches.",
        box: {
            title: "Lifetime Access",
            subtitle: "One-time payment, forever value",
            price: "$999",
            period: "/ lifetime",
            cta: "Get Started Now"
        },
        benefits: [
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
        ]
    },
    contact: {
        header: {
            title: "Let’s Build Your Automation System",
            subtitle: "Tell me what you want to replace, scale, or eliminate — I’ll tell you what’s possible."
        },
        whyMe: {
            title: "Why PDV Automation",
            points: [
                "Built manually, not templated",
                "No outsourcing or agency layers",
                "Systems designed around your workflow",
                "You own the automation — not a subscription"
            ]
        }
    },
    faq: {
        title: "Frequently Asked Questions",
        items: [
            {
                question: "How long until I see results?",
                answer: "Most systems are deployed within 24-48 hours and start showing efficiency gains immediately."
            },
            {
                question: "Do I need technical knowledge?",
                answer: "Zero. I build the entire system and handle the integration. You just use the output."
            },
            {
                question: "What is the maintenance cost?",
                answer: "Minimal. Mostly just the API costs (OpenAI/Claude) which are pay-as-you-go based on your usage."
            }
        ]
    },
    footer: {
        copyright: "© 2024 PDV Automation. All rights reserved.",
        social: {
            twitter: "https://x.com/PolatskiD",
            linkedin: "#",
            email: "polat@pdvautomations.com"
        }
    }
};
