<template>
  <div class="register">
    <div class="header">
      <button class="btn-style01" @click="$router.go(-1)">取消</button>
      <div class="container">
        <div class="title">註冊帳號</div>
        <div class="content">
          <!-- 表單 -->
          <form action>
            <InputGroup label="稱號" placeholder="例如：王OO" v-model="user.name"></InputGroup>
            <InputGroup label="email" placeholder="請輸入 email" v-model="user.email"></InputGroup>
            <InputGroup label="密碼" placeholder="請輸入密碼" v-model="user.password" type="password"></InputGroup>
            <InputGroup label="請確認密碼" placeholder="請確認密碼" v-model="user.password2" type="password"></InputGroup>
          </form>
          <div class="btn-wrap">
            <YButton :disabled="isDisabled" @click="registerClick">註冊</YButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputGroup from "../components/InputGroup";
import YButton from "../components/YButton";
export default {
  name: "Register",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password2: ""
      }
    };
  },
  computed: {
    isDisabled() {
      if (
        this.user.name &&
        this.user.email &&
        this.user.password &&
        this.user.password2
      )
        return false;
      else return true;
    }
  },
  components: { InputGroup, YButton },
  methods: {
    registerClick() {
      // 驗證 email
      var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9._-])+(\.[a-zA-Z0-9._-])+/;
      if (!reg.test(this.user.email)) {
        alert("請輸入正確的 email 格式!");
        return;
      }

      if (this.user.password !== this.user.password2) {
        alert("請確認兩次密碼是否相同!");
        return;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/base/_variables.scss";
.register {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: $font4 * 4;
  box-sizing: border-box;
}

.header {
  width: 100%;
  height: $font4 * 12;
  box-sizing: border-box;
  padding: 0 $font4 * 3;
  line-height: $font4 * 12;
}

.container {
  width: 100%;
  padding: $font4 * 4;
  box-sizing: border-box;
  .title {
    margin-top: $font4 * 20;
    font-size: $font4 * 6;
    text-align: center;
  }
}
.content {
  .btn-wrap {
    margin-top: $font4 * 8 - 2px;
  }
}
</style>
