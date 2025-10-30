<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión de <em>stocks</em> verde

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema1/1.png", alt="Imagen decorativa")

    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-white
          p.mb-0 La gestión de stocks verde optimiza inventarios reduciendo desperdicios y uso excesivo de recursos. Es clave para un modelo de negocio eficiente, responsable y alineado con la sostenibilidad. Favorece el ahorro de costos, mejora la trazabilidad y fortalece la imagen ambiental de la empresa. Además, responde a las exigencias de consumidores y mercados cada vez más conscientes.

    Separador
    #t_1_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 1.1 Concepto

    .row.justify-content-center.align-items-center
      .col-8.col-md-6.col-lg-3
        img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema1/2.png", alt="Imagen decorativa", data-aos="fade-up")
      .col-lg-9
        p La gestión de stocks verde es una práctica avanzada dentro de la administración de inventarios que integra principios de sostenibilidad ambiental en todas las etapas del proceso. Más allá de la simple administración de cantidades y costos, este enfoque se centra en reducir el impacto ecológico generado por el almacenamiento y manejo de productos. Esto implica planificar y controlar los inventarios no solo para garantizar la disponibilidad oportuna, sino también para optimizar el uso de recursos naturales, disminuir residuos y contribuir a la economía circular (Rodríguez & Jiménez, 2020).
        .cajon.color-acento-contenido.p-4
          p.mb-0 En esencia, la gestión de stocks verde busca un equilibrio entre eficiencia económica y responsabilidad ambiental, transformando la cadena de suministro en una operación más consciente con el entorno. Por ejemplo, una empresa que decide almacenar solo productos biodegradables y utiliza materiales de embalaje reciclables está aplicando esta gestión para reducir su huella ambiental y promover prácticas eco amigables.




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
