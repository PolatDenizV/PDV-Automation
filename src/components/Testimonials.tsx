import React from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    quote: 'PDV Automation transformed our business processes. The AI solutions they implemented saved us countless hours and improved our customer satisfaction rates dramatically.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, InnovateLabs',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    quote: 'Their expertise in AI automation helped us scale our operations efficiently. The results exceeded our expectations.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Director, GlobalTech',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    quote: 'Working with PDV Automation was a game-changer. Their AI solutions streamlined our workflows and boosted our productivity.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="text-center">
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}