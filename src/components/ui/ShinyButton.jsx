import React from 'react';

const ShinyButton = ({ 
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
        relative px-8 py-4 rounded-full font-bold text-white transition-all duration-300
        bg-black overflow-hidden group
        hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 active:scale-95
        disabled:opacity-70 disabled:cursor-not-allowed
        flex items-center justify-center gap-2
        ${className}
      `}
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Border gradient effect */}
      <div className="absolute inset-[2px] rounded-full bg-black z-0" />
      
      <span className="relative z-10 flex items-center gap-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:text-white transition-colors">
        {icon && <span className="text-xl">{icon}</span>}
        {children}
      </span>
      
      {/* Shine animation */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
    </button>
  );
};

export default ShinyButton;
