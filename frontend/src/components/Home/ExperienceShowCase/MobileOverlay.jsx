import { formatExperienceDescription } from '@utils/Home/experienceUtils';
import { EXPERIENCE_CONSTANTS } from '@constants/experienceConstants';

const MobileExperienceOverlay = ({ showMobileDetail, selectedExperience, onBack }) => {
  if (!showMobileDetail || !selectedExperience) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white p-4 md:p-6 overflow-y-auto md:hidden">
      <button
        onClick={onBack}
        aria-label="Go back"
        className="mb-4 text-sm text-blue-700 border border-blue-700 rounded-full px-4 py-1 hover:bg-blue-700 cursor-pointer hover:text-white transition"
      >
        {EXPERIENCE_CONSTANTS.BACK_BUTTON_TEXT}
      </button>
      <h2 className="text-2xl font-bold mb-2">
        {selectedExperience.jobTitle}
      </h2>
      <h3 className="text-xl text-gray-700 mb-1">
        {selectedExperience.company}
      </h3>
      <p className="text-gray-500 mb-4">{selectedExperience.dateRange}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        {formatExperienceDescription(selectedExperience.description)}
      </ul>
    </div>
  );
};

export default MobileExperienceOverlay;