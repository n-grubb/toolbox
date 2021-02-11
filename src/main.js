import { createApp } from 'vue'
import App from './App.vue'
import Toolbox from './index'

createApp(App)
  .use(Toolbox)
  .mount('#app')
