import SocialIcon from './SocialIcon';
import { SOCIAL_ICONS } from '@constants/socialIcons';

const SocialIconsList = ({ socialLinks }) => {
  return (
    <div className="mx-2 mt-6 flex space-x-8 md:space-x-16">
      {SOCIAL_ICONS.map((iconConfig) => (
        <SocialIcon
          key={iconConfig.ariaLabel}
          iconConfig={iconConfig}
          socialLinks={socialLinks}
        />
      ))}
    </div>
  );
};

export default SocialIconsList;