import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';

const GradientLayout = ({ children, className = "" }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <ScrollToTop />
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse bg-blue-300" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse bg-purple-300" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className={`flex-grow pt-20 ${className}`}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default GradientLayout;
