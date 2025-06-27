import React, { useRef, useEffect, useState } from 'react';
import CoverPic from '../assets/Cover.jpg';

const CoverScreen = ({ coverImg = CoverPic }) => {
  const textRef = useRef(null);
  const [imageHeight, setImageHeight] = useState('auto');

  useEffect(() => {
    const updateHeights = () => {
      const isDesktop = window.innerWidth >= 768;
      if (isDesktop && textRef.current) {
        setImageHeight(`${textRef.current.offsetHeight}px`);
      } else {
        setImageHeight('auto');
      }
    };

    updateHeights(); // run on mount
    window.addEventListener('resize', updateHeights);
    return () => window.removeEventListener('resize', updateHeights);
  }, []);

  return (
    <div className="flex flex-col md:flex-row mt-28 md:mt-32 px-4 md:px-8 w-full max-w-6xl mx-auto items-start gap-6 lg: gap-12">
      {/* Image container */}
      <div
        className="w-full md:w-3/5 overflow-hidden rounded-lg"
        style={{ height: imageHeight }}
      >
        <img
          src={coverImg}
          alt="Cover"
          className="object-cover w-full h-full object-bottom"
        />
      </div>

      {/* Text container */}
      <div
        ref={textRef}
        className="w-full md:w-2/5 flex flex-col justify-center items-start"
      >
        <h1 className="text-6xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-extrabold leading-none select-none break-words text-left w-full">
          Hey, It's Dake
        </h1>
        <p className="mt-6 text-xl text-left w-full">
          I'm a software engineer with a passion for building innovative solutions. I love tackling complex problems and creating user-friendly applications.
        </p>
      </div>
    </div>
  );
};

export default CoverScreen;
