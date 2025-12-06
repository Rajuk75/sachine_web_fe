import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = "", animation = "fade-up", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'translate-y-10 opacity-0';
      case 'fade-in':
        return 'opacity-0';
      case 'slide-left':
        return '-translate-x-10 opacity-0';
      case 'slide-right':
        return 'translate-x-10 opacity-0';
      case 'zoom-in':
        return 'scale-95 opacity-0';
      default:
        return 'translate-y-10 opacity-0';
    }
  };

  const getVisibleClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'translate-y-0 opacity-100';
      case 'fade-in':
        return 'opacity-100';
      case 'slide-left':
        return 'translate-x-0 opacity-100';
      case 'slide-right':
        return 'translate-x-0 opacity-100';
      case 'zoom-in':
        return 'scale-100 opacity-100';
      default:
        return 'translate-y-0 opacity-100';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible ? getVisibleClass() : getAnimationClass()
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
