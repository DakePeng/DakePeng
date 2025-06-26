import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';

const ProjectCarousel = ({ projects }) => {
  const EMPTY_COUNT = 2; // empty cards at start and end
  const visibleProjects = projects.slice(EMPTY_COUNT, projects.length - EMPTY_COUNT);
  const [centerIndex, setCenterIndex] = useState(EMPTY_COUNT);
  const barRef = useRef(null);
  const dragging = React.useRef(false);

  const fanStyles = [
    { rotate: '-10deg', translateX: '-450px', scale: 0.7, zIndex: 1 },
    { rotate: '-5deg', translateX: '-225px', scale: 0.85, zIndex: 2 },
    { rotate: '0deg', translateX: '0px', scale: 1, zIndex: 3 },
    { rotate: '5deg', translateX: '225px', scale: 0.85, zIndex: 2 },
    { rotate: '10deg', translateX: '450px', scale: 0.7, zIndex: 1 },
  ];

  const visibleIndex = centerIndex - EMPTY_COUNT;
  const dotPositionPercent = (visibleIndex / (visibleProjects.length - 1)) * 100;

  const onBarClick = (e) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    const newVisibleIndex = Math.round(percent * (visibleProjects.length - 1));
    const newCenterIndex = newVisibleIndex + EMPTY_COUNT;
    setCenterIndex(newCenterIndex);
  };

  const onMouseMove = (e) => {
    if (!dragging.current || !barRef.current) return;

    const rect = barRef.current.getBoundingClientRect();
    let newX = e.clientX - rect.left;

    if (newX < 0) newX = 0;
    if (newX > rect.width) newX = rect.width;

    const percent = newX / rect.width;
    const newVisibleIndex = Math.round(percent * (visibleProjects.length - 1));
    const newCenterIndex = newVisibleIndex + EMPTY_COUNT;
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

  return (
    <div className="w-full max-w-[1600px] mx-auto select-none">
      {/* Carousel container */}
      <div className="relative h-[400px] overflow-visible">
        {projects.map((project, index) => {
          if (project.id < 0) return null;
          if (index > centerIndex + 2 || index < centerIndex - 2) return null;

          const tempIndex = index - centerIndex + 2;
          const style = fanStyles[tempIndex];
          const isCenter = index === centerIndex;

          return (
            <div
              key={project.id}
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
              onClick={() => setCenterIndex(index)}
            >
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>

      {/* Bar dialer below the carousel */}
      <div
        ref={barRef}
        onClick={onBarClick}
        className="relative mt-8 w-80 h-3 bg-gray-300 rounded-full cursor-grab mx-auto"
      >
        {/* Draggable Dot */}
        <div
          onMouseDown={onDotMouseDown}
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full shadow-lg cursor-grab"
          style={{
            left: `${dotPositionPercent}%`,
            transform: 'translateX(-50%)',
            transition: dragging.current ? 'none' : 'left 300ms ease-in-out',
          }}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={visibleProjects.length - 1}
          aria-valuenow={visibleIndex}
          tabIndex={0}
        />
      </div>
    </div>
  );
};

// Default dummy props
ProjectCarousel.defaultProps = [
  {id: -1},
  {id: -2},
  {
    id: 0,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Mountain Escape',
    description: 'Explore breathtaking mountain landscapes with this travel guide.',
    link: 'https://example.com/mountain-escape',
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
    title: 'City Lights',
    description: 'Discover vibrant city nightlife with curated spots and events.',
    link: 'https://example.com/city-lights',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
    title: 'Creative Workspace',
    description: 'Boost your productivity with tips for a creative and organized workspace.',
    link: 'https://example.com/creative-workspace',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    title: 'Gourmet Recipes',
    description: 'Step-by-step guides to create delicious gourmet meals at home.',
    link: 'https://example.com/gourmet-recipes',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
    title: 'Adventure Gear',
    description: 'The latest gear reviews and recommendations for your next adventure.',
    link: 'https://example.com/adventure-gear',
  },
  {id: -3},
  {id: -4}
];

export default ProjectCarousel;
