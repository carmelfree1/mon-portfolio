// Gestion du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const status = document.getElementById('formStatus');
    
    // Simulation d'envoi
    status.textContent = 'Envoi en cours...';
    status.style.color = 'var(--primary-color)';
    status.style.backgroundColor = 'rgba(37, 99, 235, 0.1)';
    
    setTimeout(() => {
        status.textContent = 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.';
        status.style.color = 'green';
        status.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
        this.reset();
    }, 1500);
});

// Animation des barres de compétences
document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.getElementById('competences');
    const skills = document.querySelectorAll('.meter span');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skills.forEach(skill => {
                    // Réinitialiser puis animer
                    const targetWidth = skill.parentElement.nextElementSibling.textContent;
                    skill.style.width = '0%';
                    setTimeout(() => {
                        skill.style.width = targetWidth;
                    }, 100);
                });
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});

// Navigation fluide
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Gestion du menu mobile (optionnel)
function initMobileMenu() {
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '☰';
    menuBtn.setAttribute('aria-label', 'Ouvrir le menu');
    
    const nav = document.querySelector('nav');
    const headerInner = document.querySelector('.header-inner');
    
    if (window.innerWidth <= 768) {
        headerInner.appendChild(menuBtn);
        
        menuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuBtn.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
            menuBtn.setAttribute('aria-label', nav.classList.contains('active') ? 'Fermer le menu' : 'Ouvrir le menu');
        });
    }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    
    // Réinitialiser le menu mobile lors du redimensionnement
    window.addEventListener('resize', function() {
        const nav = document.querySelector('nav');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            if (menuBtn) {
                menuBtn.remove();
            }
        } else if (window.innerWidth <= 768 && !menuBtn) {
            initMobileMenu();
        }
    });
});

// Ajout de styles pour le menu mobile
const mobileMenuStyles = `
@media (max-width: 768px) {
    nav ul {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-white);
        box-shadow: var(--shadow-lg);
        padding: 1rem;
    }
    
    nav.active ul {
        display: flex;
    }
    
    .mobile-menu-btn {
        display: block;
    }
}
`;

// Injection des styles pour le menu mobile
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileMenuStyles;
document.head.appendChild(styleSheet);