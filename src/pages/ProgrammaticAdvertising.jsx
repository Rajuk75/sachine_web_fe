import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { PROGRAMMATIC_FEATURES } from '../data/programmaticData';

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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Adshamper DSP?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Adshamper's Demand Side Platform (DSP) is a powerful programmatic media buying tool that empowers advertisers to purchase high-quality ad inventory across multiple exchanges in real-time. Our DSP uses advanced algorithms and machine learning to target the right audience, at the right time, for the right price.
          </p>
        </section>

        {/* Key Features Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          {PROGRAMMATIC_FEATURES.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.desc}
              </p>
            </div>
          ))}
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
                Whether you are looking to drive brand awareness, increase website traffic, or boost app installs, Adshamper provides the technology and expertise to help you succeed in the competitive digital landscape.
              </p>
            </div>
          </div>
        </section>

      </div>
    </PageTemplate>
  );
};

export default ProgrammaticAdvertising;
