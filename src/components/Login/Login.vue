<template>
  <div class="login-container">
    <!-- 图标 -->
    <div class="img-container">
      <img src="src/lib/image/theme.jpg" height="100%" width="100%" />
    </div>
    <h3>Hey Chat!</h3>
    <!-- 输入框内容 -->

    <form class="form-group">
      <div class="group">
        <div class="group-row">
          <div class="box"></div>
          <input type="text" required placeholder="请输入手机号" />
          <input
            type="button"
            class="box btn-checkcode"
            :class="{'btn-checkcode-touched':checkbtnTouched}"
            @touchend="checkbtnTouchEnd"
            :value="checkbtnStr"
          />
        </div>
        <div class="underline"></div>
      </div>

      <div class="group">
        <div class="group-row">
          <div class="box"></div>
          <input type="text" required placeholder="验证码" />
          <div class="box"></div>
        </div>
        <div class="underline"></div>
      </div>

      <div class="btn-container">
        <input
          class="btn-login"
          :class="{'btn-login-touched':loginbtnTouched}"
          type="button"
          value="Get Started"
          @touchend="login"
        />
      </div>
    </form>

    <!--  登陆按钮-->
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
      checkbtnStr: "获取验证码",
      checkbtnTouched: false,
      loginbtnTouched: false
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
    login() {
      this.loginbtnTouched = true;
      setTimeout(() => {
        this.loginbtnTouched = false;
        console.log(this.$router);
        this.$router.push("/chat");
      }, 2000);
    }
  },
  created() {
    this.$store.commit("HideHeader");
    this.$store.commit("ShowFooter");
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
    height: 80px;
    width: 80px;
    margin: 0 auto;
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
        input {
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
        .btn-checkcode {
          -webkit-appearance: none;
          border: 0;
          outline: none;
          border-radius: 0;
          font-size: 10px;
          color: rgb(189, 158, 154);
          border: 1px solid rgb(245, 229, 227);
          box-shadow: 0.1px 0.1px 2px 1px #1ab188;
          transition: all 0.51s ease;
        }
        .btn-checkcode-touched {
          border-radius: 50px;
          box-shadow: 0.1px 0.1px 2px 3px #1ab188;
        }
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
