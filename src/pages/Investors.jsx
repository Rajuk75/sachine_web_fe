import React from 'react';
import { useLanguage } from "../context/LanguageContext";
import { RiStockLine, RiPieChartLine, RiFileTextLine, RiCalendarEventLine, RiArrowRightLine, RiShakeHandsLine, RiGlobalLine, RiTeamLine } from 'react-icons/ri';

const Investors = () => {
  const { t } = useLanguage();

  const stats = [
    { label: 'Annual Revenue', value: '$50M+', change: '+25% YoY', color: 'green' },
    { label: 'Global Clients', value: '500+', change: '+40% YoY', color: 'blue' },
    { label: 'Market Share', value: '15%', change: '+5% YoY', color: 'purple' },
    { label: 'Team Growth', value: '200+', change: '+30% YoY', color: 'pink' },
  ];

  const resources = [
    { 
      icon: <RiFileTextLine />, 
      title: 'Financial Reports', 
      desc: 'Access our quarterly and annual financial statements, earnings call transcripts, and investor presentations.',
      color: 'blue'
    },
    { 
      icon: <RiCalendarEventLine />, 
      title: 'Events & Presentations', 
      desc: 'Stay informed about upcoming investor conferences, annual general meetings, and earnings calls.',
      color: 'purple'
    },
    { 
      icon: <RiStockLine />, 
      title: 'Stock Information', 
      desc: 'View real-time stock performance, historical data, and dividend history.',
      color: 'green'
    },
    { 
      icon: <RiShakeHandsLine />, 
      title: 'Corporate Governance', 
      desc: 'Learn about our leadership team, board of directors, and commitment to ethical business practices.',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-600 text-sm font-semibold tracking-wide uppercase mb-4">
          Investor Relations
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Driving Sustainable <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Growth</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are committed to delivering long-term value to our shareholders through innovation, operational excellence, and strategic expansion.
        </p>
      </div>

      {/* Financial Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-500 font-medium mb-2">{stat.label}</p>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${stat.color}-100 text-${stat.color}-800`}>
                {stat.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Strategy */}
      <div className="bg-gray-50 py-20 mb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Strategy for Value Creation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our growth strategy is built on three pillars: expanding our digital footprint, investing in next-gen technology, and fostering strategic partnerships. We believe this approach positions us for long-term success in the rapidly evolving digital landscape.
              </p>
              <ul className="space-y-4">
                {[
                  'Accelerating Digital Transformation',
                  'Expanding into Emerging Markets',
                  'Leveraging AI & Automation',
                  'Strategic Acquisitions'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-xs">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-green-400 rounded-2xl transform rotate-3 opacity-20 blur-lg"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-2xl">
                    <RiGlobalLine />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Global Expansion</h4>
                    <p className="text-sm text-gray-500">Entering 5 new markets in 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-2xl">
                    <RiPieChartLine />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Diversified Revenue</h4>
                    <p className="text-sm text-gray-500">Balanced portfolio across sectors</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 text-2xl">
                    <RiTeamLine />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Talent Acquisition</h4>
                    <p className="text-sm text-gray-500">Attracting top industry talent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investor Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Investor Resources</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((item, idx) => (
            <div key={idx} className="group bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-blue-500 cursor-pointer">
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center text-3xl mb-6 transition-colors duration-300 bg-${item.color}-50 text-${item.color}-600 group-hover:bg-${item.color}-600 group-hover:text-white`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {item.desc}
              </p>
              <span className="inline-flex items-center font-semibold text-blue-600 group-hover:translate-x-2 transition-transform duration-300">
                View Details <RiArrowRightLine className="ml-2" />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact IR */}
      <div className="max-w-4xl mx-auto px-4 text-center py-16 bg-gray-900 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Contact Investor Relations
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            For inquiries regarding financial information or investment opportunities.
          </p>
          <a href="mailto:investors@adshamper.com" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            investors@adshamper.com
          </a>
        </div>
      </div>

    </div>
  );
};

export default Investors;
