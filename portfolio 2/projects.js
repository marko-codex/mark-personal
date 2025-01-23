// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

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

// Initial page load animations
const textAnimation = {
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "power3.out",
};

// Animate navigation items
gsap.from("nav a", {
  ...textAnimation,
  stagger: 0.1,
  delay: 0.5,
});

// Hover animations for navigation items
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Animate header
gsap.from("header h1", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power4.out",
});

gsap.from("header p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3,
  ease: "power3.out",
});

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

  // Animate project text elements
  const projectTitle = project.querySelector("h2");
  const projectDesc = project.querySelector("p");
  const projectTags = project.querySelectorAll(".px-3");
  const projectLink = project.querySelector("a");

  if (projectTitle) {
    gsap.from(projectTitle, {
      opacity: 0,
      x: -30,
      duration: 1,
      scrollTrigger: {
        trigger: projectTitle,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }

  if (projectDesc) {
    gsap.from(projectDesc, {
      opacity: 0,
      x: -30,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: projectDesc,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }

  if (projectTags.length) {
    gsap.from(projectTags, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectTags[0],
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Add hover effect to project tags
    projectTags.forEach((tag) => {
      tag.addEventListener("mouseenter", () => {
        gsap.to(tag, {
          scale: 1.1,
          backgroundColor: "rgba(147, 51, 234, 0.7)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
      tag.addEventListener("mouseleave", () => {
        gsap.to(tag, {
          scale: 1,
          backgroundColor: "rgba(147, 51, 234, 0.5)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }

  if (projectLink) {
    gsap.from(projectLink, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.4,
      scrollTrigger: {
        trigger: projectLink,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Add hover effect to project links
    projectLink.addEventListener("mouseenter", () => {
      gsap.to(projectLink, {
        scale: 1.05,
        boxShadow: "0 4px 15px rgba(147, 51, 234, 0.3)",
        duration: 0.3,
        ease: "power2.out",
      });
    });
    projectLink.addEventListener("mouseleave", () => {
      gsap.to(projectLink, {
        scale: 1,
        boxShadow: "none",
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }
});

// Contact section animations
gsap.from("#contact h2", {
  opacity: 0,
  y: 30,
  duration: 1,
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from("#contact p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// Add hover effect to contact button
const contactButton = document.querySelector("#contact a");
if (contactButton) {
  contactButton.addEventListener("mouseenter", () => {
    gsap.to(contactButton, {
      scale: 1.05,
      boxShadow: "0 4px 15px rgba(147, 51, 234, 0.3)",
      duration: 0.3,
      ease: "power2.out",
    });
  });
  contactButton.addEventListener("mouseleave", () => {
    gsap.to(contactButton, {
      scale: 1,
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.out",
    });
  });
}

// Footer animations
gsap.from("footer h3", {
  opacity: 0,
  y: 20,
  duration: 0.8,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "footer",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

gsap.from("footer li", {
  opacity: 0,
  y: 15,
  duration: 0.6,
  stagger: 0.05,
  scrollTrigger: {
    trigger: "footer",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

// Add hover effects to footer links
const footerLinks = document.querySelectorAll("footer a");
footerLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      scale: 1.05,
      color: "#fff",
      duration: 0.3,
      ease: "power2.out",
    });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      scale: 1,
      color: "rgba(255, 255, 255, 0.6)",
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Add hover effects to social icons
const socialIcons = document.querySelectorAll("footer .flex.space-x-4 a");
socialIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    gsap.to(icon, {
      scale: 1.2,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      duration: 0.3,
      ease: "power2.out",
    });
  });
  icon.addEventListener("mouseleave", () => {
    gsap.to(icon, {
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      duration: 0.3,
      ease: "power2.out",
    });
  });
});
