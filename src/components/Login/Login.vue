<template>
  <div class="login-container">
    <!-- 图标 -->
    <div class="img-container">
      <input
        type="file"
        ref="userPic"
        accept="image/*"
        capture="camera"
        style="display:none;"
        @change="showImg"
        multiple
      />
      <img :src="imgURL" ref="userPicdisplay" height="100%" width="100%" @click="uploadImg" />
    </div>
    <h3>点击图片上传头像</h3>
    <!-- 输入框内容 -->

    <form class="form-group">
      <div class="group">
        <div class="group-row">
          <div class="box"></div>
          <input type="text" required placeholder="请输入昵称" v-model="userName" maxlength="12" />
          <div class="box"></div>
          <!-- <input
            type="button"
            class="box btn-checkcode"
            :class="{'btn-checkcode-touched':checkbtnTouched}"
            @touchend="checkbtnTouchEnd"
            :value="checkbtnStr"
          />-->
        </div>
        <div class="underline"></div>
      </div>

      <div class="group">
        <div class="group-row">
          <div class="box box-radio"></div>
          <!-- <input type="text" required placeholder="验证码" /> -->
          <label>你的性别:</label>
          <input type="radio" name="self-sex" value="男" v-model="selfSex" />男
          <input type="radio" name="self-sex" value="女" v-model="selfSex" />女
          <div class="box box-radio"></div>
        </div>
        <div class="group-row">
          <div class="box box-radio"></div>
          <!-- <input type="text" required placeholder="验证码" /> -->
          <label>匹配性别:</label>
          <input type="radio" name="find-sex" value="男" v-model="findSex" />男
          <input type="radio" name="find-sex" value="女" v-model="findSex" />女
          <input type="radio" name="find-sex" value="不限" v-model="findSex" />不限
          <div class="box box-radio"></div>
        </div>
        <!-- <div class="underline"></div> -->
      </div>

      <div class="btn-container">
        <input
          class="btn-login"
          :class="{'btn-login-touched':loginbtnTouched}"
          type="button"
          value="Get Started"
          @click="login"
        />
      </div>
    </form>

    <!--  登陆按钮-->
  </div>
</template>

<script type="text/ecmascript-6">
import getIOS from "../../lib/js/getIOS";
export default {
  name: "",
  data() {
    return {
      // checkbtnStr: "获取验证码",
      // checkbtnTouched: false,
      loginbtnTouched: false,
      userName: "",
      selfSex: "",
      findSex: "不限",
      imgURL: "src/lib/image/1.jpg"
    };
  },
  components: {},
  methods: {
    checkbtnTouchEnd() {
      if (this.checkbtnTouched == true) {
        console.log("has been touched");
        return;
      }
      this.checkbtnTouched = true;
      console.log("end");
      let start = 10;
      let clock = setInterval(() => {
        console.log(start);
        this.checkbtnStr = start + "s" + "重试";
        start = start - 1;
        if (start == 0) {
          clearInterval(clock);
          this.checkbtnStr = "获取验证码";
          this.checkbtnTouched = false;
        }
      }, 1000);
    },
    uploadImg() {
      this.$refs.userPic.click();
    },
    showImg() {
      let reader = new FileReader();

      reader.onload = e => {
        console.log(reader.result);
        console.log(this.$refs.userPicdisplay);
        this.imgURL = reader.result;
      };
      reader.readAsDataURL(this.$refs.userPic.files[0]);
    },
    login() {
      //检测输入信息是否有问题
      if (this.userName === "") {
        this.$toast("请输入用户名");
        return;
      }
      if (this.selfSex === "") {
        this.$toast("请输入性别");
        return;
      }
      if (this.findSex === "") {
        this.$toast("请输入匹配性别");
        return;
      }

      this.loginbtnTouched = true;
      // 弹出提示框确认信息
      let message =
        "昵称:" +
        this.userName +
        ";" +
        "性别:" +
        this.selfSex +
        ";" +
        "匹配:" +
        this.findSex;

      console.log(message);
      this.$messagebox({
        title: "Notice",
        message,
        showCancelButton: true
      })
        .then(action => {
          console.log(action);
          let userInfo = {
            userName: this.userName,
            selfSex: this.selfSex,
            findSex: this.findSex,
            userPic: this.imgURL
          };
          this.$store.commit("SetuserInfo", userInfo);
          this.$store.commit("Login");

          if (action === "confirm") {
            this.$router.push("/chat");
          }
          this.loginbtnTouched = true;
        })
        .catch(err => {});
    }
  },
  created() {
    console.log(this.$refs);
    this.$store.commit("HideHeader");
    this.$store.commit("ShowFooter");
  },

  mounted() {
    console.log(getIOS());
    if (getIOS() && this.$refs.userPic) {
      console.log("removed");
      this.$refs.userPic.removeAttribute("capture");
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  padding-top: 20%;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  .img-container {
    height: 100px;
    width: 100px;
    margin: 0 auto;
    img {
      border-radius: 3px;
    }
  }
  h3 {
    text-align: center;
  }
  .form-group {
    margin-top: 10%;

    .group {
      text-align: center;
      padding: 3%;
      .group-row {
        display: flex;
        align-items: center;
        .box {
          flex-grow: 1;
          width: 20%;
          height: 30px;
          line-height: 30px;
        }
        input[type="text"] {
          flex-grow: 1;
          text-align: center;
          font-size: 18px;

          &:placeholder-shown {
            text-align: center;
          }
          outline-style: none;
          border: 0px;
          width: 50%;
        }
        .box-radio {
          width: 10%;
        }
        label {
        }
        input[type="radio"] {
          margin-left: 5%;
        }
        // .btn-checkcode {
        //   -webkit-appearance: none;
        //   border: 0;
        //   outline: none;
        //   border-radius: 0;
        //   font-size: 10px;
        //   color: rgb(189, 158, 154);
        //   border: 1px solid rgb(245, 229, 227);
        //   box-shadow: 0.1px 0.1px 2px 1px #1ab188;
        //   transition: all 0.51s ease;
        // }
        // .btn-checkcode-touched {
        //   border-radius: 50px;
        //   box-shadow: 0.1px 0.1px 2px 3px #1ab188;
        // }
      }
      .underline {
        margin: 0 auto;
        width: 30%;
        border-bottom: 1px solid grey;
      }
    }
  }

  .btn-container {
    margin-top: 10%;
    text-align: center;
    $white: #ffffff;
    $bold: 600;
    $main: #1ab188;
    $main-dark: darken($main, 5%);
    .btn-login {
      border: 0;
      outline: none;
      border-radius: 3px;
      padding: 3%;
      font-size: 1rem;
      font-weight: $bold;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      background: $main;
      color: $white;
      transition: all.5s ease;
      -webkit-appearance: none;
    }
    .btn-login-touched {
      background: $main-dark;
    }
  }
}
</style>
