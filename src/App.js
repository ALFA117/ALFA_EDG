import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import './App.css';
import { projects, socials, linkCheck } from './projectsData';
import { photos } from './photosData';
import heroPhoto1 from './assets/photos/edg-10.jpg';
import heroPhoto2 from './assets/photos/edg-09.jpg';
import heroPhoto3 from './assets/photos/edg-04.jpg';
import heroPhoto4 from './assets/photos/edg-02.jpg';
import heroPhoto5 from './assets/photos/edg-01.jpg';
import heroPhoto6 from './assets/photos/edg-03.jpg';
import AlfaMark from './components/AlfaMark';
import ProjectRow from './components/ProjectRow';
import CategoryTabs from './components/CategoryTabs';
import PhotoReel from './components/PhotoReel';
import SocialBar from './components/SocialBar';
import SocialRail from './components/SocialRail';
import ScrollProgress from './components/ScrollProgress';
import ParticleNetwork from './components/ParticleNetwork';
import BackToTop from './components/BackToTop';
import { Button, EmptyState } from './components/ui';
import {
  ShieldIcon,
  RocketIcon,
  LayersIcon,
  ChainIcon,
  CpuIcon,
  SunIcon,
  MoonIcon,
  ArrowRightIcon,
  GridIcon,
  MessageIcon,
  CameraIcon,
} from './components/Icons';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useLanguage } from './i18n/LanguageContext';

const BUCKET_ORDER = ['Infra', 'IA', 'Seguridad', 'Gaming', 'Web2', 'Freelance', 'Otros'];
const ETHOS_ICONS = [ShieldIcon, RocketIcon, LayersIcon];
const NAV_ICONS = { proyectos: GridIcon, contacto: MessageIcon, fotos: CameraIcon };

// object-position ajustado por foto — cada composición recorta distinto en
// el marco cuadrado del hero.
const HERO_PHOTOS = [
  { src: heroPhoto1, position: '78% 30%' },
  { src: heroPhoto2, position: '68% 38%' },
  { src: heroPhoto3, position: '50% 18%' },
  { src: heroPhoto4, position: '22% 22%' },
  { src: heroPhoto5, position: '55% 20%' },
  { src: heroPhoto6, position: '62% 30%' },
];
const HERO_ROTATE_MS = 6000;

function readTheme() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // almacenamiento bloqueado: cae al tema del sistema
  }
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function formatDate(iso, language) {
  return new Intl.DateTimeFormat(language === 'en' ? 'en-US' : 'es-MX', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`));
}

// Guion de no-corte: "full-stack" no debe partirse en dos renglones.
const keepHyphens = (text) => text.replace(/(\w)-(\w)/g, '$1‑$2');

function App() {
  const { language, setLanguage, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(null);
  const activeSection = useScrollSpy(['fotos', 'contacto', 'proyectos']);
  const reduceMotion = useReducedMotion();
  const [heroIndex, setHeroIndex] = useState(0);
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // sin almacenamiento: el tema sigue funcionando en esta visita
    }
    // Las <meta name="theme-color"> estáticas solo cubren el tema del
    // sistema; al elegir uno, la barra del navegador móvil lo sigue.
    const color = theme === 'light' ? '#f6f8f7' : '#07090a';
    document.querySelectorAll('meta[name="theme-color"]').forEach((el) => {
      el.setAttribute('content', color);
    });
  }, [theme]);

  // La rotación de fotos se detiene con movimiento reducido y cuando la
  // pestaña está oculta.
  useEffect(() => {
    if (reduceMotion) return undefined;
    let id;
    const start = () => {
      clearInterval(id);
      id = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_PHOTOS.length), HERO_ROTATE_MS);
    };
    const onVisibility = () => (document.hidden ? clearInterval(id) : start());
    start();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      clearInterval(id);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [reduceMotion]);

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

  const categoryCounts = useMemo(() => {
    const counts = { all: projects.length };
    for (const p of projects) counts[p.bucket] = (counts[p.bucket] || 0) + 1;
    return counts;
  }, []);

  const localizedProjects = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        alias: typeof project.alias === 'object' ? project.alias[language] : project.alias,
        tag: project.tag[language],
        env: project.env ? project.env[language] : null,
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

  const themeLabel = theme === 'light' ? t.themeToggle.toDark : t.themeToggle.toLight;

  return (
    <div className="page">
      <a href="#main-content" className="skip-link">
        {t.skipToContent}
      </a>
      <ParticleNetwork className="page__network" />
      <ScrollProgress />
      <header className="nav">
        <a href="#top" className="nav__brand">
          <AlfaMark />
          ALFA-EDG
        </a>
        <div className="nav__right">
          <nav className="nav__links" aria-label={language === 'en' ? 'Sections' : 'Secciones'}>
            {navLinks.map((link) => {
              const Icon = NAV_ICONS[link.id];
              const isActive = activeSection === link.id;
              return (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className={'nav__link' + (isActive ? ' is-active' : '')}
                  aria-current={isActive ? 'location' : undefined}
                  whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="nav__link-indicator"
                      transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon />
                  <span>{link.label}</span>
                </motion.a>
              );
            })}
          </nav>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={themeLabel}
            title={themeLabel}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                className="icon-btn__swap"
                initial={reduceMotion ? false : { opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
              </motion.span>
            </AnimatePresence>
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            aria-label={t.langToggle.aria}
          >
            {t.langToggle.label}
          </button>
        </div>
      </header>

      <SocialRail items={socials} />

      <main id="main-content">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero__glow" aria-hidden="true" />

          <div className="hero__kicker">
            <p className="hero__badge">
              <span className="hero__badge-prompt" aria-hidden="true">~$</span>
              <span>{t.hero.eyebrow}</span>
            </p>
          </div>

          <div className="hero__inner">
            <div className="hero__visual">
              <span className="hero__photo">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={heroIndex}
                    src={HERO_PHOTOS[heroIndex].src}
                    alt=""
                    width="600"
                    height="600"
                    style={{ objectPosition: HERO_PHOTOS[heroIndex].position }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
              </span>
              <div className="hero__chip hero__chip--1" aria-hidden="true">
                <ChainIcon /> {t.hero.chips.web3}
              </div>
              <div className="hero__chip hero__chip--2" aria-hidden="true">
                <CpuIcon /> {t.hero.chips.ai}
              </div>
              <div className="hero__chip hero__chip--3" aria-hidden="true">
                <ShieldIcon /> {t.hero.chips.security}
              </div>
            </div>

            <div className="hero__content">
              <h1 id="hero-title" className="hero__title t-display">
                {keepHyphens(t.hero.title).split(' ').slice(0, -1).join(' ')}{' '}
                <span className="nowrap">
                  {keepHyphens(t.hero.title).split(' ').slice(-1)}
                  <span className="blink-cursor" aria-hidden="true" />
                </span>
              </h1>
              <p className="hero__subtitle">{t.hero.intro}</p>
              <ul className="hero__highlights">
                {t.hero.highlights(projects.length).map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="hero__closing">{t.hero.closing}</p>
              <Button href="#proyectos" iconEnd={<ArrowRightIcon />}>
                {t.hero.cta}
              </Button>
            </div>

            <div className="hero__stats-wrap">
              <dl className="hero__stats">
                <div className="hero__stat">
                  <dt className="hero__stat-label">{t.hero.stats.projects}</dt>
                  <dd className="hero__stat-value">{projects.length}</dd>
                </div>
                <div className="hero__stat">
                  <dt className="hero__stat-label">{t.hero.stats.categories}</dt>
                  <dd className="hero__stat-value">{categories.length}</dd>
                </div>
                <div className="hero__stat">
                  <dt className="hero__stat-label">{t.hero.stats.links}</dt>
                  <dd className="hero__stat-value">
                    {linkCheck.ok}/{linkCheck.total}
                  </dd>
                </div>
              </dl>
              <p className="hero__stat-note">
                {t.hero.linkNote(linkCheck.ok, linkCheck.total, formatDate(linkCheck.date, language))}
              </p>
            </div>
          </div>
        </section>

        <section className="ethos" aria-labelledby="ethos-title">
          <h2 id="ethos-title" className="ethos__kicker t-eyebrow">
            {t.ethos.kicker}
          </h2>
          <div className="ethos__grid">
            {t.ethos.items.map((item, index) => {
              const Icon = ETHOS_ICONS[index];
              return (
                <div className="ethos__item" key={item.title}>
                  <div className="ethos__head">
                    <span className="ethos__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="ethos__index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}/03
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="fotos" className="field" aria-labelledby="fotos-title">
          <div className="section-heading">
            <h2 id="fotos-title" className="t-title">{t.field.heading}</h2>
            <span className="section-heading__stamp">
              {photos.length} {t.field.stampSuffix}
            </span>
          </div>
          <p className="section-lead">{t.field.subtitle}</p>
          <PhotoReel photos={photos} />
        </section>

        <section id="contacto" className="contact" aria-labelledby="contacto-title">
          <h2 id="contacto-title" className="t-title">{t.contact.heading}</h2>
          <p>{t.contact.body}</p>
          <SocialBar items={socials} />
        </section>

        <section id="proyectos" className="registry" aria-labelledby="proyectos-title">
          <div className="section-heading">
            <h2 id="proyectos-title" className="t-title">{t.registry.heading}</h2>
            <span className="section-heading__stamp">
              {projects.length} {t.registry.stampSuffix}
            </span>
          </div>
          <p className="section-lead">{t.registry.lead}</p>
          <CategoryTabs
            categories={categories}
            counts={categoryCounts}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          {filteredProjects.length === 0 ? (
            <EmptyState
              title={t.registry.empty.title}
              body={t.registry.empty.body}
              action={
                <Button variant="secondary" onClick={() => setActiveCategory(null)}>
                  {t.registry.empty.action}
                </Button>
              }
            />
          ) : (
            <div className="registry__list">
              {filteredProjects.map((project, index) => (
                <ProjectRow
                  key={project.url + project.name}
                  index={index}
                  showKnot={project.name === 'AVAL'}
                  {...project}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <span>ALFA-EDG © {new Date().getFullYear()}</span>
      </footer>

      <BackToTop />
    </div>
  );
}

export default App;
