<template>
  <fieldset class="toggle-group">
    <legend>{{ groupLabel }}</legend>

    <input
      type="radio"
      :value="toggleLabels[0]"
      :id="`${name}-${toggleLabels[0]}`"
      :name="toggleName"
      :checked="checked === 'on'"
      @click="toggle"
    />
    <label :for="`${toggleName}-on`">{{ toggleLabels[0] }}</label>

    <input
      type="radio"
      :value="toggleLabels[1]"
      :id="`${toggleName}-${toggleLabels[1]}`"
      :name="toggleName"
      :checked="checked === 'off'"
      @click="toggle"
    />
    <label :for="`${toggleName}-off`">{{ toggleLabels[1] }}</label>
  </fieldset>
</template>

<script>
import { random5Chars } from '../../utils/randomizer.js'

export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    groupLabel: {
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
    return { checked: 'on' }
  },
  computed: {
    /**
     * Randomly generate an input name, if none is provided.
     * @returns {string} - a randomly generated string to use as an element name.
     */
    toggleName() {
      return this.name ? this.name : `toggle-${random5Chars()}`
    }
  },
  methods: {
    toggle() {
      this.checked = this.checked === 'off' ? 'on' : 'off'
    }
  }
}
</script>

<style scoped>
.toggle-group {
  max-width: max-content;
  border: 2px solid #000;
}

.toggle-group legend {
  padding-left: .5rem;
  padding-right: .5rem;
  font-weight: 700;
}

.toggle-group label {
  text-transform: capitalize;
}

.toggle-group label + input {
  margin-left: 1rem;
}
</style>
