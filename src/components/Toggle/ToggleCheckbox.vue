<template>
  <div class="field">
    <input type="checkbox" :id="id" :name="name" value="on" />
    <label :for="id">Notify by email</label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '' // generate a random num/string if does not exist
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
