// Global Styles
import './assets/styles/main.css'
// Components
import ToolboxIcon from './components/Icon/Icon.vue'
import ToolboxLink from './components/Link/Link.vue'
import ToolboxCard from './components/Card/Card.vue'
import ToolboxButton from './components/Button/Button.vue'
import ToolboxRadio from './components/RadioButton/RadioButton.vue'
import ToolboxToggle from './components/Toggle/Toggle.vue'
import VisuallyHidden from './components/VisuallyHidden/VisuallyHidden.vue'

// Icon Library
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Setup Font Awesome to use all icons
library.add(fas)

const components = {
  ToolboxIcon,
  ToolboxLink,
  ToolboxCard,
  ToolboxButton,
  ToolboxRadio,
  ToolboxToggle,
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