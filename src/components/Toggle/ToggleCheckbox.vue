<script lang="ts">
/**
 * A toggle representation of a checkbox. 
 * Intercepts a "check" event and replaces it with a "toggle" event.
 */
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    handleCheckEvent(checkedValue: string) {
      this.$emit('toggle', checkedValue)
    }
  }
})
</script>

<template>
  <ToolboxCheckbox
    v-bind="$attrs"
    @check="handleCheckEvent"
  />
</template>
