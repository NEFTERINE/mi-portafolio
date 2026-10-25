import {
  Code2,
  Cpu,
  HeartHandshake,
  Wrench,
} from 'lucide-react'

const competencias = [
  { nombre: 'Desarrollo web', nivel: 85 },
  { nombre: 'Bases de datos', nivel: 82 },
  { nombre: 'Diseño de interfaces', nivel: 75 },
  { nombre: 'Desarrollo de aplicaciones', nivel: 30 },
]

const tecnologias = [
  { nombre: 'HTML / CSS', nivel: 90 },
  { nombre: 'JavaScript', nivel: 82 },
  { nombre: 'PHP', nivel: 80 },
  { nombre: 'MySQL', nivel: 85 },
  { nombre: 'React / Next.js', nivel: 76 },
  { nombre: 'PostgreSQL / MongoDB', nivel: 72 },
]

const habilidadesBlandas = [
  'Trabajo en equipo',
  'Responsabilidad',
  'Adaptabilidad',
  'Aprendizaje continuo',
  'Solidaridad',
  'Organización',
]

const habilidadesDuras = [
  'Desarrollo Frontend',
  'Desarrollo Backend',
  'Diseño de bases de datos',
  'Consultas SQL',
  'Modelado de bases de datos',
  'Diseño UX/UI',
  'Análisis de requerimientos',
  'Programación orientada a objetos',
]

export default function AboutSection() {
  return (
    <section className="about-section" id="sobre-mi">

      <div className="skills">

        <div className="eyebrow">
          <span />
          Perfil profesional
        </div>

        <h3>Competencias & Habilidades</h3>

        <p className="skills-intro">
          Un resumen de mis conocimientos técnicos, tecnologías y habilidades
          desarrolladas durante mi formación y proyectos.
        </p>

        <div className="skills-overview">

          {/* COMPETENCIAS */}
          <div className="skills-block">

            <div className="skills-block-title">
              <Code2 size={20} />

              <div>
                <span>01</span>
                <h4>Competencias</h4>
              </div>
            </div>

            <div className="percentage-list">
              {competencias.map((item) => (
                <div className="percentage-item" key={item.nombre}>

                  <div className="percentage-info">
                    <span>{item.nombre}</span>
                    <strong>{item.nivel}%</strong>
                  </div>

                  <div className="percentage-track">
                    <div
                      className="percentage-bar"
                      style={{ width: `${item.nivel}%` }}
                    />
                  </div>

                </div>
              ))}
            </div>

          </div>


          {/* TECNOLOGÍAS */}
          <div className="skills-block">

            <div className="skills-block-title">
              <Cpu size={20} />

              <div>
                <span>02</span>
                <h4>Tecnologías</h4>
              </div>
            </div>

            <div className="percentage-list">
              {tecnologias.map((item) => (
                <div className="percentage-item" key={item.nombre}>

                  <div className="percentage-info">
                    <span>{item.nombre}</span>
                    <strong>{item.nivel}%</strong>
                  </div>

                  <div className="percentage-track">
                    <div
                      className="percentage-bar"
                      style={{ width: `${item.nivel}%` }}
                    />
                  </div>

                </div>
              ))}
            </div>

          </div>


          {/* HABILIDADES BLANDAS */}
          <div className="skills-block">

            <div className="skills-block-title">
              <HeartHandshake size={20} />

              <div>
                <span>03</span>
                <h4>Habilidades blandas</h4>
              </div>
            </div>

            <ul className="simple-skill-list">
              {habilidadesBlandas.map((habilidad) => (
                <li key={habilidad}>
                  <span />
                  {habilidad}
                </li>
              ))}
            </ul>

          </div>


          {/* HABILIDADES DURAS */}
          <div className="skills-block">

            <div className="skills-block-title">
              <Wrench size={20} />

              <div>
                <span>04</span>
                <h4>Habilidades duras</h4>
              </div>
            </div>

            <ul className="simple-skill-list">
              {habilidadesDuras.map((habilidad) => (
                <li key={habilidad}>
                  <span />
                  {habilidad}
                </li>
              ))}
            </ul>

          </div>

        </div>

      </div>

    </section>
  )
}