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


// Hero Animations
gsap.to("#heroTitle", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power4.out",
});

gsap.to("#heroSubtitle", {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0.5,
  ease: "power4.out",
});

// Projects Animation
gsap.to("#projectsTitle", {
  scrollTrigger: {
    trigger: "#projectsTitle",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
  opacity: 1,
  y: 0,
});

// Skills Animation
gsap.to("#skillsTitle", {
  scrollTrigger: {
    trigger: "#skillsTitle",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
  opacity: 1,
  y: 0,
});

// Skill Cards Animation
document.querySelectorAll(".skill-card").forEach((card, index) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
    opacity: 1,
    y: 0,
    delay: index * 0.2,
  });
});

// Particle Animation
function createParticles() {
  const particles = document.getElementById("particles");
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "absolute w-2 h-2 bg-white rounded-full";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.opacity = Math.random();
    particles.appendChild(particle);

    gsap.to(particle, {
      y: -100,
      opacity: 0,
      duration: Math.random() * 3 + 2,
      repeat: -1,
      ease: "none",
      delay: Math.random() * 2,
    });
  }
}

createParticles();

// Skill bars animation
function animateSkillBars() {
  const skills = {
    HTML: 100,
    CSS: 100,
    JavaScript: 60,
    Tailwind: 60,
    React: 30,
  };

  const skillBars = document.querySelectorAll(".skill-bar");
  skillBars.forEach((bar) => {
    const skillName =
      bar.parentElement.parentElement.querySelector("span").textContent;
    const percentage = skills[skillName];
    gsap.to(bar, {
      width: `${percentage}%`,
      duration: 1.5,
      ease: "power2.out",
    });
  });
}

// Reset and animate skill bars every 10 seconds
function resetAndAnimateSkills() {
  const skillBars = document.querySelectorAll(".skill-bar");
  skillBars.forEach((bar) => {
    gsap.set(bar, { width: 0 });
  });
  animateSkillBars();
}

// Initial animation
animateSkillBars();

// Set up the interval
setInterval(resetAndAnimateSkills, 10000);

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 0) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
});

const containers = document.querySelectorAll(".text-container");
let currentIndex = 0;

function animateText() {
  const current = containers[currentIndex];
  const next = containers[(currentIndex + 1) % containers.length];

  // Fade out current text
  gsap.to(current, {
    opacity: 0,
    y: -50,
    duration: 0.7,
    ease: "power2.inOut",
  });

  // Fade in next text
  gsap.fromTo(
    next,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.inOut",
    }
  );

  // Update index
  currentIndex = (currentIndex + 1) % containers.length;
}

// Initial state
gsap.set(containers[0], { opacity: 1, y: 0 });

// Start animation loop
setInterval(animateText, 3000);
