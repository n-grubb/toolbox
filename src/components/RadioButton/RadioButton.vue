<script>
export default {
  name: 'ToolboxRadio',
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: 'true'
    }
  }
}
</script>

<template>
  <label
    class="toolbox-radio"
    for="accessible"
  > 
    <input
      type="radio"
      class="visually-hidden"
      value="accessible"
      name="quality"
      id="accessible"
    />
    <span>{{ label }}</span>
  </label>
</template>

<style scoped>
.toolbox-radio {
  display: block;
  cursor: pointer;
}

[type="radio"] + span {
  display: block;
}

/* Default, unchecked style */
[type="radio"] + span:before {
  display: inline-block;
  content: '';
  width: 1em;
  height: 1em;
  margin-right: 0.75em;
  border: 0.125em solid #fff;
  border-radius: 1em;
  box-shadow: 0 0 0 0.15em #000;
  vertical-align: -0.25em;
  transition: 0.5s ease all;
}

/* Checked style */
[type="radio"]:checked + span:before {
  background: #000;
  box-shadow: 0 0 0 0.25em #000;
}

/* Focus styling */
[type="radio"]:focus + span:after {
  content: '\0020\2190';
  font-size: 1.5em;
  line-height: 1;
  vertical-align: -0.125em;
}
</style>
