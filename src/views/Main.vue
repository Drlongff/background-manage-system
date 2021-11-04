<template>
  <div>
    <el-container style="height: 100%">
      <el-aside width="auto"><Aside /></el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "../components/Aside";
import Header from "../components/Header";
export default {
  name: "Main",
  components: { Aside, Header },
};
</script>

<style scoped>
.el-header {
  background-color: #2c3e50;
  color: #333;
}

.el-main {
  padding-top: 0;
}
</style>