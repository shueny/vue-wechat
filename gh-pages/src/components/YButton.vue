<template>
  <button
    class="y-button"
    :class="{
      'is-disabled': disabled,
      'btn-style1': btn_style === 'btnStyle1',
      'btn-style2': btn_style === 'btnStyle2'
    }"
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
    },
    btn_style: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_var.scss";
.y-button {
  color: $white;
  padding: $font4 * 3 $font4 * 5;

  &.btn-style1 {
    width: 30vw;
    background: $green;
    border-radius: $font4 * 5;
  }
  &.btn-style2 {
    color: $green;
    text-transform: uppercase;
    font-family: "monospace";
    font-size: $font4 * 5;
  }
}
</style>
