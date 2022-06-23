<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 En todo proceso organizacional, se requiere incrementar las ventas de su portafolio de productos de forma planificada y estratégica, satisfaciendo las necesidades de sus clientes de una forma asertiva. En este sentido, es importante que la empresa siga un proceso disciplinado y estructurado desde el momento de reunir la información necesaria del producto o servicio que recibirá el cliente, en el cual se describan los beneficios, atributos, líneas, entre otras características significativas.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5VXdP4i4pag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
