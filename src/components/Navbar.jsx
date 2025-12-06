import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { languages } from "../translations/translations";
import PATHS from "../routes/paths";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-0' : 'py-4'}`}>
      <div className={`mx-auto transition-all duration-300 ${isScrolled ? 'max-w-full px-0' : 'max-w-7xl px-4 sm:px-6 lg:px-8'}`}>
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2 px-6' : 'bg-white shadow-lg px-6 py-2 md:rounded-full rounded-none'}`}>
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => navigate(PATHS.HOME)}>
             <img 
                src="/adshamper_logo-removebg-preview.png" 
                alt="AdsHamper" 
                className="h-12 w-auto object-contain" 
              />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: "Home", path: PATHS.HOME },
              { label: "About", path: PATHS.COMPANY },
              { label: "Services", path: PATHS.SOLUTIONS },
              { label: "Studio", path: PATHS.STUDIO },
              { label: "Resources", path: PATHS.RESOURCES },
              { label: "Investor Relations", path: PATHS.INVESTORS },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => navigate(item.path)}
                className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors flex items-center gap-1 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
             <button 
                onClick={() => window.location.href = 'https://adshamper.com/user/login/'}
                className="bg-yellow-400 text-dark px-8 py-2 rounded-full font-bold text-sm hover:bg-yellow-500 transition-colors flex items-center gap-2 shadow-md"
             >
                Login <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-none shadow-xl p-4 absolute left-0 right-0 top-full border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              {[
                { label: "Home", path: PATHS.HOME },
                { label: "About", path: PATHS.COMPANY },
                { label: "Services", path: PATHS.SOLUTIONS },
                { label: "Projects", path: PATHS.STUDIO },
                { label: "Blog", path: PATHS.RESOURCES },
                { label: "Team", path: PATHS.COMPANY },
                { label: "Contact", path: PATHS.COMPANY }
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => window.location.href = 'https://adshamper.com/user/login/'}
                className="bg-yellow-400 text-dark px-6 py-3 rounded-full font-bold text-sm hover:bg-yellow-500 transition-colors w-full flex items-center justify-center gap-2"
              >
                Login <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
