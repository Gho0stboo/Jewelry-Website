// Seleciona os elementos dos filtros
const filtroCategoria = document.getElementById('categoria');
const filtroOrdenacao = document.getElementById('ordenacao');

// Seleciona o container dos produtos
const produtosContainer = document.querySelector('.produto-lista-grid');

// Função para filtrar os produtos por categoria
function filtrarPorCategoria() {
    const categoriaSelecionada = filtroCategoria.value; // Obtém a categoria selecionada
    const produtos = document.querySelectorAll('.produto-lista'); // Seleciona todos os produtos

    produtos.forEach(produto => {
        const categoriaProduto = produto.getAttribute('data-categoria'); // Obtém a categoria do produto

        // Mostra ou esconde o produto com base na categoria selecionada
        if (categoriaSelecionada === 'todos' || categoriaProduto === categoriaSelecionada) {
            produto.style.display = 'block'; // Mostra o produto
        } else {
            produto.style.display = 'none'; // Esconde o produto
        }
    });
}

// Função para ordenar os produtos por preço
function ordenarPorPreco() {
    const ordenacaoSelecionada = filtroOrdenacao.value; // Obtém a ordenação selecionada
    const produtos = Array.from(document.querySelectorAll('.produto-lista')); // Converte NodeList para Array

    produtos.sort((a, b) => {
        const precoA = parseFloat(a.getAttribute('data-preco')); // Obtém o preço do produto A
        const precoB = parseFloat(b.getAttribute('data-preco')); // Obtém o preço do produto B

        if (ordenacaoSelecionada === 'preco-asc') {
            return precoA - precoB; // Ordena do menor para o maior
        } else if (ordenacaoSelecionada === 'preco-desc') {
            return precoB - precoA; // Ordena do maior para o menor
        } else {
            return 0; // Mantém a ordem original
        }
    });

    // Remove os produtos do container
    produtosContainer.innerHTML = '';

    // Adiciona os produtos ordenados de volta ao container
    produtos.forEach(produto => {
        produtosContainer.appendChild(produto);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
});

// Adiciona eventos aos filtros
filtroCategoria.addEventListener('change', filtrarPorCategoria);
filtroOrdenacao.addEventListener('change', ordenarPorPreco);

