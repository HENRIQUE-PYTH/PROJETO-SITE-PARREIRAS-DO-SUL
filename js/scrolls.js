// =======================
// Scroll suave nos links
// =======================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({ behavior: 'smooth' });
    });
});

// =======================
// Scroll listener para animação do topbar
// =======================
// pega os elementos logo no início
const topbarLogo = document.querySelector('.topbar-logo-img'); // logo principal
const topbarIcone = document.querySelector('.topbar-logo-icone'); // ícone da tarja
const heroLogo = document.querySelector('.hero-logo-img');
const topbar = document.querySelector('.topbar'); // container da topbar

// Funções para animar as logos
function mostrarLogos() {
    if (!topbarLogo || !topbarIcone) return;

    topbarLogo.classList.remove('slide-up', 'slide-up-out');
    topbarIcone.classList.remove('slide-up', 'slide-up-out');

    // força reflow para reiniciar animação
    void topbarLogo.offsetWidth;
    void topbarIcone.offsetWidth;

    topbarLogo.classList.add('slide-up');
    topbarIcone.classList.add('slide-up');

    topbarLogo.style.display = 'inline-block';
    topbarIcone.style.display = 'inline-block';
}

function esconderLogos() {
    if (!topbarLogo || !topbarIcone) return;

    topbarLogo.classList.remove('slide-up');
    topbarIcone.classList.remove('slide-up');

    void topbarLogo.offsetWidth;
    void topbarIcone.offsetWidth;

    topbarLogo.classList.add('slide-up-out');
    topbarIcone.classList.add('slide-up-out');

    topbarLogo.addEventListener('animationend', () => topbarLogo.style.display = 'none', { once: true });
    topbarIcone.addEventListener('animationend', () => topbarIcone.style.display = 'none', { once: true });
}

// Scroll listener
// Scroll listener
window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        document.body.classList.add('scrolled');

        // anima a entrada somente se ainda não estiver visível
        if (topbarLogo.style.display !== 'inline-block') {
            mostrarLogos();
        }

        heroLogo.style.display = "none";
    } else {
        document.body.classList.remove('scrolled');

        // anima a saída somente se ainda estiver visível
        if (topbarLogo.style.display !== 'none') {
            esconderLogos();
        }

        heroLogo.style.display = "inline-block";
        voltarParaHero();
    }
});

