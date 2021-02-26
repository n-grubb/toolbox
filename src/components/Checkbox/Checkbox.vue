<script lang="ts">
/**
 * A simple checkbox component.
 */
// TODO: use Icon once component issues resolved
// import Icon from '../Icon/Icon.vue'
import { defineComponent } from 'vue'
import { random5Chars } from '../../utils/randomizer.js'

export default defineComponent({
  name: 'ToolboxCheckbox',
  // components: { Icon },
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: random5Chars()
    },
    // Can specify a string if you want the value to be something other than true
    value: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: '' // generate a random num/string if does not exist
    },
  },
  emits: ['check'],
  data() {
    return {
      checked: false
    }
  },
  computed: {
    checkboxID(): string {
      return this.id ? this.id : `checkbox-${random5Chars()}`
    }
  },
  methods: {
    handleCheckClick() {
      this.checked = !this.checked
      this.$emit('check', this.checked)
    }
  }
})
</script>

<template>
  <div 
    :class="['checkbox-wrapper', {checked}]"
    :for="checkboxID"
    @click="handleCheckClick"
  >
    <input 
      type="checkbox" 
      :id="checkboxID" 
      :name="name" 
      :value="value ? value : true" 
      :checked="checked"
    />
    <icon-uil-check class="checkmark icon" />
    <!-- <Icon class="checkmark" name="check" /> -->
    {{ label }}
  </div>
</template>

<style scoped>
.checkbox-wrapper {
  position: relative;
  width: max-content;
  margin-right: var(--checkbox-wrapper-margin, 0 1rem 0 0);
  line-height: var(--checkbox-height, 1.5rem);
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

input {
  appearance: none; /* Turn off native browser styles */
  position: relative;    
  width: var(--checkbox-width, 1.5rem);
  height: var(--checkbox-height, 1.5rem);
  margin: var(--checkbox-margin, -.125rem .5rem 0 0);
  border: var(--checkbox-border-width, .125rem) solid var(--checkbox-border-color, var(--primary, black));
  border-radius: var(--checkbox-border-radius, var(--border-radius));
  background: var(--checkbox-fill, white);
  outline: none;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  width: var(--checkmark-width, var(--checkbox-width, 1.5rem));
  height: var(--checkmark-height, var(--checkbox-height, 1.5rem));
  top: var(--checkmark-position-top, 0);
  left: var(--checkmark-position-left, 0);
  color: var(--checkmark-color, white);
  opacity: 0;
  transition: opacity var(--checkmark-transition-duration, .1s);
} 

/* Hover */
.checkbox-wrapper:hover input:not(:checked) {
  background-color: var(--input-hover);
}

/* Focus */
input:focus {
  outline: 2px solid transparent; /* fallback for high-contrast mode. */
  box-shadow: 
    0 0 0 .125rem white, 
    0 0 0 .25rem var(--focus-color, blue);
}

/* Checked State */
input:checked {
  color: var(--checkbox-check-color, white);
  background: var(--checkbox-fill-checked, var(--accent, black));
  border-color: var(--checkbox-border-color-checked, var(--accent, black));
}

input:checked ~ .checkmark {
  opacity: 1;
}
</style>