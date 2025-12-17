gdf<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Blox Fruits Store</title>
<link rel="stylesheet" href="style.css">
</head>
<body>


<div class="layout">


<aside class="menu">
<h2>📂 Categorias</h2>
<button onclick="filtrar('tudo')">🏠 Todos</button>
<button onclick="filtrar('fruta')">🍍 Só Frutas</button>
<button onclick="filtrar('conta')">👤 Contas</button>
<button onclick="filtrar('nivel')">📈 Conta com Nível</button>
<button onclick="filtrar('combo')">🔥 Conta + Fruta</button>
<button onclick="filtrar('item')">🎒 Itens</button>
</aside>


<main>
<header>
<h1>⚔️ Blox Fruits Store ⚔️</h1>
<p>Dark Gamer • Loja Profissional</p>
</header>


<section class="produtos">


<!-- FRUTAS (exemplo de várias) -->
<div class="card fruta"><div class="icone">🍍</div><h3>Leopard</h3><span>R$120</span><button onclick="comprar('Fruta Leopard')">Comprar</button></div>
<div class="card fruta"><div class="icone">🐉</div><h3>Dragon</h3><span>R$130</span><button onclick="comprar('Fruta Dragon')">Comprar</button></div>
<div class="card fruta"><div class="icone">🦊</div><h3>Kitsune</h3><span>R$150</span><button onclick="comprar('Fruta Kitsune')">Comprar</button></div>
<div class="card fruta"><div class="icone">💎</div><h3>Dough</h3><span>R$100</span><button onclick="comprar('Fruta Dough')">Comprar</button></div>
<div class="card fruta"><div class="icone">☠️</div><h3>Venom</h3><span>R$110</span><button onclick="comprar('Fruta Venom')">Comprar</button></div>


<!-- CONTAS -->
<div class="card conta"><div class="icone">👤</div><h3>Conta Nova</h3><span>R$20</span><button onclick="comprar('Conta Nova')">Comprar</button></div>
<div class="card conta"><div class="icone">👤</div><h3>Conta Média</h3><span>R$40</span><button onclick="comprar('Conta Média')">Comprar</button></div>
<div class="card conta"><div class="icone">👤</div><h3>Conta Avançada</h3><span>R$60</span><button onclick="comprar('Conta Avançada')">Comprar</button></div>


<!-- CONTA COM NÍVEL -->
<div class="card nivel"><div class="icone">📈</div><h3>Lv 500</h3><span>R$50</span><button onclick="comprar('Conta Lv 500')">Comprar</button></div>
<div class="card nivel"><div class="icone">📈</div><h3>Lv 1000</h3><span>R$90</span><button onclick="comprar('Conta Lv 1000')">Comprar</button></div>
<div class="card nivel"><div class="icone">📈</div><h3>Lv 1500</h3><span>R$130</span><button onclick="comprar('Conta Lv 1500')">Comprar</button></div>


<!-- COMBOS -->
<div class="card combo"><div class="icone">🔥</div><h3>Lv 1000 + Dough</h3><span>R$180</span><button onclick="comprar('Lv1000 + Dough')">Comprar</button></div>
<div class="card combo"><div class="icone">🔥</div><h3>Lv 1500 + Leopard</h3><span>R$250</span><button onclick="comprar('Lv1500 + Leopard')">Comprar</button></div>
<div class="card combo"><div class="icone">🔥</div><h3>Lv Max + Dragon</h3><span>R$300</span><button onclick="comprar('Lv Max + Dragon')">Comprar</button></div>


<!-- ITENS -->
<div class="card item"><div class="icone">🎒</div><h3>Dark Blade</h3><span>R$60</span><button onclick="comprar('Item Dark Blade')">Comprar</button></div>
<div class="card item"><div class="icone">🎒</div><h3>Game Pass</h3><span>R$50</span><button onclick="comprar('Game Pass')">Comprar</button></div>
<div class="card item"><div class="icone">🎒</div><h3>Boost XP</h3><span>R$30</span><button onclick="comprar('Boost XP')">Comprar</button></div>


<!-- (Você pode duplicar esses cards até passar de 20 em cada categoria) -->


</section>
</main>
</div>


<script src="script.js"></script>
</body>
</html>
html, body {
margin: 0; padding: 0; background: #000; color: #eaeaea;
font-family: 'Segoe UI', sans-serif;
}


.layout {
display: flex;
}


.menu {
width: 220px;
background: #050505;
padding: 20px;
box-shadow: 0 0 20px #0077ff;
}


.menu h2 { color: #00aaff; }


.menu button {
width: 100%; margin: 6px 0; padding: 10px;
background: #001f3f; color: #00aaff;
border: none; border-radius: 6px; cursor: pointer;
}


.menu button:hover { background: #0077ff; color: black; }


main { flex: 1; }


header {
text-align: center; padding: 25px;
box-shadow: 0 0 20px #0077ff;
}


.produtos {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 20px; padding: 30px;
}


.card {
background: linear-gradient(180deg, #050505, #0a1a2f);
border-radius: 16px; padding: 20px; text-align: center;
box-shadow: 0 0 15px rgba(0,119,255,.4);
}


.icone { font-size: 40px; margin-bottom: 8px; }


span { display: block; margin: 8px 0; font-size: 18px; color: #00aaff; }


button {
background: linear-gradient(90deg, #0077ff, #00aaff);
border: none; padding: 8px; width: 100%; border-radius: 8px;
font-weight: bold; cursor: pointer;
}
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
