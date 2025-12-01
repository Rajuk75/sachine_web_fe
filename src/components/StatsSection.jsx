import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const StatsSection = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section className={`py-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white' 
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900'
    }`}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 ${
          theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
        }`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-blue-500 mb-2">1000+</div>
            <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.stats.clients}
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-500 mb-2">1200+</div>
            <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.stats.projects}
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-500 mb-2">15+</div>
            <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.stats.team}
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-500 mb-2">20+</div>
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
