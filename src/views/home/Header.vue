<template>
  <div class="content-one">
    <!-- <div class="left">{{title}}</div> -->
    <div class="left">

    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    
    <el-breadcrumb style="height:30px;line-height:25px;" separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item class="title-light">{{title}}</el-breadcrumb-item>
    </el-breadcrumb>
    </div>
    <div class="right">
      <img src="~@/assets/logo.png" />
      <span></span>
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      title: "系统首页",
      titleParent:''
    };
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  components:{
    Hamburger
  },
  mounted() {
    // this.title = this.$route
    console.log(this.$router.history.current);
    this.title =this.$router.history.current.meta.title;
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  },
};
</script>

<style lang="scss" scoped>
.content-one {
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  align-items: center;
  padding-left: 10px;
}
.left {
  // width: 100px;
  display: flex;
  height: 18px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: rgba(51, 51, 51, 1);
  line-height: 18px;
}
.right {
    margin-right: 38px;
    width: 35px;
    height: 35px;
    img {
        width: 100%;
        margin-right: 5px;
    }
    span {
        width: 5px;
        height: 5px;
        border-top: 5px solid #999;
        border-right: 5px transparent solid;;
        border-left: 5px transparent solid;;
        border-bottom: 5px transparent solid;;
    }
}
::v-deep .title-light {
  .el-breadcrumb__inner {
    color:#257AF6;
  }
}
.hamburger-container {
    // line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
</style>