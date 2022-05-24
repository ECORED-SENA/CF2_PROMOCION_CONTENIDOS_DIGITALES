<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas de información
    .row.justify-content-center.mb-5
      .col-lg-9
        .row.justify-content-center
          .col-lg-8: p(data-aos='fade-right') La validez de la información es un aspecto muy importante en la gran diversidad de proyectos que las nuevas tecnologías traen en el siglo XXI. Muchas decisiones en el ámbito social, ambiental y empresarial, dependen en gran parte del acceso y buen manejo de la información, teniendo especial cuidado con aquella que proviene de fuentes no confiables como algunas redes sociales, sitios de internet y otros medios de comunicación.
          .col-lg-4.col-8: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/51.jpg')
          .col-12 
            .d-flex.align-items-center.justify-content-center.mb-3
              img(src="@/assets/curso/temas/dots-3.svg" style="width: 84px").me-3.d-lg-block.d-none
              p.mb-0 Ahora bien, en el mundo de la información y del conocimiento, aparecen nuevos conceptos que pueden orientar o desorientar al usuario, es por ello, que se deben conocer algunas definiciones para encaminar los procesos y tomar decisiones acertadas.
            p Las diferentes actividades empresariales que han sucedido en este siglo, se han enfocado en el manejo de la información, y de acuerdo con las expresiones de Ruiz de Querol (2007), donde menciona que 
              span.r-1 “hoy en día se tiene tanto acceso a la información que se ha convertido en una desventaja competitiva”, 
              | es importante entender conceptos como dato, información, conocimiento y sistemas de información.
      .col-lg-3: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/52.jpg')
    TabsC.color-primario
      .py-3.py-md-4.px-5(titulo="Dato").bg-azul-claro
        .row
          .col-md-6.mb-4.mb-md-0
            h4 
              span.r-1 Dato
            p Es toda información específica y concreta acerca de un elemento, hecho, o situación que permite analizarlos, estudiarlos, diagnosticarlos y conocerlos. 
              br
              |Por ejemplo: crecimiento económico del 3%, donde 3% es la expresión que debe analizarse en relación con el contexto “crecimiento económico”.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/53.jpg', alt='Texto que describa la imagen')
      .py-3.py-md-4.px-5(titulo="Información").bg-azul-claro
        .row
          .col-md-6.mb-4.mb-md-0
            h4 
              span.r-1 Información 
            p Es la presentación o agrupación de los datos significativos y en conjunto describen eventos, sucesos o eventos y con su procesamiento se puede elaborar un mensaje con sentido crítico.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/54.jpg', alt='Texto que describa la imagen')
      .py-3.py-md-4.px-5(titulo="Conocimiento").bg-azul-claro
        .row
          .col-md-6.mb-4.mb-md-0
            h4 
              span.r-1 Conocimiento 
            p Es el resultado de analizar, procesar, comparar y combinar los datos convertidos en información confiable de acuerdo con los intereses de la empresa. De esta forma, el sujeto o empresa pueden argumentar el manejo de la información.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/55.jpg', alt='Texto que describa la imagen')
      .py-3.py-md-4.px-5(titulo="Sistemas de información (SI)").bg-azul-claro
        .row
          .col-md-6.mb-4.mb-md-0
            h4 
              span.r-1 Sistemas de información (SI)
            p Son una serie de elementos que se relacionan y se integran (hardware y software) para recopilar, almacenar y procesar información que apoye la toma de decisiones. Adicionalmente, los sistemas de información apoyan el control y supervisión de la misma.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/56.jpg', alt='Texto que describa la imagen')
    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Fuentes de información
    p(data-aos='fade-right').mb-5 Se entiende por fuente de información a cualquier recurso que funcione para cubrir una necesidad informativa. La expresión fuente se entiende como el documento o lugar donde se encuentra la información que se necesita. En conjunto, el concepto se forma como el lugar donde se origina o se encuentra la información. De acuerdo con esta naturaleza, podemos decir que existen dos fuentes de información:
    .row.justify-content-center.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .tarjeta-up
          img(src="@/assets/curso/temas/57.jpg")
          .tarjeta-up__content.color-primario.p-5
            h3.mb-4 Fuentes de información primarias  
            p Cuando los datos se obtienen directamente del origen como pueden ser las empresas, personas, eventos o la misma comunidad, el medio ambiente y todo espacio del cual se puede acceder de manera directa.
      .col-lg-6.mb-3.mb-lg-0
        .tarjeta-up
          img(src="@/assets/curso/temas/58.jpg")
          .tarjeta-up__content.color-secundario.p-5
            h3.mb-4 Fuentes de información secundarias 
            p Son las publicaciones, artículos, videos, documentales y otros medios de información en la cual podemos obtener datos e información con un grado de procesamiento y análisis.    
    p.mb-5(data-aos='fade-right') Encontrar las fuentes confiables, requiere de cuidado ,porque de ello depende la validez de la información que va a recolectarse y por consiguiente, la validez de los resultados del estudio; los datos deben ser suficientes para su tratamiento.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right') 
      h2 2.2  Métodos de recolección de información
    p.mb-5(data-aos='fade-right') Toda investigación, sea cualitativa o cuantitativa, requiere la selección y aplicación de una serie de técnicas y herramientas para recopilar la información desde las fuentes primarias o secundarias previamente identificadas. 
      br
      br
      |Entre las técnicas de recopilación de datos e información, tenemos:
    .tarjeta.bg-verde-claro.p-5
      SlyderA(tipo="b")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4
              span.r-1 Encuesta
            p Es una técnica de recolección de información directamente de las personas. Algunas encuestas se realizan en forma presencial, pero la gran mayoría se desarrollan en forma virtual a través del envío de un formulario usando una plataforma como Google forms o Google.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/59.jpg', alt='Texto que describa la imagen')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4
              span.r-1 Entrevista
            p Esta técnica obtiene datos a partir de la conversación con las personas objeto de investigación. La entrevista, a pesar de llevar un guion, puede arrojar diferentes resultados a partir de la forma cómo se aplique. Existen 3 tipos de entrevista: Estructurada, semiestructurada o no estructurada, cada una puede arrojar datos diferentes y más profundos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/60.jpg', alt='Texto que describa la imagen')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4
              span.r-1 Observación directa

            p La observación consiste en obtener información del entorno, objeto o hecho en el cual enfocamos la investigación, mediante el registro de datos para su diagnóstico. 
              br
              br
              |En esta técnica, el investigador hace parte de la situación observada, persona o grupo de personas, analizando sus comportamientos. Hay dos tipos de observaciones, la directa e indirecta. Hoy día, en el ámbito de la industria 4.0, existe un panorama variado para recopilar la información a través de la observación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/61.jpg', alt='Texto que describa la imagen')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4
              span.r-1 Análisis de documentos
            p El análisis de documentos se basa en la búsqueda de información bajo criterios específicos, pueden usarse fichas bibliográficas que contienen información del material impreso o digital.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/62.jpg', alt='Texto que describa la imagen')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4
              span.r-1 Búsquedas web
            p Consiste en encontrar información en bases de datos especializadas, sitios web, blogs entre otras redes que pueden ser confiables.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/63.jpg', alt='Texto que describa la imagen')
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right') 
      h2 2.3  Procesamiento de la información
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos='fade-right')
        p Se entiende por procesamiento de información a la aplicación de técnicas usadas para el ordenamiento estratégico de los datos para el uso adecuado de las personas, en otras palabras, es cualquier organización o tratamiento de los elementos básicos de información (datos), mediante el empleo de un sistema informático o <em>software</em>. 
          br
          br
          | Es un proceso que involucra una secuencia de pasos, que en cadena conllevan el recaudo de información para que responda a los objetivos de una investigación o estrategia de marketing.
          br
          br
          |El procesamiento de información requiere:
        .tarjeta.rounded-0.bg-claro.texto-sistema.color-acento-contenido.p-3.mb-3
          p.mb-0 Determinación de objetivos de acuerdo con la necesidad de información.
        .tarjeta.rounded-0.bg-claro.texto-sistema.color-acento-contenido.p-3.mb-3
          p.mb-0 Tener la identificación del público objeto para la recolección de información.
        .tarjeta.rounded-0.bg-claro.texto-sistema.color-acento-contenido.p-3.mb-3
          p.mb-0 Seleccionar y validar las técnicas de recolección de información.
      .col-lg-5: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/64.jpg', alt='Texto que describa la imagen')
    .tarjeta.rounded-0.bg-claro.color-secundario.margin-n.p-5.mb-5.texto-sistema
      p.text-center En la siguiente imagen, se presenta un modelo de procesamiento de datos básico.
      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Figura 5
            span.r-5 Procesamiento de datos
          img(data-aos='zoom-in')(src='@/assets/curso/temas/65.svg', alt='Texto que describa la imagen')
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right') 
      h2 2.4  Protección de datos y <em>habeas</em> data
    .row.justify-content-center.mb-5
      .col-lg-9
        .row.justify-content-center
          .col-lg-8: p(data-aos='fade-right') El derecho de habeas data es el derecho que tienen las personas para: “conocer, actualizar y rectificar la información que se haya recogido sobre ella en archivos y bancos de datos de naturaleza pública o privada” (SIC, 2021).
            br
            br
            | La Corte Constitucional la define como “el derecho que otorga la facultad al titular de datos personales de exigir de las administradoras de esos datos el acceso, inclusión, exclusión, corrección, adición, actualización y certificación de los datos, así como la limitación en las posibilidades de su divulgación, publicación o cesión, de conformidad con los principios que regulan el proceso de administración de datos personales”, con lo anterior se explica que es la persona quien es dueña de la administración de sus datos personales y es la única autorizada para divulgarlos o ceder el derecho de divulgación a una administradora de datos, como a otras personas.
          .col-lg-4.col-8: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/66.jpg')
          .col-12 
            p En este sentido, los titulares o dueños de la información que reposa en los bancos de datos, son las personas naturales o jurídicas a quienes se hace referencia y son la principal fuente de información para suministrar en diferentes casos.
          .col-12 
            .d-flex.align-items-center.justify-content-center.mb-3
              img(src="@/assets/curso/temas/dots-3.svg" style="width: 84px").me-3.d-lg-block.d-none
              p.mb-0 En cuanto al manejo de la información o datos personales, existen usuarios que deben acceder a la información con fines de consulta y de toma de decisiones, por ejemplo, los bancos o entidades financieras al momento de aprobar o no una solicitud.
      .col-lg-3
        img(src='@/assets/curso/temas/67.jpg', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') De acuerdo con el Habeas Data, el dato personal es cualquier porción de información que se encuentra vinculada a una o varias personas, naturales o jurídicas de forma pública, privada o semiprivada. El carácter de público, semiprivado o privado lo confiere la ley y la Constitución, por ejemplo:
    .row.justify-content-center.mb-5(data-aos='zoom-in')
      .col-lg-3
        .tarjeta.color-primario.p-4.h-100
          .d-flex.align-items-center.mb-3
            img(src='@/assets/curso/temas/68.svg' style='width:69px').me-3.mb-3.mb-lg-0
            h4.text-white.mb-0 Dato público
          p El que está contenido en un documento público, sentencia judicial o ejecutorial.
      .col-lg-3
        .tarjeta.color-primario.p-4.h-100
          .d-flex.align-items-center.mb-3
            img(src='@/assets/curso/temas/69.svg' style='width:69px').me-3.mb-3.mb-lg-0
            h4.text-white.mb-0 Dato semiprivado
          p El que está contenido en una entidad financiera o crediticia.
      .col-lg-3
        .tarjeta.color-primario.p-4.h-100
          .d-flex.align-items-center.mb-3
            img(src='@/assets/curso/temas/70.svg' style='width:69px').me-3.mb-3.mb-lg-0
            h4.text-white.mb-0 Dato privado
          p El que solo es relevante o importante para el titular.
</template>

<script>
export default {
  name: 'Tema2',
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
.bg-azul-claro
  background-color: #bcd9dd
.bg-verde-claro
  background-color: #b0c8cb
</style>
