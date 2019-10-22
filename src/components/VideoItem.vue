<template>
  <div id="video-item" @mouseenter="hover('1')" @mouseleave="hover('0')">
    <img :src="imgSrc" alt />
    <div class="info">
      <!-- <div class="title">{{title}}</div> -->
      <div class="title">{{title}}</div>
      <i
        class="el-icon-video-play play"
        @mouseenter="hover('1')"
        :style="{opacity:togglePlayButton}"
      ></i>
      <div class="author-and-star">
        <div class="author">{{author}}</div>
        <div class="star">
          <i class="el-icon-star-on"></i>
          {{star}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoItem",
  props: {
    id: String, //课程ID
    title: String,
    author: String,
    imgSrc: String,
    star: String
  },
  data() {
    return {
      //   imgSrc: "http://placehold.it/230x150",
      //   title: "JavaScript 进阶教程",
      //   author: "JasonPang",
      togglePlayButton: "0"
    };
  },
  computed: {
    //   title(){
    //       return this.$props.title
    //   }
  },
  methods: {
    hover(e, v) {
      this.togglePlayButton = e;
    }
  }
};
</script>

<style scoped>
#video-item {
  width: 270px;
  height: 180px;
  position: relative;
  border-radius: 10px;
}
img {
  width: 100%;
  border-radius: 10px;
}
.info {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 156px;
  padding: 10px;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s all;
  border-radius: 10px;
  cursor: pointer;
}
.info:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
.title {
  font-size: 1rem;
  font-weight: bold;
  color: white;
}

.play {
  align-self: center;
  font-size: 3rem;
  color: white;
  opacity: 0;
  transition: 0.3s all;
}
.play:hover {
  opacity: 1;
  color: rgb(0, 219, 110);
}
.author-and-star {
  color: white;
  display: flex;
  justify-content: space-between;
}
</style>