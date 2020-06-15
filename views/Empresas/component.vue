<style src="./style.scss" lang="scss" scoped></style>
<template src="./template.html"></template>

<script>
/* eslint-disable */

import blog from "../../services/blog";
import ChangeType from "../../services/changeType";
// import {Carousel3d, Slide} from "vue-carousel-3d"
import FormatData from "../../helpers/formatData";
import $ from 'jquery'

const changeTypeForm = {
  exchange_type: {
    ask: "3.4567",
    bid: "3.4567"
  },
  name: "-"
};

export default {
  components: {
      "carousel-3d": () => process.browser ? import('vue-carousel-3d').then(m => m.Carousel3d) : null,
      "slide-3d": () => process.browser ? import('vue-carousel-3d').then(m => m.Slide) : null,
  },
  data() {
    return {
      dialogVisible: false,
      postsArray: [],
      dollars: "10,000.00",
      soles: "SOLES",
      readOnly: true,
      sunatChange: { ...changeTypeForm },
      sbsChange: { ...changeTypeForm },
      img_default: "https://res.cloudinary.com/firbix/image/upload/v1587480854/LandingPage/xaiax7maltovouzzrdv6.png"
    };
  },

  mounted() {
    this.pagging();
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

  async created() {
    await this.getPosts();
    await this.format();
    console.log(this.postsArray);
  },

  methods: {
    format(){
      $(document).ready(() => {
          $("#bid-input-1").focus(() => {
            var result = $("#bid-input-1").val();
            $("#bid-input-1").val(result.toString().replace(/,/g, ""));
          });
          $("#bid-input-1").blur(() => {
            var result = $("#bid-input-1").val();
            $("#bid-input-1").val(
              result.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
            );
          });
          $("#bid-input-2").focus(() => {
            var result = $("#bid-input-2").val();
            $("#bid-input-2").val(result.toString().replace(/,/g, ""));
          });
          $("#bid-input-2").blur(() => {
            var result = $("#bid-input-2").val();
            $("#bid-input-2").val(
              result.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
            );
          });
      });
    },
    showModal() {
      this.dialogVisible = true;
    },
    navSlide() {
      const nav = document.querySelector(".mobile-compression");
      nav.classList.toggle("nav-active");
    },

    pagging() {
      ChangeType.find()
        .then(res => {
          console.log(res.data.data);
          for (let change of res.data.data) {
            console.log(change);
            change = FormatData(change);
            if (change.name == "Sunat") {
              this.sunatChange = change;
            } else if (change.name == "SBS") {
              this.sbsChange = change;
            } 
          }
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
        console.log("Tamaño del arreglo:")
        console.log("rendered: "+ post.data[0].featured_media )
        for (let i = 0; i < post.data.length; i++) {
          console.log("entran arreglo: "); 
          console.log(post.data[i])
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