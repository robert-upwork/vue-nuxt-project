<style src="./style.scss" lang="scss"></style>
<template src="./template.html"></template>

<script>
import preguntas from "../../constants/preguntasfrecuentes.json";
import $ from 'jquery'
import {VSelect, VRow, VCol, VTextField, VDatePicker, VMenu, VApp} from "vuetify/lib"

export default {
  components: {
    // VSelect, VRow, VCol, VTextField, VDatePicker, VMenu, VApp
  },
  data() {
    return {
      preguntas: preguntas,
      result: "",
      resultado: ""
    };
  },
  methods: {
    navSlide() {
      const nav = document.querySelector(".mobile-compression");
      nav.classList.toggle("nav-active");
    },
    scrolling(id) {
      console.log(id);
      const nav = document.getElementById(id);
      $(".slider").click(function() {
        $(".preguntados").removeClass("active");
        $("." + id).addClass("active");
        $(".tab-pane").removeClass("active");
        $("." + id).addClass("active");
        var json = id;
        var bandera = false;
        let section4 = [
          "preguntas22",
          "preguntas23",
          "preguntas24",
          "preguntas25",
          "preguntas26",
          "preguntas27"
        ];
        let section5 = [
          "preguntas28",
          "preguntas29",
          "preguntas30",
          "preguntas31",
          "preguntas32",
          "preguntas33"
        ];
        let section6 = [
          "preguntas34",
          "preguntas35",
          "preguntas36",
          "preguntas37",
          "preguntas38",
          "preguntas39",
          "preguntas40",
          "preguntas41",
          "preguntas42"
        ];
        let section7= [
          "preguntas43",
          "preguntas44",
          "preguntas45",
          "preguntas46",
          "preguntas47",
          "preguntas48"
        ]
        if (
          json == "preguntas08" ||
          json == "preguntas09" ||
          json == "preguntas10" ||
          json == "preguntas11" ||
          json == "preguntas12" ||
          json == "preguntas13" ||
          json == "preguntas14" ||
          json == "preguntas15" ||
          json == "preguntas16" ||
          json == "preguntas17" ||
          json == "preguntas18" ||
          json == "preguntas19" ||
          json == "preguntas20"
        ) {
          $(".preguntados").removeClass("active");
          $(".preguntas02").addClass("active");
          $(".tab-pane").removeClass("active");
          $(".preguntas02").addClass("active");
          bandera = true;
        }
        if (json == "preguntas21") {
          $(".preguntados").removeClass("active");
          $(".preguntas03").addClass("active");
          $(".tab-pane").removeClass("active");
          $(".preguntas03").addClass("active");
          bandera = true;
        }
        if (section4.includes(json)) {
          $(".preguntados").removeClass("active");
          $(".preguntas04").addClass("active");
          $(".tab-pane").removeClass("active");
          $(".preguntas04").addClass("active");
          bandera = true;
        }
        if (section5.includes(json)) {
          $(".preguntados").removeClass("active");
          $(".preguntas05").addClass("active");
          $(".tab-pane").removeClass("active");
          $(".preguntas05").addClass("active");
          bandera = true;
        }
        if (section6.includes(json)) {
          $(".preguntados").removeClass("active");
          $(".preguntas06").addClass("active");
          $(".tab-pane").removeClass("active");
          $(".preguntas06").addClass("active");
          bandera = true;
        }
        if (section7.includes(json)) {
          $(".preguntados").removeClass("active");
          $(".preguntas07").addClass("active");
          $(".tab-pane").removeClass("active");
          $(".preguntas07").addClass("active");
          bandera = true;
        }
        if (
          json == "preguntas01" ||
          json == "preguntas02" ||
          json == "preguntas02" ||
          json == "preguntas04" ||
          json == "preguntas05" ||
          json == "preguntas06" ||
          json == "preguntas07"
        ) {
          bandera = false;
        }
        if (bandera) {
          nav.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }

        $("." + id).addClass("show");
      });
    }
  }
};
</script>