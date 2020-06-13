<template>
  <header-layout>
    <terms-conditions></terms-conditions>
  </header-layout>
</template>

<script>
import HeaderLayout from "~/layouts/headerLayoutTransparent";
import TermsConditions from "~/views/TermsConditions/component";
export default {
  components: {
    "header-layout": HeaderLayout,
    "terms-conditions": TermsConditions
  },
  head() {
    return {
      title: "Términos y Condiciones | FIRBID",
      meta: [
        {
          name: "description",
          content:
            "Conoce los términos y condiciones de todas tus operaciones de subasta de dólares."
        }
      ]
    };
  }
};
</script>