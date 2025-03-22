document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((e) => {
      e.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add the 'visible' class when it appears
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    });
  
    const gliders = document.getElementsByClassName("glide-up");
    for (let i = 0; i < gliders.length; i++) { observer.observe(gliders[i]); }
  });
  