/**
 * MEDINA OS KERNEL - MATERIALIZAÇÃO COMPLETA
 */
const MedinaOS = {
    // 1. MATERIALIZAR GALERIA DA RAIZ
    materialize: function() {
        const engine = document.getElementById('gallery-engine');
        for (let i = 1; i <= 20; i++) {
            const fileName = (i === 19) ? 'jardins19_valores.jpg' : `jardins${i}.jpg`;
            const card = document.createElement('div');
            card.className = 'photo-card';
            card.innerHTML = `<img src="jardins/${fileName}" alt="Obra ${i}">`;
            
            // Efeito de Expansão (Lightbox)
            card.addEventListener('click', () => {
                const lb = document.getElementById('lightbox');
                const lbImg = document.getElementById('lightbox-img');
                lbImg.src = `jardins/${fileName}`;
                lb.classList.add('active');
            });
            engine.appendChild(card);
        }
    },

    // 2. GESTÃO DE GRÁFICOS (C3X4.0_MAE)
    initAnalytics: function() {
        const ctx = document.getElementById('mainChart').getContext('2d');
        let chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Mês 1', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5', 'Mês 6'],
                datasets: [{
                    label: 'Investimento Acumulado',
                    data: [0, 0, 0, 0, 0, 0],
                    borderColor: '#d4af37',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: { responsive: true, scales: { y: { beginAtZero: true } } }
        });

        document.getElementById('add-data').addEventListener('click', () => {
            const val = document.getElementById('calc-type').value;
            const qty = document.getElementById('calc-qty').value;
            const months = document.getElementById('calc-range').value;
            const total = val * qty * months;
            
            document.getElementById('total-result').innerText = `R$ ${total.toLocaleString()}`;
            
            // Atualiza gráfico com projeção
            chart.data.datasets[0].data = Array.from({length: 6}, (_, i) => (total/months) * (i+1));
            chart.update();
        });

        document.getElementById('calc-range').addEventListener('input', (e) => {
            document.getElementById('range-val').innerText = `${e.target.value} Mês(es)`;
        });
    },

    // 3. FECHAR LIGHTBOX
    initLightbox: function() {
        document.getElementById('lightbox').addEventListener('click', function() {
            this.classList.remove('active');
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    MedinaOS.materialize();
    MedinaOS.initAnalytics();
    MedinaOS.initLightbox();
});
