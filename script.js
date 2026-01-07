/* MEDINA_SOVEREIGN_ENGINE_V15.0 - ARQUITETO JOSÉ PATRICK */
const MEDINA = {
    chart: null,
    
    init() {
        this.luxEngine();
        this.renderGaleria();
        this.calc();
        this.events();
    },

    luxEngine() {
        const c = document.getElementById('lux-engine-canvas');
        const ctx = c.getContext('2d');
        let pts = [];
        const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
        window.onresize = resize; resize();
        for(let i=0; i<100; i++) pts.push({x:Math.random()*c.width, y:Math.random()*c.height, s:Math.random()*2});
        const anim = () => {
            ctx.clearRect(0,0,c.width,c.height);
            ctx.fillStyle = "rgba(212, 175, 55, 0.1)";
            pts.forEach(p => {
                ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, Math.PI*2); ctx.fill();
                p.y -= 0.3; if(p.y < 0) p.y = c.height;
            });
            requestAnimationFrame(anim);
        };
        anim();
    },

    renderGaleria() {
        const grid = document.getElementById('asset-grid');
        // Sequência baseada no seu GitHub: jardins.jpg + jardins1 até jardins18 + jardins19_valores
        const nomes = ['jardins.jpg'];
        for(let i=1; i<=18; i++) nomes.push(`jardins${i}.jpg`);
        nomes.push('jardins19_valores.jpg');

        grid.innerHTML = nomes.map(f => `
            <div class="asset-item">
                <img src="jardins/${f}" alt="DNA Medina" onerror="this.parentElement.style.display='none'">
                <div style="position:absolute; bottom:15px; left:15px; font-size:0.6rem; color:#d4af37;">ID: ${f.toUpperCase()}</div>
            </div>
        `).join('');
    },

    calc() {
        const formula = document.getElementById('formula-input').value;
        const meses = parseInt(document.getElementById('tempo-dna').value);
        const ctx = document.getElementById('grafico-medina').getContext('2d');
        const log = document.getElementById('terminal-log');

        try {
            const labels = Array.from({length: meses}, (_, i) => `M${i+1}`);
            const dataY = labels.map((_, i) => math.evaluate(formula, {x: i+1}));
            const total = dataY[dataY.length - 1];

            document.getElementById('total-display').innerText = `R$ ${total.toLocaleString('pt-BR')}`;
            log.innerText = `[LOG]: MATERIALIZAÇÃO CONCLUÍDA. PROJEÇÃO FINAL: R$ ${total.toFixed(2)}`;

            if(this.chart) this.chart.destroy();
            this.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        data: dataY, borderColor: '#d4af37', backgroundColor: 'rgba(212, 175, 55, 0.05)',
                        fill: true, tension: 0.4, borderWidth: 2
                    }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { 
                        y: { grid: { color: '#1a1a1a' }, ticks: { color: '#d4af37' } },
                        x: { ticks: { color: '#444' } }
                    }
                }
            });
        } catch (e) { log.innerText = "[ERRO]: DNA MATEMÁTICO INVÁLIDO."; }
    },

    events() {
        document.getElementById('executar-projeto').onclick = () => this.calc();
        document.getElementById('tempo-dna').oninput = (e) => {
            document.getElementById('meses-valor').innerText = e.target.value;
            this.calc();
        };
        document.getElementById('biometric-trigger').onclick = () => {
            document.getElementById('auth-status').innerText = "BIO_ID: DNA_SAPEADO";
            document.getElementById('auth-status').style.color = "#00ff00";
        };
    }
};

window.onload = () => MEDINA.init();
