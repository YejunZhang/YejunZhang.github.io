const year = document.querySelector("#current-year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const sectionLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        sectionLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: 0.1 }
  );

  sections.forEach((section) => observer.observe(section));
}

const printButton = document.querySelector("#print-page");
if (printButton) {
  printButton.addEventListener("click", () => window.print());
}
