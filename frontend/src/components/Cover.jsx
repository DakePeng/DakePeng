import React, { useRef, useEffect, useState } from 'react';
import CoverPic from '../assets/Cover.jpg';

const CoverScreen = ({ coverImg }) => {
  const textRef = useRef(null);
  const [textHeight, setTextHeight] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row mt-32 p-8 w-2/3 mx-auto items-start">
      
      {/* Image container with height equal to text */}
      <div className="md:w-3/5 flex-shrink-0" style={{ height: textHeight || 'auto' }}>
        <img
          src={coverImg}
          alt="Cover"
          className="rounded-lg object-cover w-full h-full"
          style={{ objectPosition: 'bottom right' }}
        />
      </div>

      {/* Text container */}
      <div
        ref={textRef}
        className="md:w-2/5 w-full flex flex-col justify-center items-start md:ml-8"
      >
        <h1 className="text-[8rem] md:text-[12rem] font-extrabold leading-none select-none break-words text-left w-full -ml-[4px]">
          Hey, It's Dake
        </h1>
        <p className="mt-4 text-base text-left w-full">
          I'm a software engineer with a passion for building innovative solutions. I love tackling complex problems and creating user-friendly applications.
        </p>
      </div>
    </div>
  );
};

CoverScreen.defaultProps = {
  coverImg: CoverPic,
};

export default CoverScreen;
