import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const WelcomeSection = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      id="welcome"
      className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="text-4xl mb-4">🚀</div>
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t.welcome.feature1Title}
            </h3>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.welcome.feature1Desc}
            </p>
          </div>

          <div className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="text-4xl mb-4">🔒</div>
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t.welcome.feature2Title}
            </h3>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.welcome.feature2Desc}
            </p>
          </div>

          <div className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
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
