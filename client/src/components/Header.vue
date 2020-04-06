<template>
  <div class="header">
    <div class="header-button is-left" v-show="isLeft">
      <button @click="$router.go(-1)">
        <font-awesome-icon icon="angle-left" />
        <!-- <i class="fas fa-angle-left"></i> -->
      </button>
    </div>
    <h1 class="header-title">{{ title }}</h1>
    <div class="header-button is-right">
      <button @click="$emit('rightClick')">
        <font-awesome-icon :icon="[btn_icon_type, btn_icon]" />
        <i :class="btn_icon_type + ' fa-' + btn_icon"></i>
        <!-- <font-awesome-icon :icon="[btn_icon_type, btn_icon]" /> -->
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {
    title: String,
    isLeft: {
      type: Boolean,
      default: false
    },
    btn_icon: String,
    btn_icon_type: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_var.scss";
.header {
  width: 100%;
  height: $font4 * 11;
  color: $dark-blue;
  font-family: "Ubuntu";
  font-size: $font4 * 6;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 0 5px 1px rgba($light-grey, 0.3);
  position: fixed;
  top: 0px;
  z-index: 1;
  background-color: $white;

  .header-button {
    &.is-right,
    &.is-left {
      width: $font4 * 10;
      height: $font4 * 11;
      position: absolute;
      right: 0;
      font-size: $font4 * 4;
      display: flex;
      align-items: center;
      padding: 0 $font4 * 2;
      justify-content: center;
      svg {
        color: $light-grey;
      }
    }
    &.is-left {
      left: 0;
      right: auto;
    }
  }
}
</style>
