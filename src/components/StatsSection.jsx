import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const StatsSection = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section className={`py-20 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-blue-500 mb-2">xxxx+</div>
            <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.stats.clients}
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-500 mb-2">xxxx+</div>
            <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.stats.projects}
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-500 mb-2">xx+</div>
            <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.stats.team}
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-500 mb-2">xx+</div>
            <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.stats.experience}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
