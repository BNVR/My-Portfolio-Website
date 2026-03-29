const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const yearTarget = document.querySelector("#current-year");

if (navToggle && navbar) {
  navToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("menu-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}
