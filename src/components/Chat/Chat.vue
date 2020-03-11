<template>
  <div class="chat-container" ref="chatContainer">
    <!-- 聊天框 -->
    <div class="chatRoom" ref="chatRoom">
      <!-- 每一列用户发送的信息 -->
      <div
        class="message-content"
        v-for="item in msgList"
        :key="item.id"
        :class="{'message-content-left':!item.me,'message-content-right':item.me}"
      >
        <div class="box"></div>
        <!-- 用户头像，在左侧 -->

        <img class="user-pic" :src="item.userPic" v-if="!item.me" width="40px" height="40px" />
        <!-- 右侧用户名称，以及信息 -->
        <div class="user-info">
          <div class="user-name">{{item.username}}</div>

          <div class="user-message">{{item.Message}}</div>
        </div>

        <img class="user-pic" :src="item.userPic" v-if="item.me" width="40px" height="40px" />
      </div>
    </div>
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
  name: "Chat",
  sockets: {
    connect() {
      console.log("client connected");
      // 连接后登录
      let userInfo = this.$store.state.userInfo;
      console.log(userInfo);
      // 发送用户信息并登录
      this.$socket.emit("login", userInfo);
    },
    disconnect() {
      console.log("client disconnected");
    },
    acceptPair() {
      // 接受配对对象信息
    },
    acceptMsg() {
      // 接受消息
    },
    logout() {
      //服务端强制登出
      this.$router.back();
    }
  },
  data() {
    return {
      disabled: false,
      speakText: "",
      smileTouched: false,
      otherTouched: false,
      msgList: [],
      isPairing: false //正在配对
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
    },
    msgList(newVal, oldVal) {
      this.$nextTick(() => {
        let chatRoom = this.$refs.chatRoom;
        document.body.scrollTop = chatRoom.scrollHeight;
      });
    }
  },
  created() {
    console.log(this.$store.state.userInfo);
    this.$store.commit("ShowHeader");
    this.$store.commit("HideFooter");
    this.axios.get("./data/Chat/data.json").then(result => {
      console.log(result);
      this.msgList = result.data.result;
    });
    this.$socket.connect();
  },
  beforeDestroy() {
    this.$socket.disconnect();
  }
};
</script>

<style lang="scss" scoped>
.chat-container {
  .chatRoom {
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: left;

    .message-content {
      margin-top: 3%;

      display: flex;
      .user-pic {
        margin-top: 2%;
      }
      .user-info {
        width: 35%;
        display: block;
        .user-name {
          width: 100%;
          font-size: 10px;
        }
        .user-message {
          padding: 5%;
          border-radius: 5px;
        }
      }
    }

    .message-content-left {
      .user-info {
        margin-left: 2%;
        .user-name {
          text-align: left;
        }
        .user-message {
          background-color: rgb(247, 212, 212);
        }
      }
    }
    .message-content-right {
      .box {
        // 占位
        flex-grow: 1;
      }
      .user-info {
        margin-right: 2%;
        .user-name {
          text-align: right;
        }
        .user-message {
          background-color: rgb(0, 255, 76);
        }
      }
    }
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
