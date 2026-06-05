const container = document.querySelector('.carousel-container');
const btnLeft = document.querySelector('.carousel-button.left');
const btnRight = document.querySelector('.carousel-button.right');

function getCardWidth() {
    const firstCard = container.querySelector('.project-card');
    if (!firstCard) return 450;
    const style = getComputedStyle(container);
    const gap = parseFloat(style.gap) || 20;
    return firstCard.offsetWidth + gap;
}

btnRight.addEventListener('click', () => {
    container.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
});

btnLeft.addEventListener('click', () => {
    container.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
});

const yearEl = document.querySelector('.footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();