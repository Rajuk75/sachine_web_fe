import React, { useState } from 'react';
import { useLanguage } from "../context/LanguageContext";
import { RiSearchLine, RiFilter3Line, RiArrowDownSLine } from 'react-icons/ri';

const Studio = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['Brand', 'Country', 'Formats', 'Functionalities', 'Vertical'];
  
  const galleryItems = [
    { id: 1, title: 'Dream11 Campaign', category: 'Sports', image: 'https://loremflickr.com/400/700/cricket,sports/all' },
    { id: 2, title: 'Zomato Cravings', category: 'Food', image: 'https://loremflickr.com/400/700/burger,food/all' },
    { id: 3, title: 'PayZapp Secure', category: 'Fintech', image: 'https://loremflickr.com/400/700/money,payment/all' },
    { id: 4, title: 'Deadpool Movie', category: 'Entertainment', image: 'https://loremflickr.com/400/700/movie,poster/all' },
    { id: 5, title: 'KFC Crunchy', category: 'Food', image: 'https://loremflickr.com/400/700/chicken,fastfood/all' },
    { id: 6, title: 'Samsung Flip', category: 'Tech', image: 'https://loremflickr.com/400/700/smartphone,tech/all' },
    { id: 7, title: 'Snake Eyes', category: 'Entertainment', image: 'https://loremflickr.com/400/700/action,cinema/all' },
    { id: 8, title: 'Tasmania Travel', category: 'Travel', image: 'https://loremflickr.com/400/700/travel,vacation/all' },
    { id: 9, title: 'Nike Run', category: 'Sports', image: 'https://loremflickr.com/400/700/fitness,running/all' },
    { id: 10, title: 'Spotify Music', category: 'Entertainment', image: 'https://loremflickr.com/400/700/concert,music/all' },
    { id: 11, title: 'Uber Rides', category: 'Travel', image: 'https://loremflickr.com/400/700/car,taxi/all' },
    { id: 12, title: 'Coca Cola', category: 'Food', image: 'https://loremflickr.com/400/700/soda,drink/all' },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      
      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative max-w-3xl mx-auto">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for Keywords like 'Reebok' or 'Food' or 'Carousel'" 
              className="w-full pl-12 pr-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
            />
            <RiSearchLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {filters.map((filter, idx) => (
            <button 
              key={idx}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              {filter}
              <RiArrowDownSLine />
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h3 className="text-white text-lg font-bold leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Play Icon Placeholder (Optional for video feel) */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Uploading Soon Note */}
      <div className="mt-16 py-12 relative overflow-hidden" style={{
          backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)',
          backgroundSize: '30px 30px',
          backgroundColor: '#ffffff'
      }}>
        <div className="text-center relative z-10">
          <p className="text-gray-500 font-medium italic">
            More creative designs uploading soon...
          </p>
        </div>
      </div>

    </div>
  );
};

export default Studio;
