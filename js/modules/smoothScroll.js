const smoothScroll = () => {
  const scrollUp = document.querySelector('.scroll-up');
  const header = document.querySelector('.header');
  scrollUp.addEventListener('click', () => header.scrollIntoView({ behavior: 'smooth' }));
};

export default smoothScroll;
