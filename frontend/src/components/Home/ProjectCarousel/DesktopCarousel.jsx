import React from 'react';
import ProjectCard from '../../General/ProjectCard';
import { getCardTransform, shouldRenderCard, handleCardClick } from '@utils/Home/carousel';

const DesktopCarousel = ({ 
  projects, 
  centerIndex, 
  sideCount, 
  updateCenterIndex 
}) => {
  return (
    <div className="relative h-[400px] overflow-visible">
      {projects.map((project, index) => {
        if (!shouldRenderCard(index, centerIndex, sideCount)) return null;
        
        const style = getCardTransform(index, centerIndex, sideCount);
        const isCenter = index === centerIndex;

        return (
          <div
            key={project._id}
            className={`
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              transition-all duration-500 ease-in-out 
              cursor-pointer 
              ${isCenter ? 'opacity-100 scale-100' : 'opacity-50'}
            `}
            style={{
              transform: `
                translateX(${style.translateX}) 
                rotate(${style.rotate}) 
                scale(${style.scale})
              `,
              zIndex: style.zIndex,
              transformOrigin: 'center bottom',
              transition: 'transform 500ms ease-in-out, opacity 500ms ease-in-out',
            }}
            onClick={() => handleCardClick(index, centerIndex, project, updateCenterIndex)}
          >
            <ProjectCard {...project} />
          </div>
        );
      })}
    </div>
  );
};

export default DesktopCarousel;