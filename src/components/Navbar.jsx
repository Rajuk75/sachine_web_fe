import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { languages } from "../translations/translations";
import PATHS from "../routes/paths";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.lang-dropdown') && showLangMenu) {
        setShowLangMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLangMenu]);

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'dark' ? "bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-gray-900/50" : "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate(PATHS.HOME)}
              className={`text-2xl font-bold transition-all hover:scale-110 ${
                isScrolled 
                  ? theme === 'dark' ? "text-white" : "text-gray-900"
                  : theme === 'dark' ? "text-white" : "text-blue-600"
              }`}
            >
              <img 
                src="/adshamper_logo-removebg-preview.png" 
                alt="AdsHamper" 
                className="h-20 w-auto object-contain"
              />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate(PATHS.STUDIO)}
              className={`font-medium transition-all hover:scale-105 ${
                isScrolled 
                  ? theme === 'dark' ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  : theme === 'dark' ? "text-white hover:text-blue-300" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {t.nav.studio}
            </button>
            <button
              onClick={() => navigate(PATHS.TECHNOLOGY)}
              className={`font-medium transition-all hover:scale-105 ${
                isScrolled 
                  ? theme === 'dark' ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  : theme === 'dark' ? "text-white hover:text-blue-300" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {t.nav.technology}
            </button>
            <button
              onClick={() => navigate(PATHS.SOLUTIONS)}
              className={`font-medium transition-all hover:scale-105 ${
                isScrolled 
                  ? theme === 'dark' ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  : theme === 'dark' ? "text-white hover:text-blue-300" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {t.nav.solutions}
            </button>
            <button
              onClick={() => navigate(PATHS.COMPANY)}
              className={`font-medium transition-all hover:scale-105 ${
                isScrolled 
                  ? theme === 'dark' ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  : theme === 'dark' ? "text-white hover:text-blue-300" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {t.nav.company}
            </button>
            <button
              onClick={() => navigate(PATHS.RESOURCES)}
              className={`font-medium transition-all hover:scale-105 ${
                isScrolled 
                  ? theme === 'dark' ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  : theme === 'dark' ? "text-white hover:text-blue-300" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {t.nav.resources}
            </button>
            <button
              onClick={() => navigate(PATHS.INVESTORS)}
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
            <div className="relative lang-dropdown">
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
                <span className={`text-xs transition-transform ${showLangMenu ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {showLangMenu && (
                <div className={`absolute right-0 mt-2 w-44 rounded-xl shadow-xl overflow-hidden z-50 ${
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
                onClick={() => setShowGetStarted(!showGetStarted)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Get Started</span>
                <span className={`text-xs transition-transform ${showGetStarted ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {showGetStarted && (
                <div className={`absolute right-0 mt-2 w-64 rounded-xl shadow-2xl overflow-hidden z-50 ${
                  theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                }`}>
                  <div className="py-2">
                    <a
                      href="https://adshamper.com/user/login/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block px-5 py-3.5 transition-all ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:bg-blue-600 hover:text-white' 
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🔐</span>
                        <div>
                          <div className="font-semibold text-base">{t.nav.login}</div>
                          <div className="text-xs opacity-75">Access your account</div>
                        </div>
                      </div>
                    </a>
                    
                    <div className={`h-px mx-3 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                    
                    <a
                      href="https://adshamper.com/user/register/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block px-5 py-3.5 transition-all ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:bg-blue-600 hover:text-white' 
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">✨</span>
                        <div>
                          <div className="font-semibold text-base">{t.nav.signUp}</div>
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
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all ${
                isScrolled 
                  ? theme === 'dark' ? "text-white hover:bg-gray-800" : "text-gray-900 hover:bg-gray-100"
                  : theme === 'dark' ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-all ${
                isScrolled 
                  ? theme === 'dark' ? "text-white hover:bg-gray-800" : "text-gray-900 hover:bg-gray-100"
                  : theme === 'dark' ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"
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
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-gray-900/98 backdrop-blur-xl border-t border-gray-800' 
              : 'bg-white/98 backdrop-blur-xl border-t border-gray-200'
          }`}>
            <div className="px-4 py-6 space-y-4">
              {/* Navigation Links */}
              <div className="space-y-2">
                {[
                  { label: t.nav.studio, path: PATHS.STUDIO },
                  { label: t.nav.technology, path: PATHS.TECHNOLOGY },
                  { label: t.nav.solutions, path: PATHS.SOLUTIONS },
                  { label: t.nav.company, path: PATHS.COMPANY },
                  { label: t.nav.resources, path: PATHS.RESOURCES },
                  { label: t.nav.investors, path: PATHS.INVESTORS }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      navigate(item.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                      theme === 'dark' 
                        ? 'text-white hover:bg-gray-800' 
                        : 'text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Language Selector Mobile */}
              <div className={`pt-4 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="text-sm font-semibold mb-2 px-4 text-gray-500">Language</div>
                <div className="space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-all ${
                        language === lang.code
                          ? theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                          : theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                      {language === lang.code && <span className="ml-auto">✓</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Get Started Buttons Mobile */}
              <div className={`pt-4 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="space-y-3">
                  <a
                    href="https://adshamper.com/user/login/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block px-4 py-3 rounded-lg transition-all ${
                      theme === 'dark' 
                        ? 'bg-gray-800 text-white hover:bg-gray-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
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
                  
                  <a
                    href="https://adshamper.com/user/register/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">✨</span>
                      <div>
                        <div className="font-semibold">{t.nav.signUp}</div>
                        <div className="text-xs opacity-90">Create new account</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
