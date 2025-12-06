import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const DigmoxLayout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-dark">
      {/* Navbar with scroll effect */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <Navbar theme={scrolled ? 'light' : 'transparent'} />
      </div>

      <main>
        {children}
      </main>

      {/* Dark Footer */}
      <div className="bg-white text-dark">
        <Footer />
      </div>
    </div>
  );
};

export default DigmoxLayout;
