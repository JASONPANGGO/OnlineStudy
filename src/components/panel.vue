<template>
  <div class="panel-outer">
    <el-col class="panel-btn">
      <el-button
        type="text"
        plain
        native-type="button"
        @click="btnEvent(btnList[0])"
        ref="firstBtn"
      >{{btnList[0]}}</el-button>
      <el-button
        v-for="(item,index) in btnList"
        :key="item"
        type="text"
        plain
        native-type="button"
        @click="btnEvent(item)"
        v-show="index!==0"
      >{{item}}</el-button>
    </el-col>

    <slot></slot>
  </div>
</template>
<script>
export default {
  methods: {
    btnEvent(e) {
      window.console.log(e);
      this.$emit("parent-event", e);
    }
  },
  props: {
    panelType: {
      default: "videoList",
      type: String
    },
    btnList: {
      default: null,
      type: Array
    }
  },
  model: {
    event: "parent-event",
    prop: "msg"
  },
  mounted() {
    let firstBtn = this.$refs.firstBtn.$slots.default[0].text;
    window.console.log(firstBtn);
    this.$emit("parent-event", firstBtn);
  }
};
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