<script>
/**
 * A button component with convenient default styles.
 */
export default {
  name: 'ToolboxButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: val => ['primary', 'secondary', 'ghost'].includes(val)
    },
    size: {
      type: String,
      default: 'medium',
      validator: val => ['small', 'medium', 'large'].includes(val)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <button 
    class="toolbox-button"
    :class="`${type} ${size}`" 
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.toolbox-button {
  --icon-container-size: 1rem;
  --icon-size: 1rem;

  min-width: var(--button-min-width, 12rem);
  padding:  var(--button-padding, 1rem);
  border: var(--button-border, 1px solid transparent);
  border-radius: var(--button-border-radius, 2px);
  /* TODO: text style generation? */
  font-size: .875rem;
  font-weight: 400;
  line-height: 1;
  text-align: left;
  transition: .3s;

  /* center child content */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toolbox-button .toolbox-icon {
  font-size: 1rem;
}

.toolbox-button:hover {
  cursor: pointer;
}

.toolbox-button:disabled {
  cursor: not-allowed;
  opacity: .75;
}

/* Button Sizing Options */
.small {
  min-width: max-content;
  width: max-content;
}

.large {
  width: 100%;
}

/* Primary Button Styles */
.primary {
  background-color: var(--primary-button-bg, var(--primary, black));
  border-color: var(--primary-button-bg, var(--primary, black));
  color: var(--primary-button-text-color, var(--high-contrast-text-color, white));
  fill: var(--primary-button-text-color, var(--high-contrast-text-color, white));
}

.primary:focus,
.primary:active,
.primary:not(:disabled):hover {
  background-color: var(--primary-button-active, var(--accent, #10359c));
  border-color: var(--primary-button-active, var(--accent, #10359c));
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
  background-color: var(--primary, black);
  border-color: var(--primary, black);
  color: var(--high-contrast-text-color, white);
  fill: var(--high-contrast-text-color, white);
}

/* Ghost Button Styles */
.ghost {
  --icon-margin:  0 .5rem;

  min-width: min-content;
  background-color: transparent;
  border-color: transparent;
  color: var(--ghost-button-text-color, black);
  fill: var(--ghost-button-text-color, black);
}

.ghost:focus,
.ghost:active,
.ghost:not(:disabled):hover {
  color: var(--primary-button-active, var(--accent, #10359c));
  fill: var(--primary-button-active, var(--accent, #10359c));
}
</style>
