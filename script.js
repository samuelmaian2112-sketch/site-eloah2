const intro = document.getElementById("intro");
const garden = document.getElementById("garden");
const music = document.getElementById("music");

/* 🌸 ENTRAR NO JARDIM */
function enterGarden() {
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    garden.style.opacity = "1";

    startMusic();
    startPetals();
    startScrollReveal();
  }, 1200);
}

/* 🎵 MÚSICA */
function startMusic() {
  if (!music) return;

  music.volume = 0.2;
  music.play().catch(() => {
    // bloqueio de autoplay (normal no navegador)
    console.log("Usuário precisa interagir para tocar áudio");
  });
}

/* 🌬️ PÉTALAS LEVES */
function startPetals() {
  const container = document.getElementById("petals");

  // cria inicial
  for (let i = 0; i < 18; i++) {
    createPetal(container);
  }

  // continua criando
  setInterval(() => {
    createPetal(container);
  }, 600);
}

function createPetal(container) {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (4 + Math.random() * 5) + "s";
  petal.style.opacity = Math.random();

  container.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 9000);
}

/* 🌿 APARECER SEÇÕES NO SCROLL */
function startScrollReveal() {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(sec => observer.observe(sec));
}
