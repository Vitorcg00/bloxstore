<!DOCTYPE html>
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
