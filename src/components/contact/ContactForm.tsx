import { Twitter, Mail } from 'lucide-react';
import EmailTooltip from '../common/EmailTooltip';

export default function ContactForm() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1">
          <EmailTooltip>
            <a
              href="mailto:polat@pdvautomations.com"
              className="w-full relative group inline-flex items-center justify-center gap-3 bg-white text-black py-5 px-8 rounded-2xl font-bold hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Contact Me via Email
              <Mail className="w-5 h-5" />
            </a>
          </EmailTooltip>
        </div>
        <a
          href="https://x.com/PolatskiD"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 relative group inline-flex items-center justify-center gap-3 bg-blue-600 text-white py-5 px-8 rounded-2xl font-bold hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
        >
          DM Me on Twitter
          <Twitter className="w-5 h-5 fill-current" />
        </a>
      </div>
    </div>
  );
}