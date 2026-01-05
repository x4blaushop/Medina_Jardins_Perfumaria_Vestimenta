/**
 * NÚCLEO-0: MOTOR DE AMBIENTE VIVO
 * Arquiteto: José Patrick Castro Soares
 */

document.addEventListener('DOMContentLoaded', () => {
    const MEDINA_PHONE = "5511996369611";

    // DICIONÁRIO DE IDENTIDADE - Riqueza Nominal
    const jardinsData = {
        1: "Poda de Precisão Imperial",
        2: "Design de Vasos Contemporâneos",
        3: "Escultura em Verde Soberano",
        4: "Revitalização de Ecossistemas",
        5: "Cerca Viva de Alta Densidade",
        6: "Manutenção com Maquinário Premium",
        19: "Transparência: Orçamentos Técnicos",
        20: "Finalização de Obra e Entrega de Chaves"
    };

    // --- MOTOR DE PARTÍCULAS (FOLHAS) ---
    const canvas = document.getElementById('leaf-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    class Leaf {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 15 + 5;
            this.speed = Math.random() * 2 + 1;
            this.angle = Math.random() * 360;
            this.spin = Math.random() * 0.2 - 0.1;
        }
        update() {
            this.y += this.speed;
            this.angle += this.spin;
            if (this.y > canvas.height) {
                this.y = -20;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.fillStyle = 'rgba(45, 106, 79, 0.2)';
            ctx.beginPath();
            ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    const initParticles = () => {
        particles = [];
        for (let i = 0; i < 30; i++) particles.push(new Leaf());
    };

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    };

    // --- MATERIALIZAÇÃO ---
    const renderGallery = () => {
        const grid = document.querySelector('.portfolio-grid');
        if (!grid) return;

        for (let i = 1; i <= 20; i++) {
            const card = document.createElement('div');
            card.className = 'work-card';
            const desc = jardinsData[i] || `PROJETO ARQUITETÔNICO ${i.toString().padStart(2, '0')}`;
            const file = (i === 19) ? "jardins19_valores.jpg" : `jardins${i}.jpg`;

            card.innerHTML = `
                <img src="jardins/${file}" loading="lazy" onerror="this.src='jardins/jardins.jpg'">
                <div class="info">
                    <h4>${desc.toUpperCase()}</h4>
                </div>
            `;
            grid.appendChild(card);
        }
    };

    window.addEventListener('resize', resize);
    resize();
    initParticles();
    animate();
    renderGallery();

    // Eventos
    document.getElementById('trigger-garden')?.addEventListener('click', () => {
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    });
});
