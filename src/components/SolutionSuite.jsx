import React from 'react';
import SectionHeading from './ui/SectionHeading';
import MurfCard from './ui/MurfCard';
import GlowButton from './ui/GlowButton';

const SolutionSuite = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">AI Advertising Solution Suite</span>
          </h2>
          <p className="text-gray-400">Power your entire marketing workflow through a single, comprehensive platform.</p>
        </div>

        {/* Tabs (Visual only for now) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['CAMPAIGN STUDIO', 'AD API', 'AGENTS', 'ANALYTICS'].map((tab, i) => (
            <button 
              key={tab}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-all
                ${i === 0 
                  ? 'bg-white text-black shadow-lg shadow-white/20' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Feature Card */}
        <MurfCard className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="text-xs font-bold tracking-widest text-pink-400 uppercase">ADSHAMPER STUDIO</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                10x Faster Campaign <br /> Production
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Reduce ad generation time from months to days with our AI Studio. 
                Select from 200+ templates and styles, delivering natural-sounding copy and visuals 
                with full control over tone, style, and placement.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Effortlessly scale content creation across teams - Ideal for marketing, training, and social media.
              </p>
              
              <div className="flex gap-4 pt-4">
                <GlowButton>Open Studio</GlowButton>
                <button className="px-6 py-3 rounded-lg font-bold text-white border border-white/10 hover:bg-white/5 transition-colors">
                  Contact Sales →
                </button>
              </div>
            </div>

            {/* Right Side Visual */}
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-3xl rounded-full" />
               <div className="relative bg-[#2a1b3d] border border-white/10 rounded-xl p-6 shadow-2xl">
                  {/* Mock UI for Studio */}
                  <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                     <div className="text-white font-bold">Find Your Perfect Ad</div>
                     <div className="text-xs text-gray-400">120+ Templates</div>
                  </div>
                  <div className="space-y-4">
                     {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                           <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${i===1 ? 'from-pink-500 to-orange-500' : 'from-gray-700 to-gray-600'}`}></div>
                           <div className="flex-1">
                              <div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
                              <div className="h-2 w-16 bg-white/10 rounded"></div>
                           </div>
                        </div>
                     ))}
                  </div>
                  
                  {/* Floating Element */}
                  <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 rounded-xl shadow-xl max-w-[200px]">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-orange-500"></div>
                        <div className="text-xs font-bold">Viral Campaign</div>
                     </div>
                     <div className="h-8 w-full bg-orange-100 rounded flex items-center justify-center">
                        <div className="w-full h-4 mx-2 bg-orange-500/20 rounded-full overflow-hidden">
                            <div className="h-full w-[70%] bg-orange-500 animate-pulse"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </MurfCard>

      </div>
    </section>
  );
};

export default SolutionSuite;
