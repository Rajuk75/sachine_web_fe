import React from 'react';
import { useLanguage } from "../context/LanguageContext";
import { RiArrowRightLine } from 'react-icons/ri';
import { SOLUTIONS_DATA } from '../data/solutionsData';
import { EXTERNAL_LINKS } from '../constants/externalLinks';

const Solutions = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold tracking-wide uppercase mb-4">
            Smart Solutions
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Digital Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Architecture</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tailored solutions designed to solve your unique business challenges. We combine technology and creativity to drive results that matter.
          </p>
        </div>
      </div>

      {/* Solutions Zig-Zag Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SOLUTIONS_DATA.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual Side */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    <div className={`relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-xl border-2 border-gray-100 shadow-lg flex items-center justify-center transform group-hover:-translate-y-2 transition-all duration-300 ${item.color === 'blue' ? 'group-hover:border-blue-500 group-hover:shadow-blue-200' : item.color === 'pink' ? 'group-hover:border-pink-500 group-hover:shadow-pink-200' : item.color === 'purple' ? 'group-hover:border-purple-500 group-hover:shadow-purple-200' : 'group-hover:border-green-500 group-hover:shadow-green-200'}`}>
                      <div className={`text-8xl ${item.color === 'blue' ? 'text-blue-600' : item.color === 'pink' ? 'text-pink-600' : item.color === 'purple' ? 'text-purple-600' : 'text-green-600'}`}>
                        {item.icon}
                      </div>
                      
                      {/* Floating Elements for Decoration */}
                      <div className={`absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-20 animate-bounce`} style={{ animationDuration: '3s' }}></div>
                      <div className={`absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full opacity-20 animate-bounce`} style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="py-24 relative overflow-hidden" style={{
          backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)',
          backgroundSize: '30px 30px',
          backgroundColor: '#ffffff'
      }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Let's discuss how our smart solutions can help you achieve your goals.
          </p>
          <a 
            href={`mailto:${EXTERNAL_LINKS.SUPPORT_EMAIL}`}
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors shadow-xl"
          >
            {EXTERNAL_LINKS.SUPPORT_EMAIL}
          </a>
        </div>
      </div>

    </div>
  );
};

export default Solutions;
