import React from 'react';
import { ExternalLinkIcon } from './Icons';
import SwapKnot from './SwapKnot';
import { useLanguage } from '../i18n/LanguageContext';

function ProjectRow({ name, alias, tag, description, url, showKnot, index }) {
  const { t } = useLanguage();

  return (
    <a
      className="project-row"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ '--delay': `${Math.min(index * 30, 300)}ms` }}
    >
      <span className="project-row__status">
        <span className="project-row__dot" aria-hidden="true" />
        <span className="project-row__status-label">{t.projectRow.live}</span>
      </span>

      <span className="project-row__main">
        <span className="project-row__name">
          {name}
          {alias && <span className="project-row__alias"> · {alias}</span>}
          {showKnot && <SwapKnot className="project-row__knot" size={18} />}
        </span>
        <span className="project-row__description">{description}</span>
      </span>

      <span className="project-row__meta">
        <span className="project-row__tag">{tag}</span>
        <ExternalLinkIcon className="project-row__link-icon" />
      </span>
    </a>
  );
}

export default ProjectRow;
