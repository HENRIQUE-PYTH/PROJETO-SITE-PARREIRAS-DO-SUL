// =======================
// Animação Hero e Tarja
// =======================

const topbarNome = document.querySelector('.topbar-nome');
const heroFrase = document.querySelector('.hero-frase');
const heroNome = document.querySelector('.hero-nome');

const textoNome = "PARREIRAS DO SUL";
const textoParreiras = "PARREIRAS";
const textoDoSul = " do Sul";
const textoFrase = "O sabor da tradição, direto das nossas vinícolas.";
const letrasNome = textoNome.split('');

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
  heroNome.textContent = textoNome;
  heroFrase.textContent = textoFrase;

  // adiciona classes de animação de entrada
  heroNome.classList.add('slide-up');
  heroFrase.classList.add('slide-up');
  heroNome.style.fontSize = "3rem"; 
  heroFrase.style.fontSize = "2rem";

}





// Transfere para tarja (com animação de saída)
function transferirParaTarja() {
  if (estado === 'topbar') return;
  estado = 'topbar';

  // Adiciona animação de saída
  heroNome.classList.add('slide-up-out');
  heroFrase.classList.add('slide-up-out');

  // Remove texto e classe ao fim da animação
  const limparHero = (elemento) => {
    elemento.addEventListener('animationend', function handler() {
      elemento.textContent = '';
      elemento.classList.remove('slide-up-out');
      elemento.removeEventListener('animationend', handler);
    });
  };

  limparHero(heroNome);
  limparHero(heroFrase);

  topbarNome.textContent = '';

  const spanParreiras = document.createElement('span');
  spanParreiras.textContent = "PARREIRAS"; 
  spanParreiras.style.fontFamily = "'Cinzel', serif";
  spanParreiras.style.color = "#000";
  spanParreiras.style.display = "inline-block";
  spanParreiras.style.fontSize = "56px"; // aumenta o tamanho da palavra

  const spanDoSul = document.createElement('span');
  spanDoSul.textContent = " do Sul"; // espaço incluído
  spanDoSul.style.fontFamily = "'Parisienne', cursive";
  spanDoSul.style.color = "#B8860B"; // interior dourado

  //  spanDoSul.style.webkitTextStroke = "1pxrgb(182, 25, 25)"; // contorno 

  spanDoSul.style.display = "inline-block";
  spanDoSul.style.marginLeft = "10px"; // espaço entre palavras
  spanDoSul.style.fontSize = "67px";
  spanDoSul.style.textTransform = "none"; // capitalização correta


  topbarNome.appendChild(spanParreiras);
  topbarNome.appendChild(spanDoSul);

  topbarNome.classList.add('slide-up');
}







// console.log(">> Tentando escrever na tarja:", textoNome);
// escreverTexto(topbarNome, textoNome, 100, () => {
//   console.log(">> Texto final na tarja:", topbarNome.textContent);
// });


// Volta para o hero
function voltarParaHero() {
  if (estado === 'hero') return;
  estado = 'hero';
  topbarNome.textContent = '';
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
