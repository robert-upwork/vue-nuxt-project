<style src="./style.scss" lang="scss" ></style>
<style scoped>
.privacy {
      width: 50%;
    line-height: 35px;
}
</style>
<template src="./template.html"></template>
<script>
import politicas from "../../constants/politicasdeprivacidad.json";
import $ from 'jquery'
import {VSelect, VRow, VCol, VTextField, VDatePicker, VMenu, VApp} from "vuetify/lib"

export default {
  components: {
    //  VSelect, VRow, VCol, VTextField, VDatePicker, VMenu, VApp
  },
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