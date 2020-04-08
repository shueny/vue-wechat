<template>
  <div class="scroll-wrap" ref="wrapper">
    <div>
      <!-- 下拉更新 -->
      <div class="pulldown" v-show="dragTip.showLoading">
        <div class="clear">
          <div class="display">
            <div class="fl">
              <img src="../assets/img/loading-circle.gif" alt="" />
            </div>
            <div class="fl">{{ dragTip.text }}</div>
          </div>
        </div>
      </div>

      <slot></slot>

      <!-- 上拉加載 -->
      <div class="pullup" v-show="dragTip.showLoadMore || isDone">
        <div class="clear" v-if="!isDone">
          <div class="display">
            <div class="fl">
              <img src="../assets/img/loading-circle.gif" alt="" />
            </div>
            <div class="fl">Loading...</div>
          </div>
        </div>
        <div class="list-donetip" v-else="isDone">
          <slot name="doneTip">No More Data</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "scroll",
  props: {},
  components: {},
  data() {
    return {
      scroll: {},
      dragTip: {
        text: "Update",
        showLoading: false,
        showLoadMore: false
      },
      isDone: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.initScroll();
    }, 20);
  },
  methods: {
    initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }

      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 1
      });

      // 派發下拉事件
      this.scroll.on("scroll", pos => {
        //   顯示下拉刷新loading
        if (pos.y > 50) {
          this.dragTip.showLoading = true;
          this.dragTip.text = "Release to Update";
        } else {
          this.dragTip.showLoadMore = true;
        }
      });

      //   手鬆開事件
      this.scroll.on("touchEnd", pos => {
        console.log(pos.y);
        if (pos.y > 50) {
          this.dragTip.text = " Loading...";
          // 重新初始化

          // 註冊下拉事件
          this.$emit("pulldown");
          this.$on("refresh", this.reset);
        }
      });

      // 到達底部事件
      this.scroll.on("scrollEnd", () => {
        if (this.scroll.y <= this.scroll.maxScrollY) {
          // 觸發下拉加載事件
          this.$emit("pullup");
          this.dragTip.showLoadMore = false;
          this.$on("loadedDone", () => {
            this.isDone = true;
          });
        }
      });
    },
    reset() {
      this.isDone = false;
      this.dragTip.showLoadMore = false;
      setTimeout(() => {
        this.dragTip = { text: "Release to Update", showLoading: false };
      }, 600);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_var.scss";
.scroll-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .pulldown,
  .pullup {
    width: 100%;
    height: $font4 * 11;
    text-align: center;
    margin-top: $font4 * 11;
  }

  .clear {
    // height: $font4 * 11;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    color: $green;
    width: 100vw;
    height: 100%;
    background: rgba($white, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    .display {
      display: flex;
      height: $font4 * 11;
      align-items: center;
      position: fixed;
      width: 100vw;
      justify-content: center;
    }

    .fl {
      margin: 0 $font4 * 2;
    }
    img {
      height: $font4 * 11;
      width: auto;
    }
  }

  .pullup {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: $font4 * 5;
    padding: $font4 * 2 0;
    border-top: 1px solid rgba(191, 191, 191, 0.2);
    .clear {
      height: $font4 * 11;
      position: initial;
      bottom: 0;
      top: auto;
    }

    .list-donetip {
      color: rgba(lighten($dark-blue, 25%), 0.6);
    }
  }
}
</style>
