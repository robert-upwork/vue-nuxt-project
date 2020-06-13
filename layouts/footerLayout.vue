<template>
  <!-- Footer -->
  <div class="fondo-footer footer container-fluid ">
    <div class="row container mx-auto justify-content-center text-white">
      <div
        class="col-12 col-md-4 col-lg-5 text-center mt-md-5mb-3 mb-md-0 d-flex flex-column" style="padding-top:0;"
      >
        <h6
          class="w-700 mb-3 mb-md-4 align-self-center align-self-md-start mt-md-5 text-center text-md-left text-lg-center ml-0 pl-0 w-75 pl-lg-3 ml-md-3 ml-lg-2 footer-title" style="padding-top:0;"
        >Síguenos</h6>
        <ul class="nav justify-content-center">
          <li class="nav-item px-1">
            <a href="https://www.facebook.com/firbid/" target="_blank">
              <img class="facebook-logo footer-image" src="@/assets/icons/fb.svg" alt />
            </a>
          </li>
          <li class="nav-item px-1">
            <a href="https://www.linkedin.com/company/firbid/about/" target="_blank">
              <img class="linkedin-logo footer-image" src="@/assets/icons/lin.svg" alt />
            </a>
          </li>
          <li class="nav-item px-1">
            <a href="https://www.youtube.com" target="_blank">
              <img class="youtube-logo footer-image" src="@/assets/icons/yo.svg" alt />
            </a>
          </li>
          <li class="nav-item px-1">
            <a href="https://www.instagram.com/firbid.oficial/" target="_blank">
              <img class="instagram-logo footer-image" src="@/assets/icons/ins.svg" alt />
            </a>
          </li>
        </ul>
      </div>
      <div
        class="col-12 col-md-4 col-lg-3 why pt-lg-0 d-flex flex-column justify-content-start align-items-center align-items-lg-start mt-md-5 "  style="padding-top:0; padding-bottom:0;"
      >
        <ul class="navbar-nav text-white text-center text-md-left">
          <li class="nav-item">
            <h6 class="footer-title mt-3 mt-md-0 mb-4">Interés</h6>
          </li>
          <li class="nav-item">
            <router-link to="/firbid"><p class="little text-white mb-md-3 mb-1" style="font-size: 17px !important">¿Por qué FIRBID?</p></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/empresas"><p class="little text-white mb-md-3 mb-1" style="font-size: 17px !important">Empresas</p></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/fideicomiso"><p class="little text-white mb-md-3 mb-1" style="font-size: 17px !important">Fideicomiso</p></router-link>
          </li>
          <li class="nav-item">
          </li>
          <li class="nav-item">
             <a href="https://firbid.com/blog/" target="_blank" class="nav-link p-0">
              <p class="little text-white mb-md-3" style="font-size: 17px !important">Blog</p>
            </a>
          </li>
        </ul>
      </div>

      <div
        class="col-12 col-md-4 col-lg-4 con pt-lg-0 d-flex flex-column justify-content-center align-items-center justify-content-lg-start align-items-lg-start mt-md-5"  style="padding-top:0; padding-bottom:0;"
      >
        <ul class="navbar-nav text-white text-center text-md-left">
          <li class="item-footer nav-item">
            <h5 class="footer-title mt-3 mt-md-0 mb-4">Contacto</h5>
          </li>
          <li class="item-footer nav-item">
            <p class="mb-1 mb-md-3">
              <img src="@/assets/icons/@.svg" class="img-fluid" alt />
              <a href="mailto:info@firbid.com"
              class="little text-white mb-1 mb-md-3" style="font-size: 17px !important" > info@firbid.com </a>
              
            </p>
          </li>

          <li class="item-footer nav-item">
            <p class=" mb-1 mb-md-3">
              <img src="@/assets/icons/wsp.svg" class="img-fluid" alt />
              <a target="_blank"
                  href="https://api.whatsapp.com/send?phone=51915215892&text=Informaci%C3%B3n"
                  class="little text-white mb-1 mb-md-3" style="font-size: 17px !important" 
                > 915 215 892 </a>
            </p>
          </li>
          <li class="item-footer nav-item">
            <p class="mb-1 mb-md-3">
              <img src="@/assets/icons/tel.svg" class="img-fluid" alt />
              <a 
                  href="tel:+51 997 822 771"
                  class="little text-white mb-1 mb-md-3" style="font-size: 17px !important" 
                > 01-7215407 </a>
            </p>
          </li>
          <li class="item-footer nav-item">
            <p class="mb-1 mb-md-3">
              <img src="@/assets/icons/dir.svg" class="img-fluid" alt />
              <a target="_blank"
                  href="https://goo.gl/maps/fr8JVevydMY9uSGm8"
                  class="little text-white mb-1 mb-md-3" style="font-size: 17px !important" 
                > Innova ESAN - Surco. </a>
              
            </p>
          </li>
        </ul>
      </div>
    </div>

    <hr class="footer-hr mt-3" />

    <div class="row justify-content-center align-items-center text-center text-white my-lg-3">
      <div class="col-12 d-flex justify-content-center">
        <ul class="nav d-none d-md-flex justify-content-center footer-last-links">
          <li class="nav-item px-2">
            <router-link to="/preguntas-frecuentes" class="nav-link">
              Preguntas Frecuentes
           </router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="terminos-condiciones" class="nav-link">
              Términos y Condiciones
           </router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="/politicas-privacidad" class="nav-link">
              Política de Privacidad
           </router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="/libro-reclamaciones" class="nav-link">
              Libro de reclamaciones
           </router-link>
          </li>
        </ul>
        <ul class="navbar-nav d-md-none mt-3 mb-3 w-75 mx-auto justify-content-around text-center footer-last-links">
          
          <li class="nav-item px-2">
            <router-link to="/preguntas-frecuentes" class="nav-link">
              Preguntas Frecuentes
           </router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="terminos-condiciones" class="nav-link">
              Términos y Condiciones
           </router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="/politicas-privacidad" class="nav-link">
              Política de Privacidad
           </router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="/libro-reclamaciones" class="nav-link">
              Libro de reclamaciones
           </router-link>
          </li>
        </ul>
      </div>
    </div>

    <hr class="footer-hr mb-3" />

    <div class="row justify-content-center text-center">
      <div class="col-12">
        <p class="w-400 footer-copy">&copy; Todos los derechos reservados 2020</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
@import '../assets/styles/includes';

.footer-image {
  width: 30px;
}

.footer-title {
  font-size: 17px;
}
.footer{
  .nav-item{
    a{
      text-decoration: none;
    }
  }
}
.footer-last-links {
  .nav-link {
    color: $white;
    font-size: 14px;
    transition: color .5s;

    &:hover {
      color: $primary;
    }

    @include media-breakpoint-up(md) {
      font-size: 12px;
    }

    @include media-breakpoint-up(lg) {
      font-size: 14px;
    }

  }
}

.footer-copy {
  color: #9F9FAF;
  font-size: 12px;

  @include media-breakpoint-up(md) {
    font-size: 14px;
  }
}

.footer-hr {
  background-color: #ffffff;
  width: 90%;
  margin: 0 auto;

  @include media-breakpoint-up(lg) {
      width: 80%;
  }
}

.fondo-footer {
  background-color: #272c3c;
  font-size: 1.1rem !important;
  padding-top: 45px;
  @media(min-width: 768px){
    padding-top: 0px;
  }
}

.fondo-footer .text-white .super-little {
  font-size: 12px;
}

.navbar-nav .nav-item .little, .text-white .super-little, .facebook-logo, .linkedin-logo, .instagram-logo, .youtube-logo{
  transition: all 0.5s;
}

.navbar-nav .nav-item .little:hover,
.text-white .super-little:hover {
  color: #9768ff !important;
  text-decoration: none;
}

.facebook-logo:hover, .linkedin-logo:hover, .instagram-logo:hover, .youtube-logo:hover{
  -webkit-filter: brightness(60%);
}

.item-footer{
  img{
    position: relative;
    top: -1px;
  } 
  a{

  } 
}

@media screen and (max-width: 762px) {
  .footer-logo li {
    margin-left: 10px;
  }

  .footer {
    font-size: 17px !important;
  }

  .footer .terms {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .why,
  .cont {
    margin-top: 3vw !important;
  }

  .copyright {
    font-size: 0.8rem;
  }
  
}
</style>