<script lang="ts">
/**
 * A component to handle Toggle interactions. Contains options for a handful of supported "modes".
 * @see https://inclusive-components.design/toggle-button/
 */
import { defineComponent, PropType } from 'vue'
import ToggleCheckbox from './ToggleCheckbox.vue'
import ToggleGroup from './ToggleGroup.vue'
import ToggleButton from './ToggleButton.vue'
import ToggleSwitch from './ToggleSwitch.vue'

enum ToggleMode {
  CHECKBOX = 'checkbox',
  GROUP = 'group',
  BUTTON = 'button',
  SWITCH = 'switch'
}

export default defineComponent({
  name: 'ToolboxToggle',
  props: {
    mode: {
      type: String as PropType<ToggleMode>,
      default: 'switch',
      validator: (mode: ToggleMode) => ['checkbox', 'group', 'button', 'switch'].includes(mode)
    }
  },
  emits: ['toggle'],
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
})
</script>

<template>
  <component
    class="tb-toggle"
    :is="toggleComponent"
    v-bind="$attrs"
    @toggle="payload => $emit('toggle', payload)"
  />
</template>
