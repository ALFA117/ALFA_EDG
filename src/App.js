import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import './App.css';
import { projects, socials } from './projectsData';
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
import Reveal from './components/Reveal';
import TypedText from './components/TypedText';
import CountUp from './components/CountUp';
import ScrollProgress from './components/ScrollProgress';
import ParticleNetwork from './components/ParticleNetwork';
import BackToTop from './components/BackToTop';
import { ShieldIcon, RocketIcon, LayersIcon, ChainIcon, CpuIcon, SunIcon, MoonIcon } from './components/Icons';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useLanguage } from './i18n/LanguageContext';

const BUCKET_ORDER = ['Infra', 'IA', 'Seguridad', 'Gaming', 'Freelance', 'Otros'];
const ETHOS_ICONS = [ShieldIcon, RocketIcon, LayersIcon];

// Object-position tuned per photo — different compositions need different
// focal points to crop well into the hero's square frame.
const HERO_PHOTOS = [
  { src: heroPhoto1, position: '78% 30%' },
  { src: heroPhoto2, position: '68% 38%' },
  { src: heroPhoto3, position: '50% 18%' },
  { src: heroPhoto4, position: '22% 22%' },
  { src: heroPhoto5, position: '55% 20%' },
  { src: heroPhoto6, position: '62% 30%' },
];
const HERO_ROTATE_MS = 6000;

function App() {
  const { language, setLanguage, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(null);
  const activeSection = useScrollSpy(['fotos', 'contacto', 'proyectos']);
  const reduceMotion = useReducedMotion();
  const [heroIndex, setHeroIndex] = useState(0);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // The static <meta name="theme-color"> tags only cover the OS default —
    // once the user picks a theme explicitly, the browser chrome (mobile
    // Safari/Chrome address bar) should follow that choice, not just the
    // system preference.
    const color = theme === 'light' ? '#f6f8f7' : '#07090a';
    document.querySelectorAll('meta[name="theme-color"]').forEach((el) => {
      el.setAttribute('content', color);
    });
  }, [theme]);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_PHOTOS.length);
    }, HERO_ROTATE_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);
  const chipEntrance = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut', delay },
  });

  // The <html lang> and tab title were static (always Spanish) regardless of
  // the toggle — a real gap for screen readers and search engines, and the
  // localized copy for this was already sitting unused in t.meta.
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', t.meta.description);
  }, [language, t]);

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
      <ScrollProgress />
      <header className="nav">
        <a href="#top" className="nav__brand">
          <AlfaMark />
          ALFA-EDG
        </a>
        <div className="nav__right">
          <nav className="nav__links" aria-label={language === 'en' ? 'Sections' : 'Secciones'}>
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={
                  'nav__link' + (activeSection === link.id ? ' is-active' : '')
                }
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={theme === 'light' ? t.themeToggle.toDark : t.themeToggle.toLight}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
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

      <SocialRail items={socials} />

      <main>
        <section id="top" className="hero">
          <div className="hero__glow" aria-hidden="true" />
          <ParticleNetwork className="hero__network" />

          <div className="hero__kicker">
            <div className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              <TypedText text={t.hero.eyebrow} />
            </div>
            <span className="hero__accent-bar" aria-hidden="true" />
          </div>

          <div className="hero__inner">
          <div className="hero__visual">
            <span className="hero__photo">
              <AnimatePresence>
                <motion.img
                  key={heroIndex}
                  src={HERO_PHOTOS[heroIndex].src}
                  alt=""
                  loading="eager"
                  style={{ objectPosition: HERO_PHOTOS[heroIndex].position }}
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
              </AnimatePresence>
            </span>
            <motion.div className="hero__chip hero__chip--1" {...chipEntrance(0.5)} aria-hidden="true">
              <ChainIcon /> {t.hero.chips.web3}
            </motion.div>
            <motion.div className="hero__chip hero__chip--2" {...chipEntrance(0.65)} aria-hidden="true">
              <CpuIcon /> {t.hero.chips.ai}
            </motion.div>
            <motion.div className="hero__chip hero__chip--3" {...chipEntrance(0.8)} aria-hidden="true">
              <ShieldIcon /> {t.hero.chips.security}
            </motion.div>
          </div>

          <div className="hero__content">
            <h1 className="hero__title">
              {t.hero.title}
              <span className="blink-cursor" aria-hidden="true" />
            </h1>
            <p className="hero__subtitle">{t.hero.intro}</p>
            <ul className="hero__highlights">
              {t.hero.highlights(projects.length).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="hero__closing">{t.hero.closing}</p>
            <div className="hero__actions">
              <motion.a
                className="btn btn--primary"
                href="#proyectos"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {t.hero.cta} <span className="btn__arrow">→</span>
              </motion.a>
            </div>
          </div>

          <dl className="hero__stats">
            <div className="hero__stat">
              <dt className="hero__stat-value">
                <CountUp value={projects.length} />
              </dt>
              <dd className="hero__stat-label">{t.hero.stats.projects}</dd>
            </div>
            <div className="hero__stat">
              <dt className="hero__stat-value">
                <CountUp value={categories.length} />
              </dt>
              <dd className="hero__stat-label">{t.hero.stats.categories}</dd>
            </div>
            <div className="hero__stat">
              <dt className="hero__stat-value">100%</dt>
              <dd className="hero__stat-label">{t.hero.stats.prod}</dd>
            </div>
          </dl>
          </div>
        </section>

        <Reveal as="section" className="ethos">
          <div className="ethos__grid">
            {t.ethos.items.map((item, index) => {
              const Icon = ETHOS_ICONS[index];
              return (
                <div
                  className="ethos__item"
                  key={item.title}
                  style={{ '--delay': `${index * 120}ms` }}
                >
                  <span className="ethos__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal as="section" id="fotos" className="field">
          <div className="section-heading">
            <h2>{t.field.heading}</h2>
            <span className="section-heading__stamp">
              <CountUp value={photos.length} /> {t.field.stampSuffix}
            </span>
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
              <CountUp value={projects.length} /> {t.registry.stampSuffix}
            </span>
          </div>
          <CategoryTabs
            categories={categories}
            counts={categoryCounts}
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

      <BackToTop />
    </div>
  );
}

export default App;
