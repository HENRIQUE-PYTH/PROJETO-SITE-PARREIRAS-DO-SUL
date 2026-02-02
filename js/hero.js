// =======================
// Animação Hero e Tarja
// =======================

const heroFrase = document.querySelector('.hero-frase');

const textoFrase = "O sabor da tradição, direto das nossas vinícolas.";
let estado = 'hero';

// Escreve letra por letra em um elemento
function escreverTexto(elemento, texto, delay = 100, callback = null) {
  elemento.textContent = '';
  texto.split('').forEach((letra, i) => {
    setTimeout(() => {
      elemento.textContent = texto.slice(0, i + 1);
      if (i === texto.length - 1 && callback) callback();
    }, i * delay);
  });
}

// Mostra no hero (nova versão com animação de baixo para cima)
function mostrarHero() {
  heroFrase.textContent = textoFrase;
  // adiciona classes de animação de entrada
  heroFrase.classList.add('slide-up');

}


// Transfere para tarja (com animação de saída)
function transferirParaTarja() {
  if (estado === 'topbar') return;
  estado = 'topbar';

  // Adiciona animação de saída
  heroFrase.classList.add('slide-up-out');

  // Remove texto e classe ao fim da animação
  const limparHero = (elemento) => {
    elemento.addEventListener('animationend', function handler() {
      elemento.textContent = '';
      elemento.classList.remove('slide-up-out');
      elemento.removeEventListener('animationend', handler);
    });
  };

  // limparHero(heroNome);
  limparHero(heroFrase);

}



// Volta para o hero
function voltarParaHero() {
  if (estado === 'hero') return;
  estado = 'hero';

  // Limpa texto e animações anteriores
  heroFrase.textContent = '';
  heroFrase.classList.remove('slide-up', 'slide-up-out');

  // Força reflow para reiniciar animação
  void heroFrase.offsetWidth;

  // Mostra novamente com animação
  mostrarHero();
}



// Inicia animação do hero ao carregar
window.addEventListener('load', () => {
  const heroContent = document.querySelector('.hero-content');
  heroContent.classList.add('visible');
  mostrarHero();
});

// Detecta scroll para transferir nome para tarja
window.addEventListener('scroll', () => {
  if (window.scrollY > 32) {
    transferirParaTarja();
    document.body.classList.add('scrolled');
  } else {
    voltarParaHero();
    document.body.classList.remove('scrolled');
  }
});
