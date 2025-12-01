import { useTheme } from "../context/ThemeContext";
import PATHS from "../routes/paths";

const PageTemplate = ({ 
  icon, 
  badge, 
  title, 
  subtitle, 
  children,
  gradientFrom = "blue",
  gradientTo = "purple" 
}) => {
  const { theme } = useTheme();

  const gradientColors = {
    blue: theme === 'dark' ? 'bg-blue-600' : 'bg-blue-300',
    purple: theme === 'dark' ? 'bg-purple-600' : 'bg-purple-300',
    pink: theme === 'dark' ? 'bg-pink-600' : 'bg-pink-300',
    green: theme === 'dark' ? 'bg-green-600' : 'bg-green-300',
    orange: theme === 'dark' ? 'bg-orange-600' : 'bg-orange-300',
  };

  return (
    <div className={`min-h-screen pt-24 pb-16 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-blue-50 via-white to-purple-50'
    }`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${gradientColors[gradientFrom]}`} style={{ animationDuration: '4s' }}></div>
        <div className={`absolute top-1/3 right-10 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse ${gradientColors[gradientTo]}`} style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className={`absolute bottom-20 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse ${gradientColors.pink}`} style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        <div className={`absolute top-1/4 left-1/4 w-2 h-2 rounded-full ${gradientColors[gradientFrom]} opacity-60 animate-pulse`}></div>
        <div className={`absolute top-1/3 right-1/3 w-3 h-3 rounded-full ${gradientColors[gradientTo]} opacity-40 animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full ${gradientColors.pink} opacity-50 animate-pulse`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          {badge && (
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md bg-${gradientFrom}-500/10 border border-${gradientFrom}-400/30 animate-bounce-slow`}>
              <span className="text-2xl">{icon}</span>
              <span className={`text-sm font-semibold ${theme === 'dark' ? `text-${gradientFrom}-300` : `text-${gradientFrom}-700`}`}>
                {badge}
              </span>
            </div>
          )}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-${gradientFrom}-600 via-${gradientTo}-600 to-pink-600 bg-clip-text text-transparent animate-slide-up`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} animate-slide-up`} style={{ animationDelay: '0.1s' }}>
              {subtitle}
            </p>
          )}
        </div>
        <div className={`rounded-2xl p-8 md:p-12 backdrop-blur-sm animate-fade-in-up ${
          theme === 'dark' 
            ? 'bg-gray-800/80 border border-gray-700 shadow-2xl shadow-blue-500/10' 
            : 'bg-white/90 border border-gray-200 shadow-2xl shadow-blue-200/50'
        }`} style={{ animationDelay: '0.2s' }}>
          {children}
        </div>
        <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a
            href={PATHS.HOME}
            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-${gradientFrom}-600 to-${gradientTo}-600 text-white rounded-xl font-semibold hover:from-${gradientFrom}-700 hover:to-${gradientTo}-700 hover:scale-105 transition-all shadow-lg hover:shadow-xl`}
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;
