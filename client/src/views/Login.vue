<template>
  <div class="login">
    <div class="title">登入</div>
    <div class="content">
      <!-- 表單 -->
      <form action>
        <InputGroup label="帳號" placeholder="請輸入帳號" v-model="user.email"></InputGroup>
        <InputGroup label="密碼" placeholder="請輸入密碼" v-model="user.password" type="password"></InputGroup>
      </form>
      <div class="btn-wrap">
        <YButton :disabled="isDisabled" @click="loginCick">登入</YButton>
      </div>
    </div>
    <div class="footer-wrap">
      |
      <button class="btn-style01 register" @click="$router.push('/register')">註冊</button>|
    </div>
  </div>
</template>
<script>
import InputGroup from "@/components/InputGroup";
import YButton from "@/components/YButton";
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
  components: { InputGroup, YButton },
  computed: {
    isDisabled() {
      if (this.user.email && this.user.password) return false;
      else return true;
    }
  },
  methods: {
    loginClick() {
      // 驗證 email
      var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9._-])+(\.[a-zA-Z0-9._-])+/;
      if (!reg.test(this.user.email)) {
        alert("請輸入正確的 email 格式!");
        return;
      }
    }
  }
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
  padding: 0 $font4 * 5;
  box-sizing: border-box;
  .register {
    border-radius: $font4;
  }
}
.content {
  .btn_wrap {
    margin-top: $font4 * 8 - 2px;
  }
}
</style>

