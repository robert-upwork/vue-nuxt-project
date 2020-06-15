<style src="./index.scss" lang="scss"></style>
<template src="./template.html"></template>

<script>
  import ChangeType from "../../services/changeType";
  import blog from "../../services/blog";
  // import Carousel3d, { Slide as Slide3d } from "vue-carousel-3d";
  // import { Carousel, Slide } from 'vue-carousel';
  import sal from "sal.js";
  import FormatData from "../../helpers/formatData";
  import $ from 'jquery'
  import {VSelect, VRow, VCol, VTextField, VDatePicker, VMenu, VApp} from "vuetify/lib"


  const changeTypeForm = {
    exchange_type: {
      ask: "-.----",
      bid: "-.----"
    },
    name: "-"
  };
  const timeProvitional = "--:--"
  export default {
    components: {
      "carousel-3d": () => process.browser ? import('vue-carousel-3d').then(m => m.Carousel3d) : null,
      "slide-3d": () => process.browser ? import('vue-carousel-3d').then(m => m.Slide) : null,
      VSelect, VRow, VCol, VTextField, VDatePicker, VMenu, VApp,
      'Carousel': () => process.browser ? import('vue-carousel').then(m => m.Carousel) : null,
      'Slide': () => process.browser ? import('vue-carousel').then(m => m.Slide) : null
    },
    data() {
      return {
        cajaArequipaImg: require("../../assets/bancos/arequipa.svg"),
        cajaArequipaBlanco: require("../../assets/bancos/arequipa_w.svg"),
        cajaTemp: require("../../assets/bancos/arequipa_w.svg"),
        santanderImg: require("../../assets/bancos/santander.svg"),
        santanderBlanco: require("../../assets/bancos/santander_w.svg"),
        santanderTemp: require("../../assets/bancos/santander_w.svg"),
        grupoCorilImg: require("../../assets/bancos/coril.svg"),
        grupoCorilBlanco: require("../../assets/bancos/coril_w.svg"),
        grupoCorilTemp: require("../../assets/bancos/coril_w.svg"),
        bancoRipleyImg: require("../../assets/bancos/ripley.svg"),
        bancoRipleyBlanco: require("../../assets/bancos/ripley_w.svg"),
        bancoRipleyTemp: require("../../assets/bancos/ripley_w.svg"),
        firbidChange: changeTypeForm,
        rextieChange: changeTypeForm,
        kambistaChange: changeTypeForm,
        bcpChange: changeTypeForm,
        interbankChange: changeTypeForm,
        bbvaChange: changeTypeForm,
        cocosLucasChange: changeTypeForm,
        scotiabankChange: changeTypeForm,
        westerUnionChange: changeTypeForm,
        tKambioChange: changeTypeForm,
        cambioSeguroChange: changeTypeForm,
        timeRequest: timeProvitional,
        dialogVisible: false,
        dialogVisible2: false,
        ver: "Ver más",
        showMore: true,
        moreInfo: false,
        postsArray: [],
        dollars: "1,000.00",
        soles: "SOLES",
        readOnly: true,
        slides: 3,
        nextLabel: "<img src='../../assets/icons/right-arrow.png' />",
        prevLabel: "<img src='../../assets/icons/right-arrow.png' />",
        img_default: "https://res.cloudinary.com/firbix/image/upload/v1587480854/LandingPage/xaiax7maltovouzzrdv6.png"
      };
    },
    asyncData() {
      this.getPosts();
      this.pagging();
    },
    // async created() {
    //   await this.getPosts();
    //   await this.pagging();
    // },
    mounted() {
      $(document).ready(() => {
          $("#bid-input-1").focus(() => {
            var result = $("#bid-input-1").val();
            $("#bid-input-1").val(result.toString().replace(/,/g, ""));
          });
          $("#bid-input-1").blur(() => {
            var result = Number($("#bid-input-1").val()).toFixed(2);
            $("#bid-input-1").val(
              result.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
            );
          });
          $("#bid-input-2").focus(() => {
            var result = $("#bid-input-2").val();
            $("#bid-input-2").val(result.toString().replace(/,/g, ""));
          });
          $("#bid-input-2").blur(() => {
            var result = Number($("#bid-input-2").val()).toFixed(2);
            $("#bid-input-2").val(
              result.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
            );
          });
      });

    },
    methods: {
      toggleMoreInfo() {
        this.moreInfo = !this.moreInfo;
        if (this.moreInfo) {
          this.ver = "Ver menos";
        } else {
          this.ver = "Ver más";
        }
      },
      showModal() {
        if(this.dialogVisible){
          this.dialogVisible = false
        }else{
          this.dialogVisible = true;  
        }
      },
      showModal2() {
        if(this.dialogVisible2){
          this.dialogVisible2 = false
        }else{
          this.dialogVisible2 = true;  
        }
      },
      navSlide() {
        const nav = document.querySelector(".mobile-compression");
        nav.classList.toggle("nav-active");
      },
      SlideCarousel(value) {
        const carousel = this.$refs["carousel-home"];
        const currentPage = carousel.currentPage;
        const pageCount = carousel.pageCount;
        if (value == "prev") {
          carousel.goToPage(currentPage - 1);
        } else {
          carousel.goToPage(currentPage + 1);
        }
      },
      pagging() {
        // console.log("Entrando a buscar el API");
        ChangeType.find()
          .then(res => {
            console.log(res.data);
            this.timeRequest = res.data.request_time;
            // console.log("BCP antes:", this.bcpChange)
            for (let change of res.data.data) {
              // console.log(change);
              switch(change.name){
                case "Rextie":
                  if(change.exchange_type !== null){
                    this.rextieChange = change;
                    // console.log("Asignando: ", change.exchange_type)
                  }                  
                  break;                
                case "Firbid":
                    if(change.exchange_type !== null){
                      this.firbidChange = change;
                      // console.log("Asignando: ", change.exchange_type)
                    }
                  break;                
                case "Kambista":
                    if(change.exchange_type !== null){
                      this.kambistaChange = change;
                      // console.log("Asignando: ", change.exchange_type)
                    }
                  break;                
                case "BCP":
                    if(change.exchange_type !== null){
                      this.bcpChange = change;
                      // console.log("Asignando: ", change.exchange_type)
                    }
                  break;                
                case "Interbank":
                    if(change.exchange_type !== null){
                      this.interbankChange = change;
                      // console.log("Asignando: ", change.exchange_type)
                    }
                  break;                
                case "BBVA":
                    if(change.exchange_type !== null){
                      this.bbvaChange = change;
                      // console.log("Asignando: ", change.exchange_type)
                    }
                  break;                
                case "CocosYLucas":
                    if(change.exchange_type !== null){
                      this.cocosLucasChange = change;
                      // console.log("Asignando: ", change.exchange_type)
                    }
                  break;                
                case "Scotiabank":
                    if(change.exchange_type !== null){
                      this.scotiabankChange = change;
                      // console.log("Asignando: ", change.exchange_type)
                    }
                  break;                
                case "WesternUnion":
                    if(change.exchange_type !== null){
                      this.westerUnionChange = change;
                      // console.log("Asignando: ", change.exchange_type)
                    }
                  break;                
                case "TKambio":
                    if(change.exchange_type !== null){
                      this.tKambioChange = change;
                      // console.log("Asignando: ", change.exchange_type)
                    }
                  break;                
                case "Cambio Seguro":
                    if(change.exchange_type !== null){
                      this.cambioSeguroChange = change;
                      // console.log("Asignando: ", change.exchange_type)
                    }
                  break;                
              }
            }
            // console.log("BCP Despues:", this.bcpChange)
          })
          .catch(err => {
            console.log(err);
          });
      },
      
      async  getPosts() {
        try {
          let post = await blog.find();
          // console.log("blog: ")
          // console.log(post.data)
          // console.log("Tamaño del arreglo:")
          // console.log("rendered: "+ post.data[0].featured_media )
          for (let i = 0; i < post.data.length; i++) {
            // console.log("entran arreglo: "); 
            // console.log(post.data[i])
            // console.log("Busqueda de imágen");
            // console.log( await blog.getPost(post.data[i].featured_media ));
            this.postsArray.push({
              id: post.data[i].id,
              title: post.data[i].title.rendered,
              content: post.data[i].excerpt.rendered,
              link: post.data[i].link,
              img: post.data[i].featured_media == 0 ? undefined : await blog.getPost(post.data[i].featured_media )
            }); 
            // console.log("Terminando de consumir")
          }
          // console.log(this.postsArray)
        } catch (error) {
          console.log("error: "+error);
        }
      },
      exchangeValue() {
        let temp = this.dollars;
        this.dollars = this.soles;
        this.soles = temp;
        this.readOnly = !this.readOnly;
      }
    }
  };
</script>
