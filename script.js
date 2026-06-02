const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.14 });

reveals.forEach(item => revealObserver.observe(item));

const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (event) => {
  glow.style.left = event.clientX + "px";
  glow.style.top = event.clientY + "px";
});

const marquee = document.querySelector(".marquee-track");
if (marquee) {
  marquee.innerHTML += marquee.innerHTML;
}
