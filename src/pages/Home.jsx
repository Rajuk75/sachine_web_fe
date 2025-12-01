import React from "react";
import { useTheme } from "../context/ThemeContext";
import HeroSection from "../components/HeroSection";
import ClientsSection from "../components/ClientsSection";
import PlatformSection from "../components/PlatformSection";
import WelcomeSection from "../components/WelcomeSection";
import StatsSection from "../components/StatsSection";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
      <HeroSection />
      
      {/* Clients Section Wrapper with spacing */}
      <div className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
          <ClientsSection />
        </div>
      </div>
      
      <PlatformSection />
      <WelcomeSection />
      <StatsSection />
    </div>
  );
};

export default Home;
