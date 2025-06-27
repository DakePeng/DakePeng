import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import SectionHeader from './SectionHeader';
import SectionLine from './SectionLine';

const ExperienceShowcase = ({experiences, cvLink}) => {
  const [selectedId, setSelectedId] = useState(experiences[0].id);
  const selectedExperience = experiences.find((exp) => exp.id === selectedId);
  const sectionTitle = 'Experience';
  const sectionDescription = '';

  return (
    <section 
      id="interests"
      className="max-w-6xl mx-auto px-6 scroll-mt-20">
      <SectionHeader title={sectionTitle} description={sectionDescription}/>
      <div className="flex h-screen p-6 gap-4 max-h-[30rem] overflow-x-hidden">
        {/* Left column: fixed height to show exactly 5 cards and scroll */}
        <div className="flex flex-col gap-4 w-1/3 overflow-y-auto max-h-[30rem] overflow-x-hidden pr-4">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              logo={exp.logo}
              jobTitle={exp.jobTitle}
              company={exp.company}
              dateRange={exp.dateRange}
              description={exp.description}
              onClick={() => setSelectedId(exp.id)}
              className={`cursor-pointer ${
                selectedId === exp.id ? 'ring-2 ring-blue-500' : ''
              }`}
            />
          ))}
        </div>

        {/* Right side - description box */}
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{selectedExperience.jobTitle}</h2>
          <h3 className="text-xl md:text-2xl text-gray-700 mb-2">{selectedExperience.company}</h3>
          <p className="text-gray-500 mb-6">{selectedExperience.dateRange}</p>
          <p className="text-gray-800 whitespace-pre-line">{selectedExperience.description}</p>
        </div>
      </div>
      {/* Download CV */}
      <div className="mt-16 text-center cursor-pointer">
        <a
          href= {cvLink}
          target="_blank"
          className="inline-block px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition duration-300"
        >
          View My Resume
        </a>
      </div>
      <SectionLine />
    </section>
  );
}

ExperienceShowcase.defaultProps = {
  cvLink:"https://1drv.ms/w/c/e712a48a69688c8b/EavzYQEBp_tCuf8q8YW2eQkB7uuxwbeJupqLUEr7SKVnJg?e=9yQ09f",
  experiences: [
    {
      id: 1,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
      jobTitle: 'Software Engineer',
      company: 'Apple Inc.',
      dateRange: 'Jan 2020 - Present',
      description:
        'Developing innovative software solutions. Led a team of engineers to build scalable web apps using React and Node.js.',
    },
    {
      id: 2,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      jobTitle: 'Frontend Developer',
      company: 'Microsoft',
      dateRange: 'Jun 2018 - Dec 2019',
      description:
        'Crafted responsive UI components with React and Tailwind. Improved UX and accessibility for several client projects.',
    },
    {
      id: 3,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      jobTitle: 'Intern',
      company: 'Netflix',
      dateRange: 'Jan 2017 - May 2018',
      description:
        'Assisted in building MVP features using JavaScript and Python. Gained valuable full-stack development experience.',
    },
    {
      id: 4,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Google_logo_2015.png',
      jobTitle: 'Data Analyst',
      company: 'Google',
      dateRange: 'Feb 2016 - Dec 2016',
      description:
        'Analyzed datasets to provide actionable insights using Python and SQL.',
    },
    {
      id: 5,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg',
      jobTitle: 'Project Manager',
      company: 'Stack Overflow',
      dateRange: 'Jan 2015 - Jan 2016',
      description:
        'Led project teams and ensured timely delivery of software projects.',
    },
    {
      id: 6,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Slack_logo.svg',
      jobTitle: 'Intern',
      company: 'Slack',
      dateRange: 'Jan 2014 - Dec 2014',
      description:
        'Assisted with marketing and growth strategies for new product launches.',
    },
  ]
}

export default ExperienceShowcase;