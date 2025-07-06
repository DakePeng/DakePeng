import React, { useState, useRef, useEffect } from 'react';
import ProjectCard from '../General/ProjectCard';
import SectionHeader from './SectionHeader';
import SectionLine from './SectionLine';

const ProjectCarousel = ({ projects }) => {
  const [centerIndex, setCenterIndex] = useState(2); // default for desktop, updated with SIDE_COUNT
  const [animating, setAnimating] = useState(null); // null | 'left' | 'right' for mobile slide animation
  const barRef = useRef(null);
  const dragging = React.useRef(false);
  const touchStartX = useRef(null);

  // Detect mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // breakpoint can be adjusted
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // SIDE_COUNT based on mobile or desktop
  const SIDE_COUNT = isMobile ? 1 : 2;

  // Fan styles for 3 or 5 cards
  const fanStylesDesktop = [
    { rotate: '-10deg', translateX: '-450px', scale: 0.7, zIndex: 1 },
    { rotate: '-5deg', translateX: '-225px', scale: 0.85, zIndex: 2 },
    { rotate: '0deg', translateX: '0px', scale: 1, zIndex: 3 },
    { rotate: '5deg', translateX: '225px', scale: 0.85, zIndex: 2 },
    { rotate: '10deg', translateX: '450px', scale: 0.7, zIndex: 1 },
  ];

  // Clamp centerIndex within valid range
  const maxIndex = projects.length - 1;
  const clampIndex = (idx) => Math.min(maxIndex, Math.max(0, idx));

  // Adjust centerIndex if projects or SIDE_COUNT changes
  useEffect(() => {
    setCenterIndex((prev) => clampIndex(SIDE_COUNT));
  }, [SIDE_COUNT, projects.length]);

  const dotPositionPercent = (centerIndex / maxIndex) * 100;

  const sectionTitle = 'Projects';
  const sectionDescription =
    'Explore a selection of my previous projects, showcasing creativity and technical skills across various domains.';

  const onBarClick = (e) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    const newCenterIndex = Math.round(percent * maxIndex);
    setCenterIndex(newCenterIndex);
  };

  const onMouseMove = (e) => {
    if (!dragging.current || !barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    let newX = e.clientX - rect.left;
    if (newX < 0) newX = 0;
    if (newX > rect.width) newX = rect.width;
    const percent = newX / rect.width;
    const newCenterIndex = Math.round(percent * maxIndex);
    setCenterIndex(newCenterIndex);
  };

  const onMouseUp = () => {
    dragging.current = false;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const onDotMouseDown = (e) => {
    e.preventDefault();
    dragging.current = true;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  // Touch handlers for swipe (desktop only)
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - touchStartX.current;

    const swipeThreshold = 50; // minimum px to count as swipe
    if (diffX > swipeThreshold) {
      // swipe right -> move carousel left (decrement centerIndex)
      setCenterIndex((prev) => clampIndex(prev - 1));
    } else if (diffX < -swipeThreshold) {
      // swipe left -> move carousel right (increment centerIndex)
      setCenterIndex((prev) => clampIndex(prev + 1));
    }
    touchStartX.current = null;
  };

  // --- Mobile sliding animation handlers ---
  const handleNext = () => {
    if (centerIndex >= maxIndex || animating) return;
    setAnimating('right');
    setTimeout(() => {
      setCenterIndex((prev) => clampIndex(prev + 1));
      setAnimating(null);
    }, 300); // duration should match CSS transition
  };

  const handlePrev = () => {
    if (centerIndex <= 0 || animating) return;
    setAnimating('left');
    setTimeout(() => {
      setCenterIndex((prev) => clampIndex(prev - 1));
      setAnimating(null);
    }, 300);
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 scroll-mt-20">
      <SectionHeader title={sectionTitle} description={sectionDescription} />
      <div
        className="w-full max-w-[1600px] mx-auto select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* --- MOBILE VERSION --- */}
        {isMobile ? (
          <div className="relative w-full max-w-xs mx-auto h-[400px] flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
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
              style={{ padding: '0 40px' }} // add horizontal padding to prevent overlap
            >
              {projects[centerIndex] && <ProjectCard {...projects[centerIndex]} />}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              disabled={centerIndex === maxIndex || animating}
              className="absolute right-[-20px] z-10 inline-block px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next Project"
            >
              {'>'}
            </button>
          </div>
        ) : (
          // --- DESKTOP CAROUSEL ---
          <div className="relative h-[400px] overflow-visible">
            {projects.map((project, index) => {
              if (index > centerIndex + SIDE_COUNT || index < centerIndex - SIDE_COUNT)
                return null;
              const tempIndex = index - centerIndex + SIDE_COUNT;
              const style = fanStylesDesktop[tempIndex];
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
                  onClick={() => {
                    if (index === centerIndex && project?.postLink) {
                      window.open(project.postLink);
                    } else {
                      setCenterIndex(index);
                    }
                  }}
                >
                  <ProjectCard {...project} />
                </div>
              );
            })}
          </div>
        )}

        {/* Bar dialer below the carousel - hidden on mobile */}
        {!isMobile && (
          <div
            ref={barRef}
            onClick={onBarClick}
            className="relative mt-8 w-80 h-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full cursor-grab mx-auto"
          >
            {/* Draggable Dot */}
            <div
              onMouseDown={onDotMouseDown}
              className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-full shadow-lg cursor-grab border-4 border-blue-700"
              style={{
                left: `${dotPositionPercent}%`,
                transform: 'translateX(-50%)',
                transition: dragging.current ? 'none' : 'left 300ms ease-in-out',
              }}
              role="slider"
              aria-valuemin={0}
              aria-valuemax={maxIndex}
              aria-valuenow={centerIndex}
              tabIndex={0}
            />
          </div>
        )}

        <SectionLine />
      </div>
    </section>
  );
};

export default ProjectCarousel;
