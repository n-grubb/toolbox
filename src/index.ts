import { App } from 'vue'
// Global Styles
import './assets/styles/main.css'
// Components
import ToolboxLink from './components/Link/Link.vue'
import ToolboxIcon from './components/Icon/Icon.vue'
import ToolboxCard from './components/Card/Card.vue'
import ToolboxButton from './components/Button/Button.vue'
import ToolboxRadio from './components/RadioButton/RadioButton.vue'
import ToolboxCheckbox from './components/Checkbox/Checkbox.vue'
import ToolboxTable from './components/DataTable/DataTable.vue'
import ToolboxToggle from './components/Toggle/Toggle.vue'
import VisuallyHidden from './components/VisuallyHidden/VisuallyHidden.vue'

const components = {
  VisuallyHidden,
  ToolboxLink,
  ToolboxIcon,
  ToolboxCard,
  ToolboxButton,
  ToolboxCheckbox,
  ToolboxRadio,
  ToolboxToggle,
  ToolboxTable
}

// Install components
function install(Vue: App) {
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component])
  }
}

export default { install }