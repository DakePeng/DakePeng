import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
import SectionLine from './SectionLine';

const ProjectCarousel = ({ projects }) => {
  const SIDE_COUNT = 2; // empty cards at start and end
  const [centerIndex, setCenterIndex] = useState(SIDE_COUNT);
  const barRef = useRef(null);
  const dragging = React.useRef(false);
  const fanStyles = [
    { rotate: '-10deg', translateX: '-450px', scale: 0.7, zIndex: 1 },
    { rotate: '-5deg', translateX: '-225px', scale: 0.85, zIndex: 2 },
    { rotate: '0deg', translateX: '0px', scale: 1, zIndex: 3 },
    { rotate: '5deg', translateX: '225px', scale: 0.85, zIndex: 2 },
    { rotate: '10deg', translateX: '450px', scale: 0.7, zIndex: 1 },
  ];
  const dotPositionPercent = (centerIndex / (projects.length - 1)) * 100;
  const sectionTitle = 'Projects';
  const sectionDescription = 'Explore a selection of my previous projects, showcasing creativity and technical skills across various domains.';

  const onBarClick = (e) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    const newCenterIndex = Math.round(percent * (projects.length - 1));
    console.log('Clicked index:', newCenterIndex);
    setCenterIndex(newCenterIndex);
  };

  const onMouseMove = (e) => {
    if (!dragging.current || !barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    let newX = e.clientX - rect.left;
    if (newX < 0) newX = 0;
    if (newX > rect.width) newX = rect.width;
    const percent = newX / rect.width;
    const newCenterIndex = Math.round(percent * (projects.length - 1));
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
    <section 
      id="projects"
      className="max-w-6xl mx-auto px-6 scroll-mt-20">
      <SectionHeader title={sectionTitle} description={sectionDescription}/>
      <div className="w-full max-w-[1600px] mx-auto select-none">
        {/* Carousel container */}
        <div className="relative h-[400px] overflow-visible">
          {projects.map((project, index) => {
            if (index > centerIndex + SIDE_COUNT || index < centerIndex - SIDE_COUNT) return null;
            const tempIndex = index - centerIndex + SIDE_COUNT;
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
                onClick={() => {
                // if the project is clicked, open the link; otherwise, set the center index
                if (index === centerIndex && project?.link) {
                  window.open(project.link, '_blank');
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

        {/* Bar dialer below the carousel */}
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
            aria-valuemax={projects.length - 1}
            aria-valuenow={centerIndex}
            tabIndex={0}
          />
        </div>
        {/* View All Link */}
        <div className="mt-16 text-center">
          <a
            href="#projects"
            className="inline-block px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition duration-300"
          >
            View All Projects
          </a>
        </div>
        <SectionLine />
      </div>
    </section>
  );
};

// Default dummy props
ProjectCarousel.defaultProps = {
  projects : [
  {
    id: 0,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Mountain Escape',
    description: 'Explore breathtaking mountain landscapes with this travel guide.',
    link: 'https://example.com/mountain-escape',
    tags: ['travel', 'nature'],
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
    title: 'City Lights',
    description: 'Discover vibrant city nightlife with curated spots and events.',
    link: 'https://example.com/city-lights',
    tags: ['urban', 'nightlife'],
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
    title: 'Creative Workspace',
    description: 'Boost your productivity with tips for a creative and organized workspace.',
    link: 'https://example.com/creative-workspace',
    tags: ['productivity', 'tech', 'workspace'],
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    title: 'Gourmet Recipes',
    description: 'Step-by-step guides to create delicious gourmet meals at home.',
    link: 'https://example.com/gourmet-recipes',
    tags: ['food', 'cooking'],
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
    title: 'Adventure Gear',
    description: 'The latest gear reviews and recommendations for your next adventure.',
    link: 'https://example.com/adventure-gear',
    tags: ['outdoors', 'gear'],
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1522199670076-2852f80289c3?auto=format&fit=crop&w=400&q=80',
    title: 'Minimalist Living',
    description: 'Simplify your life with minimalist principles for home and mind.',
    link: 'https://example.com/minimalist-living',
    tags: ['lifestyle', 'minimalism'],
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=400&q=80',
    title: 'Coding Bootcamp',
    description: 'Jumpstart your coding career with these bootcamp resources.',
    link: 'https://example.com/coding-bootcamp',
    tags: ['tech', 'education'],
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=400&q=80',
    title: 'Home Gym Setup',
    description: 'Build your dream gym at home with these essentials.',
    link: 'https://example.com/home-gym-setup',
    tags: ['fitness', 'home'],
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=400&q=80',
    title: 'Digital Art Tools',
    description: 'Explore the best software and hardware for digital artists.',
    link: 'https://example.com/digital-art-tools',
    tags: ['art', 'tech', 'creativity'],
  }
]};

export default ProjectCarousel;
