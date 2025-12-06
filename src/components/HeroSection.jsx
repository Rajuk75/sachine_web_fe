import React, { useState, useEffect } from 'react';
import { useLanguage } from "../context/LanguageContext";
import PaperTornFrame from "./PaperTornFrame";

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide Data: Vibrant Background Images with Subjects strictly on the Right
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop", // Meeting (People on right)
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", // Team High Five (Right oriented)
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop", // Office Collab (Right side focus)
    }
  ];

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex flex-col">
      
      {/* Hero Content Wrapper - Full Screen Height initially */}
      <div className="relative h-screen flex items-center overflow-hidden">
        {/* Background Carousel with Ken Burns Effect */}
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Image with Zoom Animation - Anchored to RIGHT */}
            <div 
              className={`absolute inset-0 bg-cover bg-right md:bg-[center_right] transition-transform duration-[10000ms] ease-linear ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay: Darker on Left for Text, Transparent on Right for Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a102e]/90 via-[#0a102e]/60 to-transparent"></div>
            </div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-4xl">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/30 border border-blue-400/50 backdrop-blur-md rounded-full text-white text-sm font-bold tracking-wider uppercase mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              #1 Digital Marketing Agency
            </div>

            {/* Animated Heading (Top/Bottom Slide) */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              {/* Line 1: Slides Down from Top */}
              <div className="overflow-hidden pt-2 pb-4 -mb-4"> {/* Added pb-4 and negative margin to compensate layout but keep visual space */}
                <span key={`l1-${currentSlide}`} className="block animate-slide-down">
                   Scale your app growth
                </span>
              </div>
              
              {/* Line 2: Slides Up from Bottom */}
              <div className="overflow-hidden pt-2 pb-4 -mb-4 mt-2">
                <span key={`l2-${currentSlide}`} className="block">
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 animate-slide-up inline-block pb-1"> {/* Added pb-1 to span as well */}
                     with high-value users
                   </span>
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed mb-10 font-medium drop-shadow-md animate-fade-in-up delay-300">
              {t.hero.subtitle} {t.hero.predictiveAlgorithms} {t.hero.and} {t.hero.machineLearning}.
              <br className="hidden md:block" />
              Transform your digital presence with ultra-fast, expressive, and scalable solutions.
            </p>

            {/* Buttons: Login & Sign Up */}
            <div className="flex flex-wrap gap-5 animate-fade-in-up delay-500">
              <a href="https://adshamper.com/user/register/" target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg shadow-blue-600/40 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 border border-transparent">
                  Sign Up
                </button>
              </a>
              <a href="https://adshamper.com/user/login/" target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center gap-2">
                  <span>🔐</span> Login
                </button>
              </a>
            </div>

          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-blue-500 w-8' : 'bg-white/50 w-2 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Remove old SVG torn paper effect, and add PaperTornFrame at the bottom */}
      <div className="absolute bottom-0 left-0 w-full z-30 leading-none pointer-events-none select-none">
        <PaperTornFrame />
      </div>
      {/* Custom Animations here */}
      <style jsx>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-down {
          animation: slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
