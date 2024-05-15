document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('.floating-text');
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let dx = (Math.random() - 0.5) * 4;
    let dy = (Math.random() - 0.5) * 4;

    const animate = () => {
        const rect = textElement.getBoundingClientRect();
        if (x + rect.width >= window.innerWidth || x <= 0) {
            dx = -dx;
        }
        if (y + rect.height >= window.innerHeight || y <= 0) {
            dy = -dy;
        }
        x += dx;
        y += dy;
        textElement.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(animate);
    };

    animate();
});
