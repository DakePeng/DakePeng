import React, { useEffect, useRef, useState } from 'react';
import {
  BrainResearch,
  LaptopDevMode,
  ChatLines,
  CrackedEgg,
  Learning,
} from 'iconoir-react';
import SectionHeader from './SectionHeader';

const icons = [ 
  { Component: LaptopDevMode, label: 'Data & Computer Science' },
  { Component: BrainResearch, label: 'Cognitive Science' },
  { Component: Learning, label: 'Philosophy' },
  { Component: ChatLines, label: 'Linguistics' },
  { Component: CrackedEgg, label: 'Food, Cooking, and Culture' }
];

function SkillsSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionTitle = 'Interests';
  const sectionDescription = 'These are the fields I am passionate about and continuously exploring, combining creativity with analytical thinking.';

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far section is into view (0 = top of viewport, 1 = bottom)
      // Clamp between 0 and 1 as progress value
      const start = windowHeight; // start animation when section bottom hits viewport bottom
      const end = windowHeight/2; // finish animation when section top is halfway up viewport

      // The progress moves from 0 (off screen below) to 1 (fully visible at halfway)
      let progress = 1 - (rect.top - end) / (start - end);
      progress = Math.min(Math.max(progress, 0), 1);

      setScrollProgress(progress);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="max-w-6xl mx-auto px-6 scroll-mt-20"
    >
      <SectionHeader title={sectionTitle} description={sectionDescription} />
      <div className="flex flex-wrap justify-center gap-16">
        {icons.map(({ Component, label }, index) => {
          // Stagger each icon’s animation progress by offsetting progress with index
          const delay = index * 0.15; // 0.15 offset between icons
          let iconProgress = (scrollProgress - delay) / (1 - delay);
          iconProgress = Math.min(Math.max(iconProgress, 0), 1);

          // Calculate transform and opacity based on progress:
          // Start fully right (100% translateX) and invisible (opacity 0)
          // End at 0 translateX and fully visible (opacity 1)
          // Add a little bounce effect on Y axis (jump)
          const translateX = 100 - iconProgress * 100; // from 100% to 0%
          const translateY =
            iconProgress < 0.5
              ? -iconProgress * 40 // move up to -20px halfway through
              : -(1 - iconProgress) * 40; // then move down

          const opacity = iconProgress;

          return (
            <div
              key={label}
              className="flex flex-col items-center max-w-[140px] focus:outline-none"
              tabIndex={0}
              role="img"
              aria-label={label}
              style={{
                transform: `translateX(${translateX}%) translateY(${translateY}px)`,
                opacity,
                transition: 'transform 0.5s ease-out, opacity 1s ease-out',
              }}
            >
              <Component
                className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36"
                strokeWidth={0.8}
              />
              <span className="mt-3 text-center text-sm md:text-base font-medium">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
