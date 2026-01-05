/**
 * NÚCLEO-0: MATERIALIZAÇÃO SOBERANA
 * Engine Core: Medina OS v2.0
 */

const CORE_DATABASE = {
    phone: "5511996369611",
    jardins: [
        { id: 1, tag: "PODA DE PRECISÃO GEOMÉTRICA" },
        { id: 2, tag: "ARQUITETURA DE VASOS CLÁSSICOS" },
        { id: 3, tag: "ESCULTURA BOTÂNICA IMPERIAL" },
        { id: 4, tag: "REVITALIZAÇÃO DE ECOSSISTEMAS" },
        { id: 19, tag: "VALORES & CONSULTORIA TÉCNICA", file: "jardins19_valores.jpg" },
        { id: 20, tag: "LEGADO VERDE: CONCLUSÃO" }
    ]
};

class MedinaKernel {
    constructor() {
        this.interface = document.getElementById('sovereign-interface');
        this.scanner = document.getElementById('dna-scanner');
        this.init();
    }

    async init() {
        await this.simulateScan();
        this.materializeGallery();
        this.setupObservers();
        this.bindMasterActions();
        this.initParticles();
    }

    simulateScan() {
        return new Promise(resolve => {
            setTimeout(() => {
                this.scanner.style.opacity = '0';
                this.interface.classList.remove('hidden');
                setTimeout(() => { this.scanner.remove(); resolve(); }, 1000);
            }, 3000);
        });
    }

    materializeGallery() {
        const engine = document.getElementById('grid-engine');
        if (!engine) return;

        // Gerador de Matéria (20 Projetos)
        for (let i = 1; i <= 20; i++) {
            const entry = CORE_DATABASE.jardins.find(j => j.id === i) || { tag: `PROJETO TÉCNICO ${i.toString().padStart(2, '0')}` };
            const fileName = entry.file || `jardins${i}.jpg`;
            
            const card = document.createElement('div');
            card.className = 'work-item';
            card.innerHTML = `
                <div class="img-wrap">
                    <img src="jardins/${fileName}" loading="lazy" onerror="this.src='jardins/jardins.jpg'">
                </div>
                <div class="caption">${entry.tag}</div>
            `;
            engine.appendChild(card);
        }
    }

    setupObservers() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('revealed');
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.work-item').forEach(item => observer.observe(item));
    }

    initParticles() {
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = Array.from({ length: 40 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.1
        }));

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(45, 106, 79, 0.4)';
            particles.forEach(p => {
                p.y -= p.speed;
                if (p.y < 0) p.y = canvas.height;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(animate);
        };
        animate();
    }

    bindMasterActions() {
        document.getElementById('whatsapp-master')?.addEventListener('click', () => {
            const url = `https://wa.me/${CORE_DATABASE.phone}?text=${encodeURIComponent("Olá Medina! Solicito acesso ao orçamento de jardinagem.")}`;
            window.open(url, '_blank');
        });
    }
}

// Ignição do Sistema
window.addEventListener('load', () => new MedinaKernel());
