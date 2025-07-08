import React, { useRef } from 'react';
import SectionLine from '../General/SectionLine';
import CoverImage from './CoverImage';
import IntroText from './IntroText';
import { useResponsiveHeight } from '@hooks/useResponsiveCover.js';

const Intro = ({ coverImg, instagramUrl, linkedinUrl, email, discordUrl, introText }) => {
  const textRef = useRef(null);
  const imageHeight = useResponsiveHeight(textRef);

  const socialLinks = {
    instagramUrl,
    linkedinUrl,
    email,
    discordUrl
  };

  return (
    <section id="intro" className="max-w-6xl mx-auto px-6 scroll-mt-20">
      <div className="flex flex-col md:flex-row mt-28 md:mt-32 px-4 md:px-8 w-full max-w-6xl mx-auto items-start gap-6 lg:gap-12">
        <CoverImage coverImg={coverImg} imageHeight={imageHeight} />
        <IntroText textRef={textRef} socialLinks={socialLinks}/>
      </div>
      <p className="mt-12 mx-4 md:mx-8 text-center md:text-left text-lg md:text-xl text-gray-700 mx-auto">
        {introText}
      </p>
      <SectionLine />
    </section>
  );
};

export default Intro;