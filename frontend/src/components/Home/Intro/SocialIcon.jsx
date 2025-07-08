import { getSocialIconUrl } from '@utils/Home/socialIcons';

const SocialIcon = ({ iconConfig, socialLinks }) => {
  const { Component, ariaLabel, hoverColor, isMailto } = iconConfig;
  const url = getSocialIconUrl(iconConfig, socialLinks);

  return (
    <a
      href={url}
      target={isMailto ? undefined : '_blank'}
      rel={isMailto ? undefined : 'noopener noreferrer'}
      aria-label={ariaLabel}
      className={`${hoverColor} transition-color`}
    >
      <Component width={36} height={36} />
    </a>
  );
};

export default SocialIcon;