import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import './App.css';
import { projects, socials } from './projectsData';
import { photos } from './photosData';
import AlfaMark from './components/AlfaMark';
import ParticleField from './components/ParticleField';
import ProjectRow from './components/ProjectRow';
import CategoryTabs from './components/CategoryTabs';
import PhotoReel from './components/PhotoReel';
import SocialBar from './components/SocialBar';
import Reveal from './components/Reveal';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useLanguage } from './i18n/LanguageContext';

const BUCKET_ORDER = ['Infra', 'IA', 'Seguridad', 'Gaming', 'Freelance', 'Otros'];

// Three.js/WebGPU es pesado (~400KB) — solo se descarga en navegadores que
// realmente pueden usarlo, así el resto del sitio no paga ese costo.
const Hero3D = lazy(() => import('./components/Hero3D'));

function App() {
  const { language, setLanguage, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(null);
  const activeSection = useScrollSpy(['fotos', 'contacto', 'proyectos']);
  const [hero3dEnabled, setHero3dEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setHero3dEnabled(!reducedMotion && typeof navigator !== 'undefined' && !!navigator.gpu);
  }, []);

  const navLinks = useMemo(
    () => [
      { id: 'proyectos', label: t.nav.projects },
      { id: 'contacto', label: t.nav.contact },
      { id: 'fotos', label: t.nav.photos },
    ],
    [t]
  );

  const categories = useMemo(() => {
    const present = new Set(projects.map((p) => p.bucket));
    return BUCKET_ORDER.filter((bucket) => present.has(bucket));
  }, []);

  const localizedProjects = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        tag: project.tag[language],
        description: project.description[language],
      })),
    [language]
  );

  const filteredProjects = useMemo(
    () =>
      activeCategory
        ? localizedProjects.filter((p) => p.bucket === activeCategory)
        : localizedProjects,
    [localizedProjects, activeCategory]
  );

  return (
    <div className="page">
      {hero3dEnabled ? (
        <Suspense fallback={<ParticleField />}>
          <Hero3D />
        </Suspense>
      ) : (
        <ParticleField />
      )}
      <header className="nav">
        <a href="#top" className="nav__brand">
          <AlfaMark />
          ALFA-EDG
        </a>
        <div className="nav__right">
          <nav className="nav__links" aria-label={language === 'en' ? 'Sections' : 'Secciones'}>
            {navLinks.map((link) => (
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
          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            aria-label={t.langToggle.aria}
          >
            {t.langToggle.label}
          </button>
        </div>
      </header>

      <main>
        <section id="top" className="hero">
          <AlfaMark variant="ghost" className="hero__watermark" />
          <span className="hero__eyebrow">{t.hero.eyebrow}</span>
          <h1 className="hero__title">{t.hero.title}</h1>
          <p className="hero__subtitle">{t.hero.subtitle(projects.length)}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#proyectos">
              {t.hero.cta} <span className="btn__arrow">→</span>
            </a>
          </div>
        </section>

        <Reveal as="section" className="ethos">
          <span className="ethos__kicker">{t.ethos.kicker}</span>
          <div className="ethos__grid">
            {t.ethos.items.map((item, index) => (
              <div
                className="ethos__item"
                key={item.title}
                style={{ '--delay': `${index * 120}ms` }}
              >
                <span className="ethos__dot" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" id="fotos" className="field">
          <div className="section-heading">
            <h2>{t.field.heading}</h2>
            <span className="section-heading__stamp">{t.field.stamp(photos.length)}</span>
          </div>
          <p className="field__subtitle">{t.field.subtitle}</p>
          <PhotoReel photos={photos} />
        </Reveal>

        <Reveal as="section" id="contacto" className="contact">
          <h2>{t.contact.heading}</h2>
          <p>{t.contact.body}</p>
          <SocialBar items={socials} />
        </Reveal>

        <Reveal as="section" id="proyectos" className="registry">
          <div className="section-heading">
            <h2>{t.registry.heading}</h2>
            <span className="section-heading__stamp">
              {t.registry.stamp(projects.length)}
            </span>
          </div>
          <CategoryTabs
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
      </main>

      <footer className="footer">
        <span>ALFA-EDG © {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;
