<template>
  <div class="container">
    <!-- <div class="clock" :style="{transform:`rotate(${angle}deg)`}"></div> -->
    <div class="circle">
      <svg width="300px" height="300px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path id="ring" fill="rgb(90,221,105)" ref="ring" />
        <circle cx="150" cy="150" r="90" fill="rgba(0,0,0,0.99)" />
      </svg>
      <div class="number">{{countdownTime}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Clock",
  props: {
    countdown: Number
  },
  data() {
    return {
      progress: 100,
      countdownTime: 0,
      anim: "",
      timer: ""
    };
  },
  computed: {},
  mounted() {
    this.countdownStart();
  },
  destroyed() {},
  methods: {
    countdownStart() {
      let that = this;
      this.countdownTime = this.$props.countdown;
      
      this.timer = setInterval(() => {
        if (this.countdownTime > 0) {
          this.countdownTime--;
        } else {
          clearInterval(this.timer);
        }
      }, 1000);

      this.anim = requestAnimationFrame(function loop() {
        that.drawRing(that.progress);
        if (that.progress > 0) {
          that.progress -= 100 / 60 / that.$props.countdown;
          that.anim = requestAnimationFrame(loop);
        } else {
          that.drawRing(0);
        }
      });
    },
    drawRing(progress) {
      var path = document.getElementById("ring");
      var r = 100;

      //将path平移到我们需要的坐标位置
      path.setAttribute("transform", "translate(" + 150 + "," + 150 + ")");

      // 计算当前的进度对应的角度值
      var degrees = progress * (360 / 100);

      // 计算当前角度对应的弧度值
      var rad = degrees * (Math.PI / 180);

      //极坐标转换成直角坐标
      var x = (Math.sin(rad) * r).toFixed(2);
      var y = -(Math.cos(rad) * r).toFixed(2);

      //大于180度时候画大角度弧，小于180度的画小角度弧，(deg > 180) ? 1 : 0
      var lenghty = window.Number(degrees > 180);

      //path 属性
      var descriptions = [
        "M",
        0,
        0,
        "v",
        -r,
        "A",
        r,
        r,
        0,
        lenghty,
        1,
        x,
        y,
        "z"
      ];

      // 给path 设置属性
      path.setAttribute("d", descriptions.join(" "));
    },
    countdownStop() {
      clearInterval(this.timer);
      cancelAnimationFrame(this.anim);
    }
  }
};
</script>
<style lang="scss" scoped>
// .clock{
//     width: 200px;
//     height: 200px;
//     border-radius: 50%;
//     border: 4px solid white;
// }

// .clock::after{
//     content: '.';
//     clip: round($number: 10)
// }
.container {
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
}

.circle {
  position: relative;
}

.number {
  width: 100px;
  height: 100px;
  position: absolute;
  margin-top: 50%;
  top: -50px;
  margin-left: 50%;
  left: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(90, 221, 105);
  font-size: 3rem;
}
</style>