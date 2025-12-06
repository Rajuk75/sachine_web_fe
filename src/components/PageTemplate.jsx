import PATHS from "../routes/paths";

const PageTemplate = ({ 
  icon, 
  badge, 
  title, 
  subtitle, 
  children,
  gradientFrom = "blue",
  gradientTo = "purple",
  hideCard = false
}) => {

  const gradientColors = {
    blue: 'bg-blue-300',
    purple: 'bg-purple-300',
    pink: 'bg-pink-300',
    green: 'bg-green-300',
    orange: 'bg-orange-300',
  };

  return (
    <div className="min-h-screen pt-32 pb-16 relative bg-gradient-to-b from-blue-50 to-white">
      {/* Clean Background - No Blobs */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          {badge && (
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md bg-${gradientFrom}-500/10 border border-${gradientFrom}-400/30 animate-bounce-slow`}>
              <span className="text-2xl">{icon}</span>
              <span className={`text-sm font-semibold text-${gradientFrom}-700`}>
                {badge}
              </span>
            </div>
          )}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 pb-2 bg-gradient-to-r from-${gradientFrom}-600 via-${gradientTo}-600 to-pink-600 bg-clip-text text-transparent animate-slide-up`}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {subtitle}
            </p>
          )}
        </div>
        <div className={hideCard ? "animate-fade-in-up" : "rounded-2xl p-8 md:p-12 backdrop-blur-sm animate-fade-in-up bg-white/90 border border-gray-200 shadow-2xl shadow-blue-200/50"} style={{ animationDelay: '0.2s' }}>
          {children}
        </div>
        <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a
            href={PATHS.HOME}
            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-${gradientFrom}-600 to-${gradientTo}-600 text-white rounded-xl font-semibold hover:from-${gradientFrom}-700 hover:to-${gradientTo}-700 hover:scale-105 transition-all`}
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;
