<template>
  <div>
    <div class="logo" v-show="!isCollapse">
      <img src="~@/assets/logo@2x.png" alt />
    </div>
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#262e43"
        text-color="#ffffff"
        router
        :unique-opened='true'
        style="border:0;"
        :default-active='index'
        :collapse="isCollapse"
      >
        <el-menu-item index="home">
          <!-- <template slot="title"> -->
            <img class="iconImg" src="~@/assets/index@2x.png" alt />
            <span class="sideTitle" slot="title">系统首页</span>
          <!-- </template> -->
        </el-menu-item>
        <el-submenu index="course">
          <template slot="title">
            <img class="iconImg" src="~@/assets/findlesson@2x.png" alt />
            <span class="sideTitle">课程中心</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="findOrder">查询下单</el-menu-item>
            <el-menu-item index="course-order">批量下单</el-menu-item>
            <el-menu-item index="course-list">订单列表</el-menu-item>
            <el-menu-item index="course-task">批量结果</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="agent">
          <template slot="title">
            <img class="iconImg" src="~@/assets/manage@2x.png" alt />
            <span class="sideTitle">代理管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="agent-add">新增代理</el-menu-item>
            <el-menu-item index="agent-list">我的代理</el-menu-item>
            <el-menu-item index="agent-pay">充值处理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="flow">
          <template slot="title">
            <img class="iconImg" src="~@/assets/trade.png" alt />
            <span slot="title">流水管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="user-pay">订单付款</el-menu-item>
            <el-menu-item index="user-flow">财务流水</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="complaints-add">
          <!-- <template slot="title"> -->
            <img class="iconImg" src="~@/assets/fill@2x.png" alt />
            <span slot="title">发起工单</span>
          <!-- </template> -->
        </el-menu-item>
        <el-menu-item index="help">
          <!-- <template> -->
            <img class="iconImg" src="~@/assets/help@2x.png" alt />
            <span slot="title">使用帮助</span>
          <!-- </template> -->
        </el-menu-item>
      </el-menu>
  </div>
</template>

<script>
import { mapGetters,mapState} from 'vuex';
export default {
  data() {
    return {
      index: '1'
    };
  },
  computed:{
    ...mapState({
      device: state => state.app.device
    }),
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      this.index=keyPath[0];
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  width: 248px;
  height: 100px;
  padding-top: 30px;
  padding-left: 45px;
  box-sizing: border-box;
  margin: 0;
  img {
    width: 160px;
    height: 37px;
    margin: 0 auto;
    border: 0;
  }
}
.iconImg {
  width: 24px;
  height: 24px;
  margin-right: 20px;
}
.sideTitle {
  width: 56px;
  height: 14px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255, 1);
  line-height: 14px;
}
// ::v-deep .el-menu-vertical-demo 

</style>