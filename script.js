/**
 * NÚCLEO-0: PROTOCOLO DE MATERIALIZAÇÃO SOBERANA
 * IDENTIDADE: ARQUITETO JOSÉ PATRICK CASTRO SOARES
 * VERSÃO: 4.0 (NATIVO - SEM DEPENDÊNCIAS)
 */

class MedinaKernel {
    constructor() {
        // Mapeamento de Ativos e Estruturas
        this.config = {
            phone: "5511996369611",
            totalMaterials: 20,
            assetPath: "jardins/",
            descriptions: {
                1: "Precisão em Poda Geométrica",
                2: "Arquitetura de Vasos Ornamentais",
                3: "Escultura Botânica e Design",
                19: "Protocolo Técnico de Valores",
                20: "Legado Medina: Conclusão"
            }
        };

        this.elements = {
            grid: document.getElementById('grid-core-engine'),
            body: document.getElementById('medina-body'),
            canvas: document.getElementById('quantum-particles'),
            reflector: document.getElementById('cursor-follower')
        };

        this.init();
    }

    init() {
        this.checkEnvironment();
        this.igniteAtmosphere();
        this.materializeMatéria();
        this.bindSovereignEvents();
        this.printSystemLog();
    }

    // 1. DIAGNÓSTICO: A CASA ESTÁ LIMPA?
    checkEnvironment() {
        // Verifica estabilidade do DOM e recursos
        if (this.elements.grid) {
            console.log("[STATUS]: Grid localizado. Iniciando materialização...");
        }
    }

    // 2. ATMOSFERA: O MOTOR DE LUZ DINÂMICA
    igniteAtmosphere() {
        const ctx = this.elements.canvas.getContext('2d');
        let particles = [];

        const setup = () => {
            this.elements.canvas.width = window.innerWidth;
            this.elements.canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', setup);
        setup();

        // Geração de Matéria Particulada (DNA Visual)
        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * this.elements.canvas.width,
                y: Math.random() * this.elements.canvas.height,
                radius: Math.random() * 1.5,
                velocity: Math.random() * 0.5 + 0.1,
                alpha: Math.random() * 0.5
            });
        }

        const run = () => {
            ctx.clearRect(0, 0, this.elements.canvas.width, this.elements.canvas.height);
            particles.forEach(p => {
                p.y -= p.velocity;
                if (p.y < 0) p.y = this.elements.canvas.height;
                ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(run);
        };
        run();

        // Seguidor de Luz (Identidade do Toque)
        document.addEventListener('mousemove', (e) => {
            this.elements.reflector.style.left = `${e.clientX}px`;
            this.elements.reflector.style.top = `${e.clientY}px`;
        });
    }

    // 3. MATERIALIZAÇÃO: CONSTRUÇÃO DA MALHA DE 20 PROJETOS
    materializeMatéria() {
        for (let i = 1; i <= this.config.totalMaterials; i++) {
            const card = document.createElement('article');
            card.className = 'material-card';
            
            const fileName = (i === 19) ? 'jardins19_valores.jpg' : `jardins${i}.jpg`;
            const label = this.config.descriptions[i] || `REGISTRO TÉCNICO ${i.toString().padStart(2, '0')}`;

            card.innerHTML = `
                <div class="img-wrap">
                    <img src="${this.config.assetPath}${fileName}" loading="lazy" 
                         alt="Obra Medina ${i}" 
                         onerror="this.src='jardins/jardins.jpg'">
                    <div class="scan-overlay"></div>
                </div>
                <div class="card-meta">
                    <h4>${label.toUpperCase()}</h4>
                </div>
            `;

            this.elements.grid.appendChild(card);

            // Observador de Revelação (Animação de Entrada)
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => card.classList.add('revealed'), i * 80);
                    }
                });
            }, { threshold: 0.15 });

            observer.observe(card);
        }
    }

    // 4. CONEXÕES SOBERANAS
    bindSovereignEvents() {
        // Gatilho do WhatsApp com Mensagem Personalizada
        document.getElementById('master-cta')?.addEventListener('click', (e) => {
            const msg = encodeURIComponent("Olá Medina! Sou um visitante do Núcleo Soberano e desejo um orçamento.");
            console.log("[SISTEMA]: Iniciando Conexão WhatsApp...");
        });

        // Navegação de Módulos (Jardinagem / Essências)
        document.getElementById('trigger-jardinagem')?.addEventListener('click', () => {
            document.getElementById('material-portfolio').scrollIntoView({ behavior: 'smooth' });
        });
    }

    printSystemLog() {
        console.log(`%c MEDINA SOVEREIGN SYSTEM `, "background: #1b4332; color: #d4af37; padding: 10px; font-weight: bold; border-radius: 5px;");
        console.log(`[IDENTIDADE]: Arquiteto José Patrick Castro Soares Reconhecido.`);
    }
}

// Iniciação do Sistema
window.addEventListener('DOMContentLoaded', () => {
    new MedinaKernel();
});
