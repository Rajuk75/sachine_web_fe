import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';

const StandardLayout = ({ children, className = "" }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className={`flex-grow pt-20 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default StandardLayout;
