<script lang="ts">
/**
 * A simple component that acts as a style wrapper for links.
 */
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToolboxLink'
})
</script>

<template>
  <a 
    class="tb-link"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>

<style scoped>
.tb-link {
  color: var(--link-color, var(--primary, blue));
  font-weight: var(--link-font-weight, var(--font-medium));
  text-decoration: var(--link-text-decoration, none);
  cursor: pointer;
  outline: none;
}

.tb-link:hover, 
.tb-link:focus, 
.tb-link:active {
  text-decoration: var(--link-text-decoration-hover, underline);
}
</style>