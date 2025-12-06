import React from 'react';

const MurfCard = ({ children, className = '' }) => {
  return (
    <div 
      className={`
        relative overflow-hidden rounded-2xl
        bg-[#1a0b2e]/60 backdrop-blur-xl
        border border-white/10
        hover:border-purple-500/30 hover:bg-[#1a0b2e]/80
        transition-all duration-300
        shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default MurfCard;
