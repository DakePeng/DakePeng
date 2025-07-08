import { useState, useEffect } from 'react';
import { CAROUSEL_CONFIG } from '@constants/carouselConstants';

export const useCarousel = (projects) => {
  const [centerIndex, setCenterIndex] = useState(2);
  const [animating, setAnimating] = useState(null);
  
  const maxIndex = projects.length - 1;
  const clampIndex = (idx) => Math.min(maxIndex, Math.max(0, idx));

  // Adjust centerIndex if projects change
  useEffect(() => {
    setCenterIndex((prev) => clampIndex(CAROUSEL_CONFIG.DESKTOP_SIDE_COUNT));
  }, [projects.length]);

  const updateCenterIndex = (newIndex) => {
    setCenterIndex(clampIndex(newIndex));
  };

  const animateAndUpdateIndex = (direction, targetIndex) => {
    if (animating) return;
    
    setAnimating(direction);
    setTimeout(() => {
      setCenterIndex(clampIndex(targetIndex));
      setAnimating(null);
    }, CAROUSEL_CONFIG.ANIMATION_DURATION);
  };

  const goToNext = () => {
    if (centerIndex >= maxIndex || animating) return;
    animateAndUpdateIndex('right', centerIndex + 1);
  };

  const goToPrev = () => {
    if (centerIndex <= 0 || animating) return;
    animateAndUpdateIndex('left', centerIndex - 1);
  };

  return {
    centerIndex,
    animating,
    maxIndex,
    updateCenterIndex,
    goToNext,
    goToPrev,
    clampIndex,
  };
};