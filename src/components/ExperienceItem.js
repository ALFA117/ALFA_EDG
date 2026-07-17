// src/components/ExperienceItem.js
import React from 'react';

const ExperienceItem = ({ puesto, empresa, periodo, descripcion }) => {
  return (
    <div className="item">
      <h4>{puesto} <span className="empresa">@ {empresa}</span></h4>
      <p className="periodo">{periodo}</p>
      <p>{descripcion}</p>
    </div>
  );
};

export default ExperienceItem;
