import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const PlatformSection = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
            {t.platform.title}
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.platform.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Discover */}
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-3">
              <span className="text-orange-500">{t.platform.discover}</span>
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                {' '}{t.platform.discoverText}
              </span>
            </h3>
            <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
              {t.platform.discoverDesc}
            </p>
          </div>

          {/* Acquire & Engage */}
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">
              <span className="text-orange-500">{t.platform.acquire}</span>
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}> and </span>
              <span className="text-orange-500">{t.platform.engage}</span>
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                {' '}{t.platform.acquireText}
              </span>
            </h3>
            <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
              {t.platform.acquireDesc}
            </p>
          </div>

          {/* Re-engage */}
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold mb-3">
              <span className="text-orange-500">{t.platform.reengage}</span>
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                {' '}{t.platform.reengageText}
              </span>
            </h3>
            <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
              {t.platform.reengageDesc}
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center mb-12">
          <h3 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
            {t.platform.statsTitle}
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-500 mb-2">xx Bn+</div>
            <div className={`font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
              }`}>
              {t.platform.stat1}
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-500 mb-2">xxx+</div>
            <div className={`font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
              }`}>
              {t.platform.stat2}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`}>
              {t.platform.stat2Sub}
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-500 mb-2">xxx Bn+</div>
            <div className={`font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
              }`}>
              {t.platform.stat3}
            </div>
          </div>

          {/* Stat 4 */}
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-500 mb-2">xx +</div>
            <div className={`font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
              }`}>
              {t.platform.stat4}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`}>
              {t.platform.stat4Sub}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
