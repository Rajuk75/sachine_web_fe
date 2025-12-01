import { useTheme } from "../context/ThemeContext";
import HeroSection from "../components/HeroSection";
import ClientsSection from "../components/ClientsSection";
import PlatformSection from "../components/PlatformSection";
import WelcomeSection from "../components/WelcomeSection";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
      <HeroSection />
      
      {/* Clients Section */}
      <div className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl opacity-10 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'
          }`}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
