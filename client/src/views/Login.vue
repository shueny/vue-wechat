<template>
  <div class="login">
    <div class="title">登入</div>
    <div class="content">
      <!-- 表單 -->
      <form action>
        <InputGroup label="帳號" placeholder="請輸入帳號" v-model="user.email"></InputGroup>
        <InputGroup label="密碼" placeholder="請輸入密碼" v-model="user.password" type="password"></InputGroup>
      </form>
    </div>
    <div class="footer-wrap">
      |
      <button class="btn-style01 register" @click="$router.push('/register')">註冊</button>|
    </div>
  </div>
</template>
<script>
import InputGroup from "@/components/InputGroup";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  components: { InputGroup }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/base/_variables.scss";
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: $font4 * 4;
  box-sizing: border-box;
}
.title {
  margin-top: $font4 * 20;
  font-size: $font4 * 6;
  text-align: center;
}

.footer-wrap {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: $font4 * 4;
  text-align: center;
  color: $dark-grey;
}
</style>

