/**
 * NÚCLEO-0: MATERIALIZAÇÃO NA RAIZ
 * Arquiteto: José Patrick Castro Soares
 */

document.addEventListener('DOMContentLoaded', () => {
    const MEDINA_PHONE = "5511996369611";

    // 1. DICIONÁRIO DE IDENTIDADE (Mantendo o que existia)
    const jardinsData = {
        1: "Poda de Precisão",
        2: "Design de Vasos",
        3: "Escultura em Verde",
        4: "Manutenção Técnica",
        5: "Cerca Viva",
        6: "Maquinário Próprio",
        19: "Valores e Orçamentos",
        20: "Finalização de Obra"
    };

    const renderGallery = () => {
        // RESPEITO À RAIZ: Utilizando apenas a classe que já existe no seu HTML
        const grid = document.querySelector('.portfolio-grid'); 
        if (!grid) return;

        grid.innerHTML = ''; 

        for (let i = 1; i <= 20; i++) {
            const card = document.createElement('div');
            card.className = 'work-card';
            
            const descricao = jardinsData[i] || `PROJETO ${i.toString().padStart(2, '0')}`;
            // Ajuste de Identidade de Arquivo no GitHub
            const fileName = (i === 19) ? "jardins19_valores.jpg" : `jardins${i}.jpg`;

            card.innerHTML = `
                <div class="img-container" style="overflow:hidden; border-radius:12px;">
                    <img src="jardins/${fileName}" alt="${descricao}" loading="lazy" 
                         onerror="this.src='jardins/jardins.jpg';"
                         style="transition: transform 0.8s ease; width:100%; display:block; height:150px; object-fit:cover;">
                </div>
                <p style="margin-top:10px; font-weight:600;">${descricao.toUpperCase()}</p>
            `;
            
            grid.appendChild(card);
            
            setTimeout(() => {
                card.style.transition = 'all 0.8s cubic-bezier(0.2, 1, 0.3, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, i * 80);
        }
    };

    const bindActions = () => {
        const sendMsg = (msg) => window.open(`https://wa.me/${MEDINA_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');

        // Seletores baseados puramente na sua estrutura de Raiz
        document.querySelector('.hanger-item.garden button')?.addEventListener('click', () => {
            const portfolio = document.querySelector('.portfolio-section');
            if(portfolio) portfolio.scrollIntoView({ behavior: 'smooth' });
        });

        document.querySelector('.hanger-item.perfume button')?.addEventListener('click', () => {
            sendMsg("Olá Medina! Gostaria de ver o catálogo Natura/Avon.");
        });

        document.querySelector('.btn-budget')?.addEventListener('click', () => {
            sendMsg("Olá Medina! Vi sua galeria de 20 jardins e quero um orçamento.");
        });
    };

    renderGallery();
    bindActions();
});
