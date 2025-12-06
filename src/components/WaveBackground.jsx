
const WaveBackground = () => {

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Waves */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#fbcfe8" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Wave 1 */}
        <path
          fill="url(#wave1)"
          d="M0,400 C320,500 420,300 720,400 C1020,500 1120,300 1440,400 L1440,800 L0,800 Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,400 C320,500 420,300 720,400 C1020,500 1120,300 1440,400 L1440,800 L0,800 Z;
              M0,300 C320,400 420,200 720,300 C1020,400 1120,200 1440,300 L1440,800 L0,800 Z;
              M0,400 C320,500 420,300 720,400 C1020,500 1120,300 1440,400 L1440,800 L0,800 Z
            "
          />
        </path>

        {/* Wave 2 */}
        <path
          fill="url(#wave2)"
          d="M0,500 C360,600 480,400 840,500 C1200,600 1320,400 1440,500 L1440,800 L0,800 Z"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
              M0,500 C360,600 480,400 840,500 C1200,600 1320,400 1440,500 L1440,800 L0,800 Z;
              M0,450 C360,550 480,350 840,450 C1200,550 1320,350 1440,450 L1440,800 L0,800 Z;
              M0,500 C360,600 480,400 840,500 C1200,600 1320,400 1440,500 L1440,800 L0,800 Z
            "
          />
        </path>

        {/* Wave 3 */}
        <path
          fill="url(#wave3)"
          d="M0,600 C400,700 520,500 960,600 C1400,700 1320,500 1440,600 L1440,800 L0,800 Z"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0,600 C400,700 520,500 960,600 C1400,700 1320,500 1440,600 L1440,800 L0,800 Z;
              M0,550 C400,650 520,450 960,550 C1400,650 1320,450 1440,550 L1440,800 L0,800 Z;
              M0,600 C400,700 520,500 960,600 C1400,700 1320,500 1440,600 L1440,800 L0,800 Z
            "
          />
        </path>
      </svg>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse bg-blue-400" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-40 right-20 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse bg-purple-400" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse bg-pink-400" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
    </div>
  );
};

export default WaveBackground;
