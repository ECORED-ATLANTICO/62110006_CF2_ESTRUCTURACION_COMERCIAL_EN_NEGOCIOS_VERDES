<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro/1.png", alt="Imagen de acompañamiento introducción", data-aos="fade-right")
      .col-lg-9
        p En un entorno comercial que exige cada vez más responsabilidad con el planeta, entender cómo aplicar la sostenibilidad en los procesos empresariales se ha vuelto una necesidad y una oportunidad. Este curso aborda el enfoque verde en la gestión comercial, una alternativa clave para quienes desean aportar valor desde lo ambiental, sin descuidar la eficiencia y la competitividad.
        p A través de una mirada práctica y reflexiva, el aprendiz comprenderá por qué adoptar prácticas sostenibles no es solo una tendencia, sino una estrategia de impacto para transformar realidades. Incorporar lo verde en lo comercial abre puertas a nuevas formas de pensar, actuar y comunicar con coherencia y responsabilidad.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Este recorrido formativo se desarrollará desde ejemplos del mundo actual, casos de aplicación real y herramientas útiles que invitan a actuar con visión sostenible en cada decisión comercial. 
    
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
