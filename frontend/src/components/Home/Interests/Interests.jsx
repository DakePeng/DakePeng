import React, { useRef } from 'react';
import SectionHeader from '../General/SectionHeader';
import SectionLine from '../General/SectionLine';
import { INTEREST_ICONS } from '@constants/interestsIcons';
import { useScrollProgress } from '@hooks/useScrollProgress';
import InterestsIcon from './InterestsIcon';

export default function Interests() {
  const sectionRef = useRef(null);
  const scrollProgress = useScrollProgress(sectionRef);

  const sectionTitle = 'Interests';
  const sectionDescription =
    'These are the fields I am passionate about and continuously exploring, combining creativity with analytical thinking.';

  return (
    <section
      id="interests"
      ref={sectionRef}
      className="max-w-6xl mx-auto px-6 scroll-mt-20"
    >
      <SectionHeader title={sectionTitle} description={sectionDescription} />
      <div className="flex flex-wrap justify-center gap-16">
        {INTEREST_ICONS.map(({ Component, label }, index) => (
          <InterestsIcon
            key={label}
            Component={Component}
            label={label}
            scrollProgress={scrollProgress}
            index={index}
          />
        ))}
      </div>
      <SectionLine />
    </section>
  );
}
