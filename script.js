// =========================================================
// Rein & Fein Niedersachsen — script.js
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".site-nav a");
  const reveals = document.querySelectorAll(".reveal");

  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      header.classList.toggle("is-open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        header.classList.remove("is-open");
      });
    });
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  reveals.forEach((item) => io.observe(item));

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const current = document.body.dataset.page;
  if (current) {
    document
      .querySelectorAll(`.site-nav a[data-page="${current}"]`)
      .forEach((a) => a.classList.add("is-active"));
  }
});
