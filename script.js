/* MEDINA_SOVEREIGN_ENGINE_V15.0 - ARQUITETO JOSÉ PATRICK */
const MEDINA = {
    chart: null,
    
    init() {
        this.luxEngine();
        this.materializarGaleria();
        this.executarCalculo();
        this.listeners();
        console.log("Medina/jardins/perfumaria/vestuário: DNA ATIVO");
    },

    luxEngine() {
        const c = document.getElementById('lux-engine-canvas');
        const ctx = c.getContext('2d');
        let particles = [];
        const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
        window.onresize = resize; resize();
        for(let i=0; i<120; i++) particles.push({x:Math.random()*c.width, y:Math.random()*c.height, s:Math.random()*1.5});
        const animate = () => {
            ctx.clearRect(0,0,c.width,c.height);
            ctx.fillStyle = "rgba(212, 175, 55, 0.15)";
            particles.forEach(p => {
                ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, Math.PI*2); ctx.fill();
                p.y -= 0.4; if(p.y < 0) p.y = c.height;
            });
            requestAnimationFrame(animate);
        };
        animate();
    },

    materializarGaleria() {
        const grid = document.getElementById('asset-grid');
        // Mapeamento real dos arquivos no GitHub
        const imagens = ['jardins.jpg'];
        for(let i=1; i<=18; i++) imagens.push(`jardins${i}.jpg`);
        imagens.push('jardins19_valores.jpg');

        grid.innerHTML = imagens.map(img => `
            <div class="asset-item">
                <img src="jardins/${img}" alt="Ativo Medina" onerror="this.parentElement.style.display='none'">
                <div style="position:absolute; bottom:20px; left:20px; font-size:0.65rem; color:var(--p-gold); letter-spacing:2px; font-weight:900;">
                    REF: ${img.toUpperCase()}
                </div>
            </div>
        `).join('');
    },

    executarCalculo() {
        const formula = document.getElementById('formula-input').value;
        const meses = parseInt(document.getElementById('tempo-dna').value);
        const ctx = document.getElementById('grafico-medina').getContext('2d');
        const log = document.getElementById('terminal-log');

        try {
            const labels = Array.from({length: meses}, (_, i) => `CICLO ${i+1}`);
            const dataY = labels.map((_, i) => math.evaluate(formula, {x: i+1}));
            const total = dataY[dataY.length - 1];

            document.getElementById('total-display').innerText = `R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
            log.innerText = `[LOG]: MATERIALIZAÇÃO FINALIZADA. VALOR PROJETADO EM ${meses} MESES: R$ ${total.toFixed(2)}`;

            if(this.chart) this.chart.destroy();
            this.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        data: dataY, borderColor: '#d4af37', backgroundColor: 'rgba(212, 175, 55, 0.05)',
                        fill: true, tension: 0.4, borderWidth: 3, pointRadius: 2
                    }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { 
                        y: { grid: { color: '#1a1a1a' }, ticks: { color: '#d4af37' } },
                        x: { ticks: { color: '#333' } }
                    }
                }
            });
        } catch (e) { log.innerText = "[ERRO]: FALHA NA SINTAXE DO DNA MATEMÁTICO."; }
    },

    listeners() {
        document.getElementById('executar-projeto').onclick = () => this.executarCalculo();
        document.getElementById('tempo-dna').oninput = (e) => {
            document.getElementById('meses-valor').innerText = e.target.value;
            this.executarCalculo();
        };
        document.getElementById('biometric-trigger').onclick = () => {
            const status = document.getElementById('auth-status');
            status.innerText = "BIO_ID: JOSÉ PATRICK RECONHECIDO";
            status.style.color = "#00ff00";
        };
    }
};

window.onload = () => MEDINA.init();
