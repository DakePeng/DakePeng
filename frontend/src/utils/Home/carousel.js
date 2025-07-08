import { FAN_STYLES_DESKTOP, CAROUSEL_CONFIG } from '@constants/carouselConstants';

export const getCardTransform = (index, centerIndex, sideCount) => {
  const tempIndex = index - centerIndex + sideCount;
  return FAN_STYLES_DESKTOP[tempIndex];
};

export const shouldRenderCard = (index, centerIndex, sideCount) => {
  return index <= centerIndex + sideCount && index >= centerIndex - sideCount;
};

export const calculateDotPosition = (centerIndex, maxIndex) => {
  return (centerIndex / maxIndex) * 100;
};

export const handleCardClick = (index, centerIndex, project, updateCenterIndex) => {
  if (index === centerIndex && project?.postLink) {
    window.open(project.postLink);
  } else {
    updateCenterIndex(index);
  }
};

export const getSideCount = (isMobile) => {
  return isMobile ? CAROUSEL_CONFIG.MOBILE_SIDE_COUNT : CAROUSEL_CONFIG.DESKTOP_SIDE_COUNT;
};