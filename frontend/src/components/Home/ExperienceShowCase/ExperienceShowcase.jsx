import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import SectionHeader from '../General/SectionHeader';
import SectionLine from '../General/SectionLine';

const ExperienceShowcase = ({ experiences, selectedExperience, onSelectExperience, cvLink }) => {
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  const sectionTitle = 'Experience';
  const sectionDescription = '';

  const handleSelect = (exp) => {
    onSelectExperience(exp);
    setShowMobileDetail(true); // Show overlay on mobile
  };

  const handleBack = () => {
    setShowMobileDetail(false);
  };

  return (
    <section id="experience" className="max-w-6xl mx-auto scroll-mt-20 relative">
      <SectionHeader title={sectionTitle} description={sectionDescription} />
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
                className={`cursor-pointer ${
                  selectedExperience?._id === exp._id ? 'ring-2 ring-blue-500' : ''
                }`}
              />
            ))
          ) : (
            <p className="text-gray-500">No experiences available.</p>
          )}
        </div>

        {/* Right: Desktop Detail View */}
        <div className="hidden md:flex flex-1 bg-white rounded-xl p-6 shadow-md max-h-[32rem] overflow-y-auto mt-4 md:mt-0">
          {selectedExperience ? (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {selectedExperience.jobTitle}
              </h2>
              <h3 className="text-xl md:text-2xl text-gray-700 mb-2">
                {selectedExperience.company}
              </h3>
              <p className="text-gray-500 mb-6">{selectedExperience.dateRange}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                {selectedExperience.description? selectedExperience.description.split("\\n").map((line, idx) =>
                  <li className="text-gray-800 whitespace-pre-line" key = {idx}> {line} </li>
                ): ""}
              </ul>
            </div>
          ) : (
            <p className="text-gray-500">Select an experience to view details.</p>
          )}
        </div>

        {/* Mobile Overlay */}
        {showMobileDetail && selectedExperience && (
          <div className="fixed inset-0 z-50 bg-white p-4 md:p-6 overflow-y-auto md:hidden">
            <button
              onClick={handleBack}
              aria-label="Go back"
              className="mb-4 text-sm text-blue-700 border border-blue-700 rounded-full px-4 py-1 hover:bg-blue-700 cursor-pointer hover:text-white transition"
            >
              ← Back
            </button>
            <h2 className="text-2xl font-bold mb-2">
              {selectedExperience.jobTitle}
            </h2>
            <h3 className="text-xl text-gray-700 mb-1">
              {selectedExperience.company}
            </h3>
            <p className="text-gray-500 mb-4">{selectedExperience.dateRange}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {selectedExperience.description
                ? selectedExperience.description
                    .replace(/\\n/g, "\n")
                    .split("\n")
                    .map((line, idx) => (
                      <li
                        className="text-gray-800 whitespace-pre-line"
                        key={idx}
                      >
                        {line}
                      </li>
                    ))
                : null}
            </ul>
          </div>
        )}
      </div>

      {/* Resume Button */}
      <div className="mt-4 md:mt-12 text-center cursor-pointer">
        <a
          href={cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 mt-6 md:mt-0 text-sm font-semibold text-blue-700 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition duration-300"
        >
          View My Resume
        </a>
      </div>

      <SectionLine />
    </section>
  );
};

export default ExperienceShowcase;
