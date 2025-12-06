import React from 'react';
import { FaBullhorn, FaChartLine, FaCogs, FaSyncAlt, FaChartBar, FaArrowRight, FaCheckCircle, FaPlay, FaChartPie, FaLaptopCode, FaSearchDollar, FaVrCardboard, FaMobile, FaDatabase } from 'react-icons/fa';
import RevealOnScroll from './ui/RevealOnScroll';

const InfoSection = () => {
  const services = [
    {
      title: 'Discover a high-value, fraud-free user base for your app',
      desc: 'Leverage the power of intelligent advertising and target the most relevant audience for your brand with optimized creatives run post A/B testing to ensure real conversions',
      icon: <FaBullhorn className="w-10 h-10 text-orange-500" />,
    },
    {
      title: 'Acquire and Engage users at every step of your customer journey',
      desc: 'Find your highest value user, analyse post-install behaviour and reduce customer acquisitions costs further down the funnel with a focus on higher user LTVs',
      icon: <FaChartLine className="w-10 h-10 text-orange-500" />,
      hasSeparator: true
    },
    {
      title: 'Re-engage users with machine learning optimized creatives',
      desc: 'Create extensive look-alike audiences, measure user interest and estimate likelihood of actions to retarget previously active and loyal users with our predictive machine learning',
      icon: <FaCogs className="w-10 h-10 text-orange-500" />,
      hasSeparator: true
    }
  ];

  // Feature Data for About Us -- unchanged
  const features = [
    { text: 'Market Management', icon: <FaChartPie className="w-5 h-5 text-blue-600" />, bg: 'bg-blue-50' },
    { text: 'Freelancing Training', icon: <FaLaptopCode className="w-5 h-5 text-purple-600" />, bg: 'bg-purple-50' },
    { text: 'Business Analysis', icon: <FaSearchDollar className="w-5 h-5 text-green-600" />, bg: 'bg-green-50' },
    { text: 'Augmented Reality', icon: <FaVrCardboard className="w-5 h-5 text-orange-600" />, bg: 'bg-orange-50' }
  ];

  return (
    <section className="relative z-20 pb-0 pt-24 md:pt-32 bg-white overflow-hidden">
      
      {/* Background Transition Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
         {/* Full Width Flow - Restored Intensity */}
         <div className="absolute top-0 left-0 w-full h-[900px] bg-gradient-to-b from-blue-100/70 via-blue-50/50 to-transparent"></div>
         
         {/* Right Side Boost - For Balance */}
         <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[800px] bg-gradient-to-b from-blue-200/30 via-blue-100/20 to-transparent rounded-full blur-[100px]"></div>

         {/* Targeted Left Side Dimming (Left of 'Explore') */}
         <div className="absolute top-0 left-0 w-[40%] h-[500px] bg-gradient-to-r from-white via-white/60 to-transparent blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-32">
        
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 leading-tight">
              The all-in-one platform to grow your app
            </h2>
            <p className="text-gray-500 text-lg">
               Launch more powerful, data-driven, custom-built campaigns to achieve <br className="hidden md:block"/> global growth with AdsHamper
            </p>
          </div>
        </RevealOnScroll>

        {/* Service Grid */}
        <div className="relative">
           {/* Read More Button - Absolute Top Right */}
           <div className="absolute -top-16 right-0 hidden lg:block">
              <button className="px-6 py-2 rounded-lg border border-blue-400 text-blue-500 font-medium hover:bg-blue-50 transition-all flex items-center gap-2">
                 Read More <FaArrowRight />
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
             {services.map((service, index) => (
               <RevealOnScroll key={index} className={`delay-${index * 100} h-full`}>
                 <div className="w-full h-full p-6 flex flex-col items-center text-center relative group">
                   
                   {/* Blue Bracket Separator (Left side of 2nd and 3rd items) */}
                   {service.hasSeparator && (
                      <div className="hidden md:block absolute top-0 left-0 h-20 w-8 border-l-2 border-t-2 border-b-2 border-blue-200 rounded-l-xl -translate-x-1/2 opacity-50"></div>
                   )}

                   {/* Icon */}
                   <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                   </div>
                   
                   <h3 className="text-xl font-bold text-orange-500 mb-4 leading-tight min-h-[3.5rem]">{service.title}</h3>
                   
                   <p className="text-gray-600 leading-relaxed text-sm">
                      {service.desc}
                   </p>
                 </div>
               </RevealOnScroll>
             ))}
           </div>
        </div>

        {/* Big Call-to-Action */}
        <RevealOnScroll>
          <div className="flex justify-center">
            <a href="https://adshamper.com/user/register/" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-blue-600 text-white text-lg font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all">
              Start your growth journey now <FaArrowRight />
            </a>
          </div>
        </RevealOnScroll>

      </div>
      {/* Section 2: About Us (leave unchanged for now) */}
      <div className="relative w-full overflow-hidden">
        
        {/* Beige Section */}
        <div className="w-full py-20 bg-[#fff9f0] pb-80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <RevealOnScroll>
                <div className="flex items-center gap-4 mb-4">
                   <div className="h-[2px] w-8 bg-blue-500"></div>
                   <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">About Us</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                  Fastest Growing Ads Agency <br/>
                  <span className="text-blue-600">Powering Your Success</span>
                </h2>
                
                <p className="text-gray-500 leading-relaxed text-lg mb-8">
                  We are the fastest-growing digital agency, specializing in high-performance ad campaigns that drive real results. Our data-driven approach ensures maximum ROI and sustainable growth for your business.
                </p>

                {/* Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                   {[
                     'High ROI Ad Campaigns', 'Real-time Analytics',
                     '24/7 Campaign Optimization', 'Global Audience Reach'
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <FaCheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0" />
                         <span className="text-gray-700 font-medium text-sm">{item}</span>
                      </div>
                   ))}
                </div>
              </RevealOnScroll>

              {/* Right Image & Badge */}
              <div className="relative">
                 <RevealOnScroll className="delay-200">
                    <div className="relative rounded-tr-[100px] rounded-bl-[100px] overflow-hidden border-4 border-white shadow-xl">
                       <img 
                          src="/about-us-meeting.png" 
                          alt="Technology Leadership" 
                          className="w-full h-[500px] object-cover"
                       />
                    </div>
                    
                    {/* Yellow Badge */}
                    <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-[#dfff00] p-8 rounded-r-xl shadow-lg z-10">
                       <h3 className="text-4xl font-bold text-dark mb-1">1+</h3>
                       <p className="text-dark font-bold text-lg leading-tight">Year's <br/> <span className="text-sm font-normal">of experience</span></p>
                    </div>

                    {/* Decorative Dots */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-[url('https://www.transparenttextures.com/patterns/dot-pattern.png')] opacity-50"></div>
                 </RevealOnScroll>
              </div>

            </div>
          </div>
        </div>

        {/* Overlapping DSP Card - Outside beige div */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-64 mb-20">
          <RevealOnScroll>
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
              
              {/* Left: Image */}
              <div className="w-full md:w-1/2 h-[500px] md:h-auto relative">
                <img 
                  src="/dsp-dashboard.png" 
                  alt="DSP Dashboard" 
                  className="w-full h-full object-cover"
                />
                {/* Fallback if image missing, use a placeholder color or pattern */}
                <div className="absolute inset-0 bg-gray-200 -z-10"></div> 
              </div>

              {/* Right: Content (Blue Background) */}
              <div className="w-full md:w-1/2 bg-[#3b82f6] p-10 md:p-16 text-white flex flex-col justify-center">
                <span className="text-blue-100 font-medium mb-2 uppercase tracking-wide text-sm">Your go-to programmatic media buyer</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  All you need in an ideal DSP
                </h3>

                <div className="space-y-3 mb-10">
                  {[
                    'AI based high-value user targeting and acquisition',
                    'Global Scale',
                    'CPI & CPA optimisation',
                    'Creative Optimization',
                    'Fraud Prevention',
                    '100% Transparency with dashboard access',
                    'Real-time tracking and performance reports',
                    'Agile Machine Learning and DSP developments',
                    'Integration with 40+ major ad exchanges',
                    'Specialised campaigns for all your goals'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#dfff00] w-5 h-5 flex-shrink-0 mt-1" />
                      <span className="text-blue-50 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="w-fit px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-[#dfff00] hover:text-dark transition-all duration-300 flex items-center gap-2">
                  Know More <FaArrowRight />
                </button>
              </div>

            </div>
          </RevealOnScroll>
        </div>

      </div>

    </section>
  );
};

export default InfoSection;
