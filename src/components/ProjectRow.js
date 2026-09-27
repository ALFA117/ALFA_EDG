import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLinkIcon } from './Icons';
import AlfaMark from './AlfaMark';
import { Skeleton, MiddleTruncate } from './ui';
import { useLanguage } from '../i18n/LanguageContext';

const TILT_MAX_DEG = 6;

function displayUrl(url) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

function ProjectRow({ name, alias, tag, env, description, url, preview, bucket, showKnot, index }) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const previewRef = useRef(null);
  // loading → loaded | error: la captura tiene su propio estado para no
  // dejar un hueco mientras carga ni una imagen rota si falla.
  const [imgState, setImgState] = useState(preview ? 'loading' : 'error');
  const domain = displayUrl(url);

  // Inclinación 3D sutil que sigue al puntero — solo con mouse (en touch no
  // hay hover hacia el cual inclinar) y nunca con movimiento reducido.
  function handlePointerMove(event) {
    const el = previewRef.current;
    if (!el || event.pointerType === 'touch' || reduceMotion) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--tilt-x', `${(-py * TILT_MAX_DEG).toFixed(2)}deg`);
    el.style.setProperty('--tilt-y', `${(px * TILT_MAX_DEG).toFixed(2)}deg`);
  }

  function resetTilt() {
    const el = previewRef.current;
    if (!el) return;
    el.style.setProperty('--tilt-x', '0deg');
    el.style.setProperty('--tilt-y', '0deg');
  }

  return (
    <motion.a
      className="project-card"
      data-cat={bucket}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 400, damping: 26 }}
    >
      <span
        className={`project-card__preview ${imgState === 'loaded' ? 'is-loaded' : ''}`}
        ref={previewRef}
      >
        {imgState === 'loading' && <Skeleton />}
        {imgState === 'error' ? (
          <span className="project-card__preview-fallback">
            <span>
              {t.projectRow.previewError}
              <br />
              <MiddleTruncate text={domain} head={18} tail={12} />
            </span>
          </span>
        ) : (
          <img
            src={preview}
            alt=""
            loading={index < 3 ? 'eager' : 'lazy'}
            decoding="async"
            width="640"
            height="400"
            onLoad={() => setImgState('loaded')}
            onError={() => setImgState('error')}
          />
        )}
        <span className="project-card__index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        {showKnot && <AlfaMark className="project-card__knot" title={t.projectRow.flagship} />}
      </span>

      <span className="project-card__body">
        <span className="project-card__head">
          <h3 className="project-card__name">
            {name}
            {alias && <span className="project-card__alias">{alias}</span>}
          </h3>
          <span className="project-card__status">
            <span className="project-card__dot" aria-hidden="true" />
            {t.projectRow.live}
          </span>
        </span>

        <span className="project-card__description">{description}</span>

        {env && <span className="project-card__env">{env}</span>}

        <span className="project-card__footer">
          <span className="project-card__tag">{tag}</span>
          <span className="project-card__domain">
            <MiddleTruncate text={domain} head={12} tail={8} />
            <ExternalLinkIcon className="project-card__link-icon" />
            <span className="sr-only">({t.projectRow.opens})</span>
          </span>
        </span>
      </span>
    </motion.a>
  );
}

export default ProjectRow;
