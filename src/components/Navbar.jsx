import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { languages } from "../translations/translations";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'dark' ? "bg-gray-900 shadow-md" : "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("welcome")}
              className={`text-2xl font-bold transition-all hover:scale-110 ${
                isScrolled 
                  ? theme === 'dark' ? "text-white" : "text-gray-900"
                  : theme === 'dark' ? "text-white" : "text-blue-600"
              }`}
            >
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                AdsHamper
              </span>
            </button>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("welcome")}
              className={`font-medium transition-all hover:scale-105 ${
                isScrolled 
                  ? theme === 'dark' ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  : theme === 'dark' ? "text-white hover:text-blue-300" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {t.nav.studio}
            </button>
            <button
              onClick={() => scrollToSection("welcome")}
              className={`font-medium transition-all hover:scale-105 ${
                isScrolled 
                  ? theme === 'dark' ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  : theme === 'dark' ? "text-white hover:text-blue-300" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {t.nav.technology}
            </button>
            <button
              onClick={() => scrollToSection("welcome")}
              className={`font-medium transition-all hover:scale-105 ${
                isScrolled 
                  ? theme === 'dark' ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  : theme === 'dark' ? "text-white hover:text-blue-300" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {t.nav.solutions}
            </button>
            <button
              onClick={() => scrollToSection("welcome")}
              className={`font-medium transition-all hover:scale-105 ${
                isScrolled 
                  ? theme === 'dark' ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  : theme === 'dark' ? "text-white hover:text-blue-300" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {t.nav.company}
            </button>
            <button
              onClick={() => scrollToSection("welcome")}
              className={`font-medium transition-all hover:scale-105 ${
                isScrolled 
                  ? theme === 'dark' ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  : theme === 'dark' ? "text-white hover:text-blue-300" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {t.nav.resources}
            </button>
            <button
              onClick={() => scrollToSection("welcome")}
              className={`font-medium transition-all hover:scale-105 ${
                isScrolled 
                  ? theme === 'dark' ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  : theme === 'dark' ? "text-white hover:text-blue-300" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {t.nav.investors}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-lg transition-all hover:scale-110 ${
                isScrolled 
                  ? theme === 'dark' ? "text-white hover:bg-gray-800" : "text-gray-900 hover:bg-gray-100"
                  : theme === 'dark' ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"
              }`}
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all hover:scale-105 ${
                  isScrolled 
                    ? theme === 'dark' ? "text-white hover:bg-gray-800" : "text-gray-900 hover:bg-gray-100"
                    : theme === 'dark' ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="text-lg">{currentLang.flag}</span>
                <span className="font-medium">{currentLang.name}</span>
                <span className="text-xs">▼</span>
              </button>

              {showLangMenu && (
                <div className={`absolute right-0 mt-2 w-44 rounded-xl shadow-xl overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                }`}>
                  <div className="py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code);
                          setShowLangMenu(false);
                        }}
                        className={`w-full text-left px-4 py-3 flex items-center space-x-3 transition-all ${
                          language === lang.code
                            ? theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                            : theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                        {language === lang.code && <span className="ml-auto">✓</span>}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Get Started Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowGetStarted(true)}
              onMouseLeave={() => setShowGetStarted(false)}
            >
              <button
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Get Started</span>
                <span className="text-xs">▼</span>
              </button>

              {showGetStarted && (
                <div className={`absolute right-0 mt-2 w-56 rounded-xl shadow-2xl overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                }`}>
                  <div className="py-2">
                    <a
                      href="https://adshamper.com/user/login/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block px-5 py-3 transition-all ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🔐</span>
                        <div>
                          <div className="font-semibold">{t.nav.login}</div>
                          <div className="text-xs opacity-75">Access your account</div>
                        </div>
                      </div>
                    </a>
                    
                    <div className={`h-px mx-3 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                    
                    <a
                      href="https://adshamper.com/user/register/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block px-5 py-3 transition-all ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">✨</span>
                        <div>
                          <div className="font-semibold">{t.nav.signUp}</div>
                          <div className="text-xs opacity-75">Create new account</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`p-2 ${
                isScrolled 
                  ? theme === 'dark' ? "text-white" : "text-gray-900"
                  : theme === 'dark' ? "text-white" : "text-gray-700"
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
