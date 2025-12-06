import React from 'react';
import SectionHeading from './ui/SectionHeading';

const StatsSection = () => {
  const stats = [
    {
      icon: (
        <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "99.38% Accuracy",
      desc: "Precision targeting with advanced algorithms"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "<130ms Latency",
      desc: "Real-time bidding and ad placement"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "1¢ per minute",
      desc: "Cost-effective scaling for every campaign"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Reach",
      desc: "Deployment in 10+ geographies"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#150a26] rounded-[3rem] p-12 md:p-20 border border-white/5 relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />

          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Speed <span className="text-purple-500">.</span> Scale <span className="text-purple-500">.</span> Savings
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-16">
              Every campaign forces businesses to compromise on reach, cost, or quality. 
              <br className="hidden md:block" />
              AdsHamper breaks that cycle.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 text-left max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{stat.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
