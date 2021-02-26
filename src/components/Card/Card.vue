<script lang="ts">
/**
 * Cards used to house content in an application.
 * Perhaps ContentWell is a better name for this component?
 */
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToolboxCard'
})
</script>

<template>
  <div class="tb-card">
    <slot />
  </div>
</template>

<style scoped>
.tb-card {
  padding: var(--card-padding, var(--space));
  border: var(--card-border-thickness, var(--border-thickness, 1px)) solid var(--card-border-color, var(--border-color, black));
  border-radius: var(--card-border-radius, var(--border-radius));
  margin: var(--card-margin, 0 0 var(--space));
  background: var(--card-bg, white);
  box-shadow: var(--card-box-shadow, 2px 2px 5px rgba(0,0,0,.15));
}
</style>