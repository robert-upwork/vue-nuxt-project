<template>
  <div>
    <div class="header-white fixed-top justify-content-lg-between align-items-center" >
      <div class="container  d-flex" style="justify-content: space-between;">
        <!-- Logo -->
        <div class="logo mt-1 mt-md-0">
          <router-link to="/"><img id="logo-imagen" src="@/assets/logo.svg" alt /></router-link>
        </div>
        <!-- Primer segmento -->

        <!-- Nav xl -->
        <ul class="nav mx-auto d-none d-lg-flex">
          <li class="nav-item">
            <router-link to="/firbid" class="nav-link">
            ¿Por qué FIRBID?
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/empresas"  class="nav-link">
            Para empresas
            </router-link>
          </li>
          <li class="nav-item">
            <a
              href="https://www.firbid.com/blog/"
              target="_blank"
              class="nav-link"
            >Blog</a>
          </li>
        </ul>

        <!-- Nav mobile -->
        <div class="close-nav" v-if="showMenu" @click="navSlide" ></div>
        
        <!-- Segundo Segmento -->
        <ul class="nav hide-xs align-items-center">
          <li class="nav-item">
            <a  target="_blank" href="https://app.firbid.com/login" class="nav-link link-login active">Ingresar</a>
          </li>
          <li class="nav-item mr-5">
            <a  target="_blank" href="https://app.firbid.com/registro" class="register nav-link active outline" style="color: #dce3ec;">Regístrate</a>
          </li>
        </ul>

        <!-- Contacto y Tercer Segmento -->
        <ul class="nav ml-auto ml-md-auto ml-lg-0 align-items-center" style="padding-right: 5px; position: relative; top: 0px;">
          <span class="nav-separator mr-3 mr-md-4 ml-auto text-dark bg-dark"></span>
          <li class="nav-item">
            <a href="#" class="icon icon-wsp2">
              <div class="wsp">
                
              </div>
            </a>
          </li>
          <li class="nav-item tel-header position-relative">
            <span class="badge bg-dark badge-number text-white rounded-pill pr-0" v-if="showNumber">
              (01) 721-5407 <img src="@/assets/header/tele_h.svg"  @click="toggleNumber()" alt="">
            </span>
            <a href="#" class="icon icon-tele2" @click="toggleNumber()">
              <div class="tele">
                
              </div>
            </a>
          </li>
          <li class="nav-item mr-2 mr-xl-5 ">
            <a href="mailto:info@firbid.com" class="icon icon-mail2">
              <div class="mail">
                
              </div>
            </a>
          </li>
        </ul>

        <!-- Burger -->
        <div class="content-button">
          <span @click="navSlide" class="icon ml-1 ml-lg-0 d-lg-none nav-link menu-btn-responsive">
            <span class="bar-menu bar-menu-1 span-black2"></span>
            <span class="bar-menu bar-menu-2 span-black2"></span>
          </span>
        </div>
        
      </div>
    </div>
    <div class="mobile-compression mx-auto">
      <div class="w-100 mx-auto nav-content">
        <div class="nav-1 w-100 ">
          <div class="nav-1-1 w-100 ">
            <router-link to="/" class="nav-link  active nav-1-1-1">
              <img class="nav-link active firbid-responsive" src="@/assets/logo.svg" alt />
            </router-link>
              <!-- Contacto y Tercer Segmento -->
            <ul class="nav-1-1-2">
              <li class="nav-item">
                <a target="_blank" href="https://api.whatsapp.com/send?phone=51915215892&text=Informaci%C3%B3n" class="icon icon-wsp">
                  <div class="wsp">
                    
                  </div>
                </a>
              </li>
              <li class="nav-item tel-header">
                <span class="badge bg-dark badge-number text-white rounded-pill pr-0" v-if="showNumber">
                  (01) 721-5407 <img src="@/assets/header/tele_h.svg"  @click="toggleNumber()" alt="">
                </span>
                <a href="tel:+51 997 822 771" class="icon icon-tele">
                  <div class="tele">
                    
                  </div>
                </a>
              </li>
              <li class="nav-item phone ">
                <a href="mailto:info@firbid.com" class="icon icon-mail">
                  <div class="mail">
                    
                  </div>
                </a>
              </li>
              <!-- Burger -->
              <div class="content-button">
                <span @click="navSlide" class="icon ml-1 ml-lg-0 d-lg-none nav-link menu-btn-responsive">
                  <span class="bar-menu bar-menu-1 span-menu span1"></span>
                  <span class="bar-menu bar-menu-2 span-menu span2"></span>
                </span>
              </div>
            </ul>
          </div>
          <div class=" w-90 m-auto nav-1-2">
            <router-link to="/firbid" class="menu-item active">
              ¿Por qué FIRBID?
              <i class="fas fa-chevron-right" style="color: #9768FF; font-size: 12px !important;"></i>
            </router-link>
            <router-link to="/empresas" class="menu-item active">
              Para empresas
              <i class="fas fa-chevron-right" style="color: #9768FF; font-size: 12px !important;"></i>
            </router-link>
            <router-link to="/fideicomiso" class="menu-item active">
              Fideicomiso
              <i class="fas fa-chevron-right" style="color: #9768FF; font-size: 12px !important;"></i>
            </router-link>
            <router-link to="/preguntas-frecuentes" class="menu-item active">
              Ayuda
              <i class="fas fa-chevron-right" style="color: #9768FF; font-size: 12px !important;"></i>
            </router-link>
            <a
              href="https://www.firbid.com/blog/"
              target="_blank"
              class="menu-item active"
            >
              Blog
              <i class="fas fa-chevron-right" style="color: #9768FF; font-size: 12px !important;"></i>
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
            </ul> -->
          </div>
          
        </div>
        <div class="nav-2 w-80">
            <div class="buttons-login">
            <a target="_blank" href="https://app.firbid.com/login" class="btn firbid-btn-outline nav-link outline">Ingresar</a>
            <a target="_blank" href="https://app.firbid.com/registro" class="btn firbid-btn nav-link outline">Crear cuenta</a>
          </div>
          
        </div>
        
      </div>

      
    </div>
    <slot />
    <footer-layout></footer-layout>
  </div>
</template>

<script>
import footerLayout from "./footerLayout";
export default {
  components: {
    "footer-layout": footerLayout
  },
  data() {
    return {
      showNumber: false,
      showMenu: false
    };
  },
  
  methods: {
    navSlide() {
      if(!this.showMenu)
        this.showMenu =  true;
      else{
        this.showMenu = false;
      }
      const nav = document.querySelector(".mobile-compression");
      nav.classList.toggle("nav-active");
    },
    toggleNumber() {
      this.showNumber = !this.showNumber
    }
  }
};
</script>

<style lang="scss">   
@import '../assets/styles/includes';

  
  .content-button{
    display: flex;
    align-items: center;
    position: relative;
    right: -15px;
    @media(min-width: 992px) {

    }
  }
  
  .nav{
    padding-right: 10px;
    margin-left: -5px;
    .nav-separator{
      display: none;
      @media(min-width:992px){
        display: block;
      }
    }
    @media(min-width:768px){      
      padding-right: 0px;
    }
    @media(min-width:992px){
      padding-right: 0;
    }
  }
.menu-btn-responsive span{
  height: 1px !important;
}
.icon-wsp2{
  div{
    background-image: url('./../assets/header/wsp.svg');
    background-size: contain;
    background-position:  center center;
    background-repeat: no-repeat;
    &:hover{
      background-image: url('./../assets/header/wsp_h.svg');
    }
  }
}
.icon-tele2{
  div{
    background-image: url('./../assets/header/tele.svg');
    background-size: contain;
    background-position:  center center;
    background-repeat: no-repeat;
    &:hover{
      background-image: url('./../assets/header/tele_h.svg');
    }
  }
}
.icon-mail2{
  div{
    background-image: url('./../assets/header/mail.svg');
    background-size: contain;
    background-position:  center center;
    background-repeat: no-repeat;
    &:hover{
      background-image: url('./../assets/header/mail_h.svg');
    }
  }
}
.icon{
  div{
    height: 22px;
    width: 22px;
  }
  img{
  transition: 0.5s;
    opacity: 1;
    position: relative;
    top: -9px;
  }
}




.header-white {
  background-color: #fff;
  padding: 15px 24px 15px 24px;
  border-bottom: 1px solid rgba(220, 227, 236, 0.57);
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 1024 !important;
  .register {
    border: 1px solid #9768ff;
    background-color: #9768ff;
    color: #dce3ec;
    transition: background-color 0.5s;
    border-radius: 0.1rem;
    padding-left: 2rem;
    padding-right: 2rem;

    &:hover {
      background-color: #6228e4;
      color: #ffffff;
    }
  }

}

.badge-dark {
  position: absolute;
  top: 1%;
  left: 34vw;
}

.nav-link {
  color: #1f1933;
}

.fa-phone {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

@media only screen and (max-width: 1199px) {
  
  .firbid.hide-lg {
    display: block;
  }

  .imagen {
    margin-right: 27vw !important;
  }

  .car {
    display: none !important;
  }
}

@media screen and (max-width: 1199px) {
  .burger {
    display: block;
    cursor: pointer;
  }

  .firbid-responsive {
    display: block;
    cursor: pointer;
    margin-top: 2vh;
  }

  .contact {
    align-items: center;
  }

  .hide-responsive {
    display: block;
  }

  .logo {
    align-items: flex-start !important;
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
    border-radius: 0.1rem;
  }

  .nav-finale {
    margin-top: 10vw;
  }
}

@media screen and (max-width: 576px) {
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

@media screen and (min-width: 766px) and (min-width: 320px) and (orientation: landscape) {
  .firbid-btn-outline,
  .firbid-btn {
    width: 40% !important;
  }
}

.mobile-compression{
    display: block;
  @media(min-width: 992px){
    display: none;
  }
}

.header-white .mobile-compression .nav-link,
.header-white .link-login.active {
  transition: all 0.5s;
}


.header-white .social-menu .nav-link:hover {
  color: #9768ff !important;
}

.icon.text-dark:hover {
  color: $primary !important;
}
.span-black2{
  background-color: #1f1933 !important;

}

#logo-imagen{
  max-height:27.6px;
}
@media(min-width: 768px){

  #logo-imagen{
    max-height:37.6px;
  }
}
.close-nav{
  position: fixed;
  top: 0;
  right: 0;
  width: 20%;
  height: 100vh;
}
.outline{
  outline: none;
}

.btn-outline-light:focus, .btn-outline-light.focus{
  box-shadow: none;
}


.mobile-compression {
 position: fixed;
  overflow-x: hidden;
  z-index: 9999999999 ;
  top: 0%;
  left: 0%;
  width: 100%;
  background-color: white;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
  transition: 0.5s ease-in;
  height: 0;

  @media(min-width: 768px) {
    width: 40%;
  }
  @media(min-width: 992px) {
    width: 60% !important;
  }
}

.nav-active {
  height: 100vh;
}

.tel-header{
  margin-left: 10px;
  margin-right: 10px;
}
@media(max-width: 991px){
  .buttons-login{
    margin: 0;
    a{
      padding-left: 15px;
      padding-right: 15px;
      text-align: center;
      color: #9768FF !important;
      &.firbid-btn {
        color: white !important;
        margin-top: 10px;
        box-shadow: 0 9px 10px rgba(39,44,60,.24);
      }
    }

  }
  .copyright{
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
    box-shadow: 0 9px 10px rgba(39,44,60,.24);
  }
}
.header-white {
.nav-content{
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  .nav-1{    
    .nav-1-1{
      display:flex;
      justify-content: space-between;
      padding-top: 31px;
      padding-bottom: 33px;
      padding-left: 39px;
      padding-right: 33px;
      border-bottom: 1px solid #DCE3EC;
      margin-bottom: 0;
      @media(min-width: 576px){
        padding-left: 15px;
        padding-right: 9px;
        margin: auto;
        max-width: 540px;
      }
      @media(min-width: 768px){
        padding-left: 30px;
        padding-right: 30px;
        margin: auto;
        max-width: 540px;
      }
      .nav-1-1-1{
        padding: 0 !important;
        height:20px;
        img{
          margin-top: 0;
          max-height: 27.6px;
          padding: 0 !important;
        }
      }
      .nav-1-1-2{
        display: flex;
        align-items: center;
        margin-bottom: 0;
        position: relative;
        top: 1px !important;
        li{
          list-style:none;
          &.tel-header{
            margin-left: 10px;
            margin-right: 10px;
          }
          &.phone{
            margin-left: 0;
            margin-right: 0;
          }
          a{
            .div{
              height: 22px;
              width: 22px;
            }
            
          }
        }
        .content-button{
          margin-left: 10px;
          margin-right: 0px;
          @media(min-width: 375px){
            margin-left: 10px;
            margin-right: 9px;
          }
          a{            
            background: #eeeeee;
            outline: none;
            &:focus{
              outline: none !important;
              background: #ffffff;
              box-shadow: none;
            }
          }
          .span-menu{
            bottom: #1F1933;
            background-color: #1F1933;
            width: 27.6px ;
            height: 1.5px;
            &.span1{
              transform: translateY(3px) rotate(45deg);
            }
            &.span2{
              transform: translateY(-3px) rotate(-45deg);

            }
          }
        }
        .icon-wsp{
          div{
            background-image: url('./../assets/header/wsp.svg') !important;
            background-size: contain;
            background-position:  center center;
            background-repeat: no-repeat;
          }
        }
        .icon-tele{
          div{
            background-image: url('./../assets/header/tele.svg') !important;
            background-size: contain;
            background-position:  center center;
            background-repeat: no-repeat;
          }
        }
        .icon-mail{
          div{
            background-image: url('./../assets/header/mail.svg') !important;
            background-size: contain;
            background-position:  center center;
            background-repeat: no-repeat;
          }
        }
      }
    }
    .nav-1-2{
      display: flex;
      flex-direction: column;
      .menu-item{
        border-bottom: 1px solid #DCE3EC;
        padding: 15px 0;
        color: #1f1933;
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: 0.5s;
        // font-weight: bold;
        &:hover, &:focus, &:active{
          color:#9a6cff;
        }
      }
      .menu-redes{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 30px;
        li{
          list-style: none;
          margin-left: 7.5px;
          margin-right: 7.5px;
        }
      }
    }
  }
  .nav-2{
    padding-bottom: 90px;
    margin-left: auto;
    margin-right: auto;
  }
  
}
}
</style>