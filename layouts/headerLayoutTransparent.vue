<template>
<client-only>
  <div>
    <div
      class="header position-fixed header-transparent sticky-top justify-content-lg-between align-items-center"
    >
      <div class="container d-flex">
        <!-- Logo -->
        <div class="logo mt-1 mt-md-0">
          <router-link to="/">
            <img class="img-fluid logo-image" src="@/assets/logo_w.svg" alt />
          </router-link>
        </div>
        <!-- Primer segmento -->

        <!-- Nav xl -->
        <ul class="nav mx-auto d-none d-lg-flex">
          <li class="nav-item">
            <router-link to="/firbid" class="nav-link">¿Por qué FIRBID?</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/empresas" class="nav-link">Para empresas</router-link>
          </li>
          <li class="nav-item">
            <a href="https://www.firbid.com/blog/" target="_blank" class="nav-link">Blog</a>
          </li>
        </ul>

        <!-- Nav mobile -->
        <div class="close-nav" v-if="showMenu" @click="navSlide"></div>

        <!-- Contacto y Tercer Segmento -->
        <ul class="nav ml-auto ml-md-auto ml-lg-0 align-items-center" style="padding-right: 5px;">
          <li class="nav-item d-none d-lg-block">
            <a target="_blank" href="https://app.firbid.com/login" class="nav-link">Ingresar</a>
          </li>
          <li class="nav-item d-none d-lg-block ml-2 mr-5">
            <a
              target="_blank"
              href="https://app.firbid.com/registro"
              class="btn btn-outline-light outline"
              style="color: white;"
            >Regístrate</a>
          </li>
          <span class="nav-separator mr-3 mr-md-4 ml-auto"></span>
          <li class="nav-item">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=51915215892&text=Informaci%C3%B3n"
              class="icon icon-wsp"
            >
              <div class="wsp"></div>
            </a>
          </li>
          <li class="nav-item position-relative tel-header">
            <span class="badge bg-dark badge-number text-white rounded-pill pr-0" v-if="showNumber">
              (01) 721-5407
              <img src="@/assets/header/tele_h.svg" @click="toggleNumber()" alt />
            </span>
            <a href="tel:+51 997 822 771" class="icon icon-tele">
              <div class="tele"></div>
            </a>
          </li>
          <li class="nav-item mr-2 mr-xl-5">
            <a href="mailto:info@firbid.com" class="icon icon-mail">
              <div class="mail"></div>
            </a>
          </li>
        </ul>

        <!-- Burger -->
        <div class="content-button">
          <span @click="navSlide" class="icon ml-1 ml-lg-0 d-lg-none nav-link menu-btn-responsive">
            <span class="bar-menu bar-menu-1 span-black1"></span>
            <span class="bar-menu bar-menu-2 span-black1"></span>
          </span>
        </div>
      </div>
    </div>
    <div class="mobile-compression mx-auto">
      <div class="w-100 mx-auto nav-content">
        <div class="nav-1 w-100">
          <div class="nav-1-1 container">
            <router-link to="/" class="nav-link active nav-1-1-1">
              <img class="nav-link active firbid-responsive" src="@/assets/logo.svg" alt />
            </router-link>
            <!-- Contacto y Tercer Segmento -->
            <ul class="nav-1-1-2">
              <li class="nav-item">
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=51915215892&text=Informaci%C3%B3n"
                  class="icon icon-wsp"
                >
                  <div class="wsp"></div>
                </a>
              </li>
              <li class="nav-item tel-header">
                <span
                  class="badge bg-dark badge-number text-white rounded-pill pr-0"
                  v-if="showNumber"
                >
                  (01) 721-5407
                  <img src="@/assets/header/tele_h.svg" @click="toggleNumber()" alt />
                </span>
                <a href="tel:+51 997 822 771" class="icon icon-tele">
                  <div class="tele"></div>
                </a>
              </li>
              <li class="nav-item phone">
                <a href="mailto:info@firbid.com" class="icon icon-mail">
                  <div class="mail"></div>
                </a>
              </li>
              <!-- Burger -->
              <div class="content-button">
                <span
                  @click="navSlide"
                  class="icon ml-1 ml-lg-0 d-lg-none nav-link menu-btn-responsive"
                >
                  <span class="bar-menu bar-menu-1 span-menu span1"></span>
                  <span class="bar-menu bar-menu-2 span-menu span2"></span>
                </span>
              </div>
            </ul>
          </div>
          <div class="w-90 m-auto nav-1-2">
            <router-link to="/firbid" class="menu-item active">
              ¿Por qué FIRBID?
              <i
                class="fas fa-chevron-right"
                style="color: #9768FF; font-size: 12px !important;"
              ></i>
            </router-link>
            <router-link to="/empresas" class="menu-item active">
              Para empresas
              <i
                class="fas fa-chevron-right"
                style="color: #9768FF; font-size: 12px !important;"
              ></i>
            </router-link>
            <router-link to="/fideicomiso" class="menu-item active">
              Fideicomiso
              <i
                class="fas fa-chevron-right"
                style="color: #9768FF; font-size: 12px !important;"
              ></i>
            </router-link>
            <router-link to="/preguntas-frecuentes" class="menu-item active">
              Ayuda
              <i
                class="fas fa-chevron-right"
                style="color: #9768FF; font-size: 12px !important;"
              ></i>
            </router-link>
            <a href="https://www.firbid.com/blog/" target="_blank" class="menu-item active">
              Blog
              <i
                class="fas fa-chevron-right"
                style="color: #9768FF; font-size: 12px !important;"
              ></i>
            </a>
            <!-- <ul class="menu-redes justify-content-center">
                <li class="">
                  <a href="https://www.facebook.com/firbid/" target="_blank">
                    <img class="facebook-logo footer-image" src="@/assets/icons/fb.svg" alt />
                  </a>
                </li>
                <li class="">
                  <a href="https://www.linkedin.com/company/firbid/about/" target="_blank">
                    <img class="linkedin-logo footer-image" src="@/assets/icons/lin.svg" alt />
                  </a>
                </li>
                <li class="">
                  <a href="https://www.youtube.com" target="_blank">
                    <img class="youtube-logo footer-image" src="@/assets/icons/yo.svg" alt />
                  </a>
                </li>
                <li class="">
                  <a href="https://www.instagram.com/firbid.oficial/" target="_blank">
                    <img class="instagram-logo footer-image" src="@/assets/icons/ins.svg" alt />
                  </a>
                </li>
            </ul>-->
          </div>
        </div>
        <div class="nav-2 w-80">
          <div class="buttons-login">
            <a
              target="_blank"
              href="https://app.firbid.com/login"
              class="btn firbid-btn-outline nav-link outline"
            >Ingresar</a>
            <a
              target="_blank"
              href="https://app.firbid.com/registro"
              class="btn firbid-btn nav-link outline"
            >Crear cuenta</a>
          </div>
        </div>
      </div>
    </div>
    <slot />

    <footer-layout></footer-layout>
  </div>
  </client-only>
</template>

<script>
import footerLayout from "./footerLayout";
export default {
  components: {
    "footer-layout": footerLayout
  },
  data() {
    return {
      headerLogo: "@/assets/FIRBID_blanco.svg",
      styleWhite: false,
      showNumber: false,
      showMenu: false,
      scrolling: false
    };
  },
  mounted() {
    window.addEventListener("scroll", function() {
      var header = document.querySelector(".sticky-top");
      header.classList.toggle("headerScroll", window.scrollY > 0);
      document
        .querySelector(".wsp")
        .classList.toggle("scroll", window.scrollY > 0);
      document
        .querySelector(".tele")
        .classList.toggle("scroll", window.scrollY > 0);
      document
        .querySelector(".mail")
        .classList.toggle("scroll", window.scrollY > 0);
      document
        .querySelector(".mail")
        .classList.toggle("scroll", window.scrollY > 0);
      var list;
      list = document.querySelectorAll(".menu-btn-responsive span");
      for (var i = 0; i < list.length; ++i) {
        list[i].classList.toggle("span-black", window.scrollY > 0);
      }
      if (window.scrollY == 0) {
        document
          .querySelector(".logo-image")
          .setAttribute(
            "src",
            "https://res.cloudinary.com/firbix/image/upload/v1582147190/logos/w9zjxjv0cauh5r9pddcv.svg",
            window.scrollY == 0
          );
          this.scrolling= false;
      }
      if (window.scrollY > 0 && !this.scrolling) {
        document
          .querySelector(".logo-image")
          .setAttribute(
            "src",
            "https://res.cloudinary.com/firbix/image/upload/v1582147188/logos/r5zk5bera5ief0v6n2z9.svg",
            window.scrollY > 0
          );
          this.scrolling= true;
      }
    });
  },
  methods: {
    navSlide() {
      console.log("Mostrando o ocultando menu:  ", this.showMenu);
      if (!this.showMenu) this.showMenu = true;
      else {
        this.showMenu = false;
      }
      const nav = document.querySelector(".mobile-compression");
      nav.classList.toggle("nav-active");
    },
    toggleNumber() {
      this.showNumber = !this.showNumber;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/includes";

.content-button {
  display: flex;
  align-items: center;
  position: relative;
  right: -15px;
}
.nav {
  padding-right: 10px;
  .nav-separator {
    display: none;
    @media (min-width: 992px) {
      display: block;
    }
  }
  @media (min-width: 768px) {
    padding-right: 30px;
  }
  @media (min-width: 992px) {
    padding-right: 0;
  }
}

/* Iconos header */

.icon-wsp {
  div {
    background-image: url("./../assets/header/wsp_w.svg") !important;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    &:hover {
      background-image: url("./../assets/header/wsp.svg") !important;
    }
    &.scroll {
      background-image: url("./../assets/header/wsp.svg") !important;
      &:hover {
        background-image: url("./../assets/header/wsp.svg") !important;
      }
    }
  }
}
.icon-tele {
  div {
    background-image: url("./../assets/header/tele_w.svg") !important;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    &:hover {
      background-image: url("./../assets/header/tele.svg") !important;
    }
    &.scroll {
      background-image: url("./../assets/header/tele.svg") !important;
      &:hover {
        background-image: url("./../assets/header/tele.svg") !important;
      }
    }
  }
}
.icon-mail {
  div {
    background-image: url("./../assets/header/mail_w.svg") !important;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    &:hover {
      background-image: url("./../assets/header/mail.svg") !important;
    }
    &.scroll {
      background-image: url("./../assets/header/mail.svg") !important;
      &:hover {
        background-image: url("./../assets/header/mail.svg") !important;
      }
    }
  }
}
.icon {
  div {
    height: 22px;
    width: 22px;
  }
  img {
    transition: 0.5s;
    opacity: 1;
    position: relative;
    top: -9px;
  }
}

/* Variables css */

.nav-separator {
  display: inline-block;
  width: 1px;
  height: 15px;
  background-color: rgba($white, 0.9);

  @include media-breakpoint-up(md) {
    .nav-separator {
      height: 20px;
    }
  }
}

.logo-image {
  position: relative;
  max-height: 27.6px;
  @media (min-width: 992px) {
    left: 4px;
  }
  @media (min-width: 768px) {
    max-height: 37.6px;
  }
}

@media only screen and (max-width: 767px) {
  .header-transparent img {
    // width: 128px;
    padding: 0;
  }
}

.header-transparent {
  border-bottom: 1px solid rgba(220, 227, 236, 0.114);
  padding: 15px 24px 15px 24px;
  z-index: 1024 !important;
  .nav-link {
    color: $dark;
    padding: 8px 1rem !important;
    transition: color 0.5s;
    padding-left: 0;
    padding-right: 0;
    @media (min-width: 992px) {
      color: white;
    }
    &:hover {
      color: $dark;
    }
  }

  /* Register button */
  .btn-outline-light {
    background-color: transparent;
    transition: background-color 0.7s;

    &:hover {
      background-color: $hover_primary;
    }
  }

  .icon:hover {
    color: $dark;
  }
}

.header {
  position: fixed;
  width: 100vw;
  background-color: rgba(112, 85, 231, 0);
  transition: all 0.5s;
}

.span-black1 {
  background-color: white !important;
}
.headerScroll {
  padding: 15px 24px 15px 24px;
  position: fixed;
  width: 100vw;
  transition: all 0.5s;
  background-color: rgba(255, 255, 255) !important;

  .nav-link,
  .icon {
    color: $dark;

    &:hover {
      color: #9768ff;
    }
  }

  .btn-outline-light {
    background-color: $primary;
  }

  .nav-separator {
    background-color: rgba($dark, 0.9);
  }
}

.mobile-compression {
  position: fixed;
  overflow-x: hidden;
  z-index: 9999999999;
  top: 0%;
  left: 0%;
  width: 100%;
  background-color: white;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
  transition: 0.5s ease-in;
  height: 0;

  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 992px) {
    width: 60% !important;
  }
}

.close-nav {
  position: fixed;
  top: 0;
  right: 0;
  width: 20%;
  height: 100vh;
}

@media screen and (min-width: 992px) {
  .badge-dark {
    position: absolute;
    top: 1%;
    left: 34vw;
  }
}

.burger {
  display: block;
  cursor: pointer;
}

@media screen and (max-width: 991px) {
  .firbid-responsive {
    display: block;
    cursor: pointer;
  }

  .contact {
    align-items: center;
  }

  .hide-responsive {
    display: block;
  }

  .mobile-compression li {
    margin-left: 33px;
  }

  .firbid-btn-outline {
    border: 1px solid #9768ff;
  }

  .firbid-btn {
    background-color: #9768ff;
    border-color: #9768ff;
    box-shadow: 0 9px 10px rgba(39, 44, 60, 0.24);
  }

  @media screen and (max-width: 767px) {
    .header .border-left {
      border: none;
    }

    .nav-finale {
      margin-top: 50%;
    }

    .firbid-responsive {
      margin-top: 2rem;
    }
  }

  @media screen and (min-width: 300px) and (min-width: 320px) and (orientation: landscape) {
    .firbid-responsive {
      width: 10vw !important;
    }
    .nav-finale {
      margin-top: 0 !important;
    }
    .nav-template {
      margin: 0;
    }
  }

  @media screen and (min-width: 991px) and (min-width: 320px) and (orientation: landscape) {
    .firbid-btn-outline,
    .firbid-btn {
      width: 40% !important;
    }
  }

  .nav-active {
    height: 100vh;
  }
}

/* Se comparten clases con el otro header */
.badge.bg-dark {
  padding: 0.8rem;
  width: 150px;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  z-index: 100;
  cursor: pointer;
}

.iconPhone {
  font-size: 15px;
  margin-left: 1rem;
}

.phone-with-number {
  color: $primary !important;
  font-size: 15px !important;
}
.span-black {
  background-color: #1f1933 !important;
}
.header-transparent .menu-btn-responsive span {
  height: 1px !important;
}
.header-transparent .menu-btn-responsive {
  padding: 4px 1rem !important;
  outline: none;
  &:focus {
    outline: none;
  }
}
.tel-header {
  margin-right: 10px !important;
  margin-left: 10px !important;
}
.outline {
  outline: none;
}
.btn-outline-light:focus,
.btn-outline-light.focus {
  box-shadow: none !important;
}

@media (max-width: 991px) {
  .buttons-login {
    margin: 0;
    a {
      padding-left: 15px;
      padding-right: 15px;
      text-align: center;
      color: #9768ff !important;
      outline: none;
      &.firbid-btn {
        &:focus,
        &:hover {
          color: white !important;
        }
      }
      &:focus {
        outline: none !important;
        background: #ffffff;
        box-shadow: none;
      }
      &:-moz-read-write:focus {
        background: #eeeeee;
        outline: none;
      }
      &.firbid-btn {
        color: white !important;
        margin-top: 10px;
      }
    }
  }
  .copyright {
    padding-top: 30px;
    width: 80%;
    text-align: center;
  }
  .firbid-btn-outline {
    border: 1px solid #9768ff !important;
  }

  .firbid-btn {
    color: white !important;
    background-color: #9768ff !important;
    border-color: #9768ff !important;
    border-radius: 0.1rem !important;
  }
}
.nav-content {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  .nav-1 {
    .nav-1-1 {
      display: flex;
      justify-content: space-between;
      padding-top: 31px;
      padding-bottom: 33px;
      padding-left: 39px;
      padding-right: 33px;
      border-bottom: 1px solid #dce3ec;
      margin-bottom: 0;
      @media (min-width: 576px) {
        padding-left: 14px;
        padding-right: 10px;
        margin-left: auto;
        margin-right: auto;
        max-width: 540px;
      }
      @media (min-width: 768px) {
        padding-left: 30px;
        padding-right: 30px;
        margin: auto;
        max-width: 540px;
      }
      .nav-1-1-1 {
        padding: 0 !important;
        height: 20px;
        img {
          margin-top: 0;
          max-height: 27.6px;
          padding: 0 !important;
        }
      }
      .nav-1-1-2 {
        display: flex;
        align-items: center;
        margin-bottom: 0;
        position: relative;
        top: 1px;
        li {
          list-style: none;
          &.tel-header {
            margin-left: 10px !important;
            margin-right: 10px !important;
          }
          &.phone {
            margin-left: 0px;
            margin-right: 0;
          }
          a {
            .div {
              height: 22px;
              width: 22px;
            }
          }
        }
        .content-button {
          margin-left: 10px;
          margin-right: 9px;
          @media (min-width: 375px) {
            margin-left: 10px;
            margin-right: 9px;
          }
          a {
            outline: none;
            &:focus {
              outline: none !important;
            }
          }
          .span-menu {
            bottom: #1f1933;
            background-color: #1f1933;
            width: 26px;
            height: 1.5px;
            &.span1 {
              transform: translateY(3px) rotate(45deg);
            }
            &.span2 {
              transform: translateY(-3px) rotate(-45deg);
            }
          }
        }
        .icon-wsp {
          div {
            background-image: url("./../assets/header/wsp.svg") !important;
            background-size: contain;
            background-position: center center;
            background-repeat: no-repeat;
          }
        }
        .icon-tele {
          div {
            background-image: url("./../assets/header/tele.svg") !important;
            background-size: contain;
            background-position: center center;
            background-repeat: no-repeat;
          }
        }
        .icon-mail {
          div {
            background-image: url("./../assets/header/mail.svg") !important;
            background-size: contain;
            background-position: center center;
            background-repeat: no-repeat;
          }
        }
      }
    }
    .nav-1-2 {
      display: flex;
      flex-direction: column;
      .menu-item {
        border-bottom: 1px solid #dce3ec;
        padding: 15px 0;
        color: #1f1933;
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // font-weight: bold;
      }
      .menu-redes {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 30px;
        li {
          list-style: none;
          margin-left: 7.5px;
          margin-right: 7.5px;
        }
      }
    }
  }
  .nav-2 {
    padding-bottom: 90px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media (max-width: 767px) {
}
</style>

