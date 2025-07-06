import { useState } from 'react';

const ExperienceCard = ({ logo, jobTitle, company, dateRange, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
      className={`
        flex flex-row p-3 bg-white shadow-sm rounded-xl max-w-sm w-full
        cursor-pointer transition-transform duration-200 ease-in-out
        ${isHovered ? 'shadow-lg md:scale-105' : 'shadow-sm'}
      `}
    >
      <img
        src={logo}
        alt={`${company} logo`}
        className="w-20 h-auto object-contain rounded-md mr-6"
      />

      <div className="flex flex-col text-left max-w-full overflow-hidden">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{jobTitle}</h3>
        <p className="text-sm text-gray-500 mb-1">{company}</p>
        <p className="text-sm text-gray-900 mb-1">{dateRange}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
