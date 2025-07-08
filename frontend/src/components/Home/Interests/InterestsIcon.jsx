import React from 'react';

export default function InterestsIcon({ Component, label, scrollProgress, index }) {
  const delay = index * 0.15;
  let iconProgress = (scrollProgress - delay) / (1 - delay);
  iconProgress = Math.min(Math.max(iconProgress, 0), 1);

  const translateX = 100 - iconProgress * 100;
  const translateY =
    iconProgress < 0.5
      ? -iconProgress * 40
      : -(1 - iconProgress) * 40;

  const opacity = iconProgress;

  return (
    <div
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
}
