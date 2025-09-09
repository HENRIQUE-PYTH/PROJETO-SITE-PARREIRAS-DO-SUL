
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
const topbarLogo = document.querySelector('.topbar-logo-img');
const heroLogo = document.querySelector('.hero-logo-img');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        document.body.classList.add('scrolled');
        

        // mostra logo imagem na tarja
        if (topbarLogo) topbarLogo.style.display = "inline-block";
        if (heroLogo) heroLogo.style.display = "none";
    } else {
        document.body.classList.remove('scrolled');
        voltarParaHero();

        // mostra logo imagem no hero
        if (topbarLogo) topbarLogo.style.display = "none";
        if (heroLogo) heroLogo.style.display = "inline-block";
    }
});