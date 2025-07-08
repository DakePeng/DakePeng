import { formatExperienceDescription } from '../utils/experienceUtils';
import { EXPERIENCE_CONSTANTS } from '../constants/experienceConstants';

const ExperienceDetailView = ({ selectedExperience }) => {
  return (
    <div className="hidden md:flex flex-1 bg-white rounded-xl p-6 shadow-md max-h-[32rem] overflow-y-auto mt-4 md:mt-0">
      {selectedExperience ? (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {selectedExperience.jobTitle}
          </h2>
          <h3 className="text-xl md:text-2xl text-gray-700 mb-2">
            {selectedExperience.company}
          </h3>
          <p className="text-gray-500 mb-6">{selectedExperience.dateRange}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {formatExperienceDescription(selectedExperience.description)}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500">{EXPERIENCE_CONSTANTS.SELECT_EXPERIENCE_MESSAGE}</p>
      )}
    </div>
  );
};

export default ExperienceDetailView;