import { useTheme } from "../context/ThemeContext";

const ClientsSection = () => {
  const { theme } = useTheme();

  const clients = [
    {
      name: 'Amazon',
      component: (
        <svg className="h-10 w-24" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="5" y="22" className={`text-xl font-bold ${theme === 'dark' ? 'fill-white' : 'fill-gray-900'}`} style={{ fontFamily: 'Arial, sans-serif' }}>
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
          <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>BYBIT</div>
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
          <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>DREAM11</span>
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
          <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Groww</span>
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
          <span className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>KreditPintar</span>
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
          <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Lazada</span>
        </div>
      )
    }
  ];

  return (
    <section className="relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className={`inline-block px-4 py-2 rounded-full mb-4 ${
          theme === 'dark' ? 'bg-blue-500/10 border border-blue-400/30' : 'bg-blue-100/80 border border-blue-300/50'
        }`}>
          <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>
            ⭐ Our Partners
          </span>
        </div>
        <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Trusted by Leading Brands
        </h2>
        <p className={`mt-3 text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Join thousands of companies that trust our platform
        </p>
      </div>
      
      {/* Clients Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
        {clients.map((client, idx) => (
          <div 
            key={idx}
            className={`group relative backdrop-blur-md rounded-2xl px-6 py-5 transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-800/60 to-gray-800/40 border border-gray-700/50 hover:border-blue-500/50 hover:shadow-blue-500/20' 
                : 'bg-white/90 border border-gray-200 hover:border-blue-400 hover:shadow-blue-300/40'
            }`}
          >
            {/* Glow effect on hover */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              theme === 'dark' ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-br from-blue-50 to-purple-50'
            }`}></div>
            
            <div className="relative flex items-center justify-center h-full">
              {client.component}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-8 flex-wrap justify-center">
          <div className="text-center">
            <div className={`text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
              500+
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Global Clients
            </div>
          </div>
          <div className={`w-px h-12 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
          <div className="text-center">
            <div className={`text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}>
              98%
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Satisfaction Rate
            </div>
          </div>
          <div className={`w-px h-12 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
          <div className="text-center">
            <div className={`text-3xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent`}>
              24/7
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Support Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
