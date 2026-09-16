import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'dark',
  size = 'md' 
}) => {
  const isLight = variant === 'light';

  const iconSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }[size];

  const textClasses = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl'
  }[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Icon: Navy + Gold Globe with Sleek Gold Airplane */}
      <div className={`relative flex items-center justify-center ${iconSizeClasses} rounded-full bg-slate-900 border border-[#D4AF37]/40 shadow-md p-1.5 overflow-hidden group hover:border-[#D4AF37] transition-all duration-300`}>
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0B1320]" />
        
        {/* Globe Grid lines (SVG) */}
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full text-[#D4AF37]/35 group-hover:text-[#D4AF37]/50 transition-colors"
        >
          <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="1.2" />
          <ellipse cx="20" cy="20" rx="17" ry="7" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="20" cy="20" rx="7" ry="17" stroke="currentColor" strokeWidth="1" />
          <line x1="20" y1="3" x2="20" y2="37" stroke="currentColor" strokeWidth="1" />
          <line x1="3" y1="20" x2="37" y2="20" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Dynamic Flying Jet Airplane Silhouette */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-3/4 h-3/4 text-[#D4AF37] transform -rotate-12 group-hover:scale-110 group-hover:rotate-0 transition-transform duration-300"
        >
          <path 
            d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" 
            fill="currentColor"
          />
        </svg>

        {/* Flight path curve accent */}
        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
      </div>

      {/* Typography: IMAN TRAVEL */}
      <div className="flex flex-col leading-none">
        <div className={`font-extrabold tracking-tight ${textClasses} ${isLight ? 'text-white' : 'text-slate-900'}`}>
          <span className="text-slate-950 dark:text-white">IMAN </span>
          <span className="text-[#D4AF37] font-serif italic font-bold">TRAVEL</span>
        </div>
        <span className={`text-[10px] tracking-widest uppercase font-semibold mt-0.5 ${isLight ? 'text-slate-300' : 'text-slate-600'}`}>
          Trusted Travel Partner
        </span>
      </div>
    </div>
  );
};
