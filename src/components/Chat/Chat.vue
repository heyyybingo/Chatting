<template>
  <div class="chat-container" ref="chatContainer">
    <!-- 聊天框 -->

    <div class="chatRoom" ref="chatRoom">
      <!-- 每一列用户发送的信息 -->
      <v-touch @swipeleft="onSwipeLeft" class="wrapper">
        <transition mode="out-in">
          <div class="info-container" v-if="Paired">
            <!-- 匹配成功后显示对方的信息 -->
            <div class="img-container">
              <img :src="paired_userInfo.userPic" width="40px" height="40px" />
            </div>
            <span>昵称:{{paired_userInfo.userName}}</span>
            <span>性别:{{paired_userInfo.selfSex}}</span>
            <span>--{{Date()}}--</span>
          </div>
        </transition>
      </v-touch>
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

          <span class="user-message">{{item.Message}}</span>
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

      <input
        class="inputArea"
        ref="inputArea"
        type="text"
        maxlength="120"
        :disabled="disabled"
        :placeholder="speakText"
        v-model="msg"
      />

      <!-- <span
        class="iconfont icon-smile"
        :class="{'icon-smile-touched':smileTouched}"
        @touchstart="smileTouched=!smileTouched"
      ></span>

      <span
        class="iconfont icon-21"
        :class="{'icon-21-touched':otherTouched}"
        @touchstart="otherTouched=!otherTouched"
      ></span>-->
      <input
        type="button"
        class="btn-send"
        :class="{'btn-send-touched':sendTouched}"
        value="发送"
        @touchstart="sendTouched=true"
        @touchend="sendMsg"
      />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Chat",
  sockets: {
    connect() {
      // 连接后登录
      let userInfo = this.$store.state.userInfo;
      console.log(userInfo);
      // 发送用户信息并配对
      this.startPair();

      console.log("client connected");
      this.$indicator.close();
    },

    disconnect() {
      console.log("client disconnected");
    },
    acceptPair(userInfo) {
      // 接受配对对象信息

      console.log("Paired");
      console.log(userInfo);
      this.paired_userInfo = userInfo;
      this.isPairing = false;
      this.Paired = true;
    },
    pairagain() {
      // 对象
      this.$toast("对方断开了连接");
      this.startPair();
    },
    chat(msg) {
      // 接受消息
      if (msg.me) {
        // 放入自己的头像
        msg.userPic = this.$store.state.userInfo.userPic;
      } else {
        msg.userPic = this.paired_userInfo.userPic;
      }
      console.log(msg);
      this.msgList.push(msg);
      console.log(msg);
      console.log(this.msgList);
    },
    logout() {
      //服务端失去连接强制登出
      this.$router.back();
    }
  },
  data() {
    return {
      disabled: false,
      speakText: "",
      // smileTouched: false,
      // otherTouched: false,
      sendTouched: false,
      msgList: [],
      isPairing: false, //正在配对
      PairTimer: null, //配对计时器
      Paired: false,
      // continuePair: false,
      msg: "", //输入的信息
      paired_userInfo: {}, //配对对象信息
      LoginTimer: null //登录计时器
    };
  },
  components: {},
  methods: {
    onSwipeLeft() {
      console.log("left");
      this.startPair();
    },
    startPair() {
      this.Paired = false;
      this.isPairing = true;
      this.msgList = [];
      this.$store.commit("SetTitlestr", "配对中...");
      this.$socket.emit("pair", this.$store.state.userInfo);
    },
    sendMsg() {
      if (this.msg === "" || this.msg === "\n" || this.msg === "\t") {
        return;
      }
      this.$socket.emit("chat", this.msg);

      this.msg = "";
      this.sendTouched = false;
    }
  },
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
    },
    isPairing(newVal) {
      console.log(this.isPairing);
      if (newVal) {
        this.$indicator.open({
          text: "正在配对...",
          spinnerType: "double-bounce"
        });
        this.PairTimer = setTimeout(() => {
          // 长时间配对不成功

          // console.log(that);
          if (this.isPairing) {
            // this.continuePair = fals
            this.$toast("服务器正在为您分配，请稍等...");
            // this.$messagebox.close();
            // this.$messagebox({
            //   title: "Notice",
            //   message: "人比较少，是否继续配对？",
            //   showCancelButton: true
            // })
            //   .then(action => {
            //     console.log(action);
            //     if (action === "confirm") {
            //       if (this.Paired) {
            //         // 如果在我忧郁的时候，已经配对了,那么就直接成功
            //         return;
            //       }
            //       //清空记录
            //       console.log("继续配对");
            //       this.continuePair = true;

            //       this.msgList = [];
            //     } else {
            //       // 取消则返回登录界面
            //       this.$router.back();
            //    }
            // })
            // .catch(err => {
            //   console.log(err);
            // });
          }
        }, 10 * 1000);
      } else {
        clearTimeout(this.PairTimer);
        this.$indicator.close();
      }
    },
    Paired(newVal) {
      if (newVal) {
        this.$toast({
          message: "配对成功！",
          iconClass: "iconfont icon-chenggongtubiao"
        });

        this.$store.commit("SetTitlestr", this.paired_userInfo.userName);
      }
    }
    // continuePair(newVal) {
    //   this.isPairing = false;
    //   if (newVal) {
    //     this.$nextTick(() => {
    //       this.isPairing = true;
    //     });
    //   }
    // }
  },
  created() {
    console.log(this.$store.state.userInfo);

    this.$indicator.open({ text: "正在登录...", spinnerType: "snake" });
    this.LoginTimer = setTimeout(() => {
      // 长时间不能登录则重试

      if (!this.$socket.connected) {
        this.$toast("登录失败，请检查网络");
        this.$router.back();
      }
    }, 10 * 1000);
    this.$socket.connect();
    this.$store.commit("SetTitlestr", "HelloChat");
  },
  beforeMount() {
    // console.log(this.$socket);
    this.$store.commit("ShowHeader");
    this.$store.commit("HideFooter");
  },
  beforeDestroy() {
    this.$indicator.close();
    clearTimeout(this.LoginTimer);
    clearTimeout(this.PairTimer);
    this.$socket.disconnect();
  }
};
</script>

<style lang="scss" scoped>
.chat-container {
  .chatRoom {
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: left;
    // position: absolute;
    // width: 100%;
    // height: 100%;
    .v-enter {
      transform: translateX(100%);
    }
    .v-leave-to {
      opacity: 0;
      transform: translateX(-89100%);
    }
    .v-enter-active,
    .v-leave-active {
      transition: all 1s ease;
    }
    .info-container {
      width: 100%;
      .img-container {
        width: 40px;
        margin: 0 auto;
        img {
          border-radius: 50%;
        }
      }

      span {
        text-align: center;
        font-size: 0.5rem;
        font-style: italic;
        color: grey;
        display: block;
      }
    }
    .message-content {
      margin-top: 3%;

      display: flex;

      .user-pic {
        margin-top: 2%;
        border-radius: 3px;
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
          float: left;
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
          float: right;
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
      flex-grow: 6;
      width: 70px;
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
    $btncolor: rgb(238, 189, 174);
    .btn-send {
      flex-grow: 1.5;
      height: 100%;
      border: 0;
      outline: none;
      border-radius: 3px;
      font-size: 1rem;
      color: white;
      background-color: $btncolor;
      -webkit-appearance: none;
    }
    .btn-send-touched {
      background-color: darken($btncolor, 10%);
    }
  }
}
</style>
