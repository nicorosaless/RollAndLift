
import React from 'react';
import HeroSection from './homepage/HeroSection';
import FeatureGrid from './homepage/FeatureGrid';
import TechniqueCategories from './homepage/TechniqueCategories';
import FeaturedVideos from './homepage/FeaturedVideos';

const JiuJitsuHomePage = () => {
  const handleNavigateToTab = (tab: string) => {
    // Find the parent JiuJitsuPage component's tab buttons
    const buttons = document.querySelectorAll('.tabs-container button');
    // Find the button for the requested tab and click it
    buttons.forEach((button) => {
      if (button.textContent?.includes(tab)) {
        (button as HTMLButtonElement).click();
      }
    });
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Hero Section */}
      <HeroSection onNavigateToTab={handleNavigateToTab} />
      
      {/* Features Grid */}
      <FeatureGrid onNavigateToTab={handleNavigateToTab} />
      
      {/* Technique Categories */}
      <TechniqueCategories />
      
      {/* Featured Videos */}
      <FeaturedVideos />
    </div>
  );
};

export default JiuJitsuHomePage;
