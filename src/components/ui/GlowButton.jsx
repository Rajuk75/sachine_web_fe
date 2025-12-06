import React from 'react';

const GlowButton = ({ children, className = '', icon, ...props }) => {
  return (
    <button 
      className={`
        relative group px-8 py-3 rounded-lg font-bold text-white transition-all duration-300
        bg-gradient-to-r from-pink-500 to-purple-600
        hover:shadow-[0_0_20px_rgba(217,70,239,0.5)]
        hover:scale-105 active:scale-95
        flex items-center gap-2
        ${className}
      `}
      {...props}
    >
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="text-xl group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
      
      {/* Inner Gradient Overlay for depth */}
      <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default GlowButton;
