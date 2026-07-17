// src/App.js
import React from 'react';
import './App.css'; // Importaremos los estilos aquí
import { cvData } from './cvData'; // Importamos tus datos
import Header from './components/Header';
import Section from './components/Section';
import ExperienceItem from './components/ExperienceItem';

function App() {
  return (
    <div className="container">
      <Header 
        nombre={cvData.nombre}
        titulo={cvData.titulo}
        contacto={cvData.contacto}
      />

      <main>
        <Section title="Resumen Profesional">
          <p>{cvData.resumen}</p>
        </Section>

        <Section title="Experiencia Laboral">
          {cvData.experiencia.map((exp, index) => (
            <ExperienceItem 
              key={index}
              puesto={exp.puesto}
              empresa={exp.empresa}
              periodo={exp.periodo}
              descripcion={exp.descripcion}
            />
          ))}
        </Section>

        <Section title="Educación">
          {cvData.educacion.map((edu, index) => (
            <div className="item" key={index}>
              <h4>{edu.titulo}</h4>
              <p>{edu.institucion} ({edu.periodo})</p>
            </div>
          ))}
        </Section>

        <Section title="Habilidades Técnicas">
          <ul className="skills-list">
            {cvData.habilidades.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </Section>
      </main>
    </div>
  );
}

export default App;
