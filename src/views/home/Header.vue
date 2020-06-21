<template>
  <div class="content-one">
    <div class="left">{{title}}</div>
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
  }
};
</script>

<style lang="scss" scoped>
.content-one {
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;;
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
    width: 44px;
    height: 44px;
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