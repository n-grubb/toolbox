<script lang="ts">
/**
 * A switch component to simulate "off" & "on" values.
 */
import { defineComponent } from 'vue'
import Button from '../Button/Button.vue'
import { random5Chars } from '../../utils/randomizer.js'

export default defineComponent({
  components: { Button },
  props: {
    id: {
      type: String,
      default:`switch-${random5Chars()}`
    },
    switchLabel: {
      type: String,
      default: 'Toggle: '
    },
    /*
     * A switch only supports 2 values.
     */
    toggleLabels: {
      type: Array,
      default: () => ['On', 'Off'],
      validator: (val: string[]) => val.length === 2
    }
  },
  data() {
    return { isOn: false }
  },
  methods: {
    /**
     * Emit a toggle event with a boolean for whether or not the button is pressed.
     */
    handleClick() {
      this.isOn = !this.isOn
      this.$emit('toggle', this.isOn)
    }
  }
})
</script>

<template>
  <div class="toggle-switch">
    <label
      :for="id"
      class="toggle-switch__label"
    >
      {{ switchLabel }}
    </label>
    <!-- listen for arrow keys -->
    <button
      role="switch"
      :id="id"
      :aria-checked="isOn.toString()"
      :aria-labelledby="id"
      @click="handleClick"
    >
      <span>{{ toggleLabels[0] }}</span>
      <span>{{ toggleLabels[1] }}</span>
    </button>
  </div>
</template>

<style scoped>
.toggle-switch {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: max-content;
}

.toggle-switch label {
  margin-right: var(--space-xs);
  font-weight: var(--font-bold, 700);
}

.toggle-switch button {
  padding: 0;
  border: var(--border-thickness) solid;
  border-radius: var(--border-radius, .25rem);
  background: transparent;
}

.toggle-switch button:focus {
  outline: 2px solid transparent; /* fallback for high-contrast mode. */
  box-shadow: 0 0 0 .25rem var(--focus-color, blue);
}

.toggle-switch button span {
  display: inline-block;
  padding: var(--toggle-switch-option-padding, var(--space-xs) var(--space-sm));
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
}

.toggle-switch button[aria-checked='true'] :first-child,
.toggle-switch button[aria-checked='false'] :last-child {
  background: var(--toggle-switch-on-bg, var(--primary, black));
  color: var(--toggle-switch-on-text-color, var(--secondary, white));
}

.toggle-switch button[aria-checked='true'] :last-child,
.toggle-switch button[aria-checked='false'] :first-child {
  background: var(--toggle-switch-off-bg, var(--secondary, white));
  color: var(--toggle-switch-off-text-color, var(--primary, black));
}

.toggle-switch button[aria-checked='true']:hover :last-child,
.toggle-switch button[aria-checked='false']:hover :first-child {
  background: var(--toggle-switch-hover-bg, var(--input-hover, whitesmoke));
}

</style>
