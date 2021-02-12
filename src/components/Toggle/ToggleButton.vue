<template>
  <!--
    Use type="button" to prevent browsers from assuming a "submit" type.
    Stringify the boolean value to ensure the false value is used.
  -->
  <button
    type="button"
    class="toggle-button"
    :aria-pressed="labels.length > 1 ? true : pressed.toString()"
    @click="toggleClick"
  >
    <!--
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
  </button>
</template>

<script>
import Icon from '../Icon/Icon.vue'

export default {
  components: {
    Icon
  },
  props: {
    // accepts a unicode icon
    // todo: use an icon library
    icons: {
      type: Array
    },
    // accept an array of labels.
    labels: {
      type: Array
    }
  },
  data() {
    return {
      pressed: false
    }
  },
  computed: {
    // if only one element exists, aria-pressed will be toggled.
    // if multiple items are present, the labels will toggle between the first and second option.
    label() {
      if (this.labels && this.labels.length > 1) {
        return this.pressed ? this.labels[0] : this.labels[1]
      }
      return this.labels ? this.labels[0] : null
    },
    // the icon to be displayed.
    icon() {
      if (this.icons && this.icons.length > 1) {
        return this.pressed ? this.icons[0] : this.icons[1]
      }
      return this.icons ? this.icons[0] : null
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggle', !this.pressed)
      this.pressed = !this.pressed
    }
  }
}
</script>

<style>
.toggle-button {
  padding: .75rem 2rem;
  border: 2px solid black;
  border-radius: .25rem;
  background: transparent;
}

/* todo: come up with some basic styling */
/* &[aria-pressed] { */
/* } */
.toggle-button[aria-pressed='true'] {
  border-color: green;
}

/* todo: cleanup styles */

/* Remove the default outline and add box-shadow instead.
 * Normally, outline would work great for a focus state, but it does not play nice with rounded corners.
 * Box shadows tend to be disabled in high contrast modes.
 * Add an outline fallback set to transparent, which will appear in high contrast mode.
 */
.toggle-button[aria-pressed]:focus {
  outline: 2px solid transparent; /* for high-contrast mode. */
  /* todo: _really_ understand CSS box-shadow and gradients */
  box-shadow: 0 0 0 .25rem skyBlue;
}

.toggle-button[aria-pressed='true']:focus {
  box-shadow:
    0 0 0 .25rem skyBlue,
    inset 0 0 0 .15rem black,
    inset .25rem .25rem 0 white;
}
</style>
