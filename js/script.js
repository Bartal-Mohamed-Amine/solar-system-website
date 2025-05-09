document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.getElementById('stars');
    
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        starsContainer.appendChild(star);
    }
    function createShootingStar() {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        shootingStar.style.left = `${Math.random() * window.innerWidth}px`;
        document.body.appendChild(shootingStar);
      
        setTimeout(() => {
            shootingStar.remove();
        }, 3000); 
    }
    
    setInterval(createShootingStar, 4000);
    const comet = document.querySelector('.comet');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        comet.style.top = `${scrollY * 0.5}px`;
        comet.style.left = `${scrollY * 0.8}px`;
    });
});
