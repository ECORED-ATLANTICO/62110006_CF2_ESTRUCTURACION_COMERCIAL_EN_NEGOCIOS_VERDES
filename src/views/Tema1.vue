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

    .row.justify-content-center.align-items-center.mb-3
      .col-8.col-md-6.col-lg-3
        img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema1/2.png", alt="Imagen decorativa", data-aos="fade-up")
      .col-lg-9
        p La gestión de stocks verde es una práctica avanzada dentro de la administración de inventarios que integra principios de sostenibilidad ambiental en todas las etapas del proceso. Más allá de la simple administración de cantidades y costos, este enfoque se centra en reducir el impacto ecológico generado por el almacenamiento y manejo de productos. Esto implica planificar y controlar los inventarios no solo para garantizar la disponibilidad oportuna, sino también para optimizar el uso de recursos naturales, disminuir residuos y contribuir a la economía circular (Rodríguez & Jiménez, 2020).
        .cajon.color-acento-contenido.p-4
          p.mb-0 En esencia, la gestión de stocks verde busca un equilibrio entre eficiencia económica y responsabilidad ambiental, transformando la cadena de suministro en una operación más consciente con el entorno. Por ejemplo, una empresa que decide almacenar solo productos biodegradables y utiliza materiales de embalaje reciclables está aplicando esta gestión para reducir su huella ambiental y promover prácticas eco amigables.

    .row.justify-content-center.align-items-center
      .col-lg-1.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/tema1/3.svg", alt="Icono decorativo", data-aos="fade-up")
      .col-lg-10
        p.mb-0 Este enfoque se vuelve crucial en sectores donde el impacto ambiental es un factor de reputación y cumplimiento normativo, como la agroindustria, la cosmética natural o la alimentación orgánica, donde la trazabilidad y sostenibilidad se valoran tanto como la calidad del producto.

    Separador
    #t_1_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 1.2 Tipos
    
    p.mb-5 La gestión ambiental de inventarios contempla varios tipos de stock, esta clasificación ayuda a estructurar una gestión responsable que contemple tanto la demanda del mercado como la protección del medio ambiente, objetivos específicos que garantizan la sostenibilidad y la operatividad eficiente:

    .row.justify-content-center
      .col-xl-10
        TabsA.color-primario
          .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-xl-5(titulo="<em>Stock</em> de ciclo")
            .row.align-items-center.justify-content-center
              .col-md-8
                h4.mb-4 <em>Stock</em> de ciclo
                p Reserva que permite afrontar variaciones inesperadas en la demanda o retrasos en entregas.
                p.mb-0.mb-xl-3 Ejemplo práctico: mantener un stock de semillas certificadas orgánicas para garantizar si hay demoras en el suministro.
              .col-6.col-md-3
                figure
                  img(src='@/assets/curso/temas/tema1/4.svg', alt='Imagen ilustrativa', data-aos="fade-up")

          .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-xl-5(titulo="<em>Stock</em> de seguridad")  
            .row.align-items-center.justify-content-center
              .col-md-8
                h4.mb-4 <em>Stock</em> de seguridad
                p Reserva que permite afrontar variaciones inesperadas en la demanda o retrasos en entregas. 
                p.mb-0.mb-xl-3 Ejemplo práctico: mantener un stock de semillas certificadas orgánicas para garantizar si hay demoras en el suministro.
              .col-6.col-md-3
                figure
                  img(src='@/assets/curso/temas/tema1/5.svg', alt='Imagen ilustrativa', data-aos="fade-up")

          .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-xl-5(titulo="<em>Stock</em> especulativo")  
            .row.align-items-center.justify-content-center
              .col-md-8
                h4.mb-4 <em>Stock</em> especulativo
                p Compras anticipadas para aprovechar oportunidades en precios o disponibilidad, siempre bajo criterios sostenibles.
                p.mb-0.mb-xl-3 Ejemplo práctico: adquirir materiales reciclados durante una oferta para futuras producciones sostenibles.
              .col-6.col-md-3
                figure
                  img(src='@/assets/curso/temas/tema1/6.svg', alt='Imagen ilustrativa', data-aos="fade-up")

          .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-xl-5(titulo="<em>Stock</em> verde")  
            .row.align-items-center.justify-content-center
              .col-md-8
                h4.mb-4 <em>Stock</em> verde
                p Inventario gestionado con criterios ambientales, priorizando productos certificados y embalajes eco amigables. 
                p.mb-0.mb-xl-3 Ejemplo práctico: almacén con productos orgánicos certificados, usando empaques compostables y biodegradables.
              .col-6.col-md-3
                figure
                  img(src='@/assets/curso/temas/tema1/5.svg', alt='Imagen ilustrativa', data-aos="fade-up")

    Separador
    #t_1_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 1.3 Características

    p.mb-4 Al adoptar esta modalidad de gestión, se manifiestan varias características clave que la distinguen de la gestión convencional:

    .row.align-items-stretch.justify-content-center.mb-5
      .col-lg-6.mb-4.height-available
        .p-4.bg-waves.ps-xl-5.h-100
          p.mb-0.ps-xl-5 Reducción de residuos: se minimizan los desperdicios al planificar con precisión y usar embalajes reutilizables o biodegradables, evitando materiales contaminantes como el plástico tradicional.
      .col-lg-6.mb-4.height-available
        .p-4.bg-waves.ps-xl-5.h-100
          p.mb-0.ps-xl-5 Trazabilidad ambiental: se implementan sistemas para conocer el origen, tratamiento y destino final de cada producto, asegurando que cumplan con certificaciones verdes y normativas ambientales.
      .col-lg-6.mb-4.mb-lg-0.height-available
        .p-4.bg-waves.bg-waves--purple.ps-xl-5.h-100
          p.mb-0.ps-xl-5 Selección de proveedores verdes: se establecen alianzas solo con proveedores que operen bajo estándares de sostenibilidad, fomentando una cadena de suministro responsable.
      .col-lg-6.mb-4.mb-lg-0.height-available
        .p-4.bg-waves.bg-waves--purple.ps-xl-5.h-100
          p.mb-0.ps-xl-5 Inventarios ajustados: se aplican metodologías como <em>Just-in-Time</em> (JIT) para mantener niveles óptimos, evitando acumulaciones excesivas que pueden derivar en desperdicios o deterioros.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Características de la gestión de <em>stock</em> verde.
        img.d-sm-none.mb-2(data-aos="fade-up", src='@/assets/curso/temas/tema1/8-mob.svg', alt='En la imagen se describen las características de la gestión de stocks verde: Minimiza residuos con embalajes sostenibles. Controla origen y destino para asegurar sostenibilidad. Elige proveedores responsables ambientalmente. Mantiene inventarios justos para evitar desperdicios.')
        img.d-none.d-sm-block.mb-2(data-aos="fade-up", src='@/assets/curso/temas/tema1/8.svg', alt='En la imagen se describen las características de la gestión de stocks verde: Minimiza residuos con embalajes sostenibles. Controla origen y destino para asegurar sostenibilidad. Elige proveedores responsables ambientalmente. Mantiene inventarios justos para evitar desperdicios.')
        figcaption <strong>Fuente:</strong> SENA, 2025.

    Separador
    #t_1_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 1.4 Tecnologias

    p.mb-5 La modernización tecnológica es un pilar fundamental para la gestión eficiente y sostenible de los inventarios. Algunas herramientas que se integran incluyen:

    .row.justify-content-center
      .col-xl-10.bg-waves.bg-waves--green.p-4.py-5.mb-5
        .row.justify-content-end.align-items-center
          .col-sm-10.col-lg-8
            p.mb-0 RFID (Identificación por radiofrecuencia): esta tecnología permite el seguimiento en tiempo real de cada producto o lote, facilitando una trazabilidad precisa y una reducción en la pérdida o mal manejo, además de optimizar la rotación y reducir desperdicios.
          .col-lg-2
            figure
              img.w-81.d-none.d-lg-block(src='@/assets/curso/temas/tema1/9.svg', alt='Icono decorativo', data-aos="fade-up")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Elementos RFID
        img.d-sm-none.mb-2(data-aos="fade-up", src='@/assets/curso/temas/tema1/10-mob.png', alt='En la imagen se describe los elementos del sistema completo de RFID: una etiqueta, un lector y un software de conectividad')
        img.d-none.d-sm-block.mb-2(data-aos="fade-up", src='@/assets/curso/temas/tema1/10.png', alt='En la imagen se describe los elementos del sistema completo de RFID: una etiqueta, un lector y un software de conectividad')
        figcaption <strong>Fuente:</strong> SENA, 2025.

    .row.justify-content-center
      .col-xl-10.bg-waves.bg-waves--green.p-4.py-5.mb-5
        .row.justify-content-end.align-items-center
          .col-sm-10.col-lg-8
            p.mb-0 <em>Software</em> ERP con módulos verdes: los sistemas de planificación de recursos empresariales incorporan indicadores de sostenibilidad, ayudando a controlar el impacto ambiental ligado al inventario, desde el consumo energético hasta la generación de residuos.
          .col-lg-2
            figure
              img.w-81.d-none.d-lg-block(src='@/assets/curso/temas/tema1/11.svg', alt='Icono decorativo', data-aos="fade-up")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Áreas empresariales intervenidas por <em>software</em> ERP
        img.mb-2(data-aos="fade-up", src='@/assets/curso/temas/tema1/12.svg', alt='La imagen destaca las áreas empresariales intervenidas por software ERP:, Integración de procesos, Gestión financiera, Gestión de recursos humanos, Gestión de Ventas y Clientes, Planificación de producción, Control de Calidad, Informes y análisis, Cumplimiento y seguridad')
        figcaption <strong>Fuente:</strong> SENA, 2025.

    .row.justify-content-center
      .col-xl-10.bg-waves.bg-waves--green.p-4.py-5.py-xl-4.mb-5
        .row.justify-content-end.align-items-center
          .col-sm-10.col-lg-8
            p.mb-0 Sensores IoT ambientales: estos dispositivos monitorean las condiciones de almacenamiento como temperatura, humedad o emisiones contaminantes, asegurando que los productos se mantengan en condiciones óptimas y que las operaciones sean ecoeficientes. Por ejemplo, los sensores ambientales brindan una visión integral de las condiciones atmosféricas y desempeñan un papel clave en industrias donde la calidad del aire y el monitoreo del clima son críticos.
          .col-lg-2
            figure
              img.d-none.d-lg-block(src='@/assets/curso/temas/tema1/13.svg', alt='Icono decorativo', data-aos="fade-up")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4.
          span Sensor ambiental integral de condiciones atmosféricas
        img.d-sm-none.mb-2(data-aos="fade-up", src='@/assets/curso/temas/tema1/14-mob.png', alt='En la imagen se muestra sensor ambiental integral de condiciones atmosféricas, que demuestra la calidad del aire en invernadero.')
        img.d-none.d-sm-block.mb-2(data-aos="fade-up", src='@/assets/curso/temas/tema1/14.png', alt='En la imagen se muestra sensor ambiental integral de condiciones atmosféricas, que demuestra la calidad del aire en invernadero.')
        figcaption <strong>Fuente:</strong> SENA, 2025.

    .row.justify-content-center
      .col-xl-10.bg-waves.bg-waves--green.p-4.py-5.mb-5
        .row.justify-content-end.align-items-center
          .col-sm-10.col-lg-8
            p.mb-0 <em>Blockchain</em> para trazabilidad: Ofrece un registro seguro e inmutable de toda la cadena de suministro, garantizando que los productos provienen de fuentes responsables y cumplen con los estándares ecológicos.
          .col-lg-2
            figure
              img.w-81.d-none.d-lg-block(src='@/assets/curso/temas/tema1/15.svg', alt='Icono decorativo', data-aos="fade-up")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 5.
          span Ejemplo de <em>Blockchain</em> para trazabilidad
        img.d-sm-none.mb-2(data-aos="fade-up", src='@/assets/curso/temas/tema1/16-mob.svg', alt='En la imagen se muestra ejemplo de aplicabilidad de Blockchain para la gestión del agua: 1. Disponibilidad y calidad del agua: seguimiento en tiempo real. 2. Trazabilidad del comercio del agua: transparencia en toda la cadena (reciclaje, venta, entrega, uso). 3. Sistemas de pago y recompensa: incentivos por ahorro o uso eficiente. 4. Seguimiento y verificación: certificación del uso sostenible del agua.')
        img.d-none.d-sm-block.mb-2(data-aos="fade-up", src='@/assets/curso/temas/tema1/16.svg', alt='En la imagen se muestra ejemplo de aplicabilidad de Blockchain para la gestión del agua: 1. Disponibilidad y calidad del agua: seguimiento en tiempo real. 2. Trazabilidad del comercio del agua: transparencia en toda la cadena (reciclaje, venta, entrega, uso). 3. Sistemas de pago y recompensa: incentivos por ahorro o uso eficiente. 4. Seguimiento y verificación: certificación del uso sostenible del agua.')
        figcaption <strong>Fuente:</strong> SENA, 2025.

    Separador
    #t_1_5(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 1.5 Ubicación

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-1
        figure
          img.d-none.d-lg-block(src="@/assets/curso/temas/tema1/17.svg", alt="Icono decorativo", data-aos="fade-up")
      .col-lg-9
        p.mb-0 La elección adecuada del lugar donde se instalan los almacenes es determinante para reducir el impacto ambiental de las operaciones logísticas. Esta decisión debe basarse en criterios sostenibles que garanticen eficiencia operativa y compromiso ecológico. A continuación, se destacan tres aspectos esenciales:

      .col-lg-10
        p.my-4 <strong>Ubicación estratégica de almacenes verdes y su impacto ambiental</strong>

      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--primario-p20")
          .row.justify-content-center.ps-5(titulo="Comunicación ambiental")
            .col-lg-12
              p Elegir ubicaciones que permitan recorridos cortos y directos reduce el uso de combustibles, emisiones contaminantes, tiempos y costos de transporte.
              p Ejemplo práctico: almacén ubicado cerca de zonas urbanas clave para acortar los trayectos de reparto.

          .row.justify-content-center.ps-5(titulo="Cercanía con aliados sostenibles")
            .col-lg-12
              p Situar almacenes próximos a proveedores ecológicos mejora la eficiencia de la cadena y promueve prácticas responsables.
              p Ejemplo práctico: establecerse cerca de productores de envases biodegradables o reutilizables.

          .row.justify-content-center.ps-5(titulo="Infraestructura con energías limpias")
            .col-lg-12
              p Implementar energías renovables y tecnologías de bajo consumo disminuye el impacto ambiental de las operaciones logísticas.
              p Ejemplo práctico: uso de paneles solares e iluminación LED en centros de distribución para reducir la huella energética.

    Separador
    #t_1_6(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
      h3 1.6 Técnicas de implementación

    p.mb-4 Para adoptar con éxito la gestión de stocks verde, es fundamental implementar ciertas técnicas y prácticas:

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema1/18.png", alt="Icono decorativo", data-aos="fade-down")
      .col-lg-9
        p <strong>Análisis del ciclo de vida (ACV)</strong>: es una herramienta que permite evaluar el impacto ambiental de un producto durante todas sus etapas, desde la extracción de materias primas, su transformación, distribución, uso y disposición final. El objetivo es identificar puntos críticos donde se puede reducir la huella ambiental. 
        p.mb-0 <strong>Ejemplo clave</strong>: una empresa productora de envases biodegradables realiza un ACV para comparar el impacto ambiental entre usar almidón de maíz o fibra de bambú como materia prima. Así determina cuál opción genera menos emisiones y residuos.

    p.mb-2 Aplicación práctica: 

    .row.align-items-stretch.justify-content-center.mb-4.mb-lg-5
      .col-sm-8.col-md-6.col-xl-4.overflow-hidden.p-3
        .row.align-items-center.bg-waves.bg-waves--green-small.h-100
          .col-3.py-3
            figure
              img.w-64(src="@/assets/curso/temas/tema1/20.svg", alt="Icono decorativo", data-aos="fade-down")
          .col-9.py-3
            p.mb-0 Elegir materiales con menor impacto ambiental.
      .col-sm-8.col-md-6.col-xl-4.overflow-hidden.p-3
        .row.align-items-center.bg-waves.bg-waves--green-small.h-100
          .col-3.py-3
            figure
              img.w-64(src="@/assets/curso/temas/tema1/21.svg", alt="Icono decorativo", data-aos="fade-down")
          .col-9.py-3
            p.mb-0 Optimizar el proceso de producción.
      .col-sm-8.col-md-6.col-xl-4.overflow-hidden.p-3
        .row.align-items-center.bg-waves.bg-waves--green-small.h-100
          .col-3.py-3
            figure
              img.w-64(src="@/assets/curso/temas/tema1/22.svg", alt="Icono decorativo", data-aos="fade-down")
          .col-9.py-3
            p.mb-0 Decidir si es mejor reciclar o compostar al final de la vida útil del producto.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p <strong>Inventario Just-in-Time (JIT) Verde</strong>: es una técnica de gestión que busca mantener niveles mínimos de inventario, abasteciendo los productos justo cuando se necesitan. En su versión verde, busca también reducir el desperdicio, consumo energético y espacio de almacenamiento.
        p.mb-4.mb-lg-0 <strong>Ejemplo clave</strong>: una tienda ecológica se abastece semanalmente de frutas y verduras orgánicas, evitando sobreabastecimiento que podría generar pudrición y desperdicio. Solo pide lo necesario para la demanda real del cliente.
      .col-sm-6.col-lg-3
        figure
          img(src="@/assets/curso/temas/tema1/23.png", alt="Icono decorativo", data-aos="fade-down")

    p.mb-2 Aplicación práctica: 

    .row.align-items-stretch.justify-content-center.mb-4.mb-lg-5
      .col-sm-8.col-md-6.col-xl-4.overflow-hidden.p-3
        .row.align-items-center.bg-waves.bg-waves--purple-small.h-100
          .col-3.py-3
            figure
              img.w-64(src="@/assets/curso/temas/tema1/24.svg", alt="Icono decorativo", data-aos="fade-down")
          .col-9.py-3
            p.mb-0 Menor espacio físico para almacenamiento = menos consumo energético.
      .col-sm-8.col-md-6.col-xl-4.overflow-hidden.p-3
        .row.align-items-center.bg-waves.bg-waves--purple-small.h-100
          .col-3.py-3
            figure
              img.w-64(src="@/assets/curso/temas/tema1/25.svg", alt="Icono decorativo", data-aos="fade-down")
          .col-9.py-3
            p.mb-0 Evita obsolescencia de productos perecederos o tecnológicos.
      .col-sm-8.col-md-6.col-xl-4.overflow-hidden.p-3
        .row.align-items-center.bg-waves.bg-waves--purple-small.h-100
          .col-3.py-3
            figure
              img.w-64(src="@/assets/curso/temas/tema1/26.svg", alt="Icono decorativo", data-aos="fade-down")
          .col-9.py-3
            p.mb-0 Menos embalajes y transporte innecesario.

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema1/27.png", alt="Icono decorativo", data-aos="fade-down")
      .col-lg-9
        p <strong>Logística inversa</strong>: son todas las actividades relacionadas con la recolección de productos usados o sus residuos para ser reutilizados, reciclados o eliminados de forma segura. Es clave para una economía circular.
        p.mb-0 <strong>Ejemplo clave</strong>: Una empresa de electrodomésticos instala puntos de recolección donde los clientes pueden dejar sus equipos viejos. Estos se envían a plantas donde se extraen componentes útiles o se reciclan adecuadamente.

    p.mb-2 Aplicación práctica: 

    .row.align-items-stretch.justify-content-center.mb-4.mb-lg-5
      .col-sm-8.col-md-6.col-xl-4.overflow-hidden.p-3
        .row.align-items-center.bg-waves.bg-waves--green-small.h-100
          .col-3.py-3
            figure
              img.w-56(src="@/assets/curso/temas/tema1/28.svg", alt="Icono decorativo", data-aos="fade-down")
          .col-9.py-3
            p.mb-0 Recolección de empaques para reúso o reciclaje
      .col-sm-8.col-md-6.col-xl-4.overflow-hidden.p-3
        .row.align-items-center.bg-waves.bg-waves--green-small.h-100
          .col-3.py-3
            figure
              img.w-56(src="@/assets/curso/temas/tema1/29.svg", alt="Icono decorativo", data-aos="fade-down")
          .col-9.py-3
            p.mb-0 Devolución de productos defectuosos o vencidos.
      .col-sm-8.col-md-6.col-xl-4.overflow-hidden.p-3
        .row.align-items-center.bg-waves.bg-waves--green-small.h-100
          .col-3.py-3
            figure
              img.w-56(src="@/assets/curso/temas/tema1/30.svg", alt="Icono decorativo", data-aos="fade-down")
          .col-9.py-3
            p.mb-0 Sistemas de devolución de envases retornables.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p <strong>Capacitación Ambiental</strong>: consiste en formar al personal y proveedores en prácticas sostenibles relacionadas con la manipulación, almacenamiento y transporte de productos, fomentando la cultura ecológica en toda la organización.
        p.mb-4.mb-lg-0 <strong>Ejemplo clave</strong>: una empresa capacita a sus operarios en cómo almacenar productos químicos sin riesgo de fugas ni contaminación, utilizando señalización adecuada y equipos seguros.

      .col-sm-6.col-lg-3
        figure
          img(src="@/assets/curso/temas/tema1/31.png", alt="Icono decorativo", data-aos="fade-down")

    .row.align-items-stretch.justify-content-center.mb-4.mb-lg-5
      .col-sm-8.col-md-6.col-xl-4.overflow-hidden.p-3
        .row.align-items-center.bg-waves.bg-waves--purple-small.h-100
          .col-3.py-3
            figure
              img.w-64(src="@/assets/curso/temas/tema1/32.svg", alt="Icono decorativo", data-aos="fade-down")
          .col-9.py-3
            p.mb-0 Capacitación en separación de residuos y uso eficiente de recursos.
      .col-sm-8.col-md-6.col-xl-4.overflow-hidden.p-3
        .row.align-items-center.bg-waves.bg-waves--purple-small.h-100
          .col-3.py-3
            figure
              img.w-64(src="@/assets/curso/temas/tema1/33.svg", alt="Icono decorativo", data-aos="fade-down")
          .col-9.py-3
            p.mb-0 Promoción de conductas sostenibles en el trabajo diario.
      .col-sm-8.col-md-6.col-xl-4.overflow-hidden.p-3
        .row.align-items-center.bg-waves.bg-waves--purple-small.h-100
          .col-3.py-3
            figure
              img.w-64(src="@/assets/curso/temas/tema1/34.svg", alt="Icono decorativo", data-aos="fade-down")
          .col-9.py-3
            p.mb-0 Manuales y protocolos verdes de almacenamiento y logística.

    .cajon.color-secundario.p-4.mb-5
      p.mb-0 Estas prácticas no solo ayudan a proteger el medio ambiente, sino que también mejoran la eficiencia operativa, reducen costos y fortalecen la reputación sostenible de las empresas. Adoptarlas es una estrategia inteligente y responsable.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-auto
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 6.
          span Técnicas en la gestión de <em>stocks</em> verdes
        img.d-sm-none.mb-2(data-aos="fade-up", src='@/assets/curso/temas/tema1/35-mob.svg', alt='En la imagen se muestra ejemplo de aplicabilidad de Blockchain para la gestión del agua: 1. Disponibilidad y calidad del agua: seguimiento en tiempo real. 2. Trazabilidad del comercio del agua: transparencia en toda la cadena (reciclaje, venta, entrega, uso). 3. Sistemas de pago y recompensa: incentivos por ahorro o uso eficiente. 4. Seguimiento y verificación: certificación del uso sostenible del agua.')
        img.d-none.d-sm-block.mb-2(data-aos="fade-up", src='@/assets/curso/temas/tema1/35.svg', alt='En la imagen se muestra ejemplo de aplicabilidad de Blockchain para la gestión del agua: 1. Disponibilidad y calidad del agua: seguimiento en tiempo real. 2. Trazabilidad del comercio del agua: transparencia en toda la cadena (reciclaje, venta, entrega, uso). 3. Sistemas de pago y recompensa: incentivos por ahorro o uso eficiente. 4. Seguimiento y verificación: certificación del uso sostenible del agua.')
        figcaption <strong>Fuente:</strong> SENA, 2025.

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
