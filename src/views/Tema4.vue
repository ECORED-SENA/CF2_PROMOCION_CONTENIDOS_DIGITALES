<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg-tema4
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Portafolio de productos
      .tarjeta.bg-tg-4.p-4.mb-5
        .row.p-lg-5
          .col-xl-7
            p(data-aos='fade') El concepto de portafolio de productos, hace referencia a todas las líneas y categorías de productos que comercializa la empresa. Un portafolio de productos bien estructurado, consta de categorías o líneas enfocadas a cada uno de los segmentos del mercado en los cuales tiene presencia la empresa. El equipo de ventas, puede especializarse de acuerdo con cada línea o categoría; por ejemplo: en una empresa de calzado, se pueden encontrar vendedores especializados en la línea masculina y otros en la línea femenina, o en la categoría deportiva o categoría formal, entre otros. El portafolio permite conocer de primera mano, el enfoque del plan de ventas, los beneficios que la empresa y la perspectiva de crecimiento en el mercado. En las empresas de servicios, se denomina “portafolio de servicios”.
      .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
        .text-white: h4.mb-0.me-3 Estructura de un portafolio de productos
      p.mb-5(data-aos='fade-right') Una empresa puede estructurar sus productos en categorías o líneas de acuerdo con la cantidad y enfoque de mercado. Cada categoría o línea puede subdividirse en marcas, modelos, precios, tamaños, etc, por ejemplo:
      .row.justify-content-center.mb-5
        .col-lg-10(data-aos='zoom-in')
          .titulo-sexto.color-acento-contenido
            h5 Figura 8
            span Ejemplo de estructura de un portafolio
          img(src='@/assets/curso/temas/102.svg', alt='Texto que describa la imagen')
      .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
        .text-white: h4.mb-0.me-3 Dimensiones de un portafolio
      p.mb-5(data-aos='fade-right') Teniendo como base la estructura por categorías o líneas, en un portafolio existen cuatro dimensiones, que tienen que ver con:
      .row.justify-content-center.mb-5
        .col-lg-7
          AcordionA.acordion-a.mb-5(tipo="a" clase-tarjeta="tarjeta color-secundario bg-claro texto-sistema")
            div(titulo="Amplitud")
              p Hace referencia a la cantidad de líneas o categorías que tiene el portafolio. En el caso del ejemplo anterior, son 3.
            div(titulo="Longitud")
              p Hace referencia a la cantidad de productos que existen por cada categoría o línea. En el ejemplo anterior, corresponde a la cantidad de productos que hay en la línea muebles, incluyendo las sublíneas (mesas + sillas + sofás).
            div(titulo="Profundidad")
              p Es la variedad de productos que hay en cada sublínea, por ejemplo: en la línea muebles, hay variedad en los colores de las mesas, diferentes tipos de sillas y varias clases de sofás.
            div(titulo="Consistencia")
              p Hace referencia a la afinidad que existe entre las líneas de productos en relación al consumidor o uso final. En el ejemplo anterior, las líneas muebles, oficina y tecnología, son líneas diferentes, entre ellas se complementan y puede estar dirigida al mismo tipo de cliente. 
        .col-lg-5.col-8: img.rounded-3(data-aos='zoom-in' src='@/assets/curso/temas/103.jpg', alt='Texto que describa la imagen')
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.1  Comunicación del producto
      p.mb-5(data-aos='fade-right') La comunicación del producto se refiere a las estrategias de marketing que se enfocan a la comercialización, venta y divulgación de los beneficios, atributos o características que se encuentran en las diferentes líneas que componen el portafolio. 
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/hETivH98gc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .d-flex.align-items-center.justify-content-center.mb-3
        img(src="@/assets/curso/temas/dots.svg" style="width: 84px").me-3.d-lg-block.d-none
        p.mb-0(data-aos='fade-right') Implementar estrategias de comunicación del producto, permite que la empresa pueda determinar cuál es la posición de cada producto en el mercado e identificar nuevas líneas de negocio o nuevos escenarios de comercialización. Esta labor puede ser impulsada por el equipo de ventas, debido a que está en contacto directo con el consumidor y recibe las recomendaciones, aciertos y acciones de mejora que pueden aplicarse al producto. Los pasos para llevar en este proceso son:        
      .row.justify-content-center.mb-5
        .col-lg-3.mb-3.mb-lg-0: img.rounded-3(data-aos='zoom-in' src='@/assets/curso/temas/104.jpg', alt='Texto que describa la imagen')
        .col-lg-9
          .row.justify-content-center.mb-lg-3(data-aos='zoom-in')
            .col-lg-4.mb-3.mb-lg-0
              .tarjetas-circulo.h-100.p-4.d-flex.align-items-center
                .tarjetas-circulo__number
                  p.mb-0.number 01
                .d-flex.justify-content-center.align-items-center.mb-4
                  img(src="@/assets/curso/temas/104.svg" style="width: 70px").me-2
                  p Identificar los productos con mayor o menor posicionamiento.
            .col-lg-4.mb-3.mb-lg-0
              .tarjetas-circulo.h-100.p-4.d-flex.align-items-center
                .tarjetas-circulo__number
                  p.mb-0.number 02
                .d-flex.justify-content-center.align-items-center.mb-4
                  img(src="@/assets/curso/temas/105.svg" style="width: 70px").me-2
                  p Seleccionar los parámetros de evaluación del producto.
            .col-lg-4.mb-3.mb-lg-0
              .tarjetas-circulo.h-100.p-4.d-flex.align-items-center
                .tarjetas-circulo__number
                  p.mb-0.number 03
                .d-flex.justify-content-center.align-items-center.mb-4
                  img(src="@/assets/curso/temas/106.svg" style="width: 70px").me-2
                  p Seleccionar un modelo de análisis, en el caso de los productos es el modelo BCG.
          .row.justify-content-center.mb-lg-3(data-aos='zoom-in')
            .col-lg-4.mb-3.mb-lg-0
              .tarjetas-circulo.h-100.p-4.d-flex.align-items-center
                .tarjetas-circulo__number
                  p.mb-0.number 04
                .d-flex.justify-content-center.align-items-center.mb-4
                  img(src="@/assets/curso/temas/107.svg" style="width: 70px").me-2
                  p Organizar los datos obtenidos como resultado del análisis.
            .col-lg-4.mb-3.mb-lg-0
              .tarjetas-circulo.h-100.p-4.d-flex.align-items-center
                .tarjetas-circulo__number
                  p.mb-0.number 05
                .d-flex.justify-content-center.align-items-center.mb-4
                  img(src="@/assets/curso/temas/108.svg" style="width: 70px").me-2
                  p Clasificar los productos del portafolio según los resultados.
            .col-lg-4.mb-3.mb-lg-0
              .tarjetas-circulo.h-100.p-4.d-flex.align-items-center
                .tarjetas-circulo__number
                  p.mb-0.number 06
                .d-flex.justify-content-center.align-items-center.mb-4
                  img(src="@/assets/curso/temas/109.svg" style="width: 70px").me-2
                  p Valorar, evaluar y diseñar las acciones de mejora.
      p.mb-5(data-aos='fade-right') Para ampliar la información lo invitamos a ver el siguiente video:
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/_diB9m0iARk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.2  <em>Target</em> comunicacional
      .row.justify-content-center.mb-5
        .col-lg-9
          .row.justify-content-center
            .col-lg-8.order-2.order-lg-1.mb-3.mb-lg-0
              p La administración de un portafolio de productos, requiere de estrategia, seguimiento y verificación constante de resultados, en especial, porque requiere del compromiso de todo el equipo de ventas bajo la supervisión del director o gerente de ventas. Por lo anterior, la administración de un portafolio de productos se convierte en un reto para todos los tipos de empresas por ser un proceso decisivo para el modelo de negocio, esto conlleva a que la empresa tenga que identificar en qué momento debe ampliar el portafolio y cómo realizar una buena gestión que incluya el diseño constante de estrategias de marketing para su divulgación.
            .col-lg-4.mb-3.mb-lg-0.col-8.order-1.order-lg-2: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/110.jpg', alt='Texto que describa la imagen')
            .col-12.order-3
              .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
                .text-white: h4.mb-0.me-3 Gestión del portafolio de productos con la Matriz BCG
              p Para la gestión del portafolio de productos, es recomendado utilizar la matriz BCG <em>(Matriz Boston Consulting Group)</em>, creada por esta firma en la década de los 70 y que aún sigue vigente, no sólo para gestionar el portafolio, sino también, las diferentes líneas de producción. El principal alcance de esta matriz es determinar el ciclo de vida de cada uno de los productos y su comportamiento en el mercado, con la finalidad de aplicar con mayor eficacia los recursos en cada producto.
        .col-lg-3.col-8: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/111.jpg')
      p.mb-5(data-aos='fade-right') A continuación, se revisará en detalle la construcción de la matriz:
      .d-flex.align-items-center.justify-content-center.mb-3
        img(src="@/assets/curso/temas/dots.svg" style="width: 84px").me-3.d-lg-block.d-none
        p.mb-0(data-aos='fade-right') La matriz consta de 2 ejes, el eje vertical (y) que representa el crecimiento del mercado (alto y bajo) y el eje horizontal (x) que representa la participación de ese producto en el mercado (alto y bajo). El cruce de estos ejes conforma cuatro cuadrantes donde se ubican los diferentes productos del portafolio, cada cuadrante es representado por una estrella, una vaca lechera, un perro y un signo de interrogación.
      .tarjeta.bg-white.p-5.mb-5
        .row.justify-content-center.mb-5
          .col-lg-7
            figure.mb-5
              img(src='@/assets/curso/temas/112.svg', alt='Texto que describa la imagen').mb-3
              figcaption.fw-normal Nota: tomado de Boston Consulting Group
        .tarjeta.bg-verde-claro.p-5
          SlyderA(tipo="b")
            .row.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                h4 ¿Cómo funciona la matriz?
                p El reto organizacional, consiste en ubicar cada producto en uno de los cuadrantes, los criterios de ubicación pueden ser el resultado de una investigación de mercados, diagnóstico interno, percepciones de los consumidores, entre otros. 
              .col-lg-6.mb-4.mb-lg-0
                img(src="@/assets/curso/temas/113.jpg" )
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0
                h4 Productos en “interrogación” 
                p Estos productos representan aquellos que van creciendo paulatinamente en el mercado, pero que aún no tienen la participación esperada por la empresa. Como variables deben considerarse el conocimiento y uso que el consumidor tenga del producto para impulsar su aprobación y que pase al siguiente nivel (estrella).
              .col-lg-3.col-8.mb-4.mb-lg-0
                img(src="@/assets/curso/temas/114.svg" )
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0
                h4 Productos en “estrella”
                p Se denominan así, porque son los productos que tienen la mayor participación y mayor crecimiento en el mercado. Ocupa un lugar privilegiado en la empresa porque representa el mayor ingreso y número de ventas en comparación con otros productos del portafolio. Aún así, requiere de inversión y atención especial por parte de la empresa.
              .col-lg-3.col-8.mb-4.mb-lg-0
                img(src="@/assets/curso/temas/115.svg" )
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0
                h4 Productos en “vaca lechera”
                p Los productos ubicados en este cuadrante, cuentan con una buena participación en el mercado (no tanto como en estrella), pero con un crecimiento estable. No requieren de altas inversiones porque son productos con alto posicionamiento, muy reconocidos por el consumidor, con buenas recomendaciones y con ventas e ingresos estables. La organización debe procurar por hacer pequeñas innovaciones en el producto, que le garanticen mantenerlo en el tiempo, pero que no cause disrupciones que conlleven una baja en las ventas.
              .col-lg-3.col-8.mb-4.mb-lg-0
                img(src="@/assets/curso/temas/116.svg" )
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0
                h4 Productos en “perro” 
                p Son productos con bajo posicionamiento, bajo reconocimiento y participación en el mercado. Identificar el producto “perro” es muy importante porque puede causar perjuicios al portafolio, en especial, porque no es atractivo y generar inconformidades. En este sentido, existen dos soluciones posibles; la primera es reinventarlo para lanzarlo como un producto nuevo o llegar a un nuevo mercado. La segunda es descartarlos completamente del portafolio.
              .col-lg-3.col-8.mb-4.mb-lg-0
                img(src="@/assets/curso/temas/117.svg" )
      .row.justify-content-center.mb-5
        .col-lg-4.col-8.mb-3.mb-lg-0: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/118.jpg')
        .col-lg-8
          p(data-aos='fade-right') Como un buen resultado de la clasificación de los productos en la matriz BCG es la diversificación del portafolio de productos, pues representa un reto para la organización. Un portafolio pequeño, implica que la empresa tendrá una restringida participación en el mercado, por el contrario, tener un portafolio amplio, representan altas inversiones en publicidad y en talento humano para sostenerlo en el tiempo. Para mantener un equilibrio en esta situación, es importante considerar el siguiente proceso:
      figure.mb-5(data-aos='zoom-in')
        img(src='@/assets/curso/temas/119.svg', alt='Texto que describa la imagen')
      p.mb-5(data-aos='fade-right') En el plan de marketing, convergen todos los resultados de la investigación, tales como público objetivo, información del mercado, canales de distribución, estrategias de comunicación entre otras. Resulta ser el documento más importante que le brinda sostenimiento y proyección a la empresa.



  </template>

<script>
export default {
  name: 'Tema4',
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
.bg-tema4
  background-image: url(../assets/curso/temas/bg-tema4.png)
  background-repeat: no-repeat
  background-size: 100% 100%
  background-position: start
.tarjetas-circulo
  position: relative
  background-color:  $color-primario
  border-radius: 10px
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1)
  p, h1, h2, h3, h4, h5, h6, li
    color: $white
    transition: color 0.4s ease-in-out
  .tarjetas-circulo__number
    position: absolute
    bottom: 0
    right: 5%
    font-weight: bold
    p.number
      font-weight: bold
      color: #0d54c3 !important
      font-size: 61px
.acordion-a
  .acordion__accion
    i
      color: $white  !important
    .acordion__accion__btn--a
      background-color: $color-primario !important
.img-infografica-b__modal
  background-color: #1e3149
.tabs-a__tab
  background-color: #e6e6e6
.bg-tg-4
  background-image: url(../assets/curso/temas/bg-tg-4.png)
  background-repeat: no-repeat
  background-size: 100% 100%
  background-position: center
  @media (max-width: $bp-max-lg)
    background-image: none
    background-color: $color-neutral-2
</style>
