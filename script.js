'use strict';

/* ============================================================
   SCROLL REVEAL
   Watches for elements with class "reveal"
   Adds "visible" class when they enter the viewport
============================================================ */
function initReveal() {
  const elements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop watching after first reveal
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((el) => observer.observe(el));
}

/* ============================================================
   NAVBAR SCROLL
   Adds "scrolled" class to navbar when page scrolls down
============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ============================================================
   INIT — Run everything when page loads
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initNavbar();
});