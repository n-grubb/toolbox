// Global Styles
import './assets/styles/main.css'
// Components
import ToolboxIcon from './components/ToolboxIcon/ToolboxIcon.vue'
import VisuallyHidden from './components/VisuallyHidden/VisuallyHidden.vue'
// Icon Library
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Setup Font Awesome to use all icons
library.add(fas)

const components = {
  ToolboxIcon,
  VisuallyHidden
}

// Install components
function install(Vue) {
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  for (const component in components) {
    Vue.component(components[component].name, components[component])
  }
}

export default { install }