/**
 * NÚCLEO-0: MOTOR DE AMBIENTE SOBERANO
 * Arquiteto: José Patrick Castro Soares
 */

document.addEventListener('DOMContentLoaded', () => {
    const MEDINA_PHONE = "5511996369611";

    // 1. DICIONÁRIO DE IDENTIDADE - Expansão de Matéria
    const jardinsData = {
        1: "Geometria Verde: Poda de Esculturas",
        2: "Vitae em Vaso: Design & Cultivo",
        3: "Arte Botânica: Escultura Viva",
        4: "Manutenção Sustentável: Ciclo Perfeito",
        5: "Muro Esmeralda: Cerca Viva Orgânica",
        6: "Tecnologia Verde: Maquinário Próprio",
        19: "Valores e Consultoria Técnica",
        20: "Legado Medina: Conclusão de Obra"
    };

    // 2. MOTOR DE PARTÍCULAS (FOLHAS E POEIRA ESMERALDA)
    const initAtmosphere = () => {
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speed = Math.random() * 0.5 + 0.2;
                this.opacity = Math.random() * 0.5;
            }
            update() {
                this.y -= this.speed;
                if (this.y < 0) this.y = canvas.height;
            }
            draw() {
                ctx.fillStyle = `rgba(45, 106, 79, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < 50; i++) particles.push(new Particle());

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animate);
        };
        animate();
    };

    // 3. MATERIALIZAÇÃO DA GALERIA (Mantendo a Raiz Imutável)
    const materializeMatéria = () => {
        const grid = document.querySelector('.portfolio-grid');
        if (!grid) return;

        grid.innerHTML = '';

        for (let i = 1; i <= 20; i++) {
            const card = document.createElement('div');
            card.className = 'work-card';
            
            const descricao = jardinsData[i] || `PROJETO ARQUITETÔNICO ${i.toString().padStart(2, '0')}`;
            const file = (i === 19) ? "jardins19_valores.jpg" : `jardins${i}.jpg`;

            card.innerHTML = `
                <div style="overflow:hidden">
                    <img src="jardins/${file}" loading="lazy" onerror="this.src='jardins/jardins.jpg'">
                </div>
                <p>${descricao.toUpperCase()}</p>
            `;
            
            grid.appendChild(card);
            
            // Efeito de nascimento (Fase de Materialização)
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.8s var(--transition)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, i * 100);
        }
    };

    // 4. BIND DE EVENTOS SOBERANOS
    const bindActions = () => {
        const sendMsg = (msg) => window.open(`https://wa.me/${MEDINA_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');

        document.getElementById('trigger-garden')?.addEventListener('click', () => {
            document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
        });

        document.getElementById('trigger-perfume')?.addEventListener('click', () => {
            sendMsg("Olá Medina! Solicito acesso ao catálogo de Essências (Natura/Avon).");
        });

        document.querySelector('.btn-budget')?.addEventListener('click', () => {
            sendMsg("Olá Medina! Gostaria de um orçamento para meu projeto de jardinagem.");
        });
    };

    // IGNIÇÃO DO SISTEMA
    initAtmosphere();
    materializeMatéria();
    bindActions();
    console.log("Nucleus-0: Sistema Estabilizado. Arquiteto José Patrick reconhecido.");
});
