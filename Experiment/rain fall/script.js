document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.querySelector('.rain');
    const numberOfDrops = 100;

    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('div');
        drop.classList.add('raindrop');
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
        drop.style.animationDelay = `${Math.random() * 1}s`;
        rainContainer.appendChild(drop);
    }
});
