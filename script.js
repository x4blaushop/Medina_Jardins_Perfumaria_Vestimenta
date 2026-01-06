/**
 * ============================================================================
 * MEDINA_SOVEREIGN_KERNEL_V15.0 - CORE ENGINE
 * ARQUITETO PROPRIETÁRIO: JOSÉ PATRICK CASTRO SOARES
 * ESTABILIZAÇÃO GERAL DO DNA: 2026
 * ----------------------------------------------------------------------------
 * PROTOCOLO DE DIAGNÓSTICO:
 * 1. ELEMENTS: ESTRUTURA MODULAR PURA.
 * 2. NETWORK: INDEPENDÊNCIA DE RAIZ /JARDINS/.
 * 3. CONSOLE: SILÊNCIO OPERACIONAL ABSOLUTO.
 * ============================================================================
 */

(function(window, document) {
    "use strict";

    // --- BLOCO 01: CONSTANTES DE CONFIGURAÇÃO DE DNA (RAIZ) ---
    const DNA_CONFIG = {
        OWNER: "JOSÉ PATRICK CASTRO SOARES",
        CORE_ID: "MEDINA-X4-2026",
        ROOT_PATH: "jardins/",
        TOTAL_ASSETS: 20,
        SYSTEM_STABILIZED: true,
        AUDIO_SENSITIVITY: 0.15,
        LEAF_DENSITY: 12,
        PARTICLE_COUNT: 100,
        CURRENCY: "BRL"
    };

    // --- BLOCO 02: ESTADO INTERNO DO SISTEMA (VOLATILE MEMORY) ---
    let SystemState = {
        isBiometricVerified: false,
        isAudioActive: false,
        activeLeaves: 0,
        lastCalculation: null,
        sessionStartTime: Date.now()
    };

    /**
     * MÓDULO SENSORIAL: ATMOSFERA E ACÚSTICA
     * Processamento de áudio harmônico e integração de natureza digital.
     */
    const SensoryModule = {
        vento: null,
        folhas: null,

        init: function() {
            this.vento = document.getElementById('audio-vento');
            this.folhas = document.getElementById('audio-folhas');
            this.setupLevels();
            console.log("[SENSORY]: MOTOR ACÚSTICO CARREGADO EM SILÊNCIO.");
        },

        setupLevels: function() {
            if (this.vento) this.vento.volume = DNA_CONFIG.AUDIO_SENSITIVITY;
        },

        activate: function() {
            if (SystemState.isAudioActive) return;
            this.vento.play().catch(() => {
                console.warn("[SENSORY]: AGUARDANDO INTERAÇÃO HUMANA PARA DESBLOQUEIO DE ÁUDIO.");
            });
            SystemState.isAudioActive = true;
            this.startAmbientIntervals();
        },

        playInteractionSound: function(vol = 0.1) {
            if (!SystemState.isAudioActive) this.activate();
            const fx = this.folhas.cloneNode();
            fx.volume = vol;
            fx.play();
        },

        startAmbientIntervals: function() {
            // Farfalhar aleatório para simular vida na habitação
            setInterval(() => {
                if (Math.random() > 0.8) this.playInteractionSound(0.05);
            }, 8000);
        }
    };

    /**
     * MÓDULO DE LUX: ENGINE DE PARTÍCULAS (CANVAS)
     * Renderização de poeira dourada e luz ambiente.
     */
    const LuxEngine = {
        canvas: null,
        ctx: null,
        particles: [],

        init: function() {
            this.canvas = document.getElementById('lux-engine-canvas');
            if (!this.canvas) return;
            this.ctx = this.canvas.getContext('2d');
            this.resize();
            window.addEventListener('resize', () => this.resize());
            this.build();
            this.loop();
        },

        resize: function() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        },

        build: function() {
            for (let i = 0; i < DNA_CONFIG.PARTICLE_COUNT; i++) {
                this.particles.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    r: Math.random() * 1.2,
                    o: Math.random() * 0.5
                });
            }
        },

        loop: function() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = "rgba(212, 175, 55, 0.2)";
            this.particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                this.ctx.fill();
            });
            requestAnimationFrame(() => this.loop());
        }
    };

    /**
     * MÓDULO DE NATUREZA: MATERIALIZAÇÃO DE FOLHAS
     */
    const NatureModule = {
        init: function() {
            setInterval(() => {
                if (SystemState.activeLeaves < DNA_CONFIG.LEAF_DENSITY) {
                    this.spawn();
                }
            }, 5000);
        },

        spawn: function() {
            const leaf = document.createElement('div');
            leaf.className = 'folha-digital';
            leaf.innerHTML = '🍃';
            leaf.style.left = (Math.random() * 100) + 'vw';
            leaf.style.animationDuration = (Math.random() * 6 + 7) + 's';
            leaf.style.opacity = Math.random();
            
            document.body.appendChild(leaf);
            SystemState.activeLeaves++;

            leaf.addEventListener('animationend', () => {
                leaf.remove();
                SystemState.activeLeaves--;
            });
        }
    };

    /**
     * MÓDULO FINANCEIRO: C3X4.0_MAE
     * Algoritmo de projeção de investimentos e relatórios.
     */
    const FinanceEngine = {
        chart: null,

        init: function() {
            this.setupChart();
            this.bind();
        },

        setupChart: function() {
            const ctx = document.getElementById('grafico-investimento-medina');
            if (!ctx) return;
            this.chart = new Chart(ctx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['START', 'Q1', 'Q2', 'Q3', 'Q4'],
                    datasets: [{
                        label: 'INVESTIMENTO',
                        data: [0, 0, 0, 0, 0],
                        borderColor: '#d4af37',
                        borderWidth: 1,
                        pointBackgroundColor: '#d4af37',
                        backgroundColor: 'rgba(212, 175, 55, 0.05)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { grid: { display: false }, ticks: { color: '#444' } },
                        y: { grid: { color: '#111' }, ticks: { color: '#444' } }
                    }
                }
            });
        },

        process: function() {
            const unitPrice = parseFloat(document.getElementById('categoria-dna').value);
            const volume = parseFloat(document.getElementById('volume-dna').value) || 0;
            const cycle = parseInt(document.getElementById('tempo-dna').value);

            const total = unitPrice * volume * cycle;
            const monthly = total / cycle;

            // Atualização da Interface
            document.getElementById('valor-total-final').innerText = `R$ ${total.toLocaleString('pt-BR')}`;
            document.getElementById('valor-mensal-final').innerText = `R$ ${monthly.toLocaleString('pt-BR')}`;

            this.updateChart(total);
            this.logReport(unitPrice, volume, cycle, total, monthly);
            SensoryModule.playInteractionSound(0.2);
        },

        updateChart: function(max) {
            const points = [0, max * 0.2, max * 0.5, max * 0.8, max];
            this.chart.data.datasets[0].data = points;
            this.chart.update();
        },

        logReport: function(p, v, c, t, m) {
            const output = document.getElementById('relatorio-medina-venda');
            const cat = document.getElementById('categoria-dna').selectedOptions[0].text;
            
            output.innerHTML = `
[PROTOCOLO MATERIALIZADO]
ARQUITETO: ${DNA_CONFIG.OWNER}
SISTEMA: C3X4.0_MAE
------------------------------------------
ATIVO SELECIONADO: ${cat}
VOLUME DE ALOCAÇÃO: ${v} UN/M²
CICLO DE CONTRATO: ${c} MESES
INVESTIMENTO TOTAL: R$ ${t.toLocaleString('pt-BR')}
FLUXO MENSAL ESTIMADO: R$ ${m.toLocaleString('pt-BR')}
------------------------------------------
STATUS DNA: VERIFICADO_2026
            `;
        },

        bind: function() {
            document.getElementById('executar-projeto').onclick = () => this.process();
            document.getElementById('tempo-dna').oninput = (e) => {
                document.getElementById('meses-valor').innerText = e.target.value;
            };
        }
    };

    /**
     * MÓDULO DE ASSETS: GESTÃO DA GALERIA /JARDINS/
     */
    const AssetManager = {
        init: function() {
            const grid = document.getElementById('grid-medina-assets');
            if (!grid) return;

            for (let i = 1; i <= DNA_CONFIG.TOTAL_ASSETS; i++) {
                const id = i.toString().padStart(3, '0');
                const file = (i === 19) ? 'jardins19_valores.jpg' : `jardins${i}.jpg`;
                
                const item = document.createElement('div');
                item.className = 'asset-item';
                item.innerHTML = `
                    <img src="${DNA_CONFIG.ROOT_PATH}${file}" alt="Asset ${id}" loading="lazy">
                `;
                
                item.onclick = () => {
                    this.openLightbox(`${DNA_CONFIG.ROOT_PATH}${file}`, id);
                    SensoryModule.playInteractionSound(0.2);
                };
                
                grid.appendChild(item);
            }
        },

        openLightbox: function(src, id) {
            const lb = document.getElementById('visualizador-medina');
            document.getElementById('imagem-alvo').src = src;
            document.getElementById('asset-id-display').innerText = id;
            lb.classList.add('active');
        }
    };

    /**
     * CONTROLE MESTRE: INICIALIZAÇÃO INTEGRADA
     */
    const MasterCore = {
        ignite: function() {
            LuxEngine.init();
            NatureModule.init();
            SensoryModule.init();
            FinanceEngine.init();
            AssetManager.init();
            this.bindGlobal();
            
            console.log("%c MEDINA OS: SISTEMA ESTABILIZADO. BEM-VINDO, ARQUITETO JOSÉ PATRICK.", "color: #d4af37; font-weight: bold;");
        },

        bindGlobal: function() {
            // Biometria
            document.getElementById('biometric-access-trigger').onclick = function() {
                SensoryModule.activate();
                this.querySelector('.auth-status').innerText = "BIO_ID: DNA_CONFIRMADO";
                this.style.borderColor = "#ffffff";
            };

            // Fechamento Lightbox
            document.querySelector('.close-lightbox').onclick = () => {
                document.getElementById('visualizador-medina').classList.remove('active');
            };

            // Trigger WhatsApp
            document.getElementById('whatsapp-venda-trigger')?.addEventListener('click', () => {
                const report = document.getElementById('relatorio-medina-venda').innerText;
                const encoded = encodeURIComponent("*MEDINA SOBERANO*\n" + report);
                window.open(`https://wa.me/5511996369611?text=${encoded}`);
            });
        }
    };

    // INICIALIZAÇÃO DEFINITIVA
    window.addEventListener('DOMContentLoaded', () => MasterCore.ignite());

})(window, document);
