<template>
  <router-link :to="path">
    <div class="cell-wrapper">
      <!-- <div class="cell-title"> -->
      <!-- <img :src="getSrc" alt="" /> -->
      <font-awesome-icon :icon="this.src" />
      <span>{{ title }}</span>
      <!-- </div> -->
      <!-- <div class="cell-allow-right">
        <font-awesome-icon icon="angle-right" />
      </div> -->
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
    // getSrc() {
    //   return require("../assets/img/" + this.src);
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_var.scss";
.cell-wrapper {
  width: calc((100vw - 40px) / 3);
  height: calc((100vw - 40px) / 3);
  display: inline-flex;
  padding: $font4 * 3 $font4 * 5;
  box-sizing: border-box;
  border-radius: $font4 * 3;
  background: lighten($blue, 15%);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: $white;
  // position: relative;
  // &::before {
  //   position: absolute;
  //   content: "";
  //   width: 90%;
  //   height: 1px;
  //   background-color: rgba(lighten($light-grey, 5%), 0.5);
  //   text-align: center;
  //   bottom: 0;
  //   left: 5%;
  // }
  // img {
  //   height: $font4 * 8;
  // }

  svg {
    font-size: $font4 * 6;
  }

  span {
    margin-top: $font4 * 3;
    width: 100%;
    text-align: center;
    font-weight: 600;
  }

  .cell-title {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
  }
  // .cell-allow-right {
  //   width: $font4 * 10;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }
}
</style>
