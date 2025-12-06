import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MurfLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0f0518] text-white font-sans selection:bg-pink-500/30 selection:text-pink-200">
      {/* Navbar - Passing dark mode prop if needed, or relying on transparent bg */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0f0518]/80 backdrop-blur-md border-b border-white/5">
        <Navbar />
      </div>

      <main className="relative pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MurfLayout;
