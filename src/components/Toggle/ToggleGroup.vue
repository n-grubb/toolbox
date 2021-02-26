<script lang="ts">
import { defineComponent } from 'vue'
import { random5Chars } from '../../utils/randomizer.js'

export default defineComponent({
  props: {
    /**
     * Randomly generate an input name, if none is provided.
     */
    name: {
      type: String,
      default: `toggle-${random5Chars()}`
    },
    groupLabel: {
      type: String,
      default: 'Toggle: '
    },
    labels: {
      type: Array,
      default: () => ['on', 'off'],
      validator: (val: string[]) => val.length > 1
    }
  },
  data() {
    return { 
      checked: 'on'
    }
  },
  methods: {
    toggle(toggleLabel: string) {
      this.checked = toggleLabel
      this.$emit('toggleLabel', this.checked)
    }
  }
})
</script>

<template>
  <fieldset class="toggle-group">
    <legend class="toggle-group-legend">
      {{ groupLabel }}
    </legend>
    <RadioButton
      v-for="(toggleLabel, index) in labels"
      :key="index"
      :id="`${name}-${toggleLabel}`"
      :name="name"
      :value="toggleLabel"
      :label="toggleLabel"
      :checked="checked === toggleLabel"
      @click="toggle(toggleLabel)"
    />
  </fieldset>
</template>

<style scoped>
.toggle-group {
  max-width: max-content;
  border: var(--toggle-group-border, var(--border-thickness) solid var(--border-color));
  border-radius: var(--border-radius);
}

.toggle-group-legend {
  padding: var(--toggle-group-legend-padding, 0 var(--space-xs));
  font-weight: var(--font-bold);
}
</style>
