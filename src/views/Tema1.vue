<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg-tema1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Prospección de los clientes
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos='fade-right') 
        p.mb-4  El concepto prospección de clientes, hace referencia a la identificación y geolocalización del target potencial que pueden convertirse en usuarios o consumidores del producto. Estos procesos se logran con la aplicación de metodologías de segmentación y de investigación de mercados que permiten encontrar los clientes potenciales de la organización. 
        .d-flex.align-items-center.justify-content-center.mb-3.mb-lg-0
            img(src="@/assets/curso/temas/dots.svg" style="width: 84px").me-3.d-lg-block.d-none
            p.mb-0 Con el fin de ampliar el concepto y también los elementos que hacen parte de la prospección la siguiente, la siguiente figura detalla aspectos que son relevantes en el ciclo de la venta y los factores que lo integran a nivel de validación, referidos y la forma como se gestionan.
      .col-lg-5.col-8: img.rounded-3(data-aos='zoom-in-up')(src="@/assets/curso/temas/0.jpg")
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Proceso de la venta
        img(data-aos='zoom-in')(src="@/assets/curso/temas/1.svg").mb-5
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  Etapas de la prospección
    p.mb-5(data-aos='fade-right') Torres (2014): define que el proceso de prospección consta de 3 etapas: 
      span.f-1 la identificación de posibles clientes, la calificación de clientes y la consolidación de la lista, que permitirá clasificarlos de manera ordenada y de acuerdo con su importancia.
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span Etapas de prospección
        img(src="@/assets/curso/temas/2.svg").mb-5
    .row.justify-content-center.mb-5
      .col-lg-5.col-8: img.rounded-3(data-aos='zoom-in')(src="@/assets/curso/temas/3.jpg").mb-3.mb-lg-0
      .col-lg-7(data-aos='fade-left')
        p Cada una de las etapas, desarrolla unos subprocesos o pasos para su perfecta ejecución:
        ul.lista-ul--color
          li
            i.fas.fa-dot-circle.fa-xs
            | Tener en cuenta referencias de los clientes actuales.
          li
            i.fas.fa-dot-circle.fa-xs
            | Evaluar productos y servicios de otras empresas <em>(Benchmarking)</em>.
          li
            i.fas.fa-dot-circle.fa-xs
            | Explorar grupos y gremios.
          li
            i.fas.fa-dot-circle.fa-xs
            | Recopilar los datos de la empresa.
          li
            i.fas.fa-dot-circle.fa-xs
            | Obtener referencias a partir de entrevistas a grupos focales.
          li
            i.fas.fa-dot-circle.fa-xs
            | Evaluar las estrategias de marketing de otras empresas.
          li
            i.fas.fa-dot-circle.fa-xs
            | Analizar publicaciones en revistas, periódicos e incluso datos académicos.
        p Una vez son identificados los clientes, se hace necesario generar un nivel de calificación acorde a los parámetros de la organización. Esto implica calificar a los clientes de acuerdo con su potencial de compra y esta etapa tiene la función ubicarlos de acuerdo con su prioridad e importancia.
    p.text-center
      span.r-1 Para la calificación se tiene en cuenta:
    .row.justify-content-center.mb-lg-3(data-aos='zoom-in')
      .col-lg-3.col-8.mb-3.mb-lg-0
        .card-fondo--0.p-5.h-100(style='height: 295px')
          .tarjeta.bg-white.d-flex.align-items-center.text-center.p-4.h-100
            p.d-flex.m-auto Potencial económico de los clientes.
      .col-lg-3.col-8.mb-3.mb-lg-0
        .tarjeta.rounded-0.color-secundario.p-5.h-100.texto-sistema(style='height: 295px')
          .tarjeta.bg-white.d-flex.align-items-center.text-center.p-4.h-100
            p.d-flex.m-auto Poder de decisión en la compra.
      .col-lg-3.col-8.mb-3.mb-lg-0
        .card-fondo--2.color-secundario.p-5.h-100(style='height: 295px')
          .tarjeta.bg-white.d-flex.align-items-center.text-center.p-4.h-100
            p.d-flex.m-auto Disponibilidad y acceso al producto.
    .row.justify-content-center.mb-5(data-aos='zoom-in')
      .col-lg-3.col-8.mb-3.mb-lg-0
        .card-fondo--3.p-5.h-100(style='height: 295px')
          .tarjeta.bg-white.d-flex.align-items-center.text-center.p-4.h-100
            p.d-flex.m-auto Motivación para comprar.
      .col-lg-3.col-8.mb-3.mb-lg-0
        .tarjeta.rounded-0.color-primario.p-5.h-100(style='height: 295px')
          .tarjeta.bg-white.d-flex.align-items-center.text-center.texto-sistema.p-4.h-100
            p.d-flex.m-auto Potencial de crecimiento como cliente.
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos='fade-right')
        p Las escalas de calificación dependen de los intereses de la empresa, debido a que algunas les darán mayor o menor valor a algunas variables dependiendo de su portafolio de productos, unos calificarán con mayor valor a la capacidad económica, otros calificarán el poder de decisión en la compra o la motivación.
        .cajon.color-primario.bg-claro.p-4.mb-4
          p.mb-0 Para cerrar estos pasos se busca elaborar una lista de clientes en perspectiva y se organizan de acuerdo con su importancia y mayor valor, luego se elabora una base de datos y se organiza con un software especializado.
      .col-lg-5(data-aos='zoom-in-up')
        img.rounded-3(src="@/assets/curso/temas/7.jpg").mb-5
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Ciclo de los prospectos
    .row.justify-content-center.mb-5
      .col-lg-5(data-aos='zoom-in-up')
        img.rounded-3(src="@/assets/curso/temas/8.jpg").mb-5
      .col-lg-7(data-aos='fade-left')
        p Se denomina ciclo de los prospectos, al proceso que realiza la empresa para dividir y organizar a sus posibles clientes de acuerdo con su portafolio de productos. Este proceso, tiene dos propósitos principales:
        ul.lista-ul--color
          li
            i.fas.fa-dot-circle.fa-xs
            | Iniciar la comunicación con el cliente.
          li
            i.fas.fa-dot-circle.fa-xs
            | Identificar el modelo de negocio en el mercado.
    p.mb-5(data-aos='fade-right') Como es un proceso cíclico, debe ser constante para que no se pierda la continuidad y se cuente con la validación en cada uno de sus pasos. El ciclo de los prospectos se desarrolla así:
    .row.justify-content-center.mb-5
      .col-lg-6.col-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          span Proceso de la venta
        img(data-aos='zoom-in')(src="@/assets/curso/temas/9.svg")
    .row.justify-content-center.my-5
      .col-lg-6
        p.mb-5 En los pasos segmentación del mercado, identificación de prospectos y definición de candidatos, es importante seleccionar las variables adecuadas para clasificar los clientes objetivo, investigar sus particularidades y clasificarlos correctamente. Algunas de las variables de segmentación, pueden ser:
        SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/10.svg' alt='AvatarTop')
            h3.text-center Nombres y apellidos
          .tarjeta.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/11.svg' alt='AvatarTop')
            h3.text-center Edad o rangos de edad
          .tarjeta.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/12.svg' alt='AvatarTop')
            h3.text-center Nivel educativo
          .tarjeta.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/13.svg' alt='AvatarTop')
            h3.text-center Estado civil
          .tarjeta.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/14.svg' alt='AvatarTop')
            h3.text-center Hábitos y variables conductuales
          .tarjeta.color-primario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/15.svg' alt='AvatarTop')
            h3.text-center Sexo y/o género
        p En los pasos de identificación de prospectos y definición de candidatos, se deben priorizar aquellos clientes con mayor potencial de compra y con los cuales se iniciarán los contactos
      .col-lg-6.col-8 
        img(src='@/assets/curso/temas/16.jpg' alt='AvatarTop')(data-aos='zoom-in-up')
    p.text-center Los pasos que complementan la secuencia de prospectos se consolidan así:
    .row.mb-5(data-aos='zoom-in')
      .col-lg-4.mb-4
        .tarjeta.tarjeta-avatar-slide.bg-verde.rounded-2.p-4.h-100
          .tarjeta-avatar-slide__img.mb-4
            .tarjeta-avatar-slide__img__item.mx-3: img(src='@/assets/curso/temas/17.svg', alt='Texto que describa la imagen' )
            .tarjeta-avatar-slide__img__item.mx-3: img(src='@/assets/curso/temas/18.svg', alt='Texto que describa la imagen' )
          p.text-center
            span.r-1 Comunicación con el cliente y preparación de entrevista
              br
            .text-start Se debe preparar una presentación del portafolio de productos, adaptado a las necesidades o expectativas de cada cliente. Es importante que la presentación contenga información del producto que motive al prospecto para aprobar la posibilidad de una entrevista. El contacto antes de la entrevista debe hacerse con una serie de motivaciones, es ahí, donde el funcionario de la empresa debe contar con buen entrenamiento para atraer al prospecto. Es necesario planificar un buen protocolo para mantener el interés y cerrar el proceso de manera exitosa.
    
      .col-lg-4.mb-4
        .tarjeta.tarjeta-avatar-slide.bg-verde.rounded-2.p-4.h-100
          .tarjeta-avatar-slide__img.mb-4
            .tarjeta-avatar-slide__img__item.mx-3: img(src='@/assets/curso/temas/19.svg', alt='Texto que describa la imagen' )
            .tarjeta-avatar-slide__img__item.mx-3: img(src='@/assets/curso/temas/20.svg', alt='Texto que describa la imagen' )
          p.text-center
            span.r-1.text-center Desarrollo de la entrevista
              br
            .text-start Debe ser un momento casi “mágico”, donde la empresa pone a prueba toda su capacidad de atracción hacia la compra o bien hacia la vinculación con el objeto de la empresa. La entrevista puede ser presencial o virtual; en caso de la presencial, requiere una planificación previa para contar con la plena disponibilidad del prospecto. En el caso de la virtual, aunque cada participante está en su lugar de trabajo o de vivienda, igualmente debe contar con la disposición y condiciones para desarrollarla plenamente.Cuando el entrevistador realiza una llamada telefónica y desarrolla las preguntas.
    
      .col-lg-4.mb-4
        .tarjeta.tarjeta-avatar-slide.bg-verde.rounded-2.p-4.h-100
          .tarjeta-avatar-slide__img.mb-4
            .tarjeta-avatar-slide__img__item.mx-3: img(src='@/assets/curso/temas/21.svg', alt='Texto que describa la imagen' )
            .tarjeta-avatar-slide__img__item.mx-3: img(src='@/assets/curso/temas/22.svg', alt='Texto que describa la imagen' )
          p.text-center
            span.r-1.text-center Entrega del producto o demostración
              br
            .text-start Aquí la empresa puede aplicar varias técnicas, como enviar el producto a través del correo certificado al lugar de vivienda del usuario, o si es un producto digital, como una plataforma, entonces se le puede brindar acceso al producto. 
    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3  Segmentación de clientes
    p.mb-5(data-aos='fade-right') En el proceso de prospección, la segmentación de clientes se convierte en una actividad que ayuda a la clasificación de los prospectos o posibles clientes de la organización. Si bien no es un proceso tan profundo y detallado como en una investigación de mercados, también se analizan diferentes variables: 
    .tarjeta.rounded-0.bg-claro.color-secundario.margin-n.texto-sistema.mb-5
      SlyderE(indicadores="derecha").texto-sistema.slyder-btns
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Variables psicográficas
            p Una correcta selección de variables psicográficas como gustos, intereses, actitudes y valores, permitirán recolectar información acerca de las opiniones de los consumidores o público objetivo. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/23.jpg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Variables geográficas
            p Están relacionadas con la ubicación física de los usuarios, por ejemplo, la ciudad, región, zona, barrio, departamento, país, etc. Estas variables permitirán que se puedan identificar otras características relacionadas con la región en la cual se encuentra el consumidor. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/24.jpg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Variables conductuales
            p Son los hábitos de compra, frecuencia de compra o motivadores de compra, y permitirán el diseño de estrategias comunicativas que aportarán en la fidelización de los clientes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/25.jpg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Variables demográficas
            p Son las variables basadas en la demografía, como el género, el estrato socioeconómico, nivel educativo, rango de edad, entre otros, y permitirán el diseño de acciones estratégicas enfocadas y adaptadas para cada público.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/26.jpg', alt='Texto que describa la imagen')
    p.text-center Luego del proceso de segmentación, se puede llegar a:
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.align-items-center
            .col-md-7.mb-4.mb-md-0
              h4 Identificar prospectos según su momento de uso del producto
              p Hay ocasiones donde se considera que se considera la compra del producto en un momento específico, bien sea en un momento del año, ocasión especial o temporada.
            .col-md-5
              figure
                img.rounded-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/27.jpg', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-5
              figure.mb-3.mb-lg-0
                img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/28.jpg', alt='Texto que describa la imagen')
            .col-md-7.mb-4.mb-md-0
              h4 Identificar prospectos según los beneficios que trae el producto
              p Hay prospectos que compran el producto de acuerdo con los beneficios que se obtienen cuando se adquiere el producto, por ejemplo, los productos de belleza suelen comprarse principalmente por los beneficios del producto que por la marca específicamente.
          .row.align-items-center
            .col-md-7.mb-4.mb-md-0
              h4 Identificar prospectos por nivel de uso del producto
              p Los prospectos se pueden clasificar de acuerdo con el contacto con el producto, por ejemplo: si lo compró por primera vez (primerizo), lo dejó de comprar (exusuario), lo compra con frecuencia (habitual).
            .col-md-5
              figure
                img.rounded-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/29.jpg', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-5
              figure.mb-3.mb-lg-0
                img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/30.jpg', alt='Texto que describa la imagen')
            .col-md-7.mb-4.mb-md-0
              h4 Identificar prospectos por nivel de fidelidad
              p En ocasiones es posible identificar los prospectos por el grado de preferencia o fidelidad hacia el producto o la marca, son prospectos que ya compraron el producto, por lo menos una vez, y ahora lo pueden recomendar. Aún así, hay prospectos que van cambiando de marcas y de productos constantemente, los cuales, también deben clasificarse.
    .tarjeta.rounded-0.margin-n.color-primario.bg-claro.texto-sistema.mb-5(data-aos='zoom-in')
      .row.justify-content-center.align-items-center
        .col-lg-10
          p.mb-0 Asímismo, las empresas deben conocer con frecuencia a los consumidores, identificar de cerca sus gustos, cambios de hábitos, intereses actuales, nuevos intereses y motivadores de compra. Para esto, la publicidad recobra una alta relevancia, porque es la encargada de llevar el mensaje comercial a cada tipo de público. Por ejemplo, una microempresa que vende ropa y calzado a mujeres, debe estar al tanto de las nuevas tendencias, cambios en la moda y gustos del público femenino, con el fin de orientar sus estrategias de mercadeo acorde con las nuevas tendencias que se presentan.
        .col-lg-2.col-8
          img(src='@/assets/curso/temas/31.svg' )
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4  Arquetipos y <em>buyer</em>persona
    .row.justify-content-center
      .col-lg-9
        .row.justify-content-center.mb-3
          .col-lg-8
            p(data-aos='fade-right').mb-3 Luego de prospectar los clientes a partir de las variables de segmentación, las empresas comienzan un proceso de personalización de los prospectos con la creación de “personalidades de marca”, con las cuales se personifican las actitudes, pensamientos, hábitos y conductas de los posibles clientes que pueden adquirir el producto; a estas personalidades se les denominan “arquetipos” y “buyer persona”.
            p
              span.r-1 El concepto de Arquetipo se ha venido desarrollando a través de diferentes fases: 
          .col-lg-4.col-8: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/32.jpg').mb-3.mb-lg-0
          .col-auto
          .col-12
            .tarjeta.color-acento-contenido.bg-claro.p-4.mb-3.mb-lg-0
              .d-lg-flex
                img(src='@/assets/curso/temas/34.svg' style='width:69px').me-3.mb-3.mb-lg-0
                p.texto-sistema.mb-0 En 1919 por el psiquiatra Carl Jung, como resultado de su investigación de las mitologías culturales. El concepto evidencia que los arquetipos son prototipos que surgen de las ideas e interpretaciones conjuntas de la sociedad, así mismo como surgen los mitos y las leyendas. De acuerdo con Jung (1983),  
                  span.r-1 “Todas las ideas más poderosas de la historia se remontan a los arquetipos… los conceptos centrales de la religión, la ciencia, la filosofía y la ética no son una excepción a esta regla”(p.54).
      .col-lg-3.col-8.mb-3.mb-lg-0: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/33.jpg')
    .row.justify-content-center.mb-5
      .col-lg-3.col-8.order-last.order-first: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/35.jpg').mb-3.mb-lg-0
      .col-lg-9.order-first.order-lg-last
        .tarjeta.color-acento-contenido.bg-claro.p-4.mb-2
          .d-lg-flex
            img(src='@/assets/curso/temas/36.svg' style='width:69px').me-3.mb-3.mb-lg-0
            p.texto-sistema.mb-0 Campbell (1949) presenta a los arquetipos como 
              span.r-1 “símbolos básicos y recurrentes a través del inconsciente colectivo”. 
        .tarjeta.color-acento-contenido.bg-claro.p-4.mb-2
          .d-lg-flex
            img(src='@/assets/curso/temas/37.svg' style='width:69px').me-3.mb-3.mb-lg-0
            p.texto-sistema.mb-0 Mark y Pearson (2001) formulan que el marketing arquetípico fue una vez 
              span.r-1 “un bono interesante para el mercadeo eficaz [pero] y esa hora un requisito previo” (p.8). 
        .tarjeta.color-acento-contenido.bg-claro.p-4.mb-3
          .d-lg-flex
            img(src='@/assets/curso/temas/38.svg' style='width:69px').me-3.mb-3.mb-lg-0
            p.texto-sistema.mb-0 Un arquetipo de marca hace parte de lo que llamamos “personalidad de la marca” y la define a partir de su relación intrínseca y representativa con el consumidor. Cada marca trae consigo un arquetipo, su significado y lo que representa para el consumidor ayuda en el fortalecimiento y posicionamiento, no solo en la mente del consumidor, sino también en el mercado. Finalmente, los arquetipos proporcionan 
              span.r-1 “un lenguaje intuitivo y accesible para describir y esencia de la marca” (Siraj y Kumari 2011).
        .d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/temas/dots.svg" style="width: 84px").me-3.d-lg-block.d-none
            p.mb-3.mb-lg-0 Mark y Pearson (2001) identificaron 12 arquetipos de marca maestra clasificados dentro de 4 categorías, en su libro titulado <em>The Hero and the Outlaw.</em> Muchos de esos arquetipos, aún son vigentes y sirven como base para investigaciones cualitativas de marca.
    p.mb-5 Todos los arquetipos enmarcan en sí unas características de conducta, modos de pensar, hábitos, entre otros, para servir de base en la identificación de los prospectos de la empresa:
    .row.justify-content-center.mb-5
      .col-lg-8
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/39.svg', alt='Texto que describa la imagen')
          .tarjeta.bg-azul-claro.p-3(x="20%" y="36%" numero="+")
            .text-center
              h4 Bandido
              p Son aquellos que no se sienten con la obligación de cumplir reglas. Las marcas que usan estos arquetipos, es porque sus prospectos son rebeldes, poderosos y revolucionarios.
          .tarjeta.bg-azul-claro.p-3(x="45%" y="36%" numero="+")
            .text-center
              h4 Amante
              p Este arquetipo se relaciona principalmente en prospectos con una personalidad apasionada, social y romántica. Las marcas que identifican esos arquetipos usualmente son fieles y defienden la marca.
          .tarjeta.bg-azul-claro.p-3(x="70%" y="36%" numero="+")
            .text-center
              h4 Inocente
              p Se crea una imagen de marca a partir de la pureza, sencillez, confianza, perdón y otros valores asociados con los buenos sentimientos del individuo.
          .tarjeta.bg-azul-claro.p-3(x="95%" y="36%" numero="+")
            .text-center
              h4 Mago
              p Aunque su nombre es un poco extraño, las marcas que ubican a sus prospectos en el arquetipo de “mago”, hacen referencia a los sueños y fantasías por cumplir y tienen la intención de hacer realidad sus deseos con la compra del producto.
          .tarjeta.bg-azul-claro.p-3(x="20%" y="63%" numero="+")
            .text-center
              h4 Bufon
              p Las marcas con arquetipos “bufones”, se refieren a que son animadores, impulsivos, espontáneos, expresan alegría y siempre quieren divertirse. 
          .tarjeta.bg-azul-claro.p-3(x="45%" y="63%" numero="+")
            .text-center
              h4 Cuidador
              p Son protectores y acogen a los demás bajo su protección. Su lema es “hacer cosas por los demás” (Mark y Pearson, 2001).
          .tarjeta.bg-azul-claro.p-3(x="70%" y="63%" numero="+")
            .text-center
              h4 Gobernante
              p Las marcas con arquetipos “gobernantes”, reflejan preocupación por su imagen, nivel social y prestigio. Usualmente están presentes en marcas de alto precio y orientadas a niveles sociales más altos.
          .tarjeta.bg-azul-claro.p-3(x="95%" y="63%" numero="+")
            .text-center
              h4 Creador
              p Convierte sus ideas en realidad, es innovador, creativo y ambicioso. Las marcas con arquetipos Creadores, suelen ser exitosas porque sus clientes ayudan en los procesos de innovación de la misma marca. 
          .tarjeta.bg-azul-claro.p-3(x="20%" y="91%" numero="+")
            .text-center
              h4 Explorador
              p La marca se crea a partir de comportamientos como la aventura, el viaje, la búsqueda de elementos nuevos y el autodescubrimiento. En este arquetipo el consumidor se considera todo un “rebelde” autosuficiente y libre.
          .tarjeta.bg-azul-claro.p-3(x="45%" y="91%" numero="+")
            .text-center
              h4 Callejero (del común)
              p Este arquetipo se crea sobre el principio de igualdad “hombres y mujeres son iguales”.
          .tarjeta.bg-azul-claro.p-3(x="70%" y="91%" numero="+")
            .text-center
              h4 Sabio
              p Los prospectos que se clasifiquen en este arquetipo, suelen ser pensadores, consejeros, amantes de la espiritualidad, confianza y autonomía.
          .tarjeta.bg-azul-claro.p-3(x="95%" y="91%" numero="+")
            .text-center
              h4 Héroe
              p Estos prospectos, suelen ir más allá de sus límites. Las marcas que configuran este arquetipo desean transmitir liderazgo, fuerza y autorrealización
    p.mb-5 Hoy día, los expertos en branding y construcción de marca, constantemente utilizan métodos para definir su personalidad a partir de las características y tendencias del mercado en el cual se encuentra el prospecto. La combinación estratégica de las variables de segmentación y tipos de mercado ayudan en la creación de los arquetipos de marca. En la construcción de una marca basada en el arquetipo, se pueden presentar en tres pasos: 
    .tarjeta.rounded-0.color-secundario.texto-sistema.margin-n.bg-claro.mb-5
      .row.justify-content-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Figura 4
            span.r-5 Proceso para el prototipo de una marca
          img(data-aos='zoom-in')(src='@/assets/curso/temas/40.svg')
    .row.justify-content-center
      .col-lg-3.col-8.mb-3.mb-lg-0: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/41.jpg')
      .col-lg-9
        .row.justify-content-center.mb-3
          .col-lg-4.col-8: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/42.jpg').mb-3.mb-lg-0
          .col-lg-8
            .cajon-editado
              .bloque-texto-d.color-primario.p-4
                .bloque-texto-d__texto.mb-3
                  i.fas.fa-quote-left
                  p.text-regular El concepto de 
                    span.r-1.fst-italic <em>buyer</em>persona 
                    | es la construcción de un personaje ficticio usando aspectos etnográficos de una comunidad y aspectos psicográficos similares a otros individuos. Entre los aspectos etnográficos se destacan la edad, sexo, nivel económico y educativo, y aspectos psicográficos como el estilo de vida, formas de pensar y de actuar. 
                  i.fas.fa-quote-right
                .bloque-texto-d__autor 
                  .h6.mb-0 (García, et al., 2019, p. 14-15). 
          .col-auto
            p Valdés (2019), experto en mercadeo y <em>buyer</em>persona, presenta que el <em>buyer</em>persona es la construcción de un modelo de cliente con elementos de conducta online, comportamiento personal, orientación profesional y de relacionamiento con la empresa. Hoy día, el <em>buyer</em>persona se convierte en un pilar fundamental del inbound marketing (mercadeo de contenidos de valor), porque da a conocer los intereses, dolores y sentimientos del cliente y la información del lugar donde ese cliente busca el producto.
    p.mb-5 Para que la empresa tenga una idea clara del <em>buyer</em>persona, se requiere reunir información relevante para crear un contenido de acuerdo con los intereses del público, la imagen de marca y el canal de distribución. La información que debe reunirse es:
    .row.justify-content-center.mb-5
      .col-lg-3.col-8.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide-arriba.bg-3-claro.p-5(style='height: 295px ')
            .tarjeta-slide-arriba__img
              img(src='@/assets/curso/temas/43.png')
            .d-inline.align-items-center
            .text-center
              h5
                span.r-1 Comportamiento personal
              p   Gustos.
                br
                |Influenciadores.
                br
                |Motivadores.
                br
                |Objetivos, etc.
      .col-lg-3.col-8.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide-arriba.bg-3-claro.p-5(style='height: 295px ')
            .tarjeta-slide-arriba__img
              img(src='@/assets/curso/temas/44.png')
            .d-inline.align-items-center
            .text-center
              h5
                span.r-1 Comportamiento digital
              p  Uso de redes sociales.
                br
                |Compra online.
                br
                |Búsqueda de información.
                br
                |Sitios web que frecuenta.
      .col-lg-3.col-8.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide-arriba.bg-3-claro.p-5(style='height: 295px ')
            .tarjeta-slide-arriba__img
              img(src='@/assets/curso/temas/45.png')
            .d-inline.align-items-center
            .text-center
              h5
                span.r-1 Comportamiento laboral
              p  Ocupaciones.
                br
                |Funciones laborales.
                br
                |Retos laborales.
      .col-lg-3.col-8.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide-arriba.bg-3-claro.p-5(style='height: 295px ')
            .tarjeta-slide-arriba__img
              img(src='@/assets/curso/temas/46.png')
            .d-inline.align-items-center
            .text-center
              h5
                span.r-1 Relaciones con la empresa
              p  Valoración de la marca.
                br
                |Conocimiento de la marca.
                br
                |Adquisición del producto.
                br
                |Interacción con la marca.
    p.text-center.mb-5 En otros aspectos, Valdés amplía el concepto de <em>buyer</em>persona, dividiéndola en tres perfiles:
    .row.justify-content-center.mb-5(data-aos='zoom-in')
      .col-lg-3.mb-3.mb-lg-0
        .tarjeta.color-primario.p-4.h-100
          .d-flex.align-items-center.mb-3
            img(src='@/assets/curso/temas/47.svg' style='width:69px').me-3.mb-3.mb-lg-0
            h4.text-white.mb-0 Decisor
          p Es quien toma la decisión de comprar el producto.
      .col-lg-3.mb-3.mb-lg-0
        .tarjeta.color-primario.p-4.h-100
          .d-flex.align-items-center.mb-3
            img(src='@/assets/curso/temas/48.svg' style='width:69px').me-3.mb-3.mb-lg-0
            h4.text-white.mb-0 Prescriptor
          p Es quien recomienda el producto.
      .col-lg-3.mb-3.mb-lg-0
        .tarjeta.color-primario.p-4.h-100
          .d-flex.align-items-center.mb-3
            img(src='@/assets/curso/temas/49.svg' style='width:69px').me-3.mb-3.mb-lg-0
            h4.text-white.mb-0 Influenciador
          p Es quien opina e influencia en la compra.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos='fade-right')
        p Para la creación del <em>buyer</em>persona, usted puede tener presentes los siguiente cuatro pasos con los que se consolida este modelo de proyección:
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 1
            | Recopile la información requerida sobre el cliente o usuario. 
          li
            .lista-ol--cuadro__vineta
              span 2
            | Determine la investigación para obtener respuestas sobre las preguntas enfocadas a ese cliente o usuario. 

          li
            .lista-ol--cuadro__vineta
              span 3
            | Realice la investigación y analice las respuestas alcanzadas partiendo de los datos recolectados.

          li
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 Cree el perfil del <em>buyer</em> persona, integrando los elementos más relevantes alcanzados durante el proceso. 
      .col-lg-4.col-8(data-aos='zoom-in-up'): img(src='@/assets/curso/temas/50.jpg')










</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bg-tema1
  background-image: url(../assets/curso/temas/bg-tema1.png)
  background-repeat: no-repeat
  background-size: 100% 100%
  background-position: start
.card-fondo
  &--0
    background-image: url(../assets/curso/temas/4.jpg)
  &--2
    background-image: url(../assets/curso/temas/5.jpg)
  &--3
    background-image: url(../assets/curso/temas/6.jpg)
.slyder-f
  .horizontal-scroll
    align-items: inherit !important
.bg-azul-claro
  background-color: #bcd9dd
.cajon-editado
  .bloque-texto-d:before
    opacity: .2 !important
    height: 50%
.pasos-a__linea__esquina__linea
  border-radius: 0px
</style>
