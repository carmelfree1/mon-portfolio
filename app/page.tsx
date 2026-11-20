import { ContactForm } from "./components/contact-form";
import { SiteHeader } from "./components/site-header";

type Project = {
  number: string;
  name: string;
  category: string;
  summary: string;
  challenge: string;
  outcome: string;
  technologies: string[];
  visual: "commerce" | "access" | "civic";
  href: string;
  repo?: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "CCM Nonsaka",
    category: "Commerce · Santé naturelle & bio",
    summary: "Une boutique en ligne dédiée aux médicaments traditionnels et aux produits alimentaires et cosmétiques bio.",
    challenge: "Présenter clairement des produits variés et simplifier le suivi des clients, des commandes et de l’activité commerciale.",
    outcome: "Une vitrine e-commerce reliée à un espace d’administration pour gérer l’interface client, les produits, les commandes et le chiffre d’affaires.",
    technologies: ["Boutique en ligne", "Gestion de commandes", "Espace admin"],
    visual: "commerce",
    href: "https://ccm-nonsaka.com",
  },
  {
    number: "02",
    name: "QR Access",
    category: "Outil métier · En cours",
    summary: "Un outil de suivi des entrées et sorties pensé pour les équipes et les visiteurs d’une entreprise.",
    challenge: "Réduire les étapes manuelles du contrôle d’accès, tout en gardant un historique exploitable par l’administration.",
    outcome: "Un parcours de pointage par QR code associé à un tableau de suivi et à un journal des mouvements.",
    technologies: ["PHP", "MySQL", "QR code"],
    visual: "access",
    href: "https://github.com/carmelfree1/qr_access",
    repo: "https://github.com/carmelfree1/qr_access",
  },
  {
    number: "03",
    name: "Signalement routier",
    category: "Service public · En cours",
    summary: "Une plateforme pour faire remonter les incidents et dégradations observés sur les routes.",
    challenge: "Transformer un constat terrain en information structurée, catégorisée et suivie jusqu’à son traitement.",
    outcome: "Un flux de signalement avec description, catégorie et statut pour aider au suivi des problèmes routiers.",
    technologies: ["React", "Node.js", "MySQL"],
    visual: "civic",
    href: "#contact",
  },
];

const expertise = [
  { title: "Interfaces web", detail: "Des expériences rapides, accessibles et adaptées à tous les écrans.", stack: "HTML · CSS · JavaScript · React" },
  { title: "Applications métier", detail: "Des outils qui simplifient les opérations et les tâches quotidiennes.", stack: "PHP · Node.js · MySQL" },
  { title: "Produits mobiles", detail: "Des parcours mobiles conçus autour des usages et du terrain.", stack: "React Native · Flutter" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className={`project-preview preview-${project.visual}`} aria-label={`Aperçu illustratif de ${project.name}`}>
      {project.visual === "commerce" && (
        <div className="commerce-window">
          <div className="preview-bar"><span /><span /><span /><span className="preview-bar-label">CCM / NONSAKA</span></div>
          <div className="commerce-content">
            <div className="commerce-copy"><span className="preview-kicker">LE NATUREL AU QUOTIDIEN</span><strong>Le meilleur<br />de la nature,<br /><i>près de vous.</i></strong><span className="preview-underline" /><small>EXPLORER LA BOUTIQUE <Arrow /></small></div>
            <div className="product-shelf" aria-label="Aperçu des catégories de produits"><div className="store-product"><span className="product-packaging product-herbal" /><small>MÉDICAMENTS<br />TRADITIONNELS</small></div><div className="store-product"><span className="product-packaging product-food" /><small>ALIMENTATION<br />BIO</small></div><div className="store-product"><span className="product-packaging product-care" /><small>SOINS<br />NATURELS</small></div></div>
          </div>
        </div>
      )}
      {project.visual === "access" && (
        <div className="dashboard-window">
          <div className="dashboard-rail"><b>Q</b><span className="rail-active">◫</span><span>⌁</span><span>▤</span><span>⚙</span><small>GC</small></div>
          <div className="dashboard-main"><div className="dashboard-top"><span>ESPACE DE TRAVAIL / <b>VUE D’ENSEMBLE</b></span><span className="avatar">GC</span></div><h3>Bonjour, Carmel <span>✳</span></h3><p className="dashboard-subtitle">Voici le mouvement de votre équipe aujourd’hui.</p><div className="metric-row"><div><small>PRÉSENTS</small><strong>24 <em>+4</em></strong><span className="metric-bar"><i /></span></div><div><small>VISITEURS</small><strong>08</strong><span className="metric-bar"><i /></span></div><div><small>EN RETARD</small><strong>02</strong><span className="metric-bar"><i /></span></div></div><div className="table-head"><span>DERNIERS MOUVEMENTS</span><span>VOIR TOUT →</span></div><div className="table-line"><b>AM</b><span>Aminata M.</span><small>Entrée · 08:14</small><i>Enregistré</i></div><div className="table-line"><b>KY</b><span>Konan Y.</span><small>Entrée · 08:09</small><i>Enregistré</i></div></div>
        </div>
      )}
      {project.visual === "civic" && (
        <div className="civic-window"><div className="civic-top"><b>cité<span>.</span>signal</b><span>COMMENT ÇA MARCHE　　À PROPOS　　●</span></div><div className="civic-content"><div className="civic-heading"><span className="preview-kicker">AGIR ENSEMBLE, PRÈS DE CHEZ VOUS</span><strong>Votre quartier<br />mérite <i>mieux.</i></strong><p>Un problème sur la route ? Signalez-le en quelques instants.</p><span className="civic-button">Faire un signalement　<Arrow /></span></div><div className="map-card"><div className="map-grid"><span className="map-road road-one" /><span className="map-road road-two" /><span className="map-road road-three" /><i className="map-pin pin-one" /><i className="map-pin pin-two" /><i className="map-pin pin-three" /></div><div className="map-caption"><b>À proximité</b><small>12 signalements dans votre zone</small></div></div></div></div>
      )}
      <span className="preview-caption">ÉTUDE DE CAS <span>—</span> {project.number}</span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" id={`projet-${project.number}`}>
      <ProjectPreview project={project} />
      <div className="project-information">
        <div className="project-heading"><div><p className="project-category">{project.category}</p><h3>{project.name}</h3></div><a className="round-link" href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={`Découvrir ${project.name}`}><Arrow diagonal /></a></div>
        <p className="project-summary">{project.summary}</p>
        <div className="case-details"><div><span>LE DÉFI</span><p>{project.challenge}</p></div><div><span>LA RÉPONSE</span><p>{project.outcome}</p></div></div>
        <div className="project-meta"><ul className="project-tech" aria-label="Technologies utilisées">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>{project.repo && <a className="text-link" href={project.repo} target="_blank" rel="noopener noreferrer">Code source <Arrow diagonal /></a>}</div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <SiteHeader />
      <main id="contenu">
        <section className="hero section-shell" id="accueil">
          <div className="page-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="availability-dot" /> Développeur web & mobile · Côte d’Ivoire</p>
              <h1>Je donne forme<br />aux idées <span>utiles.</span></h1>
              <p className="hero-lead">Je conçois et développe des expériences numériques qui rendent les choses plus simples — pour les personnes comme pour les équipes.</p>
              <div className="hero-actions"><a className="button button-dark" href="#projets">Explorer mes projets <Arrow /></a><a className="button button-text" href="#apropos">En savoir plus <Arrow /></a></div>
              <div className="hero-footnote"><span>01 / 03</span><span>Produit · Web · Mobile</span></div>
            </div>
            <div className="hero-art" aria-label="Composition éditoriale de cartes d’interface web">
              <div className="hero-art-grid" />
              <div className="hero-art-note"><span>CONCEPTION<br />& DÉVELOPPEMENT</span><span>6°49′ N<br />5°17′ O</span></div>
              <div className="art-sheet art-sheet-back"><span>DESIGN<br />WITH<br /><i>intent.</i></span><small>COURS / 2026</small></div>
              <div className="art-sheet art-sheet-front"><div className="art-window-bar"><span /><span /><span /></div><div className="art-ui"><div className="art-ui-title"><span>MON ESPACE</span><b>○</b></div><strong>Bonjour,<br />Carmel<span>.</span></strong><div className="art-ui-rule" /><div className="art-ui-row"><i /><span>Nouvelle activité</span><b>↗</b></div><div className="art-ui-row"><i /><span>Votre progression</span><b>↗</b></div><div className="art-ui-row"><i /><span>Prochain rendez-vous</span><b>↗</b></div></div><div className="art-cursor">Carmel <span>+</span></div></div>
              <span className="hero-art-index">DES IDÉES CLAIRES.<br />DES PRODUITS SOIGNÉS.</span>
              <span className="hero-art-orbit" aria-hidden="true">+</span>
            </div>
          </div>
          <div className="page-shell hero-bottom"><span>EN CE MOMENT</span><span>Je construis des outils qui répondent à de vrais besoins.</span><a href="#projets">Voir le travail <Arrow /></a></div>
        </section>

        <section className="work-section section-shell" id="projets">
          <div className="page-shell">
            <div className="section-intro"><div><p className="eyebrow">Sélection · 2024 — 2026</p><h2>Du concret,<br />pensé avec soin.</h2></div><p>Des projets construits autour d’un vrai usage. Chacun commence par une question simple : comment rendre cette expérience meilleure ?</p></div>
            <div className="project-list">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
            <div className="project-foot"><span>PLUS DE CODE, MOINS DE PROMESSES.</span><a href="https://github.com/carmelfree1" target="_blank" rel="noopener noreferrer">Voir GitHub <Arrow diagonal /></a></div>
          </div>
        </section>

        <section className="services-section section-shell" id="services">
          <div className="page-shell"><div className="section-intro section-intro-compact"><div><p className="eyebrow">Ce que je fais</p><h2>Du besoin au produit.</h2></div><p>Un regard produit, une exécution attentive et un résultat pensé pour durer.</p></div>
            <div className="service-list">{expertise.map((item, index) => <article className="service-item" key={item.title}><span className="service-number">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.detail}</p><span className="service-stack">{item.stack}</span></div><Arrow diagonal /></article>)}</div>
          </div>
        </section>

        <section className="about-section section-shell" id="apropos">
          <div className="page-shell about-grid"><div className="about-title"><p className="eyebrow">Un peu de contexte</p><h2>La technique<br />au service des<br /><span>gens.</span></h2><a className="button button-dark cv-button" href="/assets/cv-gnadou-carmel.pdf" target="_blank" rel="noopener noreferrer" aria-label="Consulter mon CV au format PDF, dans un nouvel onglet"><span>Consulter mon CV</span><small className="cv-file-type">PDF</small><Arrow diagonal /></a></div>
            <div className="about-story"><p className="about-lead">Je m’appelle Carmel. Étudiant en informatique et développeur fullstack, j’aime transformer des problèmes quotidiens en outils simples et bien conçus.</p><p>Mon approche commence par comprendre le contexte : qui utilise le produit, quel est son besoin, et qu’est-ce qui l’empêche d’avancer. Ensuite, je conçois des interfaces lisibles et je construis les fonctionnalités qui les rendent utiles.</p>
              <div className="timeline"><div className="timeline-item"><span>AUJOURD’HUI</span><div><h3>Études & projets numériques</h3><p>Informatique, développement web et mobile, conception de produits.</p></div></div><div className="timeline-item"><span>EN PRATIQUE</span><div><h3>Apprendre en construisant</h3><p>Des projets variés, du commerce en ligne aux outils de gestion et services de proximité.</p></div></div><div className="timeline-item"><span>MA BOUSSOLE</span><div><h3>Clarté, utilité, attention</h3><p>Un produit réussi ne fait pas plus. Il fait mieux ce qui compte.</p></div></div></div>
            </div>
          </div>
        </section>

        <section className="skills-section section-shell" id="competences"><div className="page-shell skills-grid"><div><p className="eyebrow">Mon environnement</p><h2>Les bons outils<br />pour le bon travail.</h2><p className="skills-intro">Technologies apprises et utilisées au fil des projets — sans chercher à en faire une collection.</p></div><div className="skill-groups"><div><span>INTERFACES</span><p>HTML & CSS <i>·</i> JavaScript <i>·</i> React <i>·</i> React Native <i>·</i> Flutter</p></div><div><span>SERVEUR</span><p>PHP <i>·</i> Node.js</p></div><div><span>DONNÉES</span><p>MySQL <i>·</i> PostgreSQL <i>·</i> MongoDB</p></div><div><span>PRATIQUE</span><p>Prototypage <i>·</i> API <i>·</i> Responsive <i>·</i> Accessibilité</p></div></div></div></section>

        <section className="contact-section section-shell" id="contact"><div className="page-shell contact-grid"><div className="contact-copy"><p className="eyebrow">Un projet en tête ?</p><h2>Faisons-en<br /><span>quelque chose.</span></h2><p>Parlons de ce que vous cherchez à construire. Je réponds personnellement à chaque message.</p><div className="contact-links"><a href="mailto:gnadoucarmel@gmail.com">gnadoucarmel@gmail.com <Arrow diagonal /></a><a href="tel:+2250748207370">+225 07 48 20 73 70 <Arrow diagonal /></a><div className="social-row"><a href="https://github.com/carmelfree1" target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a><a href="https://www.tiktok.com/@monsieurdev2" target="_blank" rel="noopener noreferrer">TikTok <Arrow diagonal /></a><a href="https://wa.me/2250748207370" target="_blank" rel="noopener noreferrer">WhatsApp <Arrow diagonal /></a></div></div><span className="contact-location"><span className="availability-dot" /> Basé à Bouaflé, Côte d’Ivoire</span></div><ContactForm /></div></section>
      </main>
      <footer className="site-footer"><div className="page-shell footer-inner"><a className="wordmark" href="#accueil"><span className="wordmark-mark">C</span><span>carmel<span className="wordmark-muted">.dev</span></span></a><p>Conçu & développé avec attention.</p><a href="#accueil">Retour en haut ↑</a><span>© 2026 Carmel</span></div></footer>
    </>
  );
}
