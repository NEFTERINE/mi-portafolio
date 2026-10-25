'use client'

import { X } from 'lucide-react'

interface DocumentModalProps {
  documento: {
    title: string
    pdf: string
  }
  onClose: () => void
}

export default function DocumentModal({
  documento,
  onClose,
}: DocumentModalProps) {
  return (
    <div className="pdf-modal" onClick={onClose}>
      <div
        className="pdf-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pdf-modal-header">
          <h2>{documento.title}</h2>

          <button
            className="pdf-close"
            onClick={onClose}
            aria-label="Cerrar documento"
          >
            <X size={24} />
          </button>
        </div>

        <div className="pdf-viewer">
          <iframe
            src={documento.pdf}
            title={`Documentación de ${documento.title}`}
          />
        </div>
      </div>
    </div>
  )
}