import React from 'react';
import ExperienceCard from './ExperienceCard';
import SectionHeader from './SectionHeader';
import SectionLine from './SectionLine';

const ExperienceShowcase = ({ experiences, selectedExperience, onSelectExperience, cvLink }) => {
  const sectionTitle = 'Experience';
  const sectionDescription = '';
  experiences = [...experiences].sort((a, b) => a.order - b.order);
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 scroll-mt-20"
    >
      <SectionHeader title={sectionTitle} description={sectionDescription} />
      <div className="flex h-screen p-6 gap-4 max-h-[32rem] overflow-x-hidden">
        {/* Left column: experience cards */}
        <div className="flex flex-col gap-4 w-1/3 overflow-y-auto max-h-[32rem] overflow-x-hidden pr-4">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp._id}
              logo={exp.logo}
              jobTitle={exp.jobTitle}
              company={exp.company_shortened}
              dateRange={exp.dateRange}
              description={exp.description}
              onClick={() => onSelectExperience(exp)}
              className={`cursor-pointer ${
                selectedExperience?._id === exp._id ? 'ring-2 ring-blue-500' : ''
              }`}
            />
          ))}
        </div>

        {/* Right column: selected experience details */}
        <div
          className="
            flex-1
            bg-white
            rounded-xl
            p-6
            shadow-md
            max-h-[30rem]
            overflow-y-auto
            mt-4
            md:mt-0
          "
        >
          {selectedExperience ? (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {selectedExperience.jobTitle}
              </h2>
              <h3 className="text-xl md:text-2xl text-gray-700 mb-2">
                {selectedExperience.company}
              </h3>
              <p className="text-gray-500 mb-6">
                {selectedExperience.dateRange}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                {selectedExperience.description? selectedExperience.description.split("\\n").map((line, idx) =>
                  <li className="text-gray-800 whitespace-pre-line" key = {idx}> {line} </li>
                ): ""}
              </ul>
            </>
          ) : (
            <p className="text-gray-500">Select an experience to view details.</p>
          )}
        </div>
      </div>

      {/* Download CV */}
      <div className="mt-16 text-center cursor-pointer">
        <a
          href={cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition duration-300"
        >
          View My Resume
        </a>
      </div>

      <SectionLine />
    </section>
  );
};

export default ExperienceShowcase;
