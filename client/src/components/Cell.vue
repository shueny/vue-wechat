<template>
  <router-link :to="path">
    <div class="cell-wrapper">
      <div class="cell-title">
        <img :src="getSrc" alt="" />
        <span>{{ title }}</span>
      </div>
      <div class="cell-allow-right">
        <font-awesome-icon icon="angle-right" />
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "cell",
  props: {
    path: String,
    src: String,
    title: String
  },
  computed: {
    getSrc() {
      return require("../assets/img/" + this.src);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_var.scss";
.cell-wrapper {
  width: 100%;
  height: $font4 * 11;
  display: inline-flex;
  padding: $font4 * 3 $font4 * 5;
  box-sizing: border-box;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 90%;
    height: 1px;
    background-color: rgba(lighten($light-grey, 5%), 0.5);
    text-align: center;
    bottom: 0;
    left: 5%;
  }

  .cell-title {
    width: calc(100% - 40px);
    display: inline-flex;
    align-items: center;
    text-align: center;

    img {
      width: $font4 * 8;
      height: 100%;
    }
    span {
      margin-left: $font4 * 3;
      width: 100%;
    }
  }
  .cell-allow-right {
    width: $font4 * 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
