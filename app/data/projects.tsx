export interface Project {
  title: string
  description: string
  fullDescription: string
  authors?: string[]
  author?: string
  institution?: string
  course?: string
  advisor?: string
  advisors?: string[]
  company?: string
  architecture?: string
  methodology?: string
  type?: string
  pdf?: string
  tags: string[]
  year: string
  cover: string
  images: string[]
  details: string[]
}

export const projects: Project[] = [
  {
    title: 'DeAlva Spa',
    description:
      'Sistema web de gestión integral y expediente clínico para spa, con punto de venta, inventario y control de citas.',
    fullDescription:
      'Sistema de gestión integral desarrollado para DeAlva Spa por Evoliss México. Centraliza la administración de citas, historial clínico de clientes, comisiones de empleados, inventario con alertas de caducidad y punto de venta con generación de recibos.',
    company: 'Evoliss México / DeAlva Spa',
    tags: ['React', 'Next.js', 'CSS', 'MySQL'],
    year: '2026',
    cover: '/spa/index.png',
    images: [
      '/spa/login.png',
      '/spa/desboard.png',
      '/spa/cita.png',
      '/spa/clientes.png',
      '/spa/servicios.png',
      '/spa/empleados.png',
      '/spa/inventario.png',
      '/spa/punto de venta.png',
      '/spa/reportes.png',
      '/spa/usuarios.png',
      '/spa/config.png',
      '/spa/manual.png',
    ],
    details: [
      'Gestión de citas y agenda',
      'Expediente y control clínico',
      'Punto de venta y caja chica',
      'Control de inventario y insumos',
    ],
  },

  {
    title: 'Sistema Integral de Gestión de Campaña Electoral (SIGCE)',
    description:
      'Plataforma web centralizada para organizar y administrar campañas políticas, optimizando el seguimiento de estructuras de promoción y la toma de decisiones.',
    fullDescription:
      'Plataforma tecnológica centralizada desarrollada para la empresa ITNAY en Tepic, Nayarit. El sistema resuelve la dispersión de datos y la falta de coordinación mediante módulos para la gestión territorial de líderes y coordinadores, monitoreo de promotores de voto y promovidos, agenda de eventos mediante un calendario interactivo y control de acceso basado en roles (Administrador, Coordinador y Promotor).',
    author: 'Monserrat Carolina Guzmán Maldonado',
    institution: 'Universidad Tecnológica de Escuinapa (Escuinapa, Sinaloa)',
    company: 'ITNAY (Tepic, Nayarit)',
    advisors: [
      'MGTI Jorge Luis De La Paz Ramos (Asesor Académico)',
      'Jesús Manuel Ramírez Meza (Asesor Industrial)',
    ],
    methodology: 'Scrum (6 Sprints de desarrollo)',
    tags: [
      'PHP',
      'MySQL',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Chart.js',
      'FullCalendar',
    ],
    year: '2025',
    cover: '/sigce/index.png',
    images: [
      '/sigce/index.png',
      '/sigce/image.png',
    ],
    details: [
      'Estructura de asignación territorial de líderes y coordinadores',
      'Registro de promotores y seguimiento gráfico de promovidos (Chart.js)',
      'Calendario interactivo para logística y agenda de eventos (FullCalendar)',
      'Control de acceso y restricciones de seguridad según el rol de usuario',
      'Desarrollo bajo metodología ágil Scrum (Mayo - Agosto 2025)',
    ],
  },

  {
    title: 'Sistema de Gestión de Asistencias y Tareas (Colegio El Molino)',
    description:
      'Plataforma web para la gestión académica escolar, control digital de asistencias, registro de cumplimiento de tareas y paneles estadísticos.',
    fullDescription:
      'Aplicación web concebida para el Colegio "El Molino" orientada a la administración escolar. Elimina el control manual al centralizar el registro de alumnos, la toma digital de asistencia diaria y el seguimiento del cumplimiento de tareas. Incluye paneles estadísticos (dashboards) diferenciados para la toma de decisiones directiva y la gestión docente por grupos.',
    authors: [
      'Scarlet Joselyne Félix Gómez',
      'Monserrat Carolina Guzmán Maldonado',
      'Nairda Tonantzin Morales Del Real',
      'Gael Enrique Nuñez Piña',
    ],
    institution: 'Universidad Tecnológica de Escuinapa',
    course: 'Arquitecturas de Software',
    advisor: 'Elizabeth Guadalupe Carrillo Casillas',
    architecture:
      'Arquitectura en N Capas (Presentación, Lógica de Negocio y Acceso a Datos)',
    tags: [
      'PHP 8.4',
      'MySQL',
      'JavaScript',
      'HTML5',
      'Tailwind CSS V4',
      'Bootstrap 5',
    ],
    year: '2025',
    cover: '/molino/login.png',
    images: [
      '/molino/login.png',
      '/molino/desboard.png',
      '/molino/dashboardN1.png',
      '/molino/asistencia.png',
      '/molino/usuarios.png',
    ],
    details: [
      'Toma de asistencia digital por grupo y fecha',
      'Registro de cumplimiento de tareas diarias',
      'Control de accesos y roles (Directivos y Maestros)',
      'Dashboard estadístico de asistencia y rendimiento escolar',
      'Diseño de arquitectura de software en N Capas',
    ],
  },

  {
    title: 'Gestor de Incidencias Móvil (Propuesta Grupo Coppel)',
    description:
      'Aplicación móvil orientada a optimizar la gestión, asignación y seguimiento en tiempo real de reportes de incidencias para equipos de ingeniería.',
    fullDescription:
      'Sistema móvil concebido como solución integral para Grupo Coppel con el objetivo de agilizar la atención de reportes técnicos. La plataforma permite a los usuarios registrar incidencias desde sus dispositivos móviles, mientras que los gerentes pueden asignar solicitudes y los ingenieros dar seguimiento a sus tareas asignadas en tiempo real, reduciendo tiempos de respuesta y mejorando la comunicación interna.',
    author: 'Monserrat Carolina Guzmán Maldonado',
    course: 'Bases de Datos para Cómputo en la Nube',
    company: 'Grupo Coppel',
    tags: [
      'React Native',
      'MongoDB',
      'JavaScript',
      'Cloud Databases',
    ],
    year: '2025',
    cover: '/coppel/login.png',
    images: [
      '/coppel/login.png',
      '/coppel/usuario.png',
      '/coppel/gerente.png',
      '/coppel/ingeniero.png',
    ],
    details: [
      'Registro y levantamiento móvil de solicitudes e incidencias',
      'Panel de Gerente para asignación directa de ingenieros a reportes',
      'Panel de Ingeniero para seguimiento de tareas asignadas por prioridad',
      'Manejo de estados de solicitud (Pendiente, Sin asignar, Asignada)',
      'Arquitectura en la nube respaldada con base de datos MongoDB',
    ],
  },

  {
    title: 'Juego Web Interactivo de Cocina y Repostería',
    description:
      'Aplicación web casual e interactiva para simular la preparación de postres mediante recolección de ingredientes, tienda virtual, hornear recetas y desbloqueo de logros.',
    fullDescription:
      'Aplicación web interactiva desarrollada como un juego de cocina y repostería enfocado en la experiencia del usuario a través de animaciones y transiciones fluidas. Permite a los jugadores juntar o comprar ingredientes en la tienda con monedas del juego, combinar elementos en la cocina para hornear postres y desbloquear medallas/logros. Incluye un panel administrativo para la gestión de recetas e ingredientes, además de control de roles (Jugador y Administrador).',
    institution: 'Universidad Tecnológica de Escuinapa',
    tags: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'UI/UX',
      'Animaciones Web',
    ],
    year: '2025',
    pdf: '/document/proyecto_juego_reposteria_web.pdf',
    cover: '/gamer/index.png',
    images: [
      '/gamer/index.png',
      '/gamer/login.png',
      '/gamer/medallas.png',
      '/gamer/orno.png',
      '/gamer/recetas.png',
      '/gamer/tienda.png',
    ],
    details: [
      'Módulo de Cocina: Selección y combinación de ingredientes para hornear recetas',
      'Tienda virtual e inventario con economía de monedas del juego',
      'Sistema de medallas y registro de logros/postres creados',
      'Control de accesos y roles (Jugador y Administrador)',
      'Animaciones visuales y transiciones de interfaz en menos de 2 segundos',
    ],
  },

  {
    title: 'Prototipo UX - Restaurante El Mesón de Don Nacho',
    description:
      'Diseño de interfaz y experiencia de usuario (UX) para plataforma web de restaurante con catálogo interactivo, pedidos y panel administrativo.',
    fullDescription:
      'Documentación visual de maquetación y flujos de usuario (UX) desarrollada para la plataforma web del restaurante "El Mesón de Don Nacho". El prototipo contempla un catálogo de menú organizado por categorías, modales informativos de dirección y horarios, inicio de sesión restringido para administradores, panel para gestión de platillos y usuarios, así como el flujo completo de checkout para pedidos a domicilio o consumo en el local.',
    type: 'Diseño',
    tags: [
      'UX/UI',
      'HTML5',
      'CSS3',
      'JavaScript',
      'PHP',
    ],
    year: '2025',
    pdf: '/document/semana 10- experiencia de usuario.pdf',
    cover: '/don/index.png',
    images: [
      '/don/index.png',
      '/don/admin.png',
      '/don/carrito.png',
    ],
    details: [
      'Catálogo de menú dinámico por categorías (Desayuno, Bebida, Comidas)',
      'Modales informativos para ubicación, horarios de atención y servicios',
      'Flujo de autenticación seguro para perfil de administradores',
      'Panel de administración para alta, edición y baja de platillos/categorías',
      'Proceso de pedido y checkout (entrega a domicilio con formulario de dirección o consumo en local)',
    ],
  },

  {
    title: 'Sitio Web de Estructuras de Datos Aplicadas (EDA)',
    description:
      'Sitio web interactivo con temática navideña desarrollado para la visualización y prueba de ejercicios prácticos de estructuras de datos.',
    fullDescription:
      'Plataforma web con un diseño interactivo y minimalista enfocado en la enseñanza y demostración práctica de estructuras de datos. Incluye ejercicios ejecutables en JavaScript para conceptos básicos, estructuras condicionales (if/else), bucles de repetición (for, while, do while), arreglos, listas dinámicas, pilas y colas. Además, cuenta con un repositorio de documentación y guías en formato PDF con resoluciones equivalentes en Java y C++.',
    authors: [
      'Jesús Andrés Cruz Ramos',
      'Monserrat Carolina Guzmán Maldonado',
      'Nairda Tonantzin Morales Del Real',
    ],
    institution: 'Universidad Tecnológica de Escuinapa',
    advisor: 'Jorge Luis De La Paz Ramos',
    tags: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'Java',
      'C++',
    ],
    year: '2024',
    cover: '/eda/index.png',
    images: [
      '/eda/index.png',
      '/eda/desboard.png',
      '/eda/ejercicios.png',
    ],
    details: [
      'Visualizador interactivo de algoritmos en JavaScript',
      'Estructuras de control y ciclos de repetición',
      'Implementación de Listas, Pilas y Colas',
      'Documentación comparativa y descargables para C++ y Java',
      'Diseño web temático navideño responsivo',
    ],
  },
]