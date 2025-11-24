import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  jpText?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", jpText }) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-100 select-none">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-500 opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-100 select-none">
        {text}
      </span>
      {jpText && (
        <span className="absolute -top-4 -right-8 text-xs text-red-500 opacity-80 font-sans font-bold tracking-widest writing-vertical-rl drop-shadow-[0_0_2px_rgba(239,68,68,0.5)]">
          {jpText}
        </span>
      )}
    </div>
  );
};

export default GlitchText;