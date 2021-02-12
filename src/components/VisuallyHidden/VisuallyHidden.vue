<script>
/**
 * Hides elements from the screen but provides them to screen readers.
 * Functions as the opposite to `aria-hidden`.
 *
 * Inspired by Reach UI:
 * @see https://github.com/reach/reach-ui/tree/main/packages/visually-hidden
 * @see https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/
 */
export default {
  name: 'VisuallyHidden'
}
</script>

<template>
  <span class="visually-hidden">
    <slot />
  </span>
</template>

<style>
/* Do not scope this component so that this class may be used as a utility class */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  clip: "rect(0 0 0 0)";
  clip-path: inset(50%);
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
}
</style>
