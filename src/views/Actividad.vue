<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Desafío de la ruta óptima: monitoreo en acción',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> se fundamenta en capacitar a los participantes en la forma práctica de los sistemas de control y monitoreo en tiempo real, con el fin de desarrollar habilidades para optimizar la eficiencia operativa y la competencia en la práctica del transporte inteligente. A través del uso de plataformas de simulación y análisis de datos críticos que permiten la ubicación vehicular, las desviaciones de rutas y comportamiento de conducción (velocidad, frenado entre otros aspectos, los participantes aprenderán a identificar proactivamente los problemas y tomas decisiones estratégicas que aseguren el cumplimiento de los objetivos de servicio y la maximización de la rentabilidad en un entorno dinámico.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            'El seguimiento (<i>tracking</i>) se limita principalmente a la localización geográfica de un activo.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 2,
          texto:
            'El monitoreo integral solo se enfoca en la ubicación del vehículo, al igual que el <i>tracking</i>.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 3,
          texto:
            'El monitoreo integral incluye el análisis del comportamiento del conductor.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 4,
          texto:
            'El <i>tracking</i> proporciona datos sobre el estado mecánico del vehículo en tiempo real.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 5,
          texto:
            'El monitoreo integral permite identificar desviaciones de ruta y gestionar alertas proactivamente.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 6,
          texto:
            ' Para el control operativo, el seguimiento (<i>tracking</i>) es siempre suficiente por sí solo',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 7,
          texto:
            'Un sistema de monitoreo integral puede incluir sensores de temperatura para la carga.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 8,
          texto:
            'La principal diferencia entre <i>tracking</i> y monitoreo integral radica en la cantidad y tipo de datos recopilados y analizados.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 9,
          texto:
            'El monitoreo integral ayuda a predecir necesidades de mantenimiento vehicular.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 10,
          texto:
            'El seguimiento (<i>tracking</i>) ofrece una visión holística y profunda de toda la operación de transporte',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 11,
          texto:
            'Los componentes clave de un sistema integrado de monitoreo no incluyen infraestructuras de comunicación.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 12,
          texto:
            'El monitoreo integral permite evaluar la eficiencia en el consumo de combustible basándose en patrones de conducción',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 13,
          texto:
            'El <i>tracking</i> es una funcionalidad que puede ser un componente de un sistema de monitoreo integral.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 14,
          texto:
            'La tecnología <i>Blockchain</i> favorece la inmutabilidad de los datos, lo que significa que los registros son muy difíciles de alterar.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 15,
          texto:
            '<i>Blockchain</i> elimina completamente la necesidad de cualquier intermediario en una transacción logística.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 16,
          texto:
            'Los datos recopilados por herramientas de monitoreo pueden integrarse a plataformas de análisis predictivo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 17,
          texto:
            '<i>Blockchain</i> es útil para verificar la autenticidad de los productos a lo largo de la cadena de suministro.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 18,
          texto:
            'La adopción de <i>Blockchain</i> en la trazabilidad logística es siempre sencilla y de bajo costo inicial.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 19,
          texto:
            'La tecnología <i>Blockchain</i> favorece la inmutabilidad de los datos, lo que significa que los registros son muy difíciles de alterar.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 20,
          texto:
            '<i>Blockchain</i> es vulnerable a un "punto único de fallo" debido a su naturaleza distribuida.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Te felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Pero podemos mejorar nuestras respuestas, te invitamos a revisar el componente formativo.',
    },
  }),
}
</script>
