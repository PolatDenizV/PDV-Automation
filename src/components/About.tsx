import React from 'react';
import { Brain, Users, TrendingUp } from 'lucide-react';

const features = [
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
];

export default function About() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose PDV Automation?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <feature.icon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}