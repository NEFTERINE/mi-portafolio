import {
  GraduationCap,
  School,
  BookOpen,
  CalendarDays,
  MapPin,
  Check,
  Users,
  HeartHandshake,
  RefreshCw,
  Lightbulb,
  Target,
  Puzzle,
} from 'lucide-react'

export default function EducationSection() {
  return (
    <section className="section education-section" id="educacion">

      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span />
            Mi preparación
          </div>

          <h2>Educación</h2>
        </div>

        <p>
          Mi formación académica en el área de tecnologías de la información,
          desarrollo de software y bases de datos.
        </p>
      </div>

      {/* FORMACIÓN ACADÉMICA */}
      <div className="education-grid">

        {/* INGENIERÍA */}
        <article className="education-card">
          <div className="education-header">

            <div className="education-badge">
              <GraduationCap size={25} />
            </div>

            <div className="education-title-group">

              <div className="education-meta-top">
                <span className="status-pill">En curso</span>

                <span className="period-tag">
                  <CalendarDays size={15} />
                  2025 – Actualidad
                </span>
              </div>

              <h3>
                Ingeniería en Desarrollo y Gestión de Software
              </h3>

              <div className="education-location">
                <strong>Universidad Tecnológica de Escuinapa</strong>

                <span className="location-span">
                  <MapPin size={14} />
                  Escuinapa, Sinaloa
                </span>
              </div>

            </div>
          </div>

          <p className="education-description">
            Formación enfocada en el desarrollo y gestión de soluciones de
            software, tecnologías web y administración de bases de datos.
          </p>

          <div className="education-highlights">
            <h4>
              <Check size={16} />
              Áreas principales
            </h4>

            <ul>
              <li>
                <Check size={15} />
                Desarrollo de software
              </li>

              <li>
                <Check size={15} />
                Desarrollo web
              </li>

              <li>
                <Check size={15} />
                Bases de datos
              </li>
            </ul>
          </div>
        </article>

        {/* TSU */}
        <article className="education-card">
          <div className="education-header">

            <div className="education-badge">
              <BookOpen size={25} />
            </div>

            <div className="education-title-group">

              <div className="education-meta-top">
                <span className="period-tag">
                  <CalendarDays size={15} />
                  2023 – 2025
                </span>
              </div>

              <h3>
                Técnico Superior Universitario
              </h3>

              <div className="education-location">
                <strong>
                  Tecnologías de la Información
                </strong>

                <span>
                  Área Desarrollo de Software Multiplataforma
                </span>
              </div>

            </div>
          </div>

          <p className="education-description">
            Formación orientada al desarrollo de aplicaciones, programación,
            bases de datos y creación de sistemas multiplataforma.
          </p>

          <div className="education-highlights">
            <h4>
              <Check size={16} />
              Áreas principales
            </h4>

            <ul>
              <li>
                <Check size={15} />
                Programación
              </li>

              <li>
                <Check size={15} />
                Aplicaciones web
              </li>

              <li>
                <Check size={15} />
                Bases de datos
              </li>
            </ul>
          </div>
        </article>

        {/* CONALEP */}
        <article className="education-card education-card-wide">
          <div className="education-header">

            <div className="education-badge">
              <School size={25} />
            </div>

            <div className="education-title-group">

              <div className="education-meta-top">
                <span className="period-tag">
                  <CalendarDays size={15} />
                  2020 – 2023
                </span>
              </div>

              <h3>
                Profesional Técnico Bachiller en Informática
              </h3>

              <div className="education-location">
                <strong>CONALEP 121</strong>

                <span className="location-span">
                  <MapPin size={14} />
                  El Rosario, Sinaloa
                </span>
              </div>

            </div>
          </div>

          <p className="education-description">
            Formación técnica en informática que estableció las bases para
            continuar mi preparación en desarrollo de software y tecnologías
            de la información.
          </p>

          <div className="education-highlights">
            <h4>
              <Check size={16} />
              Áreas principales
            </h4>

            <ul>
              <li>
                <Check size={15} />
                Informática
              </li>

              <li>
                <Check size={15} />
                Programación
              </li>

              <li>
                <Check size={15} />
                Tecnologías de la información
              </li>
            </ul>
          </div>
        </article>

      </div>


    </section>
  )
}