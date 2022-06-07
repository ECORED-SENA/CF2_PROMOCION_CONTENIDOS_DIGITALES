export default {
  global: {
    componenteFormativo: 'Segmentación y prospección de clientes',
    descripcionCurso:
      'Es necesario conocer al cliente en detalle y realizar una propuesta comercial que le sea atractiva y adaptada a sus gustos y necesidades. En este sentido, realizar procesos de prospección, manejar adecuadamente los datos a través de los sistemas de información y desarrollar un excelente portafolio de productos, se convertirán en la mejor opción para vender el producto con eficacia en el público objetivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Prospección de los clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Etapas de la prospección',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Ciclo de los prospectos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Segmentación de clientes',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Arquetipos y <em>buyer</em> persona',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistemas de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fuentes de información',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Métodos de recolección de información',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Procesamiento de la información',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Protección de datos y <em>habeas</em> data',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de productos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Atributos del producto',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Portafolio de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Comunicación del producto',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: '<em>Target</em> comunicacional',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
      texto:
        'Academia Pragma. (s.f.). Conoce los 5 arquetipos digitales de los colombianos. ',
      tipo: 'Articulo',
      link:
        'https://www.pragma.com.co/academia/conceptos/conoce-los-5-arquetipos-digitales-de-los-colombianos',
    },
    {
      texto:
        'Departamento Adminisrativo de la Función Pública. (2008). Ley 1266 de 2008. ',
      tipo: 'PDF',
      descarga: '/downloads/Ley_1266_de_2008.pdf',
    },
    {
      texto:
        'Kotler, P., y Armstrong, G. (2013). Fundamentos de <em>Marketing.</em> ',
      tipo: 'PDF',
      descarga: '/downloads/Fundamentos del Marketing-Kotler.pdf',
    },
    {
      texto: 'Lane, K., & Kotler, P. (2006). Dirección de <em>Marketing</em>. ',
      tipo: 'PDF',
      descarga:
        '/downloads/libro direccion-de-marketing(kotler-keller_2006).pdf',
    },
    {
      texto:
        'Negocios En Tu Mundo. (2012). Emprendedores, a diferenciar sus productos. Nada de <em>commodities</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GGAGkqStMJw',
    },
    {
      texto:
        'Negocios En Tu Mundo. (2012). ¿Qué es y qué no es el valor agregado? (Video). Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FpnYS2jtKJk',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'Un cliente es la persona o entidad que accede a un producto o servicio por medio de una transacción financiera (dinero) u otro medio de pago.',
    },
    {
      termino: 'Fidelizar',
      significado:
        'Una acción dirigida a conseguir que los clientes mantengan relaciones estables y continuadas con la empresa a lo largo del tiempo.',
    },
    {
      termino: 'Mercado de consumo',
      significado:
        'El mercado de consumo se compone por todas aquellas personas que adquieren o compran bienes y servicios y luego lo utilizan para satisfacer sus necesidades finales.',
    },
    {
      termino: 'Modelo de negocio',
      significado:
        'Un modelo de negocio es una herramienta previa al plan de negocio que te permitirá definir con claridad qué vas a ofrecer al mercado, cómo lo vas a hacer, a quién se lo vas a vender, cómo se lo vas a vender y de qué forma vas a generar ingresos.',
    },
    {
      termino: 'Prospecto',
      significado:
        'El prospecto es un cliente potencial que encaja con las características del cliente ideal, dispone de los medios para comprar (dinero) y está autorizado a tomar decisiones de compra.',
    },
    {
      termino: 'Retención de clientes',
      significado:
        'Retener clientes sucede cuando una empresa planifica un conjunto de estrategias de fidelización y acciones con la finalidad de mantener a los clientes actuales a largo plazo.',
    },
    {
      termino: 'Segmento de mercado',
      significado:
        'Un segmento de mercado es un grupo de consumidores, en su mayoría homogéneo, ya sea por determinadas características o por sus necesidades, los cuales son identificados como un mercado que presenta deseos o hábitos de compra parecidas y que potencialmente responderían similar a la estrategia desarrollada por el <em>mix</em> de <em>marketing</em>.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agüero Cobo. (2014). Estrategia de fidelización de clientes.',
      link: '',
    },
    {
      referencia:
        'Alejandro Schnarch. (2013). Marketing para pymes. Alfa Omega. 1a Edición',
      link: '',
    },
    {
      referencia:
        'Beltrán Mora, Marola Narcisa, Gerson Damacio Ledesma Álvarez, and Víctor Martín Parrales Carvajal. "El Buyer Persona Como Factor Clave Entre Las Tendencias En Gestión Empresarial." RECIMUNDO: Revista Científica De La Investigación Y El Conocimiento 3.3 (2019): 659-81. Web.',
      link: '',
    },
    {
      referencia: 'Ley 1266 de 2008.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=34488',
    },
    {
      referencia:
        'Kotler, P. (1967). Marketing Management: Analysis, Planning and Control. Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. & Sidney J. Levy. (1969). Broadening the Concept of Marketing. Journal of Marketing, January 1969, Vol. 33, Issue 1, pp.10-15. (Winner of the 1969 Alpha Kappa Psi Foundation Award for the best 1969 paper in the Journal of Marketing.)',
      link: '',
    },
    {
      referencia:
        'Academia pragma. (2021). Conoce los 5 arquetipos digitales de los colombianos. ',
      link:
        'https://www.pragma.com.co/academia/conceptos/conoce-los-5-arquetipos-digitales-de-los-colombianos',
    },
    {
      referencia:
        'Promove Consultoría. (2012). Atraer fidelizar clientes. Xunta de Galicia. 1a Edición ',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. Protección de datos personales. ',
      link: 'https://www.sic.gov.co/tema/proteccion-de-datos-personales',
    },
    {
      referencia:
        'Valdés, P. (2019). Buyer persona: el factor clave en tu estrategia de marketing y ventas.',
      link:
        'https://www.dobuss.es/buyer-persona-factor-clave-estrategia-marketing-ventas/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Paolo Andrés Cantillo Largo',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio - Regional Antioquia ',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Flores',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez        ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas        ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Ándres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuly Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
