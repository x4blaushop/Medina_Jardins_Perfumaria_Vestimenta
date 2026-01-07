// DNA de Ativos - Organização e Harmonia
const assets = [
    { id: "J01", title: "Cerca Viva Precision", file: "manutencao_cerca_viva_precision.jpg", cat: "Jardinagem" },
    { id: "J02", title: "Preparação Solo", file: "preparacao_solo_plantio.jpg", cat: "Jardinagem" },
    { id: "P01", title: "Essência Natura", file: "ornamentacao_vaso_essencia.jpg", cat: "Perfumaria" },
    { id: "V01", title: "Armadura Social", file: "identidade_visual_medina_jardim.jpg", cat: "Vestimenta" }
];

let medinaChart = null;

function materializarSistema() {
    renderGaleria();
    configurarGrafico();
    
    document.getElementById('executar-projeto').addEventListener('click', configurarGrafico);
    document.getElementById('tempo-dna').addEventListener('input', (e) => {
        document.getElementById('meses-valor').innerText = e.target.value;
    });
}

function renderGaleria() {
    const grid = document.getElementById('grid-medina-assets');
    grid.innerHTML = assets.map(asset => `
        <div class="asset-card">
            <img src="img/${asset.file}" alt="${asset.title}">
            <div class="asset-info"><span>${asset.id}</span><p>${asset.title}</p></div>
        </div>
    `).join('');
}

function configurarGrafico() {
    const formula = document.getElementById('formula-input').value;
    const meses = parseInt(document.getElementById('tempo-dna').value);
    const ctx = document.getElementById('grafico-investimento-medina').getContext('2d');

    try {
        const labels = Array.from({length: meses}, (_, i) => `Mês ${i + 1}`);
        const data = labels.map((_, i) => math.evaluate(formula, {x: i + 1}));

        if (medinaChart) medinaChart.destroy();

        medinaChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Projeção de Capital (R$)',
                    data: data,
                    borderColor: '#c5a059',
                    backgroundColor: 'rgba(197, 160, 89, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: { responsive: true, scales: { y: { beginAtZero: true } } }
        });
    } catch (e) { console.log("Aguardando fórmula válida..."); }
}

document.addEventListener('DOMContentLoaded', materializarSistema);
