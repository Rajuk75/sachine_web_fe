import React from 'react';
import { useLanguage } from "../context/LanguageContext";
import { RiBookOpenLine, RiVideoLine, RiArticleLine, RiQuestionAnswerLine, RiArrowRightLine, RiFileList3Line, RiCustomerService2Line } from 'react-icons/ri';

const Resources = () => {
  const { t } = useLanguage();

  const resources = [
    { 
      icon: <RiBookOpenLine />, 
      title: 'Documentation', 
      desc: 'Comprehensive guides, API references, and technical documentation to help you integrate and build faster.',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: <RiVideoLine />, 
      title: 'Video Tutorials', 
      desc: 'Step-by-step video guides and walkthroughs to help you master our platform and features.',
      color: 'pink',
      gradient: 'from-pink-500 to-rose-500'
    },
    { 
      icon: <RiArticleLine />, 
      title: 'Blog & Insights', 
      desc: 'Stay updated with the latest industry trends, marketing strategies, and product updates.',
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-500'
    },
    { 
      icon: <RiQuestionAnswerLine />, 
      title: 'FAQ & Support', 
      desc: 'Find answers to common questions or get in touch with our dedicated support team.',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      icon: <RiFileList3Line />, 
      title: 'Case Studies', 
      desc: 'Real-world examples of how businesses are using AdsHamper to drive growth and success.',
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      icon: <RiCustomerService2Line />, 
      title: 'Webinars', 
      desc: 'Join live sessions with industry experts to learn best practices and advanced strategies.',
      color: 'teal',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-4">
            Knowledge Hub
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Resources & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to succeed with AdsHamper. Explore our comprehensive library of guides, tutorials, and expert insights.
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((item, idx) => (
              <div 
                key={idx} 
                className={`group border p-10 transition-all duration-300 hover:shadow-xl rounded-xl relative overflow-hidden ${
                  idx === 0 
                    ? `bg-${item.color}-600 border-${item.color}-600 hover:bg-white hover:border-gray-200`
                    : `bg-white border-gray-200 ${
                        item.color === 'blue' ? 'hover:bg-blue-600 hover:border-blue-600' : 
                        item.color === 'pink' ? 'hover:bg-pink-600 hover:border-pink-600' : 
                        item.color === 'purple' ? 'hover:bg-purple-600 hover:border-purple-600' : 
                        item.color === 'green' ? 'hover:bg-green-600 hover:border-green-600' :
                        item.color === 'orange' ? 'hover:bg-orange-600 hover:border-orange-600' : 'hover:bg-teal-600 hover:border-teal-600'
                      }`
                }`}
              >
                
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-3xl mb-6 transition-colors duration-300 ${
                  idx === 0
                    ? `bg-white/20 text-white group-hover:bg-gray-50 group-hover:text-gray-600`
                    : `bg-gray-50 text-gray-600 group-hover:bg-white/20 group-hover:text-white`
                }`}>
                  {item.icon}
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  idx === 0
                    ? `text-white group-hover:text-gray-900`
                    : `text-gray-900 group-hover:text-white`
                }`}>
                  {item.title}
                </h3>
                <p className={`leading-relaxed mb-6 transition-colors duration-300 ${
                  idx === 0
                    ? `text-white/90 group-hover:text-gray-600`
                    : `text-gray-600 group-hover:text-white/90`
                }`}>
                  {item.desc}
                </p>
                
                <a href="#" className={`inline-flex items-center font-semibold transition-colors duration-300 ${
                  idx === 0
                    ? `text-white group-hover:text-gray-900`
                    : `text-gray-900 group-hover:text-white`
                }`}>
                  Learn More <RiArrowRightLine className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-24 relative overflow-hidden" style={{
          backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)',
          backgroundSize: '30px 30px',
          backgroundColor: '#ffffff'
      }}>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stay Ahead of the Curve
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Subscribe to our newsletter for the latest marketing tips, product updates, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 flex-grow"
            />
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Resources;
