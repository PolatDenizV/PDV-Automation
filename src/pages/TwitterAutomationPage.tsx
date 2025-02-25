import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';

export default function TwitterAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-8">
          Automated Twitter Content Creation
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Boost your Twitter presence with our AI-powered automation system that creates 
            engaging content 24/7. From tweets to threads, images to short videos, our system 
            handles it all while you focus on growing your business.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Key Features</h2>
          <ul className="space-y-4 text-gray-300">
            <li>• AI-generated posts optimized for engagement</li>
            <li>• Automated content scheduling</li>
            <li>• Make money via X premium from engagements</li>
            <li>• Custom voice and brand alignment</li>
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