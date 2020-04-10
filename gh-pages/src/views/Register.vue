<template>
  <div class="register">
    <div class="title">
      <div class="tabs">
        <button class="btn-login" @click="$router.push('/login')">Login</button>
        <button class="btn-register active" disabled>
          Register
          <svg viewBox="0 0 10 10" width="100" height="100">
            <path
              class="shape"
              d="M 6.7 1.14 l 2.8 4.7 s 1.3 3 -1.82 3.22 l -5.4 0 s -3.28 -.14 -1.74 -3.26 l 2.76 -4.7 s 1.7 -2.3 3.4 0 z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="container">
      <!-- form -->
      <div class="content">
        <form>
          <InputGroup label="Username" placeholder="" v-model="user.name" />
          <InputGroup label="Email" placeholder="" v-model="user.email" />
          <InputGroup
            label="Password"
            placeholder=""
            v-model="user.password"
            type="password"
          />
          <InputGroup
            label="Confirm password"
            placeholder=""
            v-model="user.password2"
            type="password"
          />
        </form>
        <div class="btn_wrap">
          <YButton
            :disabled="isDisabled"
            @click="registerClick"
            btn_style="btnStyle1"
            >Register</YButton
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputGroup from "../components/InputGroup";
import YButton from "../components/YButton";
export default {
  name: "register",
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
  components: { InputGroup, YButton },
  computed: {
    // 計算屬性
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
  methods: {
    registerClick() {
      //驗證
      var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9._-])+(\.[a-zA-Z0-9._-])+/;
      if (!reg.test(this.user.email)) {
        alert("Email格式有誤!");
        return;
      }
      if (this.user.password !== this.user.password2) {
        alert("兩次密碼輸入不一致!");
        return;
      }

      this.$axios.post("/api/users/register", this.user).then(res => {
        alert("註冊成功!");
        this.$router.push("/login"); //成功後跳轉到Login畫面
      });
      // .catch(err => {});
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/_login.scss";
</style>
