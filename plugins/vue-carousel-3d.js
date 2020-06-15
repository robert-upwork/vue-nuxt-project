// import Vue from 'vue'
// import Carousel3d from "vue-carousel-3d";
// import VueCarousel from 'vue-carousel';
 
// if(process.client) {
//     const Carousel3d = "vue-carousel-3d";
//     const VueCarousel = 'vue-carousel';
     
//     Vue.use(VueCarousel);
//     Vue.use(Carousel3d)
// }


import Vue from 'vue';
import Carousel, { Slide } from 'vue-carousel-3d'
Vue.component('carousel-3d', Carousel);
Vue.component('slide-3d', Slide);