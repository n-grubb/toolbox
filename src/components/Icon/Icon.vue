<script lang="ts">
/**
 * An icon component with convenient default styles.
 * Can be modified to allow support for multiple icon libraries.\
 * 
 * IMPORTANT: This component does not work until dynamic components are supported by `vite-plugin-icons`.
 * @see https://github.com/antfu/vite-plugin-icons/issues/8
 * 
 * For now, instead of using this component, use an icon by adding a component with the following name structure:
 * <icon-${this.collection}-${this.name} />
 */
import { defineComponent } from 'vue'
import { random5Chars } from '../../utils/randomizer.js'

export default defineComponent({
  name: 'ToolboxIcon',
  props: {
    /**
     * The icon name to use.
     * @see https://icones.js.org/collection/all
     * @type {string}
     */
    name: {
      type: String,
      required: true
    },
    /**
     * The collection field follows Iconify's collection IDs.
     * @see https://iconify.design/icon-sets/
     * @type {string}
     */
    collection: {
      type: String,
      default: 'uil'
    }
  },
  data() {
    /**
     * Create a key from a random string. 
     * Used to ensure reactive updates occur.
     */
    return {
      key: random5Chars()
    }
  },
  computed: {
    iconComponent(): string {
      return `icon-${this.collection}-${this.name}`
    }
  },
  watch: {
    name() {
      this.key = random5Chars()
    }
  }
})
</script>

<template>
  <component 
    :is="iconComponent" 
    :key="key"
    class="tb-icon" 
  />
</template>

<style scoped>
.tb-icon {
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
