import React from 'react';
import ProjectCard from '../../General/ProjectCard';

const MobileCarousel = ({ 
  projects, 
  centerIndex, 
  maxIndex, 
  animating, 
  goToPrev, 
  goToNext 
}) => {
  return (
    <div className="relative w-full max-w-xs mx-auto h-[400px] flex items-center justify-center">
      {/* Left Arrow */}
      <button
        onClick={goToPrev}
        disabled={centerIndex === 0 || animating}
        className="absolute left-[-20px] z-10 inline-block px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous Project"
      >
        {'<'}
      </button>

      {/* Project Card with slide animation */}
      <div
        className={`
          w-full
          transition-transform duration-300 ease-in-out
          ${animating === 'left' ? '-translate-x-full opacity-0' : ''}
          ${animating === 'right' ? 'translate-x-full opacity-0' : ''}
          ${animating === null ? 'translate-x-0 opacity-100' : ''}
        `}
        style={{ padding: '0 40px' }}
      >
        {projects[centerIndex] && <ProjectCard {...projects[centerIndex]} />}
      </div>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        disabled={centerIndex === maxIndex || animating}
        className="absolute right-[-20px] z-10 inline-block px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next Project"
      >
        {'>'}
      </button>
    </div>
  );
};

export default MobileCarousel;