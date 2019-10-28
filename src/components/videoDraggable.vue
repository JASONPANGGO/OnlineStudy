<template>
  <draggable
    @end="end"
    v-model="drag_videolist"
    v-bind="{group:'people',animation:150,ghostClass:'sortable-ghost',chosenClass:'chosenClass',scroll:true,scrollSensitivity:200}"
  >
    <transition-group>
      <div v-for="(item,index) in videolist" :key="item.key" class="video-list_item">
        <span>{{index+1}}. 视频名称</span>
        <el-input placeholder="请输入视频文件名" v-model="item.name"></el-input>
        <span>{{item.url}}</span>
        <div class="video-list_item_btn">
          <el-button type="text" @click="deleteItem(index)">删除</el-button>
          <el-upload type="text" action="11">上传视频</el-upload>
          <el-button type="text" @click="move(index,'up')" v-show="index!==0">上移</el-button>
          <el-button type="text" @click="move(index,'down')" v-show="index!==videolist.length-1">下移</el-button>
        </div>
      </div>
    </transition-group>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
export default {
  data() {
    return { state1: "", drag_videolist: [] };
  },

  created() {
    this.drag_videolist = this.videolist;
  },
  props: {
    /*
      videolist= {
        url
        name
        key
      }
    */

    videolist: {
      type: Array
    }
  },
  model: {
    event: "parent-event",
    prop: "videolist"
  },
  components: {
    draggable
  },
  methods: {
    deleteItem(index) {
      let list = this.videolist
        .slice(0, index)
        .concat(this.videolist.slice(index + 1));
      this.$emit("parent-event", list);
    },
    move(index, type) {
      let item = this.videolist[index];
      let newList = this.videolist
        .slice(0, index)
        .concat(this.videolist.slice(index + 1));
      if (type === "up") {
        newList.splice(index - 1, 0, item);
      } else {
        newList.splice(index + 1, 0, item);
      }
      this.$emit("parent-event", newList);
    },

    end(evt) {
      let index = evt.oldIndex;
      let newIndex = evt.newIndex;
      let item = this.videolist[index];
      let newList = this.videolist
        .slice(0, index)
        .concat(this.videolist.slice(index + 1));
      newList.splice(newIndex, 0, item);
      this.$emit("parent-event", newList);
    }
  }
};
</script>
<style lang="scss" scoped>
.video-list_item {
  display: flex;
  flex-direction: row;
  width: calc(100% - 40px);
  margin: 10px 0;
  padding: 0 10px;
  background: rgb(80, 80, 80);
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgb(46, 46, 46);
  color: white;
  align-items: center;
  border: none;
  .video-list_item_btn {
    display: flex;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    .el-button {
      color: white;
      margin: 0 10px;
    }
    .el-upload {
      margin: 0 10px;
      width: 50px;
    }
  }

  .el-input {
    margin-left: 10px;
    margin-right: 50px;
    width: 200px;
  }
}
</style>