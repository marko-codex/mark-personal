//  Georgia time zone digital clock
function updateGeorgiaTime() {
  const timeElement = document.getElementById("time");
  const options = {
    timeZone: "Asia/Tbilisi",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  const georgiaTime = new Date().toLocaleTimeString("en-US", options);
  timeElement.textContent = georgiaTime;
}

//  time every second
setInterval(updateGeorgiaTime, 1000);
updateGeorgiaTime(); // Initial call

// Skills data
const skills = ["JavaScript", "HTML/CSS", "Tailwindcss", "React", "Next.js", "Typescript"];

// Projects data
const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with modern web technologies.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
];

// Populate skills grid
const skillsGrid = document.getElementById("skills-grid");
skills.forEach((skill) => {
  const skillElement = document.createElement("div");
  skillElement.className =
    "bg-white/5 p-4 rounded-lg text-center  hover:bg-white/10 transition-all hover:scale-105";
  skillElement.textContent = skill;
  skillsGrid.appendChild(skillElement);
});

// Populate projects grid
const projectsGrid = document.getElementById("projects-grid");
projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.className =
    "bg-white/5 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform";
  projectElement.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">${project.title}</h3>
      <p class="text-gray-300 mb-4">${project.description}</p>
      <a href="#" class="inline-flex items-center text-blue-400 hover:text-blue-300 hover:scale-105 transition-transform">
        View Project
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 ml-2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" x2="21" y1="14" y2="3"/>
        </svg>
      </a>
    </div>
  `;
  projectsGrid.appendChild(projectElement);
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Observe all elements with data-animate attribute
document.querySelectorAll("[data-animate]").forEach((element) => {
  element.style.transition = "all 0.6s ease-out";
  observer.observe(element);
});
