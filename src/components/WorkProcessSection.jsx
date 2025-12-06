import React, { useState, useEffect, useRef } from 'react';

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
    { number: 4000, label: 'Project Completed', suffix: 'k', value: 4 },
    { number: 20, label: 'Years Experiences', suffix: '', value: 20 },
    { number: 17000, label: 'Happy Customers', suffix: 'k', value: 17 },
    { number: 30, label: 'Team Members', suffix: '', value: 30 },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Text Content */}
          <div className={`space-y-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-orange-500 font-bold tracking-wider uppercase text-sm">
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a102e] leading-tight">
              The Work Process Of <br /> Our Agency
            </h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia eu id in. Quisque porttitor tortor blandit nunc sed ac. Mattis in nunc libero viverra. Consectetur leo nibh ac at amet.
            </p>
          </div>

          {/* Right: Process Steps */}
          <div className="space-y-6">
            {[
              { id: 1, title: 'Analysis and Planning', desc: 'Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia eu quisque.' },
              { id: 2, title: 'Creative Brief Planning', desc: 'Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia eu quisque.' },
              { id: 3, title: 'Design and Production', desc: 'Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia eu quisque.' }
            ].map((step, index) => (
              <div 
                key={step.id} 
                className={`bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex gap-6">
                  <div className="text-4xl font-bold text-[#0a102e] opacity-20">
                    {step.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a102e] mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-16">
          {stats.map((stat, index) => (
            <CounterItem key={index} stat={stat} isVisible={isVisible} />
          ))}
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
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-[#0a102e] mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-gray-500 font-medium text-sm md:text-base">
        {stat.label.split(' ').map((word, i) => (
          <div key={i}>{word}</div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcessSection;
