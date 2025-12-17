script.js
function comprar(produto) {
const msg = `Olá! Quero comprar: ${produto}`;
window.location.href = "https://wa.me/5599999999999?text=" + encodeURIComponent(msg);
}


function filtrar(categoria) {
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
if (categoria === 'tudo' || card.classList.contains(categoria)) {
card.style.display = 'block';
} else {
card.style.display = 'none';
}
});
}