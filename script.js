// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Simple contact form submit handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Thanks for reaching out, " + document.getElementById("name").value + "!"
  );
  this.reset();
});
