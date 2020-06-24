<template>
  <div class="content-one">
    <!-- <div class="left">{{title}}</div> -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="right">
      <img src="~@/assets/logo.png" />
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "系统首页"
    };
<<<<<<< HEAD
  },
  mounted() {
    // this.title = this.$route
    console.log(this.$router.history.current);
    this.title =this.$router.history.current.meta.title;
=======
>>>>>>> 5760e282aee17ed47ce777b64a2b3462f0d5848d
  }
};
</script>

<style lang="scss" scoped>
.content-one {
  display: flex;
  justify-content: space-between;
<<<<<<< HEAD
  height: 60px;
  line-height: 60px;
  align-items: center;
  padding-left: 20px;
=======
  height: 70px;
  align-items: center;;
>>>>>>> 5760e282aee17ed47ce777b64a2b3462f0d5848d
}
.left {
  width: 100px;
  height: 18px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: rgba(51, 51, 51, 1);
  line-height: 18px;
}
.right {
<<<<<<< HEAD
    margin-right: 38px;
    width: 35px;
    height: 35px;
=======
    width: 44px;
    height: 44px;
>>>>>>> 5760e282aee17ed47ce777b64a2b3462f0d5848d
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
</style>