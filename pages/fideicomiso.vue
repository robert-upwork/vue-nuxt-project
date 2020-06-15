<template>
    <client-only>
  <header-layout>
      <fiduciary-corporation></fiduciary-corporation>
  </header-layout>
    </client-only>
</template>

<script>
import HeaderLayout from "~/layouts/headerLayoutWhite";
import FiduciaryCorporation from "~/views/FiduciaryCorporation/component";
export default {
  components: {
    "header-layout": HeaderLayout,
    "fiduciary-corporation": FiduciaryCorporation
  },
  head() {
    return {
      title: "Cambia Dólares Seguro | Fideicomiso FIRBID",
      meta: [
        {
          name: "description",
          content:
            "Contamos con una empresa fiduciaria. Mantiene tus fondos seguros. Operaciones de cambio de dólares igual de seguro que con un banco. Sin riesgos de fraude."
        }
      ]
    };
  }
};
</script>