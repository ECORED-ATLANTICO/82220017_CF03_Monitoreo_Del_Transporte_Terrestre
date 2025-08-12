<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas de monitoreo

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_2/img_1.png')
      .bloque-texto-t__texto.color-adicional-gradient.col-10.mb-0
        p.mb-0 Para una operación de transporte efectiva, las técnicas de monitoreo deben ser activas. No se trata solo de saber dónde está un vehículo, sino de comprender su estado, su ruta, su carga y las condiciones en las que operación
    
    .bg_img_3.mb-3

      separador

      .row.justify-content-center.align-items-center
        .col-12.col-lg-10.mb-3
          #t_2_1.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 2.1 Datos
          .mb-3
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-3.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_2/img_2.png', class="img-fluid")
        .col-12.col-lg-7
          .cajon.color-secundario-5.p-4.mb-3
            p.mb-0 El sistema de monitoreo cuenta con los datos recolectados por parte de los dispositivos que se estén empleando, estos deben ser de calidad, relevancia y que sean oportunos en la toma de decisiones.
      
      .row.justify-content-center.align-items-center
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            |    Sistema de datos de transporte
          figure
            img(src='@/assets/curso/temas/tema_2/img_3.svg', class="img-fluid d-none d-lg-block")
            img(src='@/assets/curso/temas/tema_2/img_4.svg', class="img-fluid d-block d-lg-none")
            figcaption <b>Fuente.</b> SENA, 2025.
    
    .bg_img_4.mb-3

      separador

      .row.justify-content-center.align-items-center
        .col-12.col-lg-10.mb-3
          #t_2_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 2.2 Registro de la operación
          .mb-3
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-2.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_2/img_5.png', class="img-fluid")
        .col-12.col-lg-8
          p.mb-0 El registro de la operación va más allá de simplemente almacenar datos; se trata de estructurarlos, analizarlos y convertirlos en información útil para la toma de decisiones. Este proceso es fundamental para la auditoría, la mejora continua y la rendición de cuentas.
      
      .bg_img_5.mb-3
        SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h5 Bases de datos
              p.mb-0 El sistema integra bases de datos escalables (<I>SQL</I>, <I>NoSQL</I>, series temporales) para gestionar grandes volúmenes de datos en tiempo real, con respaldo, redundancia y protocolos de seguridad. Incluye herramientas de visualización, mapas en tiempo real para monitoreo de flota y rutas, y alertas automáticas ante eventos críticos. Además, permite configurar <I>KPIs</I> clave como <I>OTIF</I>, consumo de combustible, velocidad promedio y tiempo de inactividad, enviando notificaciones por <I>SMS</I> o correo para una gestión eficiente y segura de operaciones logísticas.
            .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_2/img_6.png', class="img-fluid")
          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h5 Generación de informes y auditoría
              p.mb-3 <B>Informes programados y demanda:</B> creación de reportes sobre el rendimiento de la flota, comportamiento de los conductores, cumplimiento de rutas, consumo de combustible, y eventos de seguridad.
              p.mb-3 <B>Trazabilidad completa:</B> capacidad para reconstruir el historial de cualquier viaje, vehículo o carga en detalle, lo cual es invaluable para la resolución de disputas, reclamaciones de seguros y auditorías internas/externas.
              p.mb-0 <B>Análisis de desviaciones y excepciones:</B> identificación de patrones y causas de problemas recurrentes (retrasos, daños a la carga, consumo excesivo).
            .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_2/img_7.png', class="img-fluid")
          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h5 Integración con otros sistemas
              p.mb-0 
            .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_2/img_8.png', class="img-fluid")
          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h5  Análisis predictivo y prescriptivo
              p.mb-0 
            .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_2/img_9.png', class="img-fluid")
          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h5 
              p.mb-0 
            .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_2/img_10.png', class="img-fluid")


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

<style lang="sass"></style>
