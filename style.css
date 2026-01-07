/* MEDINA_SOVEREIGN_CSS_V15.0 - ARQUITETO JOSÉ PATRICK */
:root {
    --p-gold: #d4af37;
    --p-gold-glow: rgba(212, 175, 55, 0.15);
    --p-black-void: #020302;
    --p-carbon: #0a0a0a;
    --p-white-pure: #ffffff;
    --a-transition-slow: all 1.8s cubic-bezier(0.16, 1, 0.3, 1);
    --a-transition-med: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    --s-gutter: 60px;
    --s-radius-lg: 30px;
}

* { margin: 0; padding: 0; box-sizing: border-box; -webkit-font-smoothing: antialiased; }

body {
    background: var(--p-black-void);
    color: var(--p-white-pure);
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    cursor: crosshair;
}

/* Grade Industrial */
body::before {
    content: ""; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background-image: linear-gradient(rgba(18, 18, 18, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 18, 18, 0.3) 1px, transparent 1px);
    background-size: 30px 30px; z-index: 1000; pointer-events: none; opacity: 0.5;
}

#lux-engine-canvas { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; opacity: 0.5; }

.header-industrial { padding: var(--s-gutter); display: flex; justify-content: space-between; align-items: center; }

.brand-logo {
    font-size: 3rem; font-weight: 900; letter-spacing: 20px; color: transparent;
    -webkit-text-stroke: 1px var(--p-gold); text-transform: uppercase;
}

.biometric-module {
    padding: 15px 30px; border: 1px solid var(--p-gold); background: rgba(255,255,255,0.02);
    position: relative; overflow: hidden; cursor: pointer;
}

.scanner-line {
    position: absolute; top: 0; left: 0; width: 100%; height: 2px;
    background: var(--p-gold); box-shadow: 0 0 15px var(--p-gold);
    animation: scan 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes scan { 0%, 100% { top: 0%; } 50% { top: 100%; } }

.terminal-section { padding: var(--s-gutter); max-width: 1800px; margin: 0 auto; }

.section-container {
    display: grid; grid-template-columns: 1fr 1.5fr; gap: 60px;
    background: var(--p-carbon); padding: 50px; border-radius: var(--s-radius-lg);
    border: 1px solid rgba(255,255,255,0.05);
}

.medina-input {
    width: 100%; padding: 20px; background: #000; border: 1px solid #222;
    color: #fff; margin-top: 10px; border-left: 5px solid var(--p-gold);
}

.medina-btn {
    width: 100%; padding: 20px; background: transparent; border: 1px solid var(--p-gold);
    color: var(--p-gold); font-weight: 900; letter-spacing: 5px; cursor: pointer;
    transition: var(--a-transition-med); margin-top: 20px;
}

.medina-btn:hover { background: var(--p-gold); color: #000; }

.chart-container { height: 350px; background: rgba(0,0,0,0.2); margin-bottom: 20px; }

.card-value { font-size: 3rem; color: var(--p-gold); font-weight: 900; }

.asset-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 25px;
}

.asset-item {
    height: 400px; background: #000; overflow: hidden; position: relative;
    border: 1px solid rgba(255,255,255,0.05);
}

.asset-item img {
    width: 100%; height: 100%; object-fit: cover; filter: grayscale(1) brightness(0.5);
    transition: var(--a-transition-slow);
}

.asset-item:hover img { filter: grayscale(0) brightness(1); transform: scale(1.05); }

.terminal-log-output {
    margin-top: 30px; padding: 20px; background: #050505;
    border-left: 5px solid var(--p-gold); font-family: monospace; color: #666;
}

.gold-highlight { color: var(--p-gold); }
