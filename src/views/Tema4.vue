<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Identidad corporativa verde

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema4/1.png", alt="Imagen decorativa")

    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-white
          p.mb-0 La identidad corporativa verde refleja el compromiso ambiental de una empresa en su imagen, valores y acciones. Va más allá del logo: se traduce en coherencia entre lo que se comunica y lo que se practica. Esto fortalece la confianza del cliente y posiciona a la marca como agente de cambio sostenible.

    Separador
    .row.justify-content-center
      .col-xl-10
        #t_4_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
          h3 4.1 Concepto

        .cajon.color-acento-contenido.p-4
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.mb-4.mb-lg-0 La identidad corporativa verde representa la expresión integral —visual, verbal y comportamental— de una organización alineada con los principios de sostenibilidad ambiental y responsabilidad social. Más que una tendencia, se trata de una filosofía que impregna la cultura empresarial y se proyecta hacia sus públicos. Este enfoque busca que cada manifestación de la marca transmita valores como el respeto por el entorno, la ética y el compromiso con las generaciones futuras (Bigné et al., 2012).
            .col-lg-2.d-none.d-lg-block
              figure
                img.w-64(src="@/assets/curso/temas/tema4/2.svg", alt="Imagen decorativa", data-aos="fade-left")

        Separador
        #t_4_2(data-aos='zoom-in-left').titulo-segundo.color-acento-contenido
          h3 4.2 Imagen

        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La imagen corporativa verde se construye a partir de elementos visuales cuidadosamente seleccionados: logotipos inspirados en formas orgánicas, paletas de colores que remiten a la naturaleza, tipografías limpias y mensajes que promuevan un estilo de vida sostenible. Estos componentes deben formar un conjunto coherente que no solo comunique una estética ecológica, sino que también refuerce la autenticidad del compromiso ambiental, ayudando así a fortalecer la diferenciación y la credibilidad en el mercado.

        Separador

    #t_4_3(data-aos='zoom-in-right').titulo-segundo.color
      h3 4.3 Lineamientos

    p Para garantizar la coherencia y efectividad de la identidad corporativa verde, es esencial establecer una serie de lineamientos estratégicos que orienten todas las expresiones de la marca. Estos lineamientos deben estar alineados con la filosofía ambiental de la organización y reflejarse de forma clara y auténtica en cada acción comunicativa y operativa. Entre ellos se destacan:

    .p-4.bg-slider.rounded-3.mb-5
      .tarjeta.tarjeta--blanca.p-4.py-5
        SlyderA(tipo="b")
          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-7.col-xl-6.mb-5.mb-lg-0
              p.mb-4 Empleo de colores vinculados simbólicamente con la naturaleza, como el verde musgo, azul marino o marrón tierra. Estas tonalidades transmiten sensaciones de frescura, equilibrio y conexión con el entorno. Por ejemplo, marcas como The Body Shop y Patagonia han construido gran parte de su imagen visual en torno a estos colores, reforzando así su vínculo con el respeto al medio ambiente y al consumidor consciente.
              a.d-flex.justify-content-center.justify-content-lg-start.mb-4(href="www.thebodyshop.com" target="_blank")
                .bg-color-primario-p70.text-white.link-icon
                  i.fa-solid.fa-link
                .bg-color-primario-p5.p-2.link-text
                  span <strong>www.thebodyshop.com</strong> lineamiento de colores de marca
              a.d-flex.justify-content-center.justify-content-lg-start(href="https://www.patagonia.com/es/shop/mens" target="_blank")
                .bg-color-primario-p70.text-white.link-icon
                  i.fa-solid.fa-link
                .bg-color-primario-p5.p-2.link-text
                  span <strong>www.patagonia.com</strong> lineamiento de colores de marca

            .col-sm-8.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema4/4.png', alt='Imagen ilustrativa', data-aos="fade-left")

          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-7.col-xl-6.mb-5.mb-lg-0
              p.mb-4 Integración de mensajes que resalten prácticas responsables, como la economía circular, la reducción de la huella de carbono o el consumo consciente. Empresas como IKEA han comenzado a incorporar en sus campañas mensajes claros sobre la reutilización de materiales y el diseño ecológico, demostrando que la sostenibilidad puede ser accesible y parte del estilo de vida moderno.
              a.d-flex.justify-content-center.justify-content-lg-start.mb-4(href="https://www.ikea.com/co/es/rooms/kitchen/how-to/como-ahorrar-agua-en-la-cocina-pubb8e8e650/" target="_blank")
                .bg-color-primario-p70.text-white.link-icon
                  i.fa-solid.fa-link
                .bg-color-primario-p5.p-2.link-text
                  span <strong>www.ikea.com</strong> campaña productos amigables con el medio ambiente.

            .col-sm-8.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema4/5.png', alt='Imagen ilustrativa', data-aos="fade-left")

          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-7.col-xl-6.mb-5.mb-lg-0
              p.mb-4 Implementación de comportamientos sostenibles en cada punto de contacto con el cliente, desde el empaque hasta el servicio postventa. Un ejemplo es Apple, que ha reducido progresivamente el uso de plástico en sus empaques, incorporando materiales reciclados y promoviendo programas de devolución de dispositivos. Aunque su enfoque ha sido discutido, representa un caso relevante de cómo una marca global puede integrar la sostenibilidad en sus procesos de atención y fidelización.
              a.d-flex.justify-content-center.justify-content-lg-start.mb-4(href="www.apple.com" target="_blank")
                .bg-color-primario-p70.text-white.link-icon
                  i.fa-solid.fa-link
                .bg-color-primario-p5.p-2.link-text
                  span <strong>www.apple.com</strong> materiales reciclados usados en sus productos.

            .col-sm-8.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema4/6.png', alt='Imagen ilustrativa', data-aos="fade-left")
                
    .row.justify-content-center
      .col-xl-10.bg-waves.bg-waves--gris
        .p-4
          .row.align-items-center.justify-content-end
            .col-8.col-sm-10.col-lg-9
              p.mb-0 Estos ejemplos muestran que una identidad corporativa verde no se limita al diseño visual, sino que implica una coherencia real entre lo que la empresa comunica, lo que hace y cómo lo hace.
            .col-lg-2.d-none.d-lg-block
              figure
                img.w-96(src='@/assets/curso/temas/tema4/7.svg', alt='Imagen decorativa', data-aos="fade-left")

    Separador
    #t_4_4(data-aos='zoom-in-left').titulo-segundo.color-acento-contenido
      h3 4.4 Manual

    p.mb-5 El manual de identidad corporativa verde es una herramienta normativa que estandariza el uso de los recursos visuales, gráficos y discursivos de la marca bajo principios de sostenibilidad. Este documento orienta tanto al equipo interno como a aliados externos sobre cómo mantener la integridad visual de la empresa, asegurando que sus expresiones estén alineadas con sus valores ecológicos.

    h4(data-aos='zoom-in-right').mb-5
      span.decorated-title Elementos del manual de identidad corporativa

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-sm-7.col-lg-5.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema4/8.png", alt="Imagen decorativa")
          .crd_hover_txt--body.p-4.bg-color-primario-p5
            h4.mb-4.text-center Paleta de colores ecológicos
            p.text-center Uso predominante de tonos como verde oliva, azul cielo y marrón tierra en piezas gráficas, empaques, señalética institucional y medios digitales. Estos colores, además de evocar naturaleza y serenidad, ayudan a transmitir confianza y compromiso ambiental. Un ejemplo claro es su aplicación en los uniformes del personal, en banners promocionales y en plataformas web, donde se mantiene una coherencia visual que refuerza la identidad verde.

      .col-sm-7.col-lg-5.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema4/9.png", alt="Imagen decorativa")
          .crd_hover_txt--body.p-4.bg-color-primario-p5
            h4.mb-4.text-center Tipografía sostenible
            p.text-center Elección de fuentes digitales diseñadas para reducir el consumo de tinta, como <em>Ryman Eco o Ecofont</em>, especialmente en documentos de impresión frecuente como informes, formularios o comunicados. Estas tipografías permiten mantener una apariencia profesional sin renunciar a la eficiencia en el uso de recursos. También se procura evitar el uso excesivo de negrillas y se favorecen fuentes sin serifas por su mayor legibilidad y menor saturación visual.

      .col-sm-7.col-lg-5.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema4/10.png", alt="Imagen decorativa")
          .crd_hover_txt--body.p-4.bg-color-primario-p5
            h4.mb-4.text-center Pautas para papel y tintas
            p.text-center Preferencia por papel reciclado, ecológico o con certificaciones ambientales reconocidas como FSC (<em>Forest Stewardship Council</em>) o PEFC. Se promueve la impresión con tintas vegetales, a base de soya o agua, que son menos contaminantes y más seguras para el ambiente. Además, se establecen recomendaciones para imprimir solo lo necesario y fomentar el uso digital, reduciendo así el impacto ambiental de la comunicación institucional.

    .row.justify-content-center.bg-waves.p-4
      .col-xl-10
        p.text-center Consultar el manual de identidad visual del Ministerio de Ambiente y Desarrollo Sostenible de Colombia, el cual establece los lineamientos para una imagen institucional coherente y sostenible. Este documento resulta especialmente útil para desarrollar estrategias de comunicación ambiental o alinear la marca con prácticas responsables:
        a.d-flex.justify-content-center.mb-4(href="https://www.minambiente.gov.co/wp-content/uploads/2024/07/MANUAL_IDENTIDAD_VISUAL_AMBIENTE.pdf " target="_blank" format="pdf")
          .bg-color-primario-p70.text-white.link-icon
            i.fa-solid.fa-link
          .bg-color-primario-p5.p-2.link-text.link-text--large
            span <strong>www.minambiente.gov.co</strong> lineamientos para una imagen institucional coherente y sostenible





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
