import Vue from 'vue'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

// import Vue from 'vue'
// import Vuetify from 'vuetify/lib'

// Vue.use(Vuetify)

if (process.BROWSER_BUILD) {
	const Vuetify = 'vuetify/lib'
	Vue.use(Vuetify)
}
