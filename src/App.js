import React, { useMemo, useState } from 'react';
import './App.css';
import { projects, socials } from './projectsData';
import { photos } from './photosData';
import SwapKnot from './components/SwapKnot';
import IndexRail from './components/IndexRail';
import ProjectRow from './components/ProjectRow';
import PhotoReel from './components/PhotoReel';
import SocialBar from './components/SocialBar';
import Reveal from './components/Reveal';
import { useScrollSpy } from './hooks/useScrollSpy';

const BUCKET_ORDER = ['Infra', 'IA', 'Seguridad', 'Gaming', 'Freelance', 'Otros'];

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const activeSection = useScrollSpy(['proyectos', 'fotos', 'contacto']);

  const categories = useMemo(() => {
    const present = new Set(projects.map((p) => p.bucket));
    return BUCKET_ORDER.filter((bucket) => present.has(bucket));
  }, []);

  const filteredProjects = useMemo(
    () =>
      activeCategory
        ? projects.filter((p) => p.bucket === activeCategory)
        : projects,
    [activeCategory]
  );

  return (
    <div className="page">
      <header className="nav">
        <a href="#top" className="nav__brand">
          <SwapKnot size={22} />
          ALFA-EDG
        </a>
        <a className="nav__cta" href="#contacto">
          Contacto
        </a>
      </header>

      <div className="layout">
        <IndexRail
          activeSection={activeSection}
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <main>
          <section id="top" className="hero">
            <SwapKnot className="hero__watermark" size={280} />
            <span className="hero__eyebrow">Full-stack · Web3 + IA</span>
            <h1 className="hero__title">
              Construyo infraestructura para mover valor sin custodios.
            </h1>
            <p className="hero__subtitle">
              Sling Chain: swaps cross-chain atómicos vía HTLC, sin KYC ni
              custodios. Además, agentes de IA on-device, DeFi, seguridad
              on-chain y gaming — {projects.length} proyectos en producción.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#proyectos">
                Ver el registro →
              </a>
            </div>
          </section>

          <Reveal as="section" id="proyectos" className="registry">
            <div className="section-heading">
              <h2>Registro de proyectos</h2>
              <span className="section-heading__stamp">
                {projects.length} activos
              </span>
            </div>
            <div className="registry__list">
              {filteredProjects.map((project, index) => (
                <ProjectRow
                  key={`${project.url}-${index}`}
                  index={index}
                  showKnot={project.name === 'AVAL'}
                  {...project}
                />
              ))}
            </div>
          </Reveal>

          <Reveal as="section" id="fotos" className="field">
            <div className="section-heading">
              <h2>En campo</h2>
              <span className="section-heading__stamp">{photos.length} fotos</span>
            </div>
            <PhotoReel photos={photos} />
          </Reveal>

          <Reveal as="section" id="contacto" className="contact">
            <h2>Contacto</h2>
            <p>Sígueme o escríbeme directo por WhatsApp para hablar de tu proyecto.</p>
            <SocialBar items={socials} />
          </Reveal>
        </main>
      </div>

      <footer className="footer">
        <span>ALFA-EDG © {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;
