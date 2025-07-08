import { useState, useEffect } from 'react';
import { useResponsive } from './useResponsive';
import { BREAKPOINTS, DEBOUNCE_DELAY } from '@constants/socialIcons.js';
import { debounce } from '@utils/Home/socialIcons';

export const useResponsiveHeight = (textRef) => {
  const [imageHeight, setImageHeight] = useState('auto');
  const isMobile = useResponsive(BREAKPOINTS.DESKTOP);

  useEffect(() => {
    const updateHeights = () => {
      if (!isMobile && textRef.current) {
        setImageHeight(`${textRef.current.offsetHeight}px`);
      } else {
        setImageHeight('auto');
      }
    };

    const debouncedHandleResize = debounce(updateHeights, DEBOUNCE_DELAY);

    updateHeights();
    window.addEventListener('resize', debouncedHandleResize);
    
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [isMobile, textRef]);

  return imageHeight;
};