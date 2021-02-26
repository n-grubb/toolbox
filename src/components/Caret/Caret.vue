<script>
/**
 * This component is a shortcut for adding a caret icon, with the ability to flip the caret direction.
 * Convenient for filters, sorting, and ordering.
 * Should not be exposed to end users.
 */
import { defineComponent } from 'vue'
// import Icon from '../Icon/Icon.vue'

export default defineComponent({
  // components: { Icon },
  props: {
    order: {
      type: String,
      default: 'descending',
      validator: val => ['ascending', 'descending'].includes(val)
    }
  }
})
</script>

<template>
  <span
    v-if="order"
    :class="['caret', { 'caret-up': order === 'ascending' }]"
  >
    <icon-uil-angle-down class="icon" />
    <!-- 
    TODO: use Icon (when available)
    <Icon name="chevron-down" /> 
    -->
  </span>
</template>

<style scoped>
.caret svg {
  width: 1.5rem;
  height: 1.5rem;
  transition: transform .2s;
}

.caret.caret-up svg {
  transform: rotate(-180deg) !important;
}
</style>
