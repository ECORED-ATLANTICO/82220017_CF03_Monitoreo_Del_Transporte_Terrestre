<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/sintesis/img_1.png', class="img-fluid")
      .col-12.col-lg-9
        p.mb-3 Los Sistemas de control y monitoreo en transporte son esenciales para la eficiencia y calidad del servicio, comenzando por un plan de la operación del transporte terrestre bien definido que abarca desde el concepto general hasta la especificación de rutas, recorridos autorizados, frecuencias y horarios. La implementación efectiva de este plan se logra mediante técnicas de monitoreo rigurosas, que incluyen la captura de datos clave y un registro de la operación detallado.
        .cajon.color-acento-contenido.p-4.mb-3
          p.mb-0 Todo esto se integra en un procedimiento que es a la vez continuo y sistemático, asegurando una supervisión constante. Los hallazgos se consolidan en un informe de seguimiento, que proporciona un seguimiento periódico y visibiliza los resultados de la ejecución. Por esta razón estos sistemas son fundamentales para garantizar la calidad del servicio, abordando su concepto, estableciendo criterios de evaluación claros y siguiendo un procedimiento estandarizado para la mejora continua.
    .row.justify-content-center
      .col-12.col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
