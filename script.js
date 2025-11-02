const yearEl = document.querySelector('.year');
const currYear = new Date().getFullYear();
yearEl.textContent = currYear;

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');

    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});

///sticky navigation
