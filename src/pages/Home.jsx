import { useTheme } from "../context/ThemeContext";
import HeroSection from '../components/HeroSection';
import ClientsSection from '../components/ClientsSection';
import BrandMarquee from '../components/BrandMarquee';
import PlatformSection from '../components/PlatformSection';
import WelcomeSection from '../components/WelcomeSection';
import StatsSection from '../components/StatsSection';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="relative">
        {/* Background Gradients */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full blur-[120px] opacity-20 ${
            theme === 'dark' ? 'bg-blue-600' : 'bg-blue-400'
          }`}></div>
          <div className={`absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full blur-[100px] opacity-20 ${
            theme === 'dark' ? 'bg-purple-600' : 'bg-purple-400'
          }`}></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <HeroSection />
          <BrandMarquee />
          <ClientsSection />
          <PlatformSection />
          <WelcomeSection />
          <StatsSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
