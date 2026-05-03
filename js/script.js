const projects = {
    parfums: {
        type: 'E-commerce',
        title: 'Boutique de vente de parfums',
        description: "Une boutique en ligne pensée pour présenter des parfums, organiser un catalogue clair et accompagner l'utilisateur jusqu'à la commande.",
        goal: "Créer une expérience d'achat simple, élégante et responsive pour valoriser les produits et faciliter la vente.",
        features: [
            "Catalogue de parfums avec fiches produits",
            "Présentation des prix et caractéristiques",
            "Parcours d'achat clair",
            "Interface responsive adaptée aux mobiles"
        ],
        tech: ['PHP', 'MySQL'],
        code: 'https://github.com/carmelfree1'
    },
    qraccess: {
        type: 'Application de gestion',
        title: "Gestion des entrées et sorties d'une entreprise",
        description: "Une solution de contrôle et de suivi des mouvements dans une entreprise, avec identification par QR code.",
        goal: "Sécuriser et automatiser l'enregistrement des entrées et sorties du personnel, des visiteurs ou des prestataires.",
        features: [
            "Génération ou association de QR codes",
            "Scan rapide à l'entrée et à la sortie",
            "Historique des mouvements",
            "Tableau de suivi pour l'administration"
        ],
        tech: ['PHP', 'MySQL', 'QR Code'],
        code: 'https://github.com/carmelfree1'
    },
    routes: {
        type: 'Plateforme de signalement',
        title: "Signalement d'incidents routiers",
        description: "Une application permettant aux utilisateurs de déclarer les incidents et dégradations observés sur les infrastructures routières.",
        goal: "Faciliter la remontée d'informations terrain pour aider au suivi, à la priorisation et au traitement des problèmes routiers.",
        features: [
            "Signalement d'incidents avec description",
            "Catégorisation des dégradations routières",
            "Suivi du statut des signalements",
            "Base de données exploitable par les services concernés"
        ],
        tech: ['React Vite', 'Node.js', 'MySQL'],
        code: 'https://github.com/carmelfree1'
    }
};

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const nav = document.querySelector('nav');
const menuBtn = document.querySelector('.mobile-menu-btn');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalType = document.getElementById('modalType');
const modalDescription = document.getElementById('modalDescription');
const modalGoal = document.getElementById('modalGoal');
const modalFeatures = document.getElementById('modalFeatures');
const modalTech = document.getElementById('modalTech');
const modalCode = document.getElementById('modalCode');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!contactForm.checkValidity()) {
            formStatus.textContent = 'Veuillez remplir correctement tous les champs.';
            formStatus.className = 'error';
            contactForm.reportValidity();
            return;
        }

        const formData = new FormData(contactForm);
        const subject = encodeURIComponent(formData.get('subject'));
        const body = encodeURIComponent(
            `Nom: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`
        );

        formStatus.textContent = 'Ouverture de votre application e-mail...';
        formStatus.className = 'success';
        window.location.href = `mailto:jcartergnadou@gmail.com?subject=${subject}&body=${body}`;
    });
}

document.querySelectorAll('nav a, .logo, .hero-btns a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        if (!targetId || !targetId.startsWith('#')) {
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (!targetElement) {
            return;
        }

        e.preventDefault();
        window.scrollTo({
            top: targetElement.offsetTop - 78,
            behavior: 'smooth'
        });

        nav.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent = '☰';
    });
});

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('active');
        menuBtn.setAttribute('aria-expanded', String(isOpen));
        menuBtn.textContent = isOpen ? '×' : '☰';
    });
}

const skillsSection = document.getElementById('competences');
const skills = document.querySelectorAll('.meter span');

skills.forEach(skill => {
    skill.style.width = '0%';
});

if (skillsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            skills.forEach(skill => {
                skill.style.width = `${skill.dataset.level}%`;
            });
            observer.unobserve(skillsSection);
        });
    }, { threshold: 0.35 });

    observer.observe(skillsSection);
} else {
    skills.forEach(skill => {
        skill.style.width = `${skill.dataset.level}%`;
    });
}

function openProjectModal(projectKey) {
    const project = projects[projectKey];
    if (!project) {
        return;
    }

    modalType.textContent = project.type;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalGoal.textContent = project.goal;
    modalCode.href = project.code;

    modalFeatures.innerHTML = '';
    project.features.forEach(feature => {
        const item = document.createElement('li');
        item.textContent = feature;
        modalFeatures.appendChild(item);
    });

    modalTech.innerHTML = '';
    project.tech.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        modalTech.appendChild(tag);
    });

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function closeProjectModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

document.querySelectorAll('.project-preview').forEach(button => {
    button.addEventListener('click', () => openProjectModal(button.dataset.project));
});

document.querySelectorAll('[data-close-modal]').forEach(element => {
    element.addEventListener('click', closeProjectModal);
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});
