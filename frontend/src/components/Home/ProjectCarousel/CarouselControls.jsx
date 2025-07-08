import React from 'react';
import { calculateDotPosition } from '@utils/Home/carousel';

const CarouselControls = ({ 
  barRef, 
  dragging, 
  onBarClick, 
  onDotMouseDown, 
  centerIndex, 
  maxIndex 
}) => {
  const dotPositionPercent = calculateDotPosition(centerIndex, maxIndex);

  return (
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
        aria-valuemax={maxIndex}
        aria-valuenow={centerIndex}
        tabIndex={0}
      />
    </div>
  );
};

export default CarouselControls;