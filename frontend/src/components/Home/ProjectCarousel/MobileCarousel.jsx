import React, { useRef } from 'react';
import ProjectCard from '../../General/ProjectCard';

const MobileCarousel = ({ projects }) => {
  const scrollContainerRef = useRef(null);

  return (
    <div className="relative w-full max-w-xs mx-auto overflow-visible">
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-8 px-8"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            className="w-full flex-shrink-0 snap-center"
            style={{ 
              width: '100%',
              paddingLeft: '10px',
              paddingRight: '10px',
            }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;