<template>
    <client-only>
  <header-layout>
    <firbid></firbid>
  </header-layout>
    </client-only>
</template>

<script>
import HeaderLayout from "~/layouts/headerLayoutTransparent";
import Firbid from "~/views/Home/component";
export default {
  components: {
    "header-layout": HeaderLayout,
    firbid: Firbid
  },
  head() {
    return {
      title: "Subasta Dólares Online | Tipo de Cambio Perú | FIRBID",
      meta: [
        {
          name: "description",
          content:
            "¿Buscando el mejor tipo de cambio del Perú? En FIRBID entidades financieras compiten en línea con sus mejores ofertas por tu dinero. ¡Subasta Dólares!"
        }
      ]
    };
  },
  mounted() {}
};
</script>