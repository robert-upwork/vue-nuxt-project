const webpack = require('webpack')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    script: [
      { src: 'jquery.min.js', ssr: false },
      { src: '//code.tidio.co/3mka6fxk3h32dwizitkjv4jlvkmz0ip7.js'},
      { src: 'https://unpkg.com/element-ui/lib/index.js'},
      { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'},
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-158853923-1'},
    ],
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'bootstrap/dist/css/bootstrap.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/element-ui', mode: 'client', ssr: false },
    { src: '~/plugins/jquery'},
    { src: '~/plugins/vuetify', mode: 'client', ssr: false },
    { src: '~/plugins/vue-carousel-3d',  ssr: false ,mode: 'client'},
    { src: '~/plugins/vue-carousel',  ssr: false ,mode: 'client'},
    { src: '~/plugins/bootstrap'},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    "bootstrap-vue/nuxt",
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/, /^vuetify/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ]
  }
}
