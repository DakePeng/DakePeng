// src/components/ExperienceShowcase.jsx
import React from 'react';
import ExperienceCard from './Card';
import SectionHeader from '../General/SectionHeader';
import SectionLine from '../General/SectionLine';
import ExperienceDetailView from './DetailView';
import MobileExperienceOverlay from './MobileOverlay';
import { useExperienceNavigation } from '@hooks/useExperienceNavigation';
import { EXPERIENCE_CONSTANTS } from '@constants/experienceConstants';
import { getExperienceCardClass } from '@utils/Home/experienceUtils';

const ExperienceShowcase = ({ experiences, selectedExperience, onSelectExperience, cvLink }) => {
  const { showMobileDetail, handleSelect, handleBack } = useExperienceNavigation(onSelectExperience);

  return (
    <section id="experience" className="max-w-6xl mx-auto scroll-mt-20 relative">
      <SectionHeader 
        title={EXPERIENCE_CONSTANTS.SECTION_TITLE} 
        description={EXPERIENCE_CONSTANTS.SECTION_DESCRIPTION} 
      />
      
      {/* Layout */}
      <div className="flex flex-col md:flex-row h-full p-4 md:p-6 gap-4">
        {/* Left: Experience Cards */}
        <div className="flex flex-col gap-4 w-full items-center md:items-start w-full md:w-1/3 md:overflow-y-auto md:max-h-[32rem] overflow-x-hidden md:pr-4">
          {experiences.length > 0 ? (
            experiences.map((exp) => (
              <ExperienceCard
                key={exp._id}
                logo={exp.logo}
                jobTitle={exp.jobTitle}
                company={exp.company_shortened}
                dateRange={exp.dateRange}
                description={exp.description}
                onClick={() => handleSelect(exp)}
                className={getExperienceCardClass(exp, selectedExperience)}
              />
            ))
          ) : (
            <p className="text-gray-500">{EXPERIENCE_CONSTANTS.NO_EXPERIENCES_MESSAGE}</p>
          )}
        </div>

        {/* Right: Desktop Detail View */}
        <ExperienceDetailView selectedExperience={selectedExperience} />

        {/* Mobile Overlay */}
        <MobileExperienceOverlay 
          showMobileDetail={showMobileDetail}
          selectedExperience={selectedExperience}
          onBack={handleBack}
        />
      </div>

      {/* Resume Button */}
      <div className="mt-4 md:mt-12 text-center cursor-pointer">
        <a
          href={cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 mt-6 md:mt-0 text-sm font-semibold text-blue-700 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition duration-300"
        >
          {EXPERIENCE_CONSTANTS.RESUME_BUTTON_TEXT}
        </a>
      </div>

      <SectionLine />
    </section>
  );
};

export default ExperienceShowcase;