<template>
  <div style="padding-top:30px;">
    <el-card
      shadow="hover"
      :body-style="{padding: '0'}"
      style="padding:30px;height:auto;position: relative;"
    >
      <div class="title">
        <div class="title-top">
          <span class="blue"></span>
          问题标题
        </div>
        <div class="title-bottom">{{question}}</div>
      </div>
      <div class="content">
        <div class="content-title">
          <span class="blue" style="top:155px;"></span>
          沟通内容
        </div>
        <div class="one">
          <div class="one-title">
            <img src="~@/assets/logo.png" alt />
            <span style="margin-right:20px;">{{user}}</span>
            <span>{{time}}</span>
          </div>
          <div
            class="one-content"
          >A：代理升级扣费=（升级后等级开户价格-升级前等级开户价格）x您的代理系数/升级后等级代理系数+1，如您是1级户，网课5级代理升级成4级代理则需要扣费=（388-188）x0.2/0.5+1=81元余额。代理到账金额为开户差价即200元。</div>
        </div>
        <div class="one">
          <div class="one-title">
            <img src="~@/assets/logo.png" alt />
            <span style="margin-right:20px;">{{user}}</span>
            <span>{{time}}</span>
          </div>
          <div
            class="one-content"
          >A：代理升级扣费=（升级后等级开户价格-升级前等级开户价格）x您的代理系数/升级后等级代理系数+1，如您是1级户，网课5级代理升级成4级代理则需要扣费=（388-188）x0.2/0.5+1=81元余额。代理到账金额为开户差价即200元。</div>
        </div>
        <div class="one">
          <div class="one-title">
            <img src="~@/assets/logo.png" alt />
            <span style="margin-right:20px;">{{user}}</span>
            <span>{{time}}</span>
          </div>
          <div
            class="one-content"
          >A：代理升级扣费=（升级后等级开户价格-升级前等级开户价格）x您的代理系数/升级后等级代理系数+1，如您是1级户，网课5级代理升级成4级代理则需要扣费=（388-188）x0.2/0.5+1=81元余额。代理到账金额为开户差价即200元。</div>
        </div>
        <div class="one">
          <div class="one-title">
            <img src="~@/assets/logo.png" alt />
            <span style="margin-right:20px;">{{user}}</span>
            <span>{{time}}</span>
          </div>
          <div
            class="one-content"
          >A：代理升级扣费=（升级后等级开户价格-升级前等级开户价格）x您的代理系数/升级后等级代理系数+1，如您是1级户，网课5级代理升级成4级代理则需要扣费=（388-188）x0.2/0.5+1=81元余额。代理到账金额为开户差价即200元。</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      question: "代理升级的扣费与返利是多少？",
      user: "test",
      time: "2020-06-16 22:41:36"
    };
  },
  mounted() {
    console.log(this.$route.query.id);

    this.id = this.$route.query.id;
  }
};
</script>

<style lang="scss" scoped>
.title {
  height: 100px;
  color: #333;
  border-bottom: 1px solid #dcdcdc;
  .title-top {
    padding-bottom: 30px;
  }
}
.blue {
  display: block;
  width: 3px;
  height: 18px;
  background: #257af6;
  position: absolute;
  left: 0;
  top: 30px;
}
.content {
  padding: 0;
  .content-title {
    height: 70px;
    line-height: 70px;
  }
  .one {
    height: auto;
    box-sizing: border-box;
    padding-top: 20px;
    border-bottom: 1px solid #dcdcdc;
    .one-title {
      display: flex;
      color: #666;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 20px;
      }
    }
    .one-content {
      height: auto;
      padding-left: 60px;
      line-height: 32px;
      margin-bottom: 20px;
      color: #333;
    }
  }
}
.one:last-child {
    border-bottom: 0;
}
</style>