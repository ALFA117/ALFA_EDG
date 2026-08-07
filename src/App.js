import React from 'react';
import './App.css';
import { projects, socials } from './projectsData';
import ProjectCard from './components/ProjectCard';
import SocialBar from './components/SocialBar';

function App() {
  return (
    <div className="page">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow bg-glow--cyan" aria-hidden="true" />
      <div className="bg-glow bg-glow--purple" aria-hidden="true" />

      <header className="nav">
        <span className="nav__brand">ALFA_EDG</span>
        <a className="nav__cta" href="#contacto">Contacto</a>
      </header>

      <main>
        <section className="hero">
          <span className="hero__eyebrow">Desarrollador · IA &amp; Web3</span>
          <h1 className="hero__title">
            Construyo productos digitales
            <span className="hero__title-accent"> en producción.</span>
          </h1>
          <p className="hero__subtitle">
            Portafolio de proyectos activos: IA, Web3 y aplicaciones full-stack
            desplegadas y funcionando en vivo.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#proyectos">Ver proyectos</a>
            <a className="btn btn--ghost" href="#contacto">Hablemos</a>
          </div>
        </section>

        <section className="projects" id="proyectos">
          <div className="section-heading">
            <h2>Proyectos</h2>
            <span className="section-heading__count">{projects.length} en vivo</span>
          </div>
          <div className="projects__grid">
            {projects.map((project, index) => (
              <ProjectCard key={`${project.url}-${index}`} index={index} {...project} />
            ))}
          </div>
        </section>

        <section className="contact" id="contacto">
          <h2>Conectemos</h2>
          <p>Sígueme o escríbeme directo por WhatsApp para hablar de tu proyecto.</p>
          <SocialBar items={socials} />
        </section>
      </main>

      <footer className="footer">
        <span>ALFA_EDG © {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;
