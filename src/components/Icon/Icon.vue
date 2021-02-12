<script>
/**
 * An icon component with convenient default styles.
 * Can be modified to allow support for multiple icon libraries.
 */
export default {
  name: 'ToolboxIcon',
  props: {
    /*
     * The icon name to use.
     * @see https://fontawesome.com/
     */
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <font-awesome-icon 
    class="toolbox-icon"
    :icon="name" 
  />
</template>

<style scoped>
.toolbox-icon {
  width: var(--icon-container-size, 1.5rem);
  height: var(--icon-container-size, 1.5rem);
  margin: var(--icon-margin, 0);
  font-size: var(--icon-size, 1.5rem);
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
