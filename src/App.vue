<template>
  <!-- 头部内容 -->
  <div>
    <myheader></myheader>

    <Chat></Chat>
  </div>
</template>

<script type="text/ecmascript-6">
import myheader from "./subcomponents/myheader.vue";
import Chat from "./components/Chat/Chat.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components: { Chat, myheader },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
