window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0; 
      if (isVisible) {
        section.classList.add("visible"); 
      }
    });
  });