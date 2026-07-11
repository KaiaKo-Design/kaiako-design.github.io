/**
 * main.js
 * 負責網站核心互動邏輯
 */

 document.addEventListener('DOMContentLoaded', () => {
    // 1. 文字輪播動畫 (Marquee Rotating)
    const phrases = [
        'scaling products for 10M+ users.',
        'driving 25%+ conversion growth.',
        'leading complex FinTech & MedTech workflows.'
    ];
    
    const el = document.querySelector('.marquee-rotating');
    
    if (el && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        let index = 0;
        setInterval(function () {
            el.classList.add('is-fading');
            setTimeout(function () {
                index = (index + 1) % phrases.length;
                el.textContent = phrases[index];
                el.classList.remove('is-fading');
            }, 400);
        }, 3200);
    }
});