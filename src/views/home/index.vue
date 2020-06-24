<template>
  <div>
    <el-container>
        <el-aside width="250px" style="background:#262e43;height:100vh;">
            <v-sidebar></v-sidebar>
        </el-aside>
        <el-container>
            <el-header style="padding:0;">
                <v-head></v-head>
            </el-header>
            <el-main style="background:rgba(245,245,245,1); position:relative;padding:0 20px;">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import vHead from "./Header.vue";
import vSidebar from "./Sidebar.vue";
export default {
  data() {
    return {};
  },
  components: {
    vHead,
    vSidebar
  }
};
</script>

<style lang="scss" scoped>

</style>