import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const PlatformSection = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section className="relative py-8">
      <div className="max-w-[85rem] mx-auto">
        <div className={`rounded-[calc(3rem-2px)] p-8 md:p-12 relative overflow-hidden ${
          theme === 'dark' 
            ? 'bg-gray-900/40 backdrop-blur-xl border border-white/10' 
            : 'bg-white/30 backdrop-blur-xl shadow-lg border border-white/40'
        }`}>
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-20 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
          <div className={`absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-20 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'
          }`}></div>
        </div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border mb-6 ${
              theme === 'dark' ? 'bg-white/10 border-white/10 text-purple-300' : 'bg-white/60 border-white/60 text-purple-600 shadow-sm'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Platform Features
            </div>

            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t.platform.title}
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.platform.subtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Discover */}
            <div className={`group p-8 rounded-[2rem] transition-transform transition-shadow duration-300 hover:-translate-y-2 ${
              theme === 'dark' 
                ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20' 
                : 'bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10'
              }`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110 ${
                theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
              }`}>
                🔍
              </div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  {t.platform.discover}
                </span>
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  {' '}{t.platform.discoverText}
                </span>
              </h3>
              <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.platform.discoverDesc}
              </p>
            </div>

            {/* Acquire & Engage */}
            <div className={`group p-8 rounded-[2rem] transition-transform transition-shadow duration-300 hover:-translate-y-2 ${
              theme === 'dark' 
                ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20' 
                : 'bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg shadow-purple-500/5 hover:shadow-xl hover:shadow-purple-500/10'
              }`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110 ${
                theme === 'dark' ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
              }`}>
                📊
              </div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  {t.platform.acquire}
                </span>
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}> & </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  {t.platform.engage}
                </span>
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  {' '}{t.platform.acquireText}
                </span>
              </h3>
              <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.platform.acquireDesc}
              </p>
            </div>

            {/* Re-engage */}
            <div className={`group p-8 rounded-[2rem] transition-transform transition-shadow duration-300 hover:-translate-y-2 ${
              theme === 'dark' 
                ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20' 
                : 'bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg shadow-pink-500/5 hover:shadow-xl hover:shadow-pink-500/10'
              }`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110 ${
                theme === 'dark' ? 'bg-pink-500/20 text-pink-400' : 'bg-pink-100 text-pink-600'
              }`}>
                ⚙️
              </div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                  {t.platform.reengage}
                </span>
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  {' '}{t.platform.reengageText}
                </span>
              </h3>
              <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.platform.reengageDesc}
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`rounded-[2.5rem] p-12 relative overflow-hidden ${
            theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white/50 border border-white/60'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
              {/* Stat 1 */}
              <div className="text-center group">
                <div className="text-5xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">12 Bn+</div>
                <div className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                  {t.platform.stat1}
                </div>
              </div>

              {/* Stat 2 */}
              <div className="text-center group">
                <div className="text-5xl font-bold bg-gradient-to-br from-purple-500 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">120+</div>
                <div className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                  {t.platform.stat2}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                  {t.platform.stat2Sub}
                </div>
              </div>

              {/* Stat 3 */}
              <div className="text-center group">
                <div className="text-5xl font-bold bg-gradient-to-br from-pink-500 to-pink-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">120 Bn+</div>
                <div className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                  {t.platform.stat3}
                </div>
              </div>

              {/* Stat 4 */}
              <div className="text-center group">
                <div className="text-5xl font-bold bg-gradient-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">20 +</div>
                <div className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                  {t.platform.stat4}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                  {t.platform.stat4Sub}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
