<template>
  <div class="myheader-container">
    <!--左侧 后退 -->
    <span class="iconfont icon-houtui"></span>

    <!--中间 标题栏 -->
    <h3 class="title" v-text="titlestr"></h3>

    <!-- 右侧 更多 -->
    <span class="iconfont icon-icon_more"></span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
      // 主题显示
      titlestr: "HelloChat"
    };
  },
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.myheader-container {
  height: 50px;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  background-color: rgb(245, 237, 237);
  .iconfont {
    text-align: center;
    font-size: 25px;
  }
  .icon-huitui {
    flex-grow: 1;
  }
  .icon-gengduo {
    flex-grow: 1;
  }

  .title {
    flex-grow: 8;
    text-align: center;
  }
}
</style>
