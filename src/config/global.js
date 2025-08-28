export default {
  global: {
    Name: 'Sistemas de control y monitoreo en transporte',
    Description:
      'El programa sistema de control y monitoreo en transporte, se alinea con la tecnología de vanguardia como <I>GPS</I>, busca la visibilidad integral siendo parte del segmento de la cadena de transporte. Estas herramientas permiten una recopilación y análisis de datos críticos sobre el rendimiento operativo, el comportamiento de los conductores, el estado funcional de los vehículos y las condiciones específicas de la carga. Esta información es indispensable para la toma de decisiones que facilitan una reducción de costos y tiempos de tránsito,  incrementando la eficiencia en la administración de flotas y la planificación del mantenimiento predictivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Plan de la operación del transporte terrestre',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Rutas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Recorridos autorizados',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Frecuencias y horarios',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Registro de la operación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procedimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Proceso continuo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Proceso sistemático',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Informe de seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Seguimiento periódico',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Resultados de la ejecución',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Calidad del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Criterios de evaluación',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Procedimiento',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Plan de la operación del transporte',
      referencia:
        'Secretaría Distrital de Movilidad. (2005). <i>Manual de planeación y diseño para la administración del tránsito y el transporte.</i> Secretaría Distrital de Movilidad.',
      tipo: 'Manual PDF',
      link:
        'https://www.movilidadbogota.gov.co/web/sites/default/files/tomo_i.pdf',
    },
    {
      tema: 'Calidad del servicio',
      referencia:
        'Ministerio de Transporte. (2023). <i>Guía de buenas prácticas para la calidad en el transporte terrestre de carga.</i>',
      tipo: 'Manual PDF',
      link: 'http://www.ejemplo.gob.co/docs/guia_calidad_transporte.pdf',
    },
    {
      tema: 'Técnica de monitoreo',
      referencia:
        'SafeLink Group. (2024, 15 de mayo). <i>¿En qué consiste el monitoreo del transporte de carga? [Video].</i> YouTube',
      tipo: 'Video',
      link: 'http://www.youtube.com/watch?v=2fRlvzsXpsg',
    },
  ],
  glosario: [
    {
      termino: '<em>API (Application Programming Interface)</em>',
      significado:
        'Un conjunto de reglas y protocolos que permiten que diferentes aplicaciones de <em>software</em> se comuniquen e intercambien datos entre sí, facilitando la integración de sistemas.',
    },
    {
      termino: '<em>ERP (Enterprise Resource Planning)</em>',
      significado:
        'Un sistema de <em>software</em> integral que gestiona y unifica los procesos clave de una empresa, como finanzas, recursos humanos, producción y, crucialmente, la cadena de suministro, integrándose con sistemas de transporte.',
    },
    {
      termino: '<em>FMS (Fleet Management System)</em>',
      significado:
        'Plataforma de <em>software</em> diseñada para gestionar de forma integral todos los aspectos de una flota vehicular, desde el seguimiento y la asignación de rutas hasta el mantenimiento y el rendimiento de los conductores.',
    },
    {
      termino: '<em>GNSS (Global Navigation Satellite System)</em>',
      significado:
        'Término general que abarca todas las constelaciones de satélites que proporcionan servicios de posicionamiento y navegación, incluyendo <em>GPS, GLONASS,</em> Galileo y BeiDou.',
    },
    {
      termino: '<em>GPS (Global Positioning System)</em>',
      significado:
        'Sistema de navegación por satélite que proporciona la ubicación, velocidad y hora en cualquier lugar de la Tierra. Es la base para la geolocalización de activos en el transporte.',
    },
    {
      termino: '<em>KPI (Key Performance Indicator)</em>',
      significado:
        'indicador clave de desempeño. Es una métrica cuantificable que se utiliza para evaluar la eficiencia y la efectividad con la que se están logrando los objetivos preestablecidos en las operaciones de transporte.',
    },
    {
      termino: 'Mantenimiento Predictivo',
      significado:
        'Estrategia de mantenimiento que utiliza datos de sensores y telemetría para prever fallos en componentes del vehículo y programar intervenciones antes de que ocurran averías, optimizando los tiempos de inactividad.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'El proceso continuo de observación y registro de datos sobre el estado, ubicación y rendimiento de vehículos, cargas o personal en tiempo real, con el fin de tener una visión completa de la operación.',
    },
    {
      termino: 'Sensores',
      significado:
        'Dispositivos que detectan y miden magnitudes físicas (temperatura, humedad, impacto, presión, nivel de combustible) o químicas del entorno o de un activo, transformándolas en datos digitales para el monitoreo.',
    },
    {
      termino: 'Telemetría',
      significado:
        'La tecnología que permite la recopilación remota y la transmisión de datos operacionales de un activo (como un vehículo) a un sistema central para su análisis y gestión.',
    },
    {
      termino: '<em>TIC (Tecnologías de la Información y Comunicación)</em>',
      significado:
        'Conjunto de herramientas y recursos tecnológicos que permiten crear, almacenar, procesar, gestionar, intercambiar y transmitir información, fundamentales para la digitalización del transporte.',
    },
    {
      termino: '<em>TMS (Transportation Management System)</em>',
      significado:
        '<em>software</em> que optimiza y gestiona los procesos de planificación, ejecución y auditoría de los movimientos de mercancías en una cadena de suministro, incluyendo la optimización de rutas y la selección de transportistas.',
    },
    {
      termino: 'Torre de Control (Logística)',
      significado:
        'Un centro de operaciones centralizado que proporciona visibilidad holística y en tiempo real de toda la cadena de suministro, permitiendo la gestión proactiva de eventos, la toma de decisiones colaborativa y la gestión de excepciones.',
    },
    {
      termino: '<em>Tracking</em> (Seguimiento)',
      significado:
        'La función principal de determinar y visualizar la ubicación geográfica precisa de un activo móvil en un mapa en un momento dado, o a lo largo de un recorrido. Es una parte fundamental del monitoreo.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'La capacidad de rastrear y seguir el recorrido, ubicación e historial de un producto o carga a lo largo de toda la cadena de suministro, desde su origen hasta su destino final, con el apoyo de sistemas de monitoreo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia Nacional de Infraestructura (ANI). (2018). <i>Plan Nacional de Logística. Bogotá, Colombia</i>: Autor.',
      link: '',
    },
    {
      referencia:
        'Consejo Colombiano de Seguridad. (2021). <i>Guía del sistema de seguridad, salud en el trabajo y ambiente para contratistas del sector transporte RUC®.</i> Autor.',
      link: '',
    },
    {
      referencia:
        'Coyle, J. J., Langley, C. J., Gibson, B. J., Novack, R. A., & Bardi, E. J. (2017). <i>Supply Chain Management: A Logistics Perspective (10ma ed.).</i> Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Chopra, S., & Meindl, P. (2019). <i>Supply Chain Management: Strategy, Planning, and Operation (7ma ed.).</i> Pearson.',
      link: '',
    },
    {
      referencia:
        'Departamento Nacional de Planeación (DNP). (2022). <i>Documento CONPES 4100: Política Nacional Logística.</i> Bogotá, Colombia: Autor.',
      link: '',
    },
    {
      referencia:
        'Espinel Blanco, E., Hernández Criado, J., & Torcoroma Velásquez, P. (2016). <i>Programa de gestión de mantenimiento para una flota de vehículos de transporte de productos avícolas.</i> REVISTA INGENIO UFPSO, 11(Julio-Diciembre), Edición Especial 1.',
      link: '',
    },
    {
      referencia:
        'Frazelle, E. (2016). <i>Supply Chain Strategy: The Logistics of Supply Chain Management (2da ed.).</i> McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Transporte. (2022). <i>Resolución 20223040028675 de 2022: Por la cual se adopta el Plan Maestro Nacional de Sistemas Inteligentes para la Infraestructura, el Tránsito y el Transporte - SIT.</i> Bogotá, Colombia: Autor.',
      link: '',
    },
    {
      referencia:
        'Rushton, A., Croucher, P., & Baker, P. (2017). <i>The Handbook of Logistics and Distribution Management: Kogan Page Logistics and Supply Chain Management Series (6ta ed.).</i> Kogan Page.',
      link: '',
    },
    {
      referencia:
        'Secretaría Distrital de Movilidad. (2005). <i>Manual de planeación y diseño para la administración del tránsito y el transporte.</i> Bogotá, Colombia: Autor.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yasmín Andreina Maldonado Escobar',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
