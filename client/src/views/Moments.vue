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
            <div
              class="user_img"
              :style="{ 'background-image': 'url(' + user.avatar + ')' }"
            >
              <!-- <img :src="user.avatar" alt="" class="head_img" /> -->
            </div>
            <span>{{ user.name }}</span>
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
    return { momentsList: [], page: 2, size: 3, isLoading: false };
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
      if (this.isLoading) return;
      this.isLoading = true;
      this.$axios("/api/profiles/latest").then(res => {
        this.isLoading = false;
        this.momentsList = [...res.data];
        // 註冊事件，解決重置問題
        this.$refs.refresh.$emit("refresh");
      });
    },
    loadData() {
      this.page = 2;
      this.getLatestData();
    },
    loadMoreData() {
      if (this.isLoading) return;
      this.isLoading = true;
      this.$axios(`/api/profiles/${this.page}/${this.size}`)
        .then(res => {
          // console.log(res.data);
          this.isLoading = false;
          const result = [...res.data];

          // 若得到的數據大於0，把結果插入到原本的 momentsList 中
          if (result.length > 0) {
            result.forEach(item => {
              this.momentsList.push(item);
            });
            this.page++;
          } else {
            // 沒有更多數據
            // console.log("done");
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
    // background: url(../assets/img/user_head_ini_bg.png) no-repeat;
    // background-size: cover;
  }

  .user_head {
    height: $font4 * 62;
    width: 100%;
    // overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: flex-end;
    padding-bottom: $font4 * 4;
    box-sizing: border-box;

    span {
      width: 100%;
      height: $font4 * 10;
      display: flex;
      align-items: center;
      color: darken($light-grey, 20%);
      justify-content: center;
    }

    .user_img {
      width: $font4 * 30;
      height: $font4 * 30;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 0px 4px 0px rgba($light-grey, 0.5);
      background-size: cover;
    }
  }

  .content_wrapper {
    margin-top: $font4 * 12;
  }
}
</style>
