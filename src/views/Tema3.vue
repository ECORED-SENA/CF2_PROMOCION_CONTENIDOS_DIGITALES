<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg-tema3
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 El producto
      .row.justify-content-center.mb-5
        .col-lg-3.order-last.order-lg-first: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/71.jpg')
        .col-lg-9
          .row.justify-content-center
            .col-lg-5.col-8.mb-3.mb-lg-0: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/72.jpg')
            .col-lg-7
              p(data-aos='fade-right') 
                span.r-1 ”Un producto es más que una cosa”
                |, es una afirmación dada por el economista Philip Kotler, experto reconocido en el campo del <em>marketing</em>. El producto debe satisfacer las diferentes necesidades del consumidor y agregar valor (beneficios percibidos), de acuerdo con esto, Kotler afirma que existen cinco niveles de productos (los cuales se explicarán más adelante) de acuerdo con el grado de percepción de sus beneficios, indicando así, el valor que el consumidor le asigna al producto.
            .col-lg-12
              .cajon-editado
                .bloque-texto-d.color-primario.p-4
                  .bloque-texto-d__texto.mb-3
                    i.fas.fa-quote-left
                    p.text-regular Conjunto de atributos (características, funciones, beneficios y usos) que le dan la capacidad para ser intercambiado o usado. Usualmente, es una combinación de aspectos tangibles e intangibles. Así, un producto puede ser una idea, una entidad física (un bien), un servicio o cualquier combinación de los tres. El producto existe para propósitos de intercambio y para la satisfacción de objetivos individuales y organizacionales.
                    i.fas.fa-quote-right
                  .bloque-texto-d__autor 
                    .h6.mb-0 American Marketing Asociation (A.M.A.)
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/sAUSTEJgb5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.justify-content-center.mb-5
        .col-lg-7
          p(data-aos='fade-right') Los productos no solo incluyen los objetos que se pueden adquirir o comprar, como carros, computadores, teléfonos celulares, entre otros, esta definición también incluye aquello que no es tangible, pero que lo disfrutamos como eventos, ingreso a lugares, ideas, o una mezcla de todo esto. El concepto “producto” se aborda en el sentido más amplio que incluye todo lo anterior, así un carro Toyota, una moto Pulsar y un café de Juan Valdéz son productos, como también lo son un viaje a Santa Marta, una asesoría o una capacitación en línea.
            br
            br
            | Un consumidor solo estará satisfecho cuando el valor asignado sea igual o superior al valor esperado. A continuación, se muestran los niveles del producto:
        .col-lg-5: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/73.jpg')
      .row.justify-content-center.mb-5
        .col-lg-4.col-8.mb-3.mb-lg-0: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/74.jpg')
        .col-lg-8
          LineaTiempoD.lineaEditada
            p(numero="1" titulo="Producto principal") Un producto principal es cuando por ejemplo, se compra una chaqueta o suéter para protegerse del frío, no importa la marca, el precio, o material del abrigo, siempre que le resuelva su necesidad principal, en este caso: protección del clima.
            p(numero="2" titulo="Producto genérico") Hace referencia al que reúne varias cualidades o atributos. Siguiendo el ejemplo anterior del suéter, implica que a este se le suman atributos como el material, el color, el estilo, entre otros.
            p(numero="3" titulo="Expectativa del producto") La expectativa del producto la construye el consumidor al adquirir el producto, es lo que espera recibir de manera adicional. Por ejemplo, la chaqueta o suéter, no solo le servirá para el frío, también podrá utilizarlo en ocasiones especiales, en noches frías, en algunas fiestas o simplemente para lucirlo con sus amigos.
            p(numero="4" titulo="Producto aumentado") En el producto aumentado, están presentes todos los atributos que lo diferencian de otros productos de la competencia, por ejemplo: marca de la chaqueta o suéter, material, garantía, precio alto,  etc.
            p(numero="5" titulo="Potencial del producto") Hace referencia a los cambios o adaptaciones que puede tener el producto en un futuro, por ejemplo: el suéter se adquirió para protección del clima, pero en tiempo seco también podría usarse, siempre que le pueda quitar las mangas o no lo cierre hasta el cuello.
      .d-flex.align-items-center.justify-content-center.mb-3
        img(src="@/assets/curso/temas/dots-3.svg" style="width: 84px").me-3.d-lg-block.d-none
        p.mb-0(data-aos='fade-right') La propuesta de ciclo de vida del producto, se le atribuye a Theodore Levitt, publicado en la Harvard Business Review. De acuerdo con la teoría de Levitt, los productos tienen un ciclo de vida en relación con su permanencia en el mercado, por tanto, podemos hablar de cinco etapas como: desarrollo de producto, introducción, crecimiento, madurez y declive o decadencia, como se observa en la siguiente imagen.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7(data-aos='zoom-in')
          .titulo-sexto.color-acento-contenido
            h5 Figura 6 
            span Ciclo de vida del producto
          img(src='@/assets/curso/temas/75.svg')
      p.mb-5 La etapa de desarrollo del producto, es una etapa previa a la introducción, incluye fases como la investigación de mercados, el diseño de producto, prototipado, test de usuario, entre otras actividades que identifican la viabilidad del producto. En esta etapa no se generan ingresos o utilidades.
      .tarjeta.bg-white.p-5.mb-5
        p.text-center Algunos comportamientos importantes en cada etapa subsiguiente, son:
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/76.svg', alt='Texto que describa la imagen')
          div(x="31.5%" y="80.5%" tooltip="" numero="+")
            .h5.mb-4 Aspectos clave en la etapa de Introducción
            p Lento crecimiento de ventas. 
              br
              br
              |Las utilidades son negativas o mínimas.
              br
              br
              |Altos gastos de distribución y promoción. 
          div(x="46.5%" y="80.5%" tooltip="" numero="+")
            .h5.mb-4 Aspectos clave en la etapa de crecimiento
            p Incremento en las ventas.
              br
              br
              |Ingreso de nuevos competidores.
              br
              br
              |Estabilidad o disminución de precios.
              br
              br
              |Educación de los consumidores.
              br
              br
              |Aumento de utilidades.
              br
              br
              |Los costos de promoción y producción alcanzan economías de escala.
          div(x="61%" y="80.5%" tooltip="" numero="+")
            .h5.mb-4 Aspectos clave en la etapa de madurez
            p Disminución del crecimiento en las ventas.
              br
              br
              |Muchos proveedores.
              br
              br
              |Productos sustitutos.
              br
              br
              |Exceso de capacidad fomenta mayor competencia.
              br
              br
              |Mayor promoción, investigación y desarrollo para apoyar las ventas y aumentar las utilidades.

            .h5.mb-2 Acciones
            p Mercado
              br
              br
              |Producto 
              br
              br
              |Mezcla de <em>marketing</em> 
          div(x="75.7%" y="80.5%" tooltip="" numero="+")
            .h5.mb-4 Aspectos clave en la etapa de declive o decadencia Aumento de gastos
            p Disminución considerable de ventas, utilidades y  posicionamiento.
            .h5.mb-2 Acciones
            p Mantener el producto.
              br
              br
              |Innovación / Extensión.
              br
              br
              |Descartar el Producto.
        p.text-center Con el fin de ampliar el concepto y dar mayor nivel de entendimiento a las gráficas relacionadas con en el ciclo de vida del producto, observe el siguiente video. 
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/qxP87PYmQjk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1  Tipos de productos
      .d-flex.align-items-center.justify-content-center.mb-3
        img(src="@/assets/curso/temas/dots-3.svg" style="width: 84px").me-3.d-lg-block.d-none
        p.mb-0(data-aos='fade-right') Los productos se clasifican en dos grandes grupos: los productos de consumo y los productos industriales. <b>Los productos de consumo</b> son aquellos que se orientan al consumidor final para su uso personal o familiar; de otro lado, los <b>productos industriales</b> se adquieren para un procesamiento posterior o realizar un negocio, hacen mención a los insumos para hacer otros productos.
      .row.justify-content-center.mb-5
        .col-lg-5.col-8.mb-3.mb-lg-0: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/77.jpg')
        .col-lg-7
          .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
            .text-white: h4.mb-0.me-3 Productos de consumo
          ul.lista-ul--color
            li.mb-3
              i.fas.fa-dot-circle.fa-xs
              span.r-1 Conveniencia: 
              |se adquieren con frecuencia, de inmediato y sin comparación.
            li.mb-3
              i.fas.fa-dot-circle.fa-xs
              span.r-1 Compra: 
              |se adquieren con menor frecuencia y mayor comparación calidad – precio.
            li.mb-3
              i.fas.fa-dot-circle.fa-xs
              span.r-1 Especialidad: 
              | tienen identificación de marca. Hay esfuerzo por la compra.


            li.mb-3
              i.fas.fa-dot-circle.fa-xs
              span.r-1 No buscados: 
              | se conocen pero no es usual comprarlos.
      .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
        .text-white: h4.mb-0.me-3 Productos industriales
      .row.justify-content-center.mb-5(data-aos='zoom-in')
        .col-lg-3.mb-3.mb-lg-0
          .tarjeta.color-primario.p-4.h-100
            .d-flex.align-items-center.mb-3
              img(src='@/assets/curso/temas/78.svg' style='width:69px').me-3.mb-3.mb-lg-0
              h4.text-white.mb-0 De capital
            p Ayudan en la producción o las operaciones del comprador.
        .col-lg-3.mb-3.mb-lg-0
          .tarjeta.color-primario.p-4.h-100
            .d-flex.align-items-center.mb-3
              img(src='@/assets/curso/temas/79.svg' style='width:69px').me-3.mb-3.mb-lg-0
              h4.text-white.mb-0 Materiales y refacciones
            p Materias primas, materiales y componentes manufacturados.
        .col-lg-3.mb-3.mb-lg-0
          .tarjeta.color-primario.p-4.h-100
            .d-flex.align-items-center.mb-3
              img(src='@/assets/curso/temas/80.svg' style='width:69px').me-3.mb-3.mb-lg-0
              h4.text-white.mb-0 Suministros y servicios
            p Artículos para reparación , mantenimiento y servicios de negocios.
      p.mb-5 Al conocer el tipo de producto es posible definir cuál es el precio con el que puede lanzarse al mercado, identificar los canales de distribución en los que se puede comercializar, qué tipo de promoción, entre otros factores importantes, ayudarán a la construcción del plan de <em>marketing</em>.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2  Atributos del producto
      p.mb-5 Los atributos de un producto pueden ser tangibles e intangibles, y juntos, representan lo que puede denominarse “personalidad del producto”.
        br
        br
        |Aunque se presentan unos atributos que pueden ser comunes, estos pueden cambiar o valorarse de forma diferente, dependiendo del tipo de producto.
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/QrJ2hZkRpiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.justify-content-center.mb-5
          .col-lg-4.col-8.mb-3.mb-lg-0
            img(data-aos='zoom-in')(src='@/assets/curso/temas/80.jpg')
          .col-lg-8
            p Los principales atributos del producto son:
            TabsA.color-acento-contenido
              .tarjeta.bg-1-claro.p-4(titulo="Físicos")
                h5 Físicos
                p Son aquellos que por su material o técnica lo hacen apto para determinadas funciones y usos.
                img(src='@/assets/curso/temas/81.svg' style='width: 207px').m-auto
              .tarjeta.bg-1-claro.p-4(titulo="Precio")
                h5 Precio
                p Este atributo toma una gran importancia al momento de tomar la decisión de adquirir el producto.
                img(src='@/assets/curso/temas/82.svg' style='width: 207px').m-auto
              .tarjeta.bg-1-claro.p-4(titulo="Envase")
                h5 Envase
                p Es el elemento que protege al producto y que, junto al diseño, adquiere un gran valor promocional y de imagen.
                img(src='@/assets/curso/temas/83.svg' style='width: 207px').m-auto
              .tarjeta.bg-1-claro.p-4(titulo="Diseño")
                h5 Diseño
                p Permiten, en mayor o menor grado, la identificación del producto o la empresa. 
                img(src='@/assets/curso/temas/84.svg' style='width: 207px').m-auto
              .tarjeta.bg-1-claro.p-4(titulo="Marca")
                h5 Marca
                p Facilita la identificación del producto y que, asociado a otro atributo, permite su recuerdo.
                img(src='@/assets/curso/temas/85.svg' style='width: 207px').m-auto
              .tarjeta.bg-1-claro.p-4(titulo="Servicio")
                h5 Servicio
                p Conjunto de valores agregados a la compra del producto.
                img(src='@/assets/curso/temas/86.svg' style='width: 207px').m-auto
      p.mb-5 Existen otros atributos que, sin ser tangibles, juegan un papel importante en la toma de decisiones para la adquisición de un producto, estos son:
      .row.justify-content-center.mb-5
        .col-lg-4.col-8.mb-3.mb-lg-0
          .tarjeta.tarjeta-slide-arriba.color-secundario.p-5(style='min-height: 450px ')
            .tarjeta-slide-arriba__img
              img(src='@/assets/curso/temas/90.jpg')
            img(src='@/assets/curso/temas/87.svg' style='width: 99px').m-auto.mb-3
            .text-white.text-center
              h5 Imagen del producto
              p Percepción del producto que se crea en la mente del consumidor según la información recibida del producto.
        .col-lg-4.col-8.mb-3.mb-lg-0
          .tarjeta.tarjeta-slide-arriba.color-secundario.p-5(style='min-height: 450px ')
            .tarjeta-slide-arriba__img
              img(src='@/assets/curso/temas/91.jpg')
            img(src='@/assets/curso/temas/88.svg' style='width: 99px').m-auto.mb-3
            .text-white.text-center
              h5 Imagen de la empresa
              p Es una opinión generada en la memoria del mercado que interviene positiva o negativamente en los criterios y actitudes del consumidor hacia los productos. En muchos casos, compramos un producto porque la empresa que lo produce tiene una buena imagen o posicionamiento.
        .col-lg-4.col-8.mb-3.mb-lg-0
          .tarjeta.tarjeta-slide-arriba.color-secundario.p-5(style='min-height: 450px ')
            .tarjeta-slide-arriba__img
              img(src='@/assets/curso/temas/92.jpg')
            img(src='@/assets/curso/temas/89.svg' style='width: 99px').m-auto.mb-3
            .text-white.text-center
              h5 Calidad
              p Es la valoración de los elementos que componen el producto, en relación de unos estándares que miden las cualidades y lo comparan con la competencia.
      p(data-aos='fade-right').mb-5 Así como los atributos, las características de un producto se dividen en generales y técnicas. Se diferencian de los atributos porque al modificar una característica genera un cambio en el producto, no lo suficiente para indicar que es un producto diferente, pero si que sea susceptible de comercialización. Las características son:
      .row.justify-content-center.mb-5
        .col-lg-6(data-aos='zoom-in')
          .titulo-sexto.color-acento-contenido
            h5 Figura 7
            span Características de un producto
          figure
            img(src='@/assets/curso/temas/93.svg', alt='Texto que describa la imagen')
      .tarjeta.bg-claro.color-secundario.margin-n.texto-sistema.rounded-0.mb-5
        .row.justify-content-center
          .col-lg-3.col-8.mb-3.mb-lg-0: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/94.jpg')
          .col-lg-6
            .cajon.color-acento-contenido.bg-claro.p-3.mb-4
              p.mb-0 El empaque puede convertirse en el elemento más importante en el proceso de comunicación y venta de un producto, su diseño, forma y presentación, hacen que el producto sea visible en una estantería o vitrina y logre persuadir al consumidor para tomar una decisión de compra.
                br
                br
                |Así mismo, el empaque de un producto permite transportarlo de un lugar a otro, que el producto no sufra daños y lo mantiene limpio y fresco, en caso de que sea un alimento.
          .col-lg-3.col-8.mb-3.mb-lg-0: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/95.jpg')
          .col-12: p.mb-0 El empaque está más orientado al marketing y si bien, su objetivo es proteger el producto que lleva dentro, el principal objetivo es realmente vender. En algunos casos, el empaque suele ser lo mismo que el envase y tiene los siguientes elementos:
      TabsB.color-primario.mb-5
        .py-4.py-md-5(titulo="Etiqueta" :icono="require('@/assets/curso/temas/96.svg')")
          .row
            .col-md-6.mb-4.mb-md-0
              h4
                span.r-1 Etiqueta
              p La etiqueta es una parte del producto, usualmente adherida en el envase que tiene la finalidad de informar al cliente acerca de los principales atributos del producto, principalmente el nombre y marca. En segundo lugar, brinda información de las características, como ingredientes, componentes, peso, tamaño, indicaciones para su uso, modo de empleo, precauciones, fecha de expedición y de vencimiento, número de lote e instrucciones generales. Esta información puede cambiar de acuerdo con la normativa de cada país y el sector de la industria a la que pertenece el producto.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/99.jpg', alt='Texto que describa la imagen')
        .py-4.py-md-5(titulo="Envase" :icono="require('@/assets/curso/temas/97.svg')")
          .row
            .col-md-6.mb-4.mb-md-0
              h4
                span.r-1 Envase
              p Es el contenedor que está en contacto directo con el producto, permite su protección y evita su esparcimiento. Algunos ejemplos de envases son las bolsas de snacks, botellas de agua, la caja de un computador, entre otras. Al igual que el empaque, el envase también cumple la función de ofrecer una presentación adecuada del producto que facilite la venta, la manipulación, almacenamiento y distribución.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/100.jpg', alt='Texto que describa la imagen')
        .py-4.py-md-5(titulo="Embalaje" :icono="require('@/assets/curso/temas/98.svg')")
          .row
            .col-md-6.mb-4.mb-md-0
              h4
                span.r-1 Embalaje
              p El embalaje es una forma de empaque que, principalmente, cumple la función de transportar el producto de un lugar a otro, como parte de un proceso logístico. El embalaje no necesariamente es en cajas, también puede ser un envoltorio plástico que se pone alrededor de uno o varios productos envasados o empaquetados.
                br
                br
                |Los embalajes pueden clasificarse en 3 niveles:
                br
                br
                span.r-1 Primario: 
                |está en contacto directo con el producto.
                br
                span.r-1 Secundario: 
                |protege el empaque primario y se puede desechar al momento de que el producto es usado.
                br
                span.r-1 Terciario o de transporte: 
                |protege al producto al momento de transportarlo, especialmente en exportación o distribución.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/101.jpg', alt='Texto que describa la imagen')
















  </template>

<script>
export default {
  name: 'Tema3',
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
.img-infografica-b__modal
  background-color: #1e3149
.tabs-a__tab
  background-color: #e6e6e6
.bg-tema3
  background-image: url(../assets/curso/temas/bg-tema3.png)
  background-repeat: no-repeat
  background-size: 100% 100%
  background-position: start
.tabs-b.color-primario .tabs-b__tab--active
  span
    color: $color-primario
</style>
