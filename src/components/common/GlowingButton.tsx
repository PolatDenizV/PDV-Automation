import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GlowingButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export default function GlowingButton({ children, icon: Icon, onClick, className = '' }: GlowingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 
        text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 
        hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl ${className}`}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
}