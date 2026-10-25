import { ArrowUpRight, Download, FileText } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero-interactive" id="inicio">

      <div className="hero-stage">

        {/* PERFIL */}
        <div className="hero-profile">

          <div className="eyebrow">
            <span />
            Portafolio
          </div>

          <h2>
            Hola, soy
            <br />
            <em>Monserrat.</em>
          </h2>

          <p>
            Estudiante de Desarrollo y Gestión de Software enfocada en
            crear sistemas web funcionales, bases de datos e interfaces
            claras y fáciles de utilizar.
          </p>

          <div className="hero-links">

            <a className="hero-link primary-link" href="#proyectos">
              Proyectos
              <ArrowUpRight size={16} />
            </a>

            <a
              className="hero-link"
              href="/document/CV_Guzman Maldonado Monserrat Carolina.pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
              <FileText size={16} />
            </a>

            <a
              className="hero-link"
              href="/document/CV.pdf"
              download="CV_Guzman Maldonado Monserrat Carolina.pdf"
            >
              Descargar CV
              <Download size={16} />
            </a>

          </div>

        </div>


        {/* TERMINAL */}
        <div className="hero-terminal">

          <div className="terminal-top">

            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>

            <small>perfil.ts</small>

          </div>

          <div className="terminal-content">

            <div className="terminal-eyebrow">
              <span />
              Sobre mí
            </div>

            <h1>
              Desarrollo soluciones
              <br />
              <em>claras y funcionales.</em>
            </h1>

            <p>
              Me enfoco en el desarrollo de sistemas web, diseño de bases de
              datos y creación de interfaces sencillas para el usuario.
            </p>

            <pre>
              <code>
                <span className="muted">const</span>{' '}
                <span className="key">monserrat</span> = {'{'}
                {'\n'}

                {'  '}ubicación:{' '}
                <span className="string">
                  &apos;El Rosario, Sinaloa&apos;
                </span>,
                {'\n'}

                {'  '}formación:{' '}
                <span className="string">
                  &apos;Ing. en Desarrollo y Gestión de Software&apos;
                </span>,
                {'\n'}

                {'  '}especialidad:{' '}
                <span className="string">
                  &apos;Desarrollo Web y Bases de Datos&apos;
                </span>,
                {'\n'}

                {'  '}idiomas: [
                <span className="string">
                  &apos;Español (Nativo)&apos;
                </span>,{' '}
                <span className="string">
                  &apos;Inglés (Básico)&apos;
                </span>
                ],
                {'\n'}

                {'  '}disponible:{' '}
                <span className="boolean">true</span>
                {'\n'}

                {'}'}
              </code>
            </pre>

          </div>

          <div className="terminal-status">
            <span />
            Disponible para proyectos académicos y prácticas
          </div>

        </div>

      </div>

    </section>
  )
}