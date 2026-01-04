// =======================
// Máscara para telefone
// =======================
const telefone = document.getElementById("telefone");
telefone.addEventListener('input', function(e) {
    let x = e.target.value.replace(/\D/g, '');
    if (x.length > 11) x = x.slice(0, 11);
    x = x.replace(/^(\d{2})(\d)/g, '($1) $2');
    x = x.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = x;
});

// =======================
// Formulário via WhatsApp
// =======================
const whatsappForm = document.getElementById("whatsappForm");
whatsappForm.addEventListener("submit", function(e){
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;
    const numeroVincula = "5561996604875";
    const texto = `Olá, meu nome é ${nome}, meu telefone é ${telefone}. Mensagem: ${mensagem}`;
    const url = `https://wa.me/${numeroVincula}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
    whatsappForm.reset();
});

