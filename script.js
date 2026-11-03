(function () {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-nav]');

  function updateHeader() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 10);
  }

  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuButton.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });
  }

  document.querySelectorAll('[data-year]').forEach(function (year) {
    year.textContent = String(new Date().getFullYear());
  });
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
})();
