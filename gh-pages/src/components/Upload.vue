<template>
  <div class="upload img_wrap">
    <div
      class="isImg"
      v-for="(file_img, index) in showFileData"
      :key="index"
      v-if="showFileData.length > 0"
    >
      <img :src="file_img" alt="" />
      <button
        class="btn_remove"
        @click="removeImg(file_img)"
        v-show="!isLoading"
      >
        <font-awesome-icon icon="times" />
      </button>
    </div>
    <div class="isImg img_upload" v-if="showFileData.length < 9">
      <button class="btn_upload">
        <font-awesome-icon icon="plus" />
        <input
          @change="addFile"
          type="file"
          ref="myFile"
          multiple
          accept="image/*"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "upload",
  props: {
    path: String,
    src: String,
    title: String,
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showFileData: [], //存放圖片的 url
      allUploadFiles: [] //文件上傳 files
    };
  },
  methods: {
    addFile() {
      //   console.log(this.$refs.myFile.files);
      let files = [...this.$refs.myFile.files];

      if (this.showFileData.length + files.length > 9) {
        alert("最多9張!");
        return;
      }
      files.forEach(file => {
        this.allUploadFiles.push(file);
        let objUrl = this.getObjectURL(file);
        this.showFileData.push(objUrl);
      });

      //註冊事件，讓父component執行
      this.$emit("getImgs", this.allUploadFiles);
    },
    getObjectURL(file) {
      let url = null;
      if (window.createObjectURL != undefined) {
        //basic
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    },
    removeImg(file_img) {
      this.showFileData.forEach((file, index) => {
        if (file === file_img) {
          this.showFileData.splice(index, 1);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_var.scss";
.upload {
  width: 100%;
  height: 100%;
  padding: $font4 * 3 0;
  box-sizing: border-box;
  display: inline-flex;
  flex-wrap: wrap;

  .btn_upload {
    padding: 0;
    background-color: rgba($green, 0.6);
    border-radius: $font4 * 3;
    position: relative;
    font-size: $font4 * 5;

    svg {
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: $white;
    }
  }

  input {
    width: calc(100vw / 3 - 16px);
    height: calc(100vw / 3 - 16px);
    opacity: 0;
  }

  .isImg {
    width: calc(100vw / 3 - 16px);
    height: calc(100vw / 3 - 16px);
    border-radius: $font4 * 3;
    overflow: hidden;
    display: inline-flex;
    margin: 0 $font4 $font4 * 2 0;
    position: relative;

    .btn_remove {
      width: $font4 * 6;
      height: $font4 * 6;
      position: absolute;
      top: 0;
      left: 0;
      padding: 0;
      margin: 0;
      background: white;
      border-radius: 50%;

      svg {
        color: rgba(darken($green, 15%), 0.8);
        font-size: $font4 * 4;
      }
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}
</style>
