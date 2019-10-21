<template>
  <div class="panel-outer">
    <el-col class="panel-btn">
      <el-button type="text" plain native-type="button">课程教程</el-button>
      <el-button type="text" plain native-type="button">课程简介</el-button>
      <el-button type="text" plain native-type="button">课程评价</el-button>
    </el-col>
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped  lang="scss">
.panel-outer {
  width: 100%;
  .panel-btn {
    border: 1px solid #4d4d4d;
    padding-left: 30px;
    .el-button {
      color: white;
      margin: 0 30px;
      outline: none;
      background: none;
      border: 0;
      &:active,
      &:focus,
      &:hover {
        background: none;
        outline: none;
        border: 0;
      }
    }
  }
}
</style>