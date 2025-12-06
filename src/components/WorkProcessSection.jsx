import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaPencilRuler, FaCogs, FaRocket, FaTrophy, FaRegSmileBeam, FaUserFriends } from 'react-icons/fa';

const WorkProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { number: 4000, label: 'Project Completed', suffix: 'k', value: 4, icon: <FaRocket /> },
    { number: 12, label: 'Years Experiences', suffix: '', value: 1, icon: <FaTrophy /> },
    { number: 17000, label: 'Happy Customers', suffix: 'k', value: 17, icon: <FaRegSmileBeam /> },
    { number: 30, label: 'Team Members', suffix: '', value: 30, icon: <FaUserFriends /> },
  ];

  return (
    <section ref={sectionRef} className="pt-24 pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-primary font-bold tracking-wider uppercase text-sm mb-2">
             Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
             The Work Process Of <br /> Our Agency
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { 
              id: 1, 
              title: 'Analysis and Planning', 
              desc: 'We analyze your business goals and plan a strategic roadmap for success.',
              icon: <FaSearch className="w-8 h-8" />
            },
            { 
              id: 2, 
              title: 'Creative Brief Planning', 
              desc: 'Our team crafts a detailed creative brief to align with your brand vision.',
              icon: <FaPencilRuler className="w-8 h-8" />
            },
            { 
              id: 3, 
              title: 'Design and Production', 
              desc: 'We bring ideas to life with stunning designs and high-quality production.',
              icon: <FaCogs className="w-8 h-8" />
            }
          ].map((step, index) => (
            <div 
              key={step.id} 
              className={`group bg-white border border-gray-200 p-10 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 text-blue-600 group-hover:text-white transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark group-hover:text-white mb-4 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-500 group-hover:text-blue-100 transition-colors duration-300 leading-relaxed">
                {step.desc}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-dark font-bold group-hover:text-white transition-colors duration-300">
                <span className="text-sm uppercase tracking-wider">Step 0{step.id}</span>
                <div className="h-[1px] w-12 bg-gray-300 group-hover:bg-blue-400 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Stats Row - Dotted White Background */}
      <div className="w-full py-24 mt-20 relative" style={{
          backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)',
          backgroundSize: '30px 30px'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <CounterItem key={index} stat={stat} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CounterItem = ({ stat, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = stat.value; // Use the simplified value for display (e.g., 4 for 4k)
    const duration = 2000;
    const incrementTime = duration / end;
    
    // If value is small, just set it directly to avoid weird interval
    if (end < 5) {
        setCount(end);
        return;
    }

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div className="text-center group">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:scale-110">
            {stat.icon}
        </div>
      </div>
      <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 tracking-tight">
        {count}{stat.suffix}
      </div>
      <div className="text-gray-500 font-medium text-sm md:text-base uppercase tracking-widest">
        {stat.label.split(' ').map((word, i) => (
          <div key={i}>{word}</div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcessSection;
