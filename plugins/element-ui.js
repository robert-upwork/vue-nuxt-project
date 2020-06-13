import Vue from 'vue'

import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'


// if (process.BROWSER_BUILD) {
//     const Element = 'element-ui'
//     const locale = 'element-ui/lib/locale/lang/en'
    Vue.use(Element, { locale })
// }

