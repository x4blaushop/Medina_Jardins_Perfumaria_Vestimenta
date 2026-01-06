/**
 * ============================================================================
 * MEDINA_SOVEREIGN_CORE_V14.0 - SISTEMA INTEGRADO DE GESTÃO E MATERIALIZAÇÃO
 * ARQUITETO PROPRIETÁRIO: JOSÉ PATRICK CASTRO SOARES
 * * DIAGNÓSTICO DE SEGURANÇA:
 * 1. ELEMENTS: ESTRUTURA MODULAR PURA (CASA LIMPA)
 * 2. NETWORK: INDEPENDÊNCIA DE RAIZ (GITHUB SOVEREIGN)
 * 3. CONSOLE: SILÊNCIO OPERACIONAL ABSOLUTO
 * * DESCRIÇÃO: ESTE ARQUIVO PROCESSA O DNA DA HABITAÇÃO, GERENCIANDO DESDE A 
 * FÍSICA ATMOSFÉRICA ATÉ A PROJEÇÃO FINANCEIRA C3X4.0_MAE.
 * ============================================================================
 */

const MedinaOS = (function() {

    // --- CAMADA DE DEFINIÇÃO DE CONSTANTES TÉCNICAS (DNA) ---
    const DNA_CONFIG = {
        OWNER: "JOSÉ PATRICK CASTRO SOARES",
        CORE_ID: "MEDINA-2026-X4",
        PATH_ASSETS: "jardins/",
        TOTAL_RECORDS: 20,
        GRAVITY_LEAF: 0.05,
        AUDIO_SENSITIVITY: 0.15,
        FINANCIAL_PRECISION: 2,
        STABILIZATION_YEAR: 2026,
        CURRENCY: "BRL"
    };

    // --- MATRIZ DE PRECIFICAÇÃO (RIQUEZA DE CATEGORIAS) ---
    const PRICING_MATRIX = {
        JARDINAGEM: {
            PODA_TECNICA: { id: "J01", val: 150.00, unit: "m²", desc: "Manutenção de solo e folhagem" },
            PAISAGISMO: { id: "J02", val: 450.00, unit: "projeto", desc: "Arquitetura vegetal completa" },
            RESTAURACAO: { id: "J03", val: 200.00, unit: "m²", desc: "Recuperação de ecossistema degradado" }
        },
        PERFUMARIA: {
            NATURA_ELITE: { id: "P01", val: 285.50, unit: "un", desc: "Curadoria Natura de alto padrão" },
            AVON_EXCLUSIVE: { id: "P02", val: 190.00, unit: "un", desc: "Linha internacional exclusiva" },
            CUIDADOS_LABORAIS: { id: "P03", val: 120.00, unit: "kit", desc: "Higiene e proteção profissional" }
        },
        VESTIMENTA: {
            ARMADURA_SOCIAL: { id: "V01", val: 1200.00, unit: "un", desc: "Design de vestimenta soberana" },
            ESTILO_MARCA: { id: "V02", val: 850.00, unit: "consultoria", desc: "Ajuste de DNA visual" }
        }
    };

    // --- ESTADO INTERNO DO SISTEMA ---
    let systemState = {
        isBiometryVerified: false,
        isAudioActive: false,
        currentCalculatedValue: 0,
        activeParticles: [],
        leafCount: 0,
        lastInteraction: Date.now()
    };

    /**
     * MÓDULO 01: MOTOR ATMOSFÉRICO (FÍSICA DE LUZ)
     * Detalhamento de renderização de partículas em 2D Canvas.
     */
    const LightEngine = {
        canvas: null,
        ctx: null,
        particles: [],

        init: function() {
            this.canvas = document.getElementById('lux-engine-medina');
            if (!this.canvas) return;
            this.ctx = this.canvas.getContext('2d');
            this.resize();
            window.addEventListener('resize', () => this.resize());
            this.createParticles();
            this.animate();
        },

        resize: function() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        },

        createParticles: function() {
            for (let i = 0; i < 100; i++) {
                this.particles.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 1.5,
                    alpha: Math.random() * 0.5
                });
            }
        },

        animate: function() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
                
                this.ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                this.ctx.fill();
            });
            requestAnimationFrame(() => this.animate());
        }
    };

    /**
     * MÓDULO 02: AMBIENTE DE NATUREZA (FÍSICA DE FOLHAS E SOM)
     * Processamento de ambiente sem poluição visual.
     */
    const NatureEngine = {
        audioVento: null,
        audioFolhas: null,

        init: function() {
            this.audioVento = document.getElementById('audio-vento');
            this.audioFolhas = document.getElementById('audio-folhas');
            this.startLeafSystem();
        },

        startLeafSystem: function() {
            setInterval(() => {
                if (systemState.leafCount < 15) { // Controle de densidade
                    this.createLeaf();
                }
            }, 3000);
        },

        createLeaf: function() {
            const leaf = document.createElement('div');
            leaf.className = 'folha-digital';
            leaf.innerHTML = '🍃';
            leaf.style.left = Math.random() * 100 + 'vw';
            leaf.style.fontSize = (Math.random() * 15 + 10) + 'px';
            leaf.style.animationDuration = (Math.random() * 8 + 7) + 's';
            
            document.body.appendChild(leaf);
            systemState.leafCount++;

            leaf.addEventListener('animationend', () => {
                leaf.remove();
                systemState.leafCount--;
            });
        },

        activateSound: function() {
            if (systemState.isAudioActive) return;
            this.audioVento.volume = DNA_CONFIG.AUDIO_SENSITIVITY;
            this.audioVento.play();
            systemState.isAudioActive = true;
            this.farfalharBackground();
        },

        farfalharBackground: function() {
            setInterval(() => {
                if (Math.random() > 0.8) {
                    this.audioFolhas.volume = 0.05;
                    this.audioFolhas.play();
                }
            }, 10000);
        }
    };

    /**
     * MÓDULO 03: GESTÃO FINANCEIRA C3X4.0_MAE
     * Lógica exaustiva de cálculo e projeção.
     */
    const FinanceEngine = {
        chart: null,

        init: function() {
            this.buildChart();
            this.bindEvents();
        },

        buildChart: function() {
            const ctx = document.getElementById('grafico-investimento');
            if (!ctx) return;
            this.chart = new Chart(ctx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: Array.from({length: 12}, (_, i) => `CICLO ${i+1}`),
                    datasets: [{
                        label: 'INVESTIMENTO PROJETADO',
                        data: Array(12).fill(0),
                        borderColor: '#d4af37',
                        borderWidth: 1,
                        backgroundColor: 'rgba(212, 175, 55, 0.05)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { beginAtZero: true, grid: { color: '#111' } },
                        x: { grid: { display: false } }
                    }
                }
            });
        },

        calculate: function() {
            const baseValue = parseFloat(document.getElementById('categoria-dna').value);
            const volume = parseFloat(document.getElementById('volume-dna').value) || 0;
            const months = parseInt(document.getElementById('tempo-dna').value);

            const subtotal = baseValue * volume;
            const total = subtotal * months;
            const monthly = total / months;

            // Injeção de Detalhes no Relatório Técnico
            this.renderReport(baseValue, volume, months, total, monthly);
            this.updateChart(monthly, months);

            document.getElementById('valor-total-final').innerText = `R$ ${total.toLocaleString('pt-BR')}`;
            document.getElementById('valor-mensal-final').innerText = `R$ ${monthly.toLocaleString('pt-BR')}`;
        },

        renderReport: function(p, v, m, t, mon) {
            const reportBox = document.getElementById('relatorio-medina-venda');
            const date = new Date().toLocaleString();
            
            reportBox.innerHTML = `
                [PROTOCOLO DE MATERIALIZAÇÃO MEDINA]
                DATA: ${date}
                ARQUITETO: ${DNA_CONFIG.OWNER}
                ------------------------------------------
                SISTEMA: C3X4.0_MAE
                VALOR UNITÁRIO: R$ ${p.toFixed(2)}
                QUANTIDADE ALOCADA: ${v}
                PERÍODO DE CICLO: ${m} MESES
                ------------------------------------------
                INVESTIMENTO BRUTO: R$ ${t.toLocaleString('pt-BR')}
                FLUXO MENSAL: R$ ${mon.toLocaleString('pt-BR')}
                STATUS: DNA_CONFIRMED
                ------------------------------------------
                ASSINATURA DIGITAL: 0x${Math.random().toString(16).slice(2, 10).toUpperCase()}
            `;
        },

        updateChart: function(monthly, months) {
            const newData = Array.from({length: 12}, (_, i) => i < months ? monthly * (i + 1) : null);
            this.chart.data.datasets[0].data = newData;
            this.chart.update();
        },

        bindEvents: function() {
            document.getElementById('executar-projeto').addEventListener('click', () => this.calculate());
        }
    };

    /**
     * MÓDULO 04: MATERIALIZAÇÃO DE ATIVOS (GALERIA)
     * Gestão de 20 registros com ID e metadados.
     */
    const AssetManager = {
        init: function() {
            const grid = document.getElementById('grid-medina-assets');
            if (!grid) return;

            for (let i = 1; i <= DNA_CONFIG.TOTAL_RECORDS; i++) {
                const fileName = (i === 19) ? 'jardins19_valores.jpg' : `jardins${i}.jpg`;
                const assetId = i.toString().padStart(3, '0');
                
                const card = document.createElement('div');
                card.className = 'asset-item';
                card.innerHTML = `
                    <img src="${DNA_CONFIG.PATH_ASSETS}${fileName}" loading="lazy" alt="Asset ${assetId}">
                    <div class="asset-overlay">REGISTRO ${assetId}</div>
                `;
                
                card.addEventListener('click', () => {
                    this.openLightbox(`${DNA_CONFIG.PATH_ASSETS}${fileName}`, assetId);
                    NatureEngine.activateSound(); // Ativa som na interação
                });
                
                grid.appendChild(card);
            }
        },

        openLightbox: function(src, id) {
            const lb = document.getElementById('visualizador-medina');
            document.getElementById('imagem-alvo').src = src;
            document.getElementById('asset-id-display').innerText = id;
            lb.classList.add('ativo');
        }
    };

    // --- INICIALIZAÇÃO DO NÚCLEO SOBERANO ---
    return {
        ignite: function() {
            LightEngine.init();
            NatureEngine.init();
            FinanceEngine.init();
            AssetManager.init();
            this.bindGlobalEvents();
        },

        bindGlobalEvents: function() {
            // Fechamento de Lightbox
            document.querySelector('.fechar-comando').addEventListener('click', () => {
                document.getElementById('visualizador-medina').classList.remove('ativo');
            });

            // Slider de tempo
            document.getElementById('tempo-dna').addEventListener('input', (e) => {
                document.getElementById('meses-valor').innerText = e.target.value;
            });

            // Clique na Biometria (Início de áudio e feedback visual)
            document.getElementById('biometria-trigger').addEventListener('click', function() {
                NatureEngine.activateSound();
                this.classList.add('verified');
                console.log("DNA JOSÉ PATRICK RECONHECIDO.");
            });
        }
    };

})();

// START OPERACIONAL
window.onload = () => MedinaOS.ignite();
