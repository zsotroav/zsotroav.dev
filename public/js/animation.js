document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((e) => {
      e.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add the 'visible' class when it appears
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    });
  
    const aniclasses = [ "a-glide-up", "a-ease-in" ];

    aniclasses.forEach(c => {
      const animated = document.getElementsByClassName(c);
      for (let i = 0; i < animated.length; i++) { observer.observe(animated[i]); }
    });
  });
  