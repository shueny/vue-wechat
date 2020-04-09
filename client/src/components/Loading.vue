<template>
  <div class="loading" v-show="isLoading">
    <div class="load_wrap">
      <img src="../assets/img/loading-circle.gif" alt="" />
      <span>Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_var.scss";

.loading {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(lighten($light-grey, 20%), 0.7);
  top: 0;
  left: 0;
  z-index: 15;

  .load_wrap {
    width: 100%;
    height: 100vh;
    font-size: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
  }

  img {
    height: auto;
    width: $font4 * 24;
  }

  span {
    width: 100%;
    display: flex;
    justify-content: center;
    color: $blue;
  }
}
</style>
