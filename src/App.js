import React, { useMemo, useState } from 'react';
import './App.css';
import { projects, socials } from './projectsData';
import { photos } from './photosData';
import SwapKnot from './components/SwapKnot';
import ParticleField from './components/ParticleField';
import ProjectRow from './components/ProjectRow';
import CategoryFilter from './components/CategoryFilter';
import PhotoReel from './components/PhotoReel';
import SocialBar from './components/SocialBar';
import Reveal from './components/Reveal';
import { useScrollSpy } from './hooks/useScrollSpy';

const BUCKET_ORDER = ['Infra', 'IA', 'Seguridad', 'Gaming', 'Freelance', 'Otros'];
const NAV_LINKS = [
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'fotos', label: 'Fotos' },
  { id: 'contacto', label: 'Contacto' },
];

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
      <ParticleField />
      <header className="nav">
        <a href="#top" className="nav__brand">
          <SwapKnot size={22} />
          ALFA-EDG
        </a>
        <nav className="nav__links" aria-label="Secciones">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={
                'nav__link' + (activeSection === link.id ? ' is-active' : '')
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

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
              Ver el registro <span className="btn__arrow">→</span>
            </a>
          </div>
        </section>

        <Reveal as="section" className="ethos">
          <span className="ethos__kicker">Cómo construyo</span>
          <div className="ethos__grid">
            <div className="ethos__item">
              <span className="ethos__dot" aria-hidden="true" />
              <h3>Sin custodios</h3>
              <p>
                Los contratos y los HTLC son la única autoridad. Si un swap
                falla, el timeout regresa los fondos — no un ticket de soporte.
              </p>
            </div>
            <div className="ethos__item">
              <span className="ethos__dot" aria-hidden="true" />
              <h3>Producción, no demos</h3>
              <p>
                Cada proyecto del registro está deployado y en uso — no es
                un mockup ni un pitch deck.
              </p>
            </div>
            <div className="ethos__item">
              <span className="ethos__dot" aria-hidden="true" />
              <h3>Full-stack real</h3>
              <p>
                De la lógica on-chain al frontend que la gente usa: construyo
                el stack completo, no solo el contrato.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" id="proyectos" className="registry">
          <div className="section-heading">
            <h2>Registro de proyectos</h2>
            <span className="section-heading__stamp">
              {projects.length} activos
            </span>
          </div>
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
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

      <footer className="footer">
        <span>ALFA-EDG © {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;
