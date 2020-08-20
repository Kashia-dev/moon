
function burgerMenu(selector) {
  let menu = $(selector);
  let button = $('.burger-menu_btn');
  let links = $('.burger-menu_link');
  let overlay = $('.burger-menu_overlay');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('burger-menu_active');
    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overfloy', 'hiden');
    } else {
      $('body').css('overfloy', 'visible');
    }
  }
}

burgerMenu ('.burger-menu');