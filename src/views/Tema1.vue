<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Plan de la operación del transporte terrestre

    .row.justify-content-center.align-items-center
      .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/temas/tema_1/img_1.png', class="img-fluid") 
      .col-12.col-lg-8(data-aos="zoom-in-right")
        p.mb-3 Es la arquitectura fundamental que define cómo se ejecutarán cada movimiento de carga o pasajero por carretera. Es un documento que fusiona la estrategia y la táctica, traduciendo los requerimientos logísticos de la cadena de suministro en acciones operativas concretas, con el fin primordial de optimizar el uso de recursos y garantizar el cumplimiento de los objetivos de servicio. Su alcance va desde la selección del tipo de vehículo más adecuado hasta la programación milimétrica de cada entrega o servicio.
        p.mb-0 Los elementos esenciales de este plan, críticos para un sistema de control y monitoreo, incluyen:

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1 Concepto
    .mb-3

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src='@/assets/curso/temas/tema_1/img_2.png')
        .bloque-texto-t__texto.color-adicional-gradient.col-10.mb-0
          p.mb-0 Se refiere a la visión estratégica que subyace a la operación de transporte. El propósito principal (ej. eficiencia en la entrega, reducción de costos, expansión de mercado), los objetivos medibles y el marco general que guiará todas las actividades. Implica una coordinación profunda entre la demanda prevista, la disponibilidad de la flota, la asignación de personal y los objetivos empresariales a corto y largo plazo.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2 Rutas
    .mb-3

    .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_3.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Son los itinerarios geográficos predefinidos que los vehículos deben seguir. La selección y, especialmente, la optimización de rutas son tareas críticas. 
          p.mb-0 Se analizan factores como la distancia, el tiempo estimado de viaje, el tipo y estado de las vías, la presencia de peajes, las restricciones vehiculares (altura, peso, tipo de carga), los puntos exactos de entrega y recogida, y las condiciones de seguridad en cada tramo. 
          p.mb-0 La optimización de rutas, que puede ser estática (predefinida) o dinámica (adaptándose en tiempo real a las condiciones del tráfico o nuevas órdenes), busca minimizar costos operativos (combustible, mantenimiento, horas extra del personal) y tiempos de tránsito, maximizando simultáneamente la capacidad de entrega y la eficiencia.
          
    separador

    .row.justify-content-center.align-items-center
      .col-12.col-lg-10.mb-3
        #t_1_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.3 Recorridos autorizados
        .mb-3
    .row.justify-content-center.align-items-center
      .col-12.col-lg-6.mb-lg-0.order-2.order-lg-1.mb-3(data-aos='zoom-in-right')
        p.mb-4 Son segmentos de rutas o itinerarios completos que requieren aprobación específica por parte de autoridades competentes que son designados internamente por la empresa para operaciones que implican cargas especiales, acceso a zonas restringidas o requisitos de seguridad particulares.
        .row.justify-content-center.align-items-center
          .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/temas/tema_1/img_4.png', class="img-fluid")
          .col-12.col-lg-10(data-aos='zoom-in-right')
            .tarjeta.color-acento-contenido-5.p-4.rounded-0.mb-0
               p.mb-0 Su cumplimiento es crucial no solo para la legalidad de la operación, sino también para la seguridad pública y la integridad de la carga. En un sistema de monitoreo, la geocercas se utiliza comúnmente para asegurar que los vehículos se mantengan dentro de estos recorridos autorizados.
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos='zoom-in-right')
        figure
          img(src='@/assets/curso/temas/tema_1/img_5.png', class="img-fluid")

    .bg_img_2.mb-3

      separador

      #t_1_4.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 1.4 Frecuencias y horarios
      .mb-3

      p.mb-5 La frecuencia determina la periodicidad de los viajes, mientras que los horarios establecen las ventanas de tiempo precisas para la salida de los vehículos, las llegadas a puntos intermedios y las entregas finales. Una planificación precisa de frecuencias y horarios es vital para:
    
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-primario-5.h-100 
                .tarjeta--1
                .tarjeta--slider__content.text-center Maximizar la utilización de la flota y la fuerza laboral, evitando tiempos muertos.
              .tarjeta--color-primario-5.h-100 
                .tarjeta--2
                .tarjeta--slider__content.text-center Minimizar los tiempos de espera en puntos de carga/descarga y los costos asociados.
              .tarjeta--color-primario-5.h-100 
                .tarjeta--3 
                .tarjeta--slider__content.text-center Garantizar el cumplimiento de las ventanas de entrega pactadas con los clientes, un factor clave de satisfacción.
              .tarjeta--color-primario-5.h-100 
                .tarjeta--4
                .tarjeta--slider__content.text-center.mb-5 Sincronizar eficientemente con otros nodos de la cadena de suministro, como almacenes, centros de distribución o puertos.
              .tarjeta--color-primario-5.h-100 
                .tarjeta--5
                .tarjeta--slider__content.text-center Gestionar el impacto de la congestión vial y evitar restricciones horarias en zonas urbanas.
        .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/temas/tema_1/img_11.png', class="img-fluid")
    .row.justify-content-center.align-items-center
      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          |    Planificación de frecuencias y horarios
        figure
          img(src='@/assets/curso/temas/tema_1/img_12.svg', class="img-fluid d-none d-lg-block")
          img(src='@/assets/curso/temas/tema_1/img_13.svg', class="img-fluid d-block d-lg-none")
          figcaption <b>Fuente.</b> SENA, 2025.
     



 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
