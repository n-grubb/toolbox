<script>
// TODO: accessible components card
export default {
  name: 'ToolboxCard',
  props: {
    size: {
      type: String,
      default: '',
      validator: val => ['wide', 'narrow', ''].includes(val)
    }
  }
}
</script>

<template>
  <div 
    class="toolbox-card" 
    :class="`${size}`"
  >
    <slot />
  </div>
</template>

<style scoped>
.toolbox-card {
  background: var(--card-bg, white);
  border: 1px solid var(--card-border, black);
  border-radius: 2px;
  padding: 1rem;
  margin: 0 0 1rem;
}

.wide {
  margin-left: -1rem;
  margin-right: -1rem;
  border-left: 0;
  border-right: 0;
  padding: 2rem;
}

.narrow {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>