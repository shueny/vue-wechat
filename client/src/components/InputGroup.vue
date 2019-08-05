<template>
  <div class="input_group">
    <label for="name">{{ label }}</label>
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: "input_group",
  prop: {
    type: {
      type: String,
      default: "text"
    },
    value: String,
    placeholder: String,
    name: String,
    label: String
  }
};
</script>
<style lang="scss" scoped>
.input_group {
  width: 100%;
  height: $font4 * 15;
}
</style>
