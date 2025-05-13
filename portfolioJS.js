
// Select all elements with the "fade-in" class
const fadeInElements = document.querySelectorAll('.fade-in');

// Set up an IntersectionObserver
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the "visible" class when in view
        entry.target.classList.add('visible');
        // Optionally, unobserve the element to trigger the animation only once
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3// Trigger when 30% of the element is in view
  }
);

// Observe each element
fadeInElements.forEach(element => {
  observer.observe(element);
});

    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');

        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    });


  