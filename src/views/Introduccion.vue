<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .tarjeta.color-primario-10.rounded-0.p-0.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0
          figure.p-0
            img(src="@/assets/curso/introduccion/img_1.png", class="img-fluid").p-0
        .col-12.col-lg-7.p-5
          p.mb-0 El panorama operativo del transporte ha evolucionado, pasando de una gestión reactiva y manual a un modelo impulsado por la inteligencia de datos. En este sentido, el programa de sistema de control y monitoreo en transporte se fundamenta en la columna vertebral de la transformación digital, brindando una visibilidad sin precedentes. Su esencia radica en ser una integración de tecnología y metodología cuyo fin de recopilación, transmisión, procesamiento y análisis en tiempo real de datos operativos. Estos datos hacen parte de los activos móviles, infraestructuras y actores viales, con el objetivo primordial de optimizar la eficiencia, reforzar la seguridad, reducir costos y perfeccionar la toma de decisiones estratégicas en todo el ecosistema del transporte.
    .bg_img_1.mb-3
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/PMzSKCTYZIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
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

<style lang="sass"></style>
