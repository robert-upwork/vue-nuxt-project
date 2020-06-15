<style src="./style.scss" lang="scss" scoped></style>
<template src="./template.html"></template>

<script>
import Vue from "vue";

// import carousel from 'vue-owl-carousel'
import $ from "jquery";

export default {
  components: {
    Carousel: () =>
      process.browser ? import("vue-carousel").then(m => m.Carousel) : null,
    Slide: () =>
      process.browser ? import("vue-carousel").then(m => m.Slide) : null
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