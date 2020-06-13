<style src="./style.scss" lang="scss" scoped></style>
<template src="./template.html"></template>

<script>
import politicas from "../../constants/politicasdeprivacidad.json";
export default {
  data() {
    return {
      politicas: politicas,
      result: ""
    };
  },
  methods: {
    navSlide() {
      const nav = document.querySelector(".mobile-compression");
      nav.classList.toggle("nav-active");
    },
    scrolling(id) {
      const nav = document.getElementById(id);
      $('.slider').click(function() {
          console.log(id);
            nav.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
      
      });
    }
  }
};
</script>