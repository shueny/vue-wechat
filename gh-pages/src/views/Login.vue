<template>
  <div class="login">
    <div class="title">
      <div class="tabs">
        <button class="btn-login active" disabled>
          Login
          <svg viewBox="0 0 10 10" width="100" height="100">
            <path
              class="shape"
              d="M 6.7 1.14 l 2.8 4.7 s 1.3 3 -1.82 3.22 l -5.4 0 s -3.28 -.14 -1.74 -3.26 l 2.76 -4.7 s 1.7 -2.3 3.4 0 z"
            />
          </svg>
        </button>
        <button class="btn-register" @click="$router.push('/register')">
          Register
        </button>
      </div>
    </div>

    <div class="container">
      <!-- form -->
      <div class="content">
        <form>
          <InputGroup label="Email" placeholder="" v-model="user.email" />
          <InputGroup
            label="Password"
            placeholder=""
            v-model="user.password"
            :isBtnHide="true"
            type="password"
          />
        </form>
        <div class="btn_wrap">
          <YButton
            :disabled="isDisabled"
            @click="loginClick"
            btn_style="btnStyle1"
            >Login</YButton
          >
        </div>
        <div class="btn_wrap2">
          <YButton
            :disabled="isDisabled"
            @click="loginClick"
            btn_style="btnStyle2"
            >Forget password?</YButton
          >
        </div>
      </div>
    </div>
    <div class="footer_wrap"></div>
  </div>
</template>
<script>
import InputGroup from "../components/InputGroup";
import YButton from "../components/YButton";
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  components: {
    InputGroup,
    YButton
  },
  computed: {
    // 計算屬性
    isDisabled() {
      if (this.user.email && this.user.password) return false;
      else return true;
    }
  },
  methods: {
    loginClick() {
      //驗證
      var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9._-])+(\.[a-zA-Z0-9._-])+/;
      if (!reg.test(this.user.email)) {
        alert("Email格式有誤!");
        return;
      }

      // 登入
      this.$axios.post("/api/users/login", this.user).then(res => {
        // console.log(res);
        // 儲存 token
        const { token } = res.data;
        // 儲存到 localStorage
        localStorage.setItem("friendsToken", token);

        // 跳轉畫面
        this.$router.push("/");
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_login.scss";
</style>
