<template>
  <div class="me">
    <Header title="Me" />
    <div class="container">
      <div class="cell_wrapper">
        <div class="cell_title" v-if="user">
          <div class="user_avatar">
            <img :src="user.avatar" alt="" />
          </div>
          <span>{{ user.name }}</span>
        </div>
      </div>
      <div class="btn_wrapper">
        <YButton @click="logout" btn_style="btnStyle1">Logout</YButton>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import jwt_decode from "jwt-decode";
import YButton from "../components/YButton.vue";
export default {
  name: "me",
  props: {},
  components: { Header, YButton },
  computed: {
    user() {
      const token = localStorage.friendsToken;

      // 解析token
      const decode = jwt_decode(token);
      return decode;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("friendsToken");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_var.scss";
.me {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .cell_title {
    height: $font4 * 66;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: $font4 * 11;

    .user_avatar {
      width: $font4 * 30;
      height: $font4 * 30;
      border-radius: 50%;
      overflow: hidden;
    }

    span {
      width: 100%;
      display: flex;
      height: $font4 * 8;
      justify-content: center;
      align-items: center;
    }
  }

  .btn_wrapper {
    text-align: center;
  }
}
</style>
