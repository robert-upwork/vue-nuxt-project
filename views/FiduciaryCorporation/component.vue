<style src="./style.scss" lang="scss" scoped></style>
<template src="./template.html"></template>

<script>
import {VSelect, VRow, VCol, VTextField, VDatePicker, VMenu, VApp} from "vuetify/lib"

export default {
  components: {
    VSelect, VRow, VCol, VTextField, VDatePicker, VMenu, VApp
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
  	showModal() {
      this.dialogVisible = true;
    },
    navSlide() {
      const nav = document.querySelector(".mobile-compression");
      nav.classList.toggle("nav-active");
    },
    showModal() {
      this.dialogVisible = true;
    },

  }
};
</script>