<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Icon from '../Icon/Icon.vue'
import Button from '../Button/Button.vue'

export default defineComponent({
  components: {
    Button,
    Icon
  },
  props: {
    /**
     * Accepts the name of an icon
     */ 
    icons: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    /**
     * Accepts an array of option labels
     */ 
    labels: {
      type: Array as PropType<string[]>
    }
  },
  data() {
    return {
      pressed: false
    }
  },
  computed: {
    /**
     * Calculate the Toggle Labels
     * If only one element exists, aria-pressed will be toggled.
     * If multiple items are present, the labels will toggle between the first and second option.
     */
    label(): string {
      if (this.labels && this.labels.length > 1) {
        return this.pressed ? this.labels[0] : this.labels[1]
      }
      return this.labels ? this.labels[0] : ''
    },
    /**
     * The icon to be displayed.
     */
    icon(): string {
      if (this.icons && this.icons.length > 1) {
        return this.pressed ? this.icons[1] : this.icons[0]
      }
      return this.icons ? this.icons[0] : ''
    }
  },
  methods: {
    /**
     * Emit a toggle event with a boolean for whether or not the button is pressed.
     */ 
    handleClick() {
      this.pressed = !this.pressed
      this.$emit('toggle', this.pressed)
    }
  }
})
</script>

<template>
  <!--
  Use type="button" to prevent browsers from assuming a "submit" type.
  Stringify the `pressed` boolean value to ensure the false value is used.
  -->
  <Button
    type="button"
    variant="secondary"
    size="small"
    class="toggle-button"
    :aria-pressed="labels.length > 1 ? true : pressed.toString()"
    @click="handleClick"
  >
    <!--
    To avoid confusing interactions, we do not change both the label and aria-pressed value on click.
    - When one label is provided, the pressed state will toggle between true and false on click.
    - When multiple labels are provided, the pressed state will remain true and the labels will swap on click.
    - When two icons are provided by one label, the pressed state will toggle along with the icons, 
      but the label delivered to screenreaders remains the single label provided.

    When using icons, we need to create a label for screen readers. We will use the label but set display it
    for screen readers only. For international audiences, we use this <span> instead of an aria-label since it
    can be translated by browsers.
    -->
    <span :class="['toggle-label', { 'visually-hidden': icon }]">
      {{ label }}
    </span>
    <span
      v-if="icon"
      class="toggle-icon"
      aria-hidden="true"
    >
      <Icon :name="icon" />
    </span>
  </Button>
</template>

<style scoped>
.toggle-button {
  border-color: var(--toggle-button-unpressed-border, var(--primary, black));
  background-color: var(--toggle-button-unpressed-bg, white);
  color: var(--toggle-button-unpressed-color, var(--primary, black));
  transition: var(--toggle-button-transition-duration, .1s);
}

.toggle-button[aria-pressed='true'] {
  border-color: var(--toggle-button-pressed-border, var(--accent, green));
  background-color: var(--toggle-button-pressed-bg, var(--accent, green));
  color: var(--toggle-button-pressed-text-color, white);
}

/* Remove the default outline and add box-shadow instead.
 * Normally, outline would work great for a focus state, but it does not play nice with rounded corners.
 * Box shadows tend to be disabled in high contrast modes.
 * Add an outline fallback set to transparent, which will appear in high contrast mode.
 */
.toggle-button:focus {
  outline: 2px solid transparent; /* for high-contrast mode. */
  box-shadow: 0 0 0 .25rem var(--focus-color);
}

.toggle-button:hover,
.toggle-button:focus {
  border-color: var(--toggle-button-hover-border, var(--accent, green));
}

.toggle-button[aria-pressed='true']:hover,
.toggle-button[aria-pressed='true']:focus {
  background-color: var(--toggle-pressed-bg, var(--accent, green));
  color: var(--toggle-pressed-text-color, white);
}
</style>
