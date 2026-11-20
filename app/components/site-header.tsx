"use client";

import { useState } from "react";

const links = [
  ["Projets", "#projets"],
  ["Services", "#services"],
  ["À propos", "#apropos"],
  ["Contact", "#contact"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <a className="wordmark" href="#accueil" aria-label="Carmel, accueil">
          <span className="wordmark-mark">C</span>
          <span>carmel<span className="wordmark-muted">.dev</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav id="main-navigation" className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navigation principale">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Discutons <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
