import React from 'react';

const GlassButton = ({ 
  children, 
  onClick, 
  className = "", 
  icon = null,
  type = "button",
  disabled = false
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-6 py-3 rounded-xl font-semibold transition-all duration-300
        backdrop-blur-md bg-white/10 border border-white/20 text-gray-800
        hover:bg-white/20 hover:scale-105 hover:shadow-lg active:scale-95 
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center gap-2
        ${className}
      `}
    >
      <span className="flex items-center gap-2">
        {icon && <span className="text-xl">{icon}</span>}
        {children}
      </span>
    </button>
  );
};

export default GlassButton;
