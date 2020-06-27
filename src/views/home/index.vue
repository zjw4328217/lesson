<template>
  <div>
    <el-container>
      <div v-if="device==='mobile'&& sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
      <el-aside v-if="device==='mobile' && !sidebar.opened" :class="!sidebar.opened ?'sidelittle':'sideleft'" style="background:#262e43;min-height:100vh;">
        <v-sidebar></v-sidebar>
      </el-aside>
      <el-aside v-else :class="!sidebar.opened ?'sidelittle1':'sideleft'" style="background:#262e43;min-height:100vh;">
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
import { mapGetters ,mapState} from "vuex";
import ResizeMixin from './mixin/ResizeHandler'
export default {
  data() {
    return {};
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device
    }),
    // ...mapGetters(["sidebar"]),
    // isCollapse() {
    //   return !this.sidebar.opened;
    // },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  mounted()  {
    console.log(this.device==='mobile' && !this.sidebar.opened);
    
  },
  components: {
    vHead,
    vSidebar
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  },
};
</script>

<style lang="scss" scoped>
 .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
.sideleft {
  width: 250px!important;
  display: block;
}
.sidelittle {
  // width: auto!important;
  display: none;

}
.sidelittle1 {
  width: auto!important;

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