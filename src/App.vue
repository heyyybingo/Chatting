<template>
  <!-- 头部内容 -->
  <div>
    <myheader v-show="this.$store.state.showHeader"></myheader>
    <transition>
      <router-view></router-view>
    </transition>
    <myfooter v-show="this.$store.state.showFooter"></myfooter>
  </div>
</template>

<script type="text/ecmascript-6">
import myheader from "./subcomponents/myheader.vue";
import Chat from "./components/Chat/Chat.vue";
import myfooter from "./subcomponents/myfooter.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components: { Chat, myheader, myfooter },
  methods: {}
};
</script>

<style lang="scss" scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  position: absolute;
  transform: translateX(100%);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
