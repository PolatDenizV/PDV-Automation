import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';

export default function EmailAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-8">
          Automated Email Outreach System
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Scale your outreach efforts with our intelligent email automation system. 
            Send personalized, targeted emails that get responses, while our AI handles 
            the heavy lifting.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Key Features</h2>
          <ul className="space-y-4 text-gray-300">
            <li>• AI-powered personalization</li>
            <li>• LinkedIn Sales Navigator integration</li>
            <li>• Up to a thousand outreaches a day</li>
            <li>• Email account warming to avoid getting marked as spam, therefore improved response rates</li>
          </ul>
          
          <div className="mt-12">
            <a
              href="https://x.com/PolatskiD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 
                text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 
                hover:to-purple-700 transition-all duration-300"
            >
              Contact Us to Get Started
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}