<template>
  <div class="input_group" :class="{ 'is-hidden-show': isBtnHide === true }">
    <label :for="name">{{ label }}</label>
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      @input="$emit('input', $event.target.value)"
    />
    <!-- 開關密碼顯示 -->
    <!-- <button class="btn-hidden" v-if="isBtnHide" @click.prevent="showPassword">
      <font-awesome-icon
        v-if="isPasswordHidden === true"
        :icon="['far', 'eye-slash']"
      />

      <font-awesome-icon v-else :icon="['far', 'eye']" />
    </button> -->
  </div>
</template>

<script>
export default {
  name: "input_group",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: String,
    placeholder: String,
    name: String,
    label: String,
    isBtnHide: Boolean
  },
  data() {
    return {
      isPasswordHidden: true
    };
  },
  methods: {
    showPassword() {
      this.isPasswordHidden = !this.isPasswordHidden;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_var.scss";

.input_group {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: $font4 * 3 0;
  line-height: $font4 * 15;
  display: flex;
  flex-wrap: wrap;

  label,
  input {
    display: flex;
    width: 100%;
    height: 100%;
  }
  label {
    font-size: $font4 * 3;
    line-height: $font4 * 4;
    margin-bottom: $font4;
    color: $light-grey;
  }

  &.is-hidden-show {
    display: inline-flex;
    position: relative;

    input {
      width: calc(100% - 40px);
    }

    .btn-hidden {
      width: $font4 * 10;
      position: absolute;
      right: 0;
      bottom: $font4;
      height: $font4 * 10;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
}
</style>
