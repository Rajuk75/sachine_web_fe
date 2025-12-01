import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const WelcomeSection = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      id="welcome"
      className={`py-20 relative overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-white via-blue-50 to-white'
      }`}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-10 w-64 h-64 rounded-full blur-3xl opacity-10 ${
          theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
        }`}></div>
        <div className={`absolute bottom-1/4 right-10 w-64 h-64 rounded-full blur-3xl opacity-10 ${
          theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'
        }`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t.welcome.title}
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {t.welcome.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className={`p-8 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl ${
            theme === 'dark' 
              ? 'bg-gray-700/50 backdrop-blur-sm border border-gray-600' 
              : 'bg-white shadow-lg border border-gray-100'
          }`}>
            <div className="text-4xl mb-4">🚀</div>
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t.welcome.feature1Title}
            </h3>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.welcome.feature1Desc}
            </p>
          </div>

          <div className={`p-8 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl ${
            theme === 'dark' 
              ? 'bg-gray-700/50 backdrop-blur-sm border border-gray-600' 
              : 'bg-white shadow-lg border border-gray-100'
          }`}>
            <div className="text-4xl mb-4">🔒</div>
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t.welcome.feature2Title}
            </h3>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.welcome.feature2Desc}
            </p>
          </div>

          <div className={`p-8 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl ${
            theme === 'dark' 
              ? 'bg-gray-700/50 backdrop-blur-sm border border-gray-600' 
              : 'bg-white shadow-lg border border-gray-100'
          }`}>
            <div className="text-4xl mb-4">💡</div>
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t.welcome.feature3Title}
            </h3>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.welcome.feature3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
