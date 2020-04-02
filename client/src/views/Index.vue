<template>
  <div class="index">
    <router-view></router-view>
    <TabBar :data="tabbarData" />
  </div>
</template>
<script>
import TabBar from "../components/TabBar";
export default {
  name: "Index",
  components: { TabBar },
  data() {
    return {
      tabbarData: [
        { title: "contacts", icon: "address-book", path: "/contacts" },
        { title: "chats", icon: "comment-dots", path: "/chats" },
        { title: "discover", icon: "eye", path: "/discover" },
        { title: "me", icon: "user", path: "/me" }
      ]
    };
  }
};
</script>
