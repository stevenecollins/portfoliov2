// Responsive Navigation Menu //
const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');
const header = document.querySelector('header');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('show'); // change 'is-active' to 'show'
    header.classList.toggle('header-mobile');
  });
} else {
  console.error("Couldn't find the hamburger menu button or the mobile navigation menu in the document.");
}
// END Responsive Navigation Menu //

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('is-scrolling');
  } else {
    header.classList.remove('is-scrolling');
  }
});

// Light & Dark Mode
// Check if the Site theme is set to light-mode
function isLight() {
  return localStorage.getItem("light-mode") !== null;
}

// Toggle the theme
function toggleTheme() {
  const root = document.querySelector(":root");
  root.classList.toggle("light");

  if (root.classList.contains("light")) {
    localStorage.setItem("light-mode", "set");
  } else {
    localStorage.removeItem("light-mode");
  }
}

if (isLight()) {
  toggleTheme();
}

document.querySelector(".theme-icon").addEventListener("click", toggleTheme);

// END Light & Dark Mode