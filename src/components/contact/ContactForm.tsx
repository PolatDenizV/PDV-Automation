import { Twitter, Mail } from 'lucide-react';

export default function ContactForm() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:polat@pdvautomations.com"
          className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white 
            py-4 px-8 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 
            transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          Contact Me via Email
          <Mail className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/PolatskiD"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white 
            py-4 px-8 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 
            transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          DM Me on Twitter
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}