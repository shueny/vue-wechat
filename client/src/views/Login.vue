<template>
  <div class="login">
    <div class="title">登入</div>
    <div class="content">
      <!-- 表單 -->
    </div>
    <div class="footer-wrap">
      |
      <button class="register">註冊</button>|
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  components: {}
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
</style>

