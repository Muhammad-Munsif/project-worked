const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = "Sending...";
  setTimeout(() => {
    status.textContent = "Message sent! ✔️";
    this.reset();
  }, 1000);
});
