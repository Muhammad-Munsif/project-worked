// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  // Change hamburger icon based on menu state
  const icon = hamburger.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.querySelector("i").classList.remove("fa-times");
    hamburger.querySelector("i").classList.add("fa-bars");
  });
});

// Form Submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const status = document.getElementById("form-status");
    status.textContent = "Sending your message...";
    status.style.color = "#4dabf7";

    // Simulate form submission
    setTimeout(() => {
      status.innerHTML =
        '<i class="fas fa-check-circle"></i> Message sent successfully! We\'ll get back to you soon.';
      status.style.color = "#2ecc71";
      this.reset();
    }, 1500);
  });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
