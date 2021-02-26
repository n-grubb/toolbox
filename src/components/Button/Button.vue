<script lang="ts">
/**
 * A button component with convenient default styles.
 */
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToolboxButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary', 'ghost'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value: string) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click']
})
</script>

<template>
  <button 
    :class="`tb-button ${variant} ${size}`" 
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.tb-button {
  --icon-container-size: 1rem;
  --icon-size: 1rem;
  /* button sizing */
  min-width: var(--button-min-width, 12rem);
  padding:  var(--button-padding, 1rem);
  border: var(--button-border, 2px solid transparent);
  border-radius: var(--button-border-radius, 2px);
  /* button typography */
  font-size: var(--button-text-size, var(--text-sm));
  font-weight: var(--button-font-weight, var(--font-semi));
  line-height: var(--button-leading, var(--leading-none));
  text-align: var(--button-text-align, left);
  transition: var(--button-transition-length, .3s);

  /* center child content */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tb-button:hover {
  cursor: pointer;
}

.tb-button:focus {
  outline: 2px solid transparent; /* fallback for high-contrast mode. */
  box-shadow: 
    0 0 0 1px transparent, 
    0 0 0 .25rem var(--focus-color);
}

.tb-button:disabled {
  cursor: not-allowed;
  opacity: .75;
}

/* Button Sizing Options */
.small {
  min-width: var(--min-tap-area);
  width: max-content;
}

.large {
  width: 100%;
}

/* Primary Button Styles */
.primary {
  background-color: var(--primary-button-bg, var(--primary, black));
  border-color: var(--primary-button-bg, var(--primary, black));
  color: var(--primary-button-text-color, var(--secondary, white));
  fill: var(--primary-button-text-color, var(--secondary, white));
}

.primary:focus,
.primary:active,
.primary:not(:disabled):hover {
  background-color: var(--primary-button-active-color, var(--accent));
  border-color: var(--primary-button-active-color, var(--accent));
}

/* Secondary Button Styles */
.secondary {
  background-color: var(--secondary-button-bg-color, white);
  border-color: var(--secondary-button-border-color, black);
  color: var(--secondary-button-text-color, black);
  fill: var(--secondary-button-text-color, black);
}

.secondary:focus,
.secondary:active,
.secondary:not(:disabled):hover {
  background-color: var(--secondary-button-active-bg, var(--secondary, white));
  border-color: var(--secondary-button-active-border-color, var(--accent, black));
  color: var(--secondary-button-active-text-color, var(--accent, white));
  fill: var(--secondary-button-active-text-color, var(--accent, white));
}

/* Ghost Button Styles */
.ghost {
  --icon-margin: 0 .5rem;

  min-width: min-content;
  background-color: transparent;
  border-color: transparent;
  color: var(--ghost-button-text-color, black);
  fill: var(--ghost-button-text-color, black);
}

.ghost:focus,
.ghost:active,
.ghost:not(:disabled):hover {
  color: var(--ghost-button-active-color, var(--accent));
  fill: var(--ghost-button-active-color, var(--accent));
}
</style>
