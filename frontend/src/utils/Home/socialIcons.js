export const getSocialIconUrl = (iconConfig, props) => {
  const { urlProp, isMailto } = iconConfig;
  const { email, instagramUrl, linkedinUrl } = props;
  
  if (isMailto) {
    return `mailto:${email}`;
  }
  
  switch (urlProp) {
    case 'instagramUrl':
      return instagramUrl;
    case 'linkedinUrl':
      return linkedinUrl;
    default:
      return '#';
  }
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};