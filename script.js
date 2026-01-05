// DNA System - Medina | Jardins & Essências
// Arquiteto: José Patrick Castro Soares

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Configuração do WhatsApp do Medina
    const btnBudget = document.querySelector('.btn-budget');
    const btnNatura = document.querySelector('.hanger-item.perfume button');

    const connectWhatsApp = (msg) => {
        const phoneNumber = "5511996369611"; // Número atualizado do Medina
        const message = encodeURIComponent(msg);
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    if (btnBudget) {
        btnBudget.addEventListener('click', () => connectWhatsApp("Olá Medina, vi seu site e quero um orçamento para jardinagem!"));
    }
    
    if (btnNatura) {
        btnNatura.addEventListener('click', () => connectWhatsApp("Olá Medina, gostaria de ver o catálogo da Natura e Avon."));
    }

    // 2. Efeito de Expansão de Imagens (Lightbox Moderno)
    const cards = document.querySelectorAll('.work-card img');
    
    cards.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed; top:0; left:0; width:100%; height:100%;
                background: rgba(0,0,0,0.9); display:flex; align-items:center;
                justify-content:center; z-index:1000; cursor: zoom-out;
                transition: opacity 0.3s;
            `;
            
            const fullImg = document.createElement('img');
            fullImg.src = img.src;
            fullImg.style.cssText = `max-width: 90%; max-height: 80%; border: 2px solid #d4af37; border-radius: 10px;`;
            
            overlay.appendChild(fullImg);
            document.body.appendChild(overlay);
            
            overlay.onclick = () => {
                overlay.style.opacity = '0';
                setTimeout(() => overlay.remove(), 300);
            };
        });
    });

    // 3. Revelação Suave (Scroll Reveal)
    const revealItems = document.querySelectorAll('.hanger-item, .work-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    revealItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });

    // 4. Rolagem Suave para o Portfólio
    document.querySelector('.hanger-item.garden button')?.addEventListener('click', () => {
        document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
    });
});
