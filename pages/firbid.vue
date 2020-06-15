<template>
    <client-only>
  <header-layout>
      <firbid></firbid>
  </header-layout>
    </client-only>
</template>

<script>
import HeaderLayout from "~/layouts/headerLayoutWhite";
import WhyFirbid from "~/views/WhyFirbid/component";
export default {
  components: {
    "header-layout": HeaderLayout,
    firbid: WhyFirbid
  },
  head() {
    return {
      title: "¿Por qué FIRBID? | Subasta Dólares Online | FIRBID",
      meta: [
        {
          name: "description",
          content:
            "Creemos que las empresas pymes y personas pueden operar como la gran empresa. Entidades financieras compiten en línea con su mejor tipo de cambio. ¡Subasta Dólares!"
        }
      ]
    };
  }
};
</script>