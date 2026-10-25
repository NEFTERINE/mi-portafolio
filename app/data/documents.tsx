export interface DocumentItem {
  title: string
  description: string
  type: string
  pdf: string
  tags: string[]
}

export const documents: DocumentItem[] = [
  {
    title: 'Reporte de Cierre de Proyecto: Sistema Web DeAlva Spa',
    description:
      'Informe ejecutivo del desarrollo de un sistema web integral de punto de venta y control clínico, que incluye arquitectura de software, manuales, gestión de requerimientos y carta de aceptación.',
    type: 'Proyecto',
    pdf: '/document/CIERRE_DE_PROYECTO_DEALVA_SPA.pdf',
    tags: ['ReactJS', 'Next.js', 'CSS', 'MySQL'],
  },

  {
    title: 'Gestor de Incidencias Móvil (Propuesta Grupo Coppel)',
    description:
      'Aplicación móvil orientada a optimizar la gestión, asignación y seguimiento en tiempo real de reportes de incidencias para equipos de ingeniería.',
    type: 'Proyecto',
    pdf: '/document/Presentación Propuesta de proyecto Minimalista Verde.pdf',
    tags: ['React Native', 'MongoDB', 'JavaScript', 'Cloud Databases'],
  },

  {
    title:
      'Propuesta y Diseño de Arquitectura para el Sistema del Colegio "El Molino"',
    description:
      'Documento de diseño de software para un sistema escolar de asistencia y tareas, abarcando diagramas UML, casos de uso, clases, actividades, maquetación de interfaces y presupuesto.',
    type: 'Diseño',
    pdf: '/document/DOCUMENTO_MAESTRA_ELY_EQUIPO_DESHIDRATADO.pdf',
    tags: [
      'PHP 8.4',
      'HTML5',
      'JavaScript',
      'CSS3',
      'Tailwind',
      'Bootstrap',
      'MySQL',
    ],
  },

  {
    title:
      'Propuesta de Data Warehouse para la Compañía de Jugos Naturales y Aguas de Sabor',
    description:
      'Propuesta de un almacén de datos centralizado para integrar información de ventas, producción, CRM, ERP, métricas web y redes sociales mediante procesos ETL.',
    type: 'Data Warehouse',
    pdf: '/document/PROPUESTA DE DATA WAREHOUSE.pdf',
    tags: ['Data Warehouse', 'Base de datos', 'SQL', 'ETL'],
  },

  {
    title:
      'Plan de Copias de Seguridad y Restauración de Datos: Control y Gestión de Alumnos y Calificaciones',
    description:
      'Gestión de calidad de datos y copias de seguridad para una base de datos universitaria, enfocada en el control de alumnos, grupos, planes de estudio y calificaciones. Incluye validación e integridad de datos, transacciones ACID y un plan de respaldo y restauración.',
    type: 'Base de datos',
    pdf: '/document/GESTIÓN DE CALIDAD DE LOS DATOS.pdf',
    tags: ['Base de datos', 'Calidad de datos', 'ACID', 'Backup', 'Restauración'],
  },

  {
    title:
      'Diagrama Entidad-Relación de la Base de Datos de un Sistema ERP',
    description:
      'Modelo físico y esquema relacional de base de datos para un sistema ERP.',
    type: 'Base de datos',
    pdf: '/document/BD sistema_erp.pdf',
    tags: ['Base de datos', 'Modelado', 'SQL', 'ERP'],
  },

  {
    title:
      'Diagrama Entidad-Relación de la Base de Datos para Gestión de Biblioteca',
    description:
      'Modelo físico y esquema relacional para la administración de libros, préstamos, autores, reservas, multas y usuarios.',
    type: 'Base de datos',
    pdf: '/document/biblioteca_bd.pdf',
    tags: ['Base de datos', 'Modelado', 'SQL'],
  },

  {
    title:
      'Documentación de Creación e Inserción de Datos en MongoDB (BD Universidad)',
    description:
      'Reporte académico de administración de bases de datos NoSQL con la creación de colecciones e inserción de documentos para estudiantes, cursos, profesores, inscripciones y evaluaciones.',
    type: 'Base de datos',
    pdf: '/document/BD UNIVERSIDAD - MONGO.pdf',
    tags: ['MongoDB', 'NoSQL', 'Base de datos', 'MongoDB Shell'],
  },

  {
    title:
      'Documentación de Creación e Inserción de Datos en MongoDB (Créditos)',
    description:
      'Reporte académico de administración de bases de datos NoSQL con la creación de colecciones e inserción de documentos para clientes y solicitudes de crédito.',
    type: 'Base de datos',
    pdf: '/document/Base de Datos - créditos.pdf',
    tags: ['MongoDB', 'NoSQL', 'Base de datos', 'MongoDB Shell'],
  },

  {
    title:
      'Documentación de Creación e Inserción de Datos en MySQL (Agricultores)',
    description:
      'Reporte académico de administración de bases de datos SQL que contiene los comandos de creación e inserción de datos.',
    type: 'Base de datos',
    pdf: '/document/BDATOSAGR.pdf',
    tags: ['MySQL', 'SQL', 'Base de datos'],
  },

  {
    title:
      'Prototipo de Experiencia de Usuario (UX) del Sistema "Restaurante El Mesón de Don Nacho"',
    description:
      'Documentación visual de maquetación y flujos de usuario para una plataforma web de restaurante, incluyendo menú, administración, usuarios y proceso de pedidos.',
    type: 'Diseño',
    pdf: '/document/semana 10- experiencia de usuario.pdf',
    tags: ['HTML5', 'CSS', 'JavaScript', 'PHP', 'UX/UI'],
  },

  {
    title: 'Prototipo e Interfaz del Sistema "Biblioteca del Búho"',
    description:
      'Interfaces del módulo de seguridad, autenticación con Google, dashboard, gestión de usuarios y roles, préstamos y control de multas.',
    type: 'Diseño',
    pdf: '/document/semana 14-seguridad_p3.pdf',
    tags: ['UI', 'Seguridad', 'Autenticación', 'Software'],
  },

  {
    title: 'Definición de Proyecto: Juego Web de Cocina y Repostería',
    description:
      'Documento de especificación de requerimientos funcionales y no funcionales, roles de usuario y cronograma para el desarrollo de un juego web de repostería.',
    type: 'Proyecto',
    pdf: '/document/proyecto_juego_reposteria_web.pdf',
    tags: ['Web', 'UI', 'Requerimientos', 'Proyecto'],
  },

  {
    title:
      'Solucionario de Ejercicios de Estructuras de Datos utilizando Java',
    description:
      'Compendio de programas en Java para resolver problemas de lógica algorítmica, ordenamiento y operaciones con arreglos.',
    type: 'Ejercicio',
    pdf: '/document/ARREGLOS_java (1).pdf',
    tags: ['Arreglos', 'Programación', 'Java'],
  },

  {
    title:
      'Problemario de Ejercicios Prácticos sobre Arreglos en JavaScript',
    description:
      'Colección de 50 ejercicios resueltos sobre manipulación, ordenamiento, filtrado y cálculo de arreglos utilizando JavaScript.',
    type: 'Ejercicio',
    pdf: '/document/ARREGLOS (1).pdf',
    tags: ['Arreglos', 'Programación', 'JavaScript', 'HTML5'],
  },
]