const numeroWhatsApp = "5541998039906";
let carrinho = JSON.parse(localStorage.getItem("carrinhoTocaDaAgua")) || [];

const listaProdutos = document.getElementById("lista-produtos");
const quantidadeCarrinho = document.getElementById("quantidade-carrinho");
const fundoCarrinho = document.getElementById("fundo-carrinho");
const fundoCheckout = document.getElementById("fundo-checkout");
const itensCarrinho = document.getElementById("itens-carrinho");
const totalCarrinho = document.getElementById("total-carrinho");

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function salvarCarrinho() {
    localStorage.setItem("carrinhoTocaDaAgua", JSON.stringify(carrinho));
}

function renderizarProdutos(categoria = "todos") {
    const produtosFiltrados = categoria === "todos"
        ? produtos
        : produtos.filter(produto => produto.categoria === categoria);

    const renderizarCartao = produto => `
        <article class="cartao-produto">
            <div class="imagem-produto ${produto.imagem ? `tem-imagem ${produto.classeImagem || ""}` : ""}">
                ${produto.imagem
                    ? `<img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">`
                    : `<span aria-hidden="true">${produto.simbolo}</span>`}
            </div>
            <div class="informacoes-produto">
                <span class="categoria-produto">${produto.categoria}</span>
                <h3>${produto.nome}</h3>
                <div class="rodape-produto">
                    <strong>${formatarPreco(produto.preco)}</strong>
                    <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar</button>
                </div>
            </div>
        </article>
    `;

    if (categoria === "alcoolicas") {
        const ehVinho = produto => /^Vinho\b/i.test(produto.nome) || /Espumante/i.test(produto.nome);
        const outrasBebidas = produtosFiltrados.filter(produto => !ehVinho(produto));
        const vinhos = produtosFiltrados.filter(ehVinho);

        listaProdutos.innerHTML = [
            ...outrasBebidas.map(renderizarCartao),
            ...(vinhos.length ? ['<div class="separador-vinhos"><span>Vinhos</span></div>', ...vinhos.map(renderizarCartao)] : [])
        ].join("");
        return;
    }

    listaProdutos.innerHTML = produtosFiltrados.map(renderizarCartao).join("");
}

function adicionarAoCarrinho(id) {
    const produto = produtos.find(item => item.id === id);
    const itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }

    salvarCarrinho();
    atualizarCarrinho();
    abrirCarrinho();
}

function alterarQuantidade(id, alteracao) {
    const item = carrinho.find(produto => produto.id === id);

    if (!item) return;

    item.quantidade += alteracao;

    if (item.quantidade <= 0) {
        carrinho = carrinho.filter(produto => produto.id !== id);
    }

    salvarCarrinho();
    atualizarCarrinho();
}

function calcularTotal() {
    return carrinho.reduce(
        (total, produto) => total + produto.preco * produto.quantidade,
        0
    );
}

function atualizarCarrinho() {
    const quantidadeTotal = carrinho.reduce(
        (total, produto) => total + produto.quantidade,
        0
    );

    quantidadeCarrinho.textContent = quantidadeTotal;
    totalCarrinho.textContent = formatarPreco(calcularTotal());

    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = `<p class="carrinho-vazio">Seu carrinho está vazio.</p>`;
        return;
    }

    itensCarrinho.innerHTML = carrinho.map(produto => `
        <div class="item-carrinho">
            <div class="item-carrinho-info">
                <span class="miniatura-carrinho ${produto.imagem ? `tem-imagem ${produto.classeImagem || ""}` : ""}">
                    ${produto.imagem ? `<img src="${produto.imagem}" alt="">` : produto.simbolo}
                </span>
                <div>
                    <strong>${produto.nome}</strong>
                    <small>${formatarPreco(produto.preco)} cada</small>
                </div>
            </div>
            <div class="controle-quantidade">
                <button onclick="alterarQuantidade(${produto.id}, -1)">−</button>
                <span>${produto.quantidade}</span>
                <button onclick="alterarQuantidade(${produto.id}, 1)">+</button>
            </div>
        </div>
    `).join("");
}

function abrirCarrinho() {
    fundoCarrinho.classList.add("aberto");
    document.body.classList.add("sem-rolagem");
}

function fecharCarrinho() {
    fundoCarrinho.classList.remove("aberto");
    document.body.classList.remove("sem-rolagem");
}

function abrirCheckout() {
    if (carrinho.length === 0) {
        alert("Adicione pelo menos um produto ao carrinho.");
        return;
    }

    fecharCarrinho();
    fundoCheckout.classList.add("aberto");
    document.body.classList.add("sem-rolagem");
}

function fecharCheckout() {
    fundoCheckout.classList.remove("aberto");
    document.body.classList.remove("sem-rolagem");
}

function gerarMensagemWhatsApp(dados) {
    const lista = carrinho.map(produto => {
        const subtotal = produto.preco * produto.quantidade;
        return `${produto.quantidade}x ${produto.nome} — ${formatarPreco(subtotal)}`;
    }).join("\n");

    const mensagem = `Olá! Gostaria de fazer um pedido pela Toca da Água.\n\n` +
        `📦 *PEDIDO*\n\n${lista}\n\n` +
        `────────────────────\n\n` +
        `💰 *Total dos produtos:* ${formatarPreco(calcularTotal())}\n\n` +
        `📍 *DADOS DE ENTREGA*\n\n` +
        `Nome: ${dados.nome}\n` +
        `Telefone: ${dados.telefone}\n` +
        `Bairro: ${dados.bairro}\n` +
        `Endereço: ${dados.endereco}, nº ${dados.numero}\n\n` +
        `💳 *Forma de pagamento:* ${dados.pagamento}\n` +
        `📝 *Observações:* ${dados.observacoes || "Nenhuma"}\n\n` +
        `Aguardo a confirmação do pedido.`;

    return mensagem;
}

document.querySelectorAll(".botao-categoria, .opcao-produto").forEach(botao => {
    botao.addEventListener("click", () => {
        document.querySelectorAll(".botao-categoria").forEach(item => item.classList.remove("ativo"));
        if (botao.classList.contains("botao-categoria")) {
            botao.classList.add("ativo");
        } else {
            document.querySelector(`.botao-categoria[data-categoria="${botao.dataset.categoria}"]`)?.classList.add("ativo");
            document.getElementById("menu-categorias").hidden = true;
            document.getElementById("toggle-menu-produtos").setAttribute("aria-expanded", "false");
            document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
        }
        renderizarProdutos(botao.dataset.categoria);
    });
});

document.getElementById("toggle-menu-produtos").addEventListener("click", event => {
    const menu = document.getElementById("menu-categorias");
    const aberto = event.currentTarget.getAttribute("aria-expanded") === "true";
    event.currentTarget.setAttribute("aria-expanded", String(!aberto));
    menu.hidden = aberto;
});

document.getElementById("abrir-carrinho").addEventListener("click", abrirCarrinho);
document.getElementById("fechar-carrinho").addEventListener("click", fecharCarrinho);
document.getElementById("finalizar-pedido").addEventListener("click", abrirCheckout);
document.getElementById("fechar-checkout").addEventListener("click", fecharCheckout);

fundoCarrinho.addEventListener("click", event => {
    if (event.target === fundoCarrinho) fecharCarrinho();
});

fundoCheckout.addEventListener("click", event => {
    if (event.target === fundoCheckout) fecharCheckout();
});

document.getElementById("formulario-pedido").addEventListener("submit", event => {
    event.preventDefault();

    const dados = {
        nome: document.getElementById("nome").value.trim(),
        telefone: document.getElementById("telefone").value.trim(),
        bairro: document.getElementById("bairro").value.trim(),
        numero: document.getElementById("numero").value.trim(),
        endereco: document.getElementById("endereco").value.trim(),
        pagamento: document.getElementById("pagamento").value,
        observacoes: document.getElementById("observacoes").value.trim()
    };

    const mensagem = gerarMensagemWhatsApp(dados);
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
});

renderizarProdutos();
atualizarCarrinho();
