<template>
  <div class="chat-container">
    <!-- 头部 -->
    <mt-header fixed title="fixed top"></mt-header>

    <!-- 聊天框 -->
    <div class="chatRoom">1sewqe</div>
    <!-- 底部输入 -->

    <div class="bottom">
      <span
        class="iconfont icon-yuyin"
        :class="{'icon-yuyin-touched':disabled}"
        @touchstart="disabled=!disabled"
      ></span>

      <input class="inputArea" type="text" :disabled="disabled" :placeholder="speakText" />

      <span
        class="iconfont icon-smile"
        :class="{'icon-smile-touched':smileTouched}"
        @touchstart="smileTouched=!smileTouched"
      ></span>

      <span
        class="iconfont icon-21"
        :class="{'icon-21-touched':otherTouched}"
        @touchstart="otherTouched=!otherTouched"
      ></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
      disabled: false,
      speakText: "",
      smileTouched: false,
      otherTouched: false
    };
  },
  components: {},
  methods: {},
  watch: {
    disabled(newVal) {
      console.log("ss");
      if (this.disabled) {
        this.speakText = "按住讲话";
      } else {
        this.speakText = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-container {
  .chatRoom {
    padding: 40px;
  }

  .bottom {
    width: 100%;
    height: 40px;
    bottom: 0;
    left: 0px;
    right: 0px;
    position: fixed;
    background-color: rgb(245, 237, 237);
    border-radius: 10px;
    display: flex;
    align-items: center;

    .iconfont {
      text-align: center;
      flex-grow: 0.4;
      font-size: 30px;
      transition: all 0.5s ease;
    }
    .icon-yuyin-touched {
      transform: rotate(90deg);
    }
    .icon-smile-touched {
      transform: rotate(-90deg);
    }
    .icon-21-touched {
      transform: rotate(-90deg);
    }
    .inputArea {
      border: none;
      height: 30px;
      width: 70px;
      flex-grow: 7;
      &::-ms-input-placeholder {
        text-align: center;
      }
      &::-webkit-input-placeholder {
        text-align: center;
      }
      &::-moz-placeholder {
        text-align: center;
      }
    }
  }
}
</style>
