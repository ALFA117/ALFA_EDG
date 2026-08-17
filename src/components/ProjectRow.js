import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from './Icons';
import AlfaMark from './AlfaMark';
import { useLanguage } from '../i18n/LanguageContext';

const TILT_MAX_DEG = 6;

function ProjectRow({ name, alias, tag, description, url, preview, bucket, showKnot, index }) {
  const { t } = useLanguage();
  const previewRef = useRef(null);

  // A subtle 3D tilt on the thumbnail that tracks the pointer — cheap (pure
  // CSS transform, no libraries) and only active on pointer devices, since
  // there's no hover to tilt toward on touch.
  function handlePointerMove(event) {
    const el = previewRef.current;
    if (!el || event.pointerType === 'touch') return;
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
      style={{ '--delay': `${Math.min(index * 30, 300)}ms` }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
    >
      {preview && (
        <span className="project-card__preview" ref={previewRef}>
          <img src={preview} alt="" loading="lazy" width="640" height="400" />
          <span className="project-card__index" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          {showKnot && <AlfaMark className="project-card__knot" title={t.projectRow.flagship} />}
        </span>
      )}

      <span className="project-card__body">
        <span className="project-card__head">
          <span className="project-card__name">
            {name}
            {alias && <span className="project-card__alias"> · {alias}</span>}
          </span>
          <span className="project-card__status">
            <span className="project-card__dot" aria-hidden="true" />
            {t.projectRow.live}
          </span>
        </span>

        <span className="project-card__description">{description}</span>

        <span className="project-card__footer">
          <span className="project-card__tag">{tag}</span>
          <ExternalLinkIcon className="project-card__link-icon" />
        </span>
      </span>
    </motion.a>
  );
}

export default ProjectRow;
