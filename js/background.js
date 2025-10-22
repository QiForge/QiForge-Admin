const pattern = document.getElementById("pattern");
const light = document.getElementById("light");

let hexW = 120;
let hexH = 140;
const lightRadius = 250;
let hexes = [];

// === CREATE GRID FUNCTION ===
function createGrid() {
  pattern.innerHTML = ""; // clear old grid
  hexes = [];

  const countY = Math.ceil(window.innerHeight / (hexH * 0.75)) + 3;
  const countX = Math.ceil(window.innerWidth / hexW) + 3;
  const offsetX = -hexW / 2;
  const offsetY = -hexH / 4;

  for (let y = 0; y < countY; y++) {
    for (let x = 0; x < countX; x++) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", hexW);
      svg.setAttribute("height", hexH);
      svg.style.position = "absolute";

      const px = offsetX + x * (hexW + 6) + ((y % 2) * (hexW / 2));
      const py = offsetY + y * (hexH * 0.75);
      svg.style.left = `${px}px`;
      svg.style.top = `${py}px`;

      svg.dataset.cx = px + hexW / 2;
      svg.dataset.cy = py + hexH / 2;

      svg.innerHTML = `
        <polygon 
          points="${hexW / 2},0 ${hexW},${hexH * 0.25} ${hexW},${hexH * 0.75} ${hexW / 2},${hexH} 0,${hexH * 0.75} 0,${hexH * 0.25}"
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(255,255,255,0.06)"
          stroke-width="1.2"
        />
      `;
      pattern.appendChild(svg);
      hexes.push(svg);
    }
  }
}

// === INITIAL DRAW ===
createGrid();

// === LIGHT REACTIVE ANIMATION ===
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function animate() {
  light.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;

  for (let i = 0; i < hexes.length; i++) {
    const hx = hexes[i];
    const cx = hx.dataset.cx;
    const cy = hx.dataset.cy;
    const dx = mouse.x - cx;
    const dy = mouse.y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const t = Math.max(0, 1 - dist / lightRadius);
    const intensity = t * t;

    const poly = hx.querySelector("polygon");
    const edgeAlpha = 0.05 + intensity * 0.4;
    poly.setAttribute("stroke", `rgba(77,182,255,${edgeAlpha})`);
  }

  requestAnimationFrame(animate);
}
animate();

// === DYNAMIC RESIZE HANDLING ===
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    createGrid();
  }, 300);
});
