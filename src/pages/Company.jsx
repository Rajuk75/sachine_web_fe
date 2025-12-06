import React from 'react';
import { useLanguage } from "../context/LanguageContext";
import { FaRocket, FaUsers, FaLightbulb, FaHandshake, FaChartLine, FaGlobe } from 'react-icons/fa';

const Company = () => {
  const { t } = useLanguage();

  const cards = [
    { 
      icon: <FaRocket />, 
      title: 'Our Mission', 
      desc: 'To empower businesses with data-driven digital marketing solutions that deliver measurable growth and sustainable success.' 
    },
    { 
      icon: <FaLightbulb />, 
      title: 'Our Vision', 
      desc: 'To be the leading catalyst for digital transformation, setting new standards of innovation and excellence in the industry.' 
    },
    { 
      icon: <FaHandshake />, 
      title: 'Our Values', 
      desc: 'Integrity, Transparency, and Client-Centricity are at the core of everything we do. We believe in building lasting partnerships.' 
    },
    { 
      icon: <FaUsers />, 
      title: 'Our Team', 
      desc: 'A diverse group of creative minds, tech experts, and strategists working together to bring your brand vision to life.' 
    },
    { 
      icon: <FaChartLine />, 
      title: 'Our Approach', 
      desc: 'We combine creativity with analytics to craft strategies that not only look good but perform exceptionally well.' 
    },
    { 
      icon: <FaGlobe />, 
      title: 'Global Reach', 
      desc: 'Serving clients across the globe with localized strategies that resonate with diverse audiences and markets.' 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-4">
            About Us
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">Adshamper</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Adshamper Pvt. Ltd. is a dynamic marketing and advertising company based in Kolkata, India. We're dedicated to transforming the digital performance marketing space with innovation, technology, and a strong focus on measurable results.
          </p>
        </div>
      </div>

      {/* Cards Grid Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((item, idx) => (
              <div 
                key={idx} 
                className="group bg-white border border-gray-200 p-10 hover:bg-blue-600 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                  {item.desc}
                </p>
                <div className="mt-8 h-1 w-12 bg-blue-200 group-hover:bg-white transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Dotted Section */}
      <div className="w-full py-24 relative" style={{
          backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)',
          backgroundSize: '30px 30px',
          backgroundColor: '#ffffff'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-blue-600">Adshamper?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We don't just run campaigns; we build brands. Our data-driven approach ensures that every penny you spend yields maximum returns. With a team of dedicated experts and cutting-edge technology, we are your partners in growth.
              </p>
              <ul className="space-y-4">
                {[
                  'Data-Driven Strategies',
                  'Transparent Reporting',
                  'Creative Excellence',
                  '24/7 Dedicated Support'
                ].map((point, i) => (
                  <li key={i} className="flex items-center text-gray-700 font-medium">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 text-xs">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 transform rotate-3 rounded-2xl opacity-20 blur-lg"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600 font-medium">Clients Worldwide</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-4xl font-bold text-pink-600 mb-2">98%</div>
                    <div className="text-sm text-gray-600 font-medium">Retention Rate</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-4xl font-bold text-purple-600 mb-2">10M+</div>
                    <div className="text-sm text-gray-600 font-medium">Leads Generated</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600 font-medium">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Company;
