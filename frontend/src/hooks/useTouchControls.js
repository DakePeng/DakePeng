import { useRef } from 'react';
import { CAROUSEL_CONFIG } from '@constants/carouselConstants';

export const useTouchControls = (clampIndex, updateCenterIndex) => {
  const touchStartX = useRef(null);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - touchStartX.current;

    if (diffX > CAROUSEL_CONFIG.SWIPE_THRESHOLD) {
      // swipe right -> move carousel left (decrement centerIndex)
      updateCenterIndex((prev) => clampIndex(prev - 1));
    } else if (diffX < -CAROUSEL_CONFIG.SWIPE_THRESHOLD) {
      // swipe left -> move carousel right (increment centerIndex)
      updateCenterIndex((prev) => clampIndex(prev + 1));
    }
    touchStartX.current = null;
  };

  return {
    onTouchStart,
    onTouchEnd,
  };
};