<template>
  <button
    class="y-button"
    :class="{'is-disabled': disabled}"
    :type="type"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "ybutton",
  props: {
    type: String,
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/base/_variables.scss";
.y-button {
  width: 100%;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  color: $white;
  border-color: $mango;
  background-color: $mango;
  box-sizing: border-box;
  outline: none;
  padding: $font4 * 3 $font4 * 5;
  font-size: $font4 * 4;
  border-radius: $font4;
  font-family: $font-family;
  border-style: none;

  .is-disabled,
  .is-disabled:focus,
  .is-disabled:hover {
    color: $white;
    background-color: darken($light-grey, 10%);
    border-color: darken($light-grey, 10%);
    cursor: pointer;
    pointer-events: none;
  }
}
</style>
