/**
 * HABITAÇÃO MEDINA - KERNEL DE OPERAÇÃO
 * DESENVOLVIDO PARA JOSÉ PATRICK CASTRO SOARES
 */

const ModeloMedina = {
    config: {
        raiz: "jardins/",
        total: 20,
        unidade: "Mês(es)"
    },

    init: function() {
        this.fluxoAtmosferico();
        this.construirGaleria();
        this.ativarAnalytics();
        this.escutarEventos();
        console.log("HABITAÇÃO MEDINA PRONTA PARA MATERIALIZAÇÃO.");
    },

    // MATERIALIZAÇÃO DA GALERIA COM EXPANSÃO SUAVE
    construirGaleria: function() {
        const grade = document.getElementById('grade-medina');
        for (let i = 1; i <= this.config.total; i++) {
            const arquivo = (i === 19) ? 'jardins19_valores.jpg' : `jardins${i}.jpg`;
            const div = document.createElement('div');
            div.className = 'foto-medina';
            div.innerHTML = `<img src="${this.config.raiz}${arquivo}" loading="lazy" alt="Medina ${i}">`;
            
            div.onclick = () => {
                const lb = document.getElementById('expansor-medina');
                const img = document.getElementById('imagem-expandida');
                img.src = `${this.config.raiz}${arquivo}`;
                lb.classList.add('ativa');
            };
            grade.appendChild(div);
        }
    },

    // MOTOR ANALÍTICO DO MODELO C3X4.0_MAE
    ativarAnalytics: function() {
        const ctx = document.getElementById('chart-medina').getContext('2d');
        this.medinaChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Início', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5', 'Mês 6'],
                datasets: [{
                    label: 'Projeção de Investimento Medina',
                    data: [0, 0, 0, 0, 0, 0],
                    borderColor: '#d4af37',
                    backgroundColor: 'rgba(212, 175, 55, 0.05)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });
    },

    // CÁLCULO E RELATÓRIO DO MODELO
    executarCalculo: function() {
        const preco = parseFloat(document.getElementById('categoria-medina').value);
        const qtd = parseFloat(document.getElementById('volume-medina').value) || 0;
        const meses = parseInt(document.getElementById('tempo-medina').value);
        
        const total = preco * qtd * meses;
        const mensal = total / meses;

        document.getElementById('valor-total').innerText = `R$ ${total.toLocaleString('pt-BR')}`;
        document.getElementById('valor-mensal').innerText = `R$ ${mensal.toLocaleString('pt-BR')}`;
        
        const textoRelatorio = `HABITAÇÃO MEDINA - MODELO DE GESTÃO \n---------------------------------- \nCATEGORIA: R$ ${preco}/un \nVOLUME: ${qtd} \nPERÍODO: ${meses} ${this.config.unidade} \nINVESTIMENTO TOTAL: R$ ${total.toLocaleString('pt-BR')}`;
        document.getElementById('resumo-medina').innerText = textoRelatorio;

        // Atualizar Gráfico Medina
        const projeção = Array.from({length: 6}, (_, i) => mensal * (i + 1));
        this.medinaChart.data.datasets[0].data = projeção;
        this.medinaChart.update();

        // Configurar Envio WhatsApp
        document.getElementById('enviar-medina').onclick = () => {
            const mensagem = encodeURIComponent(`*MODELO MEDINA - SOLICITAÇÃO*%0A%0AArquiteto José Patrick, gerei uma simulação na Habitação:%0A${textoRelatorio.replace(/\n/g, '%0A')}`);
            window.open(`https://wa.me/5511996369611?text=${mensagem}`, '_blank');
        };
    },

    escutarEventos: function() {
        document.getElementById('processar-medina').onclick = () => this.executarCalculo();
        document.getElementById('tempo-medina').oninput = (e) => {
            document.getElementById('label-tempo').innerText = `${e.target.value} Mês(es)`;
        };
        document.querySelector('.fechar-medina').onclick = () => {
            document.getElementById('expansor-medina').classList.remove('ativa');
        };
    },

    fluxoAtmosferico: function() {
        const c = document.getElementById('lux-medina');
        const ctx = c.getContext('2d');
        let p = [];
        const redim = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
        redim(); window.onresize = redim;
        for(let i=0; i<70; i++) p.push({x:Math.random()*c.width, y:Math.random()*c.height, s:Math.random()*0.4});
        const anim = () => {
            ctx.clearRect(0,0,c.width,c.height); ctx.fillStyle = "rgba(212,175,55,0.2)";
            p.forEach(i => { i.y-=i.s; if(i.y<0) i.y=c.height; ctx.beginPath(); ctx.arc(i.x,i.y,1,0,Math.PI*2); ctx.fill(); });
            requestAnimationFrame(anim);
        };
        anim();
    }
};

window.onload = () => ModeloMedina.init();
