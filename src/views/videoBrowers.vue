<template>
  <div class="video-browers-outer">
    <div v-for="item in browseList" :key="item.title" class="browse-list">
      <div class="list-title">
        <span>{{item.title}}</span>
      </div>
      <div class="list-btn-layer">
        <router-link
          :to="'classList'"
          class="list-btn-item"
          v-for="brower in item.btnList"
          :key="brower.name"
        >
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.8wmLG38KPhtC3Vxo2z8ZMwHaE7&pid=Api&rs=1"
            class="list-btn-img"
          />
          <div class="list-btn-text">javascript</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      browseList: [
        {
          title: "前端",
          btnList: [
            {
              name: "javascript",
              img: "src",
              classId: "id2"
            },
            {
              name: "css",
              img: "src",
              classId: "id1"
            }
          ]
        },
        {
          title: "后台",
          btnList: [
            {
              name: "javascript",
              img: "src",
              classId: "id2"
            },
            {
              name: "css",
              img: "src",
              classId: "id1"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.browse-list {
  border-radius: 10px;
  margin: 10px 0;
}
.video-browers-outer {
  .list-title {
    span {
      padding-left: 20px;
    }
    font-size: 30px;
    font-weight: 100;
    background: #303030;
    border-bottom: 1px solid rgb(255, 255, 255);
    padding: 20px 0;
  }
  .list-btn-layer {
    &:hover {
      transition: background 2s, opacity 1s;

      background: #575757;
      opacity: 1;
    }
    transition: background 2s, opacity 1s;
    opacity: 0.5;
    .list-btn-item {
      color: white;
      &:hover {
        transition: color 1s;
        text-decoration: underline;
      }

      .list-btn-img {
        width: 40px;
        height: 40px;
      }
      .list-btn-text {
        margin-left: 10px;
      }

      margin: 5px 10px;
      width: 150px;
      align-items: center;
      display: flex;
    }
    font-weight: 100;
    background: #303030;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px 0;
    width: 100%;
  }
  position: absolute;
  top: 60px;
  width: 80%;
  left: 0;
  color: white;
  right: 0;
  margin: auto;
}
</style>