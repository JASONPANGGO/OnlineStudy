<template>
  <div class="tagOuter">
    <el-tag
      :key="tag"
      v-for="tag in interests"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
      class="tag"
      >{{ tag }}</el-tag
    >
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    ></el-input>
    <el-button
      v-else
      class="button-new-tag"
      size="small"
      @click="showInput"
      v-show="interests.length < 3"
      >+ New Tag</el-button
    >
  </div>
</template>
<script>
export default {
  mounted() {
    window.console.log(this.interests1, this.interests);
  },
  props: {
    interests: {
      type: Array
    }
  },
  data() {
    return {
      inputValue: "",
      inputVisible: false
    };
  },
  model: {
    event: "parent-event",
    prop: "interests"
  },
  methods: {
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleClose(tag) {
      let index = this.interests.indexOf(tag);
      let data = [];
      if (index === 0) {
        data = this.interests.slice(1);
      } else if (index === this.interests.length - 1) {
        data = this.interests.slice(0, index);
      } else {
        data = [
          ...this.interests.slice(0, index),
          ...this.interests.slice(index + 1)
        ];
      }
      this.$emit("parent-event", data);
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        let data = [...this.interests];
        data.push(inputValue);
        this.$emit("parent-event", data);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.tagOuter {
  width: 400px;
}
.tag {
  margin: 0 5px;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
