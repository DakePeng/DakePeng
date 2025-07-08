import { useState } from 'react';

export const useExperienceNavigation = (onSelectExperience) => {
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  const handleSelect = (exp) => {
    onSelectExperience(exp);
    setShowMobileDetail(true); // Show overlay on mobile
  };

  const handleBack = () => {
    setShowMobileDetail(false);
  };

  return {
    showMobileDetail,
    handleSelect,
    handleBack
  };
};