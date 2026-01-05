/**
 * NÚCLEO-0: COMPOSIÇÃO INTEGRAL
 * Projeto: Medina_Jardins_Perfumaria_Vestimenta
 * Arquiteto: José Patrick Castro Soares
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. RAIZ DE CONEXÃO (DADOS PRESERVADOS) ---
    const MEDINA_PHONE = "5511996369611";

    const connect = (target) => {
        const msgs = {
            garden: "Olá Medina! Vi seu portfólio de jardins e quero um orçamento.",
            perfume: "Olá Medina! Quero ver o catálogo Natura e Avon.",
            style: "Olá Medina! Tenho interesse nas vestimentas."
        };
        window.open(`https://wa.me/${MEDINA_PHONE}?text=${encodeURIComponent(msgs[target] || "Olá!")}`, '_blank');
    };

    // --- 2. EXPANSÃO DE MATÉRIA (AS 20 FOTOS DA PASTA /JARDINS) ---
    const grid = document.querySelector('.portfolio-grid');
    if (grid) {
        grid.innerHTML = ''; // Limpa para injetar a sequência correta
        for (let i = 1; i <= 20; i++) {
            const card = document.createElement('div');
            card.className = 'work-card';
            card.innerHTML = `
                <img src="jardins/jardins${i}.jpg" alt="Trabalho Medina ${i}" loading="lazy">
                <p>PROJETO ${i.toString().padStart(2, '0')}</p>
            `;
            grid.appendChild(card);
        }
    }

    // --- 3. DINÂMICA DE TOQUE (EFEITOS VISUAIS NÚCLEO-0) ---
    // Preservando os efeitos de escala e brilho que definimos antes
    const applyEffects = () => {
        const items = document.querySelectorAll('.hanger-item, .work-card, button');
        items.forEach(el => {
            el.addEventListener('touchstart', () => {
                el.style.transform = "scale(0.96) translateY(2px)";
                el.style.filter = "contrast(1.2) brightness(1.1)";
            });
            el.addEventListener('touchend', () => {
                el.style.transform = "scale(1) translateY(0)";
                el.style.filter = "contrast(1) brightness(1)";
            });
        });
    };

    // --- 4. EXPANSÃO SOBERANA (LIGHTBOX / ZOOM) ---
    // Mantendo o efeito de vidro embaçado (blur) e expansão suave
    const setupExpansion = () => {
        document.body.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG' && e.target.closest('.work-card')) {
                const img = e.target;
                const voidLayer = document.createElement('div');
                voidLayer.style.cssText = `
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0, 0, 0, 0.92); backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px); z-index: 10000;
                    display: flex; align-items: center; justify-content: center;
                    opacity: 0; transition: all 0.4s ease;
                `;

                const expandedImg = document.createElement('img');
                expandedImg.src = img.src;
                expandedImg.style.cssText = `
                    max-width: 92%; max-height: 85%; border-radius: 4px;
                    border: 1px solid rgba(212, 175, 55, 0.5);
                    transform: scale(0.8); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                `;

                voidLayer.appendChild(expandedImg);
                document.body.appendChild(voidLayer);

                requestAnimationFrame(() => {
                    voidLayer.style.opacity = '1';
                    expandedImg.style.transform = 'scale(1)';
                });

                voidLayer.onclick = () => {
                    voidLayer.style.opacity = '0';
                    setTimeout(() => voidLayer.remove(), 400);
                };
            }
        });
    };

    // --- 5. MAPEAMENTO DE AÇÕES (SCROLL E CLIQUES) ---
    const bindActions = () => {
        // Scroll suave para portfólio
        document.querySelector('.hanger-item.garden button')?.addEventListener('click', () => {
            document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
        });

        // WhatsApps
        document.querySelector('.btn-budget')?.addEventListener('click', () => connect('garden'));
        document.querySelector('.hanger-item.perfume button')?.addEventListener('click', () => connect('perfume'));
        document.querySelector('.hanger-item.clothing button')?.addEventListener('click', () => connect('style'));
    };

    // --- EXECUÇÃO ---
    applyEffects();
    setupExpansion();
    bindActions();
});
