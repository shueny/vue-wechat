<template>
  <div class="contacts">
    <Header title="Contacts" btn_icon="user-plus" btn_icon_type="fas" />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
export default {
  name: "contacts",
  props: {},
  components: { Header }
};
</script>
