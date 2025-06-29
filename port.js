// Make only one nav link active at a time
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active')); // Remove from all
    link.classList.add('active'); // Add to clicked one
  });
});
