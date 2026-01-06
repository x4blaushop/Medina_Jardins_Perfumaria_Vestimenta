/**
 * MEDINA SOVEREIGN KERNEL v6.0
 * PROPRIEDADE: ARQUITETO JOSÉ PATRICK CASTRO SOARES
 * MÓDULOS: AMBIENTE, MATERIALIZAÇÃO, DIAGNÓSTICO, INTERAÇÃO
 */

class MedinaSovereign {
    constructor() {
        // --- 01. REGISTRO DE CONFIGURAÇÃO ---
        this.config = {
            owner: "JOSÉ PATRICK CASTRO SOARES",
            whatsapp: "5511996369611",
            totalMaterials: 20,
            assets: {
                basePath: "jardins/",
                prefix: "jardins",
                special: {
                    19: "jardins19_valores.jpg"
                }
            },
            registry: {
                1: "Precisão em Poda Geométrica e Alinhamento",
                2: "Arquitetura de Vasos e Design de Interiores",
                3: "Escultura Botânica e Modelagem de Copa",
                4: "Manutenção Sustentável e Nutrição de Solo",
                5: "Muro Esmeralda: Cercas Vivas de Alta Densidade",
                6: "Tecnologia de Maquinário Próprio Medina",
                19: "Protocolo Técnico de Valores e Orçamentos",
                20: "Legado Medina: Conclusão de Ecossistema"
            }
        };

        // --- 02. MAPEAMENTO DE ELEMENTOS ---
        this.dom = {
            canvas: document.getElementById('lux-engine-core'),
            grid: document.getElementById('sovereign-grid-engine'),
            lightNode: document.getElementById('light-node'),
            triggerJardim: document.getElementById('module-jardim'),
            waTrigger: document.getElementById('wa-trigger')
        };

        this.init();
    }

    async init() {
        console.log("INITIALIZING MEDINA KERNEL...");
        
        // Sequência de Ignição
        this.runDiagnostics();
        this.setupAtmosphere();
        this.materializeMatéria();
        this.bindSovereignEvents();
        
        console.log("SYSTEM STATUS: STABLE | OWNER IDENTIFIED: " + this.config.owner);
    }

    // --- 03. DIAGNÓSTICO: A CASA ESTÁ LIMPA? ---
    runDiagnostics() {
        console.group("SYSTEM DIAGNOSTICS");
        
        // 1. Aba Elements
        const structureOk = !!this.dom.grid && !!this.dom.canvas;
        console.log("Structure Status: " + (structureOk ? "CLEAN" : "MESSY"));

        // 2. Aba Network
        console.log("System Autonomy: INDEPENDENT (No external dependencies)");

        // 3. Aba Console
        console.log("Silence Operational: ACTIVE");
        
        console.groupEnd();
    }

    // --- 04. MOTOR ATMOSFÉRICO (LUX ENGINE) ---
    setupAtmosphere() {
        const ctx = this.dom.canvas.getContext('2d');
        let particles = [];

        const resize = () => {
            this.dom.canvas.width = window.innerWidth;
            this.dom.canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        // Criando o DNA visual (Poeira de Ouro e Esmeralda)
        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * this.dom.canvas.width,
                y: Math.random() * this.dom.canvas.height,
                radius: Math.random() * 2,
                speed: Math.random() * 0.4 + 0.1,
                opacity: Math.random() * 0.5,
                color: i % 2 === 0 ? '#d4af37' : '#2d6a4f'
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, this.dom.canvas.width, this.dom.canvas.height);
            
            particles.forEach(p => {
                p.y -= p.speed;
                if (p.y < 0) p.y = this.dom.canvas.height;
                
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.opacity;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            
            requestAnimationFrame(animate);
        };
        animate();

        // Seguidor de Luz Soberano
        document.addEventListener('mousemove', (e) => {
            this.dom.lightNode.style.left = `${e.clientX}px`;
            this.dom.lightNode.style.top = `${e.clientY}px`;
        });
    }

    // --- 05. MATERIALIZAÇÃO DE PORTFÓLIO (MATERIA ENGINE) ---
    materializeMatéria() {
        if (!this.dom.grid) return;

        console.log("MATERIALIZING 20 ASSETS FROM RAZ_MUTABLE...");

        for (let i = 1; i <= this.config.totalMaterials; i++) {
            const card = document.createElement('article');
            card.className = 'material-record-card';
            
            // Lógica de Arquivo Imutável
            const fileName = this.config.assets.special[i] || `${this.config.assets.prefix}${i}.jpg`;
            const title = this.config.registry[i] || `REGISTRO DE MATÉRIA ${i.toString().padStart(2, '0')}`;

            card.innerHTML = `
                <div class="card-media-box">
                    <img src="${this.config.assets.basePath}${fileName}" 
                         loading="lazy" 
                         alt="Obra Medina ${i}" 
                         onerror="this.src='jardins/jardins.jpg'">
                    <div class="media-scanner-line"></div>
                </div>
                <div class="card-info-box">
                    <h4 class="card-title">${title.toUpperCase()}</h4>
                </div>
            `;

            this.dom.grid.appendChild(card);

            // Observer para efeito de revelação progressiva
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('revealed');
                        }, i * 100);
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            revealObserver.observe(card);
        }
    }

    // --- 06. CONEXÕES SOBERANAS (EVENTS) ---
    bindSovereignEvents() {
        // Navegação para Portfólio
        this.dom.triggerJardim?.addEventListener('click', () => {
            document.getElementById('material-grid-section').scrollIntoView({ behavior: 'smooth' });
        });

        // WhatsApp com Log de Auditoria
        this.dom.waTrigger?.addEventListener('click', () => {
            console.log("WHATSAPP_HANDSHAKE: Requesting connection to Medina Master...");
        });
    }
}

// IGNITION
window.addEventListener('DOMContentLoaded', () => {
    window.MEDINA = new MedinaSovereign();
});
