<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Procedimiento

    #t_3_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.1 Proceso continuo
    .mb-3

    p.mb-4(data-aos="zoom-in-right") El monitoreo continuo en el transporte es más que solo seguir un vehículo; es una vigilancia constante que permite la detección temprana de anomalías, la optimización en tiempo real y la mejora continua de las operaciones.
    
    h3(data-aos='zoom-in-right').mb-5
      span.label-title Aspectos para desarrollar
    
    .bg_img_6.mb-4
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-sm-6.col-xl-3.mb-lg-0.mb-3.d-flex(data-aos="zoom-in-left")
          .tarjeta.tarjeta-slide.izquierda.color-acento-contenido-20.h-100.w-100.d-flex.flex-column(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                p.mb-0 <B>Monitoreo en tiempo real:</B> 
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_2.png')})`}")
        .col-12.col-sm-6.col-xl-3.mb-lg-0.mb-3.d-flex(data-aos="zoom-in-up")
          .tarjeta.tarjeta-slide.arriba.color-acento-contenido-20.h-100.w-100.d-flex.flex-column(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                p.mb-0 <B>Tecnologías habilitadoras:</B> profundizar en el uso de <I>GPS</I> avanzado, telemática, <I>IoT</I> (Internet de las Cosas) para la recolección de datos en vivo. Explicar cómo los sensores (temperatura, humedad, vibración, apertura de puertas) proveen información crítica para la integridad de la carga.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_3.png')})`}")
        .col-12.col-sm-6.col-xl-3.mb-lg-0.mb-3.d-flex(data-aos="zoom-in-down")
          .tarjeta.tarjeta-slide.abajo.color-acento-contenido-20.h-100.w-100.d-flex.flex-column(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                p.mb-0 <B>Visualización:</B> mostrar ejemplos de paneles de control interactivos que permitan a los operadores visualizar la ubicación de la flota, el estado de los envíos, las alertas activas y los <I>KPIs</I> en tiempo real.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_4.png')})`}")
        .col-12.col-sm-6.col-xl-3.mb-lg-0.mb-3.d-flex(data-aos="zoom-in-right")
          .tarjeta.tarjeta-slide.derecha.color-acento-contenido-20.h-100.w-100.d-flex.flex-column(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                p.mb-0 <B>Geocercas y rutas optimizadas:</B> explicar cómo la creación de límites virtuales (geocercas) genera alertas automáticas al entrar o salir de zonas predefinidas, y cómo la optimización de rutas se ajusta continuamente con el tráfico y las condiciones.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_5.png')})`}")
      
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10.mb-3
          h3(data-aos='zoom-in-right').mb-3
            span.label-title Gestión de incidentes proactiva
            
      .row.justify-content-center.align-items-center.mb-3
        .col-8.col-lg-3.mb-lg-0.mb-4(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/temas/tema_3/img_6.png', class="img-fluid")
        .col-12.col-lg-7.mb-lg-0.mb-3
          .row.justify-content-center.align-items-center
            .col-12.mb-3(data-aos="zoom-in-right")
              .tarjeta-numerada.color-acento-botones.pt-3.pb-3.ps-5.pe-3 
                .tarjeta-numerada__numero
                  figure
                    img(src='@/assets/curso/temas/tema_3/img_7.png', class="img-fluid")
                p.mb-0 <B>Alertas y notificaciones automatizadas:</B> detallar cómo el sistema genera alertas instantáneas por desviaciones de ruta, paradas no programadas, excesos de velocidad, aperturas de puertas o variaciones de temperatura.

            .col-12.mb-3(data-aos="zoom-in-right")
              .tarjeta-numerada.color-acento-botones.pt-3.pb-3.ps-5.pe-3
                .tarjeta-numerada__numero
                  figure
                    img(src='@/assets/curso/temas/tema_3/img_8.png', class="img-fluid")
                p.mb-0 <B>Protocolos de respuesta:</B> desarrollar casos prácticos sobre cómo se activan los protocolos de respuesta ante incidentes, incluyendo la comunicación con conductores, personal de seguridad y clientes afectados.
            
            .col-12.mb-0(data-aos="zoom-in-right")
              .tarjeta-numerada.color-acento-botones.pt-3.pb-3.ps-5.pe-3
                .tarjeta-numerada__numero
                  figure
                    img(src='@/assets/curso/temas/tema_3/img_9.png', class="img-fluid")
                p.mb-0 <B>Recuperación y resiliencia:</B> explorar estrategias para la recuperación rápida de la operación después de un incidente y cómo el monitoreo continuo contribuye a la resiliencia de la cadena de suministro.

    h3(data-aos='zoom-in-right').mb-4
      span.label-title Optimización dinámica

    .row.justify-content-center.align-items-stretch
      .col-12.col-sm-6.col-lg-4.mb-lg-0.mb-4.d-flex(data-aos="zoom-in-right")
        .tarjeta.color-acento-contenido-5.p-4.h-100.w-100.d-flex.flex-column
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema_3/img_10.png', class="img-fluid")
          p.mb-0 <B>Recopilación de datos para análisis predictivo:</B> explicar cómo el flujo constante de datos alimenta algoritmos de análisis predictivo para prever posibles retrasos, problemas de mantenimiento o congestiones.
      .col-12.col-sm-6.col-lg-4.mb-lg-0.mb-4.d-flex(data-aos="zoom-in-right")
        .tarjeta.color-acento-contenido-5.p-4.h-100.w-100.d-flex.flex-column
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema_3/img_11.png', class="img-fluid")
          p.mb-0 <B>Ajustes en ruta:</B> el monitoreo continuo permite tomar decisiones en tiempo real para desviar vehículos, reasignar entregas o ajustar horarios en función de eventos inesperados.
      .col-12.col-sm-6.col-lg-4.mb-lg-0.mb-4.d-flex(data-aos="zoom-in-right")
        .tarjeta.color-acento-contenido-5.p-4.h-100.w-100.d-flex.flex-column
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema_3/img_12.png', class="img-fluid")
          p.mb-0 <B>Mejora de la eficiencia operacional:</B> el monitoreo constante de patrones de conducción, consumo de combustible y tiempos de entrega contribuye a la reducción de costos operativos y la mejora de la eficiencia.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2 Proceso sistemático
    .mb-3

    .bloque-texto-t.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_3/img_13.png')
      .bloque-texto-t__texto.color-adicional-gradient.col-10.mb-0
        p.mb-0 El control y monitoreo asegura que todos los componentes de la operación logística trabajen en conjunto, bajo un marco estructurado de políticas, procedimientos y tecnologías. Esto permite una gestión integral y una mejora sostenible.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-3
        h3(data-aos='zoom-in-right').mb-3
          span.label-title Integración tecnológica
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-3
        TabsA.mb-0.tarjeta-tabs-a.color-primario-10
          .tarjeta.color-primario-20.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Sistemas Integrados <I>(ERP, TMS, WMS)</I>")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-8.order-2.order-lg-1.mb-0
                p.mb-0 explicar la importancia de la integración bidireccional entre los sistemas de control y monitoreo con otros sistemas de gestión
              .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_14.png', class="img-fluid")
          .tarjeta.color-primario-20.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Plataformas centralizadas")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-8.order-2.order-lg-1.mb-0
                p.mb-0 describir cómo una plataforma centralizada consolida datos de diferentes fuentes (flota, inventario, pedidos, clientes) para una visión holística de la operación logística.
              .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_15.png', class="img-fluid")
          .tarjeta.color-primario-20.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Interoperabilidad y <I>APIs</I>")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-8.order-2.order-lg-1.mb-0
                p.mb-0 discutir el rol de las <i>APIs (Application Programming Interfaces)</i> en la facilitación de la comunicación entre diferentes sistemas y la importancia de estándares de datos.
              .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_16.png', class="img-fluid")
          
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-3
        h3(data-aos='zoom-in-right').mb-3
          span.label-title Análisis de datos y reportes estructurados
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-5.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/temas/tema_3/img_17.png', class="img-fluid")
      .col-12.col-lg-5.mb-3
        p.mb-3 <B><I>KPIs</I> y métricas de desempeño:</B> definir los indicadores clave de rendimiento <I>(KPIs)</I> específicos para el control y monitoreo (puntualidad de entregas, kilómetros recorridos, consumo de combustible, tiempo de inactividad, incidentes de seguridad).
        p.mb-0 <B>Herramientas de <I>Business Intelligence (BI):</I></B> introducir herramientas de <I>BI</I> que permitan la generación de informes estructurados y personalizables sobre el rendimiento de la flota, el comportamiento del conductor, la eficiencia de las rutas y los costos operativos.
      .col-12.col-lg-10
        .tarjeta.color-adicional-1.p-4.rounded-0.mb-0(data-aos="zoom-in-right")
          p.mb-0 <B>Análisis histórico y tendencias:</B> explicar cómo el análisis de datos históricos permite identificar tendencias, patrones y cuellos de botella, sirviendo como base para decisiones estratégicas y mejoras a largo plazo.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-3
        h3(data-aos='zoom-in-right').mb-3
          span.label-title Estándares y procesos documentados 

    .bg_img_7.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-7.order-2.order-lg-1
          .row.justify-content-center.align-items-center
            .col-12.mb-3(data-aos="zoom-in-right")
              .tarjeta-numerada.color-primario.pt-3.pb-3.ps-5.pe-3 
                .tarjeta-numerada__numero
                  figure
                    img(src='@/assets/curso/temas/tema_3/img_18.png', class="img-fluid")
                p.mb-0 <B><I>SOPs (Standard Operating Procedures):</i></B> detallar la creación y aplicación de procedimientos operativos estándar <I>(SOPs)</I> para el uso de los sistemas de monitoreo, la gestión de alertas, la comunicación interna y externa, y la resolución de problemas.

            .col-12.mb-3(data-aos="zoom-in-right")
              .tarjeta-numerada.color-primario.pt-3.pb-3.ps-5.pe-3
                .tarjeta-numerada__numero
                  figure
                    img(src='@/assets/curso/temas/tema_3/img_19.png', class="img-fluid")
                p.mb-0 <B>Auditorías y cumplimiento:</B> discutir la importancia de las auditorías regulares para asegurar el cumplimiento de los estándares de seguridad, medio ambiente y calidad, y cómo el sistema de monitoreo provee la evidencia necesaria.
            
            .col-12.mb-0(data-aos="zoom-in-right")
              .tarjeta-numerada.color-primario.pt-3.pb-3.ps-5.pe-3
                .tarjeta-numerada__numero
                  figure
                    img(src='@/assets/curso/temas/tema_3/img_20.png', class="img-fluid")
                p.mb-0 <B>Capacitación y Desarrollo:</B> Resaltar la necesidad de un programa de capacitación sistemático para el personal involucrado en el uso de estos sistemas, asegurando que comprendan su funcionamiento y cómo contribuir a la mejora continua.
        .col-8.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-4(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/temas/tema_3/img_21.png', class="img-fluid")

      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10.mb-3
          h3(data-aos='zoom-in-right').mb-3
            span.label-title Ciberseguridad y protección de datos
      
      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-3.mb-lg-0.mb-4(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/temas/tema_3/img_22.png', class="img-fluid")
        .col-12.col-lg-7.mb-0(data-aos="zoom-in-right")
          .tarjeta.color-acento-contenido-5.p-4.rounded-0.mb-0(data-aos="zoom-in-right")
            p.mb-3 <B>Riesgos y amenazas:</B> concienciar sobre los riesgos de ciberseguridad asociados a los sistemas de monitoreo (ataques a la red, acceso no autorizado a datos).
            p.mb-0 <B>Medidas de protección:</B> proponer medidas de seguridad sistemáticas como encriptación de datos, autenticación multifactor, copias de seguridad regulares y planes de recuperación ante desastres para proteger la información sensible.

    .bg_img_5.mb-3
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Integración tecnológica
            p.mb-0 La integración de sistemas como <I>ERP, TMS y WMS</I> permite una comunicación bidireccional eficiente entre control y gestión. Las plataformas centralizadas consolidan datos de flota, inventario, pedidos y clientes, brindando una visión completa de la operación logística. Las <I>APIs</I> y la interoperabilidad son clave para conectar sistemas diversos, asegurando el intercambio fluido de información mediante estándares comunes.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_23.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Análisis de datos y reportes estructurados
            p.mb-0 El uso de <I>KPIs</I> como puntualidad, kilómetros recorridos y consumo de combustible permite evaluar el desempeño logístico. Las herramientas de <I>Business Intelligence (BI)</I> generan informes personalizados sobre flota, rutas y costos. Además, el análisis histórico de datos identifica tendencias y problemas operativos, facilitando decisiones estratégicas y mejoras continuas en la eficiencia y seguridad del transporte.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_24.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Estándares y procesos documentados
            p.mb-0 La implementación de <I>SOPs</I> estandariza el uso de sistemas de monitoreo, gestión de alertas y comunicación. Las auditorías periódicas garantizan el cumplimiento de normas de seguridad, calidad y medio ambiente, apoyadas en evidencia del sistema. Además, la capacitación continua del personal asegura el uso adecuado de las herramientas y promueve mejoras constantes en la operación.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_25.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Ciberseguridad y protección de datos
            p.mb-3 <B>Riesgos y amenazas:</B> concienciar sobre los riesgos de ciberseguridad asociados a los sistemas de monitoreo (ataques a la red, acceso no autorizado a datos).
            p.mb-0 <B>Medidas de protección:</B> proponer medidas de seguridad sistemáticas como encriptación de datos, autenticación multifactor, copias de seguridad.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_26.png', class="img-fluid")
          
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

<style lang="sass"></style>
