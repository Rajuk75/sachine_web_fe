import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const StatsSection = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section className="relative py-8">
      <div className="max-w-[85rem] mx-auto">
        <div className={`rounded-[calc(3rem-2px)] p-12 relative overflow-hidden ${
          theme === 'dark' 
            ? 'bg-gray-900/40 backdrop-blur-xl border border-white/10' 
            : 'bg-white/30 backdrop-blur-xl shadow-lg border border-white/40'
        }`}>
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full blur-3xl opacity-10 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
        </div>
        
        <div className="relative z-10">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">350+</div>
              <div className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {t.stats.clients}
              </div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-br from-purple-500 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">1500+</div>
              <div className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {t.stats.projects}
              </div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-br from-pink-500 to-pink-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">-25.8%</div>
              <div className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {t.stats.team}
              </div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">#1</div>
              <div className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {t.stats.experience}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
