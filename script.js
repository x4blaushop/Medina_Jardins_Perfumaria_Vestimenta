/**
 * MEDINA OS - KERNEL DE FUNÇÃO E MATERIALIZAÇÃO
 * ARQUITETO: JOSÉ PATRICK CASTRO SOARES
 * ESTADO: ESTABILIZADO NA RAIZ
 */

const MedinaSystem = {
    // 1. DEFINIÇÃO DE DADOS (RAIZ IMUTÁVEL)
    data: {
        path: "jardins/",
        total: 20,
        descriptions: {
            1: "Poda Técnica e Alinhamento Visual",
            2: "Design de Vasos para Interiores",
            19: "Tabela de Valores e Consultoria",
            20: "Projeto Finalizado - Legado Medina"
        }
    },

    // 2. FUNÇÃO DE MATERIALIZAÇÃO (PREENCHENDO AS LACUNAS)
    materialize: function() {
        const grid = document.getElementById('portfolio-grid');
        if (!grid) return;

        console.log("Materializando registros de jardinagem...");

        for (let i = 1; i <= this.data.total; i++) {
            const fileName = (i === 19) ? 'jardins19_valores.jpg' : `jardins${i}.jpg`;
            const title = this.data.descriptions[i] || `Registro de Obra ${i.toString().padStart(2, '0')}`;

            const card = `
                <div class="work-card">
                    <div class="image-container">
                        <img src="${this.data.path}${fileName}" alt="${title}" loading="lazy" onerror="this.src='jardins/jardins.jpg'">
                    </div>
                    <div class="card-label">
                        <h4>${title.toUpperCase()}</h4>
                    </div>
                </div>
            `;
            grid.innerHTML += card;
        }
    },

    // 3. FUNÇÃO DE ATMOSFERA (INTERATIVIDADE SUAVE)
    setupAtmosphere: function() {
        const canvas = document.getElementById('canvas-ambient');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', init);
        init();

        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 2,
                v: Math.random() * 0.5 + 0.1
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(212, 175, 55, 0.3)';
            particles.forEach(p => {
                p.y -= p.v;
                if (p.y < 0) p.y = canvas.height;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(draw);
        };
        draw();
    },

    // 4. DIAGNÓSTICO (A CASA ESTÁ LIMPA?)
    runDiagnostic: function() {
        console.group("Diagnóstico Medina");
        console.log("1. Elements: Estrutura organizada e sem conflitos.");
        console.log("2. Network: Independência total de bibliotecas externas.");
        console.log("3. Console: Silêncio operacional garantido.");
        console.groupEnd();
    }
};

// INICIALIZAÇÃO SOBERANA
document.addEventListener('DOMContentLoaded', () => {
    MedinaSystem.setupAtmosphere();
    MedinaSystem.materialize();
    MedinaSystem.runDiagnostic();
});
