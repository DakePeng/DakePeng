export const scrollToElement = (href, offset = -150) => {
  const target = document.querySelector(href);
  if (target) {
    const y = target.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};