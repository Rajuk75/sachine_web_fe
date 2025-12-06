
const ClientsSection = () => {

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

  return (
    <section className="relative py-4 overflow-hidden">
      <div className="max-w-[85rem] mx-auto">
        <div className="w-full relative rounded-[calc(3rem-2px)] bg-white/30 backdrop-blur-xl shadow-lg border border-white/40">
            
            {/* Section Header */}
            <div className="text-center mb-16 relative z-10 pt-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border mb-6 bg-white/60 border-white/60 text-blue-600 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Trusted Partners
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Trusted by Leading Brands
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-gray-600">
                Join thousands of forward-thinking companies that trust our platform to drive their growth.
              </p>
            </div>
            
            {/* Clients Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center relative z-10 px-8 md:px-12">
              {clients.map((client, idx) => (
                <div 
                  key={idx}
                  className="group relative h-32 flex items-center justify-center rounded-2xl transition-all duration-500 hover:-translate-y-1 bg-white/50 border border-white/60 hover:bg-white/80 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="transform transition-transform duration-500 group-hover:scale-110">
                    {client.component}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="mt-20 relative z-10 px-8 md:px-12 pb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-3xl p-8 bg-white/50">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                    500+
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    Global Clients
                  </div>
                </div>
                <div className="text-center md:border-l md:border-r border-gray-200/20">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                    98%
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    Satisfaction Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    Support Available
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Gradients */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"></div>
          </div>
      </div>
    </section>
  );
};

export default ClientsSection;
