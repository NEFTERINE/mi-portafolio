'use client'

import { useState } from 'react'
import { documents, DocumentItem } from '../data/documents'

interface DocumentationSectionProps {
  onSelectDocument: (doc: { title: string; pdf: string }) => void
}

export default function DocumentationSection({
  onSelectDocument,
}: DocumentationSectionProps) {
  const [filtroDocumentos, setFiltroDocumentos] = useState('Todos')
  const [mostrarTodosDocumentos, setMostrarTodosDocumentos] = useState(false)

  const documentosFiltrados = documents.filter((document) => {
    if (filtroDocumentos === 'Todos') return true

    if (filtroDocumentos === 'Proyectos') {
      return document.tags.some((tag) =>
        ['Proyecto', 'Memoria', 'Reporte'].includes(tag)
      )
    }

    if (filtroDocumentos === 'Bases de datos') {
      return document.tags.some((tag) =>
        ['Base de datos', 'MongoDB', 'MySQL', 'SQL'].includes(tag)
      )
    }

    if (filtroDocumentos === 'Desarrollo') {
      return document.tags.some((tag) =>
        ['JavaScript', 'Java', 'PHP', 'Programación'].includes(tag)
      )
    }

    if (filtroDocumentos === 'Diseño') {
      return document.tags.some((tag) =>
        ['UX/UI', 'Diseño', 'Figma'].includes(tag)
      )
    }

    return true
  })

  return (
    <section className="section projects-section" id="documentacion">
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span />
            Material de trabajo
          </div>
          <h2>Documentación</h2>
        </div>

        <p>
          Una selección de documentos relacionados con los proyectos que he
          desarrollado durante mi formación.
        </p>
      </div>

      <div className="project-filters">
        {['Todos', 'Proyectos', 'Bases de datos', 'Desarrollo', 'Diseño'].map(
          (filtro) => (
            <button
              key={filtro}
              className={filtroDocumentos === filtro ? 'active' : ''}
              onClick={() => {
                setFiltroDocumentos(filtro)
                setMostrarTodosDocumentos(false)
              }}
            >
              {filtro}
            </button>
          )
        )}
      </div>

      <div className="project-grid">
        {documentosFiltrados
          .slice(0, mostrarTodosDocumentos ? undefined : 3)
          .map((document, index) => (
            <article
              className="project-card"
              key={document.title}
              onClick={() =>
                onSelectDocument({
                  title: document.title,
                  pdf: document.pdf,
                })
              }
              style={{ cursor: 'pointer' }}
            >
              <div className="card-meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{document.type}</span>
              </div>

              <div className="project-image document-preview">
                <iframe
                  src={`${document.pdf}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                  title={`Vista previa de ${document.title}`}
                  className="document-pdf-preview"
                />
                <div className="document-preview-cover" />
              </div>

              <div className="project-info">
                <h3>{document.title}</h3>
                <p>{document.description}</p>
                <div className="tag-list">
                  {document.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
      </div>

      {documentosFiltrados.length > 4 && (
        <div className="projects-more">
          <button
            onClick={() =>
              setMostrarTodosDocumentos(!mostrarTodosDocumentos)
            }
          >
            {mostrarTodosDocumentos
              ? 'Mostrar menos'
              : 'Ver toda la documentación'}
          </button>
        </div>
      )}
    </section>
  )
}