<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 <em>Marketing</em> digital verde

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema6/1.png", alt="Imagen decorativa")

    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-white
          p.mb-0 El marketing digital verde utiliza medios digitales de forma responsable para promover prácticas y productos sostenibles. Reduce el uso de recursos físicos y apuesta por contenidos que generan conciencia ambiental. Conecta con audiencias comprometidas y fortalece la reputación de marcas ecológicas.

    Separador
    #t_6_1(data-aos='zoom-in-left').titulo-segundo.color-acento-contenido
      h3 6.1 Concepto

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El marketing digital verde se refiere a la aplicación de herramientas y canales digitales para la promoción y comercialización de productos y servicios que tienen un enfoque sostenible. Esta modalidad busca no solo impulsar el consumo de opciones amigables con el medio ambiente, sino también reducir la huella ecológica asociada a las actividades publicitarias y promocionales. Así, el marketing digital verde promueve prácticas responsables tanto en el diseño de las campañas como en la interacción con los consumidores, incentivando decisiones de compra conscientes y respetuosas con el entorno natural (Chen & Chang, 2013).

    Separador
    #t_6_2(data-aos='zoom-in-left').titulo-segundo.color-acento-contenido
      h3 6.2 Estrategias

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-8.col-lg-3
        figure(data-aos="fade-up")
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema6/3.png", alt="Imagen decorativa")
      .col-lg-9
        p.mb-0 El <em>marketing</em> digital verde se apoya en una serie de estrategias diseñadas para integrar la sostenibilidad en cada etapa del proceso comunicativo y comercial. Estas estrategias no solo buscan aumentar la visibilidad de las marcas comprometidas con el medio ambiente, sino también generar un impacto positivo en la conciencia del consumidor y en el entorno. A continuación, se presentan tres enfoques clave que reflejan cómo las empresas pueden aplicar el <strong><em>marketing</em></strong> verde en el entorno digital:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="SEO verde" :icono="require('@/assets/curso/temas/tema6/4.svg')")
        .row.align-items-center.justify-content-center
          .col-11.col-lg-7.mb-4.mb-md-0
            h4 SEO verde
            p.mb-4.mb-lg-0 (<em>Search Engine Optimization</em>), por sus siglas en inglés): es una técnica que consiste en mejorar la visibilidad de contenidos relacionados con la sostenibilidad en los motores de búsqueda como Google. Esto se logra seleccionando palabras clave vinculadas al medio ambiente, optimizando la estructura del sitio web, utilizando servidores con bajo consumo energético y reduciendo el tamaño de los archivos digitales para disminuir su huella ecológica. De esta manera, los usuarios pueden acceder más fácilmente a información y productos sostenibles, lo cual incrementa tanto su alcance como el posicionamiento de la marca en un contexto digital más responsable.
          .col-11.col-sm-8.col-md-6.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema6/7.png', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="<strong><em>Marketing</em></strong> de contenidos sostenibles" :icono="require('@/assets/curso/temas/tema6/5.svg')")
        .row.align-items-center.justify-content-center
          .col-11.col-lg-7.mb-4.mb-md-0
            h4 <em>Marketing</em> de contenidos sostenibles
            p.mb-4.mb-lg-0 Esta estrategia se enfoca en la creación y difusión de materiales educativos y relevantes, como artículos de blog, videos, infografías o podcast, que informen, sensibilicen y eduquen a la audiencia sobre problemáticas ambientales y soluciones responsables. Este tipo de contenido fortalece la relación con el público, genera confianza y posiciona a la marca como una entidad comprometida con el cuidado del planeta, ayudando a construir una comunidad más consciente y participativa.
          .col-11.col-sm-8.col-md-6.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema6/8.png', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="<strong><em>E-commerce</em></strong> responsable" :icono="require('@/assets/curso/temas/tema6/6.svg')")
        .row.align-items-center.justify-content-center
          .col-11.col-lg-7.mb-4.mb-md-0
            h4 E-commerce responsable
            p.mb-4.mb-lg-0 Se trata de implementar buenas prácticas en el comercio electrónico para reducir el impacto ambiental. Esto puede incluir el uso de empaques reciclables o biodegradables, opciones de envío que compensen la huella de carbono (como transportes eléctricos o programas de reforestación), así como la promoción de un portafolio de productos sostenibles. El objetivo es ofrecer una experiencia de compra coherente con los valores ecológicos del consumidor moderno, contribuyendo a una cadena de valor más respetuosa con el medio ambiente. 
          .col-11.col-sm-8.col-md-6.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema6/9.png', alt='Imagen decorativa')

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .p-4.bg-degradado-purple.rounded-3.d-flex.align-items-center.justify-content-between.position-relative.flex-wrap.gap-3
          img.links-image(src='@/assets/curso/temas/tema6/15.svg', alt='Imagen decorativa')
          p.mb-0.ms-4 <strong>www.lotodelsur.com</strong><br>Aplicación de estrategias de marketing verde
          a.ms-4.ms-sm-0.boton.color-acento-botones(href="www.lotodelsur.com" target="_blank")
            span www.lotodelsur.com
            i.fa-solid.fa-link

    Separador
    #t_6_3(data-aos='zoom-in-left').titulo-segundo.color-acento-contenido
      h3 6.3 Herramientas

    .row.justify-content-center.mb-5
      .col-xl-10.bg-waves.bg-waves--bg-waves--green
        .p-4
          .row.justify-content-center.align-items-center
            .offset-sm-2.offset-lg-1.offset-xl-0.col-sm-10.col-lg-9.ps-sm-5
              p.mb-0 En el <em>marketing</em> digital verde, las herramientas tecnológicas juegan un papel fundamental para implementar estrategias sostenibles de manera efectiva. Estas herramientas permiten no solo la difusión de mensajes ecológicos, sino también el monitoreo del impacto ambiental de las campañas, optimizando recursos y reduciendo el uso innecesario de materiales físicos. A continuación, se presentan algunas de las principales herramientas utilizadas en este enfoque: 
            .col-lg-2.d-none.d-lg-block
              figure(data-aos="fade-up")
                img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema6/10.svg", alt="Imagen decorativa")

    h4(data-aos='zoom-in-right').mb-5
      span.decorated-title Aplicación de herramientas digitales en el <em>marketing</em> verde

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-xl-block
        figure
          img(src='@/assets/curso/temas/tema6/11.png', alt='Imagen de acompañamiento', data-aos="fade-up")
      .col-xl-8.p-4.bg-slider.rounded-3
        .tarjeta.tarjeta--blanca.p-4.py-5
          SlyderA(tipo="b")
            .row.align-items-center.justify-content-center
              .col-sm-10.col-lg-8.col-xl-9
                h5.mb-4 Redes sociales
                p.mb-4.mb-lg-0 Utilizadas para difundir campañas enfocadas en temas ecológicos, compartir prácticas sostenibles, y crear comunidades digitales comprometidas con la protección ambiental. A través de estas plataformas, las marcas pueden interactuar directamente con sus seguidores y motivar el cambio hacia hábitos más verdes.
              .col-sm-8.col-lg-3.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-81(src='@/assets/curso/temas/tema6/12.svg', alt='Imagen ilustrativa')
                  
            .row.align-items-center.justify-content-center
              .col-sm-10.col-lg-8.col-xl-9
                h5.mb-4 <em>Email marketing</em>
                p.mb-4.mb-lg-0 Permite enviar comunicaciones digitales, como boletines informativos o promociones, sin el uso de papel. Se aprovecha para destacar productos ecoamigables, novedades en sustentabilidad y consejos para un consumo responsable, reduciendo así el impacto ambiental asociado a la publicidad tradicional.
              .col-sm-8.col-lg-3.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-81(src='@/assets/curso/temas/tema6/13.svg', alt='Imagen ilustrativa')

            .row.align-items-center.justify-content-center
              .col-sm-10.col-lg-8.col-xl-9
                h5.mb-4 Plataformas de análisis
                p.mb-4.mb-lg-0 Herramientas tecnológicas que ayudan a medir y evaluar el impacto ambiental de las campañas digitales. Por ejemplo, calculan la huella de carbono generada por la actividad online y permiten ajustar estrategias para minimizar la contaminación digital, fomentando una comunicación más eficiente y sostenible.
              .col-sm-8.col-lg-3.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-81(src='@/assets/curso/temas/tema6/14.svg', alt='Imagen ilustrativa')

    .row.justify-content-center
      .col-xl-10
        .p-4.bg-degradado-purple.rounded-3.d-flex.align-items-center.justify-content-between.position-relative.flex-wrap.gap-3
          img.links-image(src='@/assets/curso/temas/tema6/15.svg', alt='Imagen decorativa')
          p.mb-0.ms-4 <strong>¿Qué es mercadeo verde (<em>Green Marketing</em>)?</strong> Ejemplos de mercadeo verde en el mundo
          a.ms-4.ms-lg-0.boton.color-acento-botones(href="https://www.youtube.com/watch?v=PbdVwChb71Q" target="_blank")
            span Video
            i.fa-solid.fa-link


</template>

<script>
export default {
  name: 'Tema6',
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
