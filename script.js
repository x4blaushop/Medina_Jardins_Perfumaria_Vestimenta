/**
 * NÚCLEO-0: MATERIALIZAÇÃO SOBERANA
 * Projeto: Medina_Jardins_Perfumaria_Vestimenta
 * Arquiteto: José Patrick Castro Soares
 * Ajuste: Sincronia Total com o Index de Elite
 */

document.addEventListener('DOMContentLoaded', () => {
    
    const MEDINA_PHONE = "5511996369611";

    // --- 1. GALERIA AUTOMÁTICA E INOVADORA ---
    const renderGallery = () => {
        // Alinhado com o ID 'jardins-gallery' do seu Index
        const grid = document.getElementById('jardins-gallery'); 
        if (!grid) return;

        grid.innerHTML = ''; 

        for (let i = 1; i <= 20; i++) {
            const card = document.createElement('div');
            card.className = 'work-card';
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) scale(0.9)';
            
            card.innerHTML = `
                <div class="img-container" style="overflow:hidden; border-radius:12px;">
                    <img src="jardins/jardins${i}.jpg" alt="Obra ${i}" loading="lazy" style="transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1); width:100%; display:block;">
                </div>
                <p>PROJETO ${i.toString().padStart(2, '0')}</p>
            `;
            
            grid.appendChild(card);

            setTimeout(() => {
                card.style.transition = 'all 0.8s cubic-bezier(0.2, 1, 0.3, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, i * 80); 
        }
    };

    // --- 2. LIGHTBOX SURPREENDENTE (EXPANSÃO) ---
    const setupLightbox = () => {
        const grid = document.getElementById('jardins-gallery');
        if (!grid) return;

        grid.addEventListener('click', (e) => {
            const img = e.target.closest('img');
            if (!img) return;

            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.9); backdrop-filter: blur(20px);
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
                fullImg.style.transform = 'scale(0.7)';
                setTimeout(() => overlay.remove(), 500);
            };
        });
    };

    // --- 3. INTERAÇÕES TÁTEIS (FEEDBACK MODERNO) ---
    const setupTactile = () => {
        // Agora seleciona os botões e os novos IDs de serviço
        const elements = document.querySelectorAll('.hanger-item, .btn-budget, .work-card');
        elements.forEach(el => {
            el.addEventListener('touchstart', () => {
                el.style.transform = 'scale(0.95)';
                el.style.filter = 'brightness(1.3)';
            });
            el.addEventListener('touchend', () => {
                el.style.transform = 'scale(1)';
                el.style.filter = 'brightness(1)';
            });
        });
    };

    // --- 4. CONEXÃO WHATSAPP E GATILHOS ---
    const bindActions = () => {
        const sendMsg = (msg) => window.open(`https://wa.me/${MEDINA_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');

        // Gatilho do Orçamento (via botão ou container)
        document.querySelector('.btn-budget')?.addEventListener('click', () => sendMsg("Olá Medina! Vi sua galeria de 20 jardins e quero um orçamento."));

        // Gatilho Jardinagem (Scroll para Portfolio)
        document.getElementById('trigger-garden')?.addEventListener('click', () => {
            document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
        });

        // Gatilho Perfumaria
        document.getElementById('trigger-perfume')?.addEventListener('click', () => sendMsg("Olá Medina! Gostaria de ver o catálogo Natura/Avon."));

        // Gatilho Vestimenta
        document.getElementById('trigger-clothing')?.addEventListener('click', () => sendMsg("Olá Medina! Gostaria de saber mais sobre as vestimentas."));
    };

    // INICIALIZAÇÃO DO SISTEMA
    renderGallery();
    setupLightbox();
    setupTactile();
    bindActions();
});
