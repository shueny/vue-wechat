<template>
  <div class="tabbar">
    <router-link
      class="tab-item"
      v-for="(item, index) in data"
      :key="index"
      :to="item.path"
      active-class="is-selected"
    >
      <div class="tab-item-icon">
        <font-awesome-icon :icon="['fa', item.icon]" />
        <font-awesome-icon :icon="['far', item.icon]" />
      </div>
    </router-link>
    <!-- <a href="" class="tab-item">
      <div class="tab-item-icon">
        <font-awesome-icon :icon="['far', 'comment-dots']" />
        <font-awesome-icon icon="comment-dots" />
      </div>
      <div class="tab-item-label">Let's Chat</div>
    </a>
    <a href="" class="tab-item">
      <div class="tab-item-icon">
        <font-awesome-icon :icon="['far', 'address-book']" />
        <font-awesome-icon icon="address-book" />
      </div>
      <div class="tab-item-label">Let's Chat</div>
    </a>
    <a href="" class="tab-item">
      <div class="tab-item-icon">
        <font-awesome-icon :icon="['far', 'eye']" />
        <font-awesome-icon icon="eye" />
      </div>
      <div class="tab-item-label">Let's Chat</div>
    </a>
    <a href="" class="tab-item">
      <div class="tab-item-icon">
        <font-awesome-icon :icon="['far', 'user']" />
        <font-awesome-icon icon="user" />
      </div>
      <div class="tab-item-label">Let's Chat</div>
    </a> -->
  </div>
</template>

<script>
export default {
  name: "tabbar",
  props: {
    data: Array
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_var.scss";
.tabbar {
  width: 100%;
  color: $white;
  font-family: "Ubuntu";
  font-size: $font4 * 6;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 0 5px 1px rgba($light-grey, 0.3);
  position: fixed;
  bottom: 0px;

  .tab-item {
    width: 25%;
    height: $font4 * 11;
    color: $light-grey;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 $font4 * 4;
    box-sizing: border-box;
    position: relative;

    .tab-item-icon {
      margin-right: $font4 * 2;
      font-size: $font4 * 4;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      justify-content: center;
      svg[data-prefix="fa"] {
        display: none;
        position: absolute;
        right: 46%;
      }
    }
    &.is-selected {
      color: $green;
      svg[data-prefix="fa"] {
        display: flex;
        opacity: 0.3;
      }
    }
  }
}
</style>
