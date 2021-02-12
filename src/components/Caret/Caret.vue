<script>
/**
 * This component is a shortcut for adding a caret icon, with the ability to flip the caret direction.
 * Convenient for filters, sorting, and ordering.  
 */
export default {
  props: {
    order: {
      type: String,
      default: 'descending',
      validator: val => ['ascending', 'descending'].includes(val)
    }
  }
}
</script>

<template>
  <span
    v-if="order"
    :class="['toolbox-caret', { 'caret-up': order === 'ascending' }]"
  >
    <Icon icon="chevron-down" />
  </span>
</template>

<style scoped>
/* TODO: review styles */
.toolbox-caret {
  position: relative;
  width: 1rem;
}

.toolbox-caret svg {
  position: absolute;
  top: -4px;
  left: -4px;
  width: 1.5rem;
  height: 1.5rem;
  transition: transform .2s;
}

.toolbox-caret.caret-up svg {
  transform: rotate(-180deg);
}
</style>
