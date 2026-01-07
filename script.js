// Categorização de Produtos - DNA Medina Jardim & Essências
const products = [
    // --- NÚCLEO DE JARDINAGEM ---
    {
        name: "Manutenção de Cerca Viva",
        category: "jardinagem",
        image: "manutencao_cerca_viva_precision.jpg", // Nome corrigido
        description: "Podas técnicas e manutenção de cercas vivas com precisão."
    },
    {
        name: "Preparação de Solo",
        category: "jardinagem",
        image: "preparacao_solo_plantio.jpg",
        description: "Tratamento e preparação técnica para novos plantios."
    },
    {
        name: "Limpeza de Canteiros (Moreia)",
        category: "jardinagem",
        image: "limpeza_canteiro_moreia.jpg",
        description: "Remoção de pragas e limpeza detalhada de áreas ornamentais."
    },
    {
        name: "Design de Buchinhos",
        category: "jardinagem",
        image: "design_paisagistico_linear.jpg",
        description: "Formatação geométrica e harmônica de arbustos."
    },

    // --- ESSÊNCIAS SOBERANAS (NATURA & AVON) ---
    {
        name: "Ornamentação e Fragrância",
        category: "perfumaria",
        image: "ornamentacao_vaso_essencia.jpg",
        description: "A união entre a beleza das flores e as melhores essências Natura."
    },
    {
        name: "Jardim Vertical & Estética",
        category: "perfumaria",
        image: "jardim_vertical_harmonico.jpg",
        description: "Consultoria em beleza e perfumaria integrada ao ambiente."
    },

    // --- REGISTROS DE IDENTIDADE ---
    {
        name: "Identidade Visual Profissional",
        category: "vestimenta",
        image: "identidade_visual_medina_jardim.jpg",
        description: "Apresentação e autoridade no mercado de serviços."
    }
];

// Função de Renderização com Harmonia
function renderProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = products.map(product => `
        <div class="product-card" data-category="${product.category}">
            <img src="img/${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a href="https://wa.me/5511999999999?text=Olá Medina, quero um orçamento para ${product.name}" target="_blank" class="btn-orcamento">
                Solicitar Orçamento
            </a>
        </div>
    `).join('');
}

// Inicialização do Sistema
document.addEventListener('DOMContentLoaded', renderProducts);
