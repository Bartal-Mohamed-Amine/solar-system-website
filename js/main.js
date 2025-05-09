
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle?.querySelector('i');

if (themeToggle && icon) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if(body.classList.contains('light-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });

    if(localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
}


const planetsContainer = document.querySelector('.planets-container');
if (planetsContainer) {
    const planetsData = [
        { 
            name: "Mercure", 
            description: "La plus petite planète et la plus proche du Soleil. Températures extrêmes entre -173°C et 427°C.",
            image: "images/mercury.png"
        },
        { 
            name: "Vénus", 
            description: "Atmosphère toxique de CO₂ avec une température moyenne de 462°C, la plus chaude du système solaire.",
            image: "images/venus.png"
        },
        { 
            name: "Terre", 
            description: "Notre planète bleue, la seule connue à abriter la vie. Environ 4.5 milliards d'années.",
            image: "images/earth.png"
        },
        { 
            name: "Mars", 
            description: "La planète rouge, avec ses deux lunes Phobos et Deimos. Cible principale de l'exploration spatiale.",
            image: "images/mars.png"
        },
        { 
            name: "Jupiter", 
            description: "La géante gazeuse, plus grande planète du système solaire avec 79 lunes connues.",
            image: "images/jupiter.png"
        },
        { 
            name: "Saturne", 
            description: "Célèbre pour ses magnifiques anneaux composés de glace et de poussière cosmique.",
            image: "images/saturn.png"
        },
        { 
            name: "Uranus", 
            description: "Géante de glace qui tourne sur son côté avec une inclinaison de 98 degrés.",
            image: "images/uranus.png"
        },
        { 
            name: "Neptune", 
            description: "Planète aux vents les plus violents du système solaire, atteignant 2,100 km/h.",
            image: "images/neptune.png"
        }
    ];

    planetsData.forEach(planet => {
        const planetElement = document.createElement('div');
        planetElement.className = 'planet';
        planetElement.style.backgroundImage = `url('${planet.image}')`;
        
        planetElement.innerHTML = `
            <div class="planet-info">
                <h3>${planet.name}</h3>
                <p>${planet.description}</p>
            </div>
        `;
        
        planetsContainer.appendChild(planetElement);
    });
}


function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const currentHash = window.location.hash;

    navLinks.forEach(link => {
        link.classList.remove('active');
        
        const linkHref = link.getAttribute('href');
        
    
        if (linkHref === currentPath) {
            link.classList.add('active');
        }
  
        else if (currentPath === 'index.html' && (linkHref === 'index.html' || linkHref === '#')) {
            link.classList.add('active');
        }
        
        else if (currentHash && linkHref === currentHash) {
            link.classList.add('active');
        }
    });
}


function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                
                history.pushState(null, null, this.getAttribute('href'));
                
               
                setTimeout(updateActiveNavLink, 1000);
            }
        });
    });
}


function initAuthModals() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const closeButtons = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            document.getElementById('loginModal').style.display = 'flex';
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            document.getElementById('signupModal').style.display = 'flex';
        });
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    setupSmoothScrolling();
    initAuthModals();
    
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    
    window.addEventListener('popstate', updateActiveNavLink);
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    
    
    console.log('Form submitted:', { name, email, subject, message });
    
    
    alert('Merci pour votre message! Nous vous contacterons bientôt.');
    this.reset();
});