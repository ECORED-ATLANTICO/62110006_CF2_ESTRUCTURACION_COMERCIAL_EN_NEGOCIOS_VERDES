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
