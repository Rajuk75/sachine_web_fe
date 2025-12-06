import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { FaBullhorn, FaChartLine, FaCogs, FaRocket } from 'react-icons/fa';

const ProgrammaticAdvertising = () => {
  return (
    <PageTemplate 
      title="Programmatic Advertising" 
      gradientFrom="blue" 
      gradientTo="purple"
    >
      <div className="space-y-12">
        
        {/* Introduction */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is AdsHamper DSP?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            AdsHamper's Demand Side Platform (DSP) is a powerful programmatic media buying tool that empowers advertisers to purchase high-quality ad inventory across multiple exchanges in real-time. Our DSP uses advanced algorithms and machine learning to target the right audience, at the right time, for the right price.
          </p>
        </section>

        {/* Key Features Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <FaBullhorn className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Real-Time Bidding (RTB)</h3>
            <p className="text-gray-600">
              Bid on individual impressions in real-time, ensuring you only pay for the users that matter most to your campaign goals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <FaChartLine className="text-purple-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
            <p className="text-gray-600">
              Gain deep insights into your campaign performance with granular reporting on impressions, clicks, conversions, and ROI.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
              <FaCogs className="text-pink-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Precise Targeting</h3>
            <p className="text-gray-600">
              Target audiences based on demographics, interests, behavior, location, and device type to maximize engagement.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <FaRocket className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Automated Optimization</h3>
            <p className="text-gray-600">
              Our AI-driven engine automatically adjusts bids and targeting parameters to optimize for your specific KPIs.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Adshamper?</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                At Adshamper, we believe in transparency and performance. Our DSP is built to provide advertisers with full control over their media buying, ensuring that every dollar spent contributes to tangible business growth.
              </p>
              <p>
                Whether you are looking to drive brand awareness, increase website traffic, or boost app installs, AdsHamper provides the technology and expertise to help you succeed in the competitive digital landscape.
              </p>
            </div>
          </div>
        </section>

      </div>
    </PageTemplate>
  );
};

export default ProgrammaticAdvertising;
