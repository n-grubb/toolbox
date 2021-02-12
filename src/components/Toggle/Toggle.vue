<template>
  <component
    class="toggle"
    :is="toggleComponent"
    v-bind="$attrs"
  />
</template>

<script>
/**
 * @see https://inclusive-components.design/toggle-button/
 */
import ToggleCheckbox from './ToggleCheckbox.vue'
import ToggleGroup from './ToggleGroup.vue'
import ToggleButton from './ToggleButton.vue'
import ToggleSwitch from './ToggleSwitch.vue'

export default {
  name: 'ToolboxToggle',
  props: {
    mode: {
      type: String,
      default: 'switch',
      validator: mode => ['checkbox', 'group', 'button', 'switch'].includes(mode)
    }
  },
  computed: {
    toggleComponent() {
      switch (this.mode) {
        case 'checkbox':
          return ToggleCheckbox
        case 'group':
          return ToggleGroup
        case 'button':
          return ToggleButton
        default:
          return ToggleSwitch
      }
    }
  }
}
</script>
