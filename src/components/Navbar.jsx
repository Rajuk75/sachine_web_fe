import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";
import { languages } from "../translations/translations";
import PATHS from "../routes/paths";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
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
                  ? "text-gray-900"
                  : "text-white drop-shadow-md"
              }`}
            >
              <img 
                src="/adshamper_logo-removebg-preview.png" 
                alt="AdsHamper" 
                className="h-24 w-auto object-contain" // Increased logo size
              />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
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
                onClick={() => navigate(item.path)}
                className={`font-bold text-base uppercase tracking-wide transition-all hover:scale-105 ${
                  isScrolled 
                    ? "text-gray-900 hover:text-blue-600"
                    : "text-white hover:text-blue-200 drop-shadow-md"
                }`}
              >
                {item.label}
              </button>
            ))}



            {/* Language Selector */}
            <div className="relative lang-dropdown">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all hover:scale-105 ${
                  isScrolled 
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="text-lg">{currentLang.flag}</span>
                <span className="font-medium">{currentLang.name}</span>
                <span className={`text-xs transition-transform ${showLangMenu ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-44 rounded-xl shadow-xl overflow-hidden z-50 bg-white border border-gray-200">
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
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-50'
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
                <div className="absolute right-0 mt-2 w-64 rounded-xl shadow-2xl overflow-hidden z-50 bg-white border border-gray-200">
                  <div className="py-2">
                    <a
                      href="https://adshamper.com/user/login/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-5 py-3.5 transition-all text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🔐</span>
                        <div>
                          <div className="font-semibold text-base">{t.nav.login}</div>
                          <div className="text-xs opacity-75">Access your account</div>
                        </div>
                      </div>
                    </a>
                    
                    <div className="h-px mx-3 bg-gray-200"></div>
                    
                    <a
                      href="https://adshamper.com/user/register/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-5 py-3.5 transition-all text-gray-700 hover:bg-blue-50 hover:text-blue-600"
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


            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-all ${
                isScrolled 
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-gray-700 hover:bg-gray-100"
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
          <div className="md:hidden absolute top-full left-0 right-0 transition-all duration-300 bg-white/98 backdrop-blur-xl border-t border-gray-200">
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
                    className="w-full text-left px-4 py-3 rounded-lg font-medium transition-all text-gray-900 hover:bg-gray-100"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Language Selector Mobile */}
              <div className="pt-4 border-t border-gray-200">
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
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-100'
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
              <div className="pt-4 border-t border-gray-200">
                <div className="space-y-3">
                  <a
                    href="https://adshamper.com/user/login/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 rounded-lg transition-all bg-gray-100 text-gray-900 hover:bg-gray-200"
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
