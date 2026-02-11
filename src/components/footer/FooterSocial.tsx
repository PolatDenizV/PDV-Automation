import { Twitter, Mail } from 'lucide-react';
import EmailTooltip from '../common/EmailTooltip';

export default function FooterSocial() {
  return (
    <div className="flex gap-6">
      <a href="https://x.com/PolatskiD"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors">
        <Twitter className="w-6 h-6" />
      </a>
      <EmailTooltip>
        <a href="mailto:polat@pdvautomations.com"
          className="hover:text-blue-400 transition-colors">
          <Mail className="w-6 h-6" />
        </a>
      </EmailTooltip>
    </div>
  );
}