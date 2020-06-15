<template>
  <client-only>
    <header-layout>
      <blog></blog>
    </header-layout>
  </client-only>
</template>

<script>
import HeaderLayout from "~/layouts/headerLayoutWhite";
import Blog from "~/views/Empresas/component";
export default {
  components: {
    "header-layout": HeaderLayout,
    blog: Blog
  },
  head() {
    return {
      title: "Tipo de Cambio para PYMES | Subasta Dólares Online | FIRBID",
      meta: [
        {
          name: "description",
          content:
            "¡Subasta tus dólares como lo hacen las grandes empresas! Obtén el mejor tipo de cambio del Perú. Entidades financieras compiten en línea por tu dinero!"
        }
      ]
    };
  }
};
</script>