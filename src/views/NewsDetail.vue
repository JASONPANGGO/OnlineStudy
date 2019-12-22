<template>
  <div class="container">
    <el-container class="main-container">
      <div class="content content-box-shadow" style="width:70%">
        <el-header>
          <h1>{{dailyNews.title}}</h1>
          <el-row :gutter="50">
            <el-col :span="3" :offset="15">
              <div class="grid-content bg-purple">
                作者：
                <br />
                {{dailyNews.userName}}
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                发布时间：
                <br />
                {{dailyNews.date}}
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main class="content">
          <mavon-editor
            style="width:100%;height:700px;z-index:0;margin:0;"
            :editable="false"
            :toolbarsFlag="false"
            :defaultOpen="'preview'"
            :subfield="false"
            :previewBackground="'#afafaf'"
            :value="dailyNews.content"
          ></mavon-editor>
        </el-main>
      </div>
      <div class="sidebar">
        <div class="author-container">
          <div class="author">
            <div class="personal">
              <img class="avatar" :src="author.avatarUrl" alt />
              <div class="info">
                <div class="name">{{ author.name }}</div>
                <div class="job">
                  <el-button type="info" icon="el-icon-star-on" circle></el-button>
                </div>
              </div>
            </div>
            <div class="more">
              <div class="item">
                <svg
                  t="1575465652913"
                  class="icon"
                  viewBox="0 0 1097 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3472"
                  width="20"
                  height="20"
                >
                  <path
                    d="M338.857143 512q-92.571429 2.857143-151.428572 73.142857H110.857143q-46.857143 0-78.857143-23.142857T0 494.285714q0-201.714286 70.857143-201.714285 3.428571 0 24.857143 12t55.714285 24.285714T219.428571 341.142857q38.285714 0 76-13.142857-2.857143 21.142857-2.857142 37.714286 0 79.428571 46.285714 146.285714z m612 364q0 68.571429-41.714286 108.285714t-110.857143 39.714286H298.857143q-69.142857 0-110.857143-39.714286T146.285714 876q0-30.285714 2-59.142857t8-62.285714T171.428571 692.571429t24.571429-55.714286 35.428571-46.285714 48.857143-30.571429T344 548.571429q5.714286 0 24.571429 12.285714t41.714285 27.428571 61.142857 27.428572 77.142858 12.285714 77.142857-12.285714 61.142857-27.428572 41.714286-27.428571 24.571428-12.285714q34.857143 0 63.714286 11.428571t48.857143 30.571429 35.428571 46.285714 24.571429 55.714286 15.142857 62 8 62.285714 2 59.142857zM365.714286 146.285714q0 60.571429-42.857143 103.428572t-103.428572 42.857143-103.428571-42.857143-42.857143-103.428572 42.857143-103.428571T219.428571 0t103.428572 42.857143 42.857143 103.428571z m402.285714 219.428572q0 90.857143-64.285714 155.142857T548.571429 585.142857 393.428571 520.857143 329.142857 365.714286t64.285714-155.142857T548.571429 146.285714t155.142857 64.285715T768 365.714286z m329.142857 128.571428q0 44.571429-32 67.714286t-78.857143 23.142857h-76.571428q-58.857143-70.285714-151.428572-73.142857 46.285714-66.857143 46.285715-146.285714 0-16.571429-2.857143-37.714286 37.714286 13.142857 76 13.142857 33.714286 0 68-12.285714t55.714285-24.285714 24.857143-12q70.857143 0 70.857143 201.714285z m-73.142857-348q0 60.571429-42.857143 103.428572t-103.428571 42.857143-103.428572-42.857143-42.857143-103.428572 42.857143-103.428571 103.428572-42.857143 103.428571 42.857143 42.857143 103.428571z"
                    p-id="3473"
                    fill="#bfbfbf"
                  />
                </svg>
                关注者
                {{ author.followers }}
              </div>
            </div>
          </div>
        </div>
        <div class="recommand-container">
          <h4>相关推荐</h4>
          <div class="list">
            <router-link
              v-for="(item, index) in recommand"
              :key="index"
              :to="'/newsdetail/'+item.id"
            >
              <div class="item">
                <div class="title">{{ item.title }}</div>
                <div class="info">
                  <svg
                    t="1575464387963"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2566"
                    width="15"
                    height="17"
                    style="margin-top:3px"
                  >
                    <path
                      d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253"
                      p-id="2567"
                      fill="#bfbfbf"
                    />
                    <path
                      d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819"
                      p-id="2568"
                      fill="#bfbfbf"
                    />
                  </svg>
                  <div class="likes">{{ item.likes }}</div>
                  <svg
                    t="1575465652913"
                    class="icon"
                    viewBox="0 0 1097 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3472"
                    width="15"
                    height="25"
                  >
                    <path
                      d="M338.857143 512q-92.571429 2.857143-151.428572 73.142857H110.857143q-46.857143 0-78.857143-23.142857T0 494.285714q0-201.714286 70.857143-201.714285 3.428571 0 24.857143 12t55.714285 24.285714T219.428571 341.142857q38.285714 0 76-13.142857-2.857143 21.142857-2.857142 37.714286 0 79.428571 46.285714 146.285714z m612 364q0 68.571429-41.714286 108.285714t-110.857143 39.714286H298.857143q-69.142857 0-110.857143-39.714286T146.285714 876q0-30.285714 2-59.142857t8-62.285714T171.428571 692.571429t24.571429-55.714286 35.428571-46.285714 48.857143-30.571429T344 548.571429q5.714286 0 24.571429 12.285714t41.714285 27.428571 61.142857 27.428572 77.142858 12.285714 77.142857-12.285714 61.142857-27.428572 41.714286-27.428571 24.571428-12.285714q34.857143 0 63.714286 11.428571t48.857143 30.571429 35.428571 46.285714 24.571429 55.714286 15.142857 62 8 62.285714 2 59.142857zM365.714286 146.285714q0 60.571429-42.857143 103.428572t-103.428572 42.857143-103.428571-42.857143-42.857143-103.428572 42.857143-103.428571T219.428571 0t103.428572 42.857143 42.857143 103.428571z m402.285714 219.428572q0 90.857143-64.285714 155.142857T548.571429 585.142857 393.428571 520.857143 329.142857 365.714286t64.285714-155.142857T548.571429 146.285714t155.142857 64.285715T768 365.714286z m329.142857 128.571428q0 44.571429-32 67.714286t-78.857143 23.142857h-76.571428q-58.857143-70.285714-151.428572-73.142857 46.285714-66.857143 46.285715-146.285714 0-16.571429-2.857143-37.714286 37.714286 13.142857 76 13.142857 33.714286 0 68-12.285714t55.714285-24.285714 24.857143-12q70.857143 0 70.857143 201.714285z m-73.142857-348q0 60.571429-42.857143 103.428572t-103.428571 42.857143-103.428572-42.857143-42.857143-103.428572 42.857143-103.428571 103.428572-42.857143 103.428571 42.857143 42.857143 103.428571z"
                      p-id="3473"
                      fill="#bfbfbf"
                    />
                  </svg>
                  <div class="comments">{{ item.comments }}</div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "newsdetail",
  props: ["id", "userId"],
  data() {
    return {
      dailyNews: {},
      news: {
        title: "",
        content: ""
      },
      author: {
        name: "Jason Pang",
        avatarUrl: "http://www.gdutrex.top:8080/userimage/men.jpg",

        likes: 5648,
        followers: 354
      },
      recommand: [
        {
          id: "i345hi34u5ui30",
          title: "lorem ipsum awdwdw",
          likes: 23,
          comments: 8
        },
        {
          id: "i345hi34u5ui30",
          title: "lorem ipsum awdwdw",
          likes: 23,
          comments: 8
        },
        {
          id: "i345hi34u5ui30",
          title: "lorem ipsum awdwdw",
          likes: 23,
          comments: 8
        }
      ]
    };
  },
  async mounted() {
    // 获取news
    if (typeof this.id === "undefined" || typeof this.userId === "undefined") {
      this.$router.push("/");
      return;
    }
    var dailyNews = await this.$fetchGet("/newsDetail", {
      newsId: this.id,
      userId: this.userId
    }).then(res => res);

    if (dailyNews.passage.length > 0) {
      this.dailyNews = dailyNews.passage[0];
      this.author = dailyNews.postUser;
    } else {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
// @import url("../css/markdown.css");
h1 {
  font-size: 2em;
}
.container {
  padding: 150px;
  padding-left: 220px;
  color: white;
}
.main-container {
  width: 100%;
  display: flex;
  .content-box-shadow {
    box-shadow: 10px 15px 10px rgb(82, 82, 82);
    border-radius: 20px;
  }
  .markdown-body-box-shadow {
    box-shadow: 0 -15px 200px rgba(41, 41, 41, 0.301) inset;
  }
  .content {
    padding: 0;
    width: 100%;
    margin-top: 1em;
    color: #444444;

    background: #afafaf;
  }
  .sidebar {
    width: 30%;

    .author-container {
      width: 100%;
      height: 230px;
      .author {
        margin-top: 120px;
        margin-left: 100px;
        width: 250px;
        height: 180px;
        background-color: #232323;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 3px 3px #444444;
        .personal {
          width: 100%;
          height: 100px;
          display: flex;
          align-items: center;
        }
        .avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin-left: 20px;
        }
        .info {
          width: 130px;
          height: 100px;
          margin-left: 20px;
        }
        .name {
          font-size: 20px;
          margin-top: 25px;
          font-weight: bold;
        }
        .job {
          margin-top: 10px;
          color: #eeeeee;
        }
        .more {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          .item {
            margin-top: 10px;
            height: 30px;
            line-height: 30px;
            margin-left: 20px;
          }
        }
      }
    }
    .recommand-container {
      margin-left: 100px;
      .list {
        width: 250px;
        .item {
          height: 50px;
          transition: 0.3s all;
          padding-top: 5px;
          padding-left: 5px;
          border-radius: 5px;
          &:hover {
            background-color: #222222;
            color: white;
          }
          .title {
            width: 100%;
          }
          .info {
            width: 100%;
            display: flex;
            .likes {
              line-height: 28px;
              margin-left: 5px;
              margin-right: 10px;
            }
            .comments {
              line-height: 28px;
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
