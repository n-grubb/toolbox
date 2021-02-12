<template>
  <div class="toggle-switch">
    <span
      :id="switchId"
      class="toggle-switch__label"
    >
      {{ switchLabel }}
    </span>
    <button
      role="switch"
      :aria-checked="checked.toString()"
      :aria-labelledby="switchId"
      @click="checked = !checked"
    >
      <span>{{ toggleLabels[0] }}</span>
      <span>{{ toggleLabels[1] }}</span>
    </button>
  </div>
</template>

<script>
import { random5Chars } from '../../utils/randomizer.js'

export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    switchLabel: {
      type: String,
      default: 'Toggle: '
    },
    toggleLabels: {
      type: Array,
      default: () => ['on', 'off'],
      validator: val => val.length > 1
    }
  },
  data() {
    return { checked: false }
  },
  computed: {
    /**
     * Randomly generate an element id, if none is provided.
     */
    switchId() {
      return this.id ? this.id : `switch-${random5Chars()}`
    }
  }
}
</script>

<style scoped>
.toggle-switch {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: max-content;
}

.toggle-switch__label {
  margin-right: .5rem;
  font-weight: 700;
}

/* TODO: add custom button element and style within that component */
/* TODO: focus, hover styles */
/* TODO: animation? */
.toggle-switch button {
  padding: 0.25rem 0.5rem;
  border: 0.125rem solid;
  border-radius: 0.25rem;
  background: transparent;
}

.toggle-switch button span {
  display: inline-block;
  padding: 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: bold;
}

.toggle-switch button[aria-checked='true'] :first-child,
.toggle-switch button[aria-checked='false'] :last-child {
  border: 2px solid transparent; /* for high contrast mode users */
  background: #000;
  color: #fff;
}
</style>
