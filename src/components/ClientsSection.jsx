import React from "react";

const ClientsSection = () => {

  return (
    <section>
      <h2 className="text-center text-2xl font-semibold mb-12 text-gray-300">
        Our Clients
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {/* Amazon */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-6 py-4 transition-all hover:scale-105 hover:bg-gray-800 hover:border-gray-600 hover:shadow-lg">
            <div className="flex items-center justify-center">
              <svg className="h-10 w-24" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Amazon text */}
                <text x="5" y="22" className="text-xl font-bold fill-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                  amazon
                </text>
                {/* Smile arrow */}
                <path 
                  d="M 15 28 Q 35 32, 55 28" 
                  stroke="#FF9900" 
                  strokeWidth="2.5" 
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Arrow tip */}
                <path 
                  d="M 53 26 L 55 28 L 53 30" 
                  stroke="#FF9900" 
                  strokeWidth="2.5" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* BYBIT */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-6 py-4 transition-all hover:scale-105 hover:bg-gray-800 hover:border-gray-600 hover:shadow-lg">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  BYBIT
                </div>
                <div className="text-xs text-yellow-500 font-semibold">EXCHANGE</div>
              </div>
            </div>
          </div>

          {/* Dream11 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-6 py-4 transition-all hover:scale-105 hover:bg-gray-800 hover:border-gray-600 hover:shadow-lg">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <span className="text-xl font-bold text-white">
                  DREAM11
                </span>
              </div>
            </div>
          </div>

          {/* Groww */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-6 py-4 transition-all hover:scale-105 hover:bg-gray-800 hover:border-gray-600 hover:shadow-lg">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">G</span>
                </div>
                <span className="text-xl font-bold text-white">
                  Groww
                </span>
              </div>
            </div>
          </div>

          {/* KreditPintar */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-6 py-4 transition-all hover:scale-105 hover:bg-gray-800 hover:border-gray-600 hover:shadow-lg">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="text-lg font-bold text-white">
                  KreditPintar
                </span>
              </div>
            </div>
          </div>

          {/* Lazada */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-6 py-4 transition-all hover:scale-105 hover:bg-gray-800 hover:border-gray-600 hover:shadow-lg">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full -ml-2"></div>
                </div>
                <span className="text-xl font-bold text-white">
                  Lazada
                </span>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ClientsSection;
