import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import WaveBackground from "./WaveBackground";

const HeroSection = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section className={`min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden ${theme === 'dark' 
      ? 'bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900' 
      : 'bg-gradient-to-b from-white via-blue-50 to-white'
      }`}>
      {/* Wave Background */}
      <WaveBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-md ${theme === 'dark' 
            ? 'bg-blue-500/10 border border-blue-400/30' 
            : 'bg-blue-100/80 border border-blue-300/50'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>
              AI-Powered Platform
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.hero.titlePart1}
          </span>
          <br />
          <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
            {t.hero.titlePart2}
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto animate-fade-in ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {t.hero.predictiveAlgorithms} {t.hero.and} {t.hero.machineLearning}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in">
          <a
            href="https://adshamper.com/user/login/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl text-base font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative">🔐</span>
            <span className="relative">{t.nav.login}</span>
          </a>
          <a
            href="https://adshamper.com/user/register/"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-10 py-4 rounded-xl text-base font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-md ${theme === 'dark'
              ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              : 'bg-white/80 text-gray-900 hover:bg-white border border-gray-200 shadow-lg'
            }`}
          >
            <span>✨</span>
            <span>{t.nav.signUp}</span>
          </a>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in">
          {[
            { icon: '🎯', title: 'Accurate', desc: 'Precision targeting with AI' },
            { icon: '⚡', title: 'Fast', desc: 'Real-time processing' },
            { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security' }
          ].map((feature, idx) => (
            <div key={idx} className={`p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl ${theme === 'dark'
                ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                : 'bg-white/60 border border-gray-200 hover:shadow-blue-200/50'
              }`}>
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
