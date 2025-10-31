export default {
  global: {
    Name: 'Distribución y campañas sostenibles',
    Description:
      'El componente formativo Distribución y promoción promueve prácticas comerciales sostenibles mediante la gestión eficiente de stocks verdes, distribución ecoamigable, comunicación responsable y <em>marketing</em> digital verde. Fortalece competencias para implementar estrategias respetuosas con el medio ambiente, generando valor en negocios conscientes y competitivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        titulo: 'Gestión de <em>stocks</em> verde',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tecnologías',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Ubicación',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Técnicas de implementación',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Canales de distribución verde',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Sistema',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Estructura',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Métodos de selección',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comunicación comercial sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clases',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Usos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tipos de material promocional',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Marketing digital verde',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Imagen',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Lineamientos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Manual',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Campaña promocional verde',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Clases',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Estructura',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Presupuesto',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Materiales',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: '<em>Marketing</em> digital verde',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Estrategias',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Herramientas',
            hash: 't_6_3',
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
      tema: 'Canales de distribución verde',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). <em>Canales de distribución y comercialización según la tecnología para la venta</em> [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YzMfN8fHlP8',
    },
    {
      tema: 'Comunicación comercial sostenible',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Plan de comunicación de producto sostenible</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=H891NO0WKdk',
    },
    {
      tema: '<em>Marketing</em> verde',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021).<em>¿Qué es mercadeo verde (Green Marketing)? Ejemplos de mercadeo verde en el mundo</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PbdVwChb71Q',
    },
  ],
  glosario: [
    {
      termino: 'ACV (Análisis de Ciclo de Vida)',
      significado:
        'Herramienta que evalúa el impacto ambiental de un producto a lo largo de todas sus etapas: producción, distribución, uso y disposición final.',
    },
    {
      termino: 'Alianzas logísticas',
      significado:
        'Cooperación entre empresas que comparten recursos y estrategias sostenibles para la distribución y logística de productos.',
    },
    {
      termino: '<em>Blockchain</em>',
      significado:
        'Tecnología de registro digital que permite garantizar la trazabilidad y transparencia en la cadena de suministro.',
    },
    {
      termino: 'Campaña promocional verde',
      significado:
        'Estrategia de comunicación que promueve productos o iniciativas sostenibles, con objetivos comerciales y de concienciación ambiental o social.',
    },
    {
      termino: 'Canal de distribución verde',
      significado:
        'Ruta de entrega de productos al cliente final que minimiza el impacto ambiental mediante transporte ecológico y prácticas sostenibles.',
    },
    {
      termino: 'Capacitación ambiental',
      significado:
        'Formación del personal en prácticas ecológicas para mejorar el manejo de productos y procesos logísticos.',
    },
    {
      termino: 'Certificación ambiental',
      significado:
        'Reconocimiento oficial que garantiza que una empresa cumple con estándares sostenibles (por ejemplo, ISO 14001, FSC).',
    },
    {
      termino: 'Comunicación comercial sostenible',
      significado:
        'Estrategia que integra valores éticos, sociales y ambientales en los mensajes publicitarios y promocionales de una empresa.',
    },
    {
      termino: 'Distribución sostenible',
      significado:
        'Proceso logístico que considera la eficiencia energética, reducción de emisiones y responsabilidad ambiental en el transporte de productos.',
    },
    {
      termino: '<em>E-commerce</em> responsable',
      significado:
        'Comercio en línea que minimiza el impacto ambiental mediante envíos verdes, empaques sostenibles y prácticas éticas.',
    },
    {
      termino: 'Embalaje biodegradable',
      significado:
        'Material de empaque que se descompone naturalmente sin generar residuos contaminantes.',
    },
    {
      termino: 'Etiquetado ecológico',
      significado:
        'Sello o certificado que indica que un producto cumple con criterios de sostenibilidad y respeto ambiental.',
    },
    {
      termino: 'Gestión de stock verde',
      significado:
        'Administración de inventarios que incorpora criterios ecológicos para reducir el impacto ambiental del almacenamiento y distribución.',
    },
    {
      termino: 'Greenwashing',
      significado:
        'Práctica engañosa en la que una empresa finge ser ecológica mediante publicidad sin acciones reales de sostenibilidad.',
    },
    {
      termino: 'Huella de carbono',
      significado:
        'Medida de la cantidad total de gases de efecto invernadero emitidos directa o indirectamente por una actividad o producto.',
    },
    {
      termino: 'Identidad corporativa verde',
      significado:
        'Conjunto de elementos visuales y estratégicos que reflejan el compromiso ambiental de una empresa.',
    },
    {
      termino: 'IoT ambiental',
      significado:
        'Sensores conectados que miden y controlan variables ambientales en tiempo real, mejorando el manejo sostenible de los inventarios.',
    },
    {
      termino: '<em>Just-in-Time</em> Verde',
      significado:
        'Técnica de inventario que abastece productos solo cuando son necesarios, reduciendo almacenamiento y desperdicio.',
    },
    {
      termino: 'Logística inversa',
      significado:
        'Proceso de recolección de productos usados o empaques para su reciclaje, reutilización o eliminación responsable.',
    },
    {
      termino: 'Marketing digital verde',
      significado:
        'Uso de herramientas digitales para promocionar productos sostenibles, reduciendo el impacto ambiental de la publicidad.',
    },
    {
      termino: 'Merchandising ecológico',
      significado:
        'Material promocional fabricado con criterios de sostenibilidad, como semilleros o artículos reutilizables.',
    },
    {
      termino: 'Plataforma digital',
      significado:
        'Herramientas en línea que permiten gestionar campañas sostenibles, monitorear impactos y optimizar recursos.',
    },
    {
      termino: 'SEO verde',
      significado:
        'Optimización de sitios web con criterios sostenibles para mejorar su posicionamiento y reducir su huella ecológica.',
    },
    {
      termino: 'Software ERP verde',
      significado:
        'Sistemas de gestión empresarial con indicadores ambientales para una operación más sostenible.',
    },
    {
      termino: 'Tipografía sostenible',
      significado:
        'Fuentes digitales diseñadas para reducir el consumo de tinta, utilizadas en impresiones ecológicas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bigné, E., Chumpitaz, R., & Currás, R. (2012). <em>Identidad y responsabilidad corporativa</em>. Madrid: ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Echavarría, J. (2012). <em>Gerencia de ventas</em> (1.ª ed.). México: McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Escobar Cabrera, J. C., & Gómez Racines, L. (Eds.). (2021). <em>Marketing verde, responsabilidad social y composición empresarial</em>. Universidad Santiago de Cali.',
      link:
        'https://libros.usc.edu.co/index.php/usc/catalog/download/323/455/6518?inline=1',
    },
    {
      referencia:
        'Fundación de Estudios Superiores de Cúcuta (FESC). (2008). <em>Gestión logística</em>.',
      link:
        'https://www.fesc.edu.co/portal/archivos/e_libros/logistica/gestion_logistica.pdf',
    },
    {
      referencia:
        'González, R. (2021). <em>Comunicación comercial sostenible</em>. Editorial Ecoempresa.',
      link: '',
    },
    {
      referencia:
        'Martínez, L., & Torres, C. (2023). <em>Marketing digital verde: Estrategias y herramientas</em>. GreenTech Press.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2024). <em>Manual de identidad visual</em>.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2024/07/MANUAL_IDENTIDAD_VISUAL_AMBIENTE.pdf',
    },
    {
      referencia:
        'Muñoz, S. (2025, 10 de febrero). <em>Green marketing: cómo crear campañas sostenibles e impactantes</em>. OBS Business School.',
      link:
        'https://www.obsbusiness.school/blog/green-marketing-como-crear-campanas-sostenibles-e-impactantes',
    },
    {
      referencia:
        'Peña, J., & Londoño, S. (2022). <em>Logística verde y canales sostenibles</em>. Universidad Ecológica.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, M., & Jiménez, D. (2020). <em>Gestión de inventarios y sostenibilidad</em>. Editorial Logística Verde.',
      link: '',
    },
    {
      referencia:
        'SPARX Logistics. (2024, 25 de septiembre). <em>Logística sostenible: Estrategias para empresas de todos los tamaños</em>.',
      link:
        'https://www.sparxlogistics.com/es/post/logistica-sostenible-estrategias-empresas',
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
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yezid Arturo Choperena Guerrero',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñador <i>web</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
