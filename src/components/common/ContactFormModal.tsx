import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  "AI-Powered Chatbot Creation",
  "Automated Twitter Content Creation",
  "Automated Email Outreach System",
  "Professional Website Design",
  "Amazon Advertising Automation"
];

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    problem: '',
    service: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.eu2.make.com/9i909e8x5dykqwhb1bszkhc1dmdya6qd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thank you for your interest! I will get back to you shortly.');
        onClose();
        setFormData({
          name: '',
          email: '',
          businessName: '',
          problem: '',
          service: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-gray-900 rounded-2xl shadow-xl">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl -z-10 blur"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Form content */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-red-400 to-red-600 mb-6">
            Let's Discuss Your Project
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                    focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none 
                    transition-all text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                    focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none 
                    transition-all text-white"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                    focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none 
                    transition-all text-white"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                  Choose Service
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                    focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none 
                    transition-all text-white"
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-gray-300 mb-1">
                  What specific problem are you looking to solve?
                </label>
                <textarea
                  id="problem"
                  required
                  value={formData.problem}
                  onChange={(e) => setFormData(prev => ({ ...prev, problem: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                    focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none 
                    transition-all text-white resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 
                rounded-lg font-semibold hover:from-red-600 hover:to-red-700 
                transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}