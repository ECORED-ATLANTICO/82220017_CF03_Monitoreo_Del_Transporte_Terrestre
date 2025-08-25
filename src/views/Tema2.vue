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
        .col-12.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/temas/tema_2/img_2.png', class="img-fluid")
        .col-12.col-lg-7
          .cajon.color-secundario-5.p-4.mb-3(data-aos="zoom-in-right")
            p.mb-0 El sistema de monitoreo cuenta con los datos recolectados por parte de los dispositivos que se estén empleando, estos deben ser de calidad, relevancia y que sean oportunos en la toma de decisiones.
      
      .row.justify-content-center.align-items-center
        .col-12.col-lg-10.mb-3
          .gps-infografia-container
            .infografia-wrapper
              .imagen-container
                input#infografia-punto-1.d-none(type="radio" name="infografia-puntos" checked)
                input#infografia-punto-2.d-none(type="radio" name="infografia-puntos")
                input#infografia-punto-3.d-none(type="radio" name="infografia-puntos")
                input#infografia-punto-4.d-none(type="radio" name="infografia-puntos")
                input#infografia-punto-5.d-none(type="radio" name="infografia-puntos")
                label.punto-info(for="infografia-punto-1" style="top: 10%; left: 68.8%;")
                  .punto-numero 
                label.punto-info(for="infografia-punto-2" style="top: 26.9%; left: 68.8%;")
                  .punto-numero 
                label.punto-info(for="infografia-punto-3" style="top: 43.9%; left: 68.8%;")
                  .punto-numero 
                label.punto-info(for="infografia-punto-4" style="top: 60.9%; left: 68.8%;")
                  .punto-numero 
                label.punto-info(for="infografia-punto-5" style="top: 77.9%; left: 68.8%;")
                  .punto-numero 
                .info-cards-container
                  .info-card(data-card="1")
                    .card-header
                      h5.mb-0 Datos de posición y trayectoria (<i>GPS/GNSS</i>)
                    .card-content.text-small
                      p.mb-0.mt-5 <B>Coordenadas geográficas:</B> latitud, longitud y altitud para una ubicación precisa.
                      p.mb-0 <B>Velocidad y dirección:</B> crucial para el análisis de rutas, tiempos de llegada estimados <I>(ETA)</I> y detección de desviaciones.
                      p.mb-0 <B>Historial de rutas:</B> permite la auditoría de trayectorias, identificación de puntos de interés <I>(POI)</I> y análisis de cumplimiento de rutas planificadas.
                      p.mb-0 <B>Geocercas:</B> datos sobre entradas y salidas de zonas predefinidas (patios, almacenes, áreas de entrega), activando alertas automáticas.
                    .numero-circulo 1
                  .info-card(data-card="2")
                    .card-header
                      h5.mb-0 Datos de sensores telemáticos 
                    .card-content
                      p.mb-0.mt-3 Estos sensores proporcionan información vital sobre el estado del vehículo y la carga.
                      p.mb-0 <B>Sensores de combustible:</B> nivel de combustible, consumo en tiempo real, detección de robos o fugas.
                      p.mb-0 <B>Sensores de temperatura y humedad:</B> indispensables para el transporte de carga sensible (farmacéuticos, alimentos perecederos), asegurando la cadena de frío/calor.
                      p.mb-0 <B>Sensores de apertura/cierre de puertas:</B> notificaciones sobre accesos no autorizados a la carga o compartimentos del vehículo.
                      p.mb-0 <B>Sensores de vibración/Impacto:</B> detección de manejo brusco, accidentes o golpes a la carga.
                      p.mb-0 <B>Sensores de presión de neumáticos <I>(TPMS)</I>:</B> monitoreo de la presión y temperatura de los neumáticos para prevenir fallas y optimizar el consumo de combustible
                    .numero-circulo 2
                  .info-card(data-card="3")
                    .card-header
                      h5.mb-0 Datos de conducción
                    .card-content
                      p.mb-0.mt-3 <B>Aceleraciones y frenadas bruscas:</B> indicadores de conducción agresiva o insegura.
                      p.mb-0 <B>Exceso de velocidad:</B> monitoreo del cumplimiento de los límites de velocidad.
                      p.mb-0 <B>Tiempos de marcha/parada y descanso:</B> crucial para la gestión de la fatiga del conductor y el cumplimiento de las normativas de horas de servicio.
                      p.mb-0 <B>Giro brusco y viraje excesivo:</B> posibles indicadores de distracciones o maniobras peligrosas.
                    .numero-circulo 3
                  .info-card(data-card="4")
                    .card-header
                      h5.mb-0 Datos de carga
                    .card-content
                      p.mb-0.mt-3 <B>Peso de la carga:</B> monitoreo de la tara y el peso bruto para evitar sobrecargas y optimizar la capacidad.
                      p.mb-0 <B>Estado de la carga:</B> información sobre el estado de bienes específicos.
                    .numero-circulo 4
                  .info-card(data-card="5")
                    .card-header
                      h5.mb-0 Datos operacionales integrados:
                    .card-content
                      p.mb-0.mt-3 <B>Estado del tráfico en tiempo real:</B> integración con servicios de tráfico para optimizar rutas y tiempos.
                      p.mb-0 <B>Condiciones climáticas:</B> impacto en la seguridad y los tiempos de entrega.
                      p.mb-0 <B>Información de pedidos y entregas:</B> sincronización con sistemas de gestión de pedidos <I>(OMS)</I> y planificación de rutas para tener una visión completa de cada envío.
                    .numero-circulo 5
                picture
                  source(media="(max-width: 769px)", :srcset="require('@/assets/curso/temas/tema_2/img_4.svg')")
                  img.imagen-principal(:src="require('@/assets/curso/temas/tema_2/img_3.svg')", class="img-fluid")

    
    .bg_img_4.mb-3

      separador

      .row.justify-content-center.align-items-center
        .col-12.col-lg-10.mb-3
          #t_2_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 2.2 Registro de la operación
          .mb-3
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/temas/tema_2/img_5.png', class="img-fluid")
        .col-12.col-lg-8(data-aos="zoom-in-right")
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
              p.mb-3 <B>• Sistemas de planificación de rutas <i>(RPS)</i>:</B> retroalimentación para optimizar rutas futuras basándose en datos reales de tráfico y tiempos de entrega.
              p.mb-3 <B>• Sistemas de gestión de almacenes <i>(WMS)</i>:</B> coordinación de la llegada de vehículos y la disponibilidad de carga/descarga.
              p.mb-3 <B>• Sistemas de gestión de flota <i>(FMS)</i>:</B> integración de datos de mantenimiento, consumo y rendimiento para una gestión integral.
              p.mb-0 <B>• Sistemas <i>ERP/TMS</i>:</B> centralización de la información logística y financiera para una visión unificada de la cadena de suministro.            
            .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_2/img_8.png', class="img-fluid")
          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h5 Análisis predictivo y prescriptivo
              p.mb-3 <B>Sistemas de planificación de rutas <i>(RPS)</i>:</B> retroalimentación para optimizar rutas futuras basándose en datos reales de tráfico y tiempos de entrega.
              p.mb-3 <B>Sistemas de gestión de almacenes <i>(WMS)</i>:</B> coordinación de la llegada de vehículos y la disponibilidad de carga/descarga.
              p.mb-3 <B>Sistemas de gestión de flota <i>(FMS)</i>:</B> integración de datos de mantenimiento, consumo y rendimiento para una gestión integral.
              p.mb-0 <B>Sistemas <i>ERP/TMS</i>:</B> centralización de la información logística y financiera para una visión unificada de la cadena de suministro.
            .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_2/img_9.png', class="img-fluid")
          
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
