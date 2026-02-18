import { LucideIcon, MessageSquare, Twitter, Mail, Palette, BarChart3, Brain, Users, TrendingUp } from 'lucide-react';

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
                title: "Social Media Engine",
                description: "AI-generated content published 24/7 across Twitter, Instagram, Telegram, and Facebook — optimized for engagement, growth, and brand authority without a social manager.",
                path: "/services/twitter-automation",
                details: [
                    "- Multi-platform automation (Twitter, Instagram, Telegram, Facebook)",
                    "- AI content generation",
                    "- Automated posting schedules",
                    "- Engagement optimization logic",
                    "- Brand voice protection",
                    "- Growth-focused analytics"
                ],
                className: "md:col-span-1"
            },
            {
                icon: Mail,
                title: "Cold Email B2B",
                description: "Launch AI-powered outbound systems that generate hundreds of qualified B2B leads on demand and convert them with deeply personalized outreach.",
                path: "/services/email-automation",
                details: [
                    "- On-demand lead generation engine",
                    "- AI-driven personalization at scale",
                    "- Context-aware icebreakers",
                    "- LinkedIn enrichment integration",
                    "- Email warmup protocols",
                    "- High deliverability infrastructure"
                ],
                className: "md:col-span-1"
            },
            {
                icon: Palette,
                title: "Premium Web Design",
                description: "High-end websites engineered to project authority, convert instantly, and rank in the age of AI search. Built in 24 hours with automated lead capture and AI-powered follow-up systems.",
                path: "/services/web-design",
                details: [
                    "- 24-hour premium build",
                    "- Conversion-focused modern UI/UX",
                    "- Stripe payment integration",
                    "- Full eCommerce store setup",
                    "- Automated lead capture systems",
                    "- AI email & phone follow-up agents",
                    "- Answer Engine Optimization (AEO) for AI-driven search visibility"
                ],
                className: "md:col-span-2"
            },
            {
                icon: BarChart3,
                title: "Amazon Ads",
                description: "API-driven Amazon Sponsored Ads optimization with continuous competitor intelligence and keyword refinement. Stop bleeding time and money on PPC.",
                path: "/services/amazon-ads",
                details: [
                    "- Automated bidding & campaign optimization",
                    "- Real-time competitor analysis",
                    "- Amazon search term report mining",
                    "- Automated keyword & negative keyword refinement",
                    "- API-driven performance management",
                    "- Advanced PPC analytics",
                    "- Authorized seller integration"
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
