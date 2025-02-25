import React from 'react';
import { Workflow, MessageSquareCode, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Streamline repetitive tasks with AI, boosting productivity and reducing errors.',
  },
  {
    icon: MessageSquareCode,
    title: 'Customer Support AI',
    description: 'Intelligent chatbots and support solutions for 24/7 customer engagement.',
  },
  {
    icon: BarChart3,
    title: 'Data Insights',
    description: 'Advanced analytics and reporting tools to make data-driven decisions.',
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our AI-Powered Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-blue-50 p-8 rounded-xl group-hover:bg-blue-100 transition-colors">
                <service.icon className="w-12 h-12 text-blue-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}