import React from 'react';
import ProjectCarousel from './ProjectCarousel.jsx';
import Interests from './Interests.jsx';
import Header from './Header.jsx';
import ExperienceShowcase from './ExperienceShowcase.jsx';
import Intro from './Intro.jsx';
import FloatingMenu from './FloatingMenu/FloatingMenu.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import { usePortfolioData } from '@hooks/usePortfolioData.js';
import { PORTFOLIO_CONSTANTS } from '@constants/portfolioData.js';

const Home = () => {
  const {
    experiences,
    projects,
    selectedExperience,
    loading,
    error,
    handleExperienceSelect
  } = usePortfolioData();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="mb-24">
      <Header />
      <FloatingMenu {...FloatingMenu.defaultProps} />
      <Intro 
        coverImg={PORTFOLIO_CONSTANTS.COVER_IMG}
        instagramUrl={PORTFOLIO_CONSTANTS.INSTAGRAM_URL}
        linkedinUrl={PORTFOLIO_CONSTANTS.LINKEDIN_URL}
        email={PORTFOLIO_CONSTANTS.EMAIL}
        introText={PORTFOLIO_CONSTANTS.INTRO_TEXT}
      />
      <ExperienceShowcase
        experiences={experiences}
        selectedExperience={selectedExperience}
        onSelectExperience={handleExperienceSelect}
        cvLink={PORTFOLIO_CONSTANTS.CV_LINK}
      />
      <Interests />
      <ProjectCarousel projects={projects} />
      <Contact />
      <About />
    </div>
  );
};

export default Home;