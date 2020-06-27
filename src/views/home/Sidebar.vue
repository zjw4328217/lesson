<template>
  <div>
    <h2>
      <img src="~@/assets/logo@2x.png" alt />
    </h2>
    <el-col :span="24">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#262e43"
        text-color="#ffffff"
        router
      >
        <el-menu-item index="home">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <img class="iconImg" src="~@/assets/index@2x.png" alt />
            <span slot="title">系统首页</span>
          </template>
          <!-- <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">代理管理</el-menu-item>
          </el-menu-item-group>-->
        </el-menu-item>
        <el-submenu index="2">
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
        <el-submenu index="3">
          <template slot="title">
            <img class="iconImg" src="~@/assets/manage@2x.png" alt />
            <span class="sideTitle">代理管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">新增代理</el-menu-item>
            <el-menu-item index="3-2">我的代理</el-menu-item>
            <el-menu-item index="3-3">充值处理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <img class="iconImg" src="~@/assets/trade.png" alt />
            <span slot="title">流水管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">订单付款</el-menu-item>
            <el-menu-item index="4-2">财务流水</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="5">
          <template slot="title">
            <img class="iconImg" src="~@/assets/fill@2x.png" alt />
            <span slot="title">发起工单</span>
          </template>
        </el-menu-item>
        <el-menu-item index="6">
          <template slot="title">
            <img class="iconImg" src="~@/assets/help@2x.png" alt />
            <span slot="title">使用帮助</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  width: 248px;
  height: 100px;
  padding-top: 30px;
  padding-left: 45px;
  box-sizing: border-box;
  img {
    width: 160px;
    height: 37px;
    margin: 0 auto;
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
</style>