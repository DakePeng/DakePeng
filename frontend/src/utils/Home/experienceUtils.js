/**
 * Formats experience description by converting escaped newlines to actual line breaks
 * and returning an array of text lines
 * @param {string} description - The experience description string
 * @returns {string[]} Array of text lines
 */
export const formatExperienceDescription = (description) => {
  if (!description) return [];
  
  return description
    .split("\\n")
    .filter(line => line.trim() !== ''); // Remove empty lines
};

/**
 * Checks if an experience is currently selected
 * @param {Object} experience - The experience object
 * @param {Object} selectedExperience - The currently selected experience
 * @returns {boolean} True if the experience is selected
 */
export const isExperienceSelected = (experience, selectedExperience) => {
  return selectedExperience?._id === experience._id;
};

/**
 * Generates the CSS class for selected experience cards
 * @param {Object} experience - The experience object
 * @param {Object} selectedExperience - The currently selected experience
 * @returns {string} CSS class string
 */
export const getExperienceCardClass = (experience, selectedExperience) => {
  const baseClass = 'cursor-pointer';
  const selectedClass = isExperienceSelected(experience, selectedExperience) 
    ? 'ring-2 ring-blue-500' 
    : '';
  
  return `${baseClass} ${selectedClass}`;
};