const toggleMenu = () => {
  const menu = document.querySelector('.menu');

  const openMenu = () => menu.classList.add('open');
  const closeMenu = () => menu.classList.remove('open');
  
  document.body.onclick = event => {
    const target = event.target;
    const menuList = target.closest('.menu-list');
    const burger = target.closest('.burger');
    const menuClose = target.closest('.menu-close');
  
    if (burger) {
      openMenu();
    }
  
    if (menuClose || (!menuList && !burger)) {
      closeMenu();
    }
  
  };

  window.addEventListener('resize', () => {
    if (window.innerWidth > 830) {
      closeMenu();
    }
  });
};

export default toggleMenu;