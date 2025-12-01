import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const HeroSection = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section className={`min-h-screen flex items-center justify-center pt-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-200/40'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-200/40'
        }`}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          <span className="text-blue-600">
            {t.hero.titlePart1}
          </span>
          <br />
          <span className={theme === 'dark' ? 'text-white' : 'text-black'}>
            {t.hero.titlePart2}
          </span>
        </h1>
        
        <p className={`text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {t.hero.subtitle}{' '}
          {t.hero.predictiveAlgorithms} {t.hero.and} {t.hero.machineLearning}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-blue-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all shadow-sm">
            {t.hero.cta}
          </button>
          <button className={`px-8 py-3.5 rounded-lg text-base font-semibold transition-all ${
            theme === 'dark'
              ? 'bg-gray-800 text-white hover:bg-gray-700'
              : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300'
          }`}>
            {t.hero.watchDemo}
          </button>
        </div>

        {/* Glassy Card Section */}
        <div className={`mt-16 mx-auto max-w-4xl rounded-3xl p-12 backdrop-blur-xl ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10' 
            : 'bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-pink-100/50 border border-white/50'
        } shadow-2xl`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Start talking to our AI Voice Agent
          </h2>
          <p className={`text-base md:text-lg mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Allow mic access and start chatting with our voice agent in real time.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              theme === 'dark' ? 'bg-white/10 text-white' : 'bg-white text-gray-700'
            }`}>
              General
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              theme === 'dark' ? 'bg-white/10 text-white' : 'bg-white text-gray-700'
            }`}>
              Customer Support
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              theme === 'dark' ? 'bg-white/10 text-white' : 'bg-white text-gray-700'
            }`}>
              Lead Qualification
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              theme === 'dark' ? 'bg-white/10 text-white' : 'bg-white text-gray-700'
            }`}>
              Receptionist
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              theme === 'dark' ? 'bg-white/10 text-white' : 'bg-white text-gray-700'
            }`}>
              Survey
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              theme === 'dark' ? 'bg-white/10 text-white' : 'bg-white text-gray-700'
            }`}>
              Custom Agent
            </span>
          </div>

          <button className="bg-blue-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all shadow-lg inline-flex items-center gap-2">
            Start Call 🎙️
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
