<template>
  <div class="moments">
    <Header
      title="Friends"
      btn_icon="camera"
      btn_icon_type="fas"
      :isLeft="true"
      @rightClick="$router.push('/publish')"
    />
    <div class="container">
      <Scroll ref="refresh" @pulldown="loadData" @pullup="loadMoreData">
        <!-- <div class="scroll-wrap"> -->
        <div class="head_wrapper">
          <div class="user_head">
            <span>{{ user.name }}</span>
            <div class="user_img">
              <img :src="user.avatar" alt="" class="head_img" />
            </div>
          </div>
        </div>
        <div class="content_wrapper">
          <CellView
            v-for="(item, index) in momentsList"
            :key="index"
            :momentObj="item"
          />
        </div>
        <!-- </div> -->
      </Scroll>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import jwt_decode from "jwt-decode";
import CellView from "../components/CellView.vue";
import Scroll from "../components/Scroll.vue";

export default {
  name: "moments",
  props: {},
  components: { Header, CellView, Scroll },
  data() {
    return { momentsList: [], page: 2, size: 3 };
  },
  computed: {
    user() {
      const token = localStorage.friendsToken;

      // 解析token
      const decode = jwt_decode(token);
      return decode;
    }
  },
  methods: {
    // 取得最近幾筆資料
    getLatestData() {
      this.$axios("/api/profiles/latest").then(res => {
        // console.log("latest");
        // console.log(res.data);
        this.momentsList = [...res.data];
        // 註冊事件，解決重置問題
        this.$refs.refresh.$emit("refresh");
      });
    },
    loadData() {
      this.getLatestData();
    },
    loadMoreData() {
      this.$axios(`/api/profiles/${this.page}/${this.size}`)
        .then(res => {
          // console.log(res.data);
          const result = [...res.data].reverse();

          // 若得到的數據大於0，把結果插入到原本的 momentsList 中
          if (result.length > 0) {
            result.forEach(item => {
              this.momentsList.push(item);
            });
            this.page++;
          } else {
            // 沒有更多數據
            console.log("done");
            this.$refs.refresh.$emit("loadedDone");
          }
        })
        .catch(err => {});
    }
  },
  created() {
    this.getLatestData();
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_var.scss";
.moments {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;

  .container {
    overflow: scroll;
    height: 100%;
  }

  .head_wrapper {
    width: 100%;
    height: $font4 * 62;
    position: relative;
    background: url(../assets/img/user_head_ini_bg.png) no-repeat;
    background-size: cover;
  }

  .user_head {
    height: $font4 * 62;
    width: 100%;
    // overflow: hidden;
    // display: inline-flex;
    // justify-content: flex-end;
    // align-items: flex-end;
    position: relative;

    span {
      height: $font4 * 10;
      display: flex;
      align-items: center;
      position: absolute;
      bottom: -$font4 * 10;
      right: $font4 * 29;
      color: darken($light-grey, 20%);
    }

    .user_img {
      width: $font4 * 20;
      height: $font4 * 20;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      bottom: -$font4 * 10;
      right: $font4 * 5;
      box-shadow: 0 0px 4px 0px rgba($light-grey, 0.5);
    }
  }

  .content_wrapper {
    margin-top: $font4 * 12;
  }
}
</style>
