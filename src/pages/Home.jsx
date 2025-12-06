import React from 'react';
import DigmoxLayout from '../components/layouts/DigmoxLayout';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import WorkProcessSection from '../components/WorkProcessSection';

const Home = () => {
  return (
    <DigmoxLayout>
      <HeroSection />
      <InfoSection />
      <WorkProcessSection />
    </DigmoxLayout>
  );
};

export default Home;
