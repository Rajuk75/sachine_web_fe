import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import PATHS from "../routes/paths";

const NotFound = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
          theme === 'dark' ? 'bg-blue-600' : 'bg-blue-400'
        }`}></div>
        <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
          theme === 'dark' ? 'bg-purple-600' : 'bg-purple-400'
        }`} style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="text-center relative z-10 px-4">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className={`text-9xl md:text-[200px] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-bounce-slow`}>
            404
          </h1>
        </div>

        {/* Sad Face Animation */}
        <div className="mb-8 animate-fade-in">
          <div className="text-8xl mb-4 animate-bounce-slow" style={{ animationDelay: '0.2s' }}>
            😢
          </div>
        </div>

        {/* Text */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Oops! Page Not Found
          </h2>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => navigate(PATHS.HOME)}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all shadow-lg"
          >
            ← Back to Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className={`px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all ${
              theme === 'dark'
                ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-300 shadow-lg'
            }`}
          >
            Go Back
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-pink-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default NotFound;
