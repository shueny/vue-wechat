<template>
  <div class="cell_view">
    <div class="img_wrapper">
      <img :src="momentObj.img" alt="" />
    </div>
    <div class="content_wrapper">
      <div class="cell_name">
        {{ momentObj.name }}
      </div>
      <div class="cell_text" v-if="momentObj.text">
        {{ momentObj.text }}
      </div>
      <div class="cell_imgs" v-if="momentObj.imgs.length > 0">
        <div class="cell_img" v-for="(item, index) in momentObj.imgs">
          <img :key="index" :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cell_view",
  props: {
    momentObj: Object
  },
  data() {
    return {
      isPasswordHidden: true
    };
  },
  methods: {
    showPassword() {
      this.isPasswordHidden = !this.isPasswordHidden;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_var.scss";

.cell_view {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: $font4 * 3 $font4 * 4;
  line-height: $font4 * 15;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: $font4 * 4;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: calc(100% - 32px);
    height: 1px;
    background: rgba($light-grey, 0.2);
    text-align: center;
    bottom: 0px;
  }

  &:last-child {
    &::before {
      height: 0px;
    }
  }

  .img_wrapper {
    width: $font4 * 12;
    height: $font4 * 12;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: $font4 * 3;
    margin-right: $font4 * 3;
  }
  .content_wrapper {
    width: calc(100% - 60px);
    box-sizing: border-box;

    .cell_name {
      line-height: $font4 * 5;
      font-size: $font4 * 4;
      margin-bottom: $font4;
      color: lighten($dark-blue, 20%);
      font-weight: 500;
    }
    .cell_text {
      line-height: $font4 * 4;
      font-size: $font4 * 3;
      color: $light-grey;
    }

    .cell_imgs {
      display: inline-flex;
      justify-content: start;
      margin-top: $font4 * 3;
      flex-wrap: wrap;

      .cell_img {
        width: calc(100% / 3 - 4px);
        margin-right: $font4;
        margin-bottom: $font4 * 2;

        img {
          border-radius: $font4 * 3;
          overflow: hidden;
        }

        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
