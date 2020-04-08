<template>
  <div class="cell_view">
    <div class="title_wrapper">
      <div
        class="img_wrapper"
        :style="{ 'background-image': 'url(' + momentObj.img + ')' }"
      >
        <img :src="momentObj.img" alt="" />
      </div>
      <div class="cell_name">
        {{ momentObj.name }}
      </div>
      <div class="cell_text" v-if="momentObj.text">
        {{ momentObj.text }}
      </div>
    </div>
    <div class="content_wrapper">
      <div class="cell_imgs" v-if="momentObj.imgs.length > 0">
        <div
          class="cell_img"
          v-for="(item, index) in momentObj.imgs"
          :style="{ 'background-image': 'url(' + item + ')' }"
          :key="index"
        >
          <!-- <img :key="index" :src="item" alt="" /> -->
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

  .title_wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: $font4 * 12 auto;
    grid-template-rows: $font4 * 6 auto;
    grid-column-gap: $font4 * 2;
    margin-bottom: $font4 * 2;

    .img_wrapper {
      width: $font4 * 12;
      height: $font4 * 12;
      overflow: hidden;
      border-radius: $font4 * 3;
      grid-column: 1/2;
      grid-row: 1/3;
      background-size: cover;
      background-repeat: no-repeat;

      img {
        vertical-align: top;
        opacity: 0;
      }
    }
    .cell_name {
      grid-column: 2/3;
      grid-row: 1/2;
      font-size: $font4 * 4;
      line-height: $font4 * 6;
    }

    .cell_text {
      grid-column: 2/3;
      grid-row: 2/3;
      color: $light-grey;
      font-size: $font4 * 3;
      line-height: $font4 * 4;
    }
  }

  .content_wrapper {
    width: 100%;
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
        width: calc((100vw - 32px) / 3 - 4px);
        height: calc((100vw - 32px) / 3 - 4px);
        margin-right: $font4;
        margin-bottom: $font4 * 2;
        border-radius: $font4 * 3;
        background-size: cover;

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
