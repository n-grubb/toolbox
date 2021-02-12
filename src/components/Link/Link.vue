<script>
/**
 * A simple component that acts as a style wrapper for links.
 */
export default {
  name: 'ToolboxLink'
}
</script>

<template>
  <a 
    class="toolbox-link"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>

<style scoped>
  .toolbox-link {
    outline: none;
    cursor: pointer;
    color: var(--link-color, var(--primary, blue));
    text-decoration: none;
    /* todo: figure out type styles */
    /* @include text-weight('medium'); */
  }

  .toolbox-link:hover, 
  .toolbox-link:focus, 
  .toolbox-link:active {
    text-decoration: underline;
  }
</style>