
const WaveSeparator = () => {

  return (
    <div className="w-full overflow-hidden leading-none relative z-10 -mt-40 mb-0 pointer-events-none">
      <style>{`
        @keyframes wave-flow-1 {
          0%, 100% { transform: translateX(0) translateY(0) scaleY(1); }
          50% { transform: translateX(-30px) translateY(-12px) scaleY(1.05); }
        }
        @keyframes wave-flow-2 {
          0%, 100% { transform: translateX(0) translateY(0) scaleY(1); }
          50% { transform: translateX(30px) translateY(-10px) scaleY(1.03); }
        }
        @keyframes wave-flow-3 {
          0%, 100% { transform: translateX(0) translateY(0); }
          33% { transform: translateX(-15px) translateY(-5px); }
          66% { transform: translateX(15px) translateY(-8px); }
        }
        @keyframes shimmer-pulse {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 0.4; transform: translateY(-5px); }
        }
        @keyframes gradient-shift {
          0%, 100% { stop-color: #60a5fa; }
          50% { stop-color: #93c5fd; }
        }
        .wave-layer-1 { animation: wave-flow-1 10s ease-in-out infinite; }
        .wave-layer-2 { animation: wave-flow-2 7s ease-in-out infinite; }
        .wave-layer-3 { animation: wave-flow-3 12s ease-in-out infinite; }
        .wave-shimmer { animation: shimmer-pulse 5s ease-in-out infinite; }
      `}</style>

      <svg
        className="relative block w-full h-[240px] md:h-[340px] lg:h-[380px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Blue Gradient */}
          <linearGradient id="wave-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>

          {/* Purple Gradient */}
          <linearGradient id="wave-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>

          {/* Enhanced Glow Filter */}
          <filter id="wave-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="25" result="blur" />
            <feFlood floodColor="#93c5fd" floodOpacity="0.5" />
            <feComposite in2="blur" operator="in" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>

          {/* Soft Shadow */}
          <filter id="wave-shadow">
            <feDropShadow dx="0" dy="6" stdDeviation="12" floodOpacity="0.4" />
          </filter>

          {/* Blur for depth */}
          <filter id="wave-blur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Deep Background Wave - Purple */}
        <path
          className="wave-layer-3"
          fill="url(#wave-purple)"
          fillOpacity="0.5"
          filter="url(#wave-blur)"
          d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L0,320Z"
        />

        {/* Middle Wave - Blue */}
        <path
          className="wave-layer-1"
          fill="url(#wave-blue)"
          fillOpacity="0.7"
          filter="url(#wave-shadow)"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,160C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L0,320Z"
        />

        {/* Front Wave - Purple */}
        <path
          className="wave-layer-2"
          fill="url(#wave-purple)"
          fillOpacity="0.85"
          filter="url(#wave-glow)"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L0,320Z"
        />

        {/* Shimmer Overlay */}
        <path
          className="wave-shimmer"
          fill="rgba(255,255,255,0.2)"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,215C1392,205,1344,185,1248,175C1152,165,1056,165,960,175C864,185,768,205,672,215C576,225,480,225,384,215C288,205,192,185,96,180L48,177.5L0,175Z"
        />

        {/* Top Highlight Accent */}
        <path
          fill="rgba(255, 255, 255, 0.25)"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,198L1392,188L1344,178C1248,168,1152,158,1056,163C960,168,864,188,768,198C672,208,576,208,480,198C384,188,288,168,192,163C96,158,48,168,24,173L0,178Z"
        />

        {/* Sparkle Effect */}
        <g opacity="0.6">
          <circle cx="200" cy="190" r="2" fill="#fff">
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="210" r="2" fill="#fff">
            <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="1s" />
          </circle>
          <circle cx="1000" cy="180" r="2" fill="#fff">
            <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="1300" cy="200" r="2" fill="#fff">
            <animate attributeName="opacity" values="0;1;0" dur="4.5s" repeatCount="indefinite" begin="2s" />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default WaveSeparator;
