// ==================================================
// 📦 Dados dos Produtos (Atualizado com categorias)
// ==================================================
const produtos = [
    {
        id: 1,
        nome: "Rolex Rainbow",
        categoria: "relogios",
        imagem: "assets/images/produto1.png",
        descricao: "O Rolex Rainbow é um relógio de luxo que combina design icônico com detalhes vibrantes em arco-íris.\n\nSeu mostrador é adornado com pedras preciosas coloridas, e a pulseira em ouro 18k garante conforto e elegância.\n\nPerfeito para quem busca um acessório que chame a atenção e transmita sofisticação.",
        preco: "$ 364,482.00",
        especificacoes: [
            "Material: Ouro 18k",
            "Pedras: Diamantes e Rubis",
            "Garantia: 2 anos",
            "Entrega: 5-7 dias úteis"
        ]
    },
    {
        id: 2,
        nome: "Rolex GMT Master",
        categoria: "relogios",
        imagem: "assets/images/produto2.png",
        descricao: "O Rolex GMT Master é um clássico atemporal, conhecido por sua funcionalidade GMT que permite acompanhar múltiplos fusos horários.\n\nCom um design robusto e detalhes em aço inoxidável, este relógio é ideal para viajantes e entusiastas de relógios que valorizam precisão e estilo.",
        preco: "$ 51,377.00",
        especificacoes: [
            "Material: Aço Inoxidável",
            "Função: GMT",
            "Garantia: 2 anos",
            "Entrega: 5-7 dias úteis"
        ]
    },
    {
        id: 3,
        nome: "Patek Philippe Nautilus",
        categoria: "relogios",
        imagem: "assets/images/produto3.png",
        descricao: "O Patek Philippe Nautilus é sinônimo de exclusividade e alta relojoaria.\n\nSeu design elegante e acabamento impecável o tornam um dos relógios mais cobiçados do mundo.\n\nCom um mostrador azul gradient e pulseira integrada em aço, este relógio é perfeito para ocasiões especiais.",
        preco: "$ 495,000.00",
        especificacoes: [
            "Material: Aço Inoxidável",
            "Mostrador: Azul Gradient",
            "Garantia: 2 anos",
            "Entrega: 5-7 dias úteis"
        ]
    },
    {
        id: 4,
        nome: "Cartier Esmeralda Neckless",
        categoria: "colares",
        imagem: "assets/images/colar3.png",
        descricao: "O colar Cartier Esmeralda é uma joia deslumbrante, com uma esmeralda central de alta qualidade cercada por diamantes cintilantes.\n\nFeito em ouro branco 18k, este colar é uma peça de arte que adiciona um toque de luxo a qualquer traje.",
        preco: "$ 21,430.00",
        especificacoes: [
            "Material: Ouro Branco 18k",
            "Pedras: Esmeralda e Diamantes",
            "Garantia: 2 anos",
            "Entrega: 5-7 dias úteis"
        ]
    },
    {
        id: 5,
        nome: "Heart Rubi Neckless",
        categoria: "colares",
        imagem: "assets/images/colar1.png",
        descricao: "O colar Heart Rubi é uma declaração de amor e elegância.\n\nCom um rubi em formato de coração como peça central e detalhes em ouro rosa, este colar é perfeito para presentear alguém especial ou para usar em ocasiões românticas.",
        preco: "$ 1,256.00",
        especificacoes: [
            "Material: Ouro Rosa",
            "Pedras: Rubi",
            "Garantia: 2 anos",
            "Entrega: 5-7 dias úteis"
        ]
    },
    {
        id: 6,
        nome: "Cartier Diamond Bracelet",
        categoria: "pulseiras",
        imagem: "assets/images/pulseira1.png",
        descricao: "A pulseira Cartier Diamond é uma joia sofisticada, com diamantes incrustados em um design clássico e atemporal.\n\nFeita em ouro branco 18k, esta pulseira é ideal para complementar looks elegantes e modernos.",
        preco: "$ 1,000.00",
        especificacoes: [
            "Material: Ouro Branco 18k",
            "Pedras: Diamantes",
            "Garantia: 2 anos",
            "Entrega: 5-7 dias úteis"
        ]
    },
    {
        id: 7,
        nome: "Cartier Diamond Bracelet Men",
        categoria: "pulseiras",
        imagem: "assets/images/puslseira2.png",
        descricao: "Pulseira Cartier em ouro branco com diamantes, versão masculina. Design robusto e elegante para ocasiões formais.",
        preco: "$ 1,500.00",
        especificacoes: [
            "Material: Ouro Branco 18k",
            "Pedras: Diamantes",
            "Garantia: 2 anos"
        ]
    },
    {
        id: 8,
        nome: "Cartier Diamond & Gold Bracelet Men",
        categoria: "pulseiras",
        imagem: "assets/images/pulseira3.png",
        descricao: "Pulseira Cartier em ouro amarelo e diamantes, combinação clássica para homens que apreciam luxo discreto.",
        preco: "$ 2,300.00",
        especificacoes: [
            "Material: Ouro Amarelo 18k",
            "Pedras: Diamantes",
            "Garantia: 2 anos"
        ]
    },
    {
        id: 9,
        nome: "Heart BlueGem Neckless",
        categoria: "colares",
        imagem: "assets/images/colar2.png",
        descricao: "Colar com pedra azul em formato de coração, perfeito para presentear. Design delicado e romântico.",
        preco: "$ 980.00",
        especificacoes: [
            "Material: Prata 925",
            "Pedra: Safira Azul",
            "Garantia: 1 ano"
        ]
    }
];

// ==================================================
// 🛠️ Utilitários
// ==================================================
const Utils = {
    // Verifica se um elemento existe no DOM
    elementExists: (selector) => {
        return document.querySelector(selector) !== null;
    },
    
    // Exibe mensagem de erro
    showError: (message) => {
        if (Utils.elementExists('.detalhes-container')) {
            document.querySelector('.detalhes-container').innerHTML = `
                <div class="error-message">
                    <p>${message}</p>
                    <a href="produtos.html">Voltar para a loja</a>
                </div>
            `;
        } else {
            document.body.innerHTML = `
                <div class="error-message">
                    <p>${message}</p>
                    <a href="produtos.html">Voltar para a loja</a>
                </div>
            `;
        }
    },
    
    // Carrega imagem com fallback
    loadImageWithFallback: (imgElement, imagePath, fallbackPath = 'assets/images/image-not-found.png') => {
        imgElement.onerror = () => {
            imgElement.src = fallbackPath;
        };
        imgElement.src = imagePath;
    }
};

// ==================================================
// 🛠️ Função para Carregar os Detalhes do Produto
// ==================================================
function carregarDetalhesProduto() {
    try {
        // Verifica se os elementos necessários existem
        if (!Utils.elementExists('#produto-imagem') || 
            !Utils.elementExists('#produto-nome') || 
            !Utils.elementExists('#produto-descricao') || 
            !Utils.elementExists('#produto-preco') || 
            !Utils.elementExists('#especificacoes-lista')) {
            throw new Error('Elementos da página não encontrados');
        }

        // Obtém o ID do produto da URL
        const urlParams = new URLSearchParams(window.location.search);
        const id = parseInt(urlParams.get('id'));

        // Verifica se o ID é válido
        if (isNaN(id)) {
            throw new Error('ID do produto inválido');
        }

        // Encontra o produto correspondente no array de produtos
        const produtoAtual = produtos.find(p => p.id === id);

        if (!produtoAtual) {
            throw new Error('Produto não encontrado');
        }

        // Atualiza os elementos da página com os detalhes do produto
        Utils.loadImageWithFallback(document.getElementById('produto-imagem'), produtoAtual.imagem);
        document.getElementById('produto-nome').textContent = produtoAtual.nome;
        document.getElementById('produto-descricao').textContent = produtoAtual.descricao;
        document.getElementById('produto-preco').textContent = produtoAtual.preco;

        // Preenche as especificações técnicas
        const especificacoesLista = document.getElementById('especificacoes-lista');
        if (produtoAtual.especificacoes && produtoAtual.especificacoes.length > 0) {
            especificacoesLista.innerHTML = produtoAtual.especificacoes.map(item => `
                <li>${item}</li>
            `).join('');
        } else {
            especificacoesLista.innerHTML = '<li>Nenhuma especificação técnica disponível</li>';
        }

        // Carrega produtos relacionados (de outras categorias)
        carregarProdutosRelacionados(produtoAtual);

    } catch (error) {
        console.error('Erro ao carregar detalhes do produto:', error);
        Utils.showError(error.message || 'Ocorreu um erro ao carregar o produto');
    }
}



// ==================================================
// 🔄 Função para Carregar Produtos Relacionados
// ==================================================
function carregarProdutosRelacionados(produtoAtual) {
    try {
        const container = document.getElementById('produtos-relacionados-container');
        if (!container) return;

        // Filtra os produtos:
        // 1. Remove o produto atual
        // 2. Remove produtos da mesma categoria
        const produtosRelacionados = produtos.filter(p => 
            p.id !== produtoAtual.id && 
            p.categoria !== produtoAtual.categoria
        );

        // Se houver produtos relacionados
        if (produtosRelacionados.length > 0) {
            // Seleciona 4 produtos aleatórios
            const produtosAleatorios = [...produtosRelacionados]
                .sort(() => 0.5 - Math.random())
                .slice(0, 4);

            // Cria o HTML para os produtos relacionados
            container.innerHTML = `
                <h2>Outras Coleções</h2>
                <div class="produtos-relacionados-grid">
                    ${produtosAleatorios.map(produto => `
                        <div class="produto-lista" data-categoria="${produto.categoria}" data-preco="${produto.preco.replace(/[^0-9]/g, '')}">
                            <a href="detalhes-produto.html?id=${produto.id}">
                                <img src="${produto.imagem}" alt="${produto.nome}" onerror="this.src='assets/images/image-not-found.png'">
                                <div class="produto-info">
                                    <h3>${produto.nome}</h3>
                                </div>
                            </a>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            // Esconde a seção se não houver produtos relacionados
            container.style.display = 'none';
        }
    } catch (error) {
        console.error('Erro ao carregar produtos relacionados:', error);
        const container = document.getElementById('produtos-relacionados-container');
        if (container) container.style.display = 'none';
    }
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(idProduto) {
    // Verifica se o carrinho já existe no localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Encontra o produto que foi clicado
    const produto = produtos.find(p => p.id === idProduto);

    if (produto) {
        // Adiciona o produto ao carrinho (pode ter verificação para evitar duplicados)
        carrinho.push(produto);

        // Salva o carrinho atualizado no localStorage
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        alert("Produto adicionado ao carrinho!");
    } else {
        alert("Produto não encontrado.");
    }
}

// ==================================================
// 🚀 Inicialização
// ==================================================
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona tratamento de erro global
    window.onerror = function(message, source, lineno, colno, error) {
        console.error('Erro global:', { message, source, lineno, colno, error });
        Utils.showError('Ocorreu um erro inesperado. Por favor, recarregue a página.');
        return true;
    };

    // Carrega os detalhes do produto
    carregarDetalhesProduto();
});