import React from 'react';
import { useLanguage } from "../context/LanguageContext";
import { FaLaptop, FaCode, FaServer, FaMobile, FaCloud, FaRocket, FaDatabase } from 'react-icons/fa';

const HeroSection = () => {
  const { t } = useLanguage();

  const IconWrapper = ({ children, color = "bg-blue-100 text-blue-600" }) => (
    <div className={`w-full h-full rounded-full flex items-center justify-center ${color} shadow-sm`}>
      {children}
    </div>
  );

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-28 pb-12 bg-gradient-to-br from-sky-50 via-blue-50 to-blue-100">
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft Gradient Orb Top Left */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        
        {/* Abstract Curved Lines (SVG) */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M-100 600 C 200 400, 400 800, 800 200 S 1200 0, 1500 200" stroke="url(#grad1)" strokeWidth="2" fill="none" />
           <path d="M-100 650 C 200 450, 400 850, 800 250 S 1200 50, 1500 250" stroke="url(#grad1)" strokeWidth="2" fill="none" />
           <path d="M-100 700 C 200 500, 400 900, 800 300 S 1200 100, 1500 300" stroke="url(#grad1)" strokeWidth="2" fill="none" />
           <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                 <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
              </linearGradient>
           </defs>
        </svg>

        {/* Floating Spheres/Circles */}
        <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-blue-300 to-blue-600 opacity-20 blur-sm animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full bg-blue-400 opacity-30 animate-float-delayed"></div>
        
        {/* Connected Dots Pattern */}
        <div className="absolute top-1/2 left-20 w-64 h-64 opacity-10" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-20 relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content - Clean Space */}
          <div className="space-y-8 relative z-20 -mt-20 text-center lg:text-left">
             <div className="flex w-fit items-center gap-2 px-3 py-1 bg-white/50 backdrop-blur-sm border border-blue-100 rounded-full mx-auto">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary font-bold tracking-wider uppercase text-xs">Future Ads Agency</span>
             </div>
             
             <h1 className="text-5xl md:text-7xl font-bold text-dark leading-tight">
                Scale your app <br />
                growth <span className="text-[#facc15]">with high-value users</span>
             </h1>
             
             <p className="text-gray-600 text-xl md:text-2xl max-w-2xl leading-relaxed mt-6">
                Level up your mobile app user acquisition, retention and brand performance with <span className="text-rose-600 font-semibold">predictive algorithms and machine learning</span>
             </p>
             
             <div className="flex flex-wrap items-center gap-6">
                <a href="https://adshamper.com/user/register/" className="relative px-8 py-4 bg-blue-700 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 overflow-hidden group hover:scale-105 transition-all duration-300">
                   <span className="relative z-10">Get Started</span>
                   <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-500 ease-in-out"></div>
                </a>
                <a href="https://adshamper.com/user/login/" className="px-8 py-4 bg-white text-dark font-bold rounded-full shadow-md hover:bg-gray-50 transition-all duration-300 flex items-center gap-2">
                   Login
                </a>
             </div>
          </div>

          {/* Right Content - Orbiting Animation */}
          <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">
            
            <div className="absolute z-20 text-center max-w-[200px]">
              <div className="text-4xl font-bold text-dark mb-2">100+</div>
              <div className="text-gray-600 text-sm font-medium leading-tight">
                Successful Projects Delivered Globally
              </div>
            </div>

            {/* Inner Orbit */}
            <div className="absolute w-[280px] h-[280px] border border-blue-200/60 rounded-full animate-orbit-slow">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full p-1 bg-white border border-blue-100 shadow-md animate-orbit-reverse-slow">
                 <IconWrapper color="bg-blue-100 text-blue-600"><FaCode className="w-6 h-6" /></IconWrapper>
               </div>
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-full p-1 bg-white border border-blue-100 shadow-md animate-orbit-reverse-slow">
                 <IconWrapper color="bg-sky-100 text-sky-600"><FaMobile className="w-5 h-5" /></IconWrapper>
               </div>
            </div>

            {/* Middle Orbit */}
            <div className="absolute w-[450px] h-[450px] border border-blue-200/50 rounded-full animate-orbit">
               <div className="absolute top-1/4 left-0 -translate-x-1/2 w-14 h-14 rounded-full p-1 bg-white border border-blue-100 shadow-lg animate-orbit-reverse">
                 <IconWrapper color="bg-indigo-100 text-indigo-600"><FaCloud className="w-7 h-7" /></IconWrapper>
                 <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center border border-white text-white">
                    <span className="text-[10px] font-bold">1</span>
                 </div>
               </div>
               <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-12 h-12 rounded-full p-1 bg-white border border-blue-100 shadow-lg animate-orbit-reverse">
                 <IconWrapper color="bg-cyan-100 text-cyan-600"><FaDatabase className="w-6 h-6" /></IconWrapper>
               </div>
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-full p-1 bg-white border border-blue-100 shadow-lg animate-orbit-reverse">
                 <IconWrapper color="bg-blue-50 text-primary"><FaServer className="w-8 h-8" /></IconWrapper>
               </div>
            </div>

            {/* Outer Orbit */}
            <div className="absolute w-[620px] h-[620px] border border-blue-100/40 rounded-full animate-orbit-slower">
               <div className="absolute top-1/2 right-0 translate-x-1/2 w-14 h-14 rounded-full p-1 bg-white border border-blue-100 shadow-lg animate-orbit-reverse-slower">
                 <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white">
                    <FaRocket className="w-7 h-7" />
                 </div>
               </div>
               <div className="absolute top-0 left-1/4 w-10 h-10 rounded-full p-1 bg-white border border-blue-100 shadow-md animate-orbit-reverse-slower opacity-80">
                 <IconWrapper color="bg-gray-100 text-gray-600"><FaLaptop className="w-5 h-5" /></IconWrapper>
               </div>
            </div>

          </div>

        </div>
      </div>

      {/* Brand Marquee Integration - Seamless */}
      <div className="absolute bottom-0 left-0 w-full py-6 z-20 overflow-hidden border-t border-white/20 bg-white/10 backdrop-blur-sm">
        <div className="flex animate-scroll whitespace-nowrap">
          {[
            // Clients Data
            {
              name: 'Amazon',
              component: (
                <svg className="h-8 w-20" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="5" y="22" className="text-xl font-bold fill-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>amazon</text>
                  <path d="M 15 28 Q 35 32, 55 28" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M 53 26 L 55 28 L 53 30" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              name: 'BYBIT',
              component: (
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-600">BYBIT</div>
                  <div className="text-[10px] text-yellow-500 font-semibold">EXCHANGE</div>
                </div>
              )
            },
            {
              name: 'Dream11',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">D</span>
                  </div>
                  <span className="text-lg font-bold text-gray-600">DREAM11</span>
                </div>
              )
            },
            {
              name: 'Groww',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">G</span>
                  </div>
                  <span className="text-lg font-bold text-gray-600">Groww</span>
                </div>
              )
            },
            {
              name: 'KreditPintar',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">K</span>
                  </div>
                  <span className="text-base font-bold text-gray-600">KreditPintar</span>
                </div>
              )
            },
            {
              name: 'Lazada',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full -ml-2"></div>
                  </div>
                  <span className="text-lg font-bold text-gray-600">Lazada</span>
                </div>
              )
            }
          ].concat([
            // Duplicate 1
            {
              name: 'Amazon',
              component: (
                <svg className="h-8 w-20" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="5" y="22" className="text-xl font-bold fill-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>amazon</text>
                  <path d="M 15 28 Q 35 32, 55 28" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M 53 26 L 55 28 L 53 30" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              name: 'BYBIT',
              component: (
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-600">BYBIT</div>
                  <div className="text-[10px] text-yellow-500 font-semibold">EXCHANGE</div>
                </div>
              )
            },
            {
              name: 'Dream11',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">D</span>
                  </div>
                  <span className="text-lg font-bold text-gray-600">DREAM11</span>
                </div>
              )
            },
            {
              name: 'Groww',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">G</span>
                  </div>
                  <span className="text-lg font-bold text-gray-600">Groww</span>
                </div>
              )
            },
            {
              name: 'KreditPintar',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">K</span>
                  </div>
                  <span className="text-base font-bold text-gray-600">KreditPintar</span>
                </div>
              )
            },
            {
              name: 'Lazada',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full -ml-2"></div>
                  </div>
                  <span className="text-lg font-bold text-gray-600">Lazada</span>
                </div>
              )
            },
            // Duplicate 2
            {
              name: 'Amazon',
              component: (
                <svg className="h-8 w-20" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="5" y="22" className="text-xl font-bold fill-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>amazon</text>
                  <path d="M 15 28 Q 35 32, 55 28" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M 53 26 L 55 28 L 53 30" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              name: 'BYBIT',
              component: (
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-600">BYBIT</div>
                  <div className="text-[10px] text-yellow-500 font-semibold">EXCHANGE</div>
                </div>
              )
            },
            {
              name: 'Dream11',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">D</span>
                  </div>
                  <span className="text-lg font-bold text-gray-600">DREAM11</span>
                </div>
              )
            },
            {
              name: 'Groww',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">G</span>
                  </div>
                  <span className="text-lg font-bold text-gray-600">Groww</span>
                </div>
              )
            },
            {
              name: 'KreditPintar',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">K</span>
                  </div>
                  <span className="text-base font-bold text-gray-600">KreditPintar</span>
                </div>
              )
            },
            {
              name: 'Lazada',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full -ml-2"></div>
                  </div>
                  <span className="text-lg font-bold text-gray-600">Lazada</span>
                </div>
              )
            },
            // Duplicate 3
            {
              name: 'Amazon',
              component: (
                <svg className="h-8 w-20" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="5" y="22" className="text-xl font-bold fill-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>amazon</text>
                  <path d="M 15 28 Q 35 32, 55 28" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M 53 26 L 55 28 L 53 30" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              name: 'BYBIT',
              component: (
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-600">BYBIT</div>
                  <div className="text-[10px] text-yellow-500 font-semibold">EXCHANGE</div>
                </div>
              )
            },
            {
              name: 'Dream11',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">D</span>
                  </div>
                  <span className="text-lg font-bold text-gray-600">DREAM11</span>
                </div>
              )
            },
            {
              name: 'Groww',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">G</span>
                  </div>
                  <span className="text-lg font-bold text-gray-600">Groww</span>
                </div>
              )
            },
            {
              name: 'KreditPintar',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">K</span>
                  </div>
                  <span className="text-base font-bold text-gray-600">KreditPintar</span>
                </div>
              )
            },
            {
              name: 'Lazada',
              component: (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full -ml-2"></div>
                  </div>
                  <span className="text-lg font-bold text-gray-600">Lazada</span>
                </div>
              )
            }
          ]).map((client, idx) => (
            <div 
              key={idx}
              className="mx-16 flex items-center justify-center min-w-[140px] opacity-90 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="transform scale-125 hover:scale-135 transition-transform duration-300">
                {client.component}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
