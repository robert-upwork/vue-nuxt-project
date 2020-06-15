<template>
    <client-only>
  <header-layout>
      <frequent-questions></frequent-questions>
  </header-layout>
    </client-only>
</template>

<script>
import HeaderLayout from "~/layouts/headerLayoutTransparent";
import FrequentQuestions from "~/views/FrequentQuestions/component";
export default {
  components: {
    "header-layout": HeaderLayout,
    "frequent-questions": FrequentQuestions
  },

  head() {
    return {
      title: "Cómo Subastar Dólares | Preguntas Frecuentes FIRBID",
      meta: [
        {
          name: "description",
          content:
            "Todo lo que debes saber para subastar dólares online y obtener tipos de cambio competitivos. Igual de seguro que con un banco."
        }
      ]
    };
  }
};
</script>