document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger and GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Background Animation
  const createBackgroundAnimation = () => {
    // Create particle-like background effect
    const particleContainer = document.createElement("div");
    particleContainer.style.position = "fixed";
    particleContainer.style.top = "0";
    particleContainer.style.left = "0";
    particleContainer.style.width = "100%";
    particleContainer.style.height = "100%";
    particleContainer.style.pointerEvents = "none";
    particleContainer.style.zIndex = "-1";
    document.body.appendChild(particleContainer);

    // Generate particles
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = `${Math.random() * 5}px`;
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = "rgba(128, 0, 128, 0.3)";
      particle.style.borderRadius = "50%";

      // Randomize initial position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      particleContainer.appendChild(particle);

      // Animate each particle
      gsap.to(particle, {
        x: gsap.utils.random(-50, 50),
        y: gsap.utils.random(-50, 50),
        opacity: [0.2, 0.8, 0.2],
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Gradient background animation
    const gradientSections = document.querySelectorAll(".bg-gradient-to-b");
    gradientSections.forEach((section) => {
      gsap.to(section, {
        backgroundPosition: "0% 100%",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
    });
  };

  // Skill Cards Animation
  const animateSkillCards = () => {
    const skillCards = gsap.utils.toArray(".skill-card");

    skillCards.forEach((card, index) => {
      // Entrance animation
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
          rotation: -5,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.7,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover effect
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(128, 0, 128, 0.3)",
          rotation: 2,
          duration: 0.3,
          ease: "power1.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "none",
          rotation: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    });
  };

  // Section Headers Animation
  const animateSectionHeaders = () => {
    const sectionHeaders = gsap.utils.toArray("section h2");

    sectionHeaders.forEach((header) => {
      gsap.fromTo(
        header,
        {
          opacity: 0,
          x: -50,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  };

  // Skill Tags Animation
  const animateSkillTags = () => {
    const skillTags = gsap.utils.toArray(".skill-card span");

    skillTags.forEach((tag, index) => {
      // Initial animation
      gsap.fromTo(
        tag,
        {
          opacity: 0,
          scale: 0.7,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: tag,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover effect
      tag.addEventListener("mouseenter", () => {
        gsap.to(tag, {
          scale: 1.1,
          backgroundColor: "rgba(255,255,255,0.2)",
          color: "#fff",
          duration: 0.3,
          ease: "power1.out",
        });
      });

      tag.addEventListener("mouseleave", () => {
        gsap.to(tag, {
          scale: 1,
          backgroundColor: "transparent",
          color: tag.style.color,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    });
  };

  // Paragraphs Animation
  const animateParagraphs = () => {
    const paragraphs = gsap.utils.toArray("section p");

    paragraphs.forEach((paragraph, index) => {
      gsap.fromTo(
        paragraph,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraph,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  };

  // Social Icons Animation
  const animateSocialIcons = () => {
    const socialIcons = gsap.utils.toArray("footer a.w-10");

    socialIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          scale: 1.2,
          rotation: 360,
          color: "#8a4fff",
          duration: 0.4,
          ease: "back.out(1.7)",
        });
      });

      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          color: "currentColor",
          duration: 0.4,
          ease: "back.out(1.7)",
        });
      });
    });
  };

  // Initialize All Animations
  const initAnimations = () => {
    createBackgroundAnimation();
    animateSkillCards();
    animateSectionHeaders();
    animateSkillTags();
    animateParagraphs();
    animateMobileMenu();
    animateSocialIcons();
  };
  initAnimations();
});
