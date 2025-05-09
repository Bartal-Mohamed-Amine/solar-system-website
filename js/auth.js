document.addEventListener('DOMContentLoaded', function() {
    
    if (document.getElementById('loginBtn')) {
        
    }
    if (document.getElementById('signupBtn')) {
        
    }
});
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeButtons = document.querySelectorAll('.close-modal');

function openModal(modal) {
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modal) {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

if (loginBtn && loginModal) {
    loginBtn.addEventListener('click', () => openModal(loginModal));
}

if (signupBtn && signupModal) {
    signupBtn.addEventListener('click', () => openModal(signupModal));
}

if (closeButtons) {
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });
}

window.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});


if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Connexion réussie! (simulation)');
        closeModal(loginModal);
    });
}

if (document.getElementById('signupForm')) {
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('signupPassword').value;
        const confirm = document.getElementById('signupConfirm').value;
        
        if (password !== confirm) {
            alert('Les mots de passe ne correspondent pas!');
            return;
        }
        
        alert('Inscription réussie! (simulation)');
        closeModal(signupModal);
    });
}