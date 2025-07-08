import { Instagram, Linkedin, Mail, Discord } from 'iconoir-react';

export const SOCIAL_ICONS = [
  {
    Component: Linkedin,
    urlProp: 'linkedinUrl',
    ariaLabel: 'LinkedIn',
    hoverColor: 'hover:text-blue-600',
  },
  {
    Component: Mail,
    urlProp: 'email',
    ariaLabel: 'Email',
    hoverColor: 'hover:text-green-600',
    isMailto: true,
  },
  {
    Component: Instagram,
    urlProp: 'instagramUrl',
    ariaLabel: 'Instagram',
    hoverColor: 'hover:text-pink-500',
  }
];

export const BREAKPOINTS = {
  DESKTOP: 768,
};

export const DEBOUNCE_DELAY = 100;