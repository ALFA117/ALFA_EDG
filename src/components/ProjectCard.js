import React from 'react';
import { ExternalLinkIcon } from './Icons';

function ProjectCard({ name, tag, url, index }) {
  return (
    <a
      className="project-card"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ '--delay': `${Math.min(index * 40, 400)}ms` }}
    >
      <span className="project-card__glow" aria-hidden="true" />
      <div className="project-card__top">
        <span className="project-card__status">
          <span className="project-card__dot" aria-hidden="true" />
          Live
        </span>
        <ExternalLinkIcon className="project-card__link-icon" />
      </div>
      <h3 className="project-card__name">{name}</h3>
      <span className="project-card__tag">{tag}</span>
    </a>
  );
}

export default ProjectCard;
