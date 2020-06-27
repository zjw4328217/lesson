<template>
  <div>
    <el-container>
      <el-aside :class="!isCollapse?'sideleft':'sidelittle'" style="background:#262e43;min-height:100vh;">
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    }
  },
  components: {
    vHead,
    vSidebar
  }
};
</script>

<style lang="scss" scoped>
.sideleft {
  width: 250px!important;
  display: block;
}
.sidelittle {
  // width: auto!important;
  display: none;

}
@media only screen and (max-width: 470px) {
  ::v-deep .el-main {
    padding:0!important;
  }
  .sideleft {
  width: 250px!important;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  display: block;
}
  // ::v-deep .el-aside {
  //   display: none;
  // }
}
</style>