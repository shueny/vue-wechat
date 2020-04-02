<template>
  <div class="input_group">
    <label :for="name">{{ label }}</label>
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
  props: {
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
@import "@/assets/scss/_var.scss";

.input_group {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: $font4 * 3 0;
  line-height: $font4 * 15;
  display: flex;
  flex-wrap: wrap;

  label,
  input {
    display: flex;
    width: 100%;
    height: 100%;
  }
  label {
    font-size: $font4 * 3;
    line-height: $font4 * 4;
    margin-bottom: $font4;
    color: $light-grey;
  }
}
</style>
