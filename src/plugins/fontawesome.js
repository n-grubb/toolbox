import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// add all icons
library.add(fas)

// register the font awesome component
Vue.component('font-awesome-icon', FontAwesomeIcon)