
import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false, size = 'md' }) => {
  const sizes = {
    sm: { icon: "w-6 h-6", text: "text-lg" },
    md: { icon: "w-8 h-8", text: "text-2xl" },
    lg: { icon: "w-12 h-12", text: "text-4xl" }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Hyperion Abstract Icon */}
      <svg 
        viewBox="0 0 100 100" 
        className={`${currentSize.icon} fill-current text-amber-500 transition-transform duration-500 hover:scale-110`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
        </defs>
        {/* Left Pillar */}
        <path d="M25 20 L40 20 L40 80 L25 80 Z" fill="url(#logo-gradient)" />
        {/* Right Pillar (Taller, representing growth) */}
        <path d="M60 10 L75 10 L75 80 L60 80 Z" fill="url(#logo-gradient)" />
        {/* The Bridge (Diagonal precision cut) */}
        <path d="M40 45 L60 35 L60 50 L40 60 Z" fill="url(#logo-gradient)" opacity="0.9" />
      </svg>

      {!iconOnly && (
        <span className={`${currentSize.text} font-bold tracking-[0.2em] serif text-white`}>
          HYPERION
        </span>
      )}
    </div>
  );
};

export default Logo;
