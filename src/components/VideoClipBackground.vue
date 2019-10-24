<template>
    <div>
        <video src="../assets/Video_1.mp4" autoplay loop muted></video>
        <div class="cover" :style="{backgroundColor:`rgba(0,0,0,${this.cover})`}"></div>
    </div>
</template>
<script>
export default {
    name:'VideoClipBackground',
    props:{
        cover: Number
    }
}
</script>

<style scoped>
.cover{
    z-index: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;

}
video {
    z-index: 0;
  position: fixed;
  margin-left: 60px;
  width: 1920px;
   user-select: none;   
  /* height: 100vh; */
}
</style>