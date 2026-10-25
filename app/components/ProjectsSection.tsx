'use client'

import { useState } from 'react'
import { projects, Project } from '../data/projects'

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [filtroProyectos, setFiltroProyectos] = useState('Todos')
  const [mostrarTodosProyectos, setMostrarTodosProyectos] = useState(false)

  const proyectosFiltrados = projects.filter((project) => {
    if (filtroProyectos === 'Todos') return true

    if (filtroProyectos === 'Web') {
      return project.tags.some((tag) =>
        ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'React', 'Next.js'].includes(tag)
      )
    }

    if (filtroProyectos === 'Bases de datos') {
      return project.tags.some((tag) =>
        ['MySQL', 'MongoDB', 'SQL', 'NoSQL', 'Cloud Databases'].includes(tag)
      )
    }

    if (filtroProyectos === 'Diseño') {
      return project.tags.some((tag) =>
        ['UX/UI', 'Figma', 'Diseño'].includes(tag)
      )
    }

    if (filtroProyectos === 'Móvil') {
      return project.tags.some((tag) => ['React Native'].includes(tag))
    }

    return true
  })

  return (
    <section className="section projects-section" id="proyectos">
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span />
            Trabajo reciente
          </div>
          <h2>Proyectos</h2>
        </div>
        <p>
          Una selección de sistemas e interfaces en los que he trabajado durante mi
          formación.
        </p>
      </div>

      <div className="project-filters">
        {['Todos', 'Web', 'Móvil'].map((filtro) => (
          <button
            key={filtro}
            className={filtroProyectos === filtro ? 'active' : ''}
            onClick={() => {
              setFiltroProyectos(filtro)
              setMostrarTodosProyectos(false)
            }}
          >
            {filtro}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {proyectosFiltrados
          .slice(0, mostrarTodosProyectos ? undefined : 3)
          .map((project, index) => (
            <article
              className="project-card"
              key={project.title}
              onClick={() => onSelectProject(project)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{project.year}</span>
              </div>

              <div className="project-image">
                <img
                  src={project.cover}
                  alt={`Vista previa de ${project.title}`}
                />
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
      </div>

      {proyectosFiltrados.length > 3 && (
        <div className="projects-more">
          <button
            onClick={() => setMostrarTodosProyectos(!mostrarTodosProyectos)}
          >
            {mostrarTodosProyectos
              ? 'Mostrar menos'
              : 'Ver todos los proyectos'}
          </button>
        </div>
      )}
    </section>
  )
}