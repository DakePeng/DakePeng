import {useState} from 'react';

const ExperienceCard = ({ logo, jobTitle, company, dateRange, onClick}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
      className={`
        flex p-3 bg-white shadow-sm rounded-xl max-w-sm w-full h-28 items-center
        cursor-pointer transition-transform duration-200 ease-in-out
        ${isHovered ? 'shadow-lg scale-105' : 'shadow-sm'}
      `}
    >
      <img
        src={logo}
        alt={`${company} logo`}
        className="h-3/4 object-contain rounded-md mr-6 aspect-square"
      />
      <div className="flex flex-col text-left max-w-sm overflow-hidden">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{jobTitle}</h3>  {/* added mb-1 */}
        <p className="text-sm text-gray-500 mb-2 ">{company}</p>
        <p className="text-sm text-gray-900">{dateRange}</p>
      </div>
    </div>
  );
};

import CarletonLogo from '../assets/Carleton_Logo.png';
ExperienceCard.defaultProps = {
    logo: CarletonLogo, 
    jobTitle: 'Software Engineer',
    company: 'Tech Company',
    dateRange: 'Jan 2020 - Present',
    description: 'Developing innovative software solutions.Developing innovative software solutions.Developing innovative software solutions.',
    onClick: () => console.log('Experience Card Clicked'),
};

export default ExperienceCard;
