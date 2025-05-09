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
const canvas = document.getElementById('trajectoryCanvas');
    const ctx = canvas.getContext('2d');
    
    function redimensionnerCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      dessinerTrajectoire();
    }
    
    function dessinerTrajectoire() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
     
      ctx.fillStyle = 'rgba(100, 100, 100, 0.5)';
      ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
      
      
      ctx.beginPath();
      ctx.moveTo(50, canvas.height - 50);
      ctx.strokeStyle = '#00ccff';
      ctx.lineWidth = 2;
      
      for (let x = 50; x < canvas.width - 50; x++) {
        const t = (x - 50) / (canvas.width - 100);
        const y = canvas.height - 50 - (Math.pow(t, 2) * (canvas.height - 100));
        ctx.lineTo(x, y);
      }
      
      ctx.stroke();
      

      const rocketX = 50 + (canvas.width - 100) * 0.7;
      const rocketY = canvas.height - 50 - (Math.pow(0.7, 2) * (canvas.height - 100));
      
      ctx.save();
      ctx.translate(rocketX, rocketY);
      ctx.rotate(Math.PI / 4);
      

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(-5, -15, 10, 30);
      

      ctx.beginPath();
      ctx.moveTo(-5, -15);
      ctx.lineTo(0, -25);
      ctx.lineTo(5, -15);
      ctx.fill();
      
  
      ctx.fillStyle = '#cccccc';
      ctx.fillRect(-5, 10, 10, 5);
      ctx.fillRect(-10, 5, 5, 10);
      ctx.fillRect(5, 5, 5, 10);
      
      ctx.restore();
    }
    
    window.addEventListener('resize', redimensionnerCanvas);
    redimensionnerCanvas();
    

    const stars = document.getElementById('stars');
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      stars.appendChild(star);
    }
