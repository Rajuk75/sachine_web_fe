import React from 'react';
import SectionHeading from './ui/SectionHeading';
import BrandMarquee from './BrandMarquee';

const EnterpriseSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0f0518] to-[#1a0b2e]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                 Why <span className="text-pink-500">Enterprises</span> Choose AdsHamper
              </h2>
              <p className="text-gray-400">
                 Leading organizations are scaling professional ad production and driving efficiency with our AI solution.
              </p>
           </div>
           <div className="flex gap-2 mt-6 md:mt-0">
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10">←</button>
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10">→</button>
           </div>
        </div>

        {/* Case Study Cards Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
           {[1, 2, 3].map((i) => (
              <div key={i} className="min-w-[300px] md:min-w-[400px] bg-[#251b36] rounded-2xl overflow-hidden border border-white/5 hover:border-pink-500/30 transition-colors group">
                 <div className="h-48 bg-gray-800 relative group-hover:scale-105 transition-transform duration-500">
                    {/* Placeholder Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md p-3 rounded-full">
                       <span className="text-white">▶</span>
                    </div>
                 </div>
                 <div className="p-6">
                    <div className="h-6 w-24 bg-white/20 rounded mb-4"></div>
                    <h3 className="text-white font-bold text-lg mb-4">
                       Company {i} Drives Learner Engagement With Training in 14+ Languages
                    </h3>
                    <button className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2 group-hover:text-pink-400 transition-colors">
                       Read Case Study →
                    </button>
                 </div>
              </div>
           ))}
        </div>

        <div className="mt-20">
            <BrandMarquee />
        </div>

      </div>
    </section>
  );
};

export default EnterpriseSection;
