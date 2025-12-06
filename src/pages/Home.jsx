import React from 'react';
import DigmoxLayout from '../components/layouts/DigmoxLayout';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import WorkProcessSection from '../components/WorkProcessSection';
import ProjectSection from '../components/ProjectSection';
import BrandMarquee from '../components/BrandMarquee';

const Home = () => {
  return (
    <DigmoxLayout>
      <HeroSection />
      <InfoSection />
      <WorkProcessSection />
      <ProjectSection />
      <BrandMarquee />
    </DigmoxLayout>
  );
};

export default Home;
