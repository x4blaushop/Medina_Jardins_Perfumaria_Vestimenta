/**
 * ============================================================================
 * MEDINA_SOVEREIGN_CORE_V15.0 - SISTEMA INTEGRADO DE MATERIALIZAÇÃO
 * ARQUITETO PROPRIETÁRIO: JOSÉ PATRICK CASTRO SOARES
 * ----------------------------------------------------------------------------
 * DIAGNÓSTICO DE ESTABILIDADE (DNA):
 * 1. ELEMENTS: "A CASA ESTÁ LIMPA" - ESTRUTURA MODULAR PURA.
 * 2. NETWORK: "O SISTEMA É INDEPENDENTE" - ZERO EXTERNAL OVERHEAD.
 * 3. CONSOLE: "O SISTEMA ESTÁ EM SILÊNCIO" - ESTABILIDADE ABSOLUTA.
 * ============================================================================
 */

(function(window, document) {
    "use strict";

    // --- DEFINIÇÃO DE CONSTANTES TÉCNICAS (O DNA DO SISTEMA) ---
    const DNA = {
        OWNER: "JOSÉ PATRICK CASTRO SOARES",
        ID: "MEDINA_2026_SOVEREIGN",
        VERSION: "15.0.4",
        YEAR: 2026,
        ASSET_PATH: "jardins/",
        TOTAL_RECORDS: 20,
        AUDIO_LEVEL: 0.12,
        PARTICLE_DENSITY: 80,
        LEAF_INTERVAL: 4000
    };

    // --- MOTOR SENSORIAL (ÁUDIO E ATMOSFERA) ---
    const SensoryEngine = {
        wind: null,
        leaves: null,
        isInitialized: false,

        setup: function() {
            this.wind = document.getElementById('audio-vento');
            this.leaves = document.getElementById('audio-folhas');
            if (this.wind) this.wind.volume = DNA.AUDIO_LEVEL;
        },

        ignite: function() {
            if (this.isInitialized) return;
            this.wind.play().catch(() => {});
            this.isInitialized = true;
            console.log("[DNA]: ATMOSFERA SENSORIAL ATIVADA.");
        },

        triggerLeafSound: function(volume = 0.05) {
            if (!this.isInitialized) return;
            const sound = this.leaves.cloneNode();
            sound.volume = volume;
            sound.play();
        }
    };

    // --- MOTOR DE PARTÍCULAS (LUX ENGINE) ---
    const LuxEngine = {
        canvas: null,
        ctx: null,
        points: [],

        init: function() {
            this.canvas = document.getElementById('lux-engine-medina');
            if (!this.canvas) return;
            this.ctx = this.canvas.getContext('2d');
            this.resize();
            this.create();
            this.animate();
            window.addEventListener('resize', () => this.resize());
        },

        resize: function() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        },

        create: function() {
            for (let i = 0; i < DNA.PARTICLE_DENSITY; i++) {
                this.points.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    s: Math.random() * 0.8,
                    o: Math.random()
                });
            }
        },

        animate: function() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = "rgba(212, 175, 55, 0.2)";
            this.points.forEach(p => {
                p.y -= p.s;
                if (p.y < 0) p.y = this.canvas.height;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
                this.ctx.fill();
            });
            requestAnimationFrame(() => this.animate());
        }
    };

    // --- MOTOR DE NATUREZA (FOLHAS) ---
    const NatureEngine = {
        init: function() {
            setInterval(() => this.spawnLeaf(), DNA.LEAF_INTERVAL);
        },

        spawnLeaf: function() {
            const leaf = document.createElement('div');
            leaf.className = 'folha-digital';
            leaf.innerHTML = '🍃';
            leaf.style.left = Math.random() * 100 + "vw";
            leaf.style.fontSize = (Math.random() * 10 + 15) + "px";
            leaf.style.animationDuration = (Math.random() * 5 + 8) + "s";
            document.body.appendChild(leaf);
            
            leaf.addEventListener('animationend', () => leaf.remove());
        }
    };

    // --- MOTOR FINANCEIRO C3X4.0_MAE ---
    const FinanceEngine = {
        chart: null,

        init: function() {
            const ctx = document.getElementById('grafico-investimento');
            if (!ctx) return;
            this.chart = new Chart(ctx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['INÍCIO', 'MÊS 3', 'MÊS 6', 'MÊS 9', 'MÊS 12'],
                    datasets: [{
                        data: [0, 0, 0, 0, 0],
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
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { grid: { color: '#111' }, ticks: { color: '#444' } },
                        x: { grid: { display: false }, ticks: { color: '#444' } }
                    }
                }
            });
        },

        execute: function() {
            const price = parseFloat(document.getElementById('categoria-dna').value);
            const qty = parseFloat(document.getElementById('volume-dna').value) || 0;
            const months = parseInt(document.getElementById('tempo-dna').value);
            
            const total = price * qty * months;
            const monthly = total / months;

            document.getElementById('valor-total-final').innerText = `R$ ${total.toLocaleString('pt-BR')}`;
            document.getElementById('valor-mensal-final').innerText = `R$ ${monthly.toLocaleString('pt-BR')}`;

            this.updateChart(total, months);
            this.generateReport(price, qty, months, total, monthly);
        },

        updateChart: function(total, months) {
            const dataPoints = [0, total * 0.25, total * 0.5, total * 0.75, total];
            this.chart.data.datasets[0].data = dataPoints;
            this.chart.update();
        },

        generateReport: function(p, q, m, t, mon) {
            const report = document.getElementById('relatorio-medina-venda');
            const cat = document.getElementById('categoria-dna').selectedOptions[0].text;
            report.innerHTML = `
[PROPOSTA TÉCNICA MEDINA]
ARQUITETO: ${DNA.OWNER}
DATA: ${new Date().toLocaleDateString()}
------------------------------------------
ATIVO: ${cat}
VOLUME: ${q} UN/M² | CICLO: ${m} MESES
TOTAL: R$ ${t.toLocaleString('pt-BR')}
MENSAL: R$ ${mon.toLocaleString('pt-BR')}
------------------------------------------
DNA_STATUS: VERIFIED_SOVEREIGN
            `;
        }
    };

    // --- GESTOR DE ATIVOS (GALERIA) ---
    const AssetManager = {
        init: function() {
            const grid = document.getElementById('grid-medina-assets');
            if (!grid) return;

            for (let i = 1; i <= DNA.TOTAL_RECORDS; i++) {
                const id = i.toString().padStart(3, '0');
                const file = (i === 19) ? 'jardins19_valores.jpg' : `jardins${i}.jpg`;
                
                const item = document.createElement('div');
                item.className = 'asset-item';
                item.innerHTML = `<img src="${DNA.ASSET_PATH}${file}" loading="lazy">`;
                
                item.onclick = () => {
                    SensoryEngine.ignite();
                    SensoryEngine.triggerLeafSound(0.2);
                    this.show(DNA.ASSET_PATH + file, id);
                };
                grid.appendChild(item);
            }
        },

        show: function(src, id) {
            const lb = document.getElementById('visualizador-medina');
            document.getElementById('imagem-alvo').src = src;
            document.getElementById('asset-id-display').innerText = id;
            lb.classList.add('ativo');
        }
    };

    // --- NÚCLEO DE CONTROLE GLOBAL ---
    const Core = {
        init: function() {
            LuxEngine.init();
            NatureEngine.init();
            FinanceEngine.init();
            AssetManager.init();
            SensoryEngine.setup();
            this.bind();
            console.log("HABITAÇÃO MEDINA: MATERIALIZAÇÃO CONCLUÍDA.");
        },

        bind: function() {
            document.getElementById('executar-projeto').onclick = () => FinanceEngine.execute();
            document.getElementById('biometria-trigger').onclick = () => SensoryEngine.ignite();
            document.querySelector('.fechar-comando').onclick = () => {
                document.getElementById('visualizador-medina').classList.remove('ativo');
            };
            document.getElementById('tempo-dna').oninput = (e) => {
                document.getElementById('meses-valor').innerText = e.target.value;
            };
            document.getElementById('whatsapp-venda-trigger').onclick = () => {
                const msg = encodeURIComponent("*HABITAÇÃO MEDINA*\n" + document.getElementById('relatorio-medina-venda').innerText);
                window.open(`https://wa.me/5511996369611?text=${msg}`);
            };
        }
    };

    // START
    window.addEventListener('DOMContentLoaded', () => Core.init());

})(window, document);
