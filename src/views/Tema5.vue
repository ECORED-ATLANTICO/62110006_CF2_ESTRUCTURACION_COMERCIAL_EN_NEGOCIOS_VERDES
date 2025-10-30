<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Campaña promocional verde

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema5/1.png", alt="Imagen decorativa")

    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-white
          p.mb-0 Una campaña promocional verde impulsa productos o servicios destacando su impacto positivo en el entorno. Utiliza mensajes responsables, materiales ecológicos y canales sostenibles para llegar al consumidor. Es una forma efectiva de atraer, educar y fidelizar a un público cada vez más consciente.

    Separador
    #t_5_1(data-aos='zoom-in-left').titulo-segundo.color-acento-contenido
      h3 5.1 Concepto

    .row.justify-content-center.align-items-center
      .col-8.col-md-6.col-lg-3
        img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema5/2.png", alt="Imagen decorativa", data-aos="fade-up")
      .col-lg-9
        p Una campaña promocional verde es una estrategia de comunicación diseñada para promover productos, servicios o iniciativas con un enfoque claro en la sostenibilidad ambiental y/o social. Este tipo de campañas no solo persigue objetivos comerciales, sino que también busca educar, sensibilizar e influir en los comportamientos del consumidor para fomentar un estilo de vida más responsable y respetuoso con el entorno. 
        .cajon.color-acento-contenido.p-4
          p.mb-0 Las campañas verdes ayudan a posicionar marcas comprometidas con el desarrollo sostenible, generando no solo reconocimiento, sino también lealtad entre consumidores conscientes que valoran las prácticas responsables. Además, permiten a las empresas diferenciarse en mercados saturados, destacando por su compromiso ambiental y social, lo que puede traducirse en una ventaja competitiva sostenible (Ottman, 2011).

    Separador
    #t_5_2(data-aos='zoom-in-left').titulo-segundo.color-acento-contenido
      h3 5.2 Clases

    p.mb-4 Las campañas promocionales verdes pueden clasificarse en diferentes tipos, según el enfoque de comunicación que utilicen:

    TabsB.color-acento-contenido
      .py-4.py-md-5(titulo="Campañas informativas" :icono="require('@/assets/curso/temas/tema5/3.svg')")
        .row.align-items-center.justify-content-center
          .col-11.col-lg-7.mb-4.mb-md-0
            h4.mb-4 Campañas informativas
            p Su objetivo principal es educar al público sobre problemáticas ambientales o sociales específicas (como el cambio climático, la contaminación plástica o la pérdida de biodiversidad). Estas campañas se basan en datos, hechos y estadísticas para generar conciencia. 
            p.mb-4.mb-lg-0 Ejemplo: una campaña que informa sobre el impacto del uso de bolsas plásticas en los océanos.
             
          .col-11.col-sm-8.col-md-6.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema5/6.png', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Campañas emocionales" :icono="require('@/assets/curso/temas/tema5/4.svg')")
        .row.align-items-center.justify-content-center
          .col-11.col-lg-7.mb-4.mb-md-0
            h4.mb-4 Campañas emocionales
            p Apelan a los sentimientos, valores y creencias del público objetivo. Buscan provocar una conexión emocional que impulse la acción desde la empatía, la compasión o el orgullo de cuidar el planeta.
            p.mb-4.mb-lg-0 Ejemplo: videos que muestran a niños afectados por la contaminación o animales en peligro.
             
          .col-11.col-sm-8.col-md-6.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema5/7.png', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Campañas activas" :icono="require('@/assets/curso/temas/tema5/5.svg')")
        .row.align-items-center.justify-content-center
          .col-11.col-lg-7.mb-4.mb-md-0
            h4 Campañas activas
            p Están enfocadas en motivar la participación directa del consumidor en acciones sostenibles. Estas campañas suelen tener un componente práctico y buscan generar resultados medibles.
            p.mb-4.mb-lg-0 Ejemplo: incentivar el reciclaje, el uso de transporte limpio, la participación en jornadas de reforestación, entre otros.
          .col-11.col-sm-8.col-md-6.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema5/8.png', alt='Imagen decorativa')

    Separador
    #t_5_3(data-aos='zoom-in-left').titulo-segundo.color-acento-contenido
      h3 5.3 Estructura

    p.mb-4 Para diseñar una campaña promocional verde efectiva, se deben seguir los siguientes pasos

    .p-5.bg-slider.rounded-3
      .tarjeta.tarjeta--blanca.p-4.py-5
        SlyderA(tipo="b")
          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-5.mb-3.mb-lg-0
              h4.mb-4 Diagnóstico y análisis del entorno
              ul.lista-ul--color.mb-4.mb-lg-0
                li 
                  i.fa-solid.fa-circle-check
                  | Identificar tendencias de consumo verde en el mercado.
                li 
                  i.fa-solid.fa-circle-check
                  | Analizar los valores, actitudes y comportamientos del público objetivo.
                li 
                  i.fa-solid.fa-circle-check
                  | Estudiar la competencia y el posicionamiento actual de la marca en temas de sostenibilidad.
            .col-sm-8.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema5/9.png', alt='Imagen ilustrativa', data-aos="fade-left")

          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-5.mb-3.mb-lg-0
              h4.mb-4 Definición de objetivos
              ul.lista-ul--color.mb-4.mb-lg-0
                li 
                  i.fa-solid.fa-circle-check
                  | Establecer metas claras, medibles y alcanzables.
                li 
                  i.fa-solid.fa-circle-check
                  | Pueden estar orientadas a aumentar la visibilidad de un producto ecológico, mejorar la imagen de marca, educar al público o incentivar un cambio de comportamiento.
            .col-sm-8.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema5/10.png', alt='Imagen ilustrativa', data-aos="fade-left")

          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-5.mb-3.mb-lg-0
              h4.mb-4 Segmentación del público
              ul.lista-ul--color.mb-4.mb-lg-0
                li 
                  i.fa-solid.fa-circle-check
                  | Definir grupos específicos de consumidores que tengan afinidad o interés en temas de sostenibilidad.
                li 
                  i.fa-solid.fa-circle-check
                  | Se pueden segmentar por edad, estilo de vida, ubicación geográfica, nivel educativo, entre otros.
            .col-sm-8.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema5/11.png', alt='Imagen ilustrativa', data-aos="fade-left")

          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-5.mb-3.mb-lg-0
              h4.mb-4 Diseño del mensaje
              ul.lista-ul--color.mb-4.mb-lg-0
                li 
                  i.fa-solid.fa-circle-check
                  | Elaborar contenidos que reflejen los valores sostenibles de la marca.
                li 
                  i.fa-solid.fa-circle-check
                  | Usar un lenguaje claro, inclusivo y motivador.
                li 
                  i.fa-solid.fa-circle-check
                  | Incluir llamados a la acción, testimonios, historias reales o evidencias científicas.
            .col-sm-8.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema5/12.png', alt='Imagen ilustrativa', data-aos="fade-left")

          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-5.mb-3.mb-lg-0
              h4.mb-4 Selección de medios
              ul.lista-ul--color.mb-4.mb-lg-0
                li 
                  i.fa-solid.fa-circle-check
                  | Elegir canales de comunicación que refuercen el mensaje verde, como redes sociales, blogs ecológicos, correos, podcasts, eventos sostenibles o alianzas con influencers ambientales.
                li 
                  i.fa-solid.fa-circle-check
                  | Priorizar medios con bajo impacto ambiental (digitales, reutilizables o reciclables).
            .col-sm-8.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema5/13.png', alt='Imagen ilustrativa', data-aos="fade-left")

          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-5.mb-3.mb-lg-0
              h4.mb-4 Ejecución de la campaña
              ul.lista-ul--color.mb-4.mb-lg-0
                li 
                  i.fa-solid.fa-circle-check
                  | Coordinar las actividades logísticas y de difusión.
                li 
                  i.fa-solid.fa-circle-check
                  | Implementar acciones promocionales como descuentos verdes, concursos ecológicos o experiencias sostenibles para el consumidor.
            .col-sm-8.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema5/14.png', alt='Imagen ilustrativa', data-aos="fade-left")

          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-5.mb-3.mb-lg-0
              h4.mb-4 Evaluación de resultados
              p Medir el impacto de la campaña a través de indicadores:
              ul.lista-ul--color.mb-4.mb-lg-0
                li 
                  i.fa-solid.fa-circle-check
                  | Alcance (número de personas expuestas).
                li 
                  i.fa-solid.fa-circle-check
                  | Participación (interacciones, visitas).
                li 
                  i.fa-solid.fa-circle-check
                  | Cambio de comportamiento (estudios de seguimiento).
                li 
                  i.fa-solid.fa-circle-check
                  | Retorno de inversión (económico como social).
            .col-sm-8.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema5/15.png', alt='Imagen ilustrativa', data-aos="fade-left")

    Separador
    #t_5_4(data-aos='zoom-in-left').titulo-segundo.color-acento-contenido
      h3 5.4 Presupuesto

    p El presupuesto de una campaña promocional verde debe incluir tanto costos convencionales como costos específicos de sostenibilidad. Es importante considerar inversiones que aseguren coherencia entre el mensaje ecológico y los medios utilizados.

    h4(data-aos='zoom-in-right').mb-5
      span.decorated-title Distribución presupuestal para una campaña promocional verde

    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
      .col-xl-8.mb-3.mb-lg-0
        SlyderF(columnas="col-lg-6")
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon(src='@/assets/curso/temas/tema5/16.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Producción de material ecológico
            p.mb-4.mb-5.text-center Impresión en papel reciclado, tintas vegetales, empaques biodegradables, <em>merchandising</em> sostenible.

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon(src='@/assets/curso/temas/tema5/17.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Medios digitales
            p.mb-4.text-center Campañas en redes sociales, gestión de contenido, anuncios pagados en plataformas <em>eco-friendly</em>.

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon(src='@/assets/curso/temas/tema5/18.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Eventos sostenibles
            p.mb-4.text-center Alquiler de espacios ecológicos, logística sin residuos, transporte colectivo o eléctrico.

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon(src='@/assets/curso/temas/tema5/19.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Honorarios profesionales
            p.mb-4.text-center Diseño gráfico, redacción de contenidos, consultoría en sostenibilidad.

          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-5
                img.factores-slider__icon(src='@/assets/curso/temas/tema5/20.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Evaluación de impacto
            p.mb-4.text-center Encuestas, estudios de percepción, herramientas de análisis digital.
      .d-none.d-xl-block.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema5/21.png', alt='Imagen decorativa', data-aos="fade-up")

    p Es fundamental que el presupuesto esté alineado con los principios de sostenibilidad y que se optimicen los recursos para evitar el desperdicio y maximizar el impacto positivo.

    Separador
    #t_5_5(data-aos='zoom-in-left').titulo-segundo.color-acento-contenido
      h3 5.5 Materiales

    p.mb-5 En el marco de una estrategia de imagen corporativa sostenible, la selección de materiales juega un papel fundamental. Estos no solo deben cumplir funciones promocionales o logísticas, sino que también deben reflejar los valores ecológicos de la empresa. A continuación, se describen algunos tipos de materiales promocionales verdes, sus características y ejemplos de uso:

    .row.justify-content-center
      .col-xl-10
        h4(data-aos='zoom-in-right').mb-5
          span.decorated-title Tipos de materiales promocionales verdes

        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--primario-p20")
          .row.align-items-center.ps-5(titulo="<em>Merchandising</em> sostenible")
            .col-lg-8
              p Camisetas de algodón orgánico con mensajes ambientales como “Protege el planeta”. También se incluyen bolsas reutilizables, botellas de acero inoxidable y cuadernos con papel reciclado. Estos productos no solo promueven la marca, sino también el compromiso ambiental.
            .col-sm-8.col-lg-4.col-xl-3
              figure
                img(src='@/assets/curso/temas/tema5/22.png', alt='Imagen de acompañamiento')

          .row.align-items-center.ps-5(titulo="Publicidad digital ecológica")
            .col-lg-8
              p Anuncios animados difundidos a través de plataformas de bajo consumo energético (páginas optimizadas, correos ecológicos, redes sociales). Se evita el uso de papel y se maximiza el alcance con un menor impacto ambiental. Los mensajes suelen enfocarse en acciones sostenibles.
            .col-sm-8.col-lg-4.col-xl-3
              figure
                img(src='@/assets/curso/temas/tema5/23.png', alt='Imagen de acompañamiento')

          .row.align-items-center.ps-5(titulo="<em>Packaging</em> verde")
            .col-lg-8
              p Empaques fabricados con materiales compostables, reciclables o biodegradables (como cartón reciclado). Algunos incluyen mensajes educativos orientando al consumidor sobre cómo desechar correctamente el envase o cómo reutilizarlo. Esto refuerza la coherencia entre el producto y los valores de la marca.
            .col-sm-8.col-lg-4.col-xl-3
              figure
                img(src='@/assets/curso/temas/tema5/24.png', alt='Imagen de acompañamiento')
     
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
