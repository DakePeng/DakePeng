import React from 'react';

const CoverImage = ({ coverImg, imageHeight }) => {
  return (
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
  );
};

export default CoverImage;