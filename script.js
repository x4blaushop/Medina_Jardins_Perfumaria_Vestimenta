/**
 * MEDINA KERNEL v12.0 - APRIMORADO E MESCLADO
 * ARQUITETO: JOSÉ PATRICK CASTRO SOARES
 */

const MedinaOS = {
    // 1. DADOS DE PRECIFICAÇÃO E RAIZ
    DNA: {
        path: "jardins/",
        total: 20,
        prices: { service: 0, qty: 0, months: 0, total: 0 }
    },

    init: function() {
        this.igniteParticles();
        this.materializeGallery();
        this.setupAnalytics();
        this.bindEvents();
        console.log("HABITAÇÃO MEDINA: ESTABILIZADA E PRONTA PARA VENDA.");
    },

    // 2. MATERIALIZAÇÃO DA GALERIA COM EXPANSÃO
    materializeGallery: function() {
        const grid = document.getElementById('gallery-grid');
        for (let i = 1; i <= this.DNA.total; i++) {
            const file = (i === 19) ? 'jardins19_valores.jpg' : `jardins${i}.jpg`;
            const card = document.createElement('div');
            card.className = 'asset-card';
            card.innerHTML = `<img src="${this.DNA.path}${file}" alt="Obra ${i}" loading="lazy">`;
            
            card.onclick = () => {
                const lb = document.getElementById('medina-lightbox');
                const lbImg = document.getElementById('lb-img');
                lbImg.src = `${this.DNA.path}${file}`;
                lb.classList.add('active');
            };
            grid.appendChild(card);
        }
    },

    // 3. SISTEMA DE GRÁFICOS (CHART.JS)
    setupAnalytics: function() {
        const ctx = document.getElementById('main-analytics-chart').getContext('2d');
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Mês 1', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5', 'Mês 6'],
                datasets: [{
                    label: 'Projeção de Gasto',
                    data: [0, 0, 0, 0, 0, 0],
                    borderColor: '#d4af37',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });
    },

    // 4. LÓGICA DE CÁLCULO E WHATSAPP
    processSimulation: function() {
        const price = parseFloat(document.getElementById('calc-category').value);
        const qty = parseFloat(document.getElementById('calc-qty').value) || 0;
        const months = parseInt(document.getElementById('calc-range').value);
        
        const total = price * qty * months;
        const monthly = total / months;

        // Atualiza UI
        document.getElementById('res-total').innerText = `R$ ${total.toLocaleString('pt-BR')}`;
        document.getElementById('res-monthly').innerText = `R$ ${monthly.toLocaleString('pt-BR')}`;
        
        const summary = `PROJETO SELECIONADO: R$ ${price}/unidade \nVOLUME: ${qty} \nDURAÇÃO: ${months} Mes(es) \nINVESTIMENTO TOTAL: R$ ${total.toLocaleString('pt-BR')}`;
        document.getElementById('tech-summary').innerText = summary;

        // Atualiza Gráfico
        const projection = Array.from({length: 6}, (_, i) => monthly * (i + 1));
        this.chart.data.datasets[0].data = projection;
        this.chart.update();

        // Prepara Mensagem WA
        document.getElementById('wa-send').onclick = () => {
            const msg = encodeURIComponent(`*HABITAÇÃO MEDINA - PROPOSTA DE NEGÓCIO*%0A%0AArquiteto José Patrick, gerei uma simulação:%0A${summary.replace(/\n/g, '%0A')}`);
            window.open(`https://wa.me/5511996369611?text=${msg}`, '_blank');
        };
    },

    bindEvents: function() {
        document.getElementById('calc-trigger').onclick = () => this.processSimulation();
        document.getElementById('calc-range').oninput = (e) => {
            document.getElementById('months-out').innerText = e.target.value;
        };
        document.querySelector('.lb-close').onclick = () => {
            document.getElementById('medina-lightbox').classList.remove('active');
        };
    },

    igniteParticles: function() {
        const canvas = document.getElementById('lux-engine');
        const ctx = canvas.getContext('2d');
        let pts = [];
        const setup = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        setup();
        for(let i=0; i<60; i++) pts.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, v:Math.random()*0.5});
        const draw = () => {
            ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle = "rgba(212,175,55,0.2)";
            pts.forEach(p => { p.y-=p.v; if(p.y<0) p.y=canvas.height; ctx.beginPath(); ctx.arc(p.x,p.y,1,0,Math.PI*2); ctx.fill(); });
            requestAnimationFrame(draw);
        };
        draw();
    }
};

window.onload = () => MedinaOS.init();
