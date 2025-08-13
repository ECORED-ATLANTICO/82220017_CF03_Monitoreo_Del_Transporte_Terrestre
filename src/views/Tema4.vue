<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Informe de seguimiento

    .bloque-texto-g.bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_4/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es una herramienta de gestión esencial dentro de un sistema de control y monitoreo del transporte. 
        p.mb-0 Se trata de un documento estructurado y analítico que sintetiza y presenta los resultados del monitoreo y la evaluación de la operación de transporte durante un periodo determinado (ej. un día, una semana, un mes, un trimestre). 
        p.mb-0 Su propósito primordial es comunicar de forma clara y concisa el desempeño alcanzado, identificar tendencias clave, resaltar cualquier desviación significativa respecto al plan original o a los objetivos establecidos, y proponer acciones correctivas o de mejora continua.
    
    .bg_img_8.mb-4

      separador

      #t_4_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 4.1 Seguimiento periódico
      .mb-3

      p.mb-5(data-aos="zoom-in-right") Se define en función de la criticidad de las operaciones, la velocidad de los cambios en el entorno y las necesidades de información para la toma de decisiones estratégicas y tácticas. Un seguimiento constante y bien estructurado permite a la gerencia y a los equipos operativos:
      
      .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
        SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-4").p-2.rounded-3
          .tarjeta--color-primario-5.h-100 
            .row.justify-content-center.align-items-center.mb-3
              .col-10.col-lg-8.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_4/img_2.png', class="img-fluid")
              h5.mb-3.text-center.fw-bold Detectar problemas y anomalías a tiempo 
              p.mb-0.text-center  Permite identificar rápidamente desviaciones de rendimiento antes de que se conviertan en crisis mayores.
          .tarjeta--color-primario-5.h-100 
            .row.justify-content-center.align-items-center.mb-3
              .col-10.col-lg-8.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_4/img_3.png', class="img-fluid")
              h5.mb-3.text-center.fw-bold Evaluar la efectividad de acciones correctivas
              p.mb-0.text-center Verificar si las medidas implementadas para resolver problemas anteriores están teniendo el impacto deseado.
          .tarjeta--color-primario-5.h-100 
            .row.justify-content-center.align-items-center.mb-3
              .col-10.col-lg-8.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_4/img_4.png', class="img-fluid")
              h5.mb-3.text-center.fw-bold Ajustar planes operativos
              p.mb-0.text-center Modificar rutas, frecuencias o asignaciones de recursos según las condiciones cambiantes del mercado, el tráfico o el clima.
          .tarjeta--color-primario-5.h-100 
            .row.justify-content-center.align-items-center.mb-3
              .col-10.col-lg-8.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_4/img_5.png', class="img-fluid")
              h5.mb-3.text-center.fw-bold Mantener informadas a las partes interesadas
              p.mb-0.text-center Proporcionar transparencia y rendición de cuentas a clientes, proveedores y equipos internos sobre el estado de las operaciones.
          .tarjeta--color-primario-5.h-100 
            .row.justify-content-center.align-items-center.mb-3
              .col-10.col-lg-8.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_4/img_6.png', class="img-fluid")
              h5.mb-3.text-center.fw-bold Identificar tendencias
              p.mb-0.text-center Observar patrones de comportamiento a largo plazo que puedan indicar problemas estructurales o nuevas oportunidades

    separador

    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2 Resultados de la ejecución
    .mb-3

    p.mb-5 Se ven reflejados con base al desempeño real de la operación. utilizando Indicadores Clave de Rendimiento <I>(KPIs)</I> previamente definidos, comparándolos sistemáticamente con los objetivos, estándares o promedios históricos. Ejemplos de resultados y análisis que se incluyen:
    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-sm-6.col-xl-3.mb-lg-0.mb-3.d-flex(data-aos="zoom-in-left")
        .tarjeta.tarjeta-slide.izquierda.color-acento-contenido-20.h-100.w-100.d-flex.flex-column(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.mb-0 <B>Indicador de eficiencia operativa:</B> porcentaje de entregas a tiempo <I>(OTD)</I>, consumo promedio de combustible por kilómetro, utilización de la capacidad de la flota, productividad por vehículo o conductor.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_4/img_7.png')})`}")
      .col-12.col-sm-6.col-xl-3.mb-lg-0.mb-3.d-flex(data-aos="zoom-in-up")
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido-20.h-100.w-100.d-flex.flex-column(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.mb-0 <B>Indicador de seguridad:</B> número de incidentes o accidentes, índice de accidentalidad, cumplimiento de límites de velocidad, adherencia a los tiempos de descanso de los conductores.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_4/img_8.png')})`}")
      .col-12.col-sm-6.col-xl-3.mb-lg-0.mb-3.d-flex(data-aos="zoom-in-down")
        .tarjeta.tarjeta-slide.abajo.color-acento-contenido-20.h-100.w-100.d-flex.flex-column(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.mb-0 <B>Indicador de costo:</B> costo promedio por entrega, costo por kilómetro recorrido, gasto en mantenimiento por vehículo, costos de demoras.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_4/img_9.png')})`}")
      .col-12.col-sm-6.col-xl-3.mb-lg-0.mb-3.d-flex(data-aos="zoom-in-right")
        .tarjeta.tarjeta-slide.derecha.color-acento-contenido-20.h-100.w-100.d-flex.flex-column(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.mb-0 <B>Indicador de calidad de servicio:</B> tasa de reclamos, índice de satisfacción del cliente, porcentaje de carga dañada/perdida, tiempo promedio de respuesta a consultas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_4/img_10.png')})`}")
      

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

<style lang="sass"></style>
