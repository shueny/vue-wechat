<template>
  <div class="publish">
    <!-- <Header btn_icon="plus" btn_icon_type="fas" /> -->
    <div class="header">
      <button @click="$router.push('/momonets')">
        <font-awesome-icon icon="times" />
      </button>
      <button class="btn-publish" @click="publish">
        <font-awesome-icon icon="check" />
      </button>
    </div>
    <div class="content">
      <div class="text_wrap">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="text"
          placeholder="Write something here..."
        ></textarea>
        <Upload @getImgs="getImgs" :isLoading="isLoading" />
      </div>
    </div>
    <Loading :isLoading="isLoading" />
  </div>
</template>
<script>
// import Header from "../components/Header.vue";
import jwt_decode from "jwt-decode";
import Upload from "../components/Upload.vue";
import Loading from "../components/Loading.vue";
export default {
  name: "publish",
  props: {},
  data() {
    return {
      text: "",
      imgs: [],
      isLoading: false
    };
  },
  components: { Upload, Loading },
  computed: {
    user() {
      const token = localStorage.friendsToken;

      // 解析token
      const decode = jwt_decode(token);
      return decode;
    }
  },
  methods: {
    publish() {
      this.isLoading = true;
      // 發布
      //   console.log(this.imgs);
      const postData = {
        name: this.user.name,
        img: this.user.avatar,
        text: this.text,
        imgs: this.imgs.join("|")
      };
      //   console.log(postData);
      //   post
      this.$axios.post("/api/profiles/add", postData).then(res => {
        // console.log(res.status);
        this.isLoading = false;
        //發布成功後跳轉
        this.$router.push("/moments");
      });
    },
    getImgs(imgs) {
      // base64
      imgs.forEach(file => {
        this.uploadFile(file);
      });
    },
    uploadFile(file) {
      let reader = new FileReader();
      const _this = this;
      reader.onload = function(e) {
        // console.log(e.target.result);
        _this.imgs.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_var.scss";
.publish {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .header {
    width: 100%;
    height: $font4 * 11;
    color: $dark-blue;
    font-family: "Ubuntu";
    font-size: $font4 * 6;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 $font4 * 4;
    box-sizing: border-box;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0 0 5px 1px rgba($light-grey, 0.3);
    position: fixed;
    top: 0px;
    z-index: 1;
    background-color: $white;

    button {
      font-size: $font4 * 4;
      color: $light-grey;

      &.btn-publish {
        color: $green;
      }
    }
  }

  .content {
    margin-top: $font4 * 15;
    padding: 0 $font4 * 4;

    textarea {
      width: 100%;
    }
  }
}
</style>
