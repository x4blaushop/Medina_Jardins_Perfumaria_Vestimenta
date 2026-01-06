/**
 * MEDINA KERNEL v5.0
 * Respeitando a Raiz: x4blaushop.github.io
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Motor de Partículas (Ambiente Vivo)
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    const initCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        for(let i=0; i<40; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                v: Math.random() * 0.5 + 0.1,
                s: Math.random() * 1.5
            });
        }
    };

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(45, 106, 79, 0.3)';
        particles.forEach(p => {
            p.y -= p.v;
            if (p.y < 0) p.y = canvas.height;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animate);
    };

    // 2. Materialização do Portfólio (Lógica de Arquivos Reais)
    const materialize = () => {
        const grid = document.getElementById('portfolio-section');
        const nomes = { 1: "Poda Imperial", 2: "Design Botânico", 19: "Tabela de Valores", 20: "Finalização" };

        for(let i=1; i<=20; i++) {
            const card = document.createElement('div');
            card.className = 'work-item';
            // Respeitando o nome do arquivo na sua pasta jardins/
            const file = i === 19 ? 'jardins19_valores.jpg' : `jardins${i}.jpg`;
            const label = nomes[i] || `PROJETO TÉCNICO ${i}`;

            card.innerHTML = `
                <img src="jardins/${file}" loading="lazy" onerror="this.src='jardins/jardins.jpg'">
                <p>${label.toUpperCase()}</p>
            `;
            grid.appendChild(card);
        }
    };

    // 3. Eventos
    document.getElementById('btn-jardim').addEventListener('click', () => {
        const section = document.getElementById('portfolio-section');
        section.classList.add('active');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    initCanvas();
    animate();
    materialize();
    console.log("Medina OS: Sistema Estabilizado na Raiz GitHub.");
});
