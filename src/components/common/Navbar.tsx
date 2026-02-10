import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black h-8 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="text-white font-mono text-sm">
          PDV Automation
        </Link>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-red-500 text-white px-3 py-1 rounded-md text-xs font-semibold hover:bg-red-600 transition-colors"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}