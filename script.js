/* ============================================================================
   MEDINA_SOVEREIGN_ENGINE_V15.0 - MOTOR DE MATERIALIZAÇÃO
   ARQUITETO PROPRIETÁRIO: JOSÉ PATRICK CASTRO SOARES
   ESTABILIZAÇÃO GERAL DO DNA: 2026
   ============================================================================ */

const MEDINA_SYSTEM = {
    owner: "José Patrick Castro Soares",
    assets: [
        { id: "DNA-01", title: "PRECISION PODA", file: "manutencao_cerca_viva_precision.jpg", group: "JARDINAGEM" },
        { id: "DNA-02", title: "ESTRUTURAL SOLO", file: "preparacao_solo_plantio.jpg", group: "JARDINAGEM" },
        { id: "DNA-03", title: "CANTEIRO MOREIA", file: "limpeza_canteiro_moreia.jpg", group: "JARDINAGEM" },
        { id: "DNA-04", title: "ESSÊNCIA NATURA", file: "ornamentacao_vaso_essencia.jpg", group: "PERFUMARIA" },
        { id: "DNA-05", title: "ARMADURA SOCIAL", file: "identidade_visual_medina_jardim.jpg", group: "VESTIMENTA" }
    ],
    chart: null,

    init() {
        this.iniciarLuxEngine();
        this.renderizarGaleria();
        this.configurarListeners();
        this.processarInvestimento();
        this.biometriaSimulada();
        console.log("[SISTEMA]: DNA CARREGADO COM SUCESSO.");
    },

    /* --- MOTOR DE PARTÍCULAS (BELEZA E HARMONIA) --- */
    iniciarLuxEngine() {
        const canvas = document.getElementById('lux-engine-canvas');
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
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
            draw() {
                ctx.fillStyle = "rgba(212, 175, 55, 0.3)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < 80; i++) particles.push(new Particle());

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animate);
        }
        animate();
    },

    /* --- CALCULADORA DE PROJEÇÃO SOBERANA --- */
    processarInvestimento() {
        const formula = document.getElementById('formula-input').value;
        const meses = parseInt(document.getElementById('tempo-dna').value);
        const log = document.getElementById('terminal-log');
        const displayTotal = document.getElementById('valor-total-final');

        try {
            const labels = Array.from({length: meses}, (_, i) => `CICLO ${i + 1}`);
            const dataY = labels.map((_, i) => math.evaluate(formula, {x: i + 1}));
            const total = dataY[dataY.length - 1];

            displayTotal.innerText = `R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
            
            // Lógica de Alerta Visual
            if (total > 10000) {
                displayTotal.style.color = "#ff0000";
                log.innerText = `[ALERTA]: INVESTIMENTO DE ALTO IMPACTO DETECTADO.\nTOTAL: R$ ${total.toFixed(2)}\nREVISÃO RECOMENDADA.`;
            } else {
                displayTotal.style.color = "#d4af37";
                log.innerText = `[LOG]: MATERIALIZAÇÃO ESTÁVEL. TOTAL: R$ ${total.toFixed(2)}`;
            }

            this.atualizarGrafico(labels, dataY);
        } catch (e) {
            log.innerText = "[ERRO]: FALHA NA SINTAXE DO DNA MATEMÁTICO.";
        }
    },

    atualizarGrafico(labels, data) {
        const ctx = document.getElementById('grafico-investimento-medina').getContext('2d');
        if (this.chart) this.chart.destroy();

        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'PROJEÇÃO DE ATIVOS',
                    data: data,
                    borderColor: '#d4af37',
                    backgroundColor: 'rgba(212, 175, 55, 0.05)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { 
                    y: { grid: { color: '#111' }, ticks: { color: '#d4af37' } },
                    x: { ticks: { color: '#444' } }
                },
                plugins: { legend: { display: false } }
            }
        });
    },

    /* --- GESTÃO DE GALERIA E LIGHTBOX --- */
    renderizarGaleria() {
        const grid = document.getElementById('grid-medina-assets');
        grid.innerHTML = this.assets.map(asset => `
            <div class="asset-item" onclick="MEDINA_SYSTEM.abrirLightbox('img/${asset.file}', '${asset.id}')">
                <img src="img/${asset.file}" alt="${asset.title}">
                <div class="asset-overlay">
                    <span class="asset-id">${asset.id}</span>
                    <h3>${asset.title}</h3>
                </div>
            </div>
        `).join('');
    },

    abrirLightbox(src, id) {
        const lb = document.getElementById('visualizador-medina');
        document.getElementById('imagem-alvo').src = src;
        document.getElementById('asset-id-display').innerText = id;
        lb.style.display = 'flex';
    },

    configurarListeners() {
        document.getElementById('executar-projeto').addEventListener('click', () => this.processarInvestimento());
        document.getElementById('tempo-dna').addEventListener('input', (e) => {
            document.getElementById('meses-valor').innerText = e.target.value;
        });
        document.querySelector('.close-lightbox').addEventListener('click', () => {
            document.getElementById('visualizador-medina').style.display = 'none';
        });
    },

    biometriaSimulada() {
        document.getElementById('biometric-access-trigger').addEventListener('click', () => {
            alert("SISTEMA RECONHECEU DNA: JOSÉ PATRICK CASTRO SOARES. ACESSO SOBERANO.");
        });
    }
};

document.addEventListener('DOMContentLoaded', () => MEDINA_SYSTEM.init());
