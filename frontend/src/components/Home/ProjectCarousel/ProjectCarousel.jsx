import React from 'react';
import SectionHeader from '../General/SectionHeader';
import SectionLine from '../General/SectionLine';
import MobileCarousel from './MobileCarousel';
import DesktopCarousel from './DesktopCarousel';
import CarouselControls from './CarouselControls';
import { useCarousel } from '@hooks/useCarousel';
import { useResponsive } from '@hooks/useResponsive';
import { useDragControls } from '@hooks/useDragControls';
import { useTouchControls } from '@hooks/useTouchControls';
import { getSideCount } from '@utils/Home/carousel';
import { SECTION_CONTENT } from '@constants/carouselConstants';

const ProjectCarousel = ({ projects }) => {
  const isMobile = useResponsive();
  const sideCount = getSideCount(isMobile);
  
  const {
    centerIndex,
    animating,
    maxIndex,
    updateCenterIndex,
    goToNext,
    goToPrev,
    clampIndex,
  } = useCarousel(projects);

  const { barRef, dragging, onBarClick, onDotMouseDown } = useDragControls(
    maxIndex,
    updateCenterIndex
  );

  const { onTouchStart, onTouchEnd } = useTouchControls(
    clampIndex,
    updateCenterIndex
  );

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 scroll-mt-20">
      <SectionHeader 
        title={SECTION_CONTENT.title} 
        description={SECTION_CONTENT.description} 
      />
      
      <div
        className="w-full max-w-[1600px] mx-auto select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {isMobile ? (
          <MobileCarousel
            projects={projects}
            centerIndex={centerIndex}
            maxIndex={maxIndex}
            animating={animating}
            goToPrev={goToPrev}
            goToNext={goToNext}
          />
        ) : (
          <>
            <DesktopCarousel
              projects={projects}
              centerIndex={centerIndex}
              sideCount={sideCount}
              updateCenterIndex={updateCenterIndex}
            />
            
            <CarouselControls
              barRef={barRef}
              dragging={dragging}
              onBarClick={onBarClick}
              onDotMouseDown={onDotMouseDown}
              centerIndex={centerIndex}
              maxIndex={maxIndex}
            />
          </>
        )}

        <SectionLine />
      </div>
    </section>
  );
};

export default ProjectCarousel;