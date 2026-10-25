// app/data/education.ts

export interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  status: string
  description: string
  highlights: string[]
}

export const education: EducationItem[] = [
  {
    degree: 'Ingeniería en Desarrollo y Gestión de Software',
    institution: 'Universidad Tecnológica de Escuinapa',
    location: 'Escuinapa, Sinaloa, México',
    period: '2025 - Actualidad',
    status: 'En curso',
    description:
      'Especialidad en Desarrollo Web y Administración de Bases de Datos. Enfocada en la creación e implementación de soluciones de software, arquitectura de sistemas y gestión de bases de datos.',
    highlights: [
      'Desarrollo Web Full-Stack y Sistemas Web',
      'Diseño y administración de bases de datos relacionales',
      'Desarrollo de software multiplataforma',
      'Resolución de problemas de implementación',
    ],
  },
  {
    degree: 'T.S.U. en Tecnologías de la Información',
    institution: 'Universidad Tecnológica de Escuinapa',
    location: 'Escuinapa, Sinaloa, México',
    period: '2023 - 2025',
    status: 'Titulado',
    description:
      'Área Desarrollo de Software Multiplataforma. Formación orientada al desarrollo de aplicaciones web, maquetación responsive, lógica de programación y modelos físicos de bases de datos.',
    highlights: [
      'Estructuras de datos aplicadas (JavaScript, C++, Java)',
      'Diseño e implementación de bases de datos SQL (MySQL, PostgreSQL)',
      'Integración de parámetros de usuarios, carritos de compras y seguimiento de pedidos',
    ],
  },
  {
    degree: 'Técnico en Informática',
    institution: 'CONALEP 121',
    location: 'El Rosario, Sinaloa, México',
    period: '2020 - 2023',
    status: 'Concluido',
    description:
      'Educación media superior técnica con bases firmes en informática, computación y fundamentos de la programación.',
    highlights: [
      'Fundamentos de ciencias de la computación',
      'Manejo de herramientas informáticas y soporte',
    ],
  },
]