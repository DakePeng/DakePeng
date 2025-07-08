import React from 'react';
import SocialIconsList from './SocialIconList';
import {PORTFOLIO_CONSTANTS} from '@constants/portfolioData'
const IntroText = ({ textRef, socialLinks }) => {
  return (
    <div
      ref={textRef}
      className="w-full md:w-2/5 flex flex-col justify-center items-center md:items-start"
    >
      <h1 className="text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-extrabold leading-relaxed md:leading-none select-none break-words text-center md:text-left w-full">
        Hey, It's {PORTFOLIO_CONSTANTS.NAME}
      </h1>
      <SocialIconsList socialLinks={socialLinks} />
    </div>
  );
};

export default IntroText;