// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Project reveal animations
gsap.utils.toArray(".project-reveal").forEach((project) => {
  gsap.from(project, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: project,
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none reverse",
    },
  });
});

// Mobile Navigation
const mobileMenuBtn = document.querySelector("[data-mobile-menu-btn]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

function closeMobileMenu() {
  mobileMenuBtn.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("translate-x-0", "opacity-100");
  mobileMenu.classList.add("translate-x-full", "opacity-0");
}

if (mobileMenuBtn && mobileMenu) {
  // Toggle menu on button click
  mobileMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
    mobileMenuBtn.setAttribute("aria-expanded", !isExpanded);

    // Toggle menu visibility with opacity and transform
    if (!isExpanded) {
      mobileMenu.classList.remove("translate-x-full", "opacity-0");
      mobileMenu.classList.add("translate-x-0", "opacity-100");
    } else {
      closeMobileMenu();
    }
  });

  // Close menu when clicking on menu items
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      mobileMenuBtn.getAttribute("aria-expanded") === "true" &&
      !mobileMenu.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });
}
