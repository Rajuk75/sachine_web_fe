import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const WelcomeSection = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      id="welcome"
      className="relative py-8"
    >
      <div className="max-w-[85rem] mx-auto">
        <div className={`rounded-[calc(3rem-2px)] p-8 md:p-12 relative overflow-hidden ${
          theme === 'dark' 
            ? 'bg-gray-900/40 backdrop-blur-xl border border-white/10' 
            : 'bg-white/30 backdrop-blur-xl shadow-lg border border-white/40'
        }`}>
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
          <div className={`absolute bottom-1/4 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'
          }`}></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-20">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border mb-6 ${
              theme === 'dark' ? 'bg-white/10 border-white/10 text-green-300' : 'bg-white/60 border-white/60 text-green-600 shadow-sm'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Why Choose Us
            </div>

            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t.welcome.title}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.welcome.subtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`group p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 ${
              theme === 'dark' 
                ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20' 
                : 'bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10'
            }`}>
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-8 transition-transform duration-500 group-hover:scale-110 ${
                theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
              }`}>
                🎯
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t.welcome.feature1Title}
              </h3>
              <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.welcome.feature1Desc}
              </p>
            </div>

            <div className={`group p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 ${
              theme === 'dark' 
                ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20' 
                : 'bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10'
            }`}>
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-8 transition-transform duration-500 group-hover:scale-110 ${
                theme === 'dark' ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
              }`}>
                📊
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t.welcome.feature2Title}
              </h3>
              <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.welcome.feature2Desc}
              </p>
            </div>

            <div className={`group p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 ${
              theme === 'dark' 
                ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20' 
                : 'bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg shadow-pink-500/5 hover:shadow-xl hover:shadow-pink-500/10'
            }`}>
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-8 transition-transform duration-500 group-hover:scale-110 ${
                theme === 'dark' ? 'bg-pink-500/20 text-pink-400' : 'bg-pink-100 text-pink-600'
              }`}>
                🛡️
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t.welcome.feature3Title}
              </h3>
              <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.welcome.feature3Desc}
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
