// font awesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas) // add all icons

import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'

createApp(App)
  // register the font awesome component
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
