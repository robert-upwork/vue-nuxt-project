<style src="./style.scss" lang="scss"></style>
<template src="./template.html"></template>

<script>
import terminos from "../../constants/terminosycondiciones.json";
import $ from 'jquery'
import {VSelect, VRow, VCol, VTextField, VDatePicker, VMenu, VApp} from "vuetify/lib"

export default {
   components: {
    // VSelect, VRow, VCol, VTextField, VDatePicker, VMenu, VApp
  },
  data() {
    return {
      terminos: terminos,
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
          $('.slider').click(function(){
            $(".text-dark").removeClass("active");
            $("."+id).addClass("active");
            $(".tab-pane").removeClass("active");
            $("."+id).addClass("active");

            var json = id;
            if(json=='terminos14' || json=='terminos15'){
              $(".text-dark").removeClass("active");
              $(".terminos01").addClass("active");
              $(".tab-pane").removeClass("active");
              $(".terminos01").addClass("active");
            }
            if(json=='terminos16'|| json=='terminos17'){
              $(".text-dark").removeClass("active");
              $(".terminos03").addClass("active");
              $(".tab-pane").removeClass("active");
              $(".terminos03").addClass("active");
            }
            if(json=='terminos18'|| json=='terminos19' || json=='terminos20' || json=='terminos21'){
              $(".text-dark").removeClass("active");
              $(".terminos04").addClass("active");
              $(".tab-pane").removeClass("active");
              $(".terminos04").addClass("active");
            }
            if(json=='terminos22' || json=='terminos23'){
              $(".text-dark").removeClass("active");
              $(".terminos05").addClass("active");
              $(".tab-pane").removeClass("active");
              $(".terminos05").addClass("active");
            }
            if(json=='terminos24'){
              $(".text-dark").removeClass("active");
              $(".terminos07").addClass("active");
              $(".tab-pane").removeClass("active");
              $(".terminos07").addClass("active");
            }
            if(json=='terminos25' || json=='terminos26'){
              $(".text-dark").removeClass("active");
              $(".terminos10").addClass("active");
              $(".tab-pane").removeClass("active");
              $(".terminos10").addClass("active");
            }
            nav.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          });

    }
  }
};
</script>