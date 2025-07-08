import { formatExperienceDescription } from '@utils/Home/experienceUtils';
import { EXPERIENCE_CONSTANTS } from '@constants/experienceConstants';

const MobileExperienceOverlay = ({ showMobileDetail, selectedExperience, onBack }) => {
  if (!showMobileDetail || !selectedExperience) return null;
  const renderDescriptionItems = () => {
    if (!selectedExperience?.description) return null;
    const lines = formatExperienceDescription(selectedExperience.description);
    return lines.map((line, idx) => (
      <li className="text-gray-800 whitespace-pre-line" key={idx}>
        {line}
      </li>
    ));
  };
  return (
    <div className="fixed inset-0 z-50 bg-white p-6 md:p-6 overflow-y-auto md:hidden">
      <div className={`fixed bottom-6 left-6 z-50`}>
        <button
            onClick={onBack}
            aria-label="Go back"
            className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
            {EXPERIENCE_CONSTANTS.BACK_BUTTON_TEXT}
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-2">
        {selectedExperience.jobTitle}
      </h2>
      <h3 className="text-xl text-gray-700 mb-1">
        {selectedExperience.company}
      </h3>
      <p className="text-gray-500 mb-4">{selectedExperience.dateRange}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        {renderDescriptionItems()}
      </ul>
    </div>
  );
};

export default MobileExperienceOverlay;