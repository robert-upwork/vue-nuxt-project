<style src="./style.scss" lang="scss" scoped></style>
<template src="./template.html"></template>

<script>
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import carousel from 'vue-owl-carousel'
export default {
  components: {
    "new-carousel": carousel
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
    SlideCarousel(value) {
      const carousel = this.$refs["carousel-why"];
      const currentPage = carousel.currentPage;
      const pageCount = carousel.pageCount;
      if (value == "prev") {
        carousel.goToPage(currentPage - 1);
      } else {
        carousel.goToPage(currentPage + 1);
      }
    },
    navSlide() {
      const nav = document.querySelector(".mobile-compression");
      nav.classList.toggle("nav-active");
    }
  }
};
</script>