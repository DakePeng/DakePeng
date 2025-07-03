import React, { useRef, useEffect, useState } from 'react';

import SectionLine from './SectionLine';
import { Instagram, Linkedin, Mail, Discord } from 'iconoir-react';

const icons = [
  {
    Component: Linkedin,
    urlProp: 'linkedinUrl',
    ariaLabel: 'LinkedIn',
    hoverColor: 'hover:text-blue-600',
  },
  {
    Component: Mail,
    urlProp: 'email',
    ariaLabel: 'Email',
    hoverColor: 'hover:text-green-600',
    isMailto: true,
  },
  {
    Component: Instagram,
    urlProp: 'instagramUrl',
    ariaLabel: 'Instagram',
    hoverColor: 'hover:text-pink-500',
  }
];

const Intro = ({coverImg, instagramUrl, linkedinUrl, email, discordUrl, introText}) => {
  const textRef = useRef(null);
  const [imageHeight, setImageHeight] = useState('auto');

  useEffect(() => {
    let timeoutId;
    const updateHeights = () => {
      const isDesktop = window.innerWidth >= 768;
      if (isDesktop && textRef.current) {
        setImageHeight(`${textRef.current.offsetHeight}px`);
      } else {
        setImageHeight('auto');
      }
    };

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateHeights, 100);
    };

    updateHeights();
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="intro" className="max-w-6xl mx-auto px-6 scroll-mt-20">
      <div className="flex flex-col md:flex-row mt-28 md:mt-32 px-4 md:px-8 w-full max-w-6xl mx-auto items-start gap-6 lg:gap-12">
        {/* Image container */}
        <div
          className="w-full md:w-3/5 overflow-hidden rounded-lg aspect-square md:aspect-auto"
          style={{ height: imageHeight }}
        >
          <img
            src={coverImg}
            alt="Cover"
            className="object-cover w-full h-full object-bottom object-right"
          />
        </div>

        {/* Text container */}
        <div
          ref={textRef}
          className="w-full md:w-2/5 flex  flex-col justify-center items-center md:items-start"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-extrabold leading-relaxed md:leading-none select-none break-words text-center md:text-left w-full">
            Hey, It's Dake
          </h1>

          {/* Icons container */}
          <div className="mx-2 mt-6 flex space-x-8 md:space-x-16">
            {icons.map(({ Component, urlProp, ariaLabel, hoverColor, isMailto }) => {
              const url = isMailto
                ? `mailto:${email}`
                : urlProp === 'instagramUrl'
                ? instagramUrl
                : urlProp === 'linkedinUrl'
                ? linkedinUrl
                : urlProp === 'discordUrl'
                ? discordUrl
                : '#';

              return (
                <a
                  key={ariaLabel}
                  href={url}
                  target={isMailto ? undefined : '_blank'}
                  rel={isMailto ? undefined : 'noopener noreferrer'}
                  aria-label={ariaLabel}
                  className={`${hoverColor} transition-color`}
                >
                  <Component width={36} height={36} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <p className="mt-12 mx-4 md:mx-8 text-center md:text-left text-lg md:text-xl text-gray-700 mx-auto">
        {introText}
      </p>
      <SectionLine />
    </section>
  );
}

export default Intro;
