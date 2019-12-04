<template>
  <div class="container">
    <el-container class="main-container">
      <el-header>
        <h2>title</h2>
        <el-row :gutter="50">
          <el-col :span="3" :offset="12">
            <div class="grid-content bg-purple">author</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">2019.01</div>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nulla sequi obcaecati nihil explicabo iure adipisci, porro a ab expedita. Aut culpa, error impedit modi inventore consectetur maiores dolor?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nulla sequi obcaecati nihil explicabo iure adipisci, porro a ab expedita. Aut culpa, error impedit modi inventore consectetur maiores dolor?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nulla sequi obcaecati nihil explicabo iure adipisci, porro a ab expedita. Aut culpa, error impedit modi inventore consectetur maiores dolor?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nulla sequi obcaecati nihil explicabo iure adipisci, porro a ab expedita. Aut culpa, error impedit modi inventore consectetur maiores dolor?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nulla sequi obcaecati nihil explicabo iure adipisci, porro a ab expedita. Aut culpa, error impedit modi inventore consectetur maiores dolor?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nulla sequi obcaecati nihil explicabo iure adipisci, porro a ab expedita. Aut culpa, error impedit modi inventore consectetur maiores dolor?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nulla sequi obcaecati nihil explicabo iure adipisci, porro a ab expedita. Aut culpa, error impedit modi inventore consectetur maiores dolor?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nulla sequi obcaecati nihil explicabo iure adipisci, porro a ab expedita. Aut culpa, error impedit modi inventore consectetur maiores dolor?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel nulla sequi obcaecati nihil explicabo iure adipisci, porro a ab expedita. Aut culpa, error impedit modi inventore consectetur maiores dolor?
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "newsdetail",
  props: ['id'],
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 150px;
  padding-left: 220px;
  color: white;
}
.main-container {
  width: 100%;
  .content {
    width: 70%;
    margin-top: 1em;
  }
}
</style>