<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Calidad del servicio.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_5/img_1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La calidad del servicio no solo implica el uso de tecnologías avanzadas de rastreo y comunicación en tiempo real, sino también la eficiencia en la supervisión de rutas, la seguridad de la carga y la atención inmediata ante eventualidades. La calidad se refleja en la reducción de riesgos, el cumplimiento de tiempos de entrega y la generación de confianza en los usuarios, aspectos que fortalecen la competitividad y la sostenibilidad de las organizaciones dentro del sector del transporte.

   
    separador

    .bg_img_9.mb-3
    
      #t_5_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 5.1. Concepto
      .mb-3
      
        p.mb-0 Se define como la capacidad de una empresa para no solo cumplir, sino idealmente superar, las expectativas de sus clientes en relación con el movimiento de su carga o el servicio de traslado de pasajeros, abarca la totalidad de la experiencia del cliente, desde el primer contacto y la cotización hasta el momento post-entrega, buscando generar valor, fomentar la lealtad y construir una reputación sólida en el mercado. En un sistema de control y monitoreo, la calidad del servicio es un resultado directo de la eficiencia y la seguridad de los procesos.
    
      .row.justify-content-center.align-items-stretch.mb-3
        .col-12.col-lg-10.mb-3(data-aos="zoom-in-right")
          p.mb-3 Se centra en varios pilares:
        .col-12.col-md-6.col-lg-4.col-xl-3.mb-3(data-aos="zoom-in-right")
          .tarjeta-numerada.color-acento-botones.pt-3.pb-3.ps-5.pe-3.h-100.d-flex.flex-column.align-items-center
            .tarjeta-numerada__numero.mx-auto
              figure
                img(src='@/assets/curso/temas/tema_5/img_2.png', class="img-fluid")
            p.mb-0 <B>Fiabilidad:</B> cumplir lo prometido de manera consistente (entregar a tiempo, en la cantidad correcta y en las condiciones esperadas).
        .col-12.col-md-6.col-lg-4.col-xl-3.mb-3(data-aos="zoom-in-right")
          .tarjeta-numerada.color-acento-botones.pt-3.pb-3.ps-5.pe-3.h-100.d-flex.flex-column.align-items-center
            .tarjeta-numerada__numero
              figure
                img(src='@/assets/curso/temas/tema_5/img_3.png', class="img-fluid")
            p.mb-0 <B>Capacidad de respuesta:</B> rapidez y disposición para atender solicitudes, resolver problemas y adaptarse a imprevistos.
        .col-12.col-md-6.col-lg-4.col-xl-4.mb-3(data-aos="zoom-in-right")
          .tarjeta-numerada.color-acento-botones.pt-3.pb-3.ps-5.pe-3.h-100.d-flex.flex-column.align-items-center
            .tarjeta-numerada__numero
              figure
                img(src='@/assets/curso/temas/tema_5/img_4.png', class="img-fluid")
            p.mb-0 <B>Seguridad:</B> garantía de que la carga o los pasajeros llegarán sin daños, pérdidas o incidentes, y que se cumplen todas las normativas.
        .col-12.col-md-6.col-lg-4.col-xl-3.mb-3(data-aos="zoom-in-right")
          .tarjeta-numerada.color-acento-botones.pt-3.pb-3.ps-5.pe-3.h-100.d-flex.flex-column.align-items-center
            .tarjeta-numerada__numero
              figure
                img(src='@/assets/curso/temas/tema_5/img_5.png', class="img-fluid")
            p.mb-0 <B>Empatía:</B> atención personalizada, comprensión de las necesidades específicas del cliente y trato amable por parte del personal.
        .col-12.col-md-6.col-lg-4.col-xl-3.mb-3(data-aos="zoom-in-right")
          .tarjeta-numerada.color-acento-botones.pt-3.pb-3.ps-5.pe-3.h-100.d-flex.flex-column.align-items-center
            .tarjeta-numerada__numero
              figure
                img(src='@/assets/curso/temas/tema_5/img_6.png', class="img-fluid")
            p.mb-0 <B>Angibles:</B> la apariencia de los vehículos, equipos y el personal; la calidad de los documentos y la tecnología utilizada.
        .col-12.col-md-6.col-lg-4.col-lg-4.mb-3(data-aos="zoom-in-right")
          .tarjeta-numerada.color-acento-botones.pt-3.pb-3.ps-5.pe-3.h-100.d-flex.flex-column.align-items-center
            .tarjeta-numerada__numero
              figure
                img(src='@/assets/curso/temas/tema_5/img_7.png', class="img-fluid")
            p.mb-0 <B>Comunicación proactiva:</B> informar al cliente sobre el estado de su envío antes de que pregunte, incluyendo posibles demoras o novedades.

    separador

    #t_5_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.2 Criterios de evaluación
    .mb-3

    p.mb-5 Para medir y gestionar la calidad del servicio de forma objetiva, se establecen criterios y <I>KPIs</I> específicos:


    .bg_img_5.mb-3(data-aos="zoom-in-right")
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
        .row.justify-content-center.align-items-center(data-aos="zoom-in-right")
          .col-12.col-lg-3.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_5/img_8.png', class="img-fluid")
          .col-12.col-lg-8.mb-0
            ul.list-unstyled
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FF9854; font-size: 15px; line-height: 1.5;").mb-0
                span <B>Fiabilidad de la entrega</B> <I>(On-Time Delivery - OTD):</I> porcentaje de entregas realizadas dentro de la ventana de tiempo acordada.
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FF9854; font-size: 15px; line-height: 1.5;").mb-0
                span <B>Integridad de la carga:</B> porcentaje de entregas sin daños, pérdidas o mermas.
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FF9854; font-size: 15px; line-height: 1.5;").mb-0
                span <B>Tiempo de respuesta a consultas/reclamos:</B> promedio de tiempo para atender y resolver las inquietudes del cliente.
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FF9854; font-size: 15px; line-height: 1.5;").mb-0
                span <B>Índice de reclamos:</B> número de quejas por cada "X" envíos o servicios.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FF9854; font-size: 15px; line-height: 1.5;").mb-0
                span <B>Satisfacción del cliente <I>(CSAT/NPS):</I></B> medido a través de encuestas o <I>Net Promoter Score</I>, reflejando la percepción general.
        .row.justify-content-center.align-items-center
          .col-12.col-lg-3.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_5/img_9.png', class="img-fluid")
          .col-12.col-lg-8.mb-0
            ul.list-unstyled
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FF9854; font-size: 15px; line-height: 1.5;").mb-0
                span <B>Precisión de la información:</B> errores en la documentación, facturación o seguimiento.
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FF9854; font-size: 15px; line-height: 1.5;").mb-0
                span <B>Profesionalismo del personal:</B> evaluación de la conducta y el servicio del conductor y el personal de soporte.
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FF9854; font-size: 15px; line-height: 1.5;").mb-0
                span <B>Flexibilidad operacional:</B> capacidad de adaptarse a cambios de último minuto en la planificación.
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FF9854; font-size: 15px; line-height: 1.5;").mb-0
                span <B>Procedimiento para la evaluación de la calidad del servicio:</B> para garantizar una evaluación sistemática y accionable de la calidad, se implementan procedimientos que pueden incluir:
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FF9854; font-size: 15px; line-height: 1.5;").mb-0
                span <B>Implementación de encuestas de satisfacción:</B> encuestas post-servicio, llamadas de seguimiento, o formularios <i>web</i> para recopilar directo del cliente.
        .row.justify-content-center.align-items-center
          .col-12.col-lg-3.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_5/img_10.png', class="img-fluid")
          .col-12.col-lg-8.mb-0
            ul.list-unstyled
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FF9854; font-size: 15px; line-height: 1.5;").mb-0
                span <B>Sistema de gestión de quejas y sugerencias:</B> : un proceso estandarizado para registrar, clasificar, investigar y resolver los reclamos de los clientes, y para capitalizar sus sugerencias de mejora.
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FF9854; font-size: 15px; line-height: 1.5;").mb-0
                span <B>Monitoreo continuo de <I>KPIs</I> de servicio:</B> uso del sistema de control y monitoreo para seguir en tiempo real indicadores como el <I>OTD</I>, tasa de daños o tiempo de resolución de incidencias.
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FF9854; font-size: 15px; line-height: 1.5;").mb-0
                span <B>Auditorías de servicio:</B> evaluaciones internas o externas de los procesos que impactan al cliente para asegurar el cumplimiento de los estándares de calidad.
              li.d-flex.align-items-start.mb-3.border-bottom.border-dashed.pb-2
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FF9854; font-size: 15px; line-height: 1.5;").mb-0
                span <B>Análisis de la voz del cliente:</B> recopilación y análisis de comentarios en redes sociales, foros o plataformas de reseñas para entender percepciones no solicitadas.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FF9854; font-size: 15px; line-height: 1.5;").mb-0
                span <B><I>Benchmarking</I> de servicio:</B> comparación del desempeño con los líderes del sector para identificar las mejores prácticas y áreas de oportunidad.
    <br><br>
    separador

    #t_5_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.3 Procedimiento
    .mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/temas/tema_5/img_11.png', class="img-fluid")
      .col-12.col-lg-9
        .cajon.color-secundario-5.p-4.mb-3(data-aos="zoom-in-right")
          p.mb-0 Esta etapa debe incluir un estudio detallado de la infraestructura tecnológica existente, el perfil de la flota, los procesos logísticos actuales y las capacidades del personal. A partir de este diagnóstico, se elige la solución tecnológica más adecuada, ya sea un sistema modular o una plataforma integral de gestión.
        p.mb-0 Una vez seleccionada la tecnología, la instalación del <I>hardware</I> como sensores de vehículo, cámaras, <I>GPS</I>, lectores de diagnóstico y dispositivos <I>IoT</I> debe ejecutarse de forma meticulosa para asegurar su correcto funcionamiento en diferentes tipos de vehículos y condiciones operativas. En paralelo, se configura el <I>software</I> de monitoreo, incluyendo los parámetros clave a seguir (velocidad, temperatura, consumo, tiempos de descanso, etc.) y se establece la arquitectura para el análisis y visualización de datos. Es clave integrar este sistema con otros existentes (como <I>ERP, TMS o WMS</I>) para evitar silos de información.

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
      h5 Figura 2.
      |    Pasos del procedimiento de calidad de servicio
    figure.mb-5(data-aos="zoom-in-right")
      img(src='@/assets/curso/temas/tema_5/img_12.png', class="img-fluid d-none d-lg-block mb-3" Alt="La figura muestra el paso a paso para la implementación y la gestión para la implementación y gestión de un procedimiento  de calidad de servicio. Selección de tecnología: elección de soluciones de hardware y software. Instalación de hardware: implementación de dispositivos en vehículos. Configuración del software: establecimiento de parámetros y análisis de datos. Capacitación del personal: capacitaciones de operadores, despachadores y analistas. Gestión de datos: aseguramiento de la calidad y seguridad de los datos.")
      img(src='@/assets/curso/temas/tema_5/img_13.png', class="img-fluid d-block d-lg-none mb-3" Alt="La figura muestra el paso a paso para la implementación y la gestión para la implementación y gestión de un procedimiento  de calidad de servicio. Selección de tecnología: elección de soluciones de hardware y software. Instalación de hardware: implementación de dispositivos en vehículos. Configuración del software: establecimiento de parámetros y análisis de datos. Capacitación del personal: capacitaciones de operadores, despachadores y analistas. Gestión de datos: aseguramiento de la calidad y seguridad de los datos.")
      img(src='@/assets/curso/temas/tema_5/img_14.png', class="img-fluid d-block d-lg-none mb-3" Alt="La figura muestra el paso a paso para la implementación y la gestión para la implementación y gestión de un procedimiento  de calidad de servicio. Selección de tecnología: elección de soluciones de hardware y software. Instalación de hardware: implementación de dispositivos en vehículos. Configuración del software: establecimiento de parámetros y análisis de datos. Capacitación del personal: capacitaciones de operadores, despachadores y analistas. Gestión de datos: aseguramiento de la calidad y seguridad de los datos.")
      img(src='@/assets/curso/temas/tema_5/img_15.png', class="img-fluid d-block d-lg-none mb-3" Alt="La figura muestra el paso a paso para la implementación y la gestión para la implementación y gestión de un procedimiento  de calidad de servicio. Selección de tecnología: elección de soluciones de hardware y software. Instalación de hardware: implementación de dispositivos en vehículos. Configuración del software: establecimiento de parámetros y análisis de datos. Capacitación del personal: capacitaciones de operadores, despachadores y analistas. Gestión de datos: aseguramiento de la calidad y seguridad de los datos.")
      figcaption(data-aos="zoom-in-right") <b>Fuente:</b> SENA, 2025.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="zoom-in-right")
          h5 Figura 3.
          |    Implementación y gestión
        figure(data-aos="zoom-in-right")
          img(src='@/assets/curso/temas/tema_5/img_16.svg', class="img-fluid d-none d-lg-block mb-3" Alt="La figura muestra Implementación y gestión.")
          img(src='@/assets/curso/temas/tema_5/img_17.svg', class="img-fluid d-block d-lg-none mb-3" Alt="La figura muestra Implementación y gestión.")
          figcaption(data-aos="zoom-in-right") <b>Fuente:</b> SENA, 2025.
</template>

<script>
export default {
  name: 'Tema5',
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
