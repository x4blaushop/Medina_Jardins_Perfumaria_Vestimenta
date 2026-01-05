/**
 * NÚCLEO-0: MATERIALIZAÇÃO SOBERANA - IDENTIDADE E CORREÇÃO
 * Projeto: Medina_Jardins_Perfumaria_Vestimenta
 * Arquiteto: José Patrick Castro Soares
 */

document.addEventListener('DOMContentLoaded', () => {
    
    const MEDINA_PHONE = "5511996369611";

    // --- 1. MAPA DE IDENTIDADE (Recuperando as descrições que existiam) ---
    const descricoesJardins = {
        1: "Poda de Precisão",
        2: "Design de Vasos",
        3: "Escultura em Verde",
        4: "Manutenção Técnica",
        5: "Cerca Viva",
        6: "Maquinário Próprio",
        // Adicionando as novas identificadas no seu GitHub
        19: "Valores e Orçamentos",
        20: "Finalização de Obra"
    };

    const renderGallery = () => {
        const grid = document.getElementById('jardins-gallery'); 
        if (!grid) return;

        grid.innerHTML = ''; 

        for (let i = 1; i <= 20; i++) {
            const card = document.createElement('div');
            card.className = 'work-card';
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) scale(0.9)';
            
            // Define o texto: Usa o mapa ou um padrão técnico
            const textoProjeto = descricoesJardins[i] || `PROJETO ${i.toString().padStart(2, '0')}`;
            
            // Tratamento especial para o arquivo 19 identificado no seu GitHub
            const fileName = (i === 19) ? "jardins19_valores.jpg" : `jardins${i}.jpg`;

            card.innerHTML = `
                <div class="img-container" style="overflow:hidden; border-radius:12px;">
                    <img src="jardins/${fileName}" alt="${textoProjeto}" loading="lazy" 
                         onerror="this.src='jardins/jardins.jpg'"
                         style="transition: transform 0.8s ease; width:100%; display:block; height:150px; object-fit:cover;">
                </div>
                <p>${textoProjeto.toUpperCase()}</p>
            `;
            
            grid.appendChild(card);

            setTimeout(() => {
                card.style.transition = 'all 0.8s cubic-bezier(0.2, 1, 0.3, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, i * 80); 
        }
    };

    // --- 2. LIGHTBOX (ZOOM) ---
    const setupLightbox = () => {
        const grid = document.getElementById('jardins-gallery');
        if (!grid) return;

        grid.addEventListener('click', (e) => {
            const img = e.target.closest('img');
            if (!img) return;

            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.95); backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px); z-index: 10000;
                display: flex; align-items: center; justify-content: center;
                opacity: 0; transition: opacity 0.5s ease; cursor: zoom-out;
            `;

            const fullImg = document.createElement('img');
            fullImg.src = img.src;
            fullImg.style.cssText = `
                max-width: 90%; max-height: 80%; border-radius: 15px;
                border: 1px solid rgba(212, 175, 55, 0.5);
                transform: scale(0.7); transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
            `;

            overlay.appendChild(fullImg);
            document.body.appendChild(overlay);

            requestAnimationFrame(() => {
                overlay.style.opacity = '1';
                fullImg.style.transform = 'scale(1)';
            });

            overlay.onclick = () => {
                overlay.style.opacity = '0';
                setTimeout(() => overlay.remove(), 500);
            };
        });
    };

    // --- 3. GATILHOS DE CONTATO ---
    const bindActions = () => {
        const sendMsg = (msg) => window.open(`https://wa.me/${MEDINA_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');

        document.getElementById('trigger-garden')?.addEventListener('click', () => {
            document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
        });

        document.getElementById('trigger-perfume')?.addEventListener('click', () => {
            sendMsg("Olá Medina! Quero ver o catálogo Natura e Avon.");
        });

        document.getElementById('trigger-clothing')?.addEventListener('click', () => {
            sendMsg("Olá Medina! Gostaria de saber mais sobre as vestimentas.");
        });

        document.querySelector('.btn-budget')?.addEventListener('click', () => {
            sendMsg("Olá Medina! Vi seu portfólio de 20 jardins e quero um orçamento.");
        });
    };

    // INICIALIZAÇÃO
    renderGallery();
    setupLightbox();
    bindActions();
});
