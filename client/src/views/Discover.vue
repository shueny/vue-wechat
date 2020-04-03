<template>
  <div class="discover">
    <Header title="Discover" />
    <div class="content">
      <Cell :src="cellData.src" :title="cellData.title" :path="cellData.path" />
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Cell from "../components/Cell.vue";
export default {
  name: "discover",
  props: {},
  components: { Header, Cell },
  data() {
    return {
      cellData: {
        src: "high-five-solid.svg",
        title: "friends",
        path: "/moments"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_var.scss";
.discover {
  position: fixed;
  top: 0;
  width: 100vw;
  overflow: hidden;
  .content {
    width: 100%;
    height: calc(100vh - 88px);
    margin-top: $font4 * 11;
    overflow-y: scroll;
  }
}
</style>
