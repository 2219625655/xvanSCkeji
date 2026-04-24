const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const honorsAccordion = document.getElementById("honorsAccordion");

if (honorsAccordion) {
  const items = Array.from(honorsAccordion.querySelectorAll(".accordion-item"));

  const updateAccordion = (activeItem) => {
    items.forEach((item) => {
      const header = item.querySelector(".accordion-header");
      const content = item.querySelector(".accordion-content");
      const isActive = item === activeItem;
      item.classList.toggle("active", isActive);
      if (header) {
        header.setAttribute("aria-expanded", String(isActive));
      }
      if (content) {
        content.style.maxHeight = isActive ? `${content.scrollHeight}px` : "0px";
      }
    });
  };

  const defaultActive = honorsAccordion.querySelector(".accordion-item.active") || items[0];
  if (defaultActive) {
    updateAccordion(defaultActive);
  }

  items.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    if (!header) return;
    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      updateAccordion(isActive ? null : item);
    });
  });
}
