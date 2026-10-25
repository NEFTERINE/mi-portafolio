'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import EducationSection from './components/EducationSection'
import ProjectsSection from './components/ProjectsSection'
import DocumentationSection from './components/DocumentationSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import DocumentModal from './components/modals/DocumentModal'
import ProjectModal from './components/modals/ProjectModal'
import { Project } from './data/projects'

export default function Page() {
  const [documentoAbierto, setDocumentoAbierto] = useState<{
    title: string
    pdf: string
  } | null>(null)

  const [proyectoAbierto, setProyectoAbierto] = useState<Project | null>(null)

  return (
    <main>
      <Header />
      <Hero />
      <ProjectsSection onSelectProject={(p) => setProyectoAbierto(p)} />
      <DocumentationSection onSelectDocument={(d) => setDocumentoAbierto(d)} />
      <EducationSection />
      <AboutSection />
      <Footer />

      {documentoAbierto && (
        <DocumentModal
          documento={documentoAbierto}
          onClose={() => setDocumentoAbierto(null)}
        />
      )}

      {proyectoAbierto && (
        <ProjectModal
          proyecto={proyectoAbierto}
          onClose={() => setProyectoAbierto(null)}
        />
      )}
    </main>
  )
}