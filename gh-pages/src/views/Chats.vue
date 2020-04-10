<template>
  <div class="chats">
    <Header title="Chats" btn_icon="plus" btn_icon_type="fas" />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
export default {
  name: "chats",
  props: {},
  components: { Header }
};
</script>
