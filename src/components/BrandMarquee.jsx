import React from 'react';

const BrandMarquee = () => {

  const clients = [
    {
      name: 'Amazon',
      component: (
        <svg className="h-10 w-24" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="5" y="22" className="text-xl font-bold fill-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
            amazon
          </text>
          <path d="M 15 28 Q 35 32, 55 28" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 53 26 L 55 28 L 53 30" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: 'BYBIT',
      component: (
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">BYBIT</div>
          <div className="text-xs text-yellow-500 font-semibold">EXCHANGE</div>
        </div>
      )
    },
    {
      name: 'Dream11',
      component: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <span className="text-xl font-bold text-gray-900">DREAM11</span>
        </div>
      )
    },
    {
      name: 'Groww',
      component: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">G</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Groww</span>
        </div>
      )
    },
    {
      name: 'KreditPintar',
      component: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">K</span>
          </div>
          <span className="text-lg font-bold text-gray-900">KreditPintar</span>
        </div>
      )
    },
    {
      name: 'Lazada',
      component: (
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full -ml-2"></div>
          </div>
          <span className="text-xl font-bold text-gray-900">Lazada</span>
        </div>
      )
    }
  ];

  // Duplicate clients for infinite scroll
  const marqueeClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="relative py-2 overflow-hidden">
      <div className="max-w-[85rem] mx-auto">
        <div className="w-full relative rounded-[calc(3rem-2px)] overflow-hidden bg-white/30 backdrop-blur-xl shadow-lg border border-white/40">
            
            {/* Marquee Container */}
            <div className="flex overflow-hidden py-4 relative group">
              {/* Gradient Overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white/80 to-transparent"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white/80 to-transparent"></div>

              {/* Scrolling Content */}
              <div className="flex animate-scroll whitespace-nowrap">
                {marqueeClients.map((client, idx) => (
                  <div 
                    key={idx}
                    className="mx-8 flex items-center justify-center min-w-[150px] opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="transform scale-90 hover:scale-100 transition-transform duration-300">
                      {client.component}
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

export default BrandMarquee;
