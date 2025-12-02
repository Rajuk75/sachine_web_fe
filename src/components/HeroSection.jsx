import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

import WaveSeparator from './WaveSeparator';

const HeroSection = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section className={`min-h-screen flex flex-col items-center justify-center pt-28 pb-0 overflow-hidden relative ${
      theme === 'dark' ? 'bg-[#0B0F19]' : 'bg-white'
    }`}>
      
      {/* Main Container with "Elevated" Glassmorphism Style */}
      <div className={`w-full max-w-7xl mx-auto rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden z-20 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-white/5' 
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-white/60 shadow-2xl shadow-blue-100/50'
      }`}>
        
        {/* Abstract Background Graphics */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-400/10 to-pink-400/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
          
          {/* Left Column: Text Content */}
          <div className="text-left space-y-8 relative">
            
            <h1 className={`text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t.hero.titlePart1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
                {t.hero.titlePart2}
              </span>
            </h1>

            <p className={`text-lg md:text-xl leading-relaxed max-w-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t.hero.subtitle}{' '}
              <span className="font-semibold text-blue-500">
                {t.hero.predictiveAlgorithms}
              </span>
              {' '}{t.hero.and}{' '}
              <span className="font-semibold text-purple-500">
                {t.hero.machineLearning}
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://adshamper.com/user/register/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t.nav.signUp} Now <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="https://adshamper.com/user/login/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-8 py-3 text-lg font-bold transition-all duration-300 rounded-full border hover:-translate-y-1 ${
                  theme === 'dark' 
                    ? 'border-white/20 text-white hover:bg-white/10' 
                    : 'border-gray-200 text-gray-700 hover:bg-white hover:shadow-md hover:border-gray-300'
                }`}
              >
                {t.nav.login}
              </a>
            </div>
          </div>

          {/* Right Column: Image with "Elevated" Graphics Feel */}
          <div className="relative perspective-1000">
             {/* Main Image Card */}
             <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-500/20 transform transition-transform hover:scale-[1.02] duration-700 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-60"></div>
                <img 
                  src="/hero_tech.png" 
                  alt="AI Tech Professional" 
                  className="w-full h-auto object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                />
                
                {/* Floating Glass Card Overlay 1 */}
                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-4">
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden p-1 ${
                      theme === 'dark' ? 'bg-black border border-gray-700' : 'bg-white'
                    }`}>
                      <img 
                        src="/adshamper_logo-removebg-preview.png" 
                        alt="AdsHamper" 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">AdsHamper</div>
                      <div className="text-blue-200 text-sm">Proof in Performance</div>
                    </div>
                    <div className="ml-auto">
                       <div className="flex gap-1">
                         <div className="w-1 h-6 bg-green-400 rounded-full animate-pulse"></div>
                         <div className="w-1 h-4 bg-green-400 rounded-full animate-pulse delay-75"></div>
                         <div className="w-1 h-8 bg-green-400 rounded-full animate-pulse delay-150"></div>
                         <div className="w-1 h-5 bg-green-400 rounded-full animate-pulse delay-100"></div>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* Floating Decorative Elements */}
             <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 blur-2xl opacity-40 animate-pulse"></div>
             <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-blue-500/30 blur-3xl animate-pulse delay-700"></div>
          </div>

        </div>
      </div>

      {/* Wave Separator */}
      <div className="w-full relative z-10">
        <WaveSeparator />
      </div>
    </section>
  );
};

export default HeroSection;
