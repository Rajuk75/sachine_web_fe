const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Animated Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-30 bg-blue-400" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full blur-3xl opacity-30 bg-purple-400" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-30 bg-pink-400" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '2s' }}></div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.4
            }}
          ></div>
        ))}
      </div>

      {/* Loading Content */}
      <div className="text-center relative z-10">
        {/* Logo with Animation */}
        <div className="mb-12 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Adshamper
            </h1>
            {/* Glow Effect */}
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
          </div>
        </div>

        {/* Advanced Spinner */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Outer Rotating Ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 border-r-blue-600 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
          
          {/* Middle Rotating Ring (Opposite Direction) */}
          <div className="absolute inset-3 border-4 border-transparent border-b-purple-600 border-l-purple-600 rounded-full" style={{ animation: 'spin 2s linear infinite reverse' }}></div>
          
          {/* Inner Rotating Ring */}
          <div className="absolute inset-6 border-4 border-transparent border-t-pink-600 border-r-pink-600 rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
          
          {/* Center Pulsing Core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-md animate-pulse"></div>
            </div>
          </div>

          {/* Orbiting Dots */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2"></div>
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s', animationDelay: '1s' }}>
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full -translate-x-1/2"></div>
          </div>
        </div>

        {/* Loading Text with Animation */}
        <div className="space-y-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl font-bold text-gray-900">
            Loading
            <span className="inline-flex ml-1">
              <span className="animate-bounce" style={{ animationDelay: '0s' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '0.15s' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>.</span>
            </span>
          </p>
          <p className="text-sm font-medium text-gray-600 animate-pulse">
            Preparing your experience
          </p>
        </div>

        {/* Animated Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-600"
              style={{
                animation: 'bounce 1.4s ease-in-out infinite',
                animationDelay: `${i * 0.16}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
