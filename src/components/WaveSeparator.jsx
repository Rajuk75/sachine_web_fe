import React from "react";
import { useTheme } from "../context/ThemeContext";

const WaveSeparator = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full overflow-hidden leading-none relative z-10 -mt-40 mb-0 pointer-events-none">
      <svg
        className="relative block w-full h-[200px] md:h-[300px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ribbon-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id="ribbon-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <filter id="glow-ribbon" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ribbon Layer 1 (Back/Darker) */}
        <path
          fill="url(#ribbon-gradient-2)"
          fillOpacity="0.8"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,160C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          className="transform translate-y-4"
        ></path>

        {/* Ribbon Layer 2 (Front/Lighter/Intertwining) */}
        <path
          fill="url(#ribbon-gradient-1)"
          fillOpacity="0.9"
          filter="url(#glow-ribbon)"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>

        {/* Highlight/Sheen */}
        <path
          fill="rgba(255,255,255,0.1)"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,200C1344,190,1248,160,1152,175C1056,190,960,245,864,260C768,275,672,255,576,234C480,213,384,191,288,191C192,191,96,213,48,223L0,234Z"
        ></path>
      </svg>
    </div>
  );
};

export default WaveSeparator;
