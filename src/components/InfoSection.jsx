import { FaBullhorn, FaChartLine, FaCogs, FaArrowRight, FaCheckCircle, FaPlay, FaChartPie, FaLaptopCode, FaSearchDollar, FaVrCardboard } from 'react-icons/fa';
import RevealOnScroll from './ui/RevealOnScroll';

const InfoSection = () => {
  const services = [
    {
      title: 'Discover a high-value, fraud-free user base',
      desc: 'Leverage the power of intelligent advertising and target the most relevant audience for your brand with optimized creatives run post A/B testing to ensure real conversions.',
      icon: <FaBullhorn className="w-6 h-6" />,
      color: 'text-orange-500',
      bg: 'bg-orange-50'
    },
    {
      title: 'Acquire and Engage users at every step',
      desc: 'Find your highest value user, analyse post-install behaviour and reduce customer acquisitions costs further down the funnel with a focus on higher user LTVs.',
      icon: <FaChartLine className="w-6 h-6" />,
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      title: 'Re-engage users with ML optimized creatives',
      desc: 'Create extensive look-alike audiences, measure user interest and estimate likelihood of actions to retarget previously active and loyal users.',
      icon: <FaCogs className="w-6 h-6" />,
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    }
  ];

  // Feature Data for About Us
  const features = [
    { text: 'Market Management', icon: <FaChartPie className="w-5 h-5 text-blue-600" />, bg: 'bg-blue-50' },
    { text: 'Freelancing Training', icon: <FaLaptopCode className="w-5 h-5 text-purple-600" />, bg: 'bg-purple-50' },
    { text: 'Business Analysis', icon: <FaSearchDollar className="w-5 h-5 text-green-600" />, bg: 'bg-green-50' },
    { text: 'Augmented Reality', icon: <FaVrCardboard className="w-5 h-5 text-orange-600" />, bg: 'bg-orange-50' }
  ];

  return (
    <section className="relative bg-white z-20 pb-0">
      
      {/* ... Services Section ... */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 md:pt-24 mt-0 md:mt-2 mb-32">
        {/* ... (Keep existing Services code) ... */}
        <RevealOnScroll>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a102e] mb-6 leading-tight">
              The all-in-one platform to <span className="text-orange-500">grow your app</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Launch more powerful, data-driven, custom-built campaigns to achieve global growth with AdsHamper
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={index} className={`delay-${index * 100}`}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 h-full">
                <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0a102e] mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">
                  {service.desc}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#0a102e] hover:text-orange-500 transition-colors">
                  Learn More <FaArrowRight className="text-xs" />
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* ==================== SECTION 2: ABOUT US (Full Width Right) ==================== */}
      <div className="relative w-full overflow-hidden min-h-[600px] flex items-center">
        
        {/* Right Side Background & Image */}
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0">
           {/* Main Image - Adjusted Position */}
           <img 
              src="/about-us-meeting.png" 
              alt="Business Team Meeting" 
              className="absolute inset-0 w-full h-full object-cover object-left"
           />
           <div className="absolute inset-0 bg-white/80 lg:bg-transparent lg:hidden"></div>
        </div>

        {/* Curved Divider */}
        <div className="hidden lg:block absolute top-0 right-[50%] bottom-0 w-[200px] z-10 pointer-events-none">
           <svg viewBox="0 0 100 200" preserveAspectRatio="none" className="w-full h-full text-white fill-current">
              <path d="M0,0 L0,200 L50,200 C100,150 100,50 50,0 Z" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text Content */}
            <div className="py-16 lg:py-24 pr-0 lg:pr-16">
              <RevealOnScroll>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                  <span className="text-blue-600 font-bold tracking-wider uppercase text-xs">
                    Profitable And Successful Investments
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#0a102e] mb-6 leading-tight">
                  Internal Accounting, <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sales Data</span> & Market <br />
                  Economic Indicators
                </h2>
                
                <p className="text-gray-600 leading-relaxed text-lg mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis e-commerce via process-centric outside the box thinking nostrud exercitation.
                </p>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                   {features.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                         <div className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            {item.icon}
                         </div>
                         <span className="text-gray-700 font-bold text-sm">{item.text}</span>
                      </div>
                   ))}
                </div>

                <button className="px-8 py-4 bg-gradient-to-r from-[#FF4F79] to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide text-sm flex items-center gap-2">
                   Get Started <FaArrowRight />
                </button>
              </RevealOnScroll>
            </div>

            {/* Right: Empty Column */}
            <div className="hidden lg:block h-full min-h-[500px] relative">
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <button className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group">
                     <div className="w-16 h-16 bg-gradient-to-r from-[#FF4F79] to-orange-500 rounded-full flex items-center justify-center">
                        <FaPlay className="ml-1 text-white text-xl" />
                     </div>
                  </button>
               </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default InfoSection;
