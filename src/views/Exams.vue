<template>
  <div class="container">
    <div class="exams-list" v-if="!theme">
      <el-card class="card" :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <div class="exams" v-if="theme">
      <VideoClipBackground :cover="0.8" />
      <div class="exam-container">
        <div class="timer">
          <Clock :countdown="limitedTime" ref="clock" />
        </div>
        <div class="question-answer">
          <div class="question">{{this.question}}</div>
          <div class="answer">
            <el-button
              v-for="(item, index) in choices"
              :key="index"
              style="margin:0;margin-top:10px;text-align:start;font-size:1.1rem;"
              :type="buttonType[index]"
              @click="onClickChoice(index)"
            >
              <code>{{item}}</code>
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoClipBackground from "../components/VideoClipBackground";
import Clock from "../components/Clock";
export default {
  data() {
    return {
      subjects: [
        "FRONTEND",
        "BACKEND",
        "ALGORITHM",
        "DESIGN",
        "JAVASCRIPT",
        "JAVA",
        "C++"
      ],
      theme: "",
      question:
        "已知a为不为空的数组，且变量b===a. 以下哪些方式可以清空数组, 使得a.length 与 b.length 都为 0; ",
      choices: [
        "b.len(0)",
        "a=[]",
        "a.splice(0,a.length)",
        "a=a.slice(a.length)"
      ],
      buttonType: ["", "", "", ""],
      key: 2,
      answer: "",
      limitedTime: 15
    };
  },
  components: {
    VideoClipBackground,
    Clock
  },
  methods: {
    onClickChoice(index) {
      this.$refs.clock.countdownStop();
      if (this.answer === "") {
        this.answer = index;
        if (this.answer !== this.key) {
          this.buttonType.splice(index, 1, "danger");
        }
        this.buttonType.splice(this.key, 1, "success");
      }
    }
  }
};
</script>

<style scoped lang="scss">
$vh: 100vh;
$exam-height: 600px;

.exams-list {
    padding: 100px;
    display: flex;
    flex-wrap: wrap;
}



.exams {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.exam-container {
  position: absolute;
  width: 1000px;
  height: 600px;
  display: flex;
  justify-content: space-between;
  margin-left: 50%;
  left: -500px;
  vertical-align: center;
  top: calc(50vh - 300px);

  .timer {
    flex: 1;
    background-color: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }
  .question-answer {
    flex: 2;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .question {
      font-size: 1.2rem;
      letter-spacing: 2px;
      color: white;
      width: 80%;
      margin-bottom: 100px;
    }
    .answer {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
  }
}
</style>
