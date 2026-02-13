import { ArrowRight, Bot } from 'lucide-react';

export default function Header() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black opacity-90 z-0" />
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <Bot className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">PDV Automation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your Business with AI Automation
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Seamless integration of cutting-edge AI solutions to elevate efficiency and growth.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-all">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent z-10" />
    </div>
  );
}