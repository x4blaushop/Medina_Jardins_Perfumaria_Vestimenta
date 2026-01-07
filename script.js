/* ============================================================================
   MEDINA_SENSORY_ENGINE_V15.0 - MATERIALIZAÇÃO DE LÓGICA COMPLEXA
   ARQUITETO PROPRIETÁRIO: JOSÉ PATRICK CASTRO SOARES
   ESTABILIZAÇÃO GERAL DO DNA: 2026
   ============================================================================ */

const MEDINA_CORE = {
    owner: "José Patrick Castro Soares",
    version: "C3X4.0_MAE",
    status: "SOVEREIGN_MODE",
    
    // Categorização de Ativos (Inovação e Beleza)
    assets: [
        { id: "J01", group: "Jardinagem", type: "Precision", title: "MANUTENÇÃO CERCA VIVA", file: "manutencao_cerca_viva_precision.jpg", description: "Poda técnica com estabilização de crescimento linear." },
        { id: "J02", group: "Jardinagem", type: "Estrutural", title: "PREPARAÇÃO DE SOLO", file: "preparacao_solo_plantio.jpg", description: "Reequilíbrio de pH e oxigenação para novos ciclos." },
        { id: "J03", group: "Jardinagem", type: "Restauração", title: "LIMPEZA DE CANTEIRO", file: "limpeza_canteiro_moreia.jpg", description: "Remoção de ruído orgânico e harmonia de canteiros." },
        { id: "P01", group: "Perfumaria", type: "Essência", title: "CURADORIA NATURA ELITE", file: "ornamentacao_vaso_essencia.jpg", description: "Alocação de fragrâncias soberanas integrada ao ambiente." },
        { id: "V01", group: "Vestimenta", type: "Armadura", title: "IDENTIDADE VISUAL V15", file: "identidade_visual_medina_jardim.jpg", description: "Materialização da autoridade através da estética industrial." }
    ],

    // Motor de Projeção Gráfica
    chart: null,

    init() {
        console.log("%c MEDINA SOBERANO - DNA CARREGADO ", "background: #d4af37; color: #000; font-weight: bold;");
        this.materializarGaleria();
        this.iniciarLuxEngine();
        this.configurarBiometria();
        this.executarCalculoProjecao();
        
        // Listeners de Expansão
        document.getElementById('executar-projeto').addEventListener('click', () => this.executarCalculoProjecao());
        document.getElementById('tempo-dna').addEventListener('input', (e) => {
            document.getElementById('meses-valor').innerText = e.target.value;
            this.executarCalculoProjecao(); // Atualização em tempo real
        });
    },

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
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = Math.random() > 0.5 ? '#d4af37' : '#ffffff';
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.001;
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (particles.length < 100) particles.push(new Particle());
            particles.forEach((p, i) => {
                p.update();
                p.draw();
                if (p.size <= 0.2) particles.splice(i, 1);
            });
            requestAnimationFrame(animate);
        };
        animate();
    },

    executarCalculoProjecao() {
        const formulaInput = document.getElementById('formula-input').value;
        const meses = parseInt(document.getElementById('tempo-dna').value);
        const log = document.getElementById('terminal-log');
        
        try {
            const labels = Array.from({length: meses}, (_, i) => `CICLO ${i + 1}`);
            const dataY = labels.map((_, i) => math.evaluate(formulaInput, {x: i + 1}));
            const total = dataY[dataY.length - 1];

            document.getElementById('valor-total-final').innerText = `R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
            
            this.renderizarGrafico(labels, dataY);
            log.innerText = `[LOG]: MATERIALIZAÇÃO SOBERANA EXECUTADA.\n[FÓRMULA]: ${formulaInput}\n[TOTAL]: R$ ${total.toFixed(2)}\n[STATUS]: SISTEMA ESTÁVEL.`;
            
        } catch (err) {
            log.innerText = `[ALERTA]: ERRO NA SINTAXE DO DNA MATEMÁTICO. AGUARDANDO CORREÇÃO DO ARQUITETO.`;
        }
    },

    renderizarGrafico(labels, data) {
        const ctx = document.getElementById('grafico-investimento-medina').getContext('2d');
        if (this.chart) this.chart.destroy();

        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'ALOCAÇÃO DE CAPITAL',
                    data: data,
                    borderColor: '#d4af37',
                    borderWidth: 3,
                    pointRadius: 4,
                    pointBackgroundColor: '#020302',
                    pointBorderColor: '#d4af37',
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
                    y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#d4af37', font: { family: 'Courier New' } } },
                    x: { grid: { display: false }, ticks: { color: '#555', font: { family: 'Courier New' } } }
                }
            }
        });
    },

    materializarGaleria() {
        const grid = document.getElementById('grid-medina-assets');
        grid.innerHTML = this.assets.map(asset => `
            <div class="asset-item" onclick="MEDINA_CORE.abrirLightbox('${asset.file}', '${asset.title}')">
                <img src="img/${asset.file}" alt="${asset.title}">
                <div class="asset-overlay">
                    <span class="asset-id">${asset.id}</span>
                    <span class="asset-group">${asset.group}</span>
                    <h3>${asset.title}</h3>
                </div>
            </div>
        `).join('');
    },

    configurarBiometria() {
        const trigger = document.getElementById('biometric-access-trigger');
        trigger.addEventListener('click', () => {
            const status = document.querySelector('.auth-status');
            status.innerText = "BIO_ID: DNA_RECONHECIDO";
            status.style.color = "#00ff00";
            alert("ACESSO SOBERANO CONFIRMADO: JOSÉ PATRICK");
        });
    }
};

document.addEventListener('DOMContentLoaded', () => MEDINA_CORE.init());
/* ============================================================================
   MÓDULO DE ALERTA DE CAPITAL - C3X4.0_MAE
   LOGICA: SE VALOR > 10.000 -> ESTADO DE ALERTA (RED_DNA)
   ============================================================================ */

function processarProjecao() {
    const formula = document.getElementById('formula-input').value;
    const meses = parseInt(document.getElementById('tempo-dna').value);
    const ctx = document.getElementById('grafico-investimento-medina').getContext('2d');
    const log = document.getElementById('terminal-log');
    const valorDisplay = document.getElementById('valor-total-final');
    const btnMaterializar = document.getElementById('executar-projeto');

    try {
        const labels = Array.from({length: meses}, (_, i) => `CICLO ${i + 1}`);
        const dataY = labels.map((_, i) => math.evaluate(formula, {x: i + 1}));
        const total = dataY[dataY.length - 1];

        // --- GESTÃO DE ESTADO SOBERANO (ALERTA) ---
        const LIMITE_ALERTA = 10000;
        let corSistema = '#d4af37'; // Ouro Padrão
        let corFundo = 'rgba(212, 175, 55, 0.1)';

        if (total > LIMITE_ALERTA) {
            corSistema = '#ff0000'; // Alerta Vermelho
            corFundo = 'rgba(255, 0, 0, 0.2)';
            log.innerText = `[ALERTA]: INVESTIMENTO DE ALTO IMPACTO DETECTADO.\n[TOTAL]: R$ ${total.toFixed(2)}\n[STATUS]: REVISÃO DO ARQUITETO NECESSÁRIA.`;
            btnMaterializar.style.borderColor = "#ff0000";
            btnMaterializar.style.color = "#ff0000";
            valorDisplay.style.color = "#ff0000";
        } else {
            log.innerText = `[LOG]: MATERIALIZAÇÃO ESTÁVEL.\n[TOTAL]: R$ ${total.toFixed(2)}\n[STATUS]: DENTRO DOS PARÂMETROS DE OURO.`;
            btnMaterializar.style.borderColor = "#d4af37";
            btnMaterializar.style.color = "#d4af37";
            valorDisplay.style.color = "#d4af37";
        }

        document.getElementById('valor-total-final').innerText = `R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;

        if (medinaChart) medinaChart.destroy();

        medinaChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'ALOCAÇÃO DE CAPITAL',
                    data: dataY,
                    borderColor: corSistema,
                    backgroundColor: corFundo,
                    borderWidth: 3,
                    pointBackgroundColor: corSistema,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { 
                    y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: corSistema } },
                    x: { grid: { display: false }, ticks: { color: '#444' } }
                }
            }
        });
    } catch (e) {
        log.innerText = "[ERROR]: DNA MATEMÁTICO INCOMPLETO.";
    }
}
