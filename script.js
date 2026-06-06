// 🌸 entrar no jardim
function enterGarden() {
  document.getElementById("intro").style.display = "none";

  // música (precisa clique do usuário)
  const music = document.getElementById("music");
  if (music) music.play();

  startPetals();
  revealSections();
}

// 🌿 revelar seções no scroll
function revealSections() {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => observer.observe(sec));
}

// 🌬️ pétalas leves (sem lag)
function startPetals() {
  const container = document.getElementById("petals");

  for (let i = 0; i < 18; i++) {
    createPetal(container);
  }

  setInterval(() => {
    createPetal(container);
  }, 800);
}

function createPetal(container) {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (5 + Math.random() * 5) + "s";
  petal.style.opacity = Math.random();

  container.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}
