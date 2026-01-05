/**
 * NÚCLEO-0: COMPOSIÇÃO DE MATERIAIS
 * Projeto: Medina_Jardins_Perfumaria_Vestimenta
 * Arquiteto: José Patrick Castro Soares
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- NÚCLEO DE CONEXÃO (NÚMERO DO MEDINA) ---
    const MEDINA_PHONE = "5511996369611";

    const connect = (target) => {
        const msgs = {
            garden: "Olá Medina! Vi seu portfólio de jardins e quero um orçamento.",
            perfume: "Olá Medina! Quero ver o catálogo Natura e Avon.",
            style: "Olá Medina! Tenho interesse nas vestimentas."
        };
        window.open(`https://wa.me/${MEDINA_PHONE}?text=${encodeURIComponent(msgs[target] || "Olá!")}`, '_blank');
    };

    // --- DINÂMICA DE MATÉRIA (EFEITOS VISUAIS NÚCLEO-0) ---
    const applyNucleoEffects = () => {
        const items = document.querySelectorAll('.hanger-item, .work-card, button');

        items.forEach(el => {
            // Efeito de compressão da matéria ao tocar
            el.addEventListener('touchstart', () => {
                el.style.transform = "scale(0.96) translateY(2px)";
                el.style.filter = "contrast(1.2) brightness(1.1)";
                el.style.boxShadow = "inset 0 0 15px rgba(212, 175, 55, 0.2)";
            });

            el.addEventListener('touchend', () => {
                el.style.transform = "scale(1) translateY(0)";
                el.style.filter = "contrast(1) brightness(1)";
                el.style.boxShadow = "none";
            });
        });
    };

    // --- EXPANSÃO SOBERANA (IMAGENS QUE DOMINAM A TELA) ---
    const setupExpansion = () => {
        const galleryImages = document.querySelectorAll('.work-card img');
        
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                // Criação do vácuo visual (Overlay)
                const voidLayer = document.createElement('div');
                voidLayer.style.cssText = `
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0, 0, 0, 0.92); backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px); z-index: 10000;
                    display: flex; align-items: center; justify-content: center;
                    opacity: 0; transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: zoom-out;
                `;

                const expandedImg = document.createElement('img');
                expandedImg.src = img.src;
                expandedImg.style.cssText = `
                    max-width: 92%; max-height: 85%; border-radius: 4px;
                    border: 1px solid rgba(212, 175, 55, 0.5);
                    transform: scale(0.8) rotate(-1deg);
                    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                `;

                voidLayer
