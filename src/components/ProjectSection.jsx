import React from 'react';

const ProjectSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div className="max-w-2xl">
              <div className="inline-block px-4 py-1 bg-blue-50 text-primary rounded-full text-sm font-bold tracking-wide uppercase mb-4">
                Case Studies
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark">
                 Our Latest <span className="text-primary">Projects</span>
              </h2>
           </div>
           <div className="mt-6 md:mt-0">
              <button className="px-8 py-3 bg-dark text-white font-bold rounded-full hover:bg-primary transition-colors">
                 View All Projects
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-2xl">
                 {/* Image Placeholder */}
                 <div className="h-80 bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <div className="absolute inset-0 bg-gray-300 group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 
                 {/* Content Overlay */}
                 <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-20 opacity-0 group-hover:opacity-100">
                    <div className="text-[#FF4F79] font-bold text-sm mb-2 uppercase tracking-wider">Marketing</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Growth Strategy for Tech Corp</h3>
                    <button className="w-12 h-12 rounded-full bg-white text-[#0a102e] flex items-center justify-center hover:bg-[#0057FF] hover:text-white transition-colors">
                       ↗
                    </button>
                 </div>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;
