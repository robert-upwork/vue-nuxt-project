<template>
    <client-only>
  <header-layout>
      <privacy-policy></privacy-policy>
  </header-layout>
    </client-only>
</template>

<script>
import HeaderLayout from "~/layouts/headerLayoutTransparent";
import PrivacyPolicy from "~/views/PrivacyPolicy/component";
export default {
  components: {
    "header-layout": HeaderLayout,
    "privacy-policy": PrivacyPolicy
  },
  head() {
    return {
      title: "Políticas de Privacidad  | FIRBID",
      meta: [
        {
          name: "description",
          content:
            "Conoce todo lo que debes saber sobre las Políticas de Privacidad de FIRBID."
        }
      ]
    };
  }
};
</script>