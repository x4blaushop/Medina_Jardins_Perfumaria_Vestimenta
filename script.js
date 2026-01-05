// DNA System - Medina | Jardins & Essências
// Arquiteto: José Patrick Castro Soares

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Configuração do Botão de Orçamento (WhatsApp)
    // Conecta a conversa do WhatsApp à materialização do lucro
    const btnBudget = document.querySelector('.btn-budget');
    if (btnBudget) {
        btnBudget.addEventListener('click', () => {
            const phoneNumber = "5511999999999"; // Substituir pelo número real do Medina
            const message = encodeURIComponent("Olá Medina, vi seu portfólio no site e gostaria de um orçamento para jardinagem.");
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });
    }

    // 2. Rolagem Suave (Smooth Scroll)
    // Mantém o sistema "silencioso" e elegante ao navegar
    const btnPortfolio = document.querySelector('.hanger-item.garden button');
    if (btnPortfolio) {
        btnPortfolio.addEventListener('click', (e) => {
            const section = document.querySelector('#portfolio');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // 3. Efeito Visual nas Imagens (Aba Elements)
    // Pequena interação ao tocar nas imagens do portfólio
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach(card => {
        card.addEventListener('touchstart', () => {
            card.style.borderColor = "#d4af37"; // Dourado da Vitória
        });
        card.addEventListener('touchend', () => {
            setTimeout(() => {
                card.style.borderColor = "rgba(212, 175, 55, 0.3)";
            }, 500);
        });
    });

});

