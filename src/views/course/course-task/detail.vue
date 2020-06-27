<template>
  <div>
    <el-col :span="24">
      <div class="top">正确</div>
    </el-col>
    <el-col :span="24">
      <el-card shadow="hover" :body-style="{padding: '0px'}">
        <div class="title">
          <span class="first">系统处理完毕，</span>
          <span class="second">5</span>
          <span class="first">单安排成功，</span>
          <span class="third">8</span>
          <span class="first">单安排失败！</span>
        </div>
        <!-- <div class="content"> -->
          <el-table
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column type="selection" width="55" style="padding-left:5px;"></el-table-column>
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column prop="lessonName" label="教程名称"></el-table-column>
            <el-table-column prop="msg" label="导入信息"></el-table-column>
            <el-table-column prop="buyed" label="已下单的课程"></el-table-column>
            <el-table-column prop="neverBuy" label="未下单的课程"></el-table-column>
            <el-table-column prop="res" label="处理结果">
              <template slot-scope="scope">
                <div style="color:#36A247" v-show="scope.row.tag == 1">{{ scope.row.res }}</div>
                <div style="color:#666" v-show="scope.row.tag == 2">{{ scope.row.res }}</div>
                <div style="color:#F5A623" v-show="scope.row.tag == 3">{{ scope.row.res }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="time" label="处理时间"></el-table-column>
          </el-table>
        <!-- </div> -->
        <div class="bottom">
            <el-row  >
                <el-col :xs="24" :md="8">
                   <el-button class="bottom-btn" type="primary">下载批量结果</el-button>
                </el-col>
                <el-col :xs="24" :md="8">
                  <el-button class="bottom-btn" type="success">选中前往查询订单</el-button>
                </el-col>
                <el-col :xs="24" :md="8">
                  <el-button class="bottom-btn">查询导入历史</el-button>
                </el-col>
            </el-row>
          <div class="right">
           
            
            
          </div>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagesize: 5,
      currpage: 1,
      tableData: [
        {
          lessonName: "1智慧树/知到",
          msg: "中南林业科技大学，13196304048，hmx232425",
          buyed: "网络营销",
          neverBuy: "32",
          res: "没有匹配的课程信息",
          tag: "2",
          time: "2020-06-19 11:23:42"
        },
        {
          lessonName: "2智慧树/知到",
          msg: "中南林业科技大学，13196304048，hmx232425",
          buyed: "网络营销",
          neverBuy: "32",
          res: "成功支付0.20元，您可以订单记录，跟踪订单最新的处理状态。",
          tag: "1",
          time: "2020-06-19 11:23:42"
        },
        {
          lessonName: "3智慧树/知到",
          msg: "中南林业科技大学，13196304048，hmx232425",
          buyed: "网络营销",
          neverBuy: "32",
          res: "订单扣款失败",
          tag: "3",
          time: "2020-06-19 11:23:42"
        },
        {
          lessonName: "4智慧树/知到",
          msg: "中南林业科技大学，13196304048，hmx232425",
          buyed: "网络营销",
          neverBuy: "32",
          res: "没有匹配的课程信息",
          tag: "2",
          time: "2020-06-19 11:23:42"
        },
        {
          lessonName: "2智慧树/知到",
          msg: "中南林业科技大学，13196304048，hmx232425",
          buyed: "网络营销",
          neverBuy: "32",
          res: "成功支付0.20元，您可以订单记录，跟踪订单最新的处理状态。",
          tag: "1",
          time: "2020-06-19 11:23:42"
        },
        {
          lessonName: "3智慧树/知到",
          msg: "中南林业科技大学，13196304048，hmx232425",
          buyed: "网络营销",
          neverBuy: "32",
          res: "订单扣款失败",
          tag: "3",
          time: "2020-06-19 11:23:42"
        },
        {
          lessonName: "4智慧树/知到",
          msg: "中南林业科技大学，13196304048，hmx232425",
          buyed: "网络营销",
          neverBuy: "32",
          res: "没有匹配的课程信息",
          tag: "2",
          time: "2020-06-19 11:23:42"
        },
        {
          lessonName: "2智慧树/知到",
          msg: "中南林业科技大学，13196304048，hmx232425",
          buyed: "网络营销",
          neverBuy: "32",
          res: "成功支付0.20元，您可以订单记录，跟踪订单最新的处理状态。",
          tag: "1",
          time: "2020-06-19 11:23:42"
        },
        {
          lessonName: "3智慧树/知到",
          msg: "中南林业科技大学，13196304048，hmx232425",
          buyed: "网络营销",
          neverBuy: "32",
          res: "订单扣款失败",
          tag: "3",
          time: "2020-06-19 11:23:42"
        },
        {
          lessonName: "4智慧树/知到",
          msg: "中南林业科技大学，13196304048，hmx232425",
          buyed: "网络营销",
          neverBuy: "32",
          res: "没有匹配的课程信息",
          tag: "2",
          time: "2020-06-19 11:23:42"
        }
      ]
    };
  },
  mounted() {
    console.log(this.$route.params.id);
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  height: 50px;
  background: #fff;
  line-height: 50px;
  padding-left: 10px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(102, 102, 102, 1);
  margin-bottom: 30px;
}
.title {
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  // margin-bottom: 10px;
  .first {
    color: #333333;
  }
  .second {
    color: #36a247;
  }
  .third {
    color: #f5a623;
  }
}
.bottom {
  display: flex;
  justify-content: flex-end;
  margin:30px 0;
  .right {
    margin-right: 30px;
  }
}
@media  only screen and (max-width:470px) {
  .bottom {
    // .right {
      .bottom-btn {
        width: 50%!important;
        margin: 0 25%!important;
        margin-bottom: 10px!important;
      }
    // }
  }
}
</style>