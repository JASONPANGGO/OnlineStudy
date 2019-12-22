<template>
  <div>
    <VideoClipBackground :cover="0.5" />
    <div class="container">
      <div class="exams-list" v-if="!theme">
        <div v-for="(item, index) in subjects" :key="index" @click="enterExam(item)">
          <el-card class="card" :body-style="{ padding: '0px' }">
            <img src="http://placehold.it/400x200" class="image" />
            <div style="padding: 14px;text-align:center">
              <span>{{item}}</span>
            </div>
          </el-card>
        </div>
      </div>
      <div class="exams" v-if="theme">
        <VideoClipBackground :cover="0.8" />
        <div class="exam-container">
          <div class="timer">
            <Clock v-model="limitedTime" ref="clock" />
          </div>
          <div class="question-answer">
            <div class="question">{{this.question}}</div>
            <div class="answer">
              <el-button
                v-for="(item, index) in choices"
                :key="index"
                :style="{margin:0,marginTop:'10px',textAlign:'start',fontSize:'1.1rem'}"
                :type="item.type"
                @click="onClickChoice(index)"
              >
                <code>{{item.name}}</code>
              </el-button>
            </div>
          </div>
          <div class="set-button">
            <el-button @click="reback">返回</el-button>
            <el-button @click="nextQues">下一题</el-button>
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
        "JAVASCRIPT",
        "JAVA",
        "C++"
      ],
      theme: false,
      question:
        "已知a为不为空的数组，且变量b===a. 以下哪些方式可以清空数组, 使得a.length 与 b.length 都为 0; ",
      choices: [
        {
          name: '"b.len(0)"',
          type: "info  "
        },
        {
          name: "a=[]",
          type: "info  "
        },
        {
          name: "a.splice(0,a.length)",
          type: "info  "
        },
        {
          name: "a=a.slice(a.length)",
          type: "info "
        }
      ],
      buttonType: ["", "", "", ""],
      key: 2,
      answer: "",
      limitedTime: 15,
      statuse: false
    };
  },
  components: {
    VideoClipBackground,
    Clock
  },
  watch: {
    limitedTime: function(newQuestion) {
      if (newQuestion === 0) {
        // 显示答案
        this.onClickChoice(this.key);
      }
    }
  },
  methods: {
    reback() {
      this.theme = false;
    },
    nextQues() {
      this.$refs.clock.countdownStop();
      this.limitedTime = 15;
      this.$refs.clock.countdownStart();

      if (this.answer !== "") {
        this.choices[this.answer].type = "info ";
      }
      this.choices[this.key].type = "info ";
    },
    onClickChoice(index) {
      this.$refs.clock.countdownStop();

      this.answer = index;
      if (this.answer !== this.key) {
        // this.buttonType[index] = "danger";
        this.choices[index].type = "danger";
      }
      this.choices[this.key].type = "success";
    },
    enterExam() {
      //   this.$refs.clock.countdownStart();
      this.theme = true;
      this.$nextTick(() => {
        this.$refs.clock.countdownStart();
      });
    }
  }
};
</script>

<style scoped lang="scss">
$vh: 100vh;
$exam-height: 600px;
.container {
  position: fixed;
}
.exams-list {
  padding: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.3s all;
}
.card:hover {
  transform: translateY(-20px);
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
  .set-button {
    display: flex;
    .el-button {
      margin: 0;
      margin-top: 10px;
      text-align: start;
      background: none;
      color: white;
      font-size: 1.1rem;
      &:hover {
        color: rgb(84, 197, 250);
        border-color: rgb(84, 197, 250);
      }
    }
    justify-content: flex-end;
    flex-direction: column;
  }
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
