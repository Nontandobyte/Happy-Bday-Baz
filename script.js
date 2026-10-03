function openSurprise() {
  document.querySelector(".birthday-section").scrollIntoView({
    behavior: "smooth"
  });
}

function makeWish() {
  const message = document.getElementById("wish-message");
  message.style.display = "block";

  for (let i = 0; i < 45; i++) {
    createSparkle();
  }
}

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.textContent = ["✦", "♡", "✧", "•"][Math.floor(Math.random() * 4)];

  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 60 + "vh";
  sparkle.style.fontSize = (Math.random() * 20 + 12) + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1800);
}

// Fade sections in as they enter the screen.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".reveal").forEach((section) => {
  observer.observe(section);
});
