<template>
  <div id="login">
    <video
      src="../assets/Video_1.mp4"
      autoplay
      loop
      muted
      class="video-clip"
    ></video>
    <div class="video-marsk">
      <div class="video-marsk-font">
        <i class="el-icon-s-promotion"></i>
        <span>OnlineStudy</span>
        <br />
        <span>There is no royal road to learning</span>
      </div>
    </div>
    <div class="login-layer">
      <transition name="fade">
        <el-form
          v-show="model === 'login'"
          :model="loginForm"
          :rules="loginRules"
          ref="loginForm"
          label-width="100px"
          class="login-layer-form"
        >
          <el-form-item>
            <span>登陆</span>
          </el-form-item>
          <el-form-item label="账号" prop="userName">
            <el-input
              v-model="loginForm.userName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="loginForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')"
              >登陆</el-button
            >
            <el-button @click="registerChange('register')">注册</el-button>
          </el-form-item>
        </el-form>
      </transition>
      <transition name="fade">
        <el-form
          v-show="model !== 'login'"
          :model="registerForm"
          status-icon
          :rules="registerRules"
          ref="registerRules"
          label-width="100px"
          class="login-layer-form"
        >
          <el-button
            icon="el-icon-arrow-left"
            type="text"
            @click="registerChange('login')"
            class="back-login"
            >返回登陆</el-button
          >

          <el-form-item>
            <span>注册</span>
          </el-form-item>

          <el-form-item label="账号" prop="userName">
            <el-input
              v-model="registerForm.userName"
              placeholder="登录时使用的账户名"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              placeholder="8位以上"
              type="password"
              v-model="registerForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              placeholder="再次输入密码"
              v-model="registerForm.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="出生日期" prop="birthday">
            <el-date-picker
              v-model="registerForm.birthday"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="registerForm.gender">
              <el-radio label="men">men</el-radio>
              <el-radio label="women">women</el-radio>
              <el-radio label="secret">Secret</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var inputRuler = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("输入不能为空"));
      } else {
        return callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("输入不能为空"));
      } else if (value.length < 9) {
        return callback(new Error("密码长度至少为8位"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      model: "login",
      registerForm: {
        userName: "",
        pass: "",
        checkPass: "",
        birthday: "",
        gender: "secret"
      },
      registerRules: {
        userName: [{ required: true, validator: inputRuler, trigger: "blur" }],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ],
        birthday: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ]
      },
      loginForm: {
        userName: "",
        pass: ""
      },
      loginRules: {
        pass: [{ validator: inputRuler, trigger: "blur" }],
        userName: [{ validator: inputRuler, trigger: "blur" }]
      }
    };
  },
  components: {},
  methods: {
    async submitForm(formName) {
      // 登录事件
      this.$refs[formName].validate(vaild => {
        if (vaild) {
          this.$fetchPost("/user/login", {
            password: this.loginForm.pass,
            username: this.loginForm.userName
          }).then(data => {
            window.console.log(data);
            let { code } = data;
            if (code === 100) {
              localStorage.setItem("loginKey", "success");
              this.$router.push("/");
            } else {
              this.$notify({
                title: "提示",
                message:
                  ("i", { style: "color: teal" }, "账号或密码错误，请重新输入")
              });
            }
          });
        } else {
          return false;
        }
      });
    },
    registerChange(model) {
      this.model = model;
    }
  }
};
</script>
<style lang="scss" scoped>
#login {
  .video-clip {
    width: calc(100%);
    position: absolute;
  }
  .video-marsk {
    width: calc(100%);
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: background-color 2s;
    position: absolute;
    color: white;
    font-size: 3em;
    i {
      font-size: 3em;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      transition: background-color 2s;
    }
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .video-marsk-font {
      margin-left: 100px;
      line-height: 3em;
    }
  }
  .login-layer {
    position: absolute;
    width: 500px;
    min-height: 500px;
    height: 500px;
    top: 100px;
    right: 60px;
    background: rgba(255, 255, 255, 0.74);
    border-radius: 20px;
    .fade-enter-active {
      animation: bounce-in 2s;
    }
    .fade-leave-active {
      animation: bounce-in 2s reverse;
    }
    @keyframes bounce-in {
      0% {
        opacity: 0;
        transform: translateX(200px);
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .login-layer-form {
      span {
        color: rgb(53, 53, 53);
        font-size: 2em;
      }
      .back-login {
        width: 10em;
        margin: 20px 0;
        color: rgb(65, 65, 65);
      }
      transition: display 1s;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding-right: 60px;
      box-sizing: border-box;
      justify-content: center;
      position: absolute;
    }
  }
  position: fixed;
  z-index: 4;
  width: 100%;
  height: 100%;
  background: black;
}
</style>
