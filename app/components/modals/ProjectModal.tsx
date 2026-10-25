'use client'

import { Check, X } from 'lucide-react'
import { Project } from '../../data/projects'

interface ProjectModalProps {
  proyecto: Project
  onClose: () => void
}

export default function ProjectModal({
  proyecto,
  onClose,
}: ProjectModalProps) {
  return (
    <div className="project-modal" onClick={onClose}>
      <div
        className="project-modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="project-modal-header">
          <div>
            <span className="project-modal-year">{proyecto.year}</span>
            <h2>{proyecto.title}</h2>
          </div>

          <button
            className="project-close"
            onClick={onClose}
            aria-label="Cerrar proyecto"
          >
            <X size={24} />
          </button>
        </div>

        <div className="project-modal-body">
          <div className="project-modal-images">
            {proyecto.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${proyecto.title} - Imagen ${index + 1}`}
              />
            ))}
          </div>
        <br/>
        <br/>

          <div className="project-modal-info">
            <h3>Sobre el proyecto</h3>
            <p>{proyecto.fullDescription}</p>

            {(proyecto.author ||
              proyecto.institution ||
              proyecto.company) && (
              <>
                <h3>Información del proyecto</h3>
                <div className="project-data">
                  {proyecto.author && (
                    <div className="project-data-item">
                      <strong>Autor</strong>
                      <span>{proyecto.author}</span>
                    </div>
                  )}

                  {proyecto.institution && (
                    <div className="project-data-item">
                      <strong>Institución</strong>
                      <span>{proyecto.institution}</span>
                    </div>
                  )}

                  {proyecto.company && (
                    <div className="project-data-item">
                      <strong>Empresa</strong>
                      <span>{proyecto.company}</span>
                    </div>
                  )}
                </div>
              </>
            )}

            {proyecto.advisors && proyecto.advisors.length > 0 && (
              <>
                <h3>Asesores</h3>
                <div className="project-details">
                  {proyecto.advisors.map((advisor) => (
                    <div className="project-detail" key={advisor}>
                      <Check size={17} />
                      <span>{advisor}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <h3>Características</h3>
            <div className="project-details">
              {proyecto.details.map((detail) => (
                <div className="project-detail" key={detail}>
                  <Check size={17} />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <h3>Tecnologías</h3>
            <div className="tag-list">
              {proyecto.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}